'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MoreInformationDefaultRDPContent = function MoreInformationDefaultRDPContent() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      null,
      'Clicking "Launch Remote Desktop" will download an .rdp file and launch ',
      _react2.default.createElement(
        'i',
        null,
        'Remote Desktop Viewer'
      ),
      '.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Since the RDP is native Windows protocol, the best experience is achieved when used on Windows-based desktop.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'For other operating systems, the ',
      _react2.default.createElement(
        'i',
        null,
        'Remote Viewer'
      ),
      ' is recommended. If RDP needs to be accessed anyway, the',
      ' ',
      _react2.default.createElement(
        'a',
        { href: 'https://www.remmina.org/wp/' },
        'Remmina'
      ),
      ' client is available.'
    )
  );
};

exports.default = MoreInformationDefaultRDPContent;