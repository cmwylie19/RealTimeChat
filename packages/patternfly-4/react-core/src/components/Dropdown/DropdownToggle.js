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
var react_icons_1 = require("@patternfly/react-icons");
var Toggle_1 = require("./Toggle");
var dropdown_1 = require("@patternfly/react-styles/css/components/Dropdown/dropdown");
var dropdownConstants_1 = require("./dropdownConstants");
var react_styles_1 = require("@patternfly/react-styles");
exports.DropdownToggle = function (_a) {
    var _b = _a.id, id = _b === void 0 ? '' : _b, _c = _a.children, children = _c === void 0 ? null : _c, _d = _a.className, className = _d === void 0 ? '' : _d, _e = _a.isOpen, isOpen = _e === void 0 ? false : _e, _f = _a.parentRef, parentRef = _f === void 0 ? null : _f, _g = _a.isFocused, isFocused = _g === void 0 ? false : _g, _h = _a.isHovered, isHovered = _h === void 0 ? false : _h, _j = _a.isActive, isActive = _j === void 0 ? false : _j, _k = _a.isDisabled, isDisabled = _k === void 0 ? false : _k, _l = _a.isPlain, isPlain = _l === void 0 ? false : _l, _m = _a.isPrimary, isPrimary = _m === void 0 ? false : _m, _o = _a.onToggle, onToggle = _o === void 0 ? function (_isOpen) { return undefined; } : _o, _p = _a.iconComponent, IconComponent = _p === void 0 ? react_icons_1.CaretDownIcon : _p, splitButtonItems = _a.splitButtonItems, ariaHasPopup = _a.ariaHasPopup, ref = _a.ref, // Types of Ref are different for React.FC vs React.Component
    props = __rest(_a, ["id", "children", "className", "isOpen", "parentRef", "isFocused", "isHovered", "isActive", "isDisabled", "isPlain", "isPrimary", "onToggle", "iconComponent", "splitButtonItems", "ariaHasPopup", "ref"]);
    var toggle = (<dropdownConstants_1.DropdownContext.Consumer>
      {function (_a) {
        var toggleTextClass = _a.toggleTextClass, toggleIconClass = _a.toggleIconClass;
        return (<Toggle_1.Toggle {...props} id={id} className={className} isOpen={isOpen} parentRef={parentRef} isFocused={isFocused} isHovered={isHovered} isActive={isActive} isDisabled={isDisabled} isPlain={isPlain} isPrimary={isPrimary} onToggle={onToggle} ariaHasPopup={ariaHasPopup} {...splitButtonItems && { "isSplitButton": true, 'aria-label': props['aria-label'] || 'Select' }}>
          {children && <span className={IconComponent && react_styles_1.css(toggleTextClass)}>{children}</span>}
          {IconComponent && <IconComponent className={react_styles_1.css(children && toggleIconClass)}/>}
        </Toggle_1.Toggle>);
    }}
    </dropdownConstants_1.DropdownContext.Consumer>);
    if (splitButtonItems) {
        return (<div className={react_styles_1.css(dropdown_1["default"].dropdownToggle, dropdown_1["default"].modifiers.splitButton, isDisabled && dropdown_1["default"].modifiers.disabled)}>
        {splitButtonItems}
        {toggle}
      </div>);
    }
    return toggle;
};
