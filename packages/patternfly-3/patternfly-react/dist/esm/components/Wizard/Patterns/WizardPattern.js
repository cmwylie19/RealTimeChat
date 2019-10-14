var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { noop, Wizard, Icon, Button } from '../../../index';
import WizardPatternBody from './WizardPatternBody';
import { wizardStepShape } from './WizardPatternConstants';

/**
 * WizardPattern - the Wizard Pattern component.
 */
var WizardPattern = function WizardPattern(_ref) {
  var steps = _ref.steps,
      activeStepIndex = _ref.activeStepIndex,
      onStepChanged = _ref.onStepChanged,
      onNext = _ref.onNext,
      onBack = _ref.onBack,
      nextStepDisabled = _ref.nextStepDisabled,
      previousStepDisabled = _ref.previousStepDisabled,
      cancelButtonDisabled = _ref.cancelButtonDisabled,
      title = _ref.title,
      loadingTitle = _ref.loadingTitle,
      loadingMessage = _ref.loadingMessage,
      show = _ref.show,
      onHide = _ref.onHide,
      onExited = _ref.onExited,
      stepButtonsDisabled = _ref.stepButtonsDisabled,
      cancelText = _ref.cancelText,
      backText = _ref.backText,
      nextText = _ref.nextText,
      closeText = _ref.closeText,
      loading = _ref.loading,
      nextButtonRef = _ref.nextButtonRef,
      bodyHeader = _ref.bodyHeader,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['steps', 'activeStepIndex', 'onStepChanged', 'onNext', 'onBack', 'nextStepDisabled', 'previousStepDisabled', 'cancelButtonDisabled', 'title', 'loadingTitle', 'loadingMessage', 'show', 'onHide', 'onExited', 'stepButtonsDisabled', 'cancelText', 'backText', 'nextText', 'closeText', 'loading', 'nextButtonRef', 'bodyHeader', 'children']);

  var onFirstStep = activeStepIndex === 0;
  var onFinalStep = activeStepIndex === steps.length - 1;

  var onHideClick = function onHideClick() {
    onHide(onFinalStep);
  };

  var onBackClick = function onBackClick() {
    goToStep(Math.max(activeStepIndex - 1, 0));
  };

  var onNextClick = function onNextClick() {
    goToStep(Math.min(activeStepIndex + 1, steps.length - 1));
  };

  var getStep = function getStep() {
    var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : activeStepIndex;
    return steps[index];
  };

  var getPrevStep = function getPrevStep() {
    var relativeToIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : activeStepIndex;
    return relativeToIndex > 0 && steps[relativeToIndex - 1];
  };

  var getNextStep = function getNextStep() {
    var relativeToIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : activeStepIndex;
    return relativeToIndex < steps.length - 1 && steps[relativeToIndex + 1];
  };

  var activeStep = getStep();

  var goToStep = function goToStep(newStepIndex) {
    if (shouldPreventGoToStep(newStepIndex)) {
      return;
    }
    if (newStepIndex === activeStepIndex + 1) {
      var stepOnNextResult = activeStep.onNext && activeStep.onNext();
      var propOnNextResult = onNext(newStepIndex);
      var stepFailed = stepOnNextResult === false || propOnNextResult === false;
      if (stepFailed) {
        return;
      }
    }
    if (newStepIndex === activeStepIndex - 1) {
      var _stepFailed = onBack(newStepIndex) === false;
      if (_stepFailed) {
        return;
      }
    }
    if (onStepChanged) {
      onStepChanged(newStepIndex);
    }
  };

  var shouldPreventGoToStep = function shouldPreventGoToStep(newStepIndex) {
    var targetStep = getStep(newStepIndex);
    var stepBeforeTarget = getPrevStep(newStepIndex);

    var preventExitActive = activeStep.preventExit;
    var preventEnterTarget = targetStep.preventEnter || stepBeforeTarget && stepBeforeTarget.isInvalid;
    var nextStepClicked = newStepIndex > activeStepIndex;

    return preventExitActive || preventEnterTarget || nextStepClicked ? nextStepDisabled : previousStepDisabled;
  };

  var activeStepStr = (activeStepIndex + 1).toString();

  var prevStepUnreachable = previousStepDisabled || onFirstStep || activeStep.preventExit || getPrevStep().preventEnter;
  // nextStepUnreachable is still true onFinalStep, because the Next button turns into a Close button
  var nextStepUnreachable = nextStepDisabled || activeStep.isInvalid || activeStep.preventExit || getNextStep().preventEnter;

  return React.createElement(
    Wizard,
    _extends({ show: show, onHide: onHideClick, onExited: onExited }, props),
    React.createElement(Wizard.Header, { onClose: onHideClick, title: title }),
    React.createElement(
      Wizard.Body,
      null,
      bodyHeader,
      React.createElement(WizardPatternBody, {
        loadingTitle: loadingTitle,
        loadingMessage: loadingMessage,
        loading: loading,
        steps: steps,
        activeStepIndex: activeStepIndex,
        activeStepStr: activeStepStr,
        goToStep: goToStep,
        nextStepDisabled: nextStepDisabled,
        stepButtonsDisabled: stepButtonsDisabled
      })
    ),
    React.createElement(
      Wizard.Footer,
      null,
      React.createElement(
        Button,
        { bsStyle: 'default', className: 'btn-cancel', disabled: cancelButtonDisabled, onClick: onHideClick },
        cancelText
      ),
      React.createElement(
        Button,
        { bsStyle: 'default', onClick: onBackClick, disabled: prevStepUnreachable },
        React.createElement(Icon, { type: 'fa', name: 'angle-left' }),
        backText
      ),
      React.createElement(
        Button,
        {
          bsStyle: 'primary',
          onClick: onFinalStep ? onHideClick : onNextClick,
          disabled: nextStepUnreachable,
          ref: nextButtonRef
        },
        onFinalStep ? closeText : React.createElement(
          React.Fragment,
          null,
          nextText,
          React.createElement(Icon, { type: 'fa', name: 'angle-right' })
        )
      )
    ),
    children
  );
};

WizardPattern.propTypes = {
  activeStepIndex: PropTypes.number.isRequired,
  show: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onHide: PropTypes.func,
  onExited: PropTypes.func,
  onBack: PropTypes.func,
  onNext: PropTypes.func,
  onStepChanged: PropTypes.func,
  loadingTitle: PropTypes.string,
  loadingMessage: PropTypes.string,
  loading: PropTypes.bool,
  cancelText: PropTypes.string,
  backText: PropTypes.string,
  nextText: PropTypes.string,
  closeText: PropTypes.string,
  steps: PropTypes.arrayOf(PropTypes.shape(wizardStepShape)),
  nextStepDisabled: PropTypes.bool,
  previousStepDisabled: PropTypes.bool,
  stepButtonsDisabled: PropTypes.bool,
  cancelButtonDisabled: PropTypes.bool,
  nextButtonRef: PropTypes.func,
  bodyHeader: PropTypes.node,
  children: PropTypes.node
};

WizardPattern.defaultProps = {
  show: false,
  title: '',
  onHide: noop,
  onExited: noop,
  onBack: noop,
  onNext: noop,
  onStepChanged: noop,
  loadingTitle: 'Loading Wizard...',
  loadingMessage: 'Loading...',
  loading: false,
  cancelText: 'Cancel',
  backText: 'Back',
  nextText: 'Next',
  closeText: 'Close',
  steps: [],
  nextStepDisabled: false,
  previousStepDisabled: false,
  stepButtonsDisabled: false,
  cancelButtonDisabled: false,
  nextButtonRef: noop,
  bodyHeader: null,
  children: null
};

WizardPattern.displayName = 'WizardPattern';

export default WizardPattern;