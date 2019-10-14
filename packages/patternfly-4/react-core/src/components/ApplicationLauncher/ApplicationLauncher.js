"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var app_launcher_1 = require("@patternfly/react-styles/css/components/AppLauncher/app-launcher");
var react_icons_1 = require("@patternfly/react-icons");
var Dropdown_1 = require("../Dropdown");
var DropdownWithContext_1 = require("../Dropdown/DropdownWithContext");
var ApplicationLauncher = /** @class */ (function (_super) {
    __extends(ApplicationLauncher, _super);
    function ApplicationLauncher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApplicationLauncher.prototype.render = function () {
        var _a = this.props, ariaLabel = _a["aria-label"], isOpen = _a.isOpen, onToggle = _a.onToggle, toggleIcon = _a.toggleIcon, onSelect = _a.onSelect, isDisabled = _a.isDisabled, className = _a.className, isGrouped = _a.isGrouped, dropdownItems = _a.dropdownItems, items = _a.items, ref = _a.ref, props = __rest(_a, ['aria-label', "isOpen", "onToggle", "toggleIcon", "onSelect", "isDisabled", "className", "isGrouped", "dropdownItems", "items", "ref"]);
        return (<Dropdown_1.DropdownContext.Provider value={{
            onSelect: onSelect,
            menuClass: app_launcher_1["default"].appLauncherMenu,
            itemClass: app_launcher_1["default"].appLauncherMenuItem,
            toggleClass: app_launcher_1["default"].appLauncherToggle,
            baseClass: app_launcher_1["default"].appLauncher,
            baseComponent: 'nav',
            sectionClass: app_launcher_1["default"].appLauncherGroup,
            sectionTitleClass: app_launcher_1["default"].appLauncherGroupTitle,
            sectionComponent: 'section',
            disabledClass: app_launcher_1["default"].modifiers.disabled,
            hoverClass: app_launcher_1["default"].modifiers.hover,
            separatorClass: app_launcher_1["default"].appLauncherSeparator
        }}>
        <DropdownWithContext_1.DropdownWithContext {...props} dropdownItems={items.length ? items : dropdownItems} isOpen={isOpen} className={className} aria-label={ariaLabel} toggle={<Dropdown_1.DropdownToggle iconComponent={null} isOpen={isOpen} onToggle={onToggle} isDisabled={isDisabled} aria-label={ariaLabel}>
              {toggleIcon}
            </Dropdown_1.DropdownToggle>} isGrouped={isGrouped}/>
      </Dropdown_1.DropdownContext.Provider>);
    };
    ApplicationLauncher.defaultProps = {
        "className": '',
        "isDisabled": false,
        "direction": Dropdown_1.DropdownDirection.down,
        "dropdownItems": [],
        "items": [],
        "isOpen": false,
        "position": Dropdown_1.DropdownPosition.left,
        "onSelect": function (_event) { return undefined; },
        "onToggle": function (_value) { return undefined; },
        'aria-label': 'Application launcher',
        "isGrouped": false,
        "toggleIcon": <react_icons_1.ThIcon />
    };
    return ApplicationLauncher;
}(React.Component));
exports.ApplicationLauncher = ApplicationLauncher;
