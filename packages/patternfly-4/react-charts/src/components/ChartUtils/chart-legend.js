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
var victory_1 = require("victory");
var victory_core_1 = require("victory-core");
var ChartTheme_1 = require("../ChartTheme");
var chart_label_1 = require("./chart-label");
var chart_origin_1 = require("./chart-origin");
// Returns legend dimensions
exports.getLegendDimensions = function (_a) {
    var legendData = _a.legendData, legendOrientation = _a.legendOrientation, legendProps = _a.legendProps, theme = _a.theme;
    if (legendData || legendProps.data) {
        return victory_1.VictoryLegend.getDimensions(__assign({ data: legendData, orientation: legendOrientation, theme: theme }, legendProps // override above
        ));
    }
    return {};
};
// Returns x coordinate for legend
exports.getLegendX = function (_a) {
    var chartType = _a.chartType, rest = __rest(_a, ["chartType"]);
    return (chartType === 'pie') ? exports.getPieLegendX(rest) : exports.getChartLegendX(rest);
};
// Returns y coordinate for legend
exports.getLegendY = function (_a) {
    var chartType = _a.chartType, rest = __rest(_a, ["chartType"]);
    switch (chartType) {
        case 'pie':
            return exports.getPieLegendY(rest);
        case 'bullet':
            return exports.getBulletLegendY(rest);
        default:
            return exports.getChartLegendY(rest);
    }
};
// Returns y coordinate for bullet legends
exports.getBulletLegendY = function (_a) {
    var _b = _a.dy, dy = _b === void 0 ? 0 : _b, height = _a.height, legendPosition = _a.legendPosition, legendData = _a.legendData, legendOrientation = _a.legendOrientation, legendProps = _a.legendProps, padding = _a.padding, theme = _a.theme, width = _a.width;
    var _c = victory_core_1.Helpers.getPadding({ padding: padding }), left = _c.left, right = _c.right;
    var chartSize = {
        height: height,
        width: width - left - right
    };
    switch (legendPosition) {
        case 'bottom':
        case 'bottom-left':
            return chartSize.height + ChartTheme_1.ChartCommonStyles.legend.margin + dy;
        case 'right': {
            // Legend height with padding
            var legendDimensions = exports.getLegendDimensions({
                legendData: legendData,
                legendOrientation: legendOrientation,
                legendProps: legendProps,
                theme: theme
            });
            var legendPadding = function (legendData) { return (legendData && legendData.length > 0 ? 17 : 0); };
            return (chartSize.height - legendDimensions.height) / 2 + legendPadding(legendData);
        }
        default:
            return dy;
    }
};
// Returns x coordinate for chart legends
exports.getChartLegendX = function (_a) {
    var _b = _a.dx, dx = _b === void 0 ? 0 : _b, height = _a.height, legendData = _a.legendData, legendOrientation = _a.legendOrientation, legendPosition = _a.legendPosition, legendProps = _a.legendProps, padding = _a.padding, theme = _a.theme, width = _a.width;
    var _c = victory_core_1.Helpers.getPadding({ padding: padding }), top = _c.top, bottom = _c.bottom, left = _c.left, right = _c.right;
    var chartSize = {
        height: Math.abs(height - (bottom + top)),
        width: Math.abs(width - (left + right))
    };
    var legendDimensions = exports.getLegendDimensions({
        legendData: legendData,
        legendOrientation: legendOrientation,
        legendProps: legendProps,
        theme: theme
    });
    var textSizeWorkAround = getTextSizeWorkAround({
        legendData: legendData,
        legendOrientation: legendOrientation,
        theme: theme
    });
    switch (legendPosition) {
        case 'bottom':
            return width > legendDimensions.width - textSizeWorkAround
                ? Math.round((width - (legendDimensions.width - textSizeWorkAround)) / 2) + dx : dx;
        case 'bottom-left':
            return left + dx;
        case 'right':
            return chartSize.width + ChartTheme_1.ChartCommonStyles.legend.margin + left + dx;
        default:
            return dx;
    }
};
// Returns y coordinate for chart legends
exports.getChartLegendY = function (_a) {
    var _b = _a.dy, dy = _b === void 0 ? 0 : _b, height = _a.height, legendPosition = _a.legendPosition, legendData = _a.legendData, legendOrientation = _a.legendOrientation, legendProps = _a.legendProps, padding = _a.padding, theme = _a.theme, width = _a.width;
    var _c = victory_core_1.Helpers.getPadding({ padding: padding }), top = _c.top, bottom = _c.bottom, left = _c.left, right = _c.right;
    var chartSize = {
        height: Math.abs(height - (bottom + top)),
        width: Math.abs(width - (left + right))
    };
    switch (legendPosition) {
        case 'bottom':
        case 'bottom-left':
            return chartSize.height + ChartTheme_1.ChartCommonStyles.legend.margin * 2 + top + dy;
        case 'right': {
            // Legend height with padding
            var legendDimensions = exports.getLegendDimensions({
                legendData: legendData,
                legendOrientation: legendOrientation,
                legendProps: legendProps,
                theme: theme
            });
            var originX = chartSize.height / 2 + top;
            var legendPadding = function (legendData) { return (legendData && legendData.length > 0 ? 2 : 0); };
            return (originX - legendDimensions.height / 2) + legendPadding(legendData);
        }
        default:
            return dy;
    }
};
// Returns x coordinate for pie legends
exports.getPieLegendX = function (_a) {
    var _b = _a.dx, dx = _b === void 0 ? 0 : _b, height = _a.height, legendData = _a.legendData, legendOrientation = _a.legendOrientation, legendPosition = _a.legendPosition, legendProps = _a.legendProps, padding = _a.padding, theme = _a.theme, width = _a.width;
    var origin = chart_origin_1.getPieOrigin({ height: height, padding: padding, width: width });
    var radius = victory_core_1.Helpers.getRadius({ height: height, width: width, padding: padding });
    var legendDimensions = exports.getLegendDimensions({
        legendData: legendData,
        legendOrientation: legendOrientation,
        legendProps: legendProps,
        theme: theme
    });
    var textSizeWorkAround = getTextSizeWorkAround({
        legendData: legendData,
        legendOrientation: legendOrientation,
        theme: theme
    });
    switch (legendPosition) {
        case 'bottom':
            return width > legendDimensions.width - textSizeWorkAround
                ? Math.round((width - (legendDimensions.width - textSizeWorkAround)) / 2) + dx : dx;
        case 'right':
            return origin.x + ChartTheme_1.ChartCommonStyles.label.margin + dx + radius;
        default:
            return dx;
    }
};
// Returns y coordinate for pie legends
exports.getPieLegendY = function (_a) {
    var _b = _a.dy, dy = _b === void 0 ? 0 : _b, height = _a.height, legendPosition = _a.legendPosition, legendData = _a.legendData, legendOrientation = _a.legendOrientation, legendProps = _a.legendProps, padding = _a.padding, theme = _a.theme, width = _a.width;
    var origin = chart_origin_1.getPieOrigin({ height: height, padding: padding, width: width });
    var radius = victory_core_1.Helpers.getRadius({ height: height, width: width, padding: padding });
    switch (legendPosition) {
        case 'bottom':
            return origin.y + ChartTheme_1.ChartCommonStyles.legend.margin + radius + dy;
        case 'right': {
            // Legend height with padding
            var legendDimensions = exports.getLegendDimensions({
                legendData: legendData,
                legendOrientation: legendOrientation,
                legendProps: legendProps,
                theme: theme
            });
            var legendPadding = function (legendData) { return (legendData && legendData.length > 0 ? 2 : 0); };
            return (origin.y - legendDimensions.height / 2) + legendPadding(legendData);
        }
        default:
            return dy;
    }
};
// Returns an approximation of over-sized text width due to growing character count
//
// See https://github.com/FormidableLabs/victory/issues/864
var getTextSizeWorkAround = function (_a) {
    var legendData = _a.legendData, legendOrientation = _a.legendOrientation, theme = _a.theme;
    var style = theme.legend.style.labels;
    if (!(legendData && legendData.length)) {
        return 0;
    }
    // For horizontal legends, account for the growing char count of the last legend item
    var result = legendData[legendData.length - 1].name;
    // For vertical legends, account for the growing char count of the longest legend item
    if (legendOrientation === 'vertical') {
        legendData.forEach(function (data) {
            if (data.name && data.name.length > result.length) {
                result = data.name;
            }
        });
    }
    var textSize = victory_core_1.TextSize.approximateTextSize(result, style);
    var adjustedTextSize = victory_core_1.TextSize.approximateTextSize(result, __assign(__assign({}, style), { characterConstant: chart_label_1.overpassFontCharacterConstant }));
    return Math.abs(textSize.width - adjustedTextSize.width);
};
