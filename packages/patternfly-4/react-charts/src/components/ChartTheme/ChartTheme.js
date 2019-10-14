"use strict";
exports.__esModule = true;
var axis_theme_1 = require("./themes/axis-theme");
var base_theme_1 = require("./themes/base-theme");
var bullet_theme_1 = require("./themes/bullet-theme");
var donut_theme_1 = require("./themes/donut-theme");
var threshold_theme_1 = require("./themes/threshold-theme");
var donut_threshold_theme_1 = require("./themes/donut-threshold-theme");
var donut_utilization_theme_1 = require("./themes/donut-utilization-theme");
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
exports.ChartThemeColor = {
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
exports.ChartThemeVariant = {
    dark: 'dark',
    "default": 'light',
    light: 'light'
};
exports.ChartAxisTheme = axis_theme_1.AxisTheme;
exports.ChartBaseTheme = base_theme_1.BaseTheme;
exports.ChartBulletComparativeErrorMeasureTheme = bullet_theme_1.BulletComparativeErrorMeasureTheme;
exports.ChartBulletComparativeMeasureTheme = bullet_theme_1.BulletComparativeMeasureTheme;
exports.ChartBulletComparativeWarningMeasureTheme = bullet_theme_1.BulletComparativeWarningMeasureTheme;
exports.ChartBulletGroupTitleTheme = bullet_theme_1.BulletGroupTitleTheme;
exports.ChartBulletPrimaryDotMeasureTheme = bullet_theme_1.BulletPrimaryDotMeasureTheme;
exports.ChartBulletPrimaryNegativeMeasureTheme = bullet_theme_1.BulletPrimaryNegativeMeasureTheme;
exports.ChartBulletPrimarySegmentedMeasureTheme = bullet_theme_1.BulletPrimarySegmentedMeasureTheme;
exports.ChartBulletTheme = bullet_theme_1.BulletTheme;
exports.ChartBulletQualitativeRangeTheme = bullet_theme_1.BulletQualitativeRangeTheme;
exports.ChartDonutUtilizationDynamicTheme = donut_utilization_theme_1.DonutUtilizationDynamicTheme;
exports.ChartDonutUtilizationStaticTheme = donut_utilization_theme_1.DonutUtilizationStaticTheme;
exports.ChartDonutTheme = donut_theme_1.DonutTheme;
exports.ChartDonutThresholdDynamicTheme = donut_threshold_theme_1.DonutThresholdDynamicTheme;
exports.ChartDonutThresholdStaticTheme = donut_threshold_theme_1.DonutThresholdStaticTheme;
exports.ChartThresholdTheme = threshold_theme_1.ThresholdTheme;
