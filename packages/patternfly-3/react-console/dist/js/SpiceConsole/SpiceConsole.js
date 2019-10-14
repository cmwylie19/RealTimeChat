'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Toolbar = require('patternfly-react/dist/js/components/Toolbar/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _helpers = require('patternfly-react/dist/js/common/helpers');

var _helpers2 = _interopRequireDefault(_helpers);

var _spiceHtml = require('@spice-project/spice-html5');

var _constants = require('../common/constants');

var _constants2 = _interopRequireDefault(_constants);

var _SpiceActions = require('./SpiceActions');

var _SpiceActions2 = _interopRequireDefault(_SpiceActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line import/no-unresolved

var CONNECTED = _constants2.default.CONNECTED,
    CONNECTING = _constants2.default.CONNECTING,
    DISCONNECTED = _constants2.default.DISCONNECTED;
var noop = _helpers2.default.noop;

var SpiceConsole = function (_React$Component) {
  _inherits(SpiceConsole, _React$Component);

  function SpiceConsole() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SpiceConsole);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SpiceConsole.__proto__ || Object.getPrototypeOf(SpiceConsole)).call.apply(_ref, [this].concat(args))), _this), _this.state = { status: CONNECTING }, _this.onConnected = function () {
      _this.setState({ status: CONNECTED });
    }, _this.onCtrlAltDel = function (e) {
      if (_this.sc) {
        // workaround
        window.sc = _this.sc;
        (0, _spiceHtml.sendCtrlAltDel)();
        window.sc = undefined;
      }
    }, _this.onSpiceError = function (e) {
      _this.disconnect();
      _this.onDisconnected(e);
      //      if (e !== undefined && e.message === "Permission denied.") {
    }, _this.onDisconnected = function (e) {
      _this.setState({ status: DISCONNECTED });
      _this.props.onDisconnected(e);
    }, _this.onSecurityFailure = function (e) {
      _this.setState({ status: DISCONNECTED });
      _this.props.onSecurityFailure(e);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SpiceConsole, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          host = _props.host,
          port = _props.port,
          path = _props.path,
          encrypt = _props.encrypt,
          password = _props.password,
          onInitFailed = _props.onInitFailed;


      try {
        var protocol = encrypt ? 'wss' : 'ws';
        var uri = protocol + '://' + host + ':' + port + '/' + path;

        this.sc = new _spiceHtml.SpiceMainConn({
          uri: uri,
          screen_id: 'spice-screen',
          password: password,
          onerror: this.onSpiceError,
          onsuccess: this.onConnected
        });
      } catch (e) {
        onInitFailed && onInitFailed(e);
        this.disconnect();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.disconnect();
    }
  }, {
    key: 'disconnect',
    value: function disconnect() {
      if (this.sc) {
        this.sc.stop();
        this.sc = undefined;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          textDisconnected = _props2.textDisconnected,
          textConnecting = _props2.textConnecting,
          textSendShortcut = _props2.textSendShortcut,
          textCtrlAltDel = _props2.textCtrlAltDel;


      var status = null;
      var rightContent = null;
      switch (this.state.status) {
        case CONNECTED:
          rightContent = _react2.default.createElement(_SpiceActions2.default, {
            onCtrlAltDel: this.onCtrlAltDel,
            textSendShortcut: textSendShortcut,
            textCtrlAltDel: textCtrlAltDel
          });
          break;
        case DISCONNECTED:
          status = _react2.default.createElement(
            'div',
            { className: 'spice-console-disconnected' },
            textDisconnected
          );
          break;
        case CONNECTING:
        default:
          status = _react2.default.createElement(
            'div',
            { className: 'spice-console-connecting' },
            textConnecting
          );
      }

      if (!this.SpiceStaticComponent) {
        // create just once
        this.SpiceStaticComponent = _react2.default.createElement('div', { id: 'spice-screen', ref: this.setSpiceElem });
      }

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('spice-console', this.props.topClassName) },
        this.props.children,
        _react2.default.createElement(
          _Toolbar2.default.RightContent,
          null,
          rightContent
        ),
        _react2.default.createElement(
          _Toolbar2.default.Results,
          null,
          status,
          this.SpiceStaticComponent
        )
      );
    }
  }]);

  return SpiceConsole;
}(_react2.default.Component);

SpiceConsole.displayName = 'SpiceConsole';

SpiceConsole.propTypes = {
  children: _propTypes2.default.node /** Children nodes */

  , host: _propTypes2.default.string.isRequired /** FQDN or IP to connect to */
  , port: _propTypes2.default.string /** TCP Port */
  , path: _propTypes2.default.string /** host:port/path */
  , encrypt: _propTypes2.default.bool,
  password: _propTypes2.default.string /** token */

  , topClassName: _propTypes2.default.string /** Enable customization */

  , onDisconnected: _propTypes2.default.func /** Callback. Spice server disconnected. */
  , onInitFailed: _propTypes2.default.func /** Initialization of Spice failed */
  , onSecurityFailure: _propTypes2.default.func /** Handshake failed */

  , textConnecting: _propTypes2.default.string /** For localization */
  , textDisconnected: _propTypes2.default.string,
  textSendShortcut: _propTypes2.default.string,
  textCtrlAltDel: _propTypes2.default.string
};

SpiceConsole.defaultProps = {
  children: null,

  port: '80',
  path: '',
  encrypt: false,
  password: undefined,

  topClassName: '',

  onDisconnected: noop,
  onInitFailed: noop,
  onSecurityFailure: noop,

  textConnecting: 'Connecting',
  textDisconnected: 'Disconnected',
  textSendShortcut: undefined,
  /** Default value defined in SpiceActions
   */textCtrlAltDel: undefined
  /** Default value defined in SpiceActions
   */
};

exports.default = SpiceConsole;