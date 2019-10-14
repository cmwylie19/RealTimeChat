import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import MenuItem from 'patternfly-react/dist/esm/components/MenuItem/MenuItem';
import Button from 'patternfly-react/dist/esm/components/Button/Button';
import helpers from 'patternfly-react/dist/esm/common/helpers';
var Dropdown = Button.Dropdown;
var noop = helpers.noop;


var VncActions = function VncActions(_ref) {
  var textSendShortcut = _ref.textSendShortcut,
      textCtrlAltDel = _ref.textCtrlAltDel,
      textDisconnect = _ref.textDisconnect,
      onCtrlAltDel = _ref.onCtrlAltDel,
      onDisconnect = _ref.onDisconnect,
      portalToolbarTo = _ref.portalToolbarTo;

  var toolbar = React.createElement(
    'div',
    null,
    React.createElement(
      Dropdown,
      { bsStyle: 'default', title: textSendShortcut, id: 'console-send-shortcut', onClick: noop },
      React.createElement(
        MenuItem,
        { eventKey: '1', onClick: onCtrlAltDel },
        textCtrlAltDel
      )
    ),
    React.createElement(
      Button,
      { bsStyle: 'default', onClick: onDisconnect },
      textDisconnect
    )
  );

  if (!portalToolbarTo) {
    return toolbar;
  }
  return document.getElementById(portalToolbarTo) && ReactDOM.createPortal(toolbar, document.getElementById(portalToolbarTo));
};

VncActions.propTypes = {
  onDisconnect: PropTypes.func.isRequired,
  onCtrlAltDel: PropTypes.func,

  textCtrlAltDel: PropTypes.string,
  textSendShortcut: PropTypes.string,
  textDisconnect: PropTypes.string,

  portalToolbarTo: PropTypes.string // id of element where VncAction should be inserted
};

VncActions.defaultProps = {
  onCtrlAltDel: noop,

  textCtrlAltDel: 'Ctrl+Alt+Del',
  textSendShortcut: 'Send Key',
  textDisconnect: 'Disconnect',

  portalToolbarTo: ''
};

export default VncActions;