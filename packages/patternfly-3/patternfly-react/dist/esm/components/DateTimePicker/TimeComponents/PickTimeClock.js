var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../../common/helpers';
import { AM, PM, HOUR, MINUTE } from './TimeConstants';

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
      ampm: _this.props.time.getHours() >= 12 ? PM : AM
    }, _this.setTime = function (type, amount) {
      var _this$props = _this.props,
          time = _this$props.time,
          setSelected = _this$props.setSelected;

      if (type === HOUR) {
        time.setHours(time.getHours() + amount);
      } else if (type === MINUTE) {
        time.setMinutes(time.getMinutes() + amount);
      }
      setSelected(time);
    }, _this.toggleAMPM = function () {
      var _this$props2 = _this.props,
          time = _this$props2.time,
          setSelected = _this$props2.setSelected;

      if (_this.state.ampm === AM) {
        time.setHours(time.getHours() + 12);
        _this.setState({ ampm: PM });
      } else {
        time.setHours(time.getHours() - 12);
        _this.setState({ ampm: AM });
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

      return React.createElement(
        'div',
        { className: 'timepicker-picker' },
        React.createElement(
          'table',
          null,
          React.createElement(
            'tbody',
            null,
            React.createElement(
              'tr',
              null,
              React.createElement(
                'td',
                { onClick: function onClick() {
                    return _this2.setTime(HOUR, 1);
                  } },
                React.createElement(
                  'a',
                  { title: 'Increment Hour', className: 'btn clock-btn' },
                  React.createElement('span', { className: 'glyphicon glyphicon-chevron-up' })
                )
              ),
              React.createElement('td', { className: 'separator' }),
              React.createElement(
                'td',
                { onClick: function onClick() {
                    return _this2.setTime(MINUTE, 1);
                  } },
                React.createElement(
                  'a',
                  { title: 'Increment Minute', className: 'btn clock-btn' },
                  React.createElement('span', { className: 'glyphicon glyphicon-chevron-up' })
                )
              ),
              React.createElement('td', { className: 'separator' })
            ),
            React.createElement(
              'tr',
              null,
              React.createElement(
                'td',
                { onClick: function onClick() {
                    return toggleTimeTable(HOUR);
                  } },
                React.createElement(
                  'span',
                  { className: 'timepicker-hour', title: 'Pick Hour' },
                  ('' + hours).padStart(2, '0')
                )
              ),
              React.createElement(
                'td',
                { className: 'separator' },
                ':'
              ),
              React.createElement(
                'td',
                { onClick: function onClick() {
                    return toggleTimeTable(MINUTE);
                  } },
                React.createElement(
                  'span',
                  { className: 'timepicker-minute', title: 'Pick Minute' },
                  ('' + minutes).padStart(2, '0')
                )
              ),
              React.createElement(
                'td',
                null,
                React.createElement(
                  'button',
                  { className: 'btn btn-primary ampm-toggle', onClick: function onClick() {
                      return _this2.toggleAMPM();
                    } },
                  this.state.ampm
                )
              )
            ),
            React.createElement(
              'tr',
              null,
              React.createElement(
                'td',
                null,
                React.createElement(
                  'a',
                  { title: 'Decrement Hour', className: 'btn clock-btn', onClick: function onClick() {
                      return _this2.setTime(HOUR, -1);
                    } },
                  React.createElement('span', { className: 'glyphicon glyphicon-chevron-down' })
                )
              ),
              React.createElement('td', { className: 'separator' }),
              React.createElement(
                'td',
                null,
                React.createElement(
                  'a',
                  { title: 'Decrement Minute', className: 'btn clock-btn', onClick: function onClick() {
                      return _this2.setTime(MINUTE, -1);
                    } },
                  React.createElement('span', { className: 'glyphicon glyphicon-chevron-down' })
                )
              ),
              React.createElement('td', { className: 'separator' })
            )
          )
        )
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      return {
        ampm: nextProps.time.getHours() >= 12 ? PM : AM
      };
    }
  }]);

  return PickTimeClock;
}(React.Component);

PickTimeClock.propTypes = {
  time: PropTypes.instanceOf(Date).isRequired,
  setSelected: PropTypes.func,
  toggleTimeTable: PropTypes.func
};
PickTimeClock.defaultProps = {
  setSelected: noop,
  toggleTimeTable: noop
};
export default PickTimeClock;