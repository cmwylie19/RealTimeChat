"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChartBullet = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _victory = require("victory");

var _chartBulletSize = require("./utils/chart-bullet-size");

var _chartBulletDomain = require("./utils/chart-bullet-domain");

var _chartBulletTheme = require("./utils/chart-bullet-theme");

var _ChartAxis = require("../ChartAxis");

var _ChartBulletComparativeErrorMeasure = require("./ChartBulletComparativeErrorMeasure");

var _ChartBulletComparativeMeasure = require("./ChartBulletComparativeMeasure");

var _ChartBulletComparativeWarningMeasure = require("./ChartBulletComparativeWarningMeasure");

var _ChartBulletGroupTitle = require("./ChartBulletGroupTitle");

var _ChartBulletPrimaryDotMeasure = require("./ChartBulletPrimaryDotMeasure");

var _ChartBulletPrimarySegmentedMeasure = require("./ChartBulletPrimarySegmentedMeasure");

var _ChartBulletQualitativeRange = require("./ChartBulletQualitativeRange");

var _ChartBulletTitle = require("./ChartBulletTitle");

var _ChartContainer = require("../ChartContainer");

var _ChartLegend = require("../ChartLegend");

var _ChartTheme = require("../ChartTheme");

var _ChartTooltip = require("../ChartTooltip");

var _ChartUtils = require("../ChartUtils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ChartBullet = function ChartBullet(_ref) {
  var ariaDesc = _ref.ariaDesc,
      ariaTitle = _ref.ariaTitle,
      _ref$axisComponent = _ref.axisComponent,
      axisComponent = _ref$axisComponent === void 0 ? React.createElement(_ChartAxis.ChartAxis, null) : _ref$axisComponent,
      _ref$comparativeError = _ref.comparativeErrorMeasureComponent,
      comparativeErrorMeasureComponent = _ref$comparativeError === void 0 ? React.createElement(_ChartBulletComparativeErrorMeasure.ChartBulletComparativeErrorMeasure, null) : _ref$comparativeError,
      comparativeErrorMeasureData = _ref.comparativeErrorMeasureData,
      comparativeErrorMeasureDataY = _ref.comparativeErrorMeasureDataY,
      comparativeErrorMeasureLegendData = _ref.comparativeErrorMeasureLegendData,
      _ref$comparativeWarni = _ref.comparativeWarningMeasureComponent,
      comparativeWarningMeasureComponent = _ref$comparativeWarni === void 0 ? React.createElement(_ChartBulletComparativeWarningMeasure.ChartBulletComparativeWarningMeasure, null) : _ref$comparativeWarni,
      comparativeWarningMeasureData = _ref.comparativeWarningMeasureData,
      comparativeWarningMeasureDataY = _ref.comparativeWarningMeasureDataY,
      comparativeWarningMeasureLegendData = _ref.comparativeWarningMeasureLegendData,
      _ref$comparativeZeroM = _ref.comparativeZeroMeasureComponent,
      comparativeZeroMeasureComponent = _ref$comparativeZeroM === void 0 ? React.createElement(_ChartBulletComparativeMeasure.ChartBulletComparativeMeasure, null) : _ref$comparativeZeroM,
      _ref$constrainToVisib = _ref.constrainToVisibleArea,
      constrainToVisibleArea = _ref$constrainToVisib === void 0 ? false : _ref$constrainToVisib,
      _ref$groupTitleCompon = _ref.groupTitleComponent,
      groupTitleComponent = _ref$groupTitleCompon === void 0 ? React.createElement(_ChartBulletGroupTitle.ChartBulletGroupTitle, null) : _ref$groupTitleCompon,
      groupSubTitle = _ref.groupSubTitle,
      groupTitle = _ref.groupTitle,
      _ref$horizontal = _ref.horizontal,
      horizontal = _ref$horizontal === void 0 ? true : _ref$horizontal,
      _ref$invert = _ref.invert,
      invert = _ref$invert === void 0 ? false : _ref$invert,
      labels = _ref.labels,
      _ref$legendComponent = _ref.legendComponent,
      legendComponent = _ref$legendComponent === void 0 ? React.createElement(_ChartLegend.ChartLegend, null) : _ref$legendComponent,
      legendItemsPerRow = _ref.legendItemsPerRow,
      _ref$legendPosition = _ref.legendPosition,
      legendPosition = _ref$legendPosition === void 0 ? 'bottom' : _ref$legendPosition,
      maxDomain = _ref.maxDomain,
      minDomain = _ref.minDomain,
      padding = _ref.padding,
      _ref$primaryDotMeasur = _ref.primaryDotMeasureComponent,
      primaryDotMeasureComponent = _ref$primaryDotMeasur === void 0 ? React.createElement(_ChartBulletPrimaryDotMeasure.ChartBulletPrimaryDotMeasure, null) : _ref$primaryDotMeasur,
      primaryDotMeasureData = _ref.primaryDotMeasureData,
      primaryDotMeasureDataY = _ref.primaryDotMeasureDataY,
      primaryDotMeasureLegendData = _ref.primaryDotMeasureLegendData,
      _ref$primarySegmented = _ref.primarySegmentedMeasureComponent,
      primarySegmentedMeasureComponent = _ref$primarySegmented === void 0 ? React.createElement(_ChartBulletPrimarySegmentedMeasure.ChartBulletPrimarySegmentedMeasure, null) : _ref$primarySegmented,
      primarySegmentedMeasureData = _ref.primarySegmentedMeasureData,
      primarySegmentedMeasureDataY = _ref.primarySegmentedMeasureDataY,
      primarySegmentedMeasureLegendData = _ref.primarySegmentedMeasureLegendData,
      _ref$qualitativeRange = _ref.qualitativeRangeComponent,
      qualitativeRangeComponent = _ref$qualitativeRange === void 0 ? React.createElement(_ChartBulletQualitativeRange.ChartBulletQualitativeRange, null) : _ref$qualitativeRange,
      qualitativeRangeData = _ref.qualitativeRangeData,
      qualitativeRangeDataY = _ref.qualitativeRangeDataY,
      qualitativeRangeDataY0 = _ref.qualitativeRangeDataY0,
      qualitativeRangeLegendData = _ref.qualitativeRangeLegendData,
      _ref$standalone = _ref.standalone,
      standalone = _ref$standalone === void 0 ? true : _ref$standalone,
      subTitle = _ref.subTitle,
      themeColor = _ref.themeColor,
      themeVariant = _ref.themeVariant,
      title = _ref.title,
      _ref$titleComponent = _ref.titleComponent,
      titleComponent = _ref$titleComponent === void 0 ? React.createElement(_ChartBulletTitle.ChartBulletTitle, null) : _ref$titleComponent,
      titlePosition = _ref.titlePosition,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? (0, _chartBulletTheme.getBulletThemeWithLegendColorScale)({
    comparativeErrorMeasureData: comparativeErrorMeasureData,
    comparativeErrorMeasureLegendData: comparativeErrorMeasureLegendData,
    comparativeWarningMeasureData: comparativeWarningMeasureData,
    comparativeWarningMeasureLegendData: comparativeWarningMeasureLegendData,
    invert: invert,
    primaryDotMeasureData: primaryDotMeasureData,
    primaryDotMeasureLegendData: primaryDotMeasureLegendData,
    primarySegmentedMeasureData: primarySegmentedMeasureData,
    primarySegmentedMeasureLegendData: primarySegmentedMeasureLegendData,
    qualitativeRangeData: qualitativeRangeData,
    qualitativeRangeLegendData: qualitativeRangeLegendData,
    themeColor: themeColor,
    themeVariant: themeVariant
  }) : _ref$theme,
      _ref$domain = _ref.domain,
      domain = _ref$domain === void 0 ? (0, _chartBulletDomain.getBulletDomain)({
    comparativeErrorMeasureComponent: comparativeErrorMeasureComponent,
    comparativeErrorMeasureData: comparativeErrorMeasureData,
    comparativeWarningMeasureComponent: comparativeWarningMeasureComponent,
    comparativeWarningMeasureData: comparativeWarningMeasureData,
    maxDomain: maxDomain,
    minDomain: minDomain,
    primaryDotMeasureComponent: primaryDotMeasureComponent,
    primaryDotMeasureData: primaryDotMeasureData,
    primarySegmentedMeasureComponent: primarySegmentedMeasureComponent,
    primarySegmentedMeasureData: primarySegmentedMeasureData,
    qualitativeRangeComponent: qualitativeRangeComponent,
    qualitativeRangeData: qualitativeRangeData
  }) : _ref$domain,
      _ref$legendOrientatio = _ref.legendOrientation,
      legendOrientation = _ref$legendOrientatio === void 0 ? theme.legend.orientation : _ref$legendOrientatio,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? horizontal ? theme.chart.height : theme.chart.width : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? horizontal ? theme.chart.width : theme.chart.height : _ref$width,
      _ref$bulletSize = _ref.bulletSize,
      bulletSize = _ref$bulletSize === void 0 ? theme.chart.height : _ref$bulletSize,
      rest = _objectWithoutProperties(_ref, ["ariaDesc", "ariaTitle", "axisComponent", "comparativeErrorMeasureComponent", "comparativeErrorMeasureData", "comparativeErrorMeasureDataY", "comparativeErrorMeasureLegendData", "comparativeWarningMeasureComponent", "comparativeWarningMeasureData", "comparativeWarningMeasureDataY", "comparativeWarningMeasureLegendData", "comparativeZeroMeasureComponent", "constrainToVisibleArea", "groupTitleComponent", "groupSubTitle", "groupTitle", "horizontal", "invert", "labels", "legendComponent", "legendItemsPerRow", "legendPosition", "maxDomain", "minDomain", "padding", "primaryDotMeasureComponent", "primaryDotMeasureData", "primaryDotMeasureDataY", "primaryDotMeasureLegendData", "primarySegmentedMeasureComponent", "primarySegmentedMeasureData", "primarySegmentedMeasureDataY", "primarySegmentedMeasureLegendData", "qualitativeRangeComponent", "qualitativeRangeData", "qualitativeRangeDataY", "qualitativeRangeDataY0", "qualitativeRangeLegendData", "standalone", "subTitle", "themeColor", "themeVariant", "title", "titleComponent", "titlePosition", "theme", "domain", "legendOrientation", "height", "width", "bulletSize"]);

  // Note that we're using a fixed bullet height width to align components.
  var chartSize = {
    height: horizontal ? bulletSize : height,
    width: horizontal ? width : bulletSize
  };
  var defaultPadding = {
    bottom: (0, _ChartUtils.getPaddingForSide)('bottom', padding, theme.chart.padding),
    left: (0, _ChartUtils.getPaddingForSide)('left', padding, theme.chart.padding),
    right: (0, _ChartUtils.getPaddingForSide)('right', padding, theme.chart.padding),
    top: (0, _ChartUtils.getPaddingForSide)('top', padding, theme.chart.padding)
  }; // Bullet group title

  var bulletGroupTitle = React.cloneElement(groupTitleComponent, _objectSpread({
    height: height,
    standalone: false,
    subTitle: groupSubTitle,
    title: groupTitle,
    width: width
  }, groupTitleComponent.props)); // Bullet title

  var bulletTitle = React.cloneElement(titleComponent, _objectSpread({
    height: height,
    horizontal: horizontal,
    legendPosition: legendPosition,
    padding: padding,
    standalone: false,
    subTitle: subTitle,
    theme: theme,
    title: title,
    titlePosition: titlePosition,
    width: width
  }, titleComponent.props)); // Comparative error measure

  var comparativeErrorMeasure = React.cloneElement(comparativeErrorMeasureComponent, _objectSpread({
    barWidth: (0, _chartBulletSize.getComparativeMeasureErrorWidth)({
      height: chartSize.height,
      horizontal: horizontal,
      width: chartSize.width
    }),
    constrainToVisibleArea: constrainToVisibleArea,
    data: comparativeErrorMeasureData,
    domain: domain,
    height: chartSize.height,
    horizontal: horizontal,
    labelComponent: React.createElement(_ChartTooltip.ChartTooltip, {
      height: height,
      width: width
    }),
    labels: labels,
    padding: padding,
    standalone: false,
    width: chartSize.width,
    y: comparativeErrorMeasureDataY
  }, comparativeErrorMeasureComponent.props)); // Comparative warning measure

  var comparativeWarningMeasure = React.cloneElement(comparativeWarningMeasureComponent, _objectSpread({
    barWidth: (0, _chartBulletSize.getComparativeMeasureWarningWidth)({
      height: chartSize.height,
      horizontal: horizontal,
      width: chartSize.width
    }),
    constrainToVisibleArea: constrainToVisibleArea,
    data: comparativeWarningMeasureData,
    domain: domain,
    height: chartSize.height,
    horizontal: horizontal,
    labelComponent: React.createElement(_ChartTooltip.ChartTooltip, {
      height: height,
      width: width
    }),
    labels: labels,
    padding: padding,
    standalone: false,
    width: chartSize.width,
    y: comparativeWarningMeasureDataY
  }, comparativeWarningMeasureComponent.props)); // Comparative zero measure

  var comparativeZeroMeasure = React.cloneElement(comparativeZeroMeasureComponent, _objectSpread({
    barWidth: (0, _chartBulletSize.getComparativeMeasureWidth)({
      height: chartSize.height,
      horizontal: horizontal,
      width: chartSize.width
    }),
    data: [{
      y: 0
    }],
    domain: domain,
    height: chartSize.height,
    horizontal: horizontal,
    padding: padding,
    standalone: false,
    width: chartSize.width
  }, comparativeZeroMeasureComponent.props)); // Legend

  var legend = React.cloneElement(legendComponent, _objectSpread({
    data: [].concat(_toConsumableArray(primaryDotMeasureLegendData ? primaryDotMeasureLegendData : []), _toConsumableArray(primarySegmentedMeasureLegendData ? primarySegmentedMeasureLegendData : []), _toConsumableArray(comparativeWarningMeasureLegendData ? comparativeWarningMeasureLegendData : []), _toConsumableArray(comparativeErrorMeasureLegendData ? comparativeErrorMeasureLegendData : []), _toConsumableArray(qualitativeRangeLegendData ? qualitativeRangeLegendData : [])),
    itemsPerRow: legendItemsPerRow,
    orientation: legendOrientation,
    position: legendPosition,
    theme: theme
  }, legendComponent.props)); // Primary dot measure

  var primaryDotMeasure = React.cloneElement(primaryDotMeasureComponent, _objectSpread({
    constrainToVisibleArea: constrainToVisibleArea,
    data: primaryDotMeasureData,
    domain: domain,
    height: chartSize.height,
    horizontal: horizontal,
    invert: invert,
    labelComponent: React.createElement(_ChartTooltip.ChartTooltip, {
      height: height,
      width: width
    }),
    labels: labels,
    padding: padding,
    size: (0, _chartBulletSize.getPrimaryDotMeasureSize)({
      height: chartSize.height,
      horizontal: horizontal,
      width: chartSize.width
    }),
    standalone: false,
    themeColor: themeColor,
    themeVariant: themeVariant,
    width: chartSize.width,
    y: primaryDotMeasureDataY
  }, primaryDotMeasureComponent.props)); // Primary segmented measure

  var primarySegmentedMeasure = React.cloneElement(primarySegmentedMeasureComponent, _objectSpread({
    constrainToVisibleArea: constrainToVisibleArea,
    barWidth: (0, _chartBulletSize.getPrimarySegmentedMeasureWidth)({
      height: chartSize.height,
      horizontal: horizontal,
      width: chartSize.width
    }),
    data: primarySegmentedMeasureData,
    domain: domain,
    height: chartSize.height,
    horizontal: horizontal,
    invert: invert,
    labelComponent: React.createElement(_ChartTooltip.ChartTooltip, {
      height: height,
      width: width
    }),
    labels: labels,
    padding: padding,
    standalone: false,
    themeColor: themeColor,
    themeVariant: themeVariant,
    width: chartSize.width,
    y: primarySegmentedMeasureDataY
  }, primarySegmentedMeasureComponent.props)); // Qualitative range

  var qualitativeRange = React.cloneElement(qualitativeRangeComponent, _objectSpread({
    constrainToVisibleArea: constrainToVisibleArea,
    barWidth: (0, _chartBulletSize.getQualitativeRangeBarWidth)({
      height: chartSize.height,
      horizontal: horizontal,
      width: chartSize.width
    }),
    data: qualitativeRangeData,
    domain: domain,
    height: chartSize.height,
    horizontal: horizontal,
    invert: invert,
    labelComponent: React.createElement(_ChartTooltip.ChartTooltip, {
      height: height,
      width: width
    }),
    labels: labels,
    padding: padding,
    standalone: false,
    width: chartSize.width,
    y: qualitativeRangeDataY,
    y0: qualitativeRangeDataY0
  }, qualitativeRangeComponent.props)); // Returns tick values -- Victory doesn't include min/max domain

  var getTickValues = function getTickValues(minVal, maxVal) {
    var tickValues = [minVal, maxVal];
    var range = 0;

    if (minVal < 0 && maxVal < 0) {
      range = Math.abs(minVal - maxVal);
    } else if (minVal < 0) {
      range = Math.abs(minVal) + maxVal;
    } else {
      range = maxVal - minVal;
    }

    var tickInterval = range / (_ChartTheme.ChartBulletStyles.axisTickCount - 1);

    for (var i = minVal; i < maxVal;) {
      i += tickInterval;
      tickValues.push(Math.ceil(i));
    }

    return tickValues;
  }; // Returns a wrapped legend


  var getWrappedLegend = function getWrappedLegend() {
    if (!legend.props.data) {
      return null;
    }

    var dx = 0;
    var dy = 0; // Adjust for padding

    if (legendPosition === _ChartLegend.ChartLegendPosition.bottom) {
      dy = horizontal ? defaultPadding.top * .5 + (defaultPadding.bottom * .5 - defaultPadding.bottom) - 25 : title ? -defaultPadding.bottom + 60 : -defaultPadding.bottom;
    } else if (legendPosition === _ChartLegend.ChartLegendPosition.bottomLeft) {
      dy = horizontal ? defaultPadding.top * .5 + (defaultPadding.bottom * .5 - defaultPadding.bottom) - 25 : title ? -defaultPadding.bottom + 60 : -defaultPadding.bottom;
      dx = -10;
    }

    return React.createElement(_ChartLegend.ChartLegendWrapper, {
      chartType: "bullet",
      dx: dx,
      dy: dy,
      height: chartSize.height,
      legendComponent: legend,
      orientation: legendOrientation,
      padding: padding,
      position: legendPosition,
      theme: theme,
      width: chartSize.width
    });
  }; // Returns comparative zero measure


  var getComparativeZeroMeasure = function getComparativeZeroMeasure() {
    var _domain = domain;
    var low = Array.isArray(_domain) ? _domain[0] : _domain.y && Array.isArray(_domain.y) ? _domain.y[0] : 0;
    var high = Array.isArray(_domain) ? _domain[_domain.length - 1] : _domain.y && Array.isArray(_domain.y) ? _domain.y[_domain.y.length - 1] : 0;

    if (low < 0 && high > 0) {
      return comparativeZeroMeasure;
    }

    return null;
  }; // Axis component for custom tick values


  var axis = React.cloneElement(axisComponent, _objectSpread({
    dependentAxis: horizontal ? false : true,
    domain: !horizontal ? domain : {
      x: domain.y,
      y: domain.x
    },
    height: chartSize.height,
    // Adjust for padding
    offsetX: !horizontal ? defaultPadding.left * .5 + (defaultPadding.right * .5 - (defaultPadding.right - 55)) : 0,
    offsetY: horizontal ? 80 - defaultPadding.top * .5 + (defaultPadding.bottom * .5 - 25) : 0,
    padding: padding,
    standalone: false,
    tickCount: _ChartTheme.ChartBulletStyles.axisTickCount,
    tickValues: getTickValues(domain.y[0], domain.y[1]),
    width: chartSize.width
  }, axisComponent.props));
  var bulletChart = React.createElement(React.Fragment, null, axis, bulletGroupTitle, bulletTitle, qualitativeRange, primarySegmentedMeasure, primaryDotMeasure, comparativeErrorMeasure, comparativeWarningMeasure, getComparativeZeroMeasure(), getWrappedLegend());
  return standalone ? React.createElement(_ChartContainer.ChartContainer, {
    desc: ariaDesc,
    height: height,
    title: ariaTitle,
    theme: theme,
    width: width
  }, bulletChart) : React.createElement(React.Fragment, null, bulletChart);
};

exports.ChartBullet = ChartBullet;
ChartBullet.propTypes = {
  ariaDesc: _propTypes["default"].string,
  ariaTitle: _propTypes["default"].string,
  axisComponent: _propTypes["default"].element,
  bulletSize: _propTypes["default"].number,
  comparativeErrorMeasureComponent: _propTypes["default"].element,
  comparativeErrorMeasureData: _propTypes["default"].arrayOf(_propTypes["default"].any),
  comparativeErrorMeasureDataY: _propTypes["default"].any,
  comparativeErrorMeasureLegendData: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    name: _propTypes["default"].string,
    symbol: _propTypes["default"].shape({
      fill: _propTypes["default"].string,
      type: _propTypes["default"].string
    })
  })),
  comparativeWarningMeasureComponent: _propTypes["default"].element,
  comparativeWarningMeasureData: _propTypes["default"].arrayOf(_propTypes["default"].any),
  comparativeWarningMeasureDataY: _propTypes["default"].any,
  comparativeWarningMeasureLegendData: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    name: _propTypes["default"].string,
    symbol: _propTypes["default"].shape({
      fill: _propTypes["default"].string,
      type: _propTypes["default"].string
    })
  })),
  comparativeZeroMeasureComponent: _propTypes["default"].element,
  constrainToVisibleArea: _propTypes["default"].bool,
  domain: _propTypes["default"].any,
  groupTitleComponent: _propTypes["default"].element,
  groupSubTitle: _propTypes["default"].string,
  groupTitle: _propTypes["default"].string,
  height: _propTypes["default"].number,
  horizontal: _propTypes["default"].bool,
  invert: _propTypes["default"].bool,
  labels: _propTypes["default"].func,
  legendComponent: _propTypes["default"].element,
  legendItemsPerRow: _propTypes["default"].number,
  legendOrientation: _propTypes["default"].oneOf(['horizontal', 'vertical'])
};
(0, _hoistNonReactStatics["default"])(ChartBullet, _victory.VictoryChart);
//# sourceMappingURL=ChartBullet.js.map