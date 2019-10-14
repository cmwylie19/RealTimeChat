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
var label_1 = require("@patternfly/react-styles/css/components/Label/label");
var react_styles_1 = require("@patternfly/react-styles");
exports.Label = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.isCompact, isCompact = _c === void 0 ? false : _c, props = __rest(_a, ["children", "className", "isCompact"]);
    return (<span {...props} className={react_styles_1.css(label_1["default"].label, className, isCompact && label_1["default"].modifiers.compact)}>
    {children}
  </span>);
};
