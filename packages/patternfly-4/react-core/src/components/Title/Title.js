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
var title_1 = require("@patternfly/react-styles/css/components/Title/title");
var TitleLevel;
(function (TitleLevel) {
    TitleLevel["h1"] = "h1";
    TitleLevel["h2"] = "h2";
    TitleLevel["h3"] = "h3";
    TitleLevel["h4"] = "h4";
    TitleLevel["h5"] = "h5";
    TitleLevel["h6"] = "h6";
})(TitleLevel = exports.TitleLevel || (exports.TitleLevel = {}));
exports.Title = function (_a) {
    var size = _a.size, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.children, children = _c === void 0 ? '' : _c, _d = _a.headingLevel, HeadingLevel = _d === void 0 ? 'h1' : _d, props = __rest(_a, ["size", "className", "children", "headingLevel"]);
    return (<HeadingLevel {...props} className={react_styles_1.css(title_1["default"].title, react_styles_1.getModifier(title_1["default"], size), className)}>
    {children}
  </HeadingLevel>);
};
