import React from 'react';
import PropTypes from 'prop-types';
import Button from 'patternfly-react/dist/esm/components/Button/Button';
import ExpandCollapse from 'patternfly-react/dist/esm/components/ExpandCollapse/ExpandCollapse';


import { child } from '../common/helpers';
import constants from '../common/constants';

import MoreInformationDefaultContent from './MoreInformationDefaultContent';
import MoreInformationDefaultRDPContent from './MoreInformationDefaultRDPContent';

import { generateDescriptorFile, downloadFile } from './consoleDescriptorGenerator';
import consoleDetailPropType from './consoleDetailPropType';

var VNC_CONSOLE_TYPE = constants.VNC_CONSOLE_TYPE,
    SPICE_CONSOLE_TYPE = constants.SPICE_CONSOLE_TYPE,
    RDP_CONSOLE_TYPE = constants.RDP_CONSOLE_TYPE,
    DEFAULT_VV_FILENAME = constants.DEFAULT_VV_FILENAME,
    DEFAULT_VV_MIMETYPE = constants.DEFAULT_VV_MIMETYPE,
    DEFAULT_RDP_FILENAME = constants.DEFAULT_RDP_FILENAME,
    DEFAULT_RDP_MIMETYPE = constants.DEFAULT_RDP_MIMETYPE;


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
  return React.createElement(
    'div',
    { className: 'remote-viewer-pf' },
    React.createElement(
      'h2',
      null,
      textDesktopConnection
    ),
    React.createElement(
      'div',
      { className: 'remote-viewer-pf-launch' },
      React.createElement(
        Button,
        { className: 'remote-viewer-pf-launch-vv', onClick: onClickVV, disabled: !console },
        textConnectWithRemoteViewer
      ),
      !!rdp && React.createElement(
        Button,
        { onClick: onClickRDP, className: 'remote-viewer-pf-launch-rdp' },
        textConnectWithRDP
      )
    ),
    !!console && React.createElement(
      ExpandCollapse,
      { bordered: false, align: 'center', textExpanded: textMoreInfo, textCollapsed: textMoreInfo },
      child(children, 0) || React.createElement(MoreInformationDefaultContent, null)
    ),
    !!rdp && React.createElement(
      ExpandCollapse,
      { bordered: false, align: 'center', textExpanded: textMoreRDPInfo, textCollapsed: textMoreRDPInfo },
      child(children, 1) || React.createElement(MoreInformationDefaultRDPContent, null)
    )
  );
};

ConnectWithRemoteViewer.propTypes = {
  children: PropTypes.any,

  spice: consoleDetailPropType,
  vnc: consoleDetailPropType,
  rdp: consoleDetailPropType,

  onGenerate: PropTypes.func,
  onDownload: PropTypes.func,

  textDesktopConnection: PropTypes.string.isRequired,
  textConnectWithRemoteViewer: PropTypes.string.isRequired,
  textMoreInfo: PropTypes.string.isRequired,
  textConnectWithRDP: PropTypes.string.isRequired,
  textMoreRDPInfo: PropTypes.string.isRequired
};

ConnectWithRemoteViewer.defaultProps = {
  children: null,

  spice: null,
  vnc: null,
  rdp: null,

  onGenerate: generateDescriptorFile,
  onDownload: downloadFile
};

export default ConnectWithRemoteViewer;