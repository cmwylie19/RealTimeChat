'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _consoleDetailPropType = require('./consoleDetailPropType');

var _consoleDetailPropType2 = _interopRequireDefault(_consoleDetailPropType);

var _Form = require('patternfly-react/dist/js/components/Form/Form');

var _Form2 = _interopRequireDefault(_Form);

var _Grid = require('patternfly-react/dist/js/components/Grid/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Col = _Grid2.default.Col;
var FormGroup = _Form2.default.FormGroup;


var Detail = function Detail(_ref) {
  var title = _ref.title,
      value = _ref.value;
  return _react2.default.createElement(
    FormGroup,
    null,
    _react2.default.createElement(
      Col,
      { xs: 5, className: 'manual-connection-pf-title' },
      title
    ),
    _react2.default.createElement(
      Col,
      { xs: 7, className: 'manual-connection-pf-value' },
      value
    )
  );
};
Detail.propTypes = {
  title: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired
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

  return _react2.default.createElement(
    'div',
    { className: 'manual-connection-pf' },
    _react2.default.createElement(
      'h2',
      null,
      textManualConnection
    ),
    _react2.default.createElement(
      'p',
      null,
      msg
    ),
    _react2.default.createElement(
      _Form2.default,
      { horizontal: true },
      address && _react2.default.createElement(Detail, { title: textAddress, value: address }),
      !address && spice && _react2.default.createElement(Detail, { title: textSpiceAddress, value: spice.address }),
      rdpAddress && _react2.default.createElement(Detail, { title: textRdpAddress, value: rdpAddress }),
      spice && spice.port && _react2.default.createElement(Detail, { title: textSpicePort, value: spice.port }),
      spice && spice.tlsPort && _react2.default.createElement(Detail, { title: textSpiceTlsPort, value: spice.tlsPort }),
      !address && vnc && _react2.default.createElement(Detail, { title: textVNCAddress, value: vnc.address }),
      spice && vnc.port && _react2.default.createElement(Detail, { title: textVNCPort, value: vnc.port }),
      spice && vnc.tlsPort && _react2.default.createElement(Detail, { title: textVNCTlsPort, value: vnc.tlsPort }),
      rdp && rdp.port && _react2.default.createElement(Detail, { title: textRDPPort, value: rdp.port })
    )
  );
};

ManualConnection.propTypes = {
  spice: _consoleDetailPropType2.default,
  vnc: _consoleDetailPropType2.default,
  rdp: _consoleDetailPropType2.default,

  textManualConnection: _propTypes2.default.string.isRequired /** Internationalization */
  , textSpice: _propTypes2.default.string.isRequired,
  textVNC: _propTypes2.default.string.isRequired,
  textNoProtocol: _propTypes2.default.string.isRequired,
  textConnectWith: _propTypes2.default.string.isRequired,

  textAddress: _propTypes2.default.string.isRequired,
  textSpiceAddress: _propTypes2.default.string.isRequired,
  textVNCAddress: _propTypes2.default.string.isRequired,
  textSpicePort: _propTypes2.default.string.isRequired,
  textVNCPort: _propTypes2.default.string.isRequired,
  textSpiceTlsPort: _propTypes2.default.string.isRequired,
  textVNCTlsPort: _propTypes2.default.string.isRequired,
  textRDPPort: _propTypes2.default.string.isRequired,
  textRdpAddress: _propTypes2.default.string.isRequired
};

ManualConnection.defaultProps = {
  spice: null,
  vnc: null,
  rdp: null
};

exports.default = ManualConnection;