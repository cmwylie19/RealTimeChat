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
exports.FormSelectOption = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.value, value = _c === void 0 ? '' : _c, _d = _a.isDisabled, isDisabled = _d === void 0 ? false : _d, label = _a.label, props = __rest(_a, ["className", "value", "isDisabled", "label"]);
    return (<option {...props} className={className} value={value} disabled={isDisabled}>
    {label}
  </option>);
};
