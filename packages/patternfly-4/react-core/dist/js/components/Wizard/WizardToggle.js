"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WizardToggle = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _reactStyles = require("@patternfly/react-styles");

var _wizard = _interopRequireDefault(require("@patternfly/react-styles/css/components/Wizard/wizard"));

var _reactIcons = require("@patternfly/react-icons");

var _WizardBody = require("./WizardBody");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var WizardToggle = function WizardToggle(_ref) {
  var isNavOpen = _ref.isNavOpen,
      onNavToggle = _ref.onNavToggle,
      nav = _ref.nav,
      steps = _ref.steps,
      activeStep = _ref.activeStep,
      children = _ref.children,
      _ref$hasBodyPadding = _ref.hasBodyPadding,
      hasBodyPadding = _ref$hasBodyPadding === void 0 ? true : _ref$hasBodyPadding,
      props = _objectWithoutProperties(_ref, ["isNavOpen", "onNavToggle", "nav", "steps", "activeStep", "children", "hasBodyPadding"]);

  var activeStepIndex;
  var activeStepName;
  var activeStepSubName;

  for (var i = 0; i < steps.length; i++) {
    if (activeStep.id && steps[i].id === activeStep.id || steps[i].name === activeStep.name) {
      activeStepIndex = i + 1;
      activeStepName = steps[i].name;
      break;
    } else if (steps[i].steps) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = steps[i].steps[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var step = _step.value;

          if (activeStep.id && step.id === activeStep.id || step.name === activeStep.name) {
            activeStepIndex = i + 1;
            activeStepName = steps[i].name;
            activeStepSubName = step.name;
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }

  return React.createElement(React.Fragment, null, React.createElement("button", {
    onClick: function onClick() {
      return onNavToggle(!isNavOpen);
    },
    className: (0, _reactStyles.css)(_wizard["default"].wizardToggle, isNavOpen && 'pf-m-expanded'),
    "aria-expanded": isNavOpen
  }, React.createElement("ol", {
    className: (0, _reactStyles.css)(_wizard["default"].wizardToggleList)
  }, React.createElement("li", {
    className: (0, _reactStyles.css)(_wizard["default"].wizardToggleListItem)
  }, React.createElement("span", {
    className: (0, _reactStyles.css)(_wizard["default"].wizardToggleNum)
  }, activeStepIndex), " ", activeStepName, activeStepSubName && React.createElement(_reactIcons.AngleRightIcon, {
    className: (0, _reactStyles.css)(_wizard["default"].wizardToggleSeparator),
    "aria-hidden": "true"
  })), activeStepSubName && React.createElement("li", {
    className: (0, _reactStyles.css)(_wizard["default"].wizardToggleListItem)
  }, activeStepSubName)), React.createElement(_reactIcons.CaretDownIcon, {
    className: (0, _reactStyles.css)(_wizard["default"].wizardToggleIcon),
    "aria-hidden": "true"
  })), React.createElement("div", {
    className: (0, _reactStyles.css)(_wizard["default"].wizardOuterWrap)
  }, React.createElement("div", {
    className: (0, _reactStyles.css)(_wizard["default"].wizardInnerWrap)
  }, nav(isNavOpen), React.createElement(_WizardBody.WizardBody, {
    hasBodyPadding: hasBodyPadding
  }, activeStep.component)), children));
};

exports.WizardToggle = WizardToggle;
WizardToggle.propTypes = {
  nav: _propTypes["default"].any.isRequired,
  steps: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
  activeStep: _propTypes["default"].any.isRequired,
  children: _propTypes["default"].node.isRequired,
  hasBodyPadding: _propTypes["default"].bool.isRequired,
  isNavOpen: _propTypes["default"].bool.isRequired,
  onNavToggle: _propTypes["default"].func.isRequired
};
//# sourceMappingURL=WizardToggle.js.map