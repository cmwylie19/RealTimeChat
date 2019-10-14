(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "./provider", "./header-row"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("./provider"), require("./header-row"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.provider, global.headerRow);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _provider, _headerRow) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Header = undefined;

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
   * header.tsx
   *
   * Forked from reactabular-table version 8.14.0
   * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
   */


  class BaseHeader extends React.Component {
    render() {
      const _this$props = this.props,
            {
        children,
        headerRows,
        onRow,
        renderers,
        columns
      } = _this$props,
            props = _objectWithoutProperties(_this$props, ["children", "headerRows", "onRow", "renderers", "columns"]); // If headerRows aren't passed, default to bodyColumns as header rows


      return React.createElement(renderers.header.wrapper, props, [(headerRows || [columns]).map((rowData, rowIndex) => React.createElement(_headerRow.HeaderRow, {
        key: `${rowIndex}-header-row`,
        renderers: renderers.header,
        onRow,
        rowData,
        rowIndex
      }))].concat(children));
    }

  }

  _defineProperty(BaseHeader, "propTypes", {
    headerRows: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.any), _propTypes2.default.any]),
    children: _propTypes2.default.node,
    columns: _propTypes2.default.any,
    onRow: _propTypes2.default.any,
    className: _propTypes2.default.string
  });

  const Header = exports.Header = props => React.createElement(_provider.ProviderContext.Consumer, null, ({
    columns,
    renderers
  }) => React.createElement(BaseHeader, _extends({
    columns: columns,
    renderers: renderers
  }, props)));

  Header.propTypes = {
    headerRows: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.any), _propTypes2.default.any]),
    children: _propTypes2.default.node,
    columns: _propTypes2.default.any,
    onRow: _propTypes2.default.any,
    className: _propTypes2.default.string
  };
});
//# sourceMappingURL=header.js.map