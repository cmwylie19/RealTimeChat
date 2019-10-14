"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSelectors = getSelectors;
exports.getStyles = getStyles;

var css = _interopRequireWildcard(require("css"));

var jsdom = _interopRequireWildcard(require("jsdom"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var JSDOM = jsdom.JSDOM;

function getSelectors(nodes) {
  return nodes.reduce(function (selectors, node) {
    var props = typeof node.props === 'function' ? node.props() : node.props;
    return [].concat(_toConsumableArray(selectors), [getSelectorsFromProps(props)]);
  }, []);
}

function getSelectorsFromProps() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var className = props.className || props["class"];

  if (className) {
    return className.toString().split(' ').map(function (cn) {
      return ".".concat(cn);
    });
  }

  return [];
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? "0".concat(hex) : hex;
}

function rgbToHex(r, g, b) {
  return "#".concat(componentToHex(r)).concat(componentToHex(g)).concat(componentToHex(b));
}

function getComputedStyles(classNames, cssStr) {
  var dom = new JSDOM("<!DOCTYPE html>\n      <head><style>".concat(cssStr, "</style></head>\n      <body><div class=\"").concat(classNames, "\"></div>\n      </body>"));
  var cs = dom.window.getComputedStyle(dom.window.document.body.children[0]);
  var values = {};

  for (var i = 0; i < cs.length; i++) {
    var key = cs[i];
    var value = cs.getPropertyValue(key).replace(/rgb\(([\d|,|\s]+)\)/g, function (full, match) {
      return rgbToHex.apply(void 0, _toConsumableArray(match.split(',').map(function (n) {
        return parseInt(n, 10);
      })));
    });
    values[key] = value;
  }

  return values;
}

function getStylesAST(bufferedStyles) {
  var globalCSS = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var ast = css.parse("".concat(globalCSS, "\n").concat(bufferedStyles));
  var vars = {};

  var getVarValue = function getVarValue(value) {
    return value.replace(/var\(([\w|-]*)\)/g, function (full, match) {
      return vars[match];
    });
  };

  ast.stylesheet.rules = ast.stylesheet.rules.map(function (rule) {
    if (rule.type === 'rule') {
      rule.declarations = rule.declarations.map(function (decl) {
        if (decl.type === 'declaration') {
          var property = decl.property,
              value = decl.value;

          if (property.startsWith('--')) {
            vars[property] = getVarValue(value);
          }

          decl.value = getVarValue(value);
        }

        return decl;
      });
    }

    return rule;
  });
  return ast;
}

function formatComputedStyles(nodeSelectors, computedStyles) {
  var selector = nodeSelectors.join('');
  var cssString = "".concat(selector, " {\n    ").concat(Object.keys(computedStyles).map(function (k) {
    return "".concat(k, ": ").concat(computedStyles[k], ";");
  }).join('\n'), "\n  }");
  return css.stringify(css.parse(cssString));
}

function getStyles(nodeSelectors, insertedStyles, globalCSS) {
  if (!nodeSelectors.length) {
    return '';
  }

  var ast = getStylesAST(insertedStyles, globalCSS);
  return nodeSelectors.reduce(function (acc, sel) {
    if (!sel.length) {
      return acc;
    }

    var re = new RegExp("(".concat(sel.join('|'), ")"), 'g');

    if (!re.test(insertedStyles)) {
      return acc;
    }

    var computedStyles = getComputedStyles(sel.map(function (s) {
      return s.replace('.', '');
    }).join(' '), css.stringify(ast));
    return [].concat(_toConsumableArray(acc), [formatComputedStyles(sel, computedStyles)]);
  }, []).join('\n');
}
//# sourceMappingURL=cssUtils.js.map