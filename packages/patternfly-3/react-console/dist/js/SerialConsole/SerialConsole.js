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

var _EmptyState = require('patternfly-react/dist/js/components/EmptyState/EmptyState');

var _EmptyState2 = _interopRequireDefault(_EmptyState);

var _Button = require('patternfly-react/dist/js/components/Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _helpers = require('patternfly-react/dist/js/common/helpers');

var _helpers2 = _interopRequireDefault(_helpers);

var _Toolbar = require('patternfly-react/dist/js/components/Toolbar/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _constants = require('../common/constants');

var _constants2 = _interopRequireDefault(_constants);

var _XTerm = require('./XTerm');

var _XTerm2 = _interopRequireDefault(_XTerm);

var _SerialConsoleActions = require('./SerialConsoleActions');

var _SerialConsoleActions2 = _interopRequireDefault(_SerialConsoleActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CONNECTED = _constants2.default.CONNECTED,
    DISCONNECTED = _constants2.default.DISCONNECTED,
    LOADING = _constants2.default.LOADING;
var noop = _helpers2.default.noop;

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
          terminal = _react2.default.createElement(_XTerm2.default, {
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
          terminal = _react2.default.createElement(
            _EmptyState2.default,
            null,
            _react2.default.createElement(
              _EmptyState2.default.Title,
              null,
              this.props.textDisconnectedTitle
            ),
            _react2.default.createElement(
              _EmptyState2.default.Info,
              null,
              this.props.textDisconnected
            ),
            _react2.default.createElement(
              _EmptyState2.default.Action,
              null,
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'primary', bsSize: 'large', onClick: this.props.onConnect },
                this.props.textConnect
              )
            )
          );
          break;
        case LOADING:
        default:
          terminal = _react2.default.createElement(
            'span',
            null,
            this.props.textLoading
          );
          break;
      }

      var classes = (0, _classnames2.default)('serial-console-pf', topClassName);

      return _react2.default.createElement(
        'div',
        { className: classes, id: id },
        _react2.default.createElement(
          _Toolbar2.default.RightContent,
          null,
          _react2.default.createElement(_SerialConsoleActions2.default, {
            idPrefix: idPrefix,
            isDisconnectEnabled: isDisconnectEnabled,
            onDisconnect: this.onDisconnectClick,
            onReset: this.onResetClick,
            textDisconnect: this.props.textDisconnect,
            textReconnect: this.props.textReconnect
          })
        ),
        _react2.default.createElement(
          _Toolbar2.default.Results,
          null,
          _react2.default.createElement(
            'div',
            { className: 'panel-body console-terminal-pf' },
            terminal
          )
        )
      );
    }
  }]);

  return SerialConsole;
}(_react2.default.Component);

SerialConsole.displayName = 'SerialConsole';

SerialConsole.propTypes = {
  /** Initiate connection to backend. In other words, the calling components manages connection state. */
  onConnect: _propTypes2.default.func.isRequired,
  /** Close connection to backend */
  onDisconnect: _propTypes2.default.func.isRequired,
  /** Terminal has been resized, backend shall be informed. (rows, cols) => {} */
  onResize: _propTypes2.default.func,
  /** Terminal produced data, like key-press */
  onData: _propTypes2.default.func,
  /** Terminal title has been changed. */
  onTitleChanged: _propTypes2.default.func,

  /** Connection status, a value from [''connected', 'disconnected', 'loading']. Default is 'loading' for a not matching value. */
  status: _propTypes2.default.oneOf([CONNECTED, DISCONNECTED, LOADING]).isRequired,
  id: _propTypes2.default.string,

  /** Size of the terminal component */
  rows: _propTypes2.default.number,
  cols: _propTypes2.default.number,
  autoFit: _propTypes2.default.bool,

  /** Font for text rendered to xterm canvas */
  fontFamily: _propTypes2.default.string,
  fontSize: _propTypes2.default.number,

  /** Enable customization */
  topClassName: _propTypes2.default.string,

  /** Localization */
  textDisconnect: _propTypes2.default.string,
  textDisconnectedTitle: _propTypes2.default.string,
  textDisconnected: _propTypes2.default.string,
  textLoading: _propTypes2.default.string,
  textReconnect: _propTypes2.default.string,
  textConnect: _propTypes2.default.string
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

exports.default = SerialConsole;