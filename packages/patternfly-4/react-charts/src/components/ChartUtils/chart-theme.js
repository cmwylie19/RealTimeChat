"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var lodash_1 = require("lodash");
var blue_color_theme_1 = require("../ChartTheme/themes/dark/blue-color-theme");
var cyan_color_theme_1 = require("../ChartTheme/themes/dark/cyan-color-theme");
var gold_color_theme_1 = require("../ChartTheme/themes/dark/gold-color-theme");
var gray_color_theme_1 = require("../ChartTheme/themes/dark/gray-color-theme");
var green_color_theme_1 = require("../ChartTheme/themes/dark/green-color-theme");
var multi_color_ordered_theme_1 = require("../ChartTheme/themes/dark/multi-color-ordered-theme");
var multi_color_unordered_theme_1 = require("../ChartTheme/themes/dark/multi-color-unordered-theme");
var orange_color_theme_1 = require("../ChartTheme/themes/dark/orange-color-theme");
var purple_color_theme_1 = require("../ChartTheme/themes/dark/purple-color-theme");
var blue_color_theme_2 = require("../ChartTheme/themes/light/blue-color-theme");
var cyan_color_theme_2 = require("../ChartTheme/themes/light/cyan-color-theme");
var gold_color_theme_2 = require("../ChartTheme/themes/light/gold-color-theme");
var gray_color_theme_2 = require("../ChartTheme/themes/light/gray-color-theme");
var green_color_theme_2 = require("../ChartTheme/themes/light/green-color-theme");
var multi_color_ordered_theme_2 = require("../ChartTheme/themes/light/multi-color-ordered-theme");
var multi_color_unordered_theme_2 = require("../ChartTheme/themes/light/multi-color-unordered-theme");
var orange_color_theme_2 = require("../ChartTheme/themes/light/orange-color-theme");
var purple_color_theme_2 = require("../ChartTheme/themes/light/purple-color-theme");
var ChartTheme_1 = require("../ChartTheme/ChartTheme");
var lodash_2 = require("lodash");
// Apply custom properties to base and color themes
exports.getCustomTheme = function (themeColor, themeVariant, customTheme) {
    return lodash_1.merge(exports.getTheme(themeColor, themeVariant), customTheme);
};
// Returns axis theme
exports.getAxisTheme = function (themeColor, themeVariant) {
    var theme = exports.getCustomTheme(themeColor, themeVariant, ChartTheme_1.ChartAxisTheme);
    return theme;
};
// Returns bullet chart theme
exports.getBulletTheme = function (themeColor, themeVariant) {
    return exports.getCustomTheme(themeColor, themeVariant, ChartTheme_1.ChartBulletTheme);
};
// Returns comparative error measure theme for bullet chart
exports.getBulletComparativeErrorMeasureTheme = function (themeColor, themeVariant) {
    return exports.getCustomTheme(themeColor, themeVariant, ChartTheme_1.ChartBulletComparativeErrorMeasureTheme);
};
// Returns comparative measure theme for bullet chart
exports.getBulletComparativeMeasureTheme = function (themeColor, themeVariant) {
    return exports.getCustomTheme(themeColor, themeVariant, ChartTheme_1.ChartBulletComparativeMeasureTheme);
};
// Returns comparative warning measure theme for bullet chart
exports.getBulletComparativeWarningMeasureTheme = function (themeColor, themeVariant) {
    return exports.getCustomTheme(themeColor, themeVariant, ChartTheme_1.ChartBulletComparativeWarningMeasureTheme);
};
// Returns group title theme for bullet chart
exports.getBulletGroupTitleTheme = function (themeColor, themeVariant) {
    return exports.getCustomTheme(themeColor, themeVariant, ChartTheme_1.ChartBulletGroupTitleTheme);
};
// Returns primary dot measure theme for bullet chart
exports.getBulletPrimaryDotMeasureTheme = function (themeColor, themeVariant) {
    return exports.getCustomTheme(themeColor, themeVariant, ChartTheme_1.ChartBulletPrimaryDotMeasureTheme);
};
// Returns primary negative measure theme for bullet chart
exports.getBulletPrimaryNegativeMeasureTheme = function (themeColor, themeVariant) {
    return exports.getCustomTheme(themeColor, themeVariant, ChartTheme_1.ChartBulletPrimaryNegativeMeasureTheme);
};
// Returns primary segmented measure theme for bullet chart
exports.getBulletPrimarySegmentedMeasureTheme = function (themeColor, themeVariant) {
    return exports.getCustomTheme(themeColor, themeVariant, ChartTheme_1.ChartBulletPrimarySegmentedMeasureTheme);
};
// Returns qualitative range theme for bullet chart
exports.getBulletQualitativeRangeTheme = function (themeColor, themeVariant) {
    return exports.getCustomTheme(themeColor, themeVariant, ChartTheme_1.ChartBulletQualitativeRangeTheme);
};
// Returns donut theme
exports.getDonutTheme = function (themeColor, themeVariant) {
    return exports.getCustomTheme(themeColor, themeVariant, ChartTheme_1.ChartDonutTheme);
};
// Returns dynamic donut threshold theme
exports.getDonutThresholdDynamicTheme = function (themeColor, themeVariant) {
    var theme = exports.getCustomTheme(themeColor, themeVariant, ChartTheme_1.ChartDonutThresholdDynamicTheme);
    // Merge just the first color of dynamic (blue, green, etc.) with static (grey) for expected colorScale
    theme.legend.colorScale = __spreadArrays([theme.pie.colorScale[0]], ChartTheme_1.ChartDonutThresholdDynamicTheme.legend.colorScale);
    // Merge the threshold colors in case users want to show the unused data
    theme.pie.colorScale = __spreadArrays([theme.pie.colorScale[0]], ChartTheme_1.ChartDonutThresholdStaticTheme.pie.colorScale);
    return theme;
};
// Returns static donut threshold theme
exports.getDonutThresholdStaticTheme = function (themeColor, themeVariant, invert) {
    var staticTheme = lodash_2.cloneDeep(ChartTheme_1.ChartDonutThresholdStaticTheme);
    if (invert) {
        staticTheme.pie.colorScale = staticTheme.pie.colorScale.reverse();
    }
    return exports.getCustomTheme(themeColor, themeVariant, staticTheme);
};
// Returns donut utilization theme
exports.getDonutUtilizationTheme = function (themeColor, themeVariant) {
    var theme = exports.getCustomTheme(themeColor, themeVariant, ChartTheme_1.ChartDonutUtilizationDynamicTheme);
    // Merge just the first color of dynamic (blue, green, etc.) with static (grey) for expected colorScale
    theme.pie.colorScale = __spreadArrays([theme.pie.colorScale[0]], ChartTheme_1.ChartDonutUtilizationStaticTheme.pie.colorScale);
    theme.legend.colorScale = __spreadArrays([theme.legend.colorScale[0]], ChartTheme_1.ChartDonutUtilizationStaticTheme.legend.colorScale);
    return theme;
};
// Returns dark theme colors
exports.getDarkThemeColors = function (themeColor) {
    switch (themeColor) {
        case ChartTheme_1.ChartThemeColor.blue:
            return blue_color_theme_1.DarkBlueColorTheme;
        case ChartTheme_1.ChartThemeColor.cyan:
            return cyan_color_theme_1.DarkCyanColorTheme;
        case ChartTheme_1.ChartThemeColor.gold:
            return gold_color_theme_1.DarkGoldColorTheme;
        case ChartTheme_1.ChartThemeColor.gray:
            return gray_color_theme_1.DarkGrayColorTheme;
        case ChartTheme_1.ChartThemeColor.green:
            return green_color_theme_1.DarkGreenColorTheme;
        case ChartTheme_1.ChartThemeColor.multi:
        case ChartTheme_1.ChartThemeColor.multiOrdered:
            return multi_color_ordered_theme_1.DarkMultiColorOrderedTheme;
        case ChartTheme_1.ChartThemeColor.multiUnordered:
            return multi_color_unordered_theme_1.DarkMultiColorUnorderedTheme;
        case ChartTheme_1.ChartThemeColor.orange:
            return orange_color_theme_1.DarkOrangeColorTheme;
        case ChartTheme_1.ChartThemeColor.purple:
            return purple_color_theme_1.DarkPurpleColorTheme;
        default:
            return blue_color_theme_1.DarkBlueColorTheme;
    }
};
// Returns light theme colors
exports.getLightThemeColors = function (themeColor) {
    switch (themeColor) {
        case ChartTheme_1.ChartThemeColor.blue:
            return blue_color_theme_2.LightBlueColorTheme;
        case ChartTheme_1.ChartThemeColor.cyan:
            return cyan_color_theme_2.LightCyanColorTheme;
        case ChartTheme_1.ChartThemeColor.gold:
            return gold_color_theme_2.LightGoldColorTheme;
        case ChartTheme_1.ChartThemeColor.gray:
            return gray_color_theme_2.LightGrayColorTheme;
        case ChartTheme_1.ChartThemeColor.green:
            return green_color_theme_2.LightGreenColorTheme;
        case ChartTheme_1.ChartThemeColor.multi:
        case ChartTheme_1.ChartThemeColor.multiOrdered:
            return multi_color_ordered_theme_2.LightMultiColorOrderedTheme;
        case ChartTheme_1.ChartThemeColor.multiUnordered:
            return multi_color_unordered_theme_2.LightMultiColorUnorderedTheme;
        case ChartTheme_1.ChartThemeColor.orange:
            return orange_color_theme_2.LightOrangeColorTheme;
        case ChartTheme_1.ChartThemeColor.purple:
            return purple_color_theme_2.LightPurpleColorTheme;
        default:
            return blue_color_theme_2.LightBlueColorTheme;
    }
};
// Applies theme color and variant to base theme
exports.getTheme = function (themeColor, themeVariant) {
    // Deep clone
    var baseTheme = __assign({}, JSON.parse(JSON.stringify(ChartTheme_1.ChartBaseTheme)));
    switch (themeVariant) {
        case ChartTheme_1.ChartThemeVariant.dark:
            return lodash_1.merge(baseTheme, exports.getDarkThemeColors(themeColor));
        case ChartTheme_1.ChartThemeVariant.light:
            return lodash_1.merge(baseTheme, exports.getLightThemeColors(themeColor));
        default:
            return lodash_1.merge(baseTheme, exports.getLightThemeColors(themeColor));
    }
};
// Returns threshold theme
exports.getThresholdTheme = function (themeColor, themeVariant) {
    return exports.getCustomTheme(themeColor, themeVariant, ChartTheme_1.ChartThresholdTheme);
};
