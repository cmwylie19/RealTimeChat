var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import Collapse from 'react-collapse';
import { default as cx } from 'classnames';

var LoginFormError = function LoginFormError(_ref) {
  var children = _ref.children,
      show = _ref.show,
      topErrorOnly = _ref.topErrorOnly,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'show', 'topErrorOnly', 'className']);

  return React.createElement(
    'div',
    { className: cx('login-form-error', className), style: topErrorOnly ? { minHeight: '20px' } : null },
    React.createElement(
      Collapse,
      _extends({}, props, { isOpened: children !== null && show }),
      children
    )
  );
};

LoginFormError.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** children nodes or text */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Controlls the collapse to open/close */
  show: PropTypes.bool,
  /** if it`s a login page with topErrorOnly, add a fixed space for the form error */
  topErrorOnly: PropTypes.bool
};

LoginFormError.defaultProps = {
  className: null,
  children: null,
  show: false,
  topErrorOnly: false
};

export default LoginFormError;