(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "@patternfly/react-core"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("@patternfly/react-core"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.reactCore);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _reactCore) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ActionsColumn = undefined;

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

  class ActionsColumn extends React.Component {
    constructor(props) {
      super(props);

      _defineProperty(this, "onToggle", isOpen => {
        this.setState({
          isOpen
        });
      });

      _defineProperty(this, "onSelect", (event, onClick) => {
        const {
          rowData,
          extraData
        } = this.props;
        event.preventDefault(); // tslint:disable-next-line:no-unused-expression

        onClick && onClick(event, extraData && extraData.rowIndex, rowData, extraData);
        this.setState({
          isOpen: !this.state.isOpen
        });
      });

      this.state = {
        isOpen: false
      };
    }

    render() {
      const {
        isOpen
      } = this.state;
      const {
        items,
        children,
        dropdownPosition,
        dropdownDirection,
        isDisabled
      } = this.props;
      return React.createElement(React.Fragment, null, React.createElement(_reactCore.Dropdown, {
        toggle: React.createElement(_reactCore.KebabToggle, {
          isDisabled: isDisabled,
          onToggle: this.onToggle
        }),
        position: dropdownPosition,
        direction: dropdownDirection,
        isOpen: isOpen,
        dropdownItems: items.map((_ref, key) => {
          let {
            title,
            itemKey,
            onClick,
            isSeparator
          } = _ref,
              props = _objectWithoutProperties(_ref, ["title", "itemKey", "onClick", "isSeparator"]);

          return isSeparator ? React.createElement(_reactCore.DropdownSeparator, _extends({}, props, {
            key: itemKey || key,
            "data-key": itemKey || key
          })) : React.createElement(_reactCore.DropdownItem, _extends({
            onClick: event => this.onSelect(event, onClick)
          }, props, {
            key: itemKey || key,
            "data-key": itemKey || key
          }), title);
        }),
        isPlain: true
      }), children);
    }

  }

  exports.ActionsColumn = ActionsColumn;

  _defineProperty(ActionsColumn, "propTypes", {
    children: _propTypes2.default.node,
    items: _propTypes2.default.arrayOf(_propTypes2.default.any),
    isDisabled: _propTypes2.default.bool,
    dropdownPosition: _propTypes2.default.any,
    dropdownDirection: _propTypes2.default.any,
    rowData: _propTypes2.default.any,
    extraData: _propTypes2.default.any
  });

  _defineProperty(ActionsColumn, "defaultProps", {
    children: null,
    items: [],
    dropdownPosition: _reactCore.DropdownPosition.right,
    dropdownDirection: _reactCore.DropdownDirection.down,
    rowData: {},
    extraData: {}
  });
});
//# sourceMappingURL=ActionsColumn.js.map