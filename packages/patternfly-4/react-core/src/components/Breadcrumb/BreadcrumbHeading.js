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
exports.BreadcrumbHeading = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.to, to = _d === void 0 ? null : _d, _e = _a.target, target = _e === void 0 ? null : _e, _f = _a.component, component = _f === void 0 ? 'a' : _f, props = __rest(_a, ["children", "className", "to", "target", "component"]);
    var Component = component;
    return (<li {...props} className={react_styles_1.css(breadcrumb_1["default"].breadcrumbItem, className)}>
      <h1 className={react_styles_1.css(breadcrumb_1["default"].breadcrumbHeading)}>
        {to && (<Component href={to} target={target} className={react_styles_1.css(breadcrumb_1["default"].breadcrumbLink, breadcrumb_1["default"].modifiers.current)} aria-current="page">
            {children}
          </Component>)}
        {!to && <React.Fragment>{children}</React.Fragment>}
      </h1>
    </li>);
};
