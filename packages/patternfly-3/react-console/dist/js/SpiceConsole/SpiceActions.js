'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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


var SpiceActions = function SpiceActions(_ref) {
  var textSendShortcut = _ref.textSendShortcut,
      textCtrlAltDel = _ref.textCtrlAltDel,
      onCtrlAltDel = _ref.onCtrlAltDel;
  return _react2.default.createElement(
    Dropdown,
    { bsStyle: 'default', title: textSendShortcut, id: 'console-send-shortcut', onClick: noop },
    _react2.default.createElement(
      _MenuItem2.default,
      { eventKey: '1', onClick: onCtrlAltDel },
      textCtrlAltDel
    )
  );
};

SpiceActions.propTypes = {
  onCtrlAltDel: _propTypes2.default.func,

  textCtrlAltDel: _propTypes2.default.string,
  textSendShortcut: _propTypes2.default.string
};

SpiceActions.defaultProps = {
  onCtrlAltDel: noop,

  textCtrlAltDel: 'Ctrl+Alt+Del',
  textSendShortcut: 'Send Key'
};

exports.default = SpiceActions;