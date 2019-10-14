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
var wizard_1 = require("@patternfly/react-styles/css/components/Wizard/wizard");
var react_icons_1 = require("@patternfly/react-icons");
var WizardBody_1 = require("./WizardBody");
exports.WizardToggle = function (_a) {
    var isNavOpen = _a.isNavOpen, onNavToggle = _a.onNavToggle, nav = _a.nav, steps = _a.steps, activeStep = _a.activeStep, children = _a.children, _b = _a.hasBodyPadding, hasBodyPadding = _b === void 0 ? true : _b, props = __rest(_a, ["isNavOpen", "onNavToggle", "nav", "steps", "activeStep", "children", "hasBodyPadding"]);
    var activeStepIndex;
    var activeStepName;
    var activeStepSubName;
    for (var i = 0; i < steps.length; i++) {
        if ((activeStep.id && steps[i].id === activeStep.id) || steps[i].name === activeStep.name) {
            activeStepIndex = i + 1;
            activeStepName = steps[i].name;
            break;
        }
        else if (steps[i].steps) {
            for (var _i = 0, _c = steps[i].steps; _i < _c.length; _i++) {
                var step = _c[_i];
                if ((activeStep.id && step.id === activeStep.id) || step.name === activeStep.name) {
                    activeStepIndex = i + 1;
                    activeStepName = steps[i].name;
                    activeStepSubName = step.name;
                    break;
                }
            }
        }
    }
    return (<>
      <button onClick={function () { return onNavToggle(!isNavOpen); }} className={react_styles_1.css(wizard_1["default"].wizardToggle, isNavOpen && 'pf-m-expanded')} aria-expanded={isNavOpen}>
        <ol className={react_styles_1.css(wizard_1["default"].wizardToggleList)}>
          <li className={react_styles_1.css(wizard_1["default"].wizardToggleListItem)}>
            <span className={react_styles_1.css(wizard_1["default"].wizardToggleNum)}>{activeStepIndex}</span> {activeStepName}
            {activeStepSubName && <react_icons_1.AngleRightIcon className={react_styles_1.css(wizard_1["default"].wizardToggleSeparator)} aria-hidden="true"/>}
          </li>
          {activeStepSubName && <li className={react_styles_1.css(wizard_1["default"].wizardToggleListItem)}>{activeStepSubName}</li>}
        </ol>
        <react_icons_1.CaretDownIcon className={react_styles_1.css(wizard_1["default"].wizardToggleIcon)} aria-hidden="true"/>
      </button>
      <div className={react_styles_1.css(wizard_1["default"].wizardOuterWrap)}>
        <div className={react_styles_1.css(wizard_1["default"].wizardInnerWrap)}>
          {nav(isNavOpen)}
          <WizardBody_1.WizardBody hasBodyPadding={hasBodyPadding}>{activeStep.component}</WizardBody_1.WizardBody>
        </div>
        {children}
      </div>
    </>);
};
