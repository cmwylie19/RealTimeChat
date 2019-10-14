"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChartAxis = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _victory = require("victory");

var _ChartContainer = require("../ChartContainer");

var _ChartUtils = require("../ChartUtils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ChartAxis = function ChartAxis(_ref) {
  var _ref$containerCompone = _ref.containerComponent,
      containerComponent = _ref$containerCompone === void 0 ? React.createElement(_ChartContainer.ChartContainer, null) : _ref$containerCompone,
      _ref$showGrid = _ref.showGrid,
      showGrid = _ref$showGrid === void 0 ? false : _ref$showGrid,
      themeColor = _ref.themeColor,
      themeVariant = _ref.themeVariant,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? (0, _ChartUtils.getTheme)(themeColor, themeVariant) : _ref$theme,
      rest = _objectWithoutProperties(_ref, ["containerComponent", "showGrid", "themeColor", "themeVariant", "theme"]);

  // Clone so users can override container props
  var container = React.cloneElement(containerComponent, _objectSpread({
    theme: theme
  }, containerComponent.props));
  return React.createElement(_victory.VictoryAxis, _extends({
    containerComponent: container,
    theme: showGrid ? (0, _ChartUtils.getAxisTheme)(themeColor, themeVariant) : theme
  }, rest));
};

exports.ChartAxis = ChartAxis;
ChartAxis.propTypes = {
  animate: _propTypes["default"].any,
  axisComponent: _propTypes["default"].element,
  axisLabelComponent: _propTypes["default"].element,
  axisValue: _propTypes["default"].any,
  containerComponent: _propTypes["default"].element,
  crossAxis: _propTypes["default"].bool,
  dependentAxis: _propTypes["default"].bool,
  domain: _propTypes["default"].any,
  domainPadding: _propTypes["default"].any,
  events: _propTypes["default"].arrayOf(_propTypes["default"].any),
  externalEventMutations: _propTypes["default"].arrayOf(_propTypes["default"].any),
  fixLabelOverlap: _propTypes["default"].bool,
  gridComponent: _propTypes["default"].element,
  groupComponent: _propTypes["default"].element,
  height: _propTypes["default"].number,
  invertAxis: _propTypes["default"].bool,
  label: _propTypes["default"].any,
  maxDomain: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].shape({
    x: _propTypes["default"].number,
    y: _propTypes["default"].number
  })]),
  minDomain: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].shape({
    x: _propTypes["default"].number,
    y: _propTypes["default"].number
  })]),
  name: _propTypes["default"].string,
  offsetX: _propTypes["default"].number,
  offsetY: _propTypes["default"].number,
  orientation: _propTypes["default"].oneOf(['top', 'bottom', 'left', 'right']),
  padding: _propTypes["default"].any,
  range: _propTypes["default"].oneOfType([_propTypes["default"].shape({})])
};
(0, _hoistNonReactStatics["default"])(ChartAxis, _victory.VictoryAxis);
//# sourceMappingURL=ChartAxis.js.map