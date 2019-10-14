"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChartTooltip = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _victory = require("victory");

var _ChartUtils = require("../ChartUtils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ChartTooltip = function ChartTooltip(_ref) {
  var _ref$constrainToVisib = _ref.constrainToVisibleArea,
      constrainToVisibleArea = _ref$constrainToVisib === void 0 ? false : _ref$constrainToVisib,
      themeColor = _ref.themeColor,
      themeVariant = _ref.themeVariant,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? (0, _ChartUtils.getTheme)(themeColor, themeVariant) : _ref$theme,
      rest = _objectWithoutProperties(_ref, ["constrainToVisibleArea", "themeColor", "themeVariant", "theme"]);

  // Note: constrainToVisibleArea is valid, but @types/victory is missing a prop type
  // @ts-ignore
  return React.createElement(_victory.VictoryTooltip, _extends({
    constrainToVisibleArea: constrainToVisibleArea,
    theme: theme
  }, rest));
}; // Note: VictoryTooltip.defaultEvents must be hoisted


exports.ChartTooltip = ChartTooltip;
ChartTooltip.propTypes = {
  active: _propTypes["default"].bool,
  activateData: _propTypes["default"].bool,
  angle: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  center: _propTypes["default"].shape({
    x: _propTypes["default"].number.isRequired,
    y: _propTypes["default"].number.isRequired
  }),
  centerOffset: _propTypes["default"].shape({
    x: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].any]).isRequired,
    y: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].any]).isRequired
  }),
  constrainToVisibleArea: _propTypes["default"].bool,
  cornerRadius: _propTypes["default"].any,
  data: _propTypes["default"].arrayOf(_propTypes["default"].any),
  datum: _propTypes["default"].object,
  dx: _propTypes["default"].any,
  dy: _propTypes["default"].any,
  events: _propTypes["default"].object,
  flyoutComponent: _propTypes["default"].element,
  flyoutHeight: _propTypes["default"].any,
  flyoutStyle: _propTypes["default"].any,
  flyoutWidth: _propTypes["default"].any,
  groupComponent: _propTypes["default"].element,
  horizontal: _propTypes["default"].bool,
  index: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  labelComponent: _propTypes["default"].element,
  orientation: _propTypes["default"].any,
  pointerLength: _propTypes["default"].any,
  pointerOrientation: _propTypes["default"].oneOfType([_propTypes["default"].oneOf(['top']), _propTypes["default"].oneOf(['bottom']), _propTypes["default"].oneOf(['left']), _propTypes["default"].oneOf(['right']), _propTypes["default"].any]),
  pointerWidth: _propTypes["default"].any,
  renderInPortal: _propTypes["default"].bool
};
(0, _hoistNonReactStatics["default"])(ChartTooltip, _victory.VictoryTooltip);
//# sourceMappingURL=ChartTooltip.js.map