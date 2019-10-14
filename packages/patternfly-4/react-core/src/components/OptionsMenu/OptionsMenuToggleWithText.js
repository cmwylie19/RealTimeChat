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
var options_menu_1 = require("@patternfly/react-styles/css/components/OptionsMenu/options-menu");
var OptionsMenuToggle_1 = require("./OptionsMenuToggle");
exports.OptionsMenuToggleWithText = function (_a) {
    var _b = _a.parentId, parentId = _b === void 0 ? '' : _b, toggleText = _a.toggleText, _c = _a.toggleTextClassName, toggleTextClassName = _c === void 0 ? '' : _c, toggleButtonContents = _a.toggleButtonContents, _d = _a.toggleButtonContentsClassName, toggleButtonContentsClassName = _d === void 0 ? '' : _d, _e = _a.onToggle, onToggle = _e === void 0 ? function () { return null; } : _e, _f = _a.isOpen, isOpen = _f === void 0 ? false : _f, _g = _a.isPlain, isPlain = _g === void 0 ? false : _g, _h = _a.isHovered, isHovered = _h === void 0 ? false : _h, _j = _a.isActive, isActive = _j === void 0 ? false : _j, _k = _a.isFocused, isFocused = _k === void 0 ? false : _k, _l = _a.isDisabled, isDisabled = _l === void 0 ? false : _l, ariaHasPopup = _a.ariaHasPopup, parentRef = _a.parentRef, onEnter = _a.onEnter, _m = _a["aria-label"], ariaLabel = _m === void 0 ? 'Options menu' : _m, props = __rest(_a, ["parentId", "toggleText", "toggleTextClassName", "toggleButtonContents", "toggleButtonContentsClassName", "onToggle", "isOpen", "isPlain", "isHovered", "isActive", "isFocused", "isDisabled", "ariaHasPopup", "parentRef", "onEnter", 'aria-label']);
    return (<div className={react_styles_1.css(options_menu_1["default"].optionsMenuToggle, react_styles_1.getModifier(options_menu_1["default"], 'text'), isPlain && react_styles_1.getModifier(options_menu_1["default"], 'plain'), isHovered && react_styles_1.getModifier(options_menu_1["default"], 'hover'), isActive && react_styles_1.getModifier(options_menu_1["default"], 'active'), isFocused && react_styles_1.getModifier(options_menu_1["default"], 'focus'), isDisabled && react_styles_1.getModifier(options_menu_1["default"], 'disabled'))} {...props}>
    <span className={react_styles_1.css(options_menu_1["default"].optionsMenuToggleText, toggleTextClassName)}>{toggleText}</span>
    <OptionsMenuToggle_1.OptionsMenuToggle className={toggleButtonContentsClassName} isDisabled={isDisabled} aria-label={ariaLabel} isOpen={isOpen} isSplitButton onToggle={onToggle} aria-haspopup="listbox" parentRef={parentRef} onEnter={onEnter} toggleTemplate={toggleButtonContents}/>
  </div>);
};
