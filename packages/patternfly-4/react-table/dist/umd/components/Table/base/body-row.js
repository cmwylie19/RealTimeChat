(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "lodash", "react", "./columns-are-equal", "./evaluate-formatters", "./evaluate-transforms", "./merge-props"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("lodash"), require("react"), require("./columns-are-equal"), require("./evaluate-formatters"), require("./evaluate-transforms"), require("./merge-props"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.lodash, global.react, global.columnsAreEqual, global.evaluateFormatters, global.evaluateTransforms, global.mergeProps);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _lodash, _react, _columnsAreEqual, _evaluateFormatters, _evaluateTransforms, _mergeProps) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BodyRow = undefined;

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
   * body-row.tsx
   *
   * Forked from reactabular-table version 8.14.0
   * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
   */


  class BodyRow extends React.Component {
    shouldComponentUpdate(nextProps) {
      const {
        columns,
        rowData
      } = this.props; // Check for row based override.

      const {
        renderers
      } = nextProps;

      if (renderers && renderers.row && renderers.row.shouldComponentUpdate) {
        if ((0, _lodash.isFunction)(renderers.row.shouldComponentUpdate)) {
          return renderers.row.shouldComponentUpdate.call(this, nextProps, {}, {});
        }

        return true;
      }

      return !((0, _columnsAreEqual.columnsAreEqual)(columns, nextProps.columns) && (0, _lodash.isEqual)(rowData, nextProps.rowData));
    }

    render() {
      const {
        columns,
        renderers,
        onRow,
        rowKey,
        rowIndex,
        rowData
      } = this.props;
      return React.createElement(renderers.row, onRow(rowData, {
        rowIndex,
        rowKey
      }), columns.map((column, columnIndex) => {
        const {
          property,
          cell,
          props
        } = column;
        const evaluatedProperty = property || cell && cell.property;
        const {
          transforms = [],
          formatters = []
        } = cell || {};
        const extraParameters = {
          columnIndex,
          property: evaluatedProperty,
          column,
          rowData,
          rowIndex,
          rowKey
        };
        const transformed = (0, _evaluateTransforms.evaluateTransforms)(transforms, rowData[evaluatedProperty], extraParameters);

        if (!transformed) {
          // tslint:disable-next-line:no-console
          console.warn('Table.Body - Failed to receive a transformed result');
        }

        return React.createElement(renderers.cell, _objectSpread({
          key: `${columnIndex}-cell`
        }, (0, _mergeProps.mergeProps)(props, cell && cell.props, transformed)), transformed.children || (0, _evaluateFormatters.evaluateFormatters)(formatters)(rowData[`_${evaluatedProperty}`] || rowData[evaluatedProperty], extraParameters));
      }));
    }

  }

  exports.BodyRow = BodyRow;

  _defineProperty(BodyRow, "propTypes", {
    columns: _propTypes2.default.any.isRequired,
    renderers: _propTypes2.default.any.isRequired,
    onRow: _propTypes2.default.any,
    rowIndex: _propTypes2.default.number.isRequired,
    rowData: _propTypes2.default.any.isRequired,
    rowKey: _propTypes2.default.string.isRequired
  });

  _defineProperty(BodyRow, "defaultProps", {
    onRow: (...args) => Object
  });
});
//# sourceMappingURL=body-row.js.map