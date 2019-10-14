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
var ChartTooltip_1 = require("../ChartTooltip");
var ChartUtils_1 = require("../ChartUtils");
var ChartVoronoiDimension;
(function (ChartVoronoiDimension) {
    ChartVoronoiDimension["x"] = "x";
    ChartVoronoiDimension["y"] = "y";
})(ChartVoronoiDimension = exports.ChartVoronoiDimension || (exports.ChartVoronoiDimension = {}));
exports.ChartVoronoiContainer = function (_a) {
    var className = _a.className, _b = _a.allowTooltip, allowTooltip = _b === void 0 ? true : _b, _c = _a.constrainToVisibleArea, constrainToVisibleArea = _c === void 0 ? false : _c, themeColor = _a.themeColor, themeVariant = _a.themeVariant, 
    // destructure last
    _d = _a.theme, 
    // destructure last
    theme = _d === void 0 ? ChartUtils_1.getTheme(themeColor, themeVariant) : _d, _e = _a.labelComponent, labelComponent = _e === void 0 ? allowTooltip ? <ChartTooltip_1.ChartTooltip /> : undefined : _e, rest = __rest(_a, ["className", "allowTooltip", "constrainToVisibleArea", "themeColor", "themeVariant", "theme", "labelComponent"]);
    var chartClassName = ChartUtils_1.getClassName({ className: className });
    var chartLabelComponent = React.cloneElement(labelComponent, __assign({ constrainToVisibleArea: constrainToVisibleArea,
        theme: theme }, labelComponent.props));
    // Note: theme is required by voronoiContainerMixin, but @types/victory is missing a prop type
    // @ts-ignore
    return <victory_1.VictoryVoronoiContainer className={chartClassName} labelComponent={chartLabelComponent} theme={theme} {...rest}/>;
};
exports.ChartVoronoiContainer.defaultProps = victory_1.VictoryVoronoiContainer.defaultProps;
// Note: VictoryVoronoiContainer.defaultEvents & VictoryContainer.role must be hoisted
hoist_non_react_statics_1["default"](exports.ChartVoronoiContainer, victory_1.VictoryVoronoiContainer);
