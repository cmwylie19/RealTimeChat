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
var InternalDropdownItem_1 = require("./InternalDropdownItem");
var dropdownConstants_1 = require("./dropdownConstants");
exports.DropdownItem = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.component, component = _d === void 0 ? 'a' : _d, _e = _a.isDisabled, isDisabled = _e === void 0 ? false : _e, _f = _a.isHovered, isHovered = _f === void 0 ? false : _f, _g = _a.href, href = _g === void 0 ? '' : _g, _h = _a.tooltip, tooltip = _h === void 0 ? null : _h, _j = _a.tooltipProps, tooltipProps = _j === void 0 ? {} : _j, onClick = _a.onClick, ref = _a.ref, // Types of Ref are different for React.FC vs React.Component
    props = __rest(_a, ["children", "className", "component", "isDisabled", "isHovered", "href", "tooltip", "tooltipProps", "onClick", "ref"]);
    return (<dropdownConstants_1.DropdownArrowContext.Consumer>
    {function (context) {
        return <InternalDropdownItem_1.InternalDropdownItem context={context} role="menuitem" tabIndex={-1} children={children} className={className} component={component} isDisabled={isDisabled} isHovered={isHovered} href={href} tooltip={tooltip} tooltipProps={tooltipProps} onClick={onClick} {...props}/>;
    }}
  </dropdownConstants_1.DropdownArrowContext.Consumer>);
};
