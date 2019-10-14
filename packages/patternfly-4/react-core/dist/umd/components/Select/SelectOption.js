(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "@patternfly/react-styles/css/components/Select/select", "@patternfly/react-styles/css/components/Check/check", "@patternfly/react-styles", "@patternfly/react-icons", "./selectConstants"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("@patternfly/react-styles/css/components/Select/select"), require("@patternfly/react-styles/css/components/Check/check"), require("@patternfly/react-styles"), require("@patternfly/react-icons"), require("./selectConstants"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.select, global.check, global.reactStyles, global.reactIcons, global.selectConstants);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _select, _check, _reactStyles, _reactIcons, _selectConstants) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SelectOption = undefined;

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var React = _interopRequireWildcard(_react);

  var _select2 = _interopRequireDefault(_select);

  var _check2 = _interopRequireDefault(_check);

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

  class SelectOption extends React.Component {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "ref", React.createRef());

      _defineProperty(this, "onKeyDown", event => {
        if (event.key === _selectConstants.KeyTypes.Tab) {
          return;
        }

        event.preventDefault();

        if (event.key === _selectConstants.KeyTypes.ArrowUp) {
          this.props.keyHandler(this.props.index, 'up');
        } else if (event.key === _selectConstants.KeyTypes.ArrowDown) {
          this.props.keyHandler(this.props.index, 'down');
        } else if (event.key === _selectConstants.KeyTypes.Enter) {
          this.ref.current.click();

          if (this.context.variant === _selectConstants.SelectVariant.checkbox) {
            this.ref.current.focus();
          }
        }
      });
    }

    componentDidMount() {
      this.props.sendRef(this.ref.current, this.props.index);
    }

    componentDidUpdate() {
      this.props.sendRef(this.ref.current, this.props.index);
    }

    render() {
      const _this$props = this.props,
            {
        children,
        className,
        value,
        onClick,
        isDisabled,
        isPlaceholder,
        isSelected,
        isChecked,
        isFocused,
        sendRef,
        keyHandler,
        index
      } = _this$props,
            props = _objectWithoutProperties(_this$props, ["children", "className", "value", "onClick", "isDisabled", "isPlaceholder", "isSelected", "isChecked", "isFocused", "sendRef", "keyHandler", "index"]);

      return React.createElement(_selectConstants.SelectConsumer, null, ({
        onSelect,
        onClose,
        variant
      }) => React.createElement(React.Fragment, null, variant !== _selectConstants.SelectVariant.checkbox && React.createElement("li", {
        role: "presentation"
      }, React.createElement("button", _extends({}, props, {
        className: (0, _reactStyles.css)(_select2.default.selectMenuItem, isSelected && _select2.default.modifiers.selected, isDisabled && _select2.default.modifiers.disabled, isFocused && _select2.default.modifiers.focus, className),
        onClick: event => {
          if (!isDisabled) {
            onClick(event);
            onSelect(event, value, isPlaceholder);
            onClose();
          }
        },
        role: "option",
        "aria-selected": isSelected || null,
        ref: this.ref,
        onKeyDown: this.onKeyDown,
        type: "button"
      }), children || value.toString(), isSelected && React.createElement(_reactIcons.CheckIcon, {
        className: (0, _reactStyles.css)(_select2.default.selectMenuItemIcon),
        "aria-hidden": true
      }))), variant === _selectConstants.SelectVariant.checkbox && React.createElement("label", _extends({}, props, {
        className: (0, _reactStyles.css)(_check2.default.check, _select2.default.selectMenuItem, isDisabled && _select2.default.modifiers.disabled, className),
        onKeyDown: this.onKeyDown
      }), React.createElement("input", {
        id: value.toString(),
        className: (0, _reactStyles.css)(_check2.default.checkInput),
        type: "checkbox",
        onChange: event => {
          if (!isDisabled) {
            onClick(event);
            onSelect(event, value);
          }
        },
        ref: this.ref,
        defaultChecked: isChecked || false,
        disabled: isDisabled
      }), React.createElement("span", {
        className: (0, _reactStyles.css)(_check2.default.checkLabel, isDisabled && _select2.default.modifiers.disabled)
      }, children || value.toString()))));
    }

  }

  exports.SelectOption = SelectOption;

  _defineProperty(SelectOption, "propTypes", {
    children: _propTypes2.default.node,
    className: _propTypes2.default.string,
    index: _propTypes2.default.number,
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({})]),
    isDisabled: _propTypes2.default.bool,
    isPlaceholder: _propTypes2.default.bool,
    isSelected: _propTypes2.default.bool,
    isChecked: _propTypes2.default.bool,
    isFocused: _propTypes2.default.bool,
    sendRef: _propTypes2.default.func,
    keyHandler: _propTypes2.default.func,
    onClick: _propTypes2.default.func
  });

  _defineProperty(SelectOption, "defaultProps", {
    className: '',
    value: '',
    index: 0,
    isDisabled: false,
    isPlaceholder: false,
    isSelected: false,
    isChecked: false,
    isFocused: false,
    onClick: Function.prototype,
    sendRef: Function.prototype,
    keyHandler: Function.prototype
  });
});
//# sourceMappingURL=SelectOption.js.map