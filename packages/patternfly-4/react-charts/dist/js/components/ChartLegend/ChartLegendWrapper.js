"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChartLegendWrapper = exports.ChartLegendConfigChartType = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _ChartLegend = require("../ChartLegend");

var _ChartTheme = require("../ChartTheme");

var _ChartUtils = require("../ChartUtils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ChartLegendConfigChartType;
/**
 * Helper to position a legend component within a component's SVG
 *
 * Example:
 *
 * <ChartLegendWrapper
 *   chartHeight={200}
 *   chartWidth={600}
 *   legendComponent={<ChartLegend data={[{ name: 'Cats' }, { name: 'Dogs' }]} orientation="vertical"/>}
 *   position="right"
 *   svgHeight={200}
 *   svgWidth={800}
 * />
 */

exports.ChartLegendConfigChartType = ChartLegendConfigChartType;

(function (ChartLegendConfigChartType) {
  ChartLegendConfigChartType["chart"] = "chart";
  ChartLegendConfigChartType["pie"] = "pie";
})(ChartLegendConfigChartType || (exports.ChartLegendConfigChartType = ChartLegendConfigChartType = {}));

var ChartLegendWrapper = function ChartLegendWrapper(_ref) {
  var _ref$chartType = _ref.chartType,
      chartType = _ref$chartType === void 0 ? 'chart' : _ref$chartType,
      _ref$dx = _ref.dx,
      dx = _ref$dx === void 0 ? 0 : _ref$dx,
      _ref$dy = _ref.dy,
      dy = _ref$dy === void 0 ? 0 : _ref$dy,
      _ref$legendComponent = _ref.legendComponent,
      legendComponent = _ref$legendComponent === void 0 ? React.createElement(_ChartLegend.ChartLegend, null) : _ref$legendComponent,
      padding = _ref.padding,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? _ChartTheme.ChartCommonStyles.legend.position : _ref$position,
      themeColor = _ref.themeColor,
      themeVariant = _ref.themeVariant,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? (0, _ChartUtils.getTheme)(themeColor, themeVariant) : _ref$theme,
      _ref$orientation = _ref.orientation,
      orientation = _ref$orientation === void 0 ? theme.legend.orientation : _ref$orientation,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? theme.chart.height : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? theme.chart.width : _ref$width;
  var legendProps = legendComponent.props ? legendComponent.props : {};
  var legendX = (0, _ChartUtils.getLegendX)({
    chartType: chartType,
    dx: dx,
    height: height,
    legendData: legendProps.data,
    legendOrientation: legendProps.legendOrientation ? legendProps.legendOrientation : orientation,
    legendPosition: position,
    legendProps: legendProps,
    padding: padding,
    theme: theme,
    width: width
  });
  var legendY = (0, _ChartUtils.getLegendY)({
    chartType: chartType,
    dy: dy,
    height: height,
    legendData: legendProps.data,
    legendOrientation: legendProps.legendOrientation ? legendProps.legendOrientation : orientation,
    legendProps: legendProps,
    legendPosition: position,
    padding: padding,
    theme: theme,
    width: width
  });
  var legend = React.cloneElement(legendComponent, _objectSpread({
    orientation: orientation,
    standalone: false,
    theme: theme,
    x: legendX > 0 ? legendX : 0,
    y: legendY > 0 ? legendY : 0
  }, legendComponent.props));
  return React.createElement(React.Fragment, null, legend);
};

exports.ChartLegendWrapper = ChartLegendWrapper;
ChartLegendWrapper.propTypes = {
  chartType: _propTypes["default"].string,
  dx: _propTypes["default"].number,
  dy: _propTypes["default"].number,
  height: _propTypes["default"].number,
  legendComponent: _propTypes["default"].element,
  orientation: _propTypes["default"].oneOf(['horizontal', 'vertical']),
  padding: _propTypes["default"].any,
  position: _propTypes["default"].oneOf(['bottom', 'bottom-left', 'right']),
  theme: _propTypes["default"].any,
  themeColor: _propTypes["default"].string,
  themeVariant: _propTypes["default"].string,
  width: _propTypes["default"].number
};
//# sourceMappingURL=ChartLegendWrapper.js.map