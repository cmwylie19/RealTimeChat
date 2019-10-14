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
exports.KebabToggle = function (_a) {
    var _b = _a.id, id = _b === void 0 ? '' : _b, _c = _a.children, children = _c === void 0 ? null : _c, _d = _a.className, className = _d === void 0 ? '' : _d, _e = _a.isOpen, isOpen = _e === void 0 ? false : _e, _f = _a["aria-label"], ariaLabel = _f === void 0 ? 'Actions' : _f, _g = _a.parentRef, parentRef = _g === void 0 ? null : _g, _h = _a.isFocused, isFocused = _h === void 0 ? false : _h, _j = _a.isHovered, isHovered = _j === void 0 ? false : _j, _k = _a.isActive, isActive = _k === void 0 ? false : _k, _l = _a.isPlain, isPlain = _l === void 0 ? false : _l, _m = _a.isDisabled, isDisabled = _m === void 0 ? false : _m, _o = _a.onToggle, onToggle = _o === void 0 ? function () { return undefined; } : _o, ref = _a.ref, // Types of Ref are different for React.FC vs React.Component
    props = __rest(_a, ["id", "children", "className", "isOpen", 'aria-label', "parentRef", "isFocused", "isHovered", "isActive", "isPlain", "isDisabled", "onToggle", "ref"]);
    return (<Toggle_1.Toggle id={id} className={className} isOpen={isOpen} aria-label={ariaLabel} parentRef={parentRef} isFocused={isFocused} isHovered={isHovered} isActive={isActive} isPlain={isPlain} isDisabled={isDisabled} onToggle={onToggle} {...props}>
    <react_icons_1.EllipsisVIcon />
  </Toggle_1.Toggle>);
};
