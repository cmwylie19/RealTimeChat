"use strict";
exports.__esModule = true;
var React = require("react");
var wizard_1 = require("@patternfly/react-styles/css/components/Wizard/wizard");
var react_styles_1 = require("@patternfly/react-styles");
exports.WizardNav = function (_a) {
    var children = _a.children, ariaLabel = _a.ariaLabel, _b = _a.isOpen, isOpen = _b === void 0 ? false : _b, _c = _a.returnList, returnList = _c === void 0 ? false : _c;
    var innerList = (<ol className={react_styles_1.css(wizard_1["default"].wizardNavList)}>
      {children}
    </ol>);
    if (returnList) {
        return innerList;
    }
    return (<nav className={react_styles_1.css(wizard_1["default"].wizardNav, isOpen && 'pf-m-expanded')} aria-label={ariaLabel}>
      <ol className={react_styles_1.css(wizard_1["default"].wizardNavList)}>
        {children}
      </ol>
    </nav>);
};
