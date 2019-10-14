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
var Dropdown_1 = require("../Dropdown");
var react_icons_1 = require("@patternfly/react-icons");
exports.OptionsMenuItem = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.isSelected, isSelected = _c === void 0 ? false : _c, _d = _a.onSelect, onSelect = _d === void 0 ? function () { return null; } : _d, _e = _a.id, id = _e === void 0 ? '' : _e, isDisabled = _a.isDisabled, props = __rest(_a, ["children", "isSelected", "onSelect", "id", "isDisabled"]);
    return (<Dropdown_1.DropdownItem id={id} component="button" isDisabled={isDisabled} onClick={function (event) { return onSelect(event); }} {...isDisabled && { 'aria-disabled': true }} {...props}>
      {children}
      <i className={react_styles_1.css(options_menu_1["default"].optionsMenuMenuItemIcon)} aria-hidden hidden={!isSelected}><react_icons_1.CheckIcon /></i>
    </Dropdown_1.DropdownItem>);
};
