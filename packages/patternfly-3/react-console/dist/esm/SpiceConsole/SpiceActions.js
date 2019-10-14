import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'patternfly-react/dist/esm/components/MenuItem/MenuItem';
import Button from 'patternfly-react/dist/esm/components/Button/Button';
import helpers from 'patternfly-react/dist/esm/common/helpers';
var Dropdown = Button.Dropdown;
var noop = helpers.noop;


var SpiceActions = function SpiceActions(_ref) {
  var textSendShortcut = _ref.textSendShortcut,
      textCtrlAltDel = _ref.textCtrlAltDel,
      onCtrlAltDel = _ref.onCtrlAltDel;
  return React.createElement(
    Dropdown,
    { bsStyle: 'default', title: textSendShortcut, id: 'console-send-shortcut', onClick: noop },
    React.createElement(
      MenuItem,
      { eventKey: '1', onClick: onCtrlAltDel },
      textCtrlAltDel
    )
  );
};

SpiceActions.propTypes = {
  onCtrlAltDel: PropTypes.func,

  textCtrlAltDel: PropTypes.string,
  textSendShortcut: PropTypes.string
};

SpiceActions.defaultProps = {
  onCtrlAltDel: noop,

  textCtrlAltDel: 'Ctrl+Alt+Del',
  textSendShortcut: 'Send Key'
};

export default SpiceActions;