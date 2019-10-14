import React from 'react';
import PropTypes from 'prop-types';

import consoleDetailPropType from './consoleDetailPropType';
import Form from 'patternfly-react/dist/esm/components/Form/Form';
import Grid from 'patternfly-react/dist/esm/components/Grid/Grid';
var Col = Grid.Col;
var FormGroup = Form.FormGroup;


var Detail = function Detail(_ref) {
  var title = _ref.title,
      value = _ref.value;
  return React.createElement(
    FormGroup,
    null,
    React.createElement(
      Col,
      { xs: 5, className: 'manual-connection-pf-title' },
      title
    ),
    React.createElement(
      Col,
      { xs: 7, className: 'manual-connection-pf-value' },
      value
    )
  );
};
Detail.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

var ManualConnection = function ManualConnection(_ref2) {
  var spice = _ref2.spice,
      vnc = _ref2.vnc,
      rdp = _ref2.rdp,
      textSpice = _ref2.textSpice,
      textVNC = _ref2.textVNC,
      textNoProtocol = _ref2.textNoProtocol,
      textConnectWith = _ref2.textConnectWith,
      textManualConnection = _ref2.textManualConnection,
      textAddress = _ref2.textAddress,
      textSpiceAddress = _ref2.textSpiceAddress,
      textVNCAddress = _ref2.textVNCAddress,
      textSpicePort = _ref2.textSpicePort,
      textVNCPort = _ref2.textVNCPort,
      textSpiceTlsPort = _ref2.textSpiceTlsPort,
      textVNCTlsPort = _ref2.textVNCTlsPort,
      textRDPPort = _ref2.textRDPPort,
      textRdpAddress = _ref2.textRdpAddress;

  var msg = spice || vnc ? textConnectWith : textNoProtocol;
  var address = spice && vnc && spice.address === vnc.address && spice.address; // merge value if equal
  var rdpAddress = rdp && rdp.address !== address ? rdp.address : null;

  return React.createElement(
    'div',
    { className: 'manual-connection-pf' },
    React.createElement(
      'h2',
      null,
      textManualConnection
    ),
    React.createElement(
      'p',
      null,
      msg
    ),
    React.createElement(
      Form,
      { horizontal: true },
      address && React.createElement(Detail, { title: textAddress, value: address }),
      !address && spice && React.createElement(Detail, { title: textSpiceAddress, value: spice.address }),
      rdpAddress && React.createElement(Detail, { title: textRdpAddress, value: rdpAddress }),
      spice && spice.port && React.createElement(Detail, { title: textSpicePort, value: spice.port }),
      spice && spice.tlsPort && React.createElement(Detail, { title: textSpiceTlsPort, value: spice.tlsPort }),
      !address && vnc && React.createElement(Detail, { title: textVNCAddress, value: vnc.address }),
      spice && vnc.port && React.createElement(Detail, { title: textVNCPort, value: vnc.port }),
      spice && vnc.tlsPort && React.createElement(Detail, { title: textVNCTlsPort, value: vnc.tlsPort }),
      rdp && rdp.port && React.createElement(Detail, { title: textRDPPort, value: rdp.port })
    )
  );
};

ManualConnection.propTypes = {
  spice: consoleDetailPropType,
  vnc: consoleDetailPropType,
  rdp: consoleDetailPropType,

  textManualConnection: PropTypes.string.isRequired /** Internationalization */
  , textSpice: PropTypes.string.isRequired,
  textVNC: PropTypes.string.isRequired,
  textNoProtocol: PropTypes.string.isRequired,
  textConnectWith: PropTypes.string.isRequired,

  textAddress: PropTypes.string.isRequired,
  textSpiceAddress: PropTypes.string.isRequired,
  textVNCAddress: PropTypes.string.isRequired,
  textSpicePort: PropTypes.string.isRequired,
  textVNCPort: PropTypes.string.isRequired,
  textSpiceTlsPort: PropTypes.string.isRequired,
  textVNCTlsPort: PropTypes.string.isRequired,
  textRDPPort: PropTypes.string.isRequired,
  textRdpAddress: PropTypes.string.isRequired
};

ManualConnection.defaultProps = {
  spice: null,
  vnc: null,
  rdp: null
};

export default ManualConnection;