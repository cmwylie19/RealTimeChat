'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Fade = require('react-bootstrap/lib/Fade');

var _Fade2 = _interopRequireDefault(_Fade);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _LoginCardInputWarning = require('./LoginCardInputWarning');

var _LoginCardInputWarning2 = _interopRequireDefault(_LoginCardInputWarning);

var _index = require('../../../../index');

var _helpers = require('../../../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

  var helpBlock = !topErrorOnly ? showError && _react2.default.createElement(
    _index.HelpBlock,
    null,
    error
  ) || showWarning && _react2.default.createElement(
    _LoginCardInputWarning2.default,
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
  return _react2.default.createElement(
    _index.FormGroup,
    { className: (0, _classnames2.default)('login_card_input', className), controlId: id, validationState: validationState },
    _react2.default.createElement(_index.FormControl, _extends({}, attributes, {
      type: type,
      placeholder: placeholder,
      bsSize: size,
      onChange: onChange,
      onFocus: onFocus,
      onBlur: onBlur,
      onKeyPress: onKeyPress,
      autoComplete: autoComplete
    })),
    topErrorOnly && _react2.default.createElement(_index.FormControl.Feedback, null),
    _react2.default.createElement(
      _Fade2.default,
      { 'in': showError || showWarning },
      _react2.default.createElement(
        'div',
        null,
        helpBlock
      )
    )
  );
};

LoginCardInput.propTypes = {
  /** The input's id */
  id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  /** The input's HTML type */
  type: _propTypes2.default.string,
  /** The input's placeholder */
  placeholder: _propTypes2.default.string,
  /** The bsSize of the input */
  size: _propTypes2.default.string,
  /** The error which is presented under the input */
  error: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  /** The warning which is presented under the input */
  warning: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  /** A callback which is fired when the input changes. */
  onChange: _propTypes2.default.func,
  /** Controlls the warning visibility */
  showWarning: _propTypes2.default.bool,
  /** A callback which is fired when the input blurs. */
  onBlur: _propTypes2.default.func,
  /** A callback which is fired when the input is focused. */
  onFocus: _propTypes2.default.func,
  /** A callback which is fired on a key press. */
  onKeyPress: _propTypes2.default.func,
  /** A callback which is fired when the input blurs. */
  showError: _propTypes2.default.bool,
  /** An additional css classes */
  className: _propTypes2.default.string,
  /** Sets the HTML autocomplete */
  autoComplete: _propTypes2.default.string,
  /** Additional HTML input's attributes. */
  attributes: _propTypes2.default.object,
  /** when topErrorOnly is set to true,
   * the helpblock errors/warnings under each input won't appear,
   * instead we will have only the form error above.
   */
  topErrorOnly: _propTypes2.default.bool
};

LoginCardInput.defaultProps = {
  id: Math.random().toString(),
  type: 'text',
  placeholder: 'Enter Text',
  size: 'lg',
  error: null,
  warning: null,
  onChange: _helpers.noop,
  showWarning: false,
  onBlur: _helpers.noop,
  onFocus: _helpers.noop,
  onKeyPress: _helpers.noop,
  showError: false,
  className: null,
  autoComplete: '',
  attributes: null,
  topErrorOnly: false
};

exports.default = LoginCardInput;