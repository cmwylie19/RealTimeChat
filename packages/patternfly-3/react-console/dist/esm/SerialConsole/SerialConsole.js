var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import EmptyState from 'patternfly-react/dist/esm/components/EmptyState/EmptyState';
import Button from 'patternfly-react/dist/esm/components/Button/Button';
import helpers from 'patternfly-react/dist/esm/common/helpers';
import Toolbar from 'patternfly-react/dist/esm/components/Toolbar/Toolbar';

import constants from '../common/constants';

var CONNECTED = constants.CONNECTED,
    DISCONNECTED = constants.DISCONNECTED,
    LOADING = constants.LOADING;

import XTerm from './XTerm';
import SerialConsoleActions from './SerialConsoleActions';

var noop = helpers.noop;

/**
 * SerialConsole Component for PatternFly React
 */

var SerialConsole = function (_React$Component) {
  _inherits(SerialConsole, _React$Component);

  function SerialConsole() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SerialConsole);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SerialConsole.__proto__ || Object.getPrototypeOf(SerialConsole)).call.apply(_ref, [this].concat(args))), _this), _this.onResetClick = function (event) {
      if (event.button !== 0) {
        return;
      }

      _this.props.onDisconnect();
      _this.props.onConnect();
      event.target.blur();
      _this.focusTerminal();
    }, _this.onDisconnectClick = function (event) {
      if (event.button !== 0) {
        return;
      }

      _this.props.onDisconnect();
      event.target.blur();
      _this.focusTerminal();
    }, _this.focusTerminal = function () {
      _this.childTerminal && _this.childTerminal.focus();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SerialConsole, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.onConnect();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.onDisconnect();
    }
  }, {
    key: 'onDataReceived',


    /**
     * Backend sent data.
     */
    value: function onDataReceived(data) {
      if (this.childTerminal && this.props.status === CONNECTED) {
        this.childTerminal.onDataReceived(data);
      }
    }

    /**
     * Backend closed connection.
     */

  }, {
    key: 'onConnectionClosed',
    value: function onConnectionClosed(reason) {
      if (this.childTerminal) {
        this.childTerminal.onConnectionClosed(reason);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          id = _props.id,
          status = _props.status,
          topClassName = _props.topClassName;

      var idPrefix = (id || 'id') + '-serialconsole';

      var terminal = void 0;
      var isDisconnectEnabled = false;
      switch (status) {
        case CONNECTED:
          terminal = React.createElement(XTerm, {
            ref: function ref(c) {
              _this2.childTerminal = c;
            },
            className: 'serial-console-pf',
            cols: this.props.cols,
            rows: this.props.rows,
            autoFit: this.props.autoFit,
            fontFamily: this.props.fontFamily,
            fontSize: this.props.fontSize,
            onConnect: this.props.onConnect,
            onDisconnect: this.props.onDisconnect,
            onData: this.props.onData,
            onTitleChanged: this.props.onTitleChanged,
            onResize: this.props.onResize
          });
          isDisconnectEnabled = true;
          break;
        case DISCONNECTED:
          terminal = React.createElement(
            EmptyState,
            null,
            React.createElement(
              EmptyState.Title,
              null,
              this.props.textDisconnectedTitle
            ),
            React.createElement(
              EmptyState.Info,
              null,
              this.props.textDisconnected
            ),
            React.createElement(
              EmptyState.Action,
              null,
              React.createElement(
                Button,
                { bsStyle: 'primary', bsSize: 'large', onClick: this.props.onConnect },
                this.props.textConnect
              )
            )
          );
          break;
        case LOADING:
        default:
          terminal = React.createElement(
            'span',
            null,
            this.props.textLoading
          );
          break;
      }

      var classes = classNames('serial-console-pf', topClassName);

      return React.createElement(
        'div',
        { className: classes, id: id },
        React.createElement(
          Toolbar.RightContent,
          null,
          React.createElement(SerialConsoleActions, {
            idPrefix: idPrefix,
            isDisconnectEnabled: isDisconnectEnabled,
            onDisconnect: this.onDisconnectClick,
            onReset: this.onResetClick,
            textDisconnect: this.props.textDisconnect,
            textReconnect: this.props.textReconnect
          })
        ),
        React.createElement(
          Toolbar.Results,
          null,
          React.createElement(
            'div',
            { className: 'panel-body console-terminal-pf' },
            terminal
          )
        )
      );
    }
  }]);

  return SerialConsole;
}(React.Component);

SerialConsole.displayName = 'SerialConsole';

SerialConsole.propTypes = {
  /** Initiate connection to backend. In other words, the calling components manages connection state. */
  onConnect: PropTypes.func.isRequired,
  /** Close connection to backend */
  onDisconnect: PropTypes.func.isRequired,
  /** Terminal has been resized, backend shall be informed. (rows, cols) => {} */
  onResize: PropTypes.func,
  /** Terminal produced data, like key-press */
  onData: PropTypes.func,
  /** Terminal title has been changed. */
  onTitleChanged: PropTypes.func,

  /** Connection status, a value from [''connected', 'disconnected', 'loading']. Default is 'loading' for a not matching value. */
  status: PropTypes.oneOf([CONNECTED, DISCONNECTED, LOADING]).isRequired,
  id: PropTypes.string,

  /** Size of the terminal component */
  rows: PropTypes.number,
  cols: PropTypes.number,
  autoFit: PropTypes.bool,

  /** Font for text rendered to xterm canvas */
  fontFamily: PropTypes.string,
  fontSize: PropTypes.number,

  /** Enable customization */
  topClassName: PropTypes.string,

  /** Localization */
  textDisconnect: PropTypes.string,
  textDisconnectedTitle: PropTypes.string,
  textDisconnected: PropTypes.string,
  textLoading: PropTypes.string,
  textReconnect: PropTypes.string,
  textConnect: PropTypes.string
};

SerialConsole.defaultProps = {
  topClassName: '',

  id: '',
  rows: 25,
  cols: 80,
  autoFit: false,

  fontFamily: undefined /** Use xterm default: 'courier-new, courier, monospace' */
  , fontSize: undefined /** Use xterm default: 15 */

  , onTitleChanged: noop,
  onData: noop,
  onResize: noop,

  textDisconnectedTitle: 'Disconnected from serial console',
  textDisconnected: 'Click Connect to open serial console.',
  textLoading: 'Loading ...',
  textConnect: 'Connect',
  textDisconnect: undefined /** Default is set in SerialConsoleActions */
  , textReconnect: undefined /** Default is set in SerialConsoleActions */
};

export default SerialConsole;