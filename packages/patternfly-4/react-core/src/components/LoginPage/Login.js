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
exports.Login = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.children, children = _c === void 0 ? null : _c, _d = _a.footer, footer = _d === void 0 ? null : _d, _e = _a.header, header = _e === void 0 ? null : _e, props = __rest(_a, ["className", "children", "footer", "header"]);
    return (<div {...props} className={react_styles_1.css(login_1["default"].login, className)}>
    <div className={react_styles_1.css(login_1["default"].loginContainer)}>
      {header}
      <main className={react_styles_1.css(login_1["default"].loginMain)}>{children}</main>
      {footer}
    </div>
  </div>);
};
