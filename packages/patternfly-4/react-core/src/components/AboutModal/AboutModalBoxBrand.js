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
var about_modal_box_1 = require("@patternfly/react-styles/css/components/AboutModalBox/about-modal-box");
exports.AboutModalBoxBrand = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.src, src = _c === void 0 ? '' : _c, alt = _a.alt, props = __rest(_a, ["className", "src", "alt"]);
    return (<div className={react_styles_1.css(about_modal_box_1["default"].aboutModalBoxBrand, className)} {...props}>
    <img className={react_styles_1.css(about_modal_box_1["default"].aboutModalBoxBrandImage)} src={src} alt={alt}/>
  </div>);
};
