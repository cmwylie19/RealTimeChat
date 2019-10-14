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
var react_tokens_1 = require("@patternfly/react-tokens");
exports.AboutModalBoxHero = function (_a) {
    var _b;
    var className = _a.className, backgroundImageSrc = _a.backgroundImageSrc, props = __rest(_a, ["className", "backgroundImageSrc"]);
    return (<div style={backgroundImageSrc !== ''
        ? (_b = {}, _b[react_tokens_1.c_about_modal_box__hero_sm_BackgroundImage.name] = "url(" + backgroundImageSrc + ")", _b) : {}} className={react_styles_1.css(about_modal_box_1["default"].aboutModalBoxHero, className)} {...props}/>);
};
