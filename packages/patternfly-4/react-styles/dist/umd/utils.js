(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "camel-case", "emotion"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("camel-case"), require("emotion"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.camelCase, global.emotion);
    global.undefined = mod.exports;
  }
})(this, function (exports, _camelCase, _emotion) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.isValidStyleDeclaration = isValidStyleDeclaration;
  exports.createStyleDeclaration = createStyleDeclaration;
  exports.isModifier = isModifier;
  exports.getModifier = getModifier;
  exports.formatClassName = formatClassName;
  exports.getCSSClasses = getCSSClasses;
  exports.getClassName = getClassName;
  exports.getInsertedStyles = getInsertedStyles;
  exports.pickProperties = pickProperties;

  var _camelCase2 = _interopRequireDefault(_camelCase);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(source, true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function isValidStyleDeclaration(styleObj) {
    return Boolean(styleObj) && typeof styleObj.__className === 'string' && typeof styleObj.__inject === 'function';
  }

  function createStyleDeclaration(className, rawCss) {
    return {
      __className: className.replace('.', '').trim(),

      __inject() {
        (0, _emotion.injectGlobal)(rawCss);
      }

    };
  }

  function isModifier(className) {
    return Boolean(className && className.startsWith) && className.startsWith('.pf-m-');
  }

  function getModifier(styleObj, modifier, defaultModifier) {
    if (!styleObj) {
      return null;
    }

    const modifiers = styleObj.modifiers || styleObj;
    return modifiers[modifier] || modifiers[(0, _camelCase2.default)(modifier)] || defaultModifier;
  }

  function formatClassName(className) {
    return (0, _camelCase2.default)(className.replace(/pf-((c|l|m|u|is|has)-)?/g, ''));
  }

  function getCSSClasses(cssString) {
    return cssString.match(/(\.)(?!\d)([^\s\.,{\[>+~#:)]*)(?![^{]*})/g); //eslint-disable-line
  }

  function getClassName(styleObj = {}) {
    if (typeof styleObj === 'string') {
      return styleObj;
    }

    return isValidStyleDeclaration(styleObj) ? styleObj.__className : '';
  }

  function getInsertedStyles() {
    return Object.values(_emotion.caches.inserted);
  }

  function pickProperties(object, properties) {
    return properties.reduce((picked, property) => _objectSpread({}, picked, {
      [property]: object[property]
    }), {});
  }
});
//# sourceMappingURL=utils.js.map