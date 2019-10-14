'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../../../../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginCardSubmitButton = function LoginCardSubmitButton(_ref) {
  var isDisabled = _ref.isDisabled,
      children = _ref.children,
      isLoading = _ref.isLoading,
      attributes = _ref.attributes;
  return _react2.default.createElement(
    _index.Button,
    _extends({
      className: 'login-pf-submit-button',
      type: 'submit',
      bsStyle: 'primary',
      bsSize: 'large',
      block: true,
      disabled: isDisabled
    }, attributes),
    children,
    isLoading ? _react2.default.createElement(
      'span',
      null,
      ' ',
      _react2.default.createElement(_index.Spinner, { loading: isLoading, inline: true, size: 'xs' })
    ) : null
  );
};

LoginCardSubmitButton.propTypes = {
  /** Sets the button disability  */
  isDisabled: _propTypes2.default.bool,
  /** Children nodes */
  children: _propTypes2.default.string,
  /** Sets the spinner visibility */
  isLoading: _propTypes2.default.bool,
  /** Override the button attributes */
  attributes: _propTypes2.default.object
};

LoginCardSubmitButton.defaultProps = {
  isDisabled: false,
  children: null,
  isLoading: false,
  attributes: {}
};

exports.default = LoginCardSubmitButton;