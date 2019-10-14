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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var React = require("react");
var grid_1 = require("@patternfly/react-styles/css/layouts/Grid/grid");
var react_styles_1 = require("@patternfly/react-styles");
var react_styles_2 = require("@patternfly/react-styles");
var sizes_1 = require("../../styles/sizes");
exports.Grid = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.gutter, gutter = _d === void 0 ? null : _d, _e = _a.span, span = _e === void 0 ? null : _e, props = __rest(_a, ["children", "className", "gutter", "span"]);
    var classes = [grid_1["default"].grid, span && react_styles_2.getModifier(grid_1["default"], "all_" + span + "Col")];
    Object.entries(sizes_1.DeviceSizes).forEach(function (_a) {
        var propKey = _a[0], gridSpanModifier = _a[1];
        var key = propKey;
        var propValue = props[key];
        if (propValue) {
            classes.push(react_styles_2.getModifier(grid_1["default"], "all_" + propValue + "ColOn" + gridSpanModifier));
        }
        delete props[key];
    });
    return (<div className={react_styles_1.css.apply(void 0, __spreadArrays(classes, [gutter && grid_1["default"].modifiers.gutter,
        className]))} {...props}>
      {children}
    </div>);
};
