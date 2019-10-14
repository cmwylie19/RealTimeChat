"use strict";
exports.__esModule = true;
var React = require("react");
var react_styles_1 = require("@patternfly/react-styles");
var wizard_1 = require("@patternfly/react-styles/css/components/Wizard/wizard");
exports.WizardFooter = function (_a) {
    var children = _a.children;
    return (<footer className={react_styles_1.css(wizard_1["default"].wizardFooter)}>
    {children}
  </footer>);
};
