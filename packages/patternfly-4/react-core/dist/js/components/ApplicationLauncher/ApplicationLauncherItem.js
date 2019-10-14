"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApplicationLauncherItem = exports.ApplicationLauncherItemContext = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _reactStyles = require("@patternfly/react-styles");

var _appLauncher = _interopRequireDefault(require("@patternfly/react-styles/css/components/AppLauncher/app-launcher"));

var _Dropdown = require("../Dropdown");

var _ApplicationLauncherContent = require("./ApplicationLauncherContent");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ApplicationLauncherItemContext = React.createContext({
  isExternal: false,
  icon: null
});
exports.ApplicationLauncherItemContext = ApplicationLauncherItemContext;

var ApplicationLauncherItem = function ApplicationLauncherItem(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      children = _ref.children,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? null : _ref$icon,
      _ref$isExternal = _ref.isExternal,
      isExternal = _ref$isExternal === void 0 ? false : _ref$isExternal,
      href = _ref.href,
      _ref$tooltip = _ref.tooltip,
      tooltip = _ref$tooltip === void 0 ? null : _ref$tooltip,
      _ref$tooltipProps = _ref.tooltipProps,
      tooltipProps = _ref$tooltipProps === void 0 ? null : _ref$tooltipProps,
      _ref$component = _ref.component,
      component = _ref$component === void 0 ? 'a' : _ref$component,
      props = _objectWithoutProperties(_ref, ["className", "children", "icon", "isExternal", "href", "tooltip", "tooltipProps", "component"]);

  return React.createElement(ApplicationLauncherItemContext.Provider, {
    value: {
      isExternal: isExternal,
      icon: icon
    }
  }, React.createElement(_Dropdown.DropdownItem, _extends({
    component: component,
    href: href || null,
    className: (0, _reactStyles.css)(isExternal && _appLauncher["default"].modifiers.external, className),
    tooltip: tooltip,
    tooltipProps: tooltipProps
  }, props), children && React.createElement(_ApplicationLauncherContent.ApplicationLauncherContent, null, children)));
};

exports.ApplicationLauncherItem = ApplicationLauncherItem;
ApplicationLauncherItem.propTypes = {
  icon: _propTypes["default"].node,
  isExternal: _propTypes["default"].bool,
  tooltip: _propTypes["default"].node,
  tooltipProps: _propTypes["default"].any,
  component: _propTypes["default"].node
};
//# sourceMappingURL=ApplicationLauncherItem.js.map