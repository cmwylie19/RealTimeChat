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
var drawer_1 = require("@patternfly/react-styles/css/components/Drawer/drawer");
var react_styles_1 = require("@patternfly/react-styles");
exports.Drawer = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children, _c = _a.isExpanded, isExpanded = _c === void 0 ? false : _c, _d = _a.isInline, isInline = _d === void 0 ? false : _d, props = __rest(_a, ["className", "children", "isExpanded", "isInline"]);
    return (<div {...props} className={react_styles_1.css(drawer_1["default"].drawer, isExpanded && drawer_1["default"].modifiers.expanded, isInline && drawer_1["default"].modifiers.inline, className)}>
     {children}
  </div>);
};
