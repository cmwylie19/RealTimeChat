(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "@patternfly/react-styles/css/components/AppLauncher/app-launcher", "@patternfly/react-icons", "../Dropdown", "../Dropdown/DropdownWithContext"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("@patternfly/react-styles/css/components/AppLauncher/app-launcher"), require("@patternfly/react-icons"), require("../Dropdown"), require("../Dropdown/DropdownWithContext"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.appLauncher, global.reactIcons, global.Dropdown, global.DropdownWithContext);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _appLauncher, _reactIcons, _Dropdown, _DropdownWithContext) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ApplicationLauncher = undefined;

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var React = _interopRequireWildcard(_react);

  var _appLauncher2 = _interopRequireDefault(_appLauncher);

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

  class ApplicationLauncher extends React.Component {
    render() {
      const _this$props = this.props,
            {
        'aria-label': ariaLabel,
        isOpen,
        onToggle,
        toggleIcon,
        onSelect,
        isDisabled,
        className,
        isGrouped,
        dropdownItems,
        items,
        ref
      } = _this$props,
            props = _objectWithoutProperties(_this$props, ["aria-label", "isOpen", "onToggle", "toggleIcon", "onSelect", "isDisabled", "className", "isGrouped", "dropdownItems", "items", "ref"]);

      return React.createElement(_Dropdown.DropdownContext.Provider, {
        value: {
          onSelect,
          menuClass: _appLauncher2.default.appLauncherMenu,
          itemClass: _appLauncher2.default.appLauncherMenuItem,
          toggleClass: _appLauncher2.default.appLauncherToggle,
          baseClass: _appLauncher2.default.appLauncher,
          baseComponent: 'nav',
          sectionClass: _appLauncher2.default.appLauncherGroup,
          sectionTitleClass: _appLauncher2.default.appLauncherGroupTitle,
          sectionComponent: 'section',
          disabledClass: _appLauncher2.default.modifiers.disabled,
          hoverClass: _appLauncher2.default.modifiers.hover,
          separatorClass: _appLauncher2.default.appLauncherSeparator
        }
      }, React.createElement(_DropdownWithContext.DropdownWithContext, _extends({}, props, {
        dropdownItems: items.length ? items : dropdownItems,
        isOpen: isOpen,
        className: className,
        "aria-label": ariaLabel,
        toggle: React.createElement(_Dropdown.DropdownToggle, {
          iconComponent: null,
          isOpen: isOpen,
          onToggle: onToggle,
          isDisabled: isDisabled,
          "aria-label": ariaLabel
        }, toggleIcon),
        isGrouped: isGrouped
      })));
    }

  }

  exports.ApplicationLauncher = ApplicationLauncher;

  _defineProperty(ApplicationLauncher, "propTypes", {
    className: _propTypes2.default.string,
    direction: _propTypes2.default.any,
    dropdownItems: _propTypes2.default.arrayOf(_propTypes2.default.node),
    items: _propTypes2.default.arrayOf(_propTypes2.default.node),
    isDisabled: _propTypes2.default.bool,
    isOpen: _propTypes2.default.bool,
    position: _propTypes2.default.any,
    onSelect: _propTypes2.default.func,
    onToggle: _propTypes2.default.func,
    'aria-label': _propTypes2.default.string,
    isGrouped: _propTypes2.default.bool,
    toggleIcon: _propTypes2.default.node
  });

  _defineProperty(ApplicationLauncher, "defaultProps", {
    "className": '',
    "isDisabled": false,
    "direction": _Dropdown.DropdownDirection.down,
    "dropdownItems": [],
    "items": [],
    "isOpen": false,
    "position": _Dropdown.DropdownPosition.left,
    "onSelect": _event => undefined,
    "onToggle": _value => undefined,
    'aria-label': 'Application launcher',
    "isGrouped": false,
    "toggleIcon": React.createElement(_reactIcons.ThIcon, null)
  });
});
//# sourceMappingURL=ApplicationLauncher.js.map