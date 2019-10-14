"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chart = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _victory = require("victory");

var _ChartContainer = require("../ChartContainer");

var _ChartLegend = require("../ChartLegend");

var _ChartTheme = require("../ChartTheme");

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

var Chart = function Chart(_ref) {
  var _ref$allowZoom = _ref.allowZoom,
      allowZoom = _ref$allowZoom === void 0 ? false : _ref$allowZoom,
      ariaDesc = _ref.ariaDesc,
      ariaTitle = _ref.ariaTitle,
      children = _ref.children,
      _ref$legendComponent = _ref.legendComponent,
      legendComponent = _ref$legendComponent === void 0 ? React.createElement(_ChartLegend.ChartLegend, null) : _ref$legendComponent,
      legendData = _ref.legendData,
      _ref$legendPosition = _ref.legendPosition,
      legendPosition = _ref$legendPosition === void 0 ? _ChartTheme.ChartCommonStyles.legend.position : _ref$legendPosition,
      padding = _ref.padding,
      _ref$standalone = _ref.standalone,
      standalone = _ref$standalone === void 0 ? true : _ref$standalone,
      themeColor = _ref.themeColor,
      themeVariant = _ref.themeVariant,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? (0, _ChartUtils.getTheme)(themeColor, themeVariant) : _ref$theme,
      _ref$containerCompone = _ref.containerComponent,
      containerComponent = _ref$containerCompone === void 0 ? allowZoom ? React.createElement(_victory.VictoryZoomContainer, null) : React.createElement(_ChartContainer.ChartContainer, null) : _ref$containerCompone,
      _ref$legendOrientatio = _ref.legendOrientation,
      legendOrientation = _ref$legendOrientatio === void 0 ? theme.legend.orientation : _ref$legendOrientatio,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? theme.chart.height : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? theme.chart.width : _ref$width,
      rest = _objectWithoutProperties(_ref, ["allowZoom", "ariaDesc", "ariaTitle", "children", "legendComponent", "legendData", "legendPosition", "padding", "standalone", "themeColor", "themeVariant", "theme", "containerComponent", "legendOrientation", "height", "width"]);

  var defaultPadding = {
    bottom: (0, _ChartUtils.getPaddingForSide)('bottom', padding, theme.chart.padding),
    left: (0, _ChartUtils.getPaddingForSide)('left', padding, theme.chart.padding),
    right: (0, _ChartUtils.getPaddingForSide)('right', padding, theme.chart.padding),
    top: (0, _ChartUtils.getPaddingForSide)('top', padding, theme.chart.padding)
  }; // Clone so users can override container props

  var container = React.cloneElement(containerComponent, _objectSpread({
    desc: ariaDesc,
    title: ariaTitle,
    theme: theme
  }, containerComponent.props, {
    className: (0, _ChartUtils.getClassName)({
      className: containerComponent.props.className
    }) // Override VictoryContainer class name

  }));
  var legend = React.cloneElement(legendComponent, _objectSpread({
    data: legendData,
    orientation: legendOrientation,
    theme: theme
  }, legendComponent.props)); // Returns a wrapped legend

  var getWrappedLegend = function getWrappedLegend() {
    if (!legend.props.data) {
      return null;
    }

    var dx = 0;
    var dy = 0;
    var xAxisLabelHeight = 0;
    var legendTitleHeight = legend.props.title ? 10 : 0; // Adjust for axis label

    React.Children.toArray(children).map(function (child) {
      if (child.type.role === 'axis' && child.props.label && !child.props.dependentAxis) {
        xAxisLabelHeight = (0, _ChartUtils.getLabelTextSize)({
          text: child.props.label,
          theme: theme
        }).height + 10;
        legendTitleHeight = 0;
      }
    });

    if (legendPosition === _ChartLegend.ChartLegendPosition.bottom) {
      dy += xAxisLabelHeight + legendTitleHeight;
    } else if (legendPosition === _ChartLegend.ChartLegendPosition.bottomLeft) {
      dy += xAxisLabelHeight + legendTitleHeight;
      dx = -10;
    }

    return React.createElement(_ChartLegend.ChartLegendWrapper, {
      chartType: "chart",
      dx: dx,
      dy: dy,
      height: height,
      legendComponent: legend,
      orientation: legendOrientation,
      padding: defaultPadding,
      position: legendPosition,
      theme: theme,
      width: width
    });
  };

  return React.createElement(_victory.VictoryChart, _extends({
    containerComponent: container,
    height: height,
    padding: defaultPadding,
    theme: theme,
    width: width
  }, rest), children, getWrappedLegend());
};

exports.Chart = Chart;
Chart.propTypes = {
  allowZoom: _propTypes["default"].bool,
  animate: _propTypes["default"].any,
  ariaDesc: _propTypes["default"].string,
  ariaTitle: _propTypes["default"].string,
  children: _propTypes["default"].node,
  containerComponent: _propTypes["default"].element,
  domain: _propTypes["default"].any,
  domainPadding: _propTypes["default"].any,
  endAngle: _propTypes["default"].number,
  eventKey: _propTypes["default"].any,
  events: _propTypes["default"].arrayOf(_propTypes["default"].any),
  externalEventMutations: _propTypes["default"].arrayOf(_propTypes["default"].any),
  groupComponent: _propTypes["default"].element,
  height: _propTypes["default"].number,
  horizontal: _propTypes["default"].bool,
  innerRadius: _propTypes["default"].number,
  legendComponent: _propTypes["default"].element,
  legendData: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    name: _propTypes["default"].string,
    symbol: _propTypes["default"].shape({
      fill: _propTypes["default"].string,
      type: _propTypes["default"].string
    })
  })),
  legendOrientation: _propTypes["default"].oneOf(['horizontal', 'vertical']),
  legendPosition: _propTypes["default"].oneOf(['bottom', 'bottom-left', 'right']),
  maxDomain: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].shape({
    x: _propTypes["default"].number,
    y: _propTypes["default"].number
  })]),
  minDomain: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].shape({
    x: _propTypes["default"].number,
    y: _propTypes["default"].number
  })]),
  padding: _propTypes["default"].any,
  polar: _propTypes["default"].bool,
  range: _propTypes["default"].oneOfType([_propTypes["default"].shape({})])
};
(0, _hoistNonReactStatics["default"])(Chart, _victory.VictoryChart);
//# sourceMappingURL=Chart.js.map