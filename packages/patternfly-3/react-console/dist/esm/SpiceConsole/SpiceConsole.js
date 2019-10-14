var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Toolbar from 'patternfly-react/dist/esm/components/Toolbar/Toolbar';
import helpers from 'patternfly-react/dist/esm/common/helpers';

import { SpiceMainConn, sendCtrlAltDel } from '@spice-project/spice-html5'; // eslint-disable-line import/no-unresolved

import constants from '../common/constants';
import SpiceActions from './SpiceActions';

var CONNECTED = constants.CONNECTED,
    CONNECTING = constants.CONNECTING,
    DISCONNECTED = constants.DISCONNECTED;
var noop = helpers.noop;

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
        sendCtrlAltDel();
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

        this.sc = new SpiceMainConn({
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
          rightContent = React.createElement(SpiceActions, {
            onCtrlAltDel: this.onCtrlAltDel,
            textSendShortcut: textSendShortcut,
            textCtrlAltDel: textCtrlAltDel
          });
          break;
        case DISCONNECTED:
          status = React.createElement(
            'div',
            { className: 'spice-console-disconnected' },
            textDisconnected
          );
          break;
        case CONNECTING:
        default:
          status = React.createElement(
            'div',
            { className: 'spice-console-connecting' },
            textConnecting
          );
      }

      if (!this.SpiceStaticComponent) {
        // create just once
        this.SpiceStaticComponent = React.createElement('div', { id: 'spice-screen', ref: this.setSpiceElem });
      }

      return React.createElement(
        'div',
        { className: classNames('spice-console', this.props.topClassName) },
        this.props.children,
        React.createElement(
          Toolbar.RightContent,
          null,
          rightContent
        ),
        React.createElement(
          Toolbar.Results,
          null,
          status,
          this.SpiceStaticComponent
        )
      );
    }
  }]);

  return SpiceConsole;
}(React.Component);

SpiceConsole.displayName = 'SpiceConsole';

SpiceConsole.propTypes = {
  children: PropTypes.node /** Children nodes */

  , host: PropTypes.string.isRequired /** FQDN or IP to connect to */
  , port: PropTypes.string /** TCP Port */
  , path: PropTypes.string /** host:port/path */
  , encrypt: PropTypes.bool,
  password: PropTypes.string /** token */

  , topClassName: PropTypes.string /** Enable customization */

  , onDisconnected: PropTypes.func /** Callback. Spice server disconnected. */
  , onInitFailed: PropTypes.func /** Initialization of Spice failed */
  , onSecurityFailure: PropTypes.func /** Handshake failed */

  , textConnecting: PropTypes.string /** For localization */
  , textDisconnected: PropTypes.string,
  textSendShortcut: PropTypes.string,
  textCtrlAltDel: PropTypes.string
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

export default SpiceConsole;