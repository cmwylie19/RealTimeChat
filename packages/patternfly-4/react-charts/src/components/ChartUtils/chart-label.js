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
exports.__esModule = true;
var victory_core_1 = require("victory-core");
var chart_origin_1 = require("./chart-origin");
var ChartTheme_1 = require("../ChartTheme");
// Returns x coordinate for bullet labels
exports.getBulletLabelX = function (_a) {
    var chartWidth = _a.chartWidth, _b = _a.dx, dx = _b === void 0 ? 0 : _b, labelPosition = _a.labelPosition;
    return (labelPosition === 'top' && chartWidth) ? Math.round(chartWidth / 2) : dx;
};
// Returns y coordinate for bullet labels
exports.getBulletLabelY = function (_a) {
    var chartHeight = _a.chartHeight, _b = _a.dy, dy = _b === void 0 ? 0 : _b, labelPosition = _a.labelPosition;
    switch (labelPosition) {
        case 'bottom':
            return chartHeight + ChartTheme_1.ChartCommonStyles.label.margin + dy;
        case 'left':
            return chartHeight ? Math.round(chartHeight / 2) + dy : dy;
        default:
            return dy;
    }
};
// Returns x coordinate for pie labels
exports.getPieLabelX = function (_a) {
    var _b = _a.dx, dx = _b === void 0 ? 0 : _b, height = _a.height, labelPosition = _a.labelPosition, legendPosition = _a.legendPosition, padding = _a.padding, width = _a.width;
    var origin = chart_origin_1.getPieOrigin({ height: height, padding: padding, width: width });
    var radius = victory_core_1.Helpers.getRadius({ height: height, width: width, padding: padding });
    switch (labelPosition) {
        case 'bottom':
        case 'center':
            return origin.x + dx;
        case 'right':
            switch (legendPosition) {
                case 'bottom':
                    return origin.x + ChartTheme_1.ChartCommonStyles.label.margin + dx + radius;
                case 'right':
                    return origin.x + ChartTheme_1.ChartCommonStyles.label.margin + dx;
                default:
                    return dx;
            }
        default:
            return dx;
    }
};
// Returns x coordinate for pie labels
exports.getPieLabelY = function (_a) {
    var _b = _a.dy, dy = _b === void 0 ? 0 : _b, height = _a.height, labelPosition = _a.labelPosition, padding = _a.padding, width = _a.width;
    var origin = chart_origin_1.getPieOrigin({ height: height, padding: padding, width: width });
    var radius = victory_core_1.Helpers.getRadius({ height: height, width: width, padding: padding });
    switch (labelPosition) {
        case 'center':
        case 'right':
            return origin.y + dy;
        case 'bottom':
            return origin.y + radius + ChartTheme_1.ChartCommonStyles.label.margin * 2 + dy;
        default:
            return dy;
    }
};
// Average pixels per glyph for overpass / Red Hat fonts
exports.overpassFontCharacterConstant = 2.5875;
// Returns an approximate size for the give text
exports.getLabelTextSize = function (_a) {
    var text = _a.text, theme = _a.theme;
    var style = theme.legend.style.labels;
    return victory_core_1.TextSize.approximateTextSize(text, __assign(__assign({}, style), { characterConstant: exports.overpassFontCharacterConstant }));
};
