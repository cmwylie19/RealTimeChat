"use strict";
exports.__esModule = true;
var React = require("react");
var react_styles_1 = require("@patternfly/react-styles");
var wizard_1 = require("@patternfly/react-styles/css/components/Wizard/wizard");
var Button_1 = require("../Button");
exports.WizardFooterInternal = function (_a) {
    var onNext = _a.onNext, onBack = _a.onBack, onClose = _a.onClose, isValid = _a.isValid, firstStep = _a.firstStep, activeStep = _a.activeStep, nextButtonText = _a.nextButtonText, backButtonText = _a.backButtonText, cancelButtonText = _a.cancelButtonText;
    return (<footer className={react_styles_1.css(wizard_1["default"].wizardFooter)}>
    <Button_1.Button variant={Button_1.ButtonVariant.primary} type="submit" onClick={onNext} isDisabled={!isValid}>
      {nextButtonText}
    </Button_1.Button>
    {!activeStep.hideBackButton && <Button_1.Button variant={Button_1.ButtonVariant.secondary} onClick={onBack} className={react_styles_1.css(firstStep && 'pf-m-disabled')}>
      {backButtonText}
    </Button_1.Button>}
    {!activeStep.hideCancelButton && <Button_1.Button variant={Button_1.ButtonVariant.link} onClick={onClose}>
      {cancelButtonText}
    </Button_1.Button>}
  </footer>);
};
