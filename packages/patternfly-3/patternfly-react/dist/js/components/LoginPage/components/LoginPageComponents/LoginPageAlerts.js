'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _LoginPageAlert = require('./LoginPageAlert');

var _LoginPageAlert2 = _interopRequireDefault(_LoginPageAlert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginPageAlerts = function LoginPageAlerts(_ref) {
  var alert = _ref.alert;

  if ((0, _lodash.isEmpty)(alert)) {
    return null;
  }

  if ((0, _lodash.isArray)(alert)) {
    return alert.map(function (item, index) {
      return _react2.default.createElement(_LoginPageAlert2.default, _extends({ key: index }, item));
    });
  }

  return _react2.default.createElement(_LoginPageAlert2.default, alert);
};

LoginPageAlerts.propTypes = {
  alert: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object])
};

LoginPageAlerts.defaultProps = {
  alert: null
};

exports.default = LoginPageAlerts;