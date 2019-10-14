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
var button_1 = require("@patternfly/react-styles/css/components/Button/button");
var react_styles_1 = require("@patternfly/react-styles");
var withOuia_1 = require("../withOuia");
var ButtonVariant;
(function (ButtonVariant) {
    ButtonVariant["primary"] = "primary";
    ButtonVariant["secondary"] = "secondary";
    ButtonVariant["tertiary"] = "tertiary";
    ButtonVariant["danger"] = "danger";
    ButtonVariant["link"] = "link";
    ButtonVariant["plain"] = "plain";
    ButtonVariant["control"] = "control";
})(ButtonVariant = exports.ButtonVariant || (exports.ButtonVariant = {}));
var ButtonType;
(function (ButtonType) {
    ButtonType["button"] = "button";
    ButtonType["submit"] = "submit";
    ButtonType["reset"] = "reset";
})(ButtonType = exports.ButtonType || (exports.ButtonType = {}));
var Button = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.component, component = _d === void 0 ? 'button' : _d, _e = _a.isActive, isActive = _e === void 0 ? false : _e, _f = _a.isBlock, isBlock = _f === void 0 ? false : _f, _g = _a.isDisabled, isDisabled = _g === void 0 ? false : _g, _h = _a.isFocus, isFocus = _h === void 0 ? false : _h, _j = _a.isHover, isHover = _j === void 0 ? false : _j, _k = _a.isInline, isInline = _k === void 0 ? false : _k, _l = _a.type, type = _l === void 0 ? ButtonType.button : _l, _m = _a.variant, variant = _m === void 0 ? ButtonVariant.primary : _m, _o = _a["aria-label"], ariaLabel = _o === void 0 ? null : _o, _p = _a.icon, icon = _p === void 0 ? null : _p, _q = _a.ouiaContext, ouiaContext = _q === void 0 ? null : _q, _r = _a.ouiaId, ouiaId = _r === void 0 ? null : _r, props = __rest(_a, ["children", "className", "component", "isActive", "isBlock", "isDisabled", "isFocus", "isHover", "isInline", "type", "variant", 'aria-label', "icon", "ouiaContext", "ouiaId"]);
    var Component = component;
    var isButtonElement = Component === 'button';
    return (<Component {...props} aria-disabled={isButtonElement ? null : isDisabled} aria-label={ariaLabel} className={react_styles_1.css(button_1["default"].button, react_styles_1.getModifier(button_1["default"].modifiers, variant), isBlock && button_1["default"].modifiers.block, isDisabled && !isButtonElement && button_1["default"].modifiers.disabled, isActive && button_1["default"].modifiers.active, isFocus && button_1["default"].modifiers.focus, isHover && button_1["default"].modifiers.hover, isInline && variant === ButtonVariant.link && button_1["default"].modifiers.inline, className)} disabled={isButtonElement ? isDisabled : null} tabIndex={isDisabled && !isButtonElement ? -1 : null} type={isButtonElement ? type : null} {...ouiaContext.isOuia && {
        'data-ouia-component-type': 'Button',
        'data-ouia-component-id': ouiaId || ouiaContext.ouiaId
    }}>
    {(icon && variant === ButtonVariant.link) && <span className="pf-c-button__icon">{icon}</span>}
    {children}
  </Component>);
};
var ButtonWithOuiaContext = withOuia_1.withOuiaContext(Button);
exports.Button = ButtonWithOuiaContext;
