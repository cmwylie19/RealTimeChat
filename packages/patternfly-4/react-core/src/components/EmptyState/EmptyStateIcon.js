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
var IconSize;
(function (IconSize) {
    IconSize["sm"] = "sm";
    IconSize["md"] = "md";
    IconSize["lg"] = "lg";
    IconSize["xl"] = "xl";
})(IconSize = exports.IconSize || (exports.IconSize = {}));
exports.EmptyStateIcon = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.icon, IconComponent = _c === void 0 ? null : _c, _d = _a.component, AnyComponent = _d === void 0 ? null : _d, _e = _a.variant, variant = _e === void 0 ? 'icon' : _e, props = __rest(_a, ["className", "icon", "component", "variant"]);
    var classNames = react_styles_1.css(empty_state_1["default"].emptyStateIcon, className);
    return variant === 'icon' ? (<IconComponent className={classNames} {...props} aria-hidden="true"/>) : (<div className={classNames}><AnyComponent /></div>);
};
