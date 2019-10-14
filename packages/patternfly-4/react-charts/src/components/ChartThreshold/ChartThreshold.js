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
var ChartLine_1 = require("../ChartLine");
var chart_theme_1 = require("../ChartUtils/chart-theme");
exports.ChartThreshold = function (_a) {
    var themeColor = _a.themeColor, themeVariant = _a.themeVariant, style = _a.style, // do not let style defaults override threshold theme
    rest = __rest(_a, ["themeColor", "themeVariant", "style"]);
    var theme = chart_theme_1.getThresholdTheme(themeColor, themeVariant);
    return (<ChartLine_1.ChartLine {...rest} theme={theme}/>);
};
// Note: VictoryPie.role must be hoisted
hoist_non_react_statics_1["default"](exports.ChartThreshold, victory_1.VictoryLine);
