(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "lodash", "classnames"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("lodash"), require("classnames"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.lodash, global.classnames);
    global.undefined = mod.exports;
  }
})(this, function (exports, _lodash, _classnames) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.mergeProps = mergeProps;

  var _classnames2 = _interopRequireDefault(_classnames);

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
  /**
   * merge-props.js
   *
   * Forked from reactabular-table version 8.14.0
   * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
   */


  function mergeProps(...props) {
    const firstProps = props[0];
    const restProps = props.slice(1);

    if (!restProps.length) {
      return (0, _lodash.mergeWith)({}, firstProps);
    } // Avoid mutating the first prop collection


    return (0, _lodash.mergeWith)((0, _lodash.mergeWith)({}, firstProps), ...restProps, (a, b, key) => {
      if (key === 'children') {
        // Children have to be merged in reverse order for Reactabular
        // logic to work.
        return _objectSpread({}, b, {}, a);
      }

      if (key === 'className') {
        // Process class names through classNames to merge properly
        // as a string.
        return (0, _classnames2.default)(a, b);
      }

      return undefined;
    });
  }
});
//# sourceMappingURL=merge-props.js.map