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
var React = require("react");
var hoist_non_react_statics_1 = require("hoist-non-react-statics");
var victory_1 = require("victory");
var ChartContainer_1 = require("../ChartContainer");
var ChartLegend_1 = require("../ChartLegend");
var ChartTheme_1 = require("../ChartTheme");
var ChartUtils_1 = require("../ChartUtils");
exports.Chart = function (_a) {
    var _b = _a.allowZoom, allowZoom = _b === void 0 ? false : _b, ariaDesc = _a.ariaDesc, ariaTitle = _a.ariaTitle, children = _a.children, _c = _a.legendComponent, legendComponent = _c === void 0 ? <ChartLegend_1.ChartLegend /> : _c, legendData = _a.legendData, _d = _a.legendPosition, legendPosition = _d === void 0 ? ChartTheme_1.ChartCommonStyles.legend.position : _d, padding = _a.padding, _e = _a.standalone, standalone = _e === void 0 ? true : _e, themeColor = _a.themeColor, themeVariant = _a.themeVariant, 
    // destructure last
    _f = _a.theme, 
    // destructure last
    theme = _f === void 0 ? ChartUtils_1.getTheme(themeColor, themeVariant) : _f, _g = _a.containerComponent, containerComponent = _g === void 0 ? allowZoom ? <victory_1.VictoryZoomContainer /> : <ChartContainer_1.ChartContainer /> : _g, _h = _a.legendOrientation, legendOrientation = _h === void 0 ? theme.legend.orientation : _h, _j = _a.height, height = _j === void 0 ? theme.chart.height : _j, _k = _a.width, width = _k === void 0 ? theme.chart.width : _k, rest = __rest(_a, ["allowZoom", "ariaDesc", "ariaTitle", "children", "legendComponent", "legendData", "legendPosition", "padding", "standalone", "themeColor", "themeVariant", "theme", "containerComponent", "legendOrientation", "height", "width"]);
    var defaultPadding = {
        bottom: ChartUtils_1.getPaddingForSide('bottom', padding, theme.chart.padding),
        left: ChartUtils_1.getPaddingForSide('left', padding, theme.chart.padding),
        right: ChartUtils_1.getPaddingForSide('right', padding, theme.chart.padding),
        top: ChartUtils_1.getPaddingForSide('top', padding, theme.chart.padding)
    };
    // Clone so users can override container props
    var container = React.cloneElement(containerComponent, __assign(__assign({ desc: ariaDesc, title: ariaTitle, theme: theme }, containerComponent.props), { className: ChartUtils_1.getClassName({ className: containerComponent.props.className }) // Override VictoryContainer class name
     }));
    var legend = React.cloneElement(legendComponent, __assign({ data: legendData, orientation: legendOrientation, theme: theme }, legendComponent.props));
    // Returns a wrapped legend
    var getWrappedLegend = function () {
        if (!legend.props.data) {
            return null;
        }
        var dx = 0;
        var dy = 0;
        var xAxisLabelHeight = 0;
        var legendTitleHeight = legend.props.title ? 10 : 0;
        // Adjust for axis label
        React.Children.toArray(children).map(function (child) {
            if (child.type.role === 'axis' && child.props.label && !child.props.dependentAxis) {
                xAxisLabelHeight = ChartUtils_1.getLabelTextSize({ text: child.props.label, theme: theme }).height + 10;
                legendTitleHeight = 0;
            }
        });
        if (legendPosition === ChartLegend_1.ChartLegendPosition.bottom) {
            dy += xAxisLabelHeight + legendTitleHeight;
        }
        else if (legendPosition === ChartLegend_1.ChartLegendPosition.bottomLeft) {
            dy += xAxisLabelHeight + legendTitleHeight;
            dx = -10;
        }
        return (<ChartLegend_1.ChartLegendWrapper chartType="chart" dx={dx} dy={dy} height={height} legendComponent={legend} orientation={legendOrientation} padding={defaultPadding} position={legendPosition} theme={theme} width={width}/>);
    };
    return (<victory_1.VictoryChart containerComponent={container} height={height} padding={defaultPadding} theme={theme} width={width} {...rest}>
      {children}
      {getWrappedLegend()}
    </victory_1.VictoryChart>);
};
hoist_non_react_statics_1["default"](exports.Chart, victory_1.VictoryChart);
