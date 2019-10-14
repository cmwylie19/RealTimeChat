"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChartVoronoiContainer = exports.ChartVoronoiDimension = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _victory = require("victory");

var _ChartTooltip = require("../ChartTooltip");

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

var ChartVoronoiDimension;
/**
 * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
 */

exports.ChartVoronoiDimension = ChartVoronoiDimension;

(function (ChartVoronoiDimension) {
  ChartVoronoiDimension["x"] = "x";
  ChartVoronoiDimension["y"] = "y";
})(ChartVoronoiDimension || (exports.ChartVoronoiDimension = ChartVoronoiDimension = {}));

var ChartVoronoiContainer = function ChartVoronoiContainer(_ref) {
  var className = _ref.className,
      _ref$allowTooltip = _ref.allowTooltip,
      allowTooltip = _ref$allowTooltip === void 0 ? true : _ref$allowTooltip,
      _ref$constrainToVisib = _ref.constrainToVisibleArea,
      constrainToVisibleArea = _ref$constrainToVisib === void 0 ? false : _ref$constrainToVisib,
      themeColor = _ref.themeColor,
      themeVariant = _ref.themeVariant,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? (0, _ChartUtils.getTheme)(themeColor, themeVariant) : _ref$theme,
      _ref$labelComponent = _ref.labelComponent,
      labelComponent = _ref$labelComponent === void 0 ? allowTooltip ? React.createElement(_ChartTooltip.ChartTooltip, null) : undefined : _ref$labelComponent,
      rest = _objectWithoutProperties(_ref, ["className", "allowTooltip", "constrainToVisibleArea", "themeColor", "themeVariant", "theme", "labelComponent"]);

  var chartClassName = (0, _ChartUtils.getClassName)({
    className: className
  });
  var chartLabelComponent = React.cloneElement(labelComponent, _objectSpread({
    constrainToVisibleArea: constrainToVisibleArea,
    theme: theme
  }, labelComponent.props)); // Note: theme is required by voronoiContainerMixin, but @types/victory is missing a prop type
  // @ts-ignore

  return React.createElement(_victory.VictoryVoronoiContainer, _extends({
    className: chartClassName,
    labelComponent: chartLabelComponent,
    theme: theme
  }, rest));
};

exports.ChartVoronoiContainer = ChartVoronoiContainer;
ChartVoronoiContainer.propTypes = {
  activateData: _propTypes["default"].bool,
  activateLabels: _propTypes["default"].bool,
  allowTooltip: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  constrainToVisibleArea: _propTypes["default"].bool,
  disable: _propTypes["default"].bool,
  labels: _propTypes["default"].func,
  labelComponent: _propTypes["default"].element,
  mouseFollowTooltips: _propTypes["default"].bool,
  onActivated: _propTypes["default"].func,
  onDeactivated: _propTypes["default"].func,
  radius: _propTypes["default"].number,
  responsive: _propTypes["default"].bool,
  style: _propTypes["default"].any,
  theme: _propTypes["default"].any,
  themeColor: _propTypes["default"].string,
  themeVariant: _propTypes["default"].string,
  voronoiBlacklist: _propTypes["default"].arrayOf(_propTypes["default"].string),
  voronoiDimension: _propTypes["default"].oneOf(['x', 'y']),
  voronoiPadding: _propTypes["default"].number
};
ChartVoronoiContainer.defaultProps = _victory.VictoryVoronoiContainer.defaultProps; // Note: VictoryVoronoiContainer.defaultEvents & VictoryContainer.role must be hoisted

(0, _hoistNonReactStatics["default"])(ChartVoronoiContainer, _victory.VictoryVoronoiContainer);
//# sourceMappingURL=ChartVoronoiContainer.js.map