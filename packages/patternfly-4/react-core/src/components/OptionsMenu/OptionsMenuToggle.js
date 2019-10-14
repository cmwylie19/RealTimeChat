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
var Dropdown_1 = require("../Dropdown");
exports.OptionsMenuToggle = function (_a) {
    var _b = _a.isPlain, isPlain = _b === void 0 ? false : _b, _c = _a.isHovered, isHovered = _c === void 0 ? false : _c, _d = _a.isActive, isActive = _d === void 0 ? false : _d, _e = _a.isFocused, isFocused = _e === void 0 ? false : _e, _f = _a.isDisabled, isDisabled = _f === void 0 ? false : _f, _g = _a.isOpen, isOpen = _g === void 0 ? false : _g, _h = _a.parentId, parentId = _h === void 0 ? '' : _h, _j = _a.toggleTemplate, toggleTemplate = _j === void 0 ? <React.Fragment /> : _j, _k = _a.hideCaret, hideCaret = _k === void 0 ? false : _k, _l = _a.isSplitButton, isSplitButton = _l === void 0 ? false : _l, type = _a.type, _m = _a["aria-label"], ariaLabel = _m === void 0 ? 'Options menu' : _m, props = __rest(_a, ["isPlain", "isHovered", "isActive", "isFocused", "isDisabled", "isOpen", "parentId", "toggleTemplate", "hideCaret", "isSplitButton", "type", 'aria-label']);
    return (<Dropdown_1.DropdownContext.Consumer>
      {function (_a) {
        var contextId = _a.id;
        return (<Dropdown_1.DropdownToggle {...(isPlain || hideCaret) && { iconComponent: null }} {...props} isPlain={isPlain} isOpen={isOpen} isDisabled={isDisabled} isHovered={isHovered} isActive={isActive} isFocused={isFocused} id={parentId ? parentId + "-toggle" : contextId + "-toggle"} ariaHasPopup="listbox" aria-label={ariaLabel} aria-expanded={isOpen} {...toggleTemplate ? { children: toggleTemplate } : {}}/>);
    }}
    </Dropdown_1.DropdownContext.Consumer>);
};
