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
var victory_core_1 = require("victory-core");
var ChartContainer_1 = require("../ChartContainer");
var ChartLegend_1 = require("../ChartLegend");
var ChartTheme_1 = require("../ChartTheme");
var ChartTooltip_1 = require("../ChartTooltip");
var ChartUtils_1 = require("../ChartUtils");
var ChartPieLabelPosition;
(function (ChartPieLabelPosition) {
    ChartPieLabelPosition["centroid"] = "centroid";
    ChartPieLabelPosition["endAngle"] = "endAngle";
    ChartPieLabelPosition["startAngle"] = "startAngle";
})(ChartPieLabelPosition = exports.ChartPieLabelPosition || (exports.ChartPieLabelPosition = {}));
var ChartPieLegendPosition;
(function (ChartPieLegendPosition) {
    ChartPieLegendPosition["bottom"] = "bottom";
    ChartPieLegendPosition["right"] = "right";
})(ChartPieLegendPosition = exports.ChartPieLegendPosition || (exports.ChartPieLegendPosition = {}));
var ChartPieSortOrder;
(function (ChartPieSortOrder) {
    ChartPieSortOrder["ascending"] = "ascending";
    ChartPieSortOrder["descending"] = "descending";
})(ChartPieSortOrder = exports.ChartPieSortOrder || (exports.ChartPieSortOrder = {}));
var someId = 0;
exports.ChartPie = function (_a) {
    var _b = _a.allowTooltip, allowTooltip = _b === void 0 ? true : _b, ariaDesc = _a.ariaDesc, ariaTitle = _a.ariaTitle, _c = _a.constrainToVisibleArea, constrainToVisibleArea = _c === void 0 ? false : _c, _d = _a.containerComponent, containerComponent = _d === void 0 ? <ChartContainer_1.ChartContainer /> : _d, labels = _a.labels, _e = _a.legendComponent, legendComponent = _e === void 0 ? <ChartLegend_1.ChartLegend /> : _e, legendData = _a.legendData, _f = _a.legendPosition, legendPosition = _f === void 0 ? ChartTheme_1.ChartCommonStyles.legend.position : _f, padding = _a.padding, radius = _a.radius, _g = _a.standalone, standalone = _g === void 0 ? true : _g, themeColor = _a.themeColor, themeVariant = _a.themeVariant, 
    // destructure last
    _h = _a.theme, 
    // destructure last
    theme = _h === void 0 ? ChartUtils_1.getTheme(themeColor, themeVariant) : _h, _j = _a.labelComponent, labelComponent = _j === void 0 ? allowTooltip ? <ChartTooltip_1.ChartTooltip constrainToVisibleArea={constrainToVisibleArea} theme={theme}/> : undefined : _j, _k = _a.legendOrientation, legendOrientation = _k === void 0 ? theme.legend.orientation : _k, _l = _a.height, height = _l === void 0 ? theme.pie.height : _l, _m = _a.width, width = _m === void 0 ? theme.pie.width : _m, rest = __rest(_a, ["allowTooltip", "ariaDesc", "ariaTitle", "constrainToVisibleArea", "containerComponent", "labels", "legendComponent", "legendData", "legendPosition", "padding", "radius", "standalone", "themeColor", "themeVariant", "theme", "labelComponent", "legendOrientation", "height", "width"]);
    var defaultPadding = {
        bottom: ChartUtils_1.getPaddingForSide('bottom', padding, theme.pie.padding),
        left: ChartUtils_1.getPaddingForSide('left', padding, theme.pie.padding),
        right: ChartUtils_1.getPaddingForSide('right', padding, theme.pie.padding),
        top: ChartUtils_1.getPaddingForSide('top', padding, theme.pie.padding)
    };
    var chartRadius = radius ? radius : victory_core_1.Helpers.getRadius({
        height: height,
        width: width,
        padding: defaultPadding
    });
    var chart = (<victory_1.VictoryPie height={height} labels={labels} labelComponent={labelComponent} padding={padding} radius={chartRadius} standalone={false} theme={theme} width={width} {...rest}/>);
    var legend = React.cloneElement(legendComponent, __assign({ data: legendData, orientation: legendOrientation, theme: theme }, legendComponent.props));
    // Returns a wrapped legend
    var getWrappedLegend = function () {
        if (!legend.props.data) {
            return null;
        }
        return (<ChartLegend_1.ChartLegendWrapper chartType="pie" height={height} legendComponent={legend} orientation={legendOrientation} padding={defaultPadding} position={legendPosition} theme={theme} width={width}/>);
    };
    // Clone so users can override container props
    var StandaloneContainer = function (_a) {
        var children = _a.children;
        return React.cloneElement(containerComponent, __assign({ desc: ariaDesc, height: height, title: ariaTitle, width: width,
            theme: theme }, containerComponent.props), children);
    };
    return standalone ? (<StandaloneContainer>
      {chart}
      {getWrappedLegend()}
    </StandaloneContainer>) : (<React.Fragment>
      {chart}
      {getWrappedLegend()}
    </React.Fragment>);
};
// Note: VictoryPie.role must be hoisted
hoist_non_react_statics_1["default"](exports.ChartPie, victory_1.VictoryPie);
