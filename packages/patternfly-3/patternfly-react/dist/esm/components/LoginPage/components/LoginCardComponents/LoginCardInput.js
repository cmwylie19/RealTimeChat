var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-bootstrap/es/Fade';

import classNames from 'classnames';
import LoginCardInputWarning from './LoginCardInputWarning';
import { FormControl, FormGroup, HelpBlock } from '../../../../index';
import { noop } from '../../../../common/helpers';

var LoginCardInput = function LoginCardInput(_ref) {
  var id = _ref.id,
      type = _ref.type,
      placeholder = _ref.placeholder,
      size = _ref.size,
      error = _ref.error,
      warning = _ref.warning,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      onKeyPress = _ref.onKeyPress,
      showError = _ref.showError,
      showWarning = _ref.showWarning,
      className = _ref.className,
      autoComplete = _ref.autoComplete,
      attributes = _ref.attributes,
      topErrorOnly = _ref.topErrorOnly;

  var helpBlock = !topErrorOnly ? showError && React.createElement(
    HelpBlock,
    null,
    error
  ) || showWarning && React.createElement(
    LoginCardInputWarning,
    null,
    warning
  ) : null;
  var validationState = null;
  if (topErrorOnly) {
    if (showWarning) {
      validationState = 'warning';
    }
  } else if (showError) {
    validationState = 'error';
  }
  return React.createElement(
    FormGroup,
    { className: classNames('login_card_input', className), controlId: id, validationState: validationState },
    React.createElement(FormControl, _extends({}, attributes, {
      type: type,
      placeholder: placeholder,
      bsSize: size,
      onChange: onChange,
      onFocus: onFocus,
      onBlur: onBlur,
      onKeyPress: onKeyPress,
      autoComplete: autoComplete
    })),
    topErrorOnly && React.createElement(FormControl.Feedback, null),
    React.createElement(
      Fade,
      { 'in': showError || showWarning },
      React.createElement(
        'div',
        null,
        helpBlock
      )
    )
  );
};

LoginCardInput.propTypes = {
  /** The input's id */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** The input's HTML type */
  type: PropTypes.string,
  /** The input's placeholder */
  placeholder: PropTypes.string,
  /** The bsSize of the input */
  size: PropTypes.string,
  /** The error which is presented under the input */
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** The warning which is presented under the input */
  warning: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** A callback which is fired when the input changes. */
  onChange: PropTypes.func,
  /** Controlls the warning visibility */
  showWarning: PropTypes.bool,
  /** A callback which is fired when the input blurs. */
  onBlur: PropTypes.func,
  /** A callback which is fired when the input is focused. */
  onFocus: PropTypes.func,
  /** A callback which is fired on a key press. */
  onKeyPress: PropTypes.func,
  /** A callback which is fired when the input blurs. */
  showError: PropTypes.bool,
  /** An additional css classes */
  className: PropTypes.string,
  /** Sets the HTML autocomplete */
  autoComplete: PropTypes.string,
  /** Additional HTML input's attributes. */
  attributes: PropTypes.object,
  /** when topErrorOnly is set to true,
   * the helpblock errors/warnings under each input won't appear,
   * instead we will have only the form error above.
   */
  topErrorOnly: PropTypes.bool
};

LoginCardInput.defaultProps = {
  id: Math.random().toString(),
  type: 'text',
  placeholder: 'Enter Text',
  size: 'lg',
  error: null,
  warning: null,
  onChange: noop,
  showWarning: false,
  onBlur: noop,
  onFocus: noop,
  onKeyPress: noop,
  showError: false,
  className: null,
  autoComplete: '',
  attributes: null,
  topErrorOnly: false
};

export default LoginCardInput;