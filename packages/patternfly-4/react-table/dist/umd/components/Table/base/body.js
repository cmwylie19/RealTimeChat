(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "lodash", "./resolve-row-key", "./body-row", "./provider"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("lodash"), require("./resolve-row-key"), require("./body-row"), require("./provider"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.lodash, global.resolveRowKey, global.bodyRow, global.provider);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _lodash, _resolveRowKey, _bodyRow, _provider) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Body = undefined;

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

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
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
   * body.tsx
   *
   * Forked from reactabular-table version 8.14.0
   * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
   */


  class BaseBody extends React.Component {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "omitOnRow", props => {
        const {
          onRow
        } = props,
              ret = _objectWithoutProperties(props, ["onRow"]);

        return ret;
      });
    }

    shouldComponentUpdate(nextProps) {
      // Skip checking props against `onRow` since that can be bound at render().
      // That's not particularly good practice but you never know how the users
      // prefer to define the handler.
      // Check for wrapper based override.
      const {
        renderers
      } = nextProps;

      if (renderers && renderers.body && renderers.body.wrapper && renderers.body.wrapper.shouldComponentUpdate) {
        if ((0, _lodash.isFunction)(renderers.body.wrapper.shouldComponentUpdate)) {
          return renderers.body.wrapper.shouldComponentUpdate.call(this, nextProps, {}, {});
        }

        return true;
      }

      return !(0, _lodash.isEqual)(this.omitOnRow(this.props), this.omitOnRow(nextProps));
    }

    render() {
      const _this$props = this.props,
            {
        onRow,
        rows,
        rowKey,
        columns,
        renderers
      } = _this$props,
            props = _objectWithoutProperties(_this$props, ["onRow", "rows", "rowKey", "columns", "renderers"]);

      const children = rows.map((rowData, index) => {
        const key = (0, _resolveRowKey.resolveRowKey)({
          rowData,
          rowIndex: index,
          rowKey
        });
        return React.createElement(_bodyRow.BodyRow, {
          key,
          renderers: renderers.body,
          onRow,
          rowKey: key,
          rowIndex: index,
          rowData,
          columns
        });
      });
      return React.createElement(renderers.body.wrapper, props, children);
    }

  }

  _defineProperty(BaseBody, "propTypes", {
    onRow: _propTypes2.default.any,
    rows: _propTypes2.default.any.isRequired,
    rowKey: _propTypes2.default.any,
    columns: _propTypes2.default.any,
    mappedRows: _propTypes2.default.any,
    className: _propTypes2.default.string
  });

  _defineProperty(BaseBody, "defaultProps", {
    onRow: (...args) => Object
  });

  const Body = exports.Body = props => React.createElement(_provider.ProviderContext.Consumer, null, ({
    columns,
    renderers
  }) => React.createElement(BaseBody, _extends({
    columns: columns,
    renderers: renderers
  }, props)));

  Body.propTypes = {
    onRow: _propTypes2.default.any,
    rows: _propTypes2.default.any.isRequired,
    rowKey: _propTypes2.default.any,
    columns: _propTypes2.default.any,
    mappedRows: _propTypes2.default.any,
    className: _propTypes2.default.string
  };
});
//# sourceMappingURL=body.js.map