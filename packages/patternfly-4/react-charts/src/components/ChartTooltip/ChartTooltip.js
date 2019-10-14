"use strict";
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
var ChartUtils_1 = require("../ChartUtils");
exports.ChartTooltip = function (_a) {
    // Note: constrainToVisibleArea is valid, but @types/victory is missing a prop type
    var _b = _a.constrainToVisibleArea, constrainToVisibleArea = _b === void 0 ? false : _b, themeColor = _a.themeColor, themeVariant = _a.themeVariant, 
    // destructure last
    _c = _a.theme, 
    // destructure last
    theme = _c === void 0 ? ChartUtils_1.getTheme(themeColor, themeVariant) : _c, rest = __rest(_a, ["constrainToVisibleArea", "themeColor", "themeVariant", "theme"]);
    // @ts-ignore
    return <victory_1.VictoryTooltip constrainToVisibleArea={constrainToVisibleArea} theme={theme} {...rest}/>;
};
// Note: VictoryTooltip.defaultEvents must be hoisted
hoist_non_react_statics_1["default"](exports.ChartTooltip, victory_1.VictoryTooltip);
