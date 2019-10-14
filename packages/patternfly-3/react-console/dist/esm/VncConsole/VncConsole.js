var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';

import * as NovncLog from '@novnc/novnc/core/util/logging';
import RFB from '@novnc/novnc/core/rfb';

import classNames from 'classnames';
import Toolbar from 'patternfly-react/dist/esm/components/Toolbar/Toolbar';
import helpers from 'patternfly-react/dist/esm/common/helpers';


import VncActions from './VncActions';
import constants from '../common/constants';

var CONNECTED = constants.CONNECTED,
    CONNECTING = constants.CONNECTING,
    DISCONNECTED = constants.DISCONNECTED;
var noop = helpers.noop;

/* eslint no-console: ["warn", { allow: ["error"] }] */

var VncConsole = function (_React$Component) {
  _inherits(VncConsole, _React$Component);

  function VncConsole() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, VncConsole);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = VncConsole.__proto__ || Object.getPrototypeOf(VncConsole)).call.apply(_ref, [this].concat(args))), _this), _this.state = { status: CONNECTING }, _this.disconnect = function () {
      if (!_this.rfb) {
        return;
      }
      _this.rfb.disconnect();
    }, _this.onConnected = function () {
      _this.setState({ status: CONNECTED });
    }, _this.onCtrlAltDel = function (e) {
      if (_this.rfb) {
        _this.rfb.sendCtrlAltDel();
        _this.focusVnc(e);
      }
    }, _this.onDisconnected = function (e) {
      _this.setState({ status: DISCONNECTED });
      _this.props.onDisconnected(e);
    }, _this.onSecurityFailure = function (e) {
      _this.setState({ status: DISCONNECTED });
      _this.props.onSecurityFailure(e);
    }, _this.removeEventListeners = function () {
      _this.rfb.removeEventListener('connect', _this.onConnected);
      _this.rfb.removeEventListener('disconnect', _this.onDisconnected);
      _this.rfb.removeEventListener('securityfailure', _this.onSecurityFailure);
    }, _this.setNovncElem = function (e) {
      _this.novncElem = e;
    }, _this.focusVnc = function (e) {
      if (e && e.target && e.target.blur) {
        e.target.blur();
      }
      _this.novncElem && _this.novncElem.focus();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(VncConsole, [{
    key: 'addEventListeners',
    value: function addEventListeners() {
      this.rfb.addEventListener('connect', this.onConnected);
      this.rfb.addEventListener('disconnect', this.onDisconnected);
      this.rfb.addEventListener('securityfailure', this.onSecurityFailure);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          host = _props.host,
          port = _props.port,
          path = _props.path,
          encrypt = _props.encrypt,
          resizeSession = _props.resizeSession,
          scaleViewport = _props.scaleViewport,
          viewOnly = _props.viewOnly,
          shared = _props.shared,
          credentials = _props.credentials,
          repeaterID = _props.repeaterID,
          vncLogging = _props.vncLogging,
          onInitFailed = _props.onInitFailed;


      NovncLog.init_logging(vncLogging);
      try {
        var protocol = encrypt ? 'wss' : 'ws';
        var url = protocol + '://' + host + ':' + port + '/' + path;

        var options = {
          repeaterID: repeaterID,
          shared: shared,
          credentials: credentials
        };

        this.rfb = new RFB(this.novncElem, url, options);
        this.addEventListeners();
        this.rfb.viewOnly = viewOnly;
        this.rfb.scaleViewport = scaleViewport;
        this.rfb.resizeSession = resizeSession;
      } catch (e) {
        onInitFailed && onInitFailed(e);
        this.rfb = undefined;
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.disconnect();
      this.removeEventListeners();
      this.rfb = undefined;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          textDisconnected = _props2.textDisconnected,
          textConnecting = _props2.textConnecting,
          textSendShortcut = _props2.textSendShortcut,
          textCtrlAltDel = _props2.textCtrlAltDel,
          textDisconnect = _props2.textDisconnect,
          portalToolbarTo = _props2.portalToolbarTo,
          consoleContainerId = _props2.consoleContainerId;


      var status = null;
      var rightContent = null;
      switch (this.state.status) {
        case CONNECTED:
          rightContent = React.createElement(VncActions, {
            portalToolbarTo: portalToolbarTo,
            onCtrlAltDel: this.onCtrlAltDel,
            textSendShortcut: textSendShortcut,
            textCtrlAltDel: textCtrlAltDel,
            textDisconnect: textDisconnect,
            onDisconnect: this.disconnect
          });
          break;
        case DISCONNECTED:
          status = React.createElement(
            'div',
            { className: 'vnc-console-disconnected' },
            textDisconnected
          );
          break;
        case CONNECTING:
        default:
          status = React.createElement(
            'div',
            { className: 'vnc-console-connecting' },
            textConnecting
          );
      }

      if (!this.novncStaticComponent) {
        // create just once
        this.novncStaticComponent = React.createElement('div', { id: consoleContainerId, ref: this.setNovncElem });
      }

      return React.createElement(
        'div',
        { className: classNames('vnc-console', this.props.topClassName) },
        this.props.children,
        portalToolbarTo ? React.createElement(
          React.Fragment,
          null,
          rightContent,
          status,
          this.novncStaticComponent
        ) : React.createElement(
          React.Fragment,
          null,
          React.createElement(
            Toolbar.RightContent,
            null,
            rightContent
          ),
          React.createElement(
            Toolbar.Results,
            null,
            status,
            this.novncStaticComponent
          )
        )
      );
    }
  }]);

  return VncConsole;
}(React.Component);

VncConsole.displayName = 'VncConsole';

VncConsole.propTypes = {
  children: PropTypes.node /** Children nodes */

  , host: PropTypes.string.isRequired /** FQDN or IP to connect to */
  , port: PropTypes.string /** TCP Port */
  , path: PropTypes.string /** host:port/path */
  , encrypt: PropTypes.bool /** For all following, see: https://github.com/novnc/noVNC/blob/master/docs/API.md */
  , resizeSession: PropTypes.bool /** Change remote session size according to local HTML container */
  , scaleViewport: PropTypes.bool /** Scale session size according to parent HTML container */
  , viewOnly: PropTypes.bool,
  shared: PropTypes.bool,
  credentials: PropTypes.object /** { username: '', password: '', target: ''} */
  , repeaterID: PropTypes.string,
  vncLogging: PropTypes.string /** log-level for noVNC */
  , portalToolbarTo: PropTypes.string,
  consoleContainerId: PropTypes.string,

  topClassName: PropTypes.string /** Enable customization */

  , onDisconnected: PropTypes.func /** Callback. VNC server disconnected. */
  , onInitFailed: PropTypes.func /** Initialization of RFB failed */
  , onSecurityFailure: PropTypes.func /** Handshake failed */

  , textConnecting: PropTypes.oneOfType([PropTypes.string, PropTypes.node]) /** For localization and better integration */
  , textDisconnected: PropTypes.string,
  textDisconnect: PropTypes.string,
  textSendShortcut: PropTypes.string,
  textCtrlAltDel: PropTypes.string
};

VncConsole.defaultProps = {
  children: null,

  port: '80',
  path: '',
  encrypt: false,
  resizeSession: true,
  scaleViewport: false,
  viewOnly: false,
  shared: false,
  credentials: undefined,
  repeaterID: '',
  vncLogging: 'warn',
  portalToolbarTo: '',
  consoleContainerId: undefined,

  topClassName: '',

  onDisconnected: noop,
  onInitFailed: noop,
  onSecurityFailure: noop,

  textConnecting: 'Connecting',
  textDisconnected: 'Disconnected',
  textDisconnect: 'Disconnect',
  textSendShortcut: undefined /** Default value defined in VncActions */
  , textCtrlAltDel: undefined /** Default value defined in VncActions */
};

export default VncConsole;