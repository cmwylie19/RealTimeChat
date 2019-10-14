var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import LoginCardInput from './LoginCardInput';
import LoginCardSettings from './LoginCardSettings';
import LoginCardSubmitButton from './LoginCardSubmitButton';
import LoginFormError from './LoginFormError';
import { Form } from '../../../../index';
import { noop } from '../../../../common/helpers';

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
  return React.createElement(
    Form,
    _extends({ onSubmit: onSubmit, noValidate: true }, attributes),
    React.createElement(
      LoginFormError,
      { show: showError, topErrorOnly: topErrorOnly },
      submitError
    ),
    React.createElement(LoginCardInput, _extends({}, usernameField, { topErrorOnly: topErrorOnly })),
    React.createElement(LoginCardInput, _extends({}, passwordField, { topErrorOnly: topErrorOnly })),
    additionalFields,
    React.createElement(LoginCardSettings, { rememberMe: rememberMe, forgotPassword: forgotPassword }),
    React.createElement(
      LoginCardSubmitButton,
      { isDisabled: disableSubmit, isLoading: isSubmitting, attributes: submitButtonAttributes },
      submitText
    )
  );
};

LoginCardForm.propTypes = {
  /** login username input's props */
  usernameField: PropTypes.shape(_extends({}, LoginCardInput.propTypes)),
  /** login password input's props */
  passwordField: PropTypes.shape(_extends({}, LoginCardInput.propTypes)),
  /** Add additional fields under the inputs  */
  additionalFields: PropTypes.node,
  /** The submit button text */
  submitText: PropTypes.string,
  /** Sets the submit button disability */
  disableSubmit: PropTypes.bool,
  /** A callback that will be triggered when the form is submitted */
  onSubmit: PropTypes.func,
  /** The forgotPassowrd section props */
  forgotPassword: LoginCardSettings.propTypes.forgotPassword,
  /** The rememberMe section props */
  rememberMe: LoginCardSettings.propTypes.rememberMe,
  /** The login form error which is usually shown after the submit - a server error. */
  submitError: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Controlls the form error visibility */
  showError: PropTypes.bool,
  /** Additional HTML attributes to pass to the form */
  attributes: PropTypes.object,
  /** Indicates the state of the form submit and whether to show a spinner or not */
  isSubmitting: PropTypes.bool,
  /** when topErrorOnly is set to true,
   * the helpblock errors/warnings under each input won't appear,
   * instead we will have only the form error above.
   */
  topErrorOnly: PropTypes.bool,
  /** Override the button attributes */
  submitButtonAttributes: PropTypes.object
};

LoginCardForm.defaultProps = {
  usernameField: _extends({}, LoginCardInput.defaultProps, {
    id: 'card_email',
    type: 'email',
    placeholder: 'Email Address'
  }),
  passwordField: _extends({}, LoginCardInput.defaultProps, {
    id: 'card_password',
    type: 'password',
    placeholder: 'Password',
    minLength: 8
  }),
  additionalFields: null,
  submitText: null,
  disableSubmit: false,
  onSubmit: noop,
  forgotPassword: {
    label: null,
    href: '#',
    onClick: noop
  },
  rememberMe: { label: null },
  submitError: null,
  showError: false,
  attributes: null,
  isSubmitting: false,
  topErrorOnly: false,
  submitButtonAttributes: {}
};

export default LoginCardForm;