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
var form_1 = require("@patternfly/react-styles/css/components/Form/form");
exports.FormHelperText = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.isError, isError = _c === void 0 ? false : _c, _d = _a.isHidden, isHidden = _d === void 0 ? true : _d, _e = _a.className, className = _e === void 0 ? '' : _e, props = __rest(_a, ["children", "isError", "isHidden", "className"]);
    return (<p className={react_styles_1.css(form_1["default"].formHelperText, isError ? react_styles_1.getModifier(form_1["default"], 'error') : '', isHidden ? react_styles_1.getModifier(form_1["default"], 'hidden') : '', className)} {...props}>
    {children}
  </p>);
};
