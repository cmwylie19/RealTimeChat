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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var React = require("react");
var victory_1 = require("victory");
var victory_core_1 = require("victory-core");
var hoist_non_react_statics_1 = require("hoist-non-react-statics");
var ChartContainer_1 = require("../ChartContainer");
var ChartDonut_1 = require("../ChartDonut");
var ChartTheme_1 = require("../ChartTheme");
var ChartUtils_1 = require("../ChartUtils");
var ChartDonutThresholdDonutOrientation;
(function (ChartDonutThresholdDonutOrientation) {
    ChartDonutThresholdDonutOrientation["left"] = "left";
    ChartDonutThresholdDonutOrientation["right"] = "right";
    ChartDonutThresholdDonutOrientation["top"] = "top";
})(ChartDonutThresholdDonutOrientation = exports.ChartDonutThresholdDonutOrientation || (exports.ChartDonutThresholdDonutOrientation = {}));
var ChartDonutThresholdLabelOrientation;
(function (ChartDonutThresholdLabelOrientation) {
    ChartDonutThresholdLabelOrientation["horizontal"] = "horizontal";
    ChartDonutThresholdLabelOrientation["vertical"] = "vertical";
})(ChartDonutThresholdLabelOrientation = exports.ChartDonutThresholdLabelOrientation || (exports.ChartDonutThresholdLabelOrientation = {}));
var ChartDonutThresholdLabelPosition;
(function (ChartDonutThresholdLabelPosition) {
    ChartDonutThresholdLabelPosition["centroid"] = "centroid";
    ChartDonutThresholdLabelPosition["endAngle"] = "endAngle";
    ChartDonutThresholdLabelPosition["startAngle"] = "startAngle";
})(ChartDonutThresholdLabelPosition = exports.ChartDonutThresholdLabelPosition || (exports.ChartDonutThresholdLabelPosition = {}));
var ChartDonutThresholdLegendPosition;
(function (ChartDonutThresholdLegendPosition) {
    ChartDonutThresholdLegendPosition["bottom"] = "bottom";
    ChartDonutThresholdLegendPosition["right"] = "right";
})(ChartDonutThresholdLegendPosition = exports.ChartDonutThresholdLegendPosition || (exports.ChartDonutThresholdLegendPosition = {}));
var ChartDonutThresholdSortOrder;
(function (ChartDonutThresholdSortOrder) {
    ChartDonutThresholdSortOrder["ascending"] = "ascending";
    ChartDonutThresholdSortOrder["descending"] = "descending";
})(ChartDonutThresholdSortOrder = exports.ChartDonutThresholdSortOrder || (exports.ChartDonutThresholdSortOrder = {}));
var ChartDonutThresholdSubTitlePosition;
(function (ChartDonutThresholdSubTitlePosition) {
    ChartDonutThresholdSubTitlePosition["bottom"] = "bottom";
    ChartDonutThresholdSubTitlePosition["center"] = "center";
    ChartDonutThresholdSubTitlePosition["right"] = "right";
})(ChartDonutThresholdSubTitlePosition = exports.ChartDonutThresholdSubTitlePosition || (exports.ChartDonutThresholdSubTitlePosition = {}));
exports.ChartDonutThreshold = function (_a) {
    var _b = _a.allowTooltip, allowTooltip = _b === void 0 ? true : _b, ariaDesc = _a.ariaDesc, ariaTitle = _a.ariaTitle, children = _a.children, _c = _a.constrainToVisibleArea, constrainToVisibleArea = _c === void 0 ? false : _c, _d = _a.containerComponent, containerComponent = _d === void 0 ? <ChartContainer_1.ChartContainer /> : _d, _e = _a.data, data = _e === void 0 ? [] : _e, _f = _a.invert, invert = _f === void 0 ? false : _f, _g = _a.labels, labels = _g === void 0 ? [] : _g, // Don't show any tooltip labels by default, let consumer override if needed
    _h = _a.legendPosition, // Don't show any tooltip labels by default, let consumer override if needed
    legendPosition = _h === void 0 ? ChartTheme_1.ChartCommonStyles.legend.position : _h, padding = _a.padding, radius = _a.radius, _j = _a.standalone, standalone = _j === void 0 ? true : _j, _k = _a.subTitlePosition, subTitlePosition = _k === void 0 ? ChartTheme_1.ChartDonutStyles.label.subTitlePosition : _k, themeColor = _a.themeColor, themeVariant = _a.themeVariant, x = _a.x, y = _a.y, 
    // destructure last
    _l = _a.theme, 
    // destructure last
    theme = _l === void 0 ? ChartUtils_1.getDonutThresholdStaticTheme(themeColor, themeVariant, invert) : _l, _m = _a.height, height = _m === void 0 ? theme.pie.height : _m, _o = _a.width, width = _o === void 0 ? theme.pie.width : _o, rest = __rest(_a, ["allowTooltip", "ariaDesc", "ariaTitle", "children", "constrainToVisibleArea", "containerComponent", "data", "invert", "labels", "legendPosition", "padding", "radius", "standalone", "subTitlePosition", "themeColor", "themeVariant", "x", "y", "theme", "height", "width"]);
    var defaultPadding = {
        bottom: ChartUtils_1.getPaddingForSide('bottom', padding, theme.pie.padding),
        left: ChartUtils_1.getPaddingForSide('left', padding, theme.pie.padding),
        right: ChartUtils_1.getPaddingForSide('right', padding, theme.pie.padding),
        top: ChartUtils_1.getPaddingForSide('top', padding, theme.pie.padding)
    };
    var chartRadius = radius | victory_core_1.Helpers.getRadius({
        height: height,
        width: width,
        padding: defaultPadding
    });
    // Returns computed data representing pie chart slices
    var getComputedData = function () {
        // Format and sort data. Sorting ensures thresholds are displayed in the correct order and simplifies calculations.
        var datum = victory_core_1.Data.formatData(data, __assign({ x: x, y: y }, rest), ['x', 'y']).sort(function (a, b) { return a._y - b._y; });
        // Data must be offset so that the sum of all data point y-values (including the final slice) == 100.
        var _a = datum.reduce(function (acc, dataPoint) {
            return [
                dataPoint._y,
                __spreadArrays(acc[1], [
                    {
                        x: dataPoint._x,
                        y: dataPoint._y - acc[0] // Must be offset by previous value
                    }
                ])
            ];
        }, [0, []]), prev = _a[0], computedData = _a[1];
        return __spreadArrays(computedData, [
            {
                y: prev ? (100 - prev) : 0
            }
        ]);
    };
    // Render dynamic utilization donut cart
    var renderChildren = function () {
        return React.Children.toArray(children).map(function (child, index) {
            if (child.props) {
                var _a = child.props, childData = _a.data, childProps = __rest(_a, ["data"]);
                var datum = victory_core_1.Data.formatData([childData], childProps, ['x', 'y']); // Format child data independently of this component's props
                var dynamicTheme = childProps.theme ||
                    ChartUtils_1.getDonutThresholdDynamicTheme(childProps.themeColor || themeColor, childProps.themeVariant || themeVariant);
                return React.cloneElement(child, __assign({ constrainToVisibleArea: constrainToVisibleArea, data: childData, endAngle: 360 * (datum[0]._y ? datum[0]._y / 100 : 0), height: height,
                    invert: invert, key: "pf-chart-donut-utilization-" + index, legendPosition: childProps.legendPosition || legendPosition, padding: defaultPadding, radius: chartRadius - 14, showStatic: false, standalone: false, subTitlePosition: childProps.subTitlePosition || subTitlePosition, theme: dynamicTheme, width: width }, childProps));
            }
            return child;
        });
    };
    // Static threshold donut chart
    var chart = (<ChartDonut_1.ChartDonut allowTooltip={allowTooltip} constrainToVisibleArea={constrainToVisibleArea} data={getComputedData()} height={height} labels={labels} padding={defaultPadding} standalone={false} theme={theme} width={width} {...rest}/>);
    // Clone so users can override container props
    var StandaloneContainer = function (_a) {
        var children = _a.children;
        return React.cloneElement(containerComponent, __assign({ desc: ariaDesc, height: height, title: ariaTitle, width: width,
            theme: theme }, containerComponent.props), children);
    };
    return standalone ? (<StandaloneContainer>
      {chart}
      {renderChildren()}
    </StandaloneContainer>) : (<React.Fragment>
      {chart}
      {renderChildren()}
    </React.Fragment>);
};
// Note: VictoryPie.role must be hoisted
hoist_non_react_statics_1["default"](exports.ChartDonutThreshold, victory_1.VictoryPie);
