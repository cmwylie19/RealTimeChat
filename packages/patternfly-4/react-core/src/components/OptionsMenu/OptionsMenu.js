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
var options_menu_1 = require("@patternfly/react-styles/css/components/OptionsMenu/options-menu");
var Dropdown_1 = require("../Dropdown");
var DropdownWithContext_1 = require("../Dropdown/DropdownWithContext");
var OptionsMenuPosition;
(function (OptionsMenuPosition) {
    OptionsMenuPosition["right"] = "right";
    OptionsMenuPosition["left"] = "left";
})(OptionsMenuPosition = exports.OptionsMenuPosition || (exports.OptionsMenuPosition = {}));
var OptionsMenuDirection;
(function (OptionsMenuDirection) {
    OptionsMenuDirection["up"] = "up";
    OptionsMenuDirection["down"] = "down";
})(OptionsMenuDirection = exports.OptionsMenuDirection || (exports.OptionsMenuDirection = {}));
exports.OptionsMenu = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, menuItems = _a.menuItems, toggle = _a.toggle, _c = _a.isText, isText = _c === void 0 ? false : _c, _d = _a.isGrouped, isGrouped = _d === void 0 ? false : _d, id = _a.id, ref = _a.ref, props = __rest(_a, ["className", "menuItems", "toggle", "isText", "isGrouped", "id", "ref"]);
    return (<Dropdown_1.DropdownContext.Provider value={{
        id: id,
        onSelect: function () { return undefined; },
        toggleIconClass: options_menu_1["default"].optionsMenuToggleIcon,
        toggleTextClass: options_menu_1["default"].optionsMenuToggleText,
        menuClass: options_menu_1["default"].optionsMenuMenu,
        itemClass: options_menu_1["default"].optionsMenuMenuItem,
        toggleClass: isText ? options_menu_1["default"].optionsMenuToggleButton : options_menu_1["default"].optionsMenuToggle,
        baseClass: options_menu_1["default"].optionsMenu,
        disabledClass: options_menu_1["default"].modifiers.disabled,
        menuComponent: 'ul',
        baseComponent: 'div'
    }}>
      <DropdownWithContext_1.DropdownWithContext {...props} id={id} dropdownItems={menuItems} className={className} isGrouped={isGrouped} toggle={toggle}/>
    </Dropdown_1.DropdownContext.Provider>);
};
