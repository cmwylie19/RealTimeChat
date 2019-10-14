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
var _a;
exports.__esModule = true;
var React = require("react");
var react_styles_1 = require("@patternfly/react-styles");
var background_image_1 = require("@patternfly/react-styles/css/components/BackgroundImage/background-image");
/* eslint-disable camelcase */
var react_tokens_1 = require("@patternfly/react-tokens");
var BackgroundImageSrc;
(function (BackgroundImageSrc) {
    BackgroundImageSrc["xs"] = "xs";
    BackgroundImageSrc["xs2x"] = "xs2x";
    BackgroundImageSrc["sm"] = "sm";
    BackgroundImageSrc["sm2x"] = "sm2x";
    BackgroundImageSrc["lg"] = "lg";
    BackgroundImageSrc["filter"] = "filter";
})(BackgroundImageSrc = exports.BackgroundImageSrc || (exports.BackgroundImageSrc = {}));
var cssVariables = (_a = {},
    _a[BackgroundImageSrc.xs] = react_tokens_1.c_background_image_BackgroundImage && react_tokens_1.c_background_image_BackgroundImage.name,
    _a[BackgroundImageSrc.xs2x] = react_tokens_1.c_background_image_BackgroundImage_2x && react_tokens_1.c_background_image_BackgroundImage_2x.name,
    _a[BackgroundImageSrc.sm] = react_tokens_1.c_background_image_BackgroundImage_sm && react_tokens_1.c_background_image_BackgroundImage_sm.name,
    _a[BackgroundImageSrc.sm2x] = react_tokens_1.c_background_image_BackgroundImage_sm_2x && react_tokens_1.c_background_image_BackgroundImage_sm_2x.name,
    _a[BackgroundImageSrc.lg] = react_tokens_1.c_background_image_BackgroundImage_lg && react_tokens_1.c_background_image_BackgroundImage_lg.name,
    _a);
exports.BackgroundImage = function (_a) {
    var _b;
    var _c = _a.className, className = _c === void 0 ? '' : _c, src = _a.src, props = __rest(_a, ["className", "src"]);
    var srcMap = src;
    // Default string value to handle all sizes
    if (typeof src === 'string') {
        srcMap = (_b = {},
            _b[BackgroundImageSrc.xs] = src,
            _b[BackgroundImageSrc.xs2x] = src,
            _b[BackgroundImageSrc.sm] = src,
            _b[BackgroundImageSrc.sm2x] = src,
            _b[BackgroundImageSrc.lg] = src,
            _b[BackgroundImageSrc.filter] = '',
            _b);
    }
    // Build stylesheet string based on cssVariables
    var cssSheet = '';
    Object.keys(cssVariables).forEach(function (size) {
        cssSheet += cssVariables[size] + ": url('" + srcMap[size] + "');";
    });
    // Create emotion stylesheet to inject new css
    var bgStyles = react_styles_1.StyleSheet.create({
        bgOverrides: "&.pf-c-background-image {\n      " + cssSheet + "\n    }"
    });
    return (<div className={react_styles_1.css(background_image_1["default"].backgroundImage, bgStyles.bgOverrides, className)} {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" className="pf-c-background-image__filter" width="0" height="0">
        <filter id="image_overlay" width="">
          <feColorMatrix type="matrix" values="1 0 0 0 0
            1 0 0 0 0
            1 0 0 0 0
            0 0 0 1 0"/>
          <feComponentTransfer colorInterpolationFilters="sRGB" result="duotone">
            <feFuncR type="table" tableValues="0.086274509803922 0.43921568627451"/>
            <feFuncG type="table" tableValues="0.086274509803922 0.43921568627451"/>
            <feFuncB type="table" tableValues="0.086274509803922 0.43921568627451"/>
            <feFuncA type="table" tableValues="0 1"/>
          </feComponentTransfer>
        </filter>
      </svg>
    </div>);
};
