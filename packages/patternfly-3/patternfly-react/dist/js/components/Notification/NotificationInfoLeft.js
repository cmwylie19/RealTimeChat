'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotificationInfoLeft = function NotificationInfoLeft(_ref) {
  var text = _ref.text;
  return _react2.default.createElement(
    'span',
    { className: 'date' },
    text
  );
};

NotificationInfoLeft.propTypes = {
  /** Text */
  text: _propTypes2.default.string.isRequired
};

exports.default = NotificationInfoLeft;