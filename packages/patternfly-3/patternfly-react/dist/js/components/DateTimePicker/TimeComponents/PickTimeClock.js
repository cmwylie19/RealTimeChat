'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require('../../../common/helpers');

var _TimeConstants = require('./TimeConstants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PickTimeClock = function (_React$Component) {
  _inherits(PickTimeClock, _React$Component);

  function PickTimeClock() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PickTimeClock);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PickTimeClock.__proto__ || Object.getPrototypeOf(PickTimeClock)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      ampm: _this.props.time.getHours() >= 12 ? _TimeConstants.PM : _TimeConstants.AM
    }, _this.setTime = function (type, amount) {
      var _this$props = _this.props,
          time = _this$props.time,
          setSelected = _this$props.setSelected;

      if (type === _TimeConstants.HOUR) {
        time.setHours(time.getHours() + amount);
      } else if (type === _TimeConstants.MINUTE) {
        time.setMinutes(time.getMinutes() + amount);
      }
      setSelected(time);
    }, _this.toggleAMPM = function () {
      var _this$props2 = _this.props,
          time = _this$props2.time,
          setSelected = _this$props2.setSelected;

      if (_this.state.ampm === _TimeConstants.AM) {
        time.setHours(time.getHours() + 12);
        _this.setState({ ampm: _TimeConstants.PM });
      } else {
        time.setHours(time.getHours() - 12);
        _this.setState({ ampm: _TimeConstants.AM });
      }
      setSelected(time);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PickTimeClock, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          time = _props.time,
          toggleTimeTable = _props.toggleTimeTable;

      var minutes = time.getMinutes();
      var hours = time.getHours() % 12 || 12;

      return _react2.default.createElement(
        'div',
        { className: 'timepicker-picker' },
        _react2.default.createElement(
          'table',
          null,
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                { onClick: function onClick() {
                    return _this2.setTime(_TimeConstants.HOUR, 1);
                  } },
                _react2.default.createElement(
                  'a',
                  { title: 'Increment Hour', className: 'btn clock-btn' },
                  _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-up' })
                )
              ),
              _react2.default.createElement('td', { className: 'separator' }),
              _react2.default.createElement(
                'td',
                { onClick: function onClick() {
                    return _this2.setTime(_TimeConstants.MINUTE, 1);
                  } },
                _react2.default.createElement(
                  'a',
                  { title: 'Increment Minute', className: 'btn clock-btn' },
                  _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-up' })
                )
              ),
              _react2.default.createElement('td', { className: 'separator' })
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                { onClick: function onClick() {
                    return toggleTimeTable(_TimeConstants.HOUR);
                  } },
                _react2.default.createElement(
                  'span',
                  { className: 'timepicker-hour', title: 'Pick Hour' },
                  ('' + hours).padStart(2, '0')
                )
              ),
              _react2.default.createElement(
                'td',
                { className: 'separator' },
                ':'
              ),
              _react2.default.createElement(
                'td',
                { onClick: function onClick() {
                    return toggleTimeTable(_TimeConstants.MINUTE);
                  } },
                _react2.default.createElement(
                  'span',
                  { className: 'timepicker-minute', title: 'Pick Minute' },
                  ('' + minutes).padStart(2, '0')
                )
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'button',
                  { className: 'btn btn-primary ampm-toggle', onClick: function onClick() {
                      return _this2.toggleAMPM();
                    } },
                  this.state.ampm
                )
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'a',
                  { title: 'Decrement Hour', className: 'btn clock-btn', onClick: function onClick() {
                      return _this2.setTime(_TimeConstants.HOUR, -1);
                    } },
                  _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-down' })
                )
              ),
              _react2.default.createElement('td', { className: 'separator' }),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'a',
                  { title: 'Decrement Minute', className: 'btn clock-btn', onClick: function onClick() {
                      return _this2.setTime(_TimeConstants.MINUTE, -1);
                    } },
                  _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-down' })
                )
              ),
              _react2.default.createElement('td', { className: 'separator' })
            )
          )
        )
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      return {
        ampm: nextProps.time.getHours() >= 12 ? _TimeConstants.PM : _TimeConstants.AM
      };
    }
  }]);

  return PickTimeClock;
}(_react2.default.Component);

PickTimeClock.propTypes = {
  time: _propTypes2.default.instanceOf(Date).isRequired,
  setSelected: _propTypes2.default.func,
  toggleTimeTable: _propTypes2.default.func
};
PickTimeClock.defaultProps = {
  setSelected: _helpers.noop,
  toggleTimeTable: _helpers.noop
};
exports.default = PickTimeClock;