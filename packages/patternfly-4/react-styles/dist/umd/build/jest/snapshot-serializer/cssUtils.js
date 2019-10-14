(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "css", "jsdom"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("css"), require("jsdom"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.css, global.jsdom);
    global.undefined = mod.exports;
  }
})(this, function (exports, _css, _jsdom) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getStyles = exports.getSelectors = undefined;

  var css = _interopRequireWildcard(_css);

  var jsdom = _interopRequireWildcard(_jsdom);

  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();

    _getRequireWildcardCache = function () {
      return cache;
    };

    return cache;
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    var cache = _getRequireWildcardCache();

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};

    if (obj != null) {
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
  }

  const {
    JSDOM
  } = jsdom;

  function getSelectors(nodes) {
    return nodes.reduce((selectors, node) => {
      const props = typeof node.props === 'function' ? node.props() : node.props;
      return [...selectors, getSelectorsFromProps(props)];
    }, []);
  }

  function getSelectorsFromProps(props = {}) {
    const className = props.className || props.class;

    if (className) {
      return className.toString().split(' ').map(cn => `.${cn}`);
    }

    return [];
  }

  function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  }

  function rgbToHex(r, g, b) {
    return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
  }

  function getComputedStyles(classNames, cssStr) {
    const dom = new JSDOM(`<!DOCTYPE html>
      <head><style>${cssStr}</style></head>
      <body><div class="${classNames}"></div>
      </body>`);
    const cs = dom.window.getComputedStyle(dom.window.document.body.children[0]);
    const values = {};

    for (let i = 0; i < cs.length; i++) {
      const key = cs[i];
      const value = cs.getPropertyValue(key).replace(/rgb\(([\d|,|\s]+)\)/g, (full, match) => rgbToHex(...match.split(',').map(n => parseInt(n, 10))));
      values[key] = value;
    }

    return values;
  }

  function getStylesAST(bufferedStyles, globalCSS = '') {
    const ast = css.parse(`${globalCSS}\n${bufferedStyles}`);
    const vars = {};

    const getVarValue = value => value.replace(/var\(([\w|-]*)\)/g, (full, match) => vars[match]);

    ast.stylesheet.rules = ast.stylesheet.rules.map(rule => {
      if (rule.type === 'rule') {
        rule.declarations = rule.declarations.map(decl => {
          if (decl.type === 'declaration') {
            const {
              property,
              value
            } = decl;

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
    const selector = nodeSelectors.join('');
    const cssString = `${selector} {
    ${Object.keys(computedStyles).map(k => `${k}: ${computedStyles[k]};`).join('\n')}
  }`;
    return css.stringify(css.parse(cssString));
  }

  function getStyles(nodeSelectors, insertedStyles, globalCSS) {
    if (!nodeSelectors.length) {
      return '';
    }

    const ast = getStylesAST(insertedStyles, globalCSS);
    return nodeSelectors.reduce((acc, sel) => {
      if (!sel.length) {
        return acc;
      }

      const re = new RegExp(`(${sel.join('|')})`, 'g');

      if (!re.test(insertedStyles)) {
        return acc;
      }

      const computedStyles = getComputedStyles(sel.map(s => s.replace('.', '')).join(' '), css.stringify(ast));
      return [...acc, formatComputedStyles(sel, computedStyles)];
    }, []).join('\n');
  }

  exports.getSelectors = getSelectors;
  exports.getStyles = getStyles;
});
//# sourceMappingURL=cssUtils.js.map