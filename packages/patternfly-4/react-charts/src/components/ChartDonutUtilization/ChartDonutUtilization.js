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
var lodash_1 = require("lodash");
var victory_1 = require("victory");
var victory_core_1 = require("victory-core");
var ChartContainer_1 = require("../ChartContainer");
var ChartDonut_1 = require("../ChartDonut");
var ChartTheme_1 = require("../ChartTheme");
var ChartUtils_1 = require("../ChartUtils");
var ChartDonutUtilizationLabelPosition;
(function (ChartDonutUtilizationLabelPosition) {
    ChartDonutUtilizationLabelPosition["centroid"] = "centroid";
    ChartDonutUtilizationLabelPosition["endAngle"] = "endAngle";
    ChartDonutUtilizationLabelPosition["startAngle"] = "startAngle";
})(ChartDonutUtilizationLabelPosition = exports.ChartDonutUtilizationLabelPosition || (exports.ChartDonutUtilizationLabelPosition = {}));
var ChartDonutUtilizationLegendOrientation;
(function (ChartDonutUtilizationLegendOrientation) {
    ChartDonutUtilizationLegendOrientation["horizontal"] = "horizontal";
    ChartDonutUtilizationLegendOrientation["vertical"] = "vertical";
})(ChartDonutUtilizationLegendOrientation = exports.ChartDonutUtilizationLegendOrientation || (exports.ChartDonutUtilizationLegendOrientation = {}));
var ChartDonutUtilizationLegendPosition;
(function (ChartDonutUtilizationLegendPosition) {
    ChartDonutUtilizationLegendPosition["bottom"] = "bottom";
    ChartDonutUtilizationLegendPosition["right"] = "right";
})(ChartDonutUtilizationLegendPosition = exports.ChartDonutUtilizationLegendPosition || (exports.ChartDonutUtilizationLegendPosition = {}));
var ChartDonutUtilizationSortOrder;
(function (ChartDonutUtilizationSortOrder) {
    ChartDonutUtilizationSortOrder["ascending"] = "ascending";
    ChartDonutUtilizationSortOrder["descending"] = "descending";
})(ChartDonutUtilizationSortOrder = exports.ChartDonutUtilizationSortOrder || (exports.ChartDonutUtilizationSortOrder = {}));
var ChartDonutUtilizationSubTitlePosition;
(function (ChartDonutUtilizationSubTitlePosition) {
    ChartDonutUtilizationSubTitlePosition["bottom"] = "bottom";
    ChartDonutUtilizationSubTitlePosition["center"] = "center";
    ChartDonutUtilizationSubTitlePosition["right"] = "right";
})(ChartDonutUtilizationSubTitlePosition = exports.ChartDonutUtilizationSubTitlePosition || (exports.ChartDonutUtilizationSubTitlePosition = {}));
exports.ChartDonutUtilization = function (_a) {
    var _b = _a.allowTooltip, allowTooltip = _b === void 0 ? true : _b, ariaDesc = _a.ariaDesc, ariaTitle = _a.ariaTitle, _c = _a.containerComponent, containerComponent = _c === void 0 ? <ChartContainer_1.ChartContainer /> : _c, data = _a.data, _d = _a.invert, invert = _d === void 0 ? false : _d, padding = _a.padding, _e = _a.showStatic, showStatic = _e === void 0 ? true : _e, _f = _a.standalone, standalone = _f === void 0 ? true : _f, themeColor = _a.themeColor, themeVariant = _a.themeVariant, thresholds = _a.thresholds, x = _a.x, y = _a.y, 
    // destructure last
    _g = _a.theme, 
    // destructure last
    theme = _g === void 0 ? ChartUtils_1.getDonutUtilizationTheme(themeColor, themeVariant) : _g, _h = _a.height, height = _h === void 0 ? theme.pie.height : _h, _j = _a.width, width = _j === void 0 ? theme.pie.width : _j, rest = __rest(_a, ["allowTooltip", "ariaDesc", "ariaTitle", "containerComponent", "data", "invert", "padding", "showStatic", "standalone", "themeColor", "themeVariant", "thresholds", "x", "y", "theme", "height", "width"]);
    // Returns computed data representing pie chart slices
    var getComputedData = function () {
        var datum = getData();
        var computedData = [{ x: datum[0]._x, y: datum[0]._y || 0 }];
        if (showStatic) {
            computedData.push({ y: datum[0]._x ? Math.abs(100 - datum[0]._y) : 100 });
        }
        return computedData;
    };
    var getData = function () {
        var datum = [__assign({}, data)];
        return victory_core_1.Data.formatData(datum, __assign({ x: x, y: y }, rest), ['x', 'y']).sort(function (a, b) { return a._y - b._y; });
    };
    // Returns thresholds with default color scale
    var getDonutThresholds = function () {
        var result = [];
        if (thresholds) {
            // Ensure thresholds are in sorted order
            var sThresholds = lodash_1.orderBy(thresholds, 'value', invert ? 'desc' : 'asc');
            var numColors = ChartTheme_1.ChartDonutUtilizationStyles.thresholds.colorScale.length;
            for (var i = 0; i < sThresholds.length; i++) {
                result.push({
                    color: sThresholds[i].color
                        ? sThresholds[i].color : ChartTheme_1.ChartDonutUtilizationStyles.thresholds.colorScale[i % numColors],
                    value: sThresholds[i].value
                });
            }
        }
        return result;
    };
    // Returns theme based on threshold and current value
    var getThresholdTheme = function () {
        var newTheme = __assign({}, theme);
        if (data) {
            var datum = getData();
            var donutThresholds_1 = getDonutThresholds();
            var mergeThemeProps = function (i) {
                // Merge just the first color of dynamic (blue, green, etc.) with static (gray) for expected colorScale
                newTheme.pie.colorScale[0] = donutThresholds_1[i].color;
                newTheme.legend.colorScale[0] = donutThresholds_1[i].color;
            };
            for (var i = 0; i < donutThresholds_1.length; i++) {
                if (invert) {
                    if (datum[0]._y <= donutThresholds_1[i].value) {
                        mergeThemeProps(i);
                    }
                }
                else {
                    if (datum[0]._y >= donutThresholds_1[i].value) {
                        mergeThemeProps(i);
                    }
                }
            }
        }
        return newTheme;
    };
    // Dynamic donut chart
    var chart = (<ChartDonut_1.ChartDonut allowTooltip={allowTooltip} data={getComputedData()} height={height} padding={padding} standalone={false} theme={getThresholdTheme()} width={width} {...rest}/>);
    // Clone so users can override container props
    var StandaloneContainer = function (_a) {
        var children = _a.children;
        return React.cloneElement(containerComponent, __assign({ desc: ariaDesc, height: height, title: ariaTitle, width: width,
            theme: theme }, containerComponent.props), children);
    };
    return standalone ? (<StandaloneContainer>
      {chart}
    </StandaloneContainer>) : (<React.Fragment>
      {chart}
    </React.Fragment>);
};
// Note: VictoryPie.role must be hoisted
hoist_non_react_statics_1["default"](exports.ChartDonutUtilization, victory_1.VictoryPie);
