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
var ChartUtils_1 = require("../ChartUtils");
exports.ChartAxis = function (_a) {
    var _b = _a.containerComponent, containerComponent = _b === void 0 ? <ChartContainer_1.ChartContainer /> : _b, _c = _a.showGrid, showGrid = _c === void 0 ? false : _c, themeColor = _a.themeColor, themeVariant = _a.themeVariant, 
    // destructure last
    _d = _a.theme, 
    // destructure last
    theme = _d === void 0 ? ChartUtils_1.getTheme(themeColor, themeVariant) : _d, rest = __rest(_a, ["containerComponent", "showGrid", "themeColor", "themeVariant", "theme"]);
    // Clone so users can override container props
    var container = React.cloneElement(containerComponent, __assign({ theme: theme }, containerComponent.props));
    return (<victory_1.VictoryAxis containerComponent={container} theme={showGrid ? ChartUtils_1.getAxisTheme(themeColor, themeVariant) : theme} {...rest}/>);
};
hoist_non_react_statics_1["default"](exports.ChartAxis, victory_1.VictoryAxis);
