(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "@patternfly/react-styles", "@patternfly/react-styles/css/components/AppLauncher/app-launcher", "../Dropdown", "./ApplicationLauncherContent"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("@patternfly/react-styles"), require("@patternfly/react-styles/css/components/AppLauncher/app-launcher"), require("../Dropdown"), require("./ApplicationLauncherContent"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.reactStyles, global.appLauncher, global.Dropdown, global.ApplicationLauncherContent);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _reactStyles, _appLauncher, _Dropdown, _ApplicationLauncherContent) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ApplicationLauncherItem = exports.ApplicationLauncherItemContext = undefined;

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

  const ApplicationLauncherItemContext = exports.ApplicationLauncherItemContext = React.createContext({
    isExternal: false,
    icon: null
  });

  const ApplicationLauncherItem = exports.ApplicationLauncherItem = _ref => {
    let {
      className = '',
      children,
      icon = null,
      isExternal = false,
      href,
      tooltip = null,
      tooltipProps = null,
      component = 'a'
    } = _ref,
        props = _objectWithoutProperties(_ref, ["className", "children", "icon", "isExternal", "href", "tooltip", "tooltipProps", "component"]);

    return React.createElement(ApplicationLauncherItemContext.Provider, {
      value: {
        isExternal,
        icon
      }
    }, React.createElement(_Dropdown.DropdownItem, _extends({
      component: component,
      href: href || null,
      className: (0, _reactStyles.css)(isExternal && _appLauncher2.default.modifiers.external, className),
      tooltip: tooltip,
      tooltipProps: tooltipProps
    }, props), children && React.createElement(_ApplicationLauncherContent.ApplicationLauncherContent, null, children)));
  };

  ApplicationLauncherItem.propTypes = {
    icon: _propTypes2.default.node,
    isExternal: _propTypes2.default.bool,
    tooltip: _propTypes2.default.node,
    tooltipProps: _propTypes2.default.any,
    component: _propTypes2.default.node
  };
});
//# sourceMappingURL=ApplicationLauncherItem.js.map