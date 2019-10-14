'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _xterm = require('xterm');

var _fit = require('xterm/lib/addons/fit/fit');

var _helpers = require('../common/helpers');

var _helpers2 = require('patternfly-react/dist/js/common/helpers');

var _helpers3 = _interopRequireDefault(_helpers2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noop = _helpers3.default.noop;

/**
 * Wraps terminal to a React Component.
 * Based on cockpit-components-terminal.jsx from the Cockpit project (https://github.com/cockpit-project/cockpit)
 */

var XTerm = function (_React$Component) {
  _inherits(XTerm, _React$Component);

  function XTerm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, XTerm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = XTerm.__proto__ || Object.getPrototypeOf(XTerm)).call.apply(_ref, [this].concat(args))), _this), _this.state = { terminal: null, rows: null, cols: null, autoFit: false }, _this.onBeforeUnload = function (event) {
      // Firefox requires this when the page is in an iframe
      event.preventDefault();

      // see "an almost cross-browser solution" at
      // https://developer.mozilla.org/en-US/docs/Web/Events/beforeunload
      event.returnValue = '';
      return '';
    }, _this.onFocus = function () {
      window.addEventListener('beforeunload', _this.onBeforeUnload);
    }, _this.onBlur = function () {
      window.removeEventListener('beforeunload', _this.onBeforeUnload);
    }, _this.focus = function () {
      if (_this.state.terminal) {
        _this.state.terminal.focus();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(XTerm, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var term = new _xterm.Terminal({
        cols: this.props.cols,
        rows: this.props.rows,
        screenKeys: true,
        fontFamily: this.props.fontFamily,
        fontSize: this.props.fontSize
      });

      if (this.props.onData) {
        term.on('data', this.props.onData);
      }
      if (this.props.onTitleChanged) {
        term.on('title', this.props.onTitleChanged);
      }

      this.setState({
        terminal: term,
        cols: this.props.cols,
        rows: this.props.rows,
        autoFit: this.props.autoFit
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.state.terminal.open(this.childTerminal);

      window.addEventListener('resize', (0, _helpers.debounce)(this.onWindowResize.bind(this), 100));
      this.onWindowResize();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.cols !== this.state.cols || newProps.rows !== this.state.rows || newProps.autoFit !== this.state.autoFit) {
        this.setState({
          cols: newProps.cols,
          rows: newProps.rows,
          autoFit: newProps.autoFit
        });
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (nextState.cols !== this.state.cols || nextState.rows !== this.state.rows || nextState.autoFit !== this.state.autoFit) {
        if (nextState.autoFit) {
          // If it is autoFit, get the computed size and set it
          this.removeMinWidth();
          var geometry = (0, _fit.proposeGeometry)(this.state.terminal);
          this.state.terminal.resize(geometry.cols, geometry.rows);
          this.props.onResize(geometry.rows, geometry.cols);
        } else {
          this.addMinWidth(nextState.cols);
          this.state.terminal.resize(nextState.cols, nextState.rows);
          this.props.onResize(nextState.rows, nextState.cols);
        }
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.state.terminal.reset();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.state.terminal.destroy();
      window.removeEventListener('resize', this.onWindowResize);
    }

    // eslint-disable-next-line class-methods-use-this

  }, {
    key: 'onConnectionClosed',


    /**
     * Backend closed connection.
     */
    value: function onConnectionClosed(reason) {
      var term = this.state.terminal;
      if (term) {
        term.write('\x1B[31m' + (reason || 'disconnected') + '\x1B[m\r\n');
        term.cursorHidden = true;
        term.refresh(term.y, term.y); // start to end row
      }
    }

    /**
     * Backend sent data.
     */

  }, {
    key: 'onDataReceived',
    value: function onDataReceived(data) {
      if (this.state.terminal) {
        this.state.terminal.write(data);
      }
    }
  }, {
    key: 'onWindowResize',


    /**
     * If autoFit is enabled, compute the size and set it
     * Otherwise set the min-width on the console
     */
    value: function onWindowResize() {
      if (this.state.autoFit) {
        this.removeMinWidth();
        var geometry = (0, _fit.proposeGeometry)(this.state.terminal);
        if (geometry) {
          this.setState({
            rows: geometry.rows,
            cols: geometry.cols
          });
        }
      } else {
        this.addMinWidth(this.state.cols);
      }
    }

    /**
     * Calculate the minimum width of the terminal based on the number of columns
     *
     * @param {Number} cols Number of columns
     */

  }, {
    key: 'addMinWidth',
    value: function addMinWidth(cols) {
      if (this.childTerminal && this.state.terminal.renderer) {
        var padding = 2 * 11;
        var actualCellWidth = this.state.terminal.renderer.dimensions.actualCellWidth;

        var minWidth = actualCellWidth * cols + padding;
        this.childTerminal.style.minWidth = minWidth + 'px';
      }
    }

    /**
     * Remove the min-width on the console
     */

  }, {
    key: 'removeMinWidth',
    value: function removeMinWidth() {
      if (this.childTerminal) {
        this.childTerminal.style.minWidth = '';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      // ensure react never reuses this div by keying it with the terminal widget
      return _react2.default.createElement('div', {
        ref: function ref(c) {
          _this2.childTerminal = c;
        },
        key: this.state.terminal,
        className: 'console-pf',
        onFocus: this.onFocus,
        onBlur: this.onBlur
      });
    }
  }]);

  return XTerm;
}(_react2.default.Component);

XTerm.propTypes = {
  cols: _propTypes2.default.number,
  rows: _propTypes2.default.number,
  autoFit: _propTypes2.default.bool,

  fontFamily: _propTypes2.default.string,
  fontSize: _propTypes2.default.number,

  onTitleChanged: _propTypes2.default.func, // (title) => {}
  onData: _propTypes2.default.func, // Data to be sent from terminal to backend; (data) => {}
  onResize: _propTypes2.default.func // (rows, cols) => {}
};

XTerm.defaultProps = {
  cols: 80,
  rows: 25,
  autoFit: false,

  fontFamily: undefined,
  fontSize: undefined,

  onTitleChanged: noop,
  onData: noop,
  onResize: noop
};

exports.default = XTerm;