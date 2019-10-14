'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _MenuItem = require('patternfly-react/dist/js/components/MenuItem/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Button = require('patternfly-react/dist/js/components/Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _helpers = require('patternfly-react/dist/js/common/helpers');

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dropdown = _Button2.default.Dropdown;
var noop = _helpers2.default.noop;


var VncActions = function VncActions(_ref) {
  var textSendShortcut = _ref.textSendShortcut,
      textCtrlAltDel = _ref.textCtrlAltDel,
      textDisconnect = _ref.textDisconnect,
      onCtrlAltDel = _ref.onCtrlAltDel,
      onDisconnect = _ref.onDisconnect,
      portalToolbarTo = _ref.portalToolbarTo;

  var toolbar = _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      Dropdown,
      { bsStyle: 'default', title: textSendShortcut, id: 'console-send-shortcut', onClick: noop },
      _react2.default.createElement(
        _MenuItem2.default,
        { eventKey: '1', onClick: onCtrlAltDel },
        textCtrlAltDel
      )
    ),
    _react2.default.createElement(
      _Button2.default,
      { bsStyle: 'default', onClick: onDisconnect },
      textDisconnect
    )
  );

  if (!portalToolbarTo) {
    return toolbar;
  }
  return document.getElementById(portalToolbarTo) && _reactDom2.default.createPortal(toolbar, document.getElementById(portalToolbarTo));
};

VncActions.propTypes = {
  onDisconnect: _propTypes2.default.func.isRequired,
  onCtrlAltDel: _propTypes2.default.func,

  textCtrlAltDel: _propTypes2.default.string,
  textSendShortcut: _propTypes2.default.string,
  textDisconnect: _propTypes2.default.string,

  portalToolbarTo: _propTypes2.default.string // id of element where VncAction should be inserted
};

VncActions.defaultProps = {
  onCtrlAltDel: noop,

  textCtrlAltDel: 'Ctrl+Alt+Del',
  textSendShortcut: 'Send Key',
  textDisconnect: 'Disconnect',

  portalToolbarTo: ''
};

exports.default = VncActions;