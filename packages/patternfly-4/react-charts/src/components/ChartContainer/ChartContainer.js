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
exports.ChartContainer = function (_a) {
    var className = _a.className, themeColor = _a.themeColor, themeVariant = _a.themeVariant, 
    // destructure last
    _b = _a.theme, 
    // destructure last
    theme = _b === void 0 ? ChartUtils_1.getTheme(themeColor, themeVariant) : _b, rest = __rest(_a, ["className", "themeColor", "themeVariant", "theme"]);
    var chartClassName = ChartUtils_1.getClassName({ className: className });
    // Note: theme is valid, but @types/victory is missing a prop type
    // @ts-ignore
    return <victory_1.VictoryContainer className={chartClassName} theme={theme} {...rest}/>;
};
// Note: VictoryContainer.role must be hoisted
hoist_non_react_statics_1["default"](exports.ChartContainer, victory_1.VictoryContainer);
