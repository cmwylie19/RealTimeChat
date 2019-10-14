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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var ChartTheme_1 = require("../../ChartTheme");
var ChartUtils_1 = require("../../ChartUtils");
exports.getComparativeMeasureErrorWidth = function (_a) {
    var height = _a.height, horizontal = _a.horizontal, themeColor = _a.themeColor, themeVariant = _a.themeVariant, width = _a.width, 
    // destructure last
    _b = _a.theme, 
    // destructure last
    theme = _b === void 0 ? ChartUtils_1.getBulletComparativeErrorMeasureTheme(themeColor, themeVariant) : _b;
    return exports.scaleBarWidth({
        defaultSize: theme.bar.height,
        height: height,
        horizontal: horizontal,
        value: ChartTheme_1.ChartBulletStyles.comparativeMeasureErrorWidth,
        width: width
    });
};
exports.getComparativeMeasureWidth = function (_a) {
    var height = _a.height, horizontal = _a.horizontal, themeColor = _a.themeColor, themeVariant = _a.themeVariant, width = _a.width, 
    // destructure last
    _b = _a.theme, 
    // destructure last
    theme = _b === void 0 ? ChartUtils_1.getBulletComparativeMeasureTheme(themeColor, themeVariant) : _b;
    return exports.scaleBarWidth({
        defaultSize: theme.bar.height,
        height: height,
        horizontal: horizontal,
        value: ChartTheme_1.ChartBulletStyles.comparativeMeasureWidth,
        width: width
    });
};
exports.getComparativeMeasureWarningWidth = function (_a) {
    var height = _a.height, horizontal = _a.horizontal, themeColor = _a.themeColor, themeVariant = _a.themeVariant, width = _a.width, 
    // destructure last
    _b = _a.theme, 
    // destructure last
    theme = _b === void 0 ? ChartUtils_1.getBulletComparativeWarningMeasureTheme(themeColor, themeVariant) : _b;
    return exports.scaleBarWidth({
        defaultSize: theme.bar.height,
        height: height,
        horizontal: horizontal,
        value: ChartTheme_1.ChartBulletStyles.comparativeMeasureWarningWidth,
        width: width
    });
};
exports.getPrimaryDotMeasureSize = function (_a) {
    var height = _a.height, horizontal = _a.horizontal, themeColor = _a.themeColor, themeVariant = _a.themeVariant, width = _a.width, 
    // destructure last
    _b = _a.theme, 
    // destructure last
    theme = _b === void 0 ? ChartUtils_1.getBulletPrimaryDotMeasureTheme(themeColor, themeVariant) : _b;
    return exports.scaleSize({
        defaultSize: theme.group.height,
        height: height,
        horizontal: horizontal,
        value: ChartTheme_1.ChartBulletStyles.primaryDotMeasureSize,
        width: width
    });
};
exports.getPrimarySegmentedMeasureWidth = function (_a) {
    var height = _a.height, horizontal = _a.horizontal, themeColor = _a.themeColor, themeVariant = _a.themeVariant, width = _a.width, 
    // destructure last
    _b = _a.theme, 
    // destructure last
    theme = _b === void 0 ? ChartUtils_1.getBulletPrimarySegmentedMeasureTheme(themeColor, themeVariant) : _b;
    return exports.scaleBarWidth({
        defaultSize: theme.group.height,
        height: height,
        horizontal: horizontal,
        scale: .3,
        value: ChartTheme_1.ChartBulletStyles.primarySegmentedMeasureWidth,
        width: width
    });
};
exports.getQualitativeRangeBarWidth = function (_a) {
    var height = _a.height, horizontal = _a.horizontal, themeColor = _a.themeColor, themeVariant = _a.themeVariant, width = _a.width, 
    // destructure last
    _b = _a.theme, 
    // destructure last
    theme = _b === void 0 ? ChartUtils_1.getBulletQualitativeRangeTheme(themeColor, themeVariant) : _b;
    return exports.scaleBarWidth({
        defaultSize: theme.group.height,
        height: height,
        horizontal: horizontal,
        value: ChartTheme_1.ChartBulletStyles.qualitativeRangeWidth,
        width: width
    });
};
var scale = function (_a) {
    var defaultSize = _a.defaultSize, height = _a.height, _b = _a.horizontal, horizontal = _b === void 0 ? true : _b, _c = _a.scale, scale = _c === void 0 ? 1 : _c, value = _a.value, width = _a.width;
    return horizontal
        ? height > defaultSize
            ? value + (height - defaultSize) * scale
            : value - (defaultSize - height) * scale
        : width > defaultSize
            ? value + (width - defaultSize) * scale
            : value - (defaultSize - width) * scale;
};
// Scale bar width per the given size properties
exports.scaleBarWidth = function (props) { return Math.max(scale(props), 0); };
// Scale size per the given size properties
exports.scaleSize = function (_a) {
    var value = _a.value, rest = __rest(_a, ["value"]);
    return Math.round(scale(__assign({ scale: 1 / value, value: value }, rest)));
};
