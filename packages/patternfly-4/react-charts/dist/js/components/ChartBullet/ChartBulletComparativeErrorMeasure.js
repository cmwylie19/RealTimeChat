"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChartBulletComparativeErrorMeasure = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _victory = require("victory");

var _ChartContainer = require("../ChartContainer");

var _ChartUtils = require("../ChartUtils");

var _ChartBulletComparativeMeasure = require("./ChartBulletComparativeMeasure");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ChartBulletComparativeErrorMeasure = function ChartBulletComparativeErrorMeasure(_ref) {
  var ariaDesc = _ref.ariaDesc,
      ariaTitle = _ref.ariaTitle,
      barWidth = _ref.barWidth,
      _ref$constrainToVisib = _ref.constrainToVisibleArea,
      constrainToVisibleArea = _ref$constrainToVisib === void 0 ? false : _ref$constrainToVisib,
      data = _ref.data,
      domain = _ref.domain,
      _ref$horizontal = _ref.horizontal,
      horizontal = _ref$horizontal === void 0 ? true : _ref$horizontal,
      labelComponent = _ref.labelComponent,
      labels = _ref.labels,
      _ref$measureComponent = _ref.measureComponent,
      measureComponent = _ref$measureComponent === void 0 ? React.createElement(_ChartBulletComparativeMeasure.ChartBulletComparativeMeasure, null) : _ref$measureComponent,
      padding = _ref.padding,
      _ref$standalone = _ref.standalone,
      standalone = _ref$standalone === void 0 ? true : _ref$standalone,
      themeColor = _ref.themeColor,
      themeVariant = _ref.themeVariant,
      y = _ref.y,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? (0, _ChartUtils.getBulletComparativeErrorMeasureTheme)(themeColor, themeVariant) : _ref$theme,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? theme.bar.height : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? theme.bar.width : _ref$width,
      rest = _objectWithoutProperties(_ref, ["ariaDesc", "ariaTitle", "barWidth", "constrainToVisibleArea", "data", "domain", "horizontal", "labelComponent", "labels", "measureComponent", "padding", "standalone", "themeColor", "themeVariant", "y", "theme", "height", "width"]);

  // Comparative measure component
  var measure = React.cloneElement(measureComponent, _objectSpread({
    ariaDesc: ariaDesc,
    ariaTitle: ariaTitle,
    barWidth: barWidth,
    constrainToVisibleArea: constrainToVisibleArea,
    data: data,
    domain: domain,
    height: height,
    horizontal: horizontal,
    labelComponent: labelComponent,
    labels: labels,
    padding: padding,
    standalone: false,
    theme: theme,
    width: width,
    y: y
  }, measureComponent.props));
  return standalone ? React.createElement(_ChartContainer.ChartContainer, {
    desc: ariaDesc,
    height: height,
    title: ariaTitle,
    width: width
  }, measure) : React.createElement(React.Fragment, null, measure);
}; // Note: VictoryBar.role must be hoisted


exports.ChartBulletComparativeErrorMeasure = ChartBulletComparativeErrorMeasure;
ChartBulletComparativeErrorMeasure.propTypes = {
  ariaDesc: _propTypes["default"].string,
  ariaTitle: _propTypes["default"].string,
  barWidth: _propTypes["default"].any,
  constrainToVisibleArea: _propTypes["default"].bool,
  data: _propTypes["default"].arrayOf(_propTypes["default"].any),
  domain: _propTypes["default"].any,
  height: _propTypes["default"].number,
  horizontal: _propTypes["default"].bool,
  labelComponent: _propTypes["default"].element,
  labels: _propTypes["default"].oneOfType([_propTypes["default"].any, _propTypes["default"].arrayOf(_propTypes["default"].string), _propTypes["default"].arrayOf(_propTypes["default"].number)]),
  measureComponent: _propTypes["default"].element,
  padding: _propTypes["default"].any,
  standalone: _propTypes["default"].bool,
  theme: _propTypes["default"].any,
  themeColor: _propTypes["default"].string,
  themeVariant: _propTypes["default"].string,
  width: _propTypes["default"].number,
  y: _propTypes["default"].any
};
(0, _hoistNonReactStatics["default"])(ChartBulletComparativeErrorMeasure, _victory.VictoryBar);
//# sourceMappingURL=ChartBulletComparativeErrorMeasure.js.map