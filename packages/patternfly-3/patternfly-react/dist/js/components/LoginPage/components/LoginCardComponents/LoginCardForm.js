'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LoginCardInput = require('./LoginCardInput');

var _LoginCardInput2 = _interopRequireDefault(_LoginCardInput);

var _LoginCardSettings = require('./LoginCardSettings');

var _LoginCardSettings2 = _interopRequireDefault(_LoginCardSettings);

var _LoginCardSubmitButton = require('./LoginCardSubmitButton');

var _LoginCardSubmitButton2 = _interopRequireDefault(_LoginCardSubmitButton);

var _LoginFormError = require('./LoginFormError');

var _LoginFormError2 = _interopRequireDefault(_LoginFormError);

var _index = require('../../../../index');

var _helpers = require('../../../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginCardForm = function LoginCardForm(_ref) {
  var usernameField = _ref.usernameField,
      passwordField = _ref.passwordField,
      additionalFields = _ref.additionalFields,
      submitText = _ref.submitText,
      disableSubmit = _ref.disableSubmit,
      onSubmit = _ref.onSubmit,
      forgotPassword = _ref.forgotPassword,
      rememberMe = _ref.rememberMe,
      submitError = _ref.submitError,
      showError = _ref.showError,
      attributes = _ref.attributes,
      isSubmitting = _ref.isSubmitting,
      topErrorOnly = _ref.topErrorOnly,
      submitButtonAttributes = _ref.submitButtonAttributes;
  return _react2.default.createElement(
    _index.Form,
    _extends({ onSubmit: onSubmit, noValidate: true }, attributes),
    _react2.default.createElement(
      _LoginFormError2.default,
      { show: showError, topErrorOnly: topErrorOnly },
      submitError
    ),
    _react2.default.createElement(_LoginCardInput2.default, _extends({}, usernameField, { topErrorOnly: topErrorOnly })),
    _react2.default.createElement(_LoginCardInput2.default, _extends({}, passwordField, { topErrorOnly: topErrorOnly })),
    additionalFields,
    _react2.default.createElement(_LoginCardSettings2.default, { rememberMe: rememberMe, forgotPassword: forgotPassword }),
    _react2.default.createElement(
      _LoginCardSubmitButton2.default,
      { isDisabled: disableSubmit, isLoading: isSubmitting, attributes: submitButtonAttributes },
      submitText
    )
  );
};

LoginCardForm.propTypes = {
  /** login username input's props */
  usernameField: _propTypes2.default.shape(_extends({}, _LoginCardInput2.default.propTypes)),
  /** login password input's props */
  passwordField: _propTypes2.default.shape(_extends({}, _LoginCardInput2.default.propTypes)),
  /** Add additional fields under the inputs  */
  additionalFields: _propTypes2.default.node,
  /** The submit button text */
  submitText: _propTypes2.default.string,
  /** Sets the submit button disability */
  disableSubmit: _propTypes2.default.bool,
  /** A callback that will be triggered when the form is submitted */
  onSubmit: _propTypes2.default.func,
  /** The forgotPassowrd section props */
  forgotPassword: _LoginCardSettings2.default.propTypes.forgotPassword,
  /** The rememberMe section props */
  rememberMe: _LoginCardSettings2.default.propTypes.rememberMe,
  /** The login form error which is usually shown after the submit - a server error. */
  submitError: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  /** Controlls the form error visibility */
  showError: _propTypes2.default.bool,
  /** Additional HTML attributes to pass to the form */
  attributes: _propTypes2.default.object,
  /** Indicates the state of the form submit and whether to show a spinner or not */
  isSubmitting: _propTypes2.default.bool,
  /** when topErrorOnly is set to true,
   * the helpblock errors/warnings under each input won't appear,
   * instead we will have only the form error above.
   */
  topErrorOnly: _propTypes2.default.bool,
  /** Override the button attributes */
  submitButtonAttributes: _propTypes2.default.object
};

LoginCardForm.defaultProps = {
  usernameField: _extends({}, _LoginCardInput2.default.defaultProps, {
    id: 'card_email',
    type: 'email',
    placeholder: 'Email Address'
  }),
  passwordField: _extends({}, _LoginCardInput2.default.defaultProps, {
    id: 'card_password',
    type: 'password',
    placeholder: 'Password',
    minLength: 8
  }),
  additionalFields: null,
  submitText: null,
  disableSubmit: false,
  onSubmit: _helpers.noop,
  forgotPassword: {
    label: null,
    href: '#',
    onClick: _helpers.noop
  },
  rememberMe: { label: null },
  submitError: null,
  showError: false,
  attributes: null,
  isSubmitting: false,
  topErrorOnly: false,
  submitButtonAttributes: {}
};

exports.default = LoginCardForm;