'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCollapse = require('react-collapse');

var _reactCollapse2 = _interopRequireDefault(_reactCollapse);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LoginFormError = function LoginFormError(_ref) {
  var children = _ref.children,
      show = _ref.show,
      topErrorOnly = _ref.topErrorOnly,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'show', 'topErrorOnly', 'className']);

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('login-form-error', className), style: topErrorOnly ? { minHeight: '20px' } : null },
    _react2.default.createElement(
      _reactCollapse2.default,
      _extends({}, props, { isOpened: children !== null && show }),
      children
    )
  );
};

LoginFormError.propTypes = {
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** children nodes or text */
  children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  /** Controlls the collapse to open/close */
  show: _propTypes2.default.bool,
  /** if it`s a login page with topErrorOnly, add a fixed space for the form error */
  topErrorOnly: _propTypes2.default.bool
};

LoginFormError.defaultProps = {
  className: null,
  children: null,
  show: false,
  topErrorOnly: false
};

exports.default = LoginFormError;