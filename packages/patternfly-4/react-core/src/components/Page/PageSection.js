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
var page_1 = require("@patternfly/react-styles/css/components/Page/page");
var react_styles_1 = require("@patternfly/react-styles");
var PageSectionVariants;
(function (PageSectionVariants) {
    PageSectionVariants["default"] = "default";
    PageSectionVariants["light"] = "light";
    PageSectionVariants["dark"] = "dark";
    PageSectionVariants["darker"] = "darker";
})(PageSectionVariants = exports.PageSectionVariants || (exports.PageSectionVariants = {}));
var PageSectionTypes;
(function (PageSectionTypes) {
    PageSectionTypes["default"] = "default";
    PageSectionTypes["nav"] = "nav";
})(PageSectionTypes = exports.PageSectionTypes || (exports.PageSectionTypes = {}));
exports.PageSection = function (_a) {
    var _b, _c;
    var _d = _a.className, className = _d === void 0 ? '' : _d, children = _a.children, _e = _a.variant, variant = _e === void 0 ? 'default' : _e, _f = _a.type, type = _f === void 0 ? 'default' : _f, _g = _a.noPadding, noPadding = _g === void 0 ? false : _g, _h = _a.noPaddingMobile, noPaddingMobile = _h === void 0 ? false : _h, isFilled = _a.isFilled, props = __rest(_a, ["className", "children", "variant", "type", "noPadding", "noPaddingMobile", "isFilled"]);
    var variantType = (_b = {},
        _b[PageSectionTypes["default"]] = page_1["default"].pageMainSection,
        _b[PageSectionTypes.nav] = page_1["default"].pageMainNav,
        _b);
    var variantStyle = (_c = {},
        _c[PageSectionVariants["default"]] = '',
        _c[PageSectionVariants.light] = page_1["default"].modifiers.light,
        _c[PageSectionVariants.dark] = page_1["default"].modifiers.dark_200,
        _c[PageSectionVariants.darker] = page_1["default"].modifiers.dark_100,
        _c);
    return (<section {...props} className={react_styles_1.css(variantType[type], noPadding && page_1["default"].modifiers.noPadding, noPaddingMobile && page_1["default"].modifiers.noPaddingMobile, variantStyle[variant], isFilled === false && page_1["default"].modifiers.noFill, isFilled === true && page_1["default"].modifiers.fill, className)}>
      {children}
    </section>);
};
