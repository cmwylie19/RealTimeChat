(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "./evaluate-formatters", "./evaluate-transforms", "./merge-props"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("./evaluate-formatters"), require("./evaluate-transforms"), require("./merge-props"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.evaluateFormatters, global.evaluateTransforms, global.mergeProps);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _evaluateFormatters, _evaluateTransforms, _mergeProps) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.HeaderRow = undefined;

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var React = _interopRequireWildcard(_react);

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
   * header-row.tsx
   *
   * Forked from reactabular-table version 8.14.0
   * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
   */


  const HeaderRow = exports.HeaderRow = ({
    rowData,
    rowIndex,
    renderers,
    onRow = () => Object
  }) => {
    return React.createElement(renderers.row, onRow(rowData, {
      rowIndex
    }), rowData.map((column, columnIndex) => {
      const {
        property,
        header = {},
        props = {}
      } = column;
      const evaluatedProperty = property || header && header.property;
      const {
        label,
        transforms = [],
        formatters = []
      } = header;
      const extraParameters = {
        columnIndex,
        property: evaluatedProperty,
        column
      };
      const transformedProps = (0, _evaluateTransforms.evaluateTransforms)(transforms, label, extraParameters);

      if (!transformedProps) {
        // tslint:disable-next-line:no-console
        console.warn('Table.Header - Failed to receive a transformed result'); // eslint-disable-line max-len, no-console
      }

      return React.createElement(renderers.cell, _objectSpread({
        key: `${columnIndex}-header`
      }, (0, _mergeProps.mergeProps)(props, header && header.props, transformedProps)), transformedProps.children || (0, _evaluateFormatters.evaluateFormatters)(formatters)(label, extraParameters));
    }));
  };

  HeaderRow.propTypes = {
    rowData: _propTypes2.default.any.isRequired,
    rowIndex: _propTypes2.default.number.isRequired,
    renderers: _propTypes2.default.any.isRequired,
    onRow: _propTypes2.default.any
  };
});
//# sourceMappingURL=header-row.js.map