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
var victory_core_1 = require("victory-core");
var ChartUtils_1 = require("../../ChartUtils");
exports.getComparativeErrorMeasureData = function (_a) {
    var data = _a.data, themeColor = _a.themeColor, themeVariant = _a.themeVariant, 
    // destructure last
    _b = _a.theme, 
    // destructure last
    theme = _b === void 0 ? ChartUtils_1.getBulletComparativeErrorMeasureTheme(themeColor, themeVariant) : _b, y = _a.y;
    return exports.getComparativeMeasureData({
        data: data,
        theme: theme,
        themeColor: themeColor,
        themeVariant: themeVariant,
        y: y
    });
};
exports.getComparativeMeasureData = function (_a) {
    var data = _a.data, themeColor = _a.themeColor, themeVariant = _a.themeVariant, 
    // destructure last
    _b = _a.theme, 
    // destructure last
    theme = _b === void 0 ? ChartUtils_1.getBulletComparativeMeasureTheme(themeColor, themeVariant) : _b, y = _a.y;
    var datum = [];
    victory_core_1.Data.formatData(data, { y: y }, ['y']).forEach((function (dataPoint, index) {
        datum.push(__assign(__assign({}, dataPoint), { _index: index // Save to sync legend color
         }));
    }));
    var computedData = datum.map(function (dataPoint, index) {
        return __assign(__assign({}, dataPoint), { x: 1, _x: 1, y0: dataPoint._y, _y0: dataPoint._y, _color: theme.bar.style.data.fill // Save to sync legend color
         });
    });
    return computedData;
};
exports.getComparativeWarningMeasureData = function (_a) {
    var data = _a.data, themeColor = _a.themeColor, themeVariant = _a.themeVariant, 
    // destructure last
    _b = _a.theme, 
    // destructure last
    theme = _b === void 0 ? ChartUtils_1.getBulletComparativeWarningMeasureTheme(themeColor, themeVariant) : _b, y = _a.y;
    return exports.getComparativeMeasureData({
        data: data,
        theme: theme,
        themeColor: themeColor,
        themeVariant: themeVariant,
        y: y
    });
};
exports.getPrimaryDotMeasureData = function (_a) {
    var data = _a.data, invert = _a.invert, themeColor = _a.themeColor, themeVariant = _a.themeVariant, 
    // destructure last
    _b = _a.theme, 
    // destructure last
    theme = _b === void 0 ? ChartUtils_1.getBulletPrimaryDotMeasureTheme(themeColor, themeVariant) : _b, y = _a.y, y0 = _a.y0;
    return exports.getComparativeMeasureData({
        data: data,
        invert: invert,
        theme: theme,
        themeColor: themeColor,
        themeVariant: themeVariant,
        y: y,
        y0: y0
    });
};
exports.getPrimarySegmentedMeasureData = function (_a) {
    var data = _a.data, invert = _a.invert, themeColor = _a.themeColor, themeVariant = _a.themeVariant, 
    // destructure last
    _b = _a.theme, 
    // destructure last
    theme = _b === void 0 ? ChartUtils_1.getBulletPrimarySegmentedMeasureTheme(themeColor, themeVariant) : _b, _c = _a.negativeMeasureTheme, negativeMeasureTheme = _c === void 0 ? ChartUtils_1.getBulletPrimaryNegativeMeasureTheme(themeColor, themeVariant) : _c, y = _a.y, y0 = _a.y0;
    var negativeDatum = [];
    var positiveDatum = [];
    victory_core_1.Data.formatData(data, { y: y, y0: y0 }, ['y', 'y0']).forEach((function (dataPoint, index) {
        if (dataPoint._y < 0) {
            negativeDatum.push(__assign(__assign({}, dataPoint), { _index: index // Save to sync legend color
             }));
        }
        else {
            positiveDatum.push(__assign(__assign({}, dataPoint), { _index: index // Save to sync legend color
             }));
        }
    }));
    // Instead of relying on colorScale, colors must be added to each measure in ascending order
    var negativeComputedData = negativeDatum.sort(function (a, b) { return b._y - a._y; }).
        map(function (dataPoint, index) {
        return __assign(__assign({}, dataPoint), { x: 1, _x: 1, _color: invert
                ? theme.group.colorScale[index % theme.group.colorScale.length]
                : negativeMeasureTheme.group.colorScale[index % theme.group.colorScale.length] });
        // Sort descending so largest bar is appears behind others
    }).reverse();
    // Instead of relying on colorScale, colors must be added to each measure in ascending order
    var positiveComputedData = positiveDatum.sort(function (a, b) { return a._y - b._y; }).
        map(function (dataPoint, index) {
        return __assign(__assign({}, dataPoint), { x: 1, _x: 1, _color: invert
                ? negativeMeasureTheme.group.colorScale[index % theme.group.colorScale.length]
                : theme.group.colorScale[index % theme.group.colorScale.length] });
        // Sort descending so largest bar is appears behind others
    }).reverse();
    return __spreadArrays(negativeComputedData, positiveComputedData);
};
exports.getQualitativeRangeData = function (_a) {
    var data = _a.data, invert = _a.invert, themeColor = _a.themeColor, themeVariant = _a.themeVariant, 
    // destructure last
    _b = _a.theme, 
    // destructure last
    theme = _b === void 0 ? ChartUtils_1.getBulletQualitativeRangeTheme(themeColor, themeVariant) : _b, y = _a.y, y0 = _a.y0;
    var datum = [];
    victory_core_1.Data.formatData(data, { y: y, y0: y0 }, ['y', 'y0']).forEach((function (dataPoint, index) {
        datum.push(__assign(__assign({}, dataPoint), { _index: index // Save to sync legend color
         }));
    }));
    var computedData = datum.sort(function (a, b) { return invert ? b._y - a._y : a._y - b._y; }).
        map(function (dataPoint, index) {
        return __assign(__assign({}, dataPoint), { x: 1, _x: 1, 
            // Instead of relying on colorScale, colors must be added to each measure in ascending order
            _color: theme.group.colorScale[index % theme.group.colorScale.length] });
        // Sort descending so largest bar is appears behind others
    }).reverse();
    return computedData;
};
