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
var react_styles_1 = require("@patternfly/react-styles");
var empty_state_1 = require("@patternfly/react-styles/css/components/EmptyState/empty-state");
exports.EmptyStatePrimary = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, props = __rest(_a, ["children", "className"]);
    return (<div className={react_styles_1.css(empty_state_1["default"].emptyStatePrimary, className)} {...props}>
      {children}
    </div>);
};
