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
var Title_1 = require("../Title");
var react_styles_1 = require("@patternfly/react-styles");
var login_1 = require("@patternfly/react-styles/css/components/Login/login");
exports.LoginMainHeader = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.title, title = _d === void 0 ? '' : _d, _e = _a.subtitle, subtitle = _e === void 0 ? '' : _e, props = __rest(_a, ["children", "className", "title", "subtitle"]);
    return (<header className={react_styles_1.css(login_1["default"].loginMainHeader, className)} {...props}>
    {title && <Title_1.Title headingLevel={Title_1.TitleLevel.h2} size="3xl">{title}</Title_1.Title>}
    {subtitle && <p className={react_styles_1.css(login_1["default"].loginMainHeaderDesc)}>{subtitle}</p>}
    {children}
  </header>);
};
