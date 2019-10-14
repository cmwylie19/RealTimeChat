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
var breadcrumb_1 = require("@patternfly/react-styles/css/components/Breadcrumb/breadcrumb");
var react_styles_1 = require("@patternfly/react-styles");
exports.Breadcrumb = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a["aria-label"], ariaLabel = _d === void 0 ? 'Breadcrumb' : _d, props = __rest(_a, ["children", "className", 'aria-label']);
    return (<nav {...props} aria-label={ariaLabel} className={react_styles_1.css(breadcrumb_1["default"].breadcrumb, className)}>
    <ol className={react_styles_1.css(breadcrumb_1["default"].breadcrumbList)}>{children}</ol>
  </nav>);
};
