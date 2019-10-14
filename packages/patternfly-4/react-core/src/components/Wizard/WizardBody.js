"use strict";
exports.__esModule = true;
var React = require("react");
var wizard_1 = require("@patternfly/react-styles/css/components/Wizard/wizard");
var react_styles_1 = require("@patternfly/react-styles");
exports.WizardBody = function (_a) {
    var children = _a.children, _b = _a.hasBodyPadding, hasBodyPadding = _b === void 0 ? true : _b;
    return (<main className={react_styles_1.css(wizard_1["default"].wizardMain, !hasBodyPadding && 'pf-m-no-padding')}>
    <div className={react_styles_1.css(wizard_1["default"].wizardMainBody)}>
      {children}
    </div>
  </main>);
};
