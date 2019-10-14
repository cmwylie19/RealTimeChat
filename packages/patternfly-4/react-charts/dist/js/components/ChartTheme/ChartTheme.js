"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChartThresholdTheme = exports.ChartDonutThresholdStaticTheme = exports.ChartDonutThresholdDynamicTheme = exports.ChartDonutTheme = exports.ChartDonutUtilizationStaticTheme = exports.ChartDonutUtilizationDynamicTheme = exports.ChartBulletQualitativeRangeTheme = exports.ChartBulletTheme = exports.ChartBulletPrimarySegmentedMeasureTheme = exports.ChartBulletPrimaryNegativeMeasureTheme = exports.ChartBulletPrimaryDotMeasureTheme = exports.ChartBulletGroupTitleTheme = exports.ChartBulletComparativeWarningMeasureTheme = exports.ChartBulletComparativeMeasureTheme = exports.ChartBulletComparativeErrorMeasureTheme = exports.ChartBaseTheme = exports.ChartAxisTheme = exports.ChartThemeVariant = exports.ChartThemeColor = void 0;

var _axisTheme = require("./themes/axis-theme");

var _baseTheme = require("./themes/base-theme");

var _bulletTheme = require("./themes/bullet-theme");

var _donutTheme = require("./themes/donut-theme");

var _thresholdTheme = require("./themes/threshold-theme");

var _donutThresholdTheme = require("./themes/donut-threshold-theme");

var _donutUtilizationTheme = require("./themes/donut-utilization-theme");

/**
 * The color family to be applied to a theme. For example, 'blue' represents an ordered list of colors
 * (i.e., a color scale) composed from the blue color family defined by PatternFly core.
 *
 * For example, the 'blue' color scale looks like:
 *
 * chart_color_blue_100
 * chart_color_blue_200
 * chart_color_blue_300
 * chart_color_blue_400
 * chart_color_blue_500
 *
 * In this case, the chart_color_blue_100 value would be applied to the first data point in a chart.
 * The chart_color_blue_200 value would be applied to the second data point in a chart. And so on...
 *
 * If legend data is provided to a chart, those colors would be synced with the legend as well.
 *
 * The 'multiOrdered' color family is intended for ordered charts; donut, pie, bar, & stack
 * The 'multiUnordered' color family is intended for unordered charts; area & line
 * The 'multi' defaults to the 'multiOrdered' color family
 *
 * Note: These values are not intended to be applied directly as a component's fill style. For example, "multi" would
 * not be a valid fill color. Please use chart variables from PatternFly core (e.g., via the react-charts package)
 */
var ChartThemeColor = {
  blue: 'blue',
  cyan: 'cyan',
  "default": 'blue',
  gold: 'gold',
  gray: 'gray',
  green: 'green',
  multi: 'multi',
  multiOrdered: 'multi-ordered',
  multiUnordered: 'multi-unordered',
  orange: 'orange',
  purple: 'purple'
};
/**
 * The variant to be applied to a theme.
 *
 * Note: Only the light variant is currently supported
 */

exports.ChartThemeColor = ChartThemeColor;
var ChartThemeVariant = {
  dark: 'dark',
  "default": 'light',
  light: 'light'
};
exports.ChartThemeVariant = ChartThemeVariant;
var ChartAxisTheme = _axisTheme.AxisTheme;
exports.ChartAxisTheme = ChartAxisTheme;
var ChartBaseTheme = _baseTheme.BaseTheme;
exports.ChartBaseTheme = ChartBaseTheme;
var ChartBulletComparativeErrorMeasureTheme = _bulletTheme.BulletComparativeErrorMeasureTheme;
exports.ChartBulletComparativeErrorMeasureTheme = ChartBulletComparativeErrorMeasureTheme;
var ChartBulletComparativeMeasureTheme = _bulletTheme.BulletComparativeMeasureTheme;
exports.ChartBulletComparativeMeasureTheme = ChartBulletComparativeMeasureTheme;
var ChartBulletComparativeWarningMeasureTheme = _bulletTheme.BulletComparativeWarningMeasureTheme;
exports.ChartBulletComparativeWarningMeasureTheme = ChartBulletComparativeWarningMeasureTheme;
var ChartBulletGroupTitleTheme = _bulletTheme.BulletGroupTitleTheme;
exports.ChartBulletGroupTitleTheme = ChartBulletGroupTitleTheme;
var ChartBulletPrimaryDotMeasureTheme = _bulletTheme.BulletPrimaryDotMeasureTheme;
exports.ChartBulletPrimaryDotMeasureTheme = ChartBulletPrimaryDotMeasureTheme;
var ChartBulletPrimaryNegativeMeasureTheme = _bulletTheme.BulletPrimaryNegativeMeasureTheme;
exports.ChartBulletPrimaryNegativeMeasureTheme = ChartBulletPrimaryNegativeMeasureTheme;
var ChartBulletPrimarySegmentedMeasureTheme = _bulletTheme.BulletPrimarySegmentedMeasureTheme;
exports.ChartBulletPrimarySegmentedMeasureTheme = ChartBulletPrimarySegmentedMeasureTheme;
var ChartBulletTheme = _bulletTheme.BulletTheme;
exports.ChartBulletTheme = ChartBulletTheme;
var ChartBulletQualitativeRangeTheme = _bulletTheme.BulletQualitativeRangeTheme;
exports.ChartBulletQualitativeRangeTheme = ChartBulletQualitativeRangeTheme;
var ChartDonutUtilizationDynamicTheme = _donutUtilizationTheme.DonutUtilizationDynamicTheme;
exports.ChartDonutUtilizationDynamicTheme = ChartDonutUtilizationDynamicTheme;
var ChartDonutUtilizationStaticTheme = _donutUtilizationTheme.DonutUtilizationStaticTheme;
exports.ChartDonutUtilizationStaticTheme = ChartDonutUtilizationStaticTheme;
var ChartDonutTheme = _donutTheme.DonutTheme;
exports.ChartDonutTheme = ChartDonutTheme;
var ChartDonutThresholdDynamicTheme = _donutThresholdTheme.DonutThresholdDynamicTheme;
exports.ChartDonutThresholdDynamicTheme = ChartDonutThresholdDynamicTheme;
var ChartDonutThresholdStaticTheme = _donutThresholdTheme.DonutThresholdStaticTheme;
exports.ChartDonutThresholdStaticTheme = ChartDonutThresholdStaticTheme;
var ChartThresholdTheme = _thresholdTheme.ThresholdTheme;
exports.ChartThresholdTheme = ChartThresholdTheme;
//# sourceMappingURL=ChartTheme.js.map