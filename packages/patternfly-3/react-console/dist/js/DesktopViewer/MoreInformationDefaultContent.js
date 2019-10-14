'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MoreInformationInstallVariant = require('./MoreInformationInstallVariant');

var _MoreInformationInstallVariant2 = _interopRequireDefault(_MoreInformationInstallVariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MoreInformationDefaultContent = function MoreInformationDefaultContent() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      null,
      'Clicking "Launch Remote Viewer" will download a .vv file and launch ',
      _react2.default.createElement(
        'i',
        null,
        'Remote Viewer'
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'i',
        null,
        'Remote Viewer'
      ),
      ' is available for most operating systems. To install it, search for it in GNOME Software or run the following:'
    ),
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(_MoreInformationInstallVariant2.default, { os: 'RHEL, CentOS', content: 'sudo yum install virt-viewer' }),
      _react2.default.createElement(_MoreInformationInstallVariant2.default, { os: 'Fedora', content: 'sudo dnf install virt-viewer' }),
      _react2.default.createElement(_MoreInformationInstallVariant2.default, { os: 'Ubuntu, Debian', content: 'sudo apt-get install virt-viewer' }),
      _react2.default.createElement(
        _MoreInformationInstallVariant2.default,
        { os: 'Windows' },
        _react2.default.createElement(
          'div',
          null,
          'Download the MSI from',
          ' ',
          _react2.default.createElement(
            'a',
            { href: 'https://virt-manager.org/download/', target: '_blank', rel: 'noopener noreferrer' },
            'virt-manager.org'
          )
        )
      )
    )
  );
};

exports.default = MoreInformationDefaultContent;