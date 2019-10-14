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
var spinner_1 = require("@patternfly/react-styles/css/components/Spinner/spinner");
var react_styles_1 = require("@patternfly/react-styles");
var spinnerSize;
(function (spinnerSize) {
    spinnerSize["sm"] = "sm";
    spinnerSize["md"] = "md";
    spinnerSize["lg"] = "lg";
    spinnerSize["xl"] = "xl";
})(spinnerSize = exports.spinnerSize || (exports.spinnerSize = {}));
exports.Spinner = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.size, size = _c === void 0 ? 'xl' : _c, _d = _a["aria-valuetext"], ariaValueText = _d === void 0 ? 'Loading...' : _d, props = __rest(_a, ["className", "size", 'aria-valuetext']);
    return (<span className={react_styles_1.css(spinner_1["default"].spinner, react_styles_1.getModifier(spinner_1["default"], size))} role="progressbar" aria-valuetext={ariaValueText} {...props}>
    <span className={react_styles_1.css(spinner_1["default"].spinnerClipper)}/>
    <span className={react_styles_1.css(spinner_1["default"].spinnerLeadBall)}/>
    <span className={react_styles_1.css(spinner_1["default"].spinnerTailBall)}/>
  </span>);
};
