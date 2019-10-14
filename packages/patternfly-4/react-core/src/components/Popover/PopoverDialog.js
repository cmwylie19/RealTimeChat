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
var popover_1 = require("@patternfly/react-styles/css/components/Popover/popover");
var react_styles_1 = require("@patternfly/react-styles");
exports.PopoverPosition = {
    top: 'top',
    bottom: 'bottom',
    left: 'left',
    right: 'right'
};
exports.PopoverDialog = function (_a) {
    var _b = _a.position, position = _b === void 0 ? 'top' : _b, _c = _a.children, children = _c === void 0 ? null : _c, _d = _a.className, className = _d === void 0 ? null : _d, props = __rest(_a, ["position", "children", "className"]);
    return (<div className={react_styles_1.css(popover_1["default"].popover, react_styles_1.getModifier(popover_1["default"], position, popover_1["default"].modifiers.top), className)} role="dialog" aria-modal="true" {...props}>
    {children}
  </div>);
};
