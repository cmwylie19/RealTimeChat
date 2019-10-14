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
var ReactDOM = require("react-dom");
var exenv_1 = require("exenv");
var constants_1 = require("../../helpers/constants");
var react_styles_1 = require("@patternfly/react-styles");
var wizard_1 = require("@patternfly/react-styles/css/components/Wizard/wizard");
var Backdrop_1 = require("../Backdrop");
var Bullseye_1 = require("../../layouts/Bullseye");
var WizardHeader_1 = require("./WizardHeader");
var WizardFooterInternal_1 = require("./WizardFooterInternal");
var WizardToggle_1 = require("./WizardToggle");
var WizardNav_1 = require("./WizardNav");
var WizardNavItem_1 = require("./WizardNavItem");
var WizardContext_1 = require("./WizardContext");
// Can't use ES6 imports :(
// The types for it are also wrong, we should probably ditch this dependency.
// tslint:disable-next-line
var FocusTrap = require('focus-trap-react');
var Wizard = /** @class */ (function (_super) {
    __extends(Wizard, _super);
    function Wizard(props) {
        var _this = _super.call(this, props) || this;
        _this.handleKeyClicks = function (event) {
            if (event.keyCode === constants_1.KEY_CODES.ESCAPE_KEY) {
                if (_this.state.isNavOpen) {
                    _this.setState({ isNavOpen: !_this.state.isNavOpen });
                }
                else if (_this.props.isOpen) {
                    _this.props.onClose();
                }
            }
        };
        _this.toggleSiblingsFromScreenReaders = function (hide) {
            var bodyChildren = document.body.children;
            for (var _i = 0, _a = Array.from(bodyChildren); _i < _a.length; _i++) {
                var child = _a[_i];
                if (child !== _this.container) {
                    hide ? child.setAttribute('aria-hidden', '' + hide) : child.removeAttribute('aria-hidden');
                }
            }
        };
        _this.onNext = function () {
            var _a = _this.props, onNext = _a.onNext, onClose = _a.onClose, onSave = _a.onSave;
            var currentStep = _this.state.currentStep;
            var flattenedSteps = _this.getFlattenedSteps();
            var maxSteps = flattenedSteps.length;
            if (currentStep >= maxSteps) {
                // Hit the save button at the end of the wizard
                if (onSave) {
                    return onSave();
                }
                return onClose();
            }
            else {
                var newStep = currentStep + 1;
                _this.setState({
                    currentStep: newStep
                });
                var _b = flattenedSteps[currentStep - 1], prevId = _b.id, prevName = _b.name;
                var _c = flattenedSteps[newStep - 1], id = _c.id, name_1 = _c.name;
                return onNext && onNext({ id: id, name: name_1 }, { prevId: prevId, prevName: prevName });
            }
        };
        _this.onBack = function () {
            var onBack = _this.props.onBack;
            var currentStep = _this.state.currentStep;
            var flattenedSteps = _this.getFlattenedSteps();
            if (flattenedSteps.length < currentStep) {
                // Previous step was removed, just update the currentStep state
                var adjustedStep = flattenedSteps.length;
                _this.setState({
                    currentStep: adjustedStep
                });
            }
            else {
                var newStep = currentStep - 1 <= 0 ? 0 : currentStep - 1;
                _this.setState({
                    currentStep: newStep
                });
                var _a = flattenedSteps[newStep], prevId = _a.id, prevName = _a.name;
                var _b = flattenedSteps[newStep - 1], id = _b.id, name_2 = _b.name;
                return onBack && onBack({ id: id, name: name_2 }, { prevId: prevId, prevName: prevName });
            }
        };
        _this.goToStep = function (step) {
            var onGoToStep = _this.props.onGoToStep;
            var currentStep = _this.state.currentStep;
            var flattenedSteps = _this.getFlattenedSteps();
            var maxSteps = flattenedSteps.length;
            if (step < 1) {
                step = 1;
            }
            else if (step > maxSteps) {
                step = maxSteps;
            }
            _this.setState({ currentStep: step, isNavOpen: false });
            var _a = flattenedSteps[currentStep - 1], prevId = _a.id, prevName = _a.name;
            var _b = flattenedSteps[step - 1], id = _b.id, name = _b.name;
            return onGoToStep && onGoToStep({ id: id, name: name }, { prevId: prevId, prevName: prevName });
        };
        _this.goToStepById = function (stepId) {
            var flattenedSteps = _this.getFlattenedSteps();
            var step;
            for (var i = 0; i < flattenedSteps.length; i++) {
                if (flattenedSteps[i].id === stepId) {
                    step = i + 1;
                    break;
                }
            }
            if (step) {
                _this.setState({ currentStep: step });
            }
        };
        _this.goToStepByName = function (stepName) {
            var flattenedSteps = _this.getFlattenedSteps();
            var step;
            for (var i = 0; i < flattenedSteps.length; i++) {
                if (flattenedSteps[i].name === stepName) {
                    step = i + 1;
                    break;
                }
            }
            if (step) {
                _this.setState({ currentStep: step });
            }
        };
        _this.getFlattenedSteps = function () {
            var steps = _this.props.steps;
            var flattenedSteps = [];
            for (var _i = 0, steps_1 = steps; _i < steps_1.length; _i++) {
                var step = steps_1[_i];
                if (step.steps) {
                    for (var _a = 0, _b = step.steps; _a < _b.length; _a++) {
                        var childStep = _b[_a];
                        flattenedSteps.push(childStep);
                    }
                }
                else {
                    flattenedSteps.push(step);
                }
            }
            return flattenedSteps;
        };
        _this.getFlattenedStepsIndex = function (flattenedSteps, stepName) {
            for (var i = 0; i < flattenedSteps.length; i++) {
                if (flattenedSteps[i].name === stepName) {
                    return i + 1;
                }
            }
            return 0;
        };
        _this.initSteps = function (steps) {
            // Set default Step values
            for (var i = 0; i < steps.length; i++) {
                if (steps[i].steps) {
                    for (var j = 0; j < steps[i].steps.length; j++) {
                        steps[i].steps[j] = Object.assign({ canJumpTo: true }, steps[i].steps[j]);
                    }
                }
                steps[i] = Object.assign({ canJumpTo: true }, steps[i]);
            }
            return steps;
        };
        var newId = Wizard.currentId++;
        _this.isModal = !props.isInPage;
        if (_this.isModal) {
            if (!props.title) {
                console.warn('Title is required for modals!');
            }
            _this.titleId = "pf-wizard-title-" + newId;
            _this.descriptionId = "pf-wizard-description-" + newId;
        }
        _this.state = {
            currentStep: _this.props.startAtStep && Number.isInteger(_this.props.startAtStep) ? _this.props.startAtStep : 1,
            isNavOpen: false
        };
        return _this;
    }
    Wizard.prototype.componentDidMount = function () {
        if (this.isModal) {
            if (this.container) {
                document.body.appendChild(this.container);
            }
            this.toggleSiblingsFromScreenReaders(true);
            document.addEventListener('keydown', this.handleKeyClicks, false);
        }
    };
    Wizard.prototype.componentWillUnmount = function () {
        if (this.isModal) {
            if (this.container) {
                document.body.removeChild(this.container);
            }
            this.toggleSiblingsFromScreenReaders(false);
            document.removeEventListener('keydown', this.handleKeyClicks, false);
        }
    };
    Wizard.prototype.render = function () {
        var _this = this;
        if (this.isModal) {
            if (!exenv_1.canUseDOM) {
                return null;
            }
            if (!this.container) {
                this.container = document.createElement('div');
            }
        }
        var _a = this.props, isOpen = _a.isOpen, isInPage = _a.isInPage, isFullHeight = _a.isFullHeight, isFullWidth = _a.isFullWidth, width = _a.width, height = _a.height, title = _a.title, description = _a.description, onClose = _a.onClose, onSave = _a.onSave, onBack = _a.onBack, onNext = _a.onNext, onGoToStep = _a.onGoToStep, className = _a.className, steps = _a.steps, startAtStep = _a.startAtStep, _b = _a.nextButtonText, nextButtonText = _b === void 0 ? 'Next' : _b, _c = _a.backButtonText, backButtonText = _c === void 0 ? 'Back' : _c, _d = _a.cancelButtonText, cancelButtonText = _d === void 0 ? 'Cancel' : _d, _e = _a.ariaLabelCloseButton, ariaLabelCloseButton = _e === void 0 ? 'Close' : _e, ariaLabelNav = _a.ariaLabelNav, hasBodyPadding = _a.hasBodyPadding, footer = _a.footer, isCompactNav = _a.isCompactNav, rest = __rest(_a, ["isOpen", "isInPage", "isFullHeight", "isFullWidth", "width", "height", "title", "description", "onClose", "onSave", "onBack", "onNext", "onGoToStep", "className", "steps", "startAtStep", "nextButtonText", "backButtonText", "cancelButtonText", "ariaLabelCloseButton", "ariaLabelNav", "hasBodyPadding", "footer", "isCompactNav"]);
        var currentStep = this.state.currentStep;
        var flattenedSteps = this.getFlattenedSteps();
        var adjustedStep = flattenedSteps.length < currentStep ? flattenedSteps.length : currentStep;
        var activeStep = flattenedSteps[adjustedStep - 1];
        var computedSteps = this.initSteps(steps);
        var firstStep = activeStep === flattenedSteps[0];
        var isValid = activeStep.enableNext !== undefined ? activeStep.enableNext : true;
        var setFullWidth = isFullWidth || width;
        var setFullHeight = isFullHeight || height;
        var nav = function (isWizardNavOpen) { return (<WizardNav_1.WizardNav isOpen={isWizardNavOpen} ariaLabel={ariaLabelNav}>
        {computedSteps.map(function (step, index) {
            if (step.isFinishedStep) {
                // Don't show finished step in the side nav
                return;
            }
            var enabled;
            var navItemStep;
            if (step.steps) {
                var hasActiveChild = false;
                var canJumpToParent = false;
                for (var _i = 0, _a = step.steps; _i < _a.length; _i++) {
                    var subStep = _a[_i];
                    if (activeStep.name === subStep.name) {
                        // one of the children matches
                        hasActiveChild = true;
                    }
                    if (subStep.canJumpTo) {
                        canJumpToParent = true;
                    }
                }
                navItemStep = _this.getFlattenedStepsIndex(flattenedSteps, step.steps[0].name);
                return (<WizardNavItem_1.WizardNavItem key={index} text={step.name} isCurrent={hasActiveChild} isDisabled={!canJumpToParent} step={navItemStep} onNavItemClick={_this.goToStep}>
                <WizardNav_1.WizardNav returnList>
                  {step.steps.map(function (childStep, indexChild) {
                    if (childStep.isFinishedStep) {
                        // Don't show finished step in the side nav
                        return;
                    }
                    navItemStep = _this.getFlattenedStepsIndex(flattenedSteps, childStep.name);
                    enabled = childStep.canJumpTo;
                    return (<WizardNavItem_1.WizardNavItem key={"child_" + indexChild} text={childStep.name} isCurrent={activeStep.name === childStep.name} isDisabled={!enabled} step={navItemStep} onNavItemClick={_this.goToStep}/>);
                })}
                </WizardNav_1.WizardNav>
              </WizardNavItem_1.WizardNavItem>);
            }
            navItemStep = _this.getFlattenedStepsIndex(flattenedSteps, step.name);
            enabled = step.canJumpTo;
            return (<WizardNavItem_1.WizardNavItem key={index} text={step.name} isCurrent={activeStep.name === step.name} isDisabled={!enabled} step={navItemStep} onNavItemClick={_this.goToStep}/>);
        })}
      </WizardNav_1.WizardNav>); };
        var context = {
            goToStepById: this.goToStepById,
            goToStepByName: this.goToStepByName,
            onNext: this.onNext,
            onBack: this.onBack,
            onClose: onClose,
            activeStep: activeStep
        };
        if (this.isModal && !isOpen) {
            return null;
        }
        var wizard = (<WizardContext_1.WizardContextProvider value={context}>
          <div {...rest} className={react_styles_1.css(wizard_1["default"].wizard, !this.isModal && wizard_1["default"].modifiers.inPage, isCompactNav && 'pf-m-compact-nav', activeStep.isFinishedStep && 'pf-m-finished', setFullWidth && wizard_1["default"].modifiers.fullWidth, setFullHeight && wizard_1["default"].modifiers.fullHeight, className)} {...(this.isModal && {
            role: 'dialog',
            'aria-modal': 'true',
            'aria-labelledby': this.titleId,
            'aria-describedby': description ? this.descriptionId : undefined
        })}>
            {this.isModal && (<WizardHeader_1.WizardHeader titleId={this.titleId} descriptionId={this.descriptionId} onClose={onClose} title={title} description={description} ariaLabelCloseButton={ariaLabelCloseButton}/>)}
            <WizardToggle_1.WizardToggle isNavOpen={this.state.isNavOpen} onNavToggle={function (isNavOpen) { return _this.setState({ isNavOpen: isNavOpen }); }} nav={nav} steps={steps} activeStep={activeStep} hasBodyPadding={hasBodyPadding}>
              {footer || (<WizardFooterInternal_1.WizardFooterInternal onNext={this.onNext} onBack={this.onBack} onClose={onClose} isValid={isValid} firstStep={firstStep} activeStep={activeStep} nextButtonText={activeStep.nextButtonText || nextButtonText} backButtonText={backButtonText} cancelButtonText={cancelButtonText}/>)}
            </WizardToggle_1.WizardToggle>
          </div>
        </WizardContext_1.WizardContextProvider>);
        return this.isModal ? ReactDOM.createPortal(<FocusTrap focusTrapOptions={{ clickOutsideDeactivates: true }}>
          <Backdrop_1.Backdrop>
            <Bullseye_1.Bullseye>
              {wizard}
            </Bullseye_1.Bullseye>
          </Backdrop_1.Backdrop>
        </FocusTrap>, this.container) : wizard;
    };
    Wizard.currentId = 0;
    Wizard.defaultProps = {
        isOpen: false,
        isInPage: false,
        isCompactNav: false,
        isFullHeight: false,
        isFullWidth: false,
        title: '',
        description: '',
        className: '',
        startAtStep: 1,
        nextButtonText: 'Next',
        backButtonText: 'Back',
        cancelButtonText: 'Cancel',
        ariaLabelCloseButton: 'Close',
        ariaLabelNav: 'Steps',
        hasBodyPadding: true,
        onBack: null,
        onNext: null,
        onGoToStep: null,
        width: null,
        height: null,
        footer: null,
        onClose: function () { return undefined; }
    };
    return Wizard;
}(React.Component));
exports.Wizard = Wizard;
