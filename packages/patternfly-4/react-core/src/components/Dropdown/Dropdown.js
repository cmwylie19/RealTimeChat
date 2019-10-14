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
var dropdown_1 = require("@patternfly/react-styles/css/components/Dropdown/dropdown");
var dropdownConstants_1 = require("./dropdownConstants");
var DropdownWithContext_1 = require("./DropdownWithContext");
exports.Dropdown = function (_a) {
    var onSelect = _a.onSelect, ref = _a.ref, // Types of Ref are different for React.FC vs React.Component
    props = __rest(_a, ["onSelect", "ref"]);
    return (<dropdownConstants_1.DropdownContext.Provider value={{
        onSelect: function (event) { return onSelect && onSelect(event); },
        toggleTextClass: dropdown_1["default"].dropdownToggleText,
        toggleIconClass: dropdown_1["default"].dropdownToggleIcon,
        menuClass: dropdown_1["default"].dropdownMenu,
        itemClass: dropdown_1["default"].dropdownMenuItem,
        toggleClass: dropdown_1["default"].dropdownToggle,
        baseClass: dropdown_1["default"].dropdown,
        baseComponent: 'div',
        sectionClass: dropdown_1["default"].dropdownGroup,
        sectionTitleClass: dropdown_1["default"].dropdownGroupTitle,
        sectionComponent: 'section',
        disabledClass: dropdown_1["default"].modifiers.disabled,
        hoverClass: dropdown_1["default"].modifiers.hover,
        separatorClass: dropdown_1["default"].dropdownSeparator
    }}>
    <DropdownWithContext_1.DropdownWithContext {...props}/>
  </dropdownConstants_1.DropdownContext.Provider>);
};
