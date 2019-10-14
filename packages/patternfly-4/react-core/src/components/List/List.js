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
var list_1 = require("@patternfly/react-styles/css/components/List/list");
var react_styles_1 = require("@patternfly/react-styles");
var ListVariant;
(function (ListVariant) {
    ListVariant["inline"] = "inline";
})(ListVariant = exports.ListVariant || (exports.ListVariant = {}));
exports.List = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.children, children = _c === void 0 ? null : _c, _d = _a.variant, variant = _d === void 0 ? null : _d, props = __rest(_a, ["className", "children", "variant"]);
    return (<ul {...props} className={react_styles_1.css(list_1["default"].list, variant && react_styles_1.getModifier(list_1["default"].modifiers, variant), className)}>
    {children}
  </ul>);
};
