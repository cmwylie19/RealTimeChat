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
var ChartPoint_1 = require("../ChartPoint");
var ChartUtils_1 = require("../ChartUtils");
var ChartLegendOrientation;
(function (ChartLegendOrientation) {
    ChartLegendOrientation["horizontal"] = "horizontal";
    ChartLegendOrientation["vertical"] = "vertical";
})(ChartLegendOrientation = exports.ChartLegendOrientation || (exports.ChartLegendOrientation = {}));
var ChartLegendPosition;
(function (ChartLegendPosition) {
    ChartLegendPosition["bottom"] = "bottom";
    ChartLegendPosition["bottomLeft"] = "bottom-left";
    ChartLegendPosition["right"] = "right";
})(ChartLegendPosition = exports.ChartLegendPosition || (exports.ChartLegendPosition = {}));
var ChartLegendRowGutter;
(function (ChartLegendRowGutter) {
    ChartLegendRowGutter["bottom"] = "bottom";
    ChartLegendRowGutter["top"] = "top";
})(ChartLegendRowGutter = exports.ChartLegendRowGutter || (exports.ChartLegendRowGutter = {}));
exports.ChartLegend = function (_a) {
    var _b = _a.containerComponent, containerComponent = _b === void 0 ? <ChartContainer_1.ChartContainer /> : _b, _c = _a.dataComponent, dataComponent = _c === void 0 ? <ChartPoint_1.ChartPoint /> : _c, _d = _a.responsive, responsive = _d === void 0 ? true : _d, themeColor = _a.themeColor, themeVariant = _a.themeVariant, 
    // destructure last
    _e = _a.theme, 
    // destructure last
    theme = _e === void 0 ? ChartUtils_1.getTheme(themeColor, themeVariant) : _e, rest = __rest(_a, ["containerComponent", "dataComponent", "responsive", "themeColor", "themeVariant", "theme"]);
    // Clone so users can override container props
    var container = React.cloneElement(containerComponent, __assign({ responsive: responsive,
        theme: theme }, containerComponent.props));
    return <victory_1.VictoryLegend containerComponent={container} dataComponent={dataComponent} theme={theme} {...rest}/>;
};
// Note: VictoryLegend.role must be hoisted, but getBaseProps causes error with ChartVoronoiContainer
hoist_non_react_statics_1["default"](exports.ChartLegend, victory_1.VictoryLegend, { getBaseProps: true });
