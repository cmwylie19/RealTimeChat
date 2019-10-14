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
var select_1 = require("@patternfly/react-styles/css/components/Select/select");
var react_styles_1 = require("@patternfly/react-styles");
exports.SelectGroup = function (_a) {
    var _b = _a.children, children = _b === void 0 ? [] : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.label, label = _d === void 0 ? '' : _d, _e = _a.titleId, titleId = _e === void 0 ? '' : _e, props = __rest(_a, ["children", "className", "label", "titleId"]);
    return (<div {...props} className={react_styles_1.css(select_1["default"].selectMenuGroup, className)}>
    <div className={react_styles_1.css(select_1["default"].selectMenuGroupTitle)} id={titleId} aria-hidden>
      {label}
    </div>
    {children}
  </div>);
};
