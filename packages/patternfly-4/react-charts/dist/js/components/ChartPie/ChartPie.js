"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChartPie = exports.ChartPieSortOrder = exports.ChartPieLegendPosition = exports.ChartPieLabelPosition = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _victory = require("victory");

var _victoryCore = require("victory-core");

var _ChartContainer = require("../ChartContainer");

var _ChartLegend = require("../ChartLegend");

var _ChartTheme = require("../ChartTheme");

var _ChartTooltip = require("../ChartTooltip");

var _ChartUtils = require("../ChartUtils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ChartPieLabelPosition;
exports.ChartPieLabelPosition = ChartPieLabelPosition;

(function (ChartPieLabelPosition) {
  ChartPieLabelPosition["centroid"] = "centroid";
  ChartPieLabelPosition["endAngle"] = "endAngle";
  ChartPieLabelPosition["startAngle"] = "startAngle";
})(ChartPieLabelPosition || (exports.ChartPieLabelPosition = ChartPieLabelPosition = {}));

var ChartPieLegendPosition;
exports.ChartPieLegendPosition = ChartPieLegendPosition;

(function (ChartPieLegendPosition) {
  ChartPieLegendPosition["bottom"] = "bottom";
  ChartPieLegendPosition["right"] = "right";
})(ChartPieLegendPosition || (exports.ChartPieLegendPosition = ChartPieLegendPosition = {}));

var ChartPieSortOrder;
/**
 * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
 */

exports.ChartPieSortOrder = ChartPieSortOrder;

(function (ChartPieSortOrder) {
  ChartPieSortOrder["ascending"] = "ascending";
  ChartPieSortOrder["descending"] = "descending";
})(ChartPieSortOrder || (exports.ChartPieSortOrder = ChartPieSortOrder = {}));

var someId = 0;

var ChartPie = function ChartPie(_ref) {
  var _ref$allowTooltip = _ref.allowTooltip,
      allowTooltip = _ref$allowTooltip === void 0 ? true : _ref$allowTooltip,
      ariaDesc = _ref.ariaDesc,
      ariaTitle = _ref.ariaTitle,
      _ref$constrainToVisib = _ref.constrainToVisibleArea,
      constrainToVisibleArea = _ref$constrainToVisib === void 0 ? false : _ref$constrainToVisib,
      _ref$containerCompone = _ref.containerComponent,
      containerComponent = _ref$containerCompone === void 0 ? React.createElement(_ChartContainer.ChartContainer, null) : _ref$containerCompone,
      labels = _ref.labels,
      _ref$legendComponent = _ref.legendComponent,
      legendComponent = _ref$legendComponent === void 0 ? React.createElement(_ChartLegend.ChartLegend, null) : _ref$legendComponent,
      legendData = _ref.legendData,
      _ref$legendPosition = _ref.legendPosition,
      legendPosition = _ref$legendPosition === void 0 ? _ChartTheme.ChartCommonStyles.legend.position : _ref$legendPosition,
      padding = _ref.padding,
      radius = _ref.radius,
      _ref$standalone = _ref.standalone,
      standalone = _ref$standalone === void 0 ? true : _ref$standalone,
      themeColor = _ref.themeColor,
      themeVariant = _ref.themeVariant,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? (0, _ChartUtils.getTheme)(themeColor, themeVariant) : _ref$theme,
      _ref$labelComponent = _ref.labelComponent,
      labelComponent = _ref$labelComponent === void 0 ? allowTooltip ? React.createElement(_ChartTooltip.ChartTooltip, {
    constrainToVisibleArea: constrainToVisibleArea,
    theme: theme
  }) : undefined : _ref$labelComponent,
      _ref$legendOrientatio = _ref.legendOrientation,
      legendOrientation = _ref$legendOrientatio === void 0 ? theme.legend.orientation : _ref$legendOrientatio,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? theme.pie.height : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? theme.pie.width : _ref$width,
      rest = _objectWithoutProperties(_ref, ["allowTooltip", "ariaDesc", "ariaTitle", "constrainToVisibleArea", "containerComponent", "labels", "legendComponent", "legendData", "legendPosition", "padding", "radius", "standalone", "themeColor", "themeVariant", "theme", "labelComponent", "legendOrientation", "height", "width"]);

  var defaultPadding = {
    bottom: (0, _ChartUtils.getPaddingForSide)('bottom', padding, theme.pie.padding),
    left: (0, _ChartUtils.getPaddingForSide)('left', padding, theme.pie.padding),
    right: (0, _ChartUtils.getPaddingForSide)('right', padding, theme.pie.padding),
    top: (0, _ChartUtils.getPaddingForSide)('top', padding, theme.pie.padding)
  };
  var chartRadius = radius ? radius : _victoryCore.Helpers.getRadius({
    height: height,
    width: width,
    padding: defaultPadding
  });
  var chart = React.createElement(_victory.VictoryPie, _extends({
    height: height,
    labels: labels,
    labelComponent: labelComponent,
    padding: padding,
    radius: chartRadius,
    standalone: false,
    theme: theme,
    width: width
  }, rest));
  var legend = React.cloneElement(legendComponent, _objectSpread({
    data: legendData,
    orientation: legendOrientation,
    theme: theme
  }, legendComponent.props)); // Returns a wrapped legend

  var getWrappedLegend = function getWrappedLegend() {
    if (!legend.props.data) {
      return null;
    }

    return React.createElement(_ChartLegend.ChartLegendWrapper, {
      chartType: "pie",
      height: height,
      legendComponent: legend,
      orientation: legendOrientation,
      padding: defaultPadding,
      position: legendPosition,
      theme: theme,
      width: width
    });
  }; // Clone so users can override container props


  var StandaloneContainer = function StandaloneContainer(_ref2) {
    var children = _ref2.children;
    return React.cloneElement(containerComponent, _objectSpread({
      desc: ariaDesc,
      height: height,
      title: ariaTitle,
      width: width,
      theme: theme
    }, containerComponent.props), children);
  };

  return standalone ? React.createElement(StandaloneContainer, null, chart, getWrappedLegend()) : React.createElement(React.Fragment, null, chart, getWrappedLegend());
}; // Note: VictoryPie.role must be hoisted


exports.ChartPie = ChartPie;
ChartPie.propTypes = {
  allowTooltip: _propTypes["default"].bool,
  animate: _propTypes["default"].any,
  ariaDesc: _propTypes["default"].string,
  ariaTitle: _propTypes["default"].string,
  categories: _propTypes["default"].any,
  colorScale: _propTypes["default"].any,
  constrainToVisibleArea: _propTypes["default"].bool,
  containerComponent: _propTypes["default"].element,
  cornerRadius: _propTypes["default"].number,
  data: _propTypes["default"].arrayOf(_propTypes["default"].any),
  dataComponent: _propTypes["default"].element,
  endAngle: _propTypes["default"].number,
  eventKey: _propTypes["default"].any,
  events: _propTypes["default"].arrayOf(_propTypes["default"].any),
  externalEventMutations: _propTypes["default"].arrayOf(_propTypes["default"].any),
  groupComponent: _propTypes["default"].element,
  height: _propTypes["default"].number,
  innerRadius: _propTypes["default"].number,
  labelComponent: _propTypes["default"].element,
  labelPosition: _propTypes["default"].oneOf(['startAngle', 'endAngle', 'centroid']),
  labelRadius: _propTypes["default"].number,
  labels: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].string), _propTypes["default"].func]),
  legendComponent: _propTypes["default"].element,
  legendData: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    name: _propTypes["default"].string,
    symbol: _propTypes["default"].shape({
      fill: _propTypes["default"].string,
      type: _propTypes["default"].string
    })
  })),
  legendOrientation: _propTypes["default"].oneOf(['horizontal', 'vertical'])
};
(0, _hoistNonReactStatics["default"])(ChartPie, _victory.VictoryPie);
//# sourceMappingURL=ChartPie.js.map