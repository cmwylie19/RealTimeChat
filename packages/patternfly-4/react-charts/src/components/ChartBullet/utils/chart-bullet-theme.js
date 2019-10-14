"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var chart_bullet_data_1 = require("./chart-bullet-data");
var ChartUtils_1 = require("../../ChartUtils");
var getLegendColorScale = function (computedData, legendData) {
    var colorScale = [];
    legendData.forEach(function (data, index) {
        for (var i = 0; i < computedData.length; i++) {
            if (index === computedData[i]._index) {
                colorScale.push(computedData[i]._color);
            }
        }
    });
    return colorScale;
};
exports.getColorScale = function (_a) {
    var comparativeErrorMeasureData = _a.comparativeErrorMeasureData, comparativeErrorMeasureLegendData = _a.comparativeErrorMeasureLegendData, comparativeWarningMeasureData = _a.comparativeWarningMeasureData, comparativeWarningMeasureLegendData = _a.comparativeWarningMeasureLegendData, invert = _a.invert, primaryDotMeasureData = _a.primaryDotMeasureData, primaryDotMeasureLegendData = _a.primaryDotMeasureLegendData, primarySegmentedMeasureData = _a.primarySegmentedMeasureData, primarySegmentedMeasureLegendData = _a.primarySegmentedMeasureLegendData, qualitativeRangeData = _a.qualitativeRangeData, qualitativeRangeLegendData = _a.qualitativeRangeLegendData, themeColor = _a.themeColor, themeVariant = _a.themeVariant;
    var colorScale = [];
    if (primaryDotMeasureLegendData && primaryDotMeasureLegendData.length) {
        var computedData = chart_bullet_data_1.getPrimaryDotMeasureData({
            data: primaryDotMeasureData,
            invert: invert
        });
        colorScale.push.apply(colorScale, getLegendColorScale(computedData, primaryDotMeasureLegendData));
    }
    if (primarySegmentedMeasureLegendData && primarySegmentedMeasureLegendData.length) {
        var computedData = chart_bullet_data_1.getPrimarySegmentedMeasureData({
            data: primarySegmentedMeasureData,
            invert: invert,
            themeColor: themeColor,
            themeVariant: themeVariant
        });
        colorScale.push.apply(colorScale, getLegendColorScale(computedData, primarySegmentedMeasureLegendData));
    }
    if (comparativeWarningMeasureLegendData && comparativeWarningMeasureLegendData.length) {
        var computedData = chart_bullet_data_1.getComparativeWarningMeasureData({
            data: comparativeWarningMeasureData,
            invert: invert,
            themeColor: themeColor,
            themeVariant: themeVariant
        });
        colorScale.push.apply(colorScale, getLegendColorScale(computedData, comparativeWarningMeasureLegendData));
    }
    if (comparativeErrorMeasureLegendData && comparativeErrorMeasureLegendData.length) {
        var computedData = chart_bullet_data_1.getComparativeErrorMeasureData({
            data: comparativeErrorMeasureData,
            invert: invert,
            themeColor: themeColor,
            themeVariant: themeVariant
        });
        colorScale.push.apply(colorScale, getLegendColorScale(computedData, comparativeErrorMeasureLegendData));
    }
    if (qualitativeRangeLegendData && qualitativeRangeLegendData.length) {
        var computedData = chart_bullet_data_1.getQualitativeRangeData({
            data: qualitativeRangeData,
            invert: invert
        });
        colorScale.push.apply(colorScale, getLegendColorScale(computedData, qualitativeRangeLegendData));
    }
    return colorScale;
};
// Get bullet chart theme with legend color scale
exports.getBulletThemeWithLegendColorScale = function (_a) {
    var comparativeErrorMeasureData = _a.comparativeErrorMeasureData, comparativeErrorMeasureLegendData = _a.comparativeErrorMeasureLegendData, comparativeWarningMeasureData = _a.comparativeWarningMeasureData, comparativeWarningMeasureLegendData = _a.comparativeWarningMeasureLegendData, invert = _a.invert, primaryDotMeasureData = _a.primaryDotMeasureData, primaryDotMeasureLegendData = _a.primaryDotMeasureLegendData, primarySegmentedMeasureData = _a.primarySegmentedMeasureData, primarySegmentedMeasureLegendData = _a.primarySegmentedMeasureLegendData, qualitativeRangeData = _a.qualitativeRangeData, qualitativeRangeLegendData = _a.qualitativeRangeLegendData, themeColor = _a.themeColor, themeVariant = _a.themeVariant;
    var colorScale = exports.getColorScale({
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
    });
    var theme = ChartUtils_1.getBulletTheme(themeColor, themeVariant);
    theme.legend.colorScale = __spreadArrays(colorScale);
    return theme;
};
