'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _helpers = require('patternfly-react/dist/js/common/helpers');

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = _helpers2.default.noop;


var SerialConsoleActions = function SerialConsoleActions(_ref) {
  var idPrefix = _ref.idPrefix,
      isDisconnectEnabled = _ref.isDisconnectEnabled,
      onDisconnect = _ref.onDisconnect,
      onReset = _ref.onReset,
      textDisconnect = _ref.textDisconnect,
      textReconnect = _ref.textReconnect;
  return _react2.default.createElement(
    'div',
    { className: 'console-actions-pf' },
    _react2.default.createElement(
      'button',
      {
        id: idPrefix + '-disconnect',
        className: (0, _classnames2.default)('btn', 'btn-default', 'console-actions-buttons-pf', {
          disabled: !isDisconnectEnabled
        }),
        onClick: onDisconnect
      },
      textDisconnect
    ),
    _react2.default.createElement(
      'button',
      { id: idPrefix + '-reconnect', className: 'btn btn-default console-actions-buttons-pf', onClick: onReset },
      textReconnect
    )
  );
};

SerialConsoleActions.propTypes = {
  idPrefix: _propTypes2.default.string,
  isDisconnectEnabled: _propTypes2.default.bool,
  onDisconnect: _propTypes2.default.func,
  onReset: _propTypes2.default.func,
  textDisconnect: _propTypes2.default.string,
  textReconnect: _propTypes2.default.string
};

SerialConsoleActions.defaultProps = {
  idPrefix: '',
  isDisconnectEnabled: false,
  onDisconnect: noop,
  onReset: noop,
  textDisconnect: 'Disconnect',
  textReconnect: 'Reconnect'
};

exports.default = SerialConsoleActions;