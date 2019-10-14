'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../../../index');

var _WizardPatternBody = require('./WizardPatternBody');

var _WizardPatternBody2 = _interopRequireDefault(_WizardPatternBody);

var _WizardPatternConstants = require('./WizardPatternConstants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

  return _react2.default.createElement(
    _index.Wizard,
    _extends({ show: show, onHide: onHideClick, onExited: onExited }, props),
    _react2.default.createElement(_index.Wizard.Header, { onClose: onHideClick, title: title }),
    _react2.default.createElement(
      _index.Wizard.Body,
      null,
      bodyHeader,
      _react2.default.createElement(_WizardPatternBody2.default, {
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
    _react2.default.createElement(
      _index.Wizard.Footer,
      null,
      _react2.default.createElement(
        _index.Button,
        { bsStyle: 'default', className: 'btn-cancel', disabled: cancelButtonDisabled, onClick: onHideClick },
        cancelText
      ),
      _react2.default.createElement(
        _index.Button,
        { bsStyle: 'default', onClick: onBackClick, disabled: prevStepUnreachable },
        _react2.default.createElement(_index.Icon, { type: 'fa', name: 'angle-left' }),
        backText
      ),
      _react2.default.createElement(
        _index.Button,
        {
          bsStyle: 'primary',
          onClick: onFinalStep ? onHideClick : onNextClick,
          disabled: nextStepUnreachable,
          ref: nextButtonRef
        },
        onFinalStep ? closeText : _react2.default.createElement(
          _react2.default.Fragment,
          null,
          nextText,
          _react2.default.createElement(_index.Icon, { type: 'fa', name: 'angle-right' })
        )
      )
    ),
    children
  );
};

WizardPattern.propTypes = {
  activeStepIndex: _propTypes2.default.number.isRequired,
  show: _propTypes2.default.bool,
  title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  onHide: _propTypes2.default.func,
  onExited: _propTypes2.default.func,
  onBack: _propTypes2.default.func,
  onNext: _propTypes2.default.func,
  onStepChanged: _propTypes2.default.func,
  loadingTitle: _propTypes2.default.string,
  loadingMessage: _propTypes2.default.string,
  loading: _propTypes2.default.bool,
  cancelText: _propTypes2.default.string,
  backText: _propTypes2.default.string,
  nextText: _propTypes2.default.string,
  closeText: _propTypes2.default.string,
  steps: _propTypes2.default.arrayOf(_propTypes2.default.shape(_WizardPatternConstants.wizardStepShape)),
  nextStepDisabled: _propTypes2.default.bool,
  previousStepDisabled: _propTypes2.default.bool,
  stepButtonsDisabled: _propTypes2.default.bool,
  cancelButtonDisabled: _propTypes2.default.bool,
  nextButtonRef: _propTypes2.default.func,
  bodyHeader: _propTypes2.default.node,
  children: _propTypes2.default.node
};

WizardPattern.defaultProps = {
  show: false,
  title: '',
  onHide: _index.noop,
  onExited: _index.noop,
  onBack: _index.noop,
  onNext: _index.noop,
  onStepChanged: _index.noop,
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
  nextButtonRef: _index.noop,
  bodyHeader: null,
  children: null
};

WizardPattern.displayName = 'WizardPattern';

exports.default = WizardPattern;