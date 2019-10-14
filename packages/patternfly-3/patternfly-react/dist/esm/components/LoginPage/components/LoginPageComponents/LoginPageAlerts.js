var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import { isArray, isEmpty } from 'lodash';
import LoginPageAlert from './LoginPageAlert';

var LoginPageAlerts = function LoginPageAlerts(_ref) {
  var alert = _ref.alert;

  if (isEmpty(alert)) {
    return null;
  }

  if (isArray(alert)) {
    return alert.map(function (item, index) {
      return React.createElement(LoginPageAlert, _extends({ key: index }, item));
    });
  }

  return React.createElement(LoginPageAlert, alert);
};

LoginPageAlerts.propTypes = {
  alert: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

LoginPageAlerts.defaultProps = {
  alert: null
};

export default LoginPageAlerts;