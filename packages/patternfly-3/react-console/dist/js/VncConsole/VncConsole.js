'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _logging = require('@novnc/novnc/core/util/logging');

var NovncLog = _interopRequireWildcard(_logging);

var _rfb = require('@novnc/novnc/core/rfb');

var _rfb2 = _interopRequireDefault(_rfb);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Toolbar = require('patternfly-react/dist/js/components/Toolbar/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _helpers = require('patternfly-react/dist/js/common/helpers');

var _helpers2 = _interopRequireDefault(_helpers);

var _VncActions = require('./VncActions');

var _VncActions2 = _interopRequireDefault(_VncActions);

var _constants = require('../common/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CONNECTED = _constants2.default.CONNECTED,
    CONNECTING = _constants2.default.CONNECTING,
    DISCONNECTED = _constants2.default.DISCONNECTED;
var noop = _helpers2.default.noop;

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

        this.rfb = new _rfb2.default(this.novncElem, url, options);
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
          rightContent = _react2.default.createElement(_VncActions2.default, {
            portalToolbarTo: portalToolbarTo,
            onCtrlAltDel: this.onCtrlAltDel,
            textSendShortcut: textSendShortcut,
            textCtrlAltDel: textCtrlAltDel,
            textDisconnect: textDisconnect,
            onDisconnect: this.disconnect
          });
          break;
        case DISCONNECTED:
          status = _react2.default.createElement(
            'div',
            { className: 'vnc-console-disconnected' },
            textDisconnected
          );
          break;
        case CONNECTING:
        default:
          status = _react2.default.createElement(
            'div',
            { className: 'vnc-console-connecting' },
            textConnecting
          );
      }

      if (!this.novncStaticComponent) {
        // create just once
        this.novncStaticComponent = _react2.default.createElement('div', { id: consoleContainerId, ref: this.setNovncElem });
      }

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('vnc-console', this.props.topClassName) },
        this.props.children,
        portalToolbarTo ? _react2.default.createElement(
          _react2.default.Fragment,
          null,
          rightContent,
          status,
          this.novncStaticComponent
        ) : _react2.default.createElement(
          _react2.default.Fragment,
          null,
          _react2.default.createElement(
            _Toolbar2.default.RightContent,
            null,
            rightContent
          ),
          _react2.default.createElement(
            _Toolbar2.default.Results,
            null,
            status,
            this.novncStaticComponent
          )
        )
      );
    }
  }]);

  return VncConsole;
}(_react2.default.Component);

VncConsole.displayName = 'VncConsole';

VncConsole.propTypes = {
  children: _propTypes2.default.node /** Children nodes */

  , host: _propTypes2.default.string.isRequired /** FQDN or IP to connect to */
  , port: _propTypes2.default.string /** TCP Port */
  , path: _propTypes2.default.string /** host:port/path */
  , encrypt: _propTypes2.default.bool /** For all following, see: https://github.com/novnc/noVNC/blob/master/docs/API.md */
  , resizeSession: _propTypes2.default.bool /** Change remote session size according to local HTML container */
  , scaleViewport: _propTypes2.default.bool /** Scale session size according to parent HTML container */
  , viewOnly: _propTypes2.default.bool,
  shared: _propTypes2.default.bool,
  credentials: _propTypes2.default.object /** { username: '', password: '', target: ''} */
  , repeaterID: _propTypes2.default.string,
  vncLogging: _propTypes2.default.string /** log-level for noVNC */
  , portalToolbarTo: _propTypes2.default.string,
  consoleContainerId: _propTypes2.default.string,

  topClassName: _propTypes2.default.string /** Enable customization */

  , onDisconnected: _propTypes2.default.func /** Callback. VNC server disconnected. */
  , onInitFailed: _propTypes2.default.func /** Initialization of RFB failed */
  , onSecurityFailure: _propTypes2.default.func /** Handshake failed */

  , textConnecting: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]) /** For localization and better integration */
  , textDisconnected: _propTypes2.default.string,
  textDisconnect: _propTypes2.default.string,
  textSendShortcut: _propTypes2.default.string,
  textCtrlAltDel: _propTypes2.default.string
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

exports.default = VncConsole;