'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('patternfly-react/dist/js/components/Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _ExpandCollapse = require('patternfly-react/dist/js/components/ExpandCollapse/ExpandCollapse');

var _ExpandCollapse2 = _interopRequireDefault(_ExpandCollapse);

var _helpers = require('../common/helpers');

var _constants = require('../common/constants');

var _constants2 = _interopRequireDefault(_constants);

var _MoreInformationDefaultContent = require('./MoreInformationDefaultContent');

var _MoreInformationDefaultContent2 = _interopRequireDefault(_MoreInformationDefaultContent);

var _MoreInformationDefaultRDPContent = require('./MoreInformationDefaultRDPContent');

var _MoreInformationDefaultRDPContent2 = _interopRequireDefault(_MoreInformationDefaultRDPContent);

var _consoleDescriptorGenerator = require('./consoleDescriptorGenerator');

var _consoleDetailPropType = require('./consoleDetailPropType');

var _consoleDetailPropType2 = _interopRequireDefault(_consoleDetailPropType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VNC_CONSOLE_TYPE = _constants2.default.VNC_CONSOLE_TYPE,
    SPICE_CONSOLE_TYPE = _constants2.default.SPICE_CONSOLE_TYPE,
    RDP_CONSOLE_TYPE = _constants2.default.RDP_CONSOLE_TYPE,
    DEFAULT_VV_FILENAME = _constants2.default.DEFAULT_VV_FILENAME,
    DEFAULT_VV_MIMETYPE = _constants2.default.DEFAULT_VV_MIMETYPE,
    DEFAULT_RDP_FILENAME = _constants2.default.DEFAULT_RDP_FILENAME,
    DEFAULT_RDP_MIMETYPE = _constants2.default.DEFAULT_RDP_MIMETYPE;


var ConnectWithRemoteViewer = function ConnectWithRemoteViewer(_ref) {
  var children = _ref.children,
      onGenerate = _ref.onGenerate,
      onDownload = _ref.onDownload,
      spice = _ref.spice,
      vnc = _ref.vnc,
      rdp = _ref.rdp,
      textDesktopConnection = _ref.textDesktopConnection,
      textConnectWithRemoteViewer = _ref.textConnectWithRemoteViewer,
      textMoreInfo = _ref.textMoreInfo,
      textConnectWithRDP = _ref.textConnectWithRDP,
      textMoreRDPInfo = _ref.textMoreRDPInfo;

  var console = spice || vnc; // strictly prefer spice over vnc

  var onClickVV = function onClickVV() {
    var type = spice ? SPICE_CONSOLE_TYPE : VNC_CONSOLE_TYPE;
    if (console) {
      var vv = onGenerate({ console: console, type: type });
      onDownload(vv.fileName || DEFAULT_VV_FILENAME, vv.content, vv.mimeType || DEFAULT_VV_MIMETYPE);
    }
  };

  var onClickRDP = function onClickRDP() {
    if (rdp) {
      var rdpFile = onGenerate({ console: rdp, type: RDP_CONSOLE_TYPE });
      onDownload(rdpFile.fileName || DEFAULT_RDP_FILENAME, rdpFile.content, rdpFile.mimeType || DEFAULT_RDP_MIMETYPE);
    }
  };

  // RDP button is rendered only if the protocol is available
  // If none of Spice or VNC is available, the .vv button is disabled (but rendered)
  return _react2.default.createElement(
    'div',
    { className: 'remote-viewer-pf' },
    _react2.default.createElement(
      'h2',
      null,
      textDesktopConnection
    ),
    _react2.default.createElement(
      'div',
      { className: 'remote-viewer-pf-launch' },
      _react2.default.createElement(
        _Button2.default,
        { className: 'remote-viewer-pf-launch-vv', onClick: onClickVV, disabled: !console },
        textConnectWithRemoteViewer
      ),
      !!rdp && _react2.default.createElement(
        _Button2.default,
        { onClick: onClickRDP, className: 'remote-viewer-pf-launch-rdp' },
        textConnectWithRDP
      )
    ),
    !!console && _react2.default.createElement(
      _ExpandCollapse2.default,
      { bordered: false, align: 'center', textExpanded: textMoreInfo, textCollapsed: textMoreInfo },
      (0, _helpers.child)(children, 0) || _react2.default.createElement(_MoreInformationDefaultContent2.default, null)
    ),
    !!rdp && _react2.default.createElement(
      _ExpandCollapse2.default,
      { bordered: false, align: 'center', textExpanded: textMoreRDPInfo, textCollapsed: textMoreRDPInfo },
      (0, _helpers.child)(children, 1) || _react2.default.createElement(_MoreInformationDefaultRDPContent2.default, null)
    )
  );
};

ConnectWithRemoteViewer.propTypes = {
  children: _propTypes2.default.any,

  spice: _consoleDetailPropType2.default,
  vnc: _consoleDetailPropType2.default,
  rdp: _consoleDetailPropType2.default,

  onGenerate: _propTypes2.default.func,
  onDownload: _propTypes2.default.func,

  textDesktopConnection: _propTypes2.default.string.isRequired,
  textConnectWithRemoteViewer: _propTypes2.default.string.isRequired,
  textMoreInfo: _propTypes2.default.string.isRequired,
  textConnectWithRDP: _propTypes2.default.string.isRequired,
  textMoreRDPInfo: _propTypes2.default.string.isRequired
};

ConnectWithRemoteViewer.defaultProps = {
  children: null,

  spice: null,
  vnc: null,
  rdp: null,

  onGenerate: _consoleDescriptorGenerator.generateDescriptorFile,
  onDownload: _consoleDescriptorGenerator.downloadFile
};

exports.default = ConnectWithRemoteViewer;