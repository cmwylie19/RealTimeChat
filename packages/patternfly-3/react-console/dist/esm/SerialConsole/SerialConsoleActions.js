import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import helpers from 'patternfly-react/dist/esm/common/helpers';
var noop = helpers.noop;


var SerialConsoleActions = function SerialConsoleActions(_ref) {
  var idPrefix = _ref.idPrefix,
      isDisconnectEnabled = _ref.isDisconnectEnabled,
      onDisconnect = _ref.onDisconnect,
      onReset = _ref.onReset,
      textDisconnect = _ref.textDisconnect,
      textReconnect = _ref.textReconnect;
  return React.createElement(
    'div',
    { className: 'console-actions-pf' },
    React.createElement(
      'button',
      {
        id: idPrefix + '-disconnect',
        className: classNames('btn', 'btn-default', 'console-actions-buttons-pf', {
          disabled: !isDisconnectEnabled
        }),
        onClick: onDisconnect
      },
      textDisconnect
    ),
    React.createElement(
      'button',
      { id: idPrefix + '-reconnect', className: 'btn btn-default console-actions-buttons-pf', onClick: onReset },
      textReconnect
    )
  );
};

SerialConsoleActions.propTypes = {
  idPrefix: PropTypes.string,
  isDisconnectEnabled: PropTypes.bool,
  onDisconnect: PropTypes.func,
  onReset: PropTypes.func,
  textDisconnect: PropTypes.string,
  textReconnect: PropTypes.string
};

SerialConsoleActions.defaultProps = {
  idPrefix: '',
  isDisconnectEnabled: false,
  onDisconnect: noop,
  onReset: noop,
  textDisconnect: 'Disconnect',
  textReconnect: 'Reconnect'
};

export default SerialConsoleActions;