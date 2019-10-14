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
var login_1 = require("@patternfly/react-styles/css/components/Login/login");
var react_styles_1 = require("@patternfly/react-styles");
exports.LoginMainFooterLinksItem = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.href, href = _c === void 0 ? '' : _c, _d = _a.target, target = _d === void 0 ? '' : _d, _e = _a.className, className = _e === void 0 ? '' : _e, _f = _a.linkComponent, linkComponent = _f === void 0 ? 'a' : _f, props = __rest(_a, ["children", "href", "target", "className", "linkComponent"]);
    var LinkComponent = linkComponent;
    return (<li className={react_styles_1.css(login_1["default"].loginMainFooterLinksItem, className)} {...props}>
      <LinkComponent className={react_styles_1.css(login_1["default"].loginMainFooterLinksItemLink)} href={href} target={target}>
        {children}
      </LinkComponent>
    </li>);
};
