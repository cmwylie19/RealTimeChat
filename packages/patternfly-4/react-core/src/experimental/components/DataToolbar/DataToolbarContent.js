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
var data_toolbar_1 = require("@patternfly/react-styles/css/components/DataToolbar/data-toolbar");
var react_styles_1 = require("@patternfly/react-styles");
var util_1 = require("../../../helpers/util");
exports.DataToolbarContent = function (_a) {
    var className = _a.className, children = _a.children, _b = _a.breakpointMods, breakpointMods = _b === void 0 ? [] : _b, props = __rest(_a, ["className", "children", "breakpointMods"]);
    return (<div className={react_styles_1.css(data_toolbar_1["default"].dataToolbarContent, util_1.formatBreakpointMods(breakpointMods, data_toolbar_1["default"]), className)} {...props}>
      {children}
    </div>);
};
