import _pt from "prop-types";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import { AngleRightIcon, CaretDownIcon } from '@patternfly/react-icons';
import { WizardBody } from './WizardBody';
export const WizardToggle = (_ref) => {
  let {
    isNavOpen,
    onNavToggle,
    nav,
    steps,
    activeStep,
    children,
    hasBodyPadding = true
  } = _ref,
      props = _objectWithoutProperties(_ref, ["isNavOpen", "onNavToggle", "nav", "steps", "activeStep", "children", "hasBodyPadding"]);

  let activeStepIndex;
  let activeStepName;
  let activeStepSubName;

  for (let i = 0; i < steps.length; i++) {
    if (activeStep.id && steps[i].id === activeStep.id || steps[i].name === activeStep.name) {
      activeStepIndex = i + 1;
      activeStepName = steps[i].name;
      break;
    } else if (steps[i].steps) {
      for (const step of steps[i].steps) {
        if (activeStep.id && step.id === activeStep.id || step.name === activeStep.name) {
          activeStepIndex = i + 1;
          activeStepName = steps[i].name;
          activeStepSubName = step.name;
          break;
        }
      }
    }
  }

  return React.createElement(React.Fragment, null, React.createElement("button", {
    onClick: () => onNavToggle(!isNavOpen),
    className: css(styles.wizardToggle, isNavOpen && 'pf-m-expanded'),
    "aria-expanded": isNavOpen
  }, React.createElement("ol", {
    className: css(styles.wizardToggleList)
  }, React.createElement("li", {
    className: css(styles.wizardToggleListItem)
  }, React.createElement("span", {
    className: css(styles.wizardToggleNum)
  }, activeStepIndex), " ", activeStepName, activeStepSubName && React.createElement(AngleRightIcon, {
    className: css(styles.wizardToggleSeparator),
    "aria-hidden": "true"
  })), activeStepSubName && React.createElement("li", {
    className: css(styles.wizardToggleListItem)
  }, activeStepSubName)), React.createElement(CaretDownIcon, {
    className: css(styles.wizardToggleIcon),
    "aria-hidden": "true"
  })), React.createElement("div", {
    className: css(styles.wizardOuterWrap)
  }, React.createElement("div", {
    className: css(styles.wizardInnerWrap)
  }, nav(isNavOpen), React.createElement(WizardBody, {
    hasBodyPadding: hasBodyPadding
  }, activeStep.component)), children));
};
WizardToggle.propTypes = {
  nav: _pt.any.isRequired,
  steps: _pt.arrayOf(_pt.any).isRequired,
  activeStep: _pt.any.isRequired,
  children: _pt.node.isRequired,
  hasBodyPadding: _pt.bool.isRequired,
  isNavOpen: _pt.bool.isRequired,
  onNavToggle: _pt.func.isRequired
};
//# sourceMappingURL=WizardToggle.js.map