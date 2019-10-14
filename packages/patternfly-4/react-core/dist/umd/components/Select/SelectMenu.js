(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "@patternfly/react-styles/css/components/Select/select", "@patternfly/react-styles/css/components/Form/form", "@patternfly/react-styles", "./selectConstants", 'focus-trap-react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("@patternfly/react-styles/css/components/Select/select"), require("@patternfly/react-styles/css/components/Form/form"), require("@patternfly/react-styles"), require("./selectConstants"), require('focus-trap-react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.select, global.form, global.reactStyles, global.selectConstants, global.focusTrapReact);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _select, _form, _reactStyles, _selectConstants, FocusTrap) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SelectMenu = undefined;

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var React = _interopRequireWildcard(_react);

  var _select2 = _interopRequireDefault(_select);

  var _form2 = _interopRequireDefault(_form);

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

  class SelectMenu extends React.Component {
    extendChildren() {
      const {
        children,
        isGrouped
      } = this.props;

      if (isGrouped) {
        let index = 0;
        return React.Children.map(children, group => React.cloneElement(group, {
          titleId: group.props.label.replace(/\W/g, '-'),
          children: group.props.children.map(option => this.cloneOption(option, index++))
        }));
      }

      return React.Children.map(this.props.children, (child, index) => this.cloneOption(child, index));
    }

    cloneOption(child, index) {
      const {
        selected,
        sendRef,
        keyHandler
      } = this.props;
      const isSelected = selected && selected.constructor === Array ? selected && Array.isArray(selected) && selected.includes(child.props.value) : selected === child.props.value;
      return React.cloneElement(child, {
        id: `${child.props.value ? child.props.value.toString() : ''}-${index}`,
        isSelected,
        sendRef,
        keyHandler,
        index
      });
    }

    extendCheckboxChildren(props) {
      const {
        children,
        isGrouped,
        checked,
        sendRef,
        keyHandler
      } = this.props;
      const {
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledBy
      } = props;

      if (isGrouped) {
        let index = 0;
        return React.Children.map(children, group => React.cloneElement(group, {
          titleId: group.props.label.replace(/\W/g, '-'),
          children: React.createElement("fieldset", {
            "aria-labelledby": group.props.label.replace(/\W/g, '-'),
            className: (0, _reactStyles.css)(_form2.default.formFieldset)
          }, group.props.children.map(option => React.cloneElement(option, {
            isChecked: checked && checked.includes(option.props.value),
            sendRef,
            keyHandler,
            index: index++
          })))
        }));
      }

      return React.createElement("fieldset", _extends({}, props, {
        "aria-label": ariaLabel,
        "aria-labelledby": !ariaLabel && ariaLabelledBy || null,
        className: (0, _reactStyles.css)(_form2.default.formFieldset)
      }), React.Children.map(children, (child, index) => React.cloneElement(child, {
        isChecked: checked && checked.includes(child.props.value),
        sendRef,
        keyHandler,
        index
      })));
    }

    render() {
      const _this$props = this.props,
            {
        children,
        className,
        isExpanded,
        openedOnEnter,
        selected,
        checked,
        isGrouped,
        sendRef,
        keyHandler,
        maxHeight
      } = _this$props,
            props = _objectWithoutProperties(_this$props, ["children", "className", "isExpanded", "openedOnEnter", "selected", "checked", "isGrouped", "sendRef", "keyHandler", "maxHeight"]);

      return React.createElement(_selectConstants.SelectConsumer, null, ({
        variant
      }) => React.createElement(React.Fragment, null, variant !== _selectConstants.SelectVariant.checkbox && React.createElement("ul", _extends({
        className: (0, _reactStyles.css)(_select2.default.selectMenu, className),
        role: "listbox"
      }, maxHeight && {
        style: {
          maxHeight,
          overflow: 'auto'
        }
      }, props), this.extendChildren()), variant === _selectConstants.SelectVariant.checkbox && React.Children.count(children) > 0 && React.createElement(FocusTrap, {
        focusTrapOptions: {
          clickOutsideDeactivates: true
        }
      }, React.createElement("div", _extends({
        className: (0, _reactStyles.css)(_select2.default.selectMenu, className)
      }, maxHeight && {
        style: {
          maxHeight,
          overflow: 'auto'
        }
      }), React.createElement("form", {
        noValidate: true,
        className: (0, _reactStyles.css)(_form2.default.form)
      }, React.createElement("div", {
        className: (0, _reactStyles.css)(_form2.default.formGroup)
      }, this.extendCheckboxChildren(props))))), variant === _selectConstants.SelectVariant.checkbox && React.Children.count(children) === 0 && React.createElement("div", _extends({
        className: (0, _reactStyles.css)(_select2.default.selectMenu, className)
      }, maxHeight && {
        style: {
          maxHeight,
          overflow: 'auto'
        }
      }), React.createElement("form", {
        noValidate: true,
        className: (0, _reactStyles.css)(_form2.default.form)
      }, React.createElement("div", {
        className: (0, _reactStyles.css)(_form2.default.formGroup)
      })))));
    }

  }

  exports.SelectMenu = SelectMenu;

  _defineProperty(SelectMenu, "propTypes", {
    children: _propTypes2.default.arrayOf(_propTypes2.default.element).isRequired,
    className: _propTypes2.default.string,
    isExpanded: _propTypes2.default.bool,
    isGrouped: _propTypes2.default.bool,
    selected: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.any, _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.any]))]),
    checked: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.any])),
    openedOnEnter: _propTypes2.default.bool,
    maxHeight: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    sendRef: _propTypes2.default.func,
    keyHandler: _propTypes2.default.func
  });

  _defineProperty(SelectMenu, "defaultProps", {
    className: '',
    isExpanded: false,
    isGrouped: false,
    openedOnEnter: false,
    selected: '',
    maxHeight: '',
    sendRef: Function.prototype,
    keyHandler: Function.prototype
  });
});
//# sourceMappingURL=SelectMenu.js.map