'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ManualConnection = require('./ManualConnection');

var _ManualConnection2 = _interopRequireDefault(_ManualConnection);

var _ConnectWithRemoteViewer = require('./ConnectWithRemoteViewer');

var _ConnectWithRemoteViewer2 = _interopRequireDefault(_ConnectWithRemoteViewer);

var _consoleDetailPropType = require('./consoleDetailPropType');

var _consoleDetailPropType2 = _interopRequireDefault(_consoleDetailPropType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DesktopViewer = function DesktopViewer(_ref) {
  var children = _ref.children,
      spice = _ref.spice,
      vnc = _ref.vnc,
      rdp = _ref.rdp,
      onGenerate = _ref.onGenerate,
      onDownload = _ref.onDownload,
      topClassName = _ref.topClassName,
      props = _objectWithoutProperties(_ref, ['children', 'spice', 'vnc', 'rdp', 'onGenerate', 'onDownload', 'topClassName']);

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('desktop-viewer-pf', topClassName) },
    _react2.default.createElement(
      _ConnectWithRemoteViewer2.default,
      _extends({
        spice: spice,
        vnc: vnc,
        rdp: rdp,
        onGenerate: onGenerate,
        onDownload: onDownload
      }, props),
      children
    ),
    _react2.default.createElement(_ManualConnection2.default, _extends({ spice: spice, vnc: vnc, rdp: rdp }, props))
  );
};

DesktopViewer.propTypes = {
  children: _propTypes2.default.any,
  topClassName: _propTypes2.default.string,

  spice: _consoleDetailPropType2.default,
  vnc: _consoleDetailPropType2.default,
  rdp: _consoleDetailPropType2.default,

  onGenerate: _propTypes2.default.func,
  onDownload: _propTypes2.default.func,

  textManualConnection: _propTypes2.default.string /** Internationalization */
  , textSpice: _propTypes2.default.string /** Internationalization */
  , textVNC: _propTypes2.default.string /** Internationalization */
  , textNoProtocol: _propTypes2.default.string /** Internationalization */
  , textConnectWith: _propTypes2.default.string /** Internationalization */

  , textAddress: _propTypes2.default.string /** Internationalization */
  , textSpiceAddress: _propTypes2.default.string /** Internationalization */
  , textVNCAddress: _propTypes2.default.string /** Internationalization */
  , textSpicePort: _propTypes2.default.string /** Internationalization */
  , textVNCPort: _propTypes2.default.string /** Internationalization */
  , textSpiceTlsPort: _propTypes2.default.string /** Internationalization */
  , textVNCTlsPort: _propTypes2.default.string /** Internationalization */
  , textRDPPort: _propTypes2.default.string /** Internationalization */
  , textRdpAddress: _propTypes2.default.string /** Internationalization */

  , textDesktopConnection: _propTypes2.default.string /** Internationalization */
  , textConnectWithRemoteViewer: _propTypes2.default.string /** Internationalization */
  , textConnectWithRDP: _propTypes2.default.string /** Internationalization */
  , textMoreInfo: _propTypes2.default.string /** Internationalization */
  , textMoreRDPInfo: _propTypes2.default.string /** Internationalization */
};

DesktopViewer.displayName = 'DesktopViewer';

DesktopViewer.defaultProps = {
  children: null /** Custom content of more-info section  */
  , topClassName: '' /** Custom class name to be added to the root element. */

  , spice: null /** Optional. Connection details for Spice */
  , vnc: null /** Optional. Connection details for VNC */
  , rdp: null /** Optional. Connection details for RDP */

  , /** Callback function. Generate content of .vv file.
     * Parameters: ({ console, type }) => ({
     *     content,  // required string value
     *     mimeType, // optional, default application/x-virt-viewer
     *     fileName  // optional, default: console.vv
     *   })
     */
  onGenerate: undefined,

  /** Callback function. Perform file download.
   * Default implementation is usually good enough, but i.e. in case of environment with tight
   * content security policy set, this might be required.
   *
   * Examples for alternative file-download implementations:
   *   - use of iframe
   *   - use of http-server
   *
   * Parameters: (fileName, content, mimeType) => {}
   */
  onDownload: undefined,

  textManualConnection: 'Manual Connection',
  textSpice: 'Spice',
  textVNC: 'VNC',
  textNoProtocol: 'No connection available.',
  textConnectWith: 'Connect with any viewer application for following protocols:',

  textAddress: 'Address:',
  textSpiceAddress: 'SPICE Address:',
  textVNCAddress: 'VNC Address:',
  textSpicePort: 'SPICE Port:',
  textVNCPort: 'VNC Port:',
  textSpiceTlsPort: 'SPICE TLS Port:',
  textVNCTlsPort: 'VNC TLS Port:',
  textRDPPort: 'RDP Port:',
  textRdpAddress: 'RDP Address:',

  textDesktopConnection: 'Desktop Client',
  textConnectWithRemoteViewer: 'Launch Remote Viewer',
  textConnectWithRDP: 'Launch Remote Desktop',
  textMoreInfo: 'Remote Viewer Details',
  textMoreRDPInfo: 'Remote Desktop Details'
};

exports.default = DesktopViewer;