"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChartLegend = exports.ChartLegendRowGutter = exports.ChartLegendPosition = exports.ChartLegendOrientation = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _victory = require("victory");

var _ChartContainer = require("../ChartContainer");

var _ChartPoint = require("../ChartPoint");

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

var ChartLegendOrientation;
exports.ChartLegendOrientation = ChartLegendOrientation;

(function (ChartLegendOrientation) {
  ChartLegendOrientation["horizontal"] = "horizontal";
  ChartLegendOrientation["vertical"] = "vertical";
})(ChartLegendOrientation || (exports.ChartLegendOrientation = ChartLegendOrientation = {}));

var ChartLegendPosition;
exports.ChartLegendPosition = ChartLegendPosition;

(function (ChartLegendPosition) {
  ChartLegendPosition["bottom"] = "bottom";
  ChartLegendPosition["bottomLeft"] = "bottom-left";
  ChartLegendPosition["right"] = "right";
})(ChartLegendPosition || (exports.ChartLegendPosition = ChartLegendPosition = {}));

var ChartLegendRowGutter;
/**
 * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
 */

exports.ChartLegendRowGutter = ChartLegendRowGutter;

(function (ChartLegendRowGutter) {
  ChartLegendRowGutter["bottom"] = "bottom";
  ChartLegendRowGutter["top"] = "top";
})(ChartLegendRowGutter || (exports.ChartLegendRowGutter = ChartLegendRowGutter = {}));

var ChartLegend = function ChartLegend(_ref) {
  var _ref$containerCompone = _ref.containerComponent,
      containerComponent = _ref$containerCompone === void 0 ? React.createElement(_ChartContainer.ChartContainer, null) : _ref$containerCompone,
      _ref$dataComponent = _ref.dataComponent,
      dataComponent = _ref$dataComponent === void 0 ? React.createElement(_ChartPoint.ChartPoint, null) : _ref$dataComponent,
      _ref$responsive = _ref.responsive,
      responsive = _ref$responsive === void 0 ? true : _ref$responsive,
      themeColor = _ref.themeColor,
      themeVariant = _ref.themeVariant,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? (0, _ChartUtils.getTheme)(themeColor, themeVariant) : _ref$theme,
      rest = _objectWithoutProperties(_ref, ["containerComponent", "dataComponent", "responsive", "themeColor", "themeVariant", "theme"]);

  // Clone so users can override container props
  var container = React.cloneElement(containerComponent, _objectSpread({
    responsive: responsive,
    theme: theme
  }, containerComponent.props));
  return React.createElement(_victory.VictoryLegend, _extends({
    containerComponent: container,
    dataComponent: dataComponent,
    theme: theme
  }, rest));
}; // Note: VictoryLegend.role must be hoisted, but getBaseProps causes error with ChartVoronoiContainer


exports.ChartLegend = ChartLegend;
ChartLegend.propTypes = {
  borderComponent: _propTypes["default"].element,
  borderPadding: _propTypes["default"].any,
  centerTitle: _propTypes["default"].bool,
  colorScale: _propTypes["default"].any,
  containerComponent: _propTypes["default"].element,
  data: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    name: _propTypes["default"].string,
    symbol: _propTypes["default"].shape({
      fill: _propTypes["default"].string,
      type: _propTypes["default"].string
    })
  })),
  dataComponent: _propTypes["default"].element,
  eventKey: _propTypes["default"].oneOfType([_propTypes["default"].any, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  events: _propTypes["default"].arrayOf(_propTypes["default"].any),
  externalEventMutations: _propTypes["default"].arrayOf(_propTypes["default"].any),
  groupComponent: _propTypes["default"].element,
  gutter: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].shape({
    left: _propTypes["default"].number.isRequired,
    right: _propTypes["default"].number.isRequired
  })]),
  height: _propTypes["default"].number,
  itemsPerRow: _propTypes["default"].number,
  labelComponent: _propTypes["default"].element,
  orientation: _propTypes["default"].oneOf(['horizontal', 'vertical']),
  padding: _propTypes["default"].any,
  responsive: _propTypes["default"].bool,
  rowGutter: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].any]),
  sharedEvents: _propTypes["default"].any,
  standalone: _propTypes["default"].bool,
  style: _propTypes["default"].any,
  symbolSpacer: _propTypes["default"].number,
  theme: _propTypes["default"].any,
  themeColor: _propTypes["default"].string
};
(0, _hoistNonReactStatics["default"])(ChartLegend, _victory.VictoryLegend, {
  getBaseProps: true
});
//# sourceMappingURL=ChartLegend.js.map