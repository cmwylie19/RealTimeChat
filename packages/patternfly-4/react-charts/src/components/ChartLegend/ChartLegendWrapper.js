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
var React = require("react");
var ChartLegend_1 = require("../ChartLegend");
var ChartTheme_1 = require("../ChartTheme");
var ChartUtils_1 = require("../ChartUtils");
var ChartLegendConfigChartType;
(function (ChartLegendConfigChartType) {
    ChartLegendConfigChartType["chart"] = "chart";
    ChartLegendConfigChartType["pie"] = "pie";
})(ChartLegendConfigChartType = exports.ChartLegendConfigChartType || (exports.ChartLegendConfigChartType = {}));
exports.ChartLegendWrapper = function (_a) {
    var _b = _a.chartType, chartType = _b === void 0 ? 'chart' : _b, _c = _a.dx, dx = _c === void 0 ? 0 : _c, _d = _a.dy, dy = _d === void 0 ? 0 : _d, _e = _a.legendComponent, legendComponent = _e === void 0 ? <ChartLegend_1.ChartLegend /> : _e, padding = _a.padding, _f = _a.position, position = _f === void 0 ? ChartTheme_1.ChartCommonStyles.legend.position : _f, themeColor = _a.themeColor, themeVariant = _a.themeVariant, 
    // destructure last
    _g = _a.theme, 
    // destructure last
    theme = _g === void 0 ? ChartUtils_1.getTheme(themeColor, themeVariant) : _g, _h = _a.orientation, orientation = _h === void 0 ? theme.legend.orientation : _h, _j = _a.height, height = _j === void 0 ? theme.chart.height : _j, _k = _a.width, width = _k === void 0 ? theme.chart.width : _k;
    var legendProps = legendComponent.props ? legendComponent.props : {};
    var legendX = ChartUtils_1.getLegendX({
        chartType: chartType,
        dx: dx,
        height: height,
        legendData: legendProps.data,
        legendOrientation: legendProps.legendOrientation ? legendProps.legendOrientation : orientation,
        legendPosition: position,
        legendProps: legendProps,
        padding: padding,
        theme: theme,
        width: width
    });
    var legendY = ChartUtils_1.getLegendY({
        chartType: chartType,
        dy: dy,
        height: height,
        legendData: legendProps.data,
        legendOrientation: legendProps.legendOrientation ? legendProps.legendOrientation : orientation,
        legendProps: legendProps,
        legendPosition: position,
        padding: padding,
        theme: theme,
        width: width
    });
    var legend = React.cloneElement(legendComponent, __assign({ orientation: orientation, standalone: false, theme: theme, x: legendX > 0 ? legendX : 0, y: legendY > 0 ? legendY : 0 }, legendComponent.props));
    return (<React.Fragment>
      {legend}
    </React.Fragment>);
};
