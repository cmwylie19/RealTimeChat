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
var login_1 = require("@patternfly/react-styles/css/components/Login/login");
exports.LoginMainFooter = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.socialMediaLoginContent, socialMediaLoginContent = _c === void 0 ? null : _c, _d = _a.signUpForAccountMessage, signUpForAccountMessage = _d === void 0 ? null : _d, _e = _a.forgotCredentials, forgotCredentials = _e === void 0 ? null : _e, _f = _a.className, className = _f === void 0 ? '' : _f, props = __rest(_a, ["children", "socialMediaLoginContent", "signUpForAccountMessage", "forgotCredentials", "className"]);
    return (<div className={react_styles_1.css(login_1["default"].loginMainFooter, className)} {...props}>
    {children}
    {socialMediaLoginContent && <ul className={react_styles_1.css(login_1["default"].loginMainFooterLinks)}>{socialMediaLoginContent}</ul>}
    {(signUpForAccountMessage || forgotCredentials) && (<div className={react_styles_1.css(login_1["default"].loginMainFooterBand)}>
        {signUpForAccountMessage}
        {forgotCredentials}
      </div>)}
  </div>);
};
