"use strict";
exports.__esModule = true;
var React = require("react");
var react_styles_1 = require("@patternfly/react-styles");
var wizard_1 = require("@patternfly/react-styles/css/components/Wizard/wizard");
exports.WizardNavItem = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.text, text = _c === void 0 ? '' : _c, _d = _a.isCurrent, isCurrent = _d === void 0 ? false : _d, _e = _a.isDisabled, isDisabled = _e === void 0 ? false : _e, step = _a.step, _f = _a.onNavItemClick, onNavItemClick = _f === void 0 ? function () { return undefined; } : _f, _g = _a.navItemComponent, navItemComponent = _g === void 0 ? 'a' : _g;
    var NavItemComponent = navItemComponent;
    return (<li className={react_styles_1.css(wizard_1["default"].wizardNavItem)}>
      <NavItemComponent aria-current={isCurrent && !children ? 'page' : false} onClick={function () { return onNavItemClick(step); }} className={react_styles_1.css(wizard_1["default"].wizardNavLink, isCurrent && 'pf-m-current', isDisabled && 'pf-m-disabled')} aria-disabled={isDisabled ? true : false} tabIndex={isDisabled ? -1 : undefined}>
        {text}
      </NavItemComponent>
      {children}
    </li>);
};
