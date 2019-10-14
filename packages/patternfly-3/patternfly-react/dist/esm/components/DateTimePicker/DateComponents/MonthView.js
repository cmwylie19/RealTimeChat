var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import chunk from 'lodash/chunk';
import times from 'lodash/times';
import Day from './Day';
import { addDays, addMonths, getMonthStart, isEqualDate, isWeekend } from './helpers';
import Header from './Header';

var DateInput = function (_React$Component) {
  _inherits(DateInput, _React$Component);

  function DateInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DateInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DateInput.__proto__ || Object.getPrototypeOf(DateInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selectedDate: new Date(_this.props.date),
      date: new Date(_this.props.date)
    }, _this.calendarArray = function (date) {
      var weekStartsOn = _this.props.weekStartsOn;

      var monthStart = getMonthStart(new Date(date));
      var offset = monthStart.getDay() - weekStartsOn;
      return chunk(times(35, function (i) {
        return addDays(monthStart, i - offset);
      }), 7);
    }, _this.getPrevMonth = function () {
      var date = _this.state.date;

      _this.setState({ date: addMonths(date, -1) });
    }, _this.getNextMonth = function () {
      var date = _this.state.date;

      _this.setState({ date: addMonths(date, 1) });
    }, _this.setSelected = function (day) {
      _this.setState({
        selectedDate: day,
        date: day
      });
      _this.props.setSelected(day);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DateInput, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          locale = _props.locale,
          weekStartsOn = _props.weekStartsOn,
          toggleDateView = _props.toggleDateView;
      var _state = this.state,
          date = _state.date,
          selectedDate = _state.selectedDate;

      var calendar = this.calendarArray(date);
      return React.createElement(
        'div',
        { className: 'datepicker-days' },
        React.createElement(
          'table',
          { className: 'table-condensed' },
          React.createElement(Header, {
            getPrevMonth: this.getPrevMonth,
            getNextMonth: this.getNextMonth,
            date: date,
            locale: locale,
            weekStartsOn: weekStartsOn,
            toggleDateView: toggleDateView
          }),
          React.createElement(
            'tbody',
            null,
            calendar.map(function (el, idx) {
              return React.createElement(
                'tr',
                { key: idx },
                el.map(function (day) {
                  return React.createElement(Day, {
                    key: day,
                    day: day,
                    setSelected: _this2.setSelected,
                    classNamesArray: {
                      weekend: isWeekend(day),
                      old: day.getMonth() !== date.getMonth(),
                      active: isEqualDate(day, selectedDate),
                      today: isEqualDate(day, new Date())
                    }
                  });
                })
              );
            })
          )
        )
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var nextDate = new Date(nextProps.date);
      var prevDate = new Date(prevState.selectedDate);
      return !(Date.parse(nextDate) === Date.parse(prevDate)) ? {
        selectedDate: nextDate,
        date: nextDate
      } : null;
    }
  }]);

  return DateInput;
}(React.Component);

DateInput.propTypes = {
  date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  setSelected: PropTypes.func,
  toggleDateView: PropTypes.func,
  locale: PropTypes.string,
  weekStartsOn: PropTypes.number
};

DateInput.defaultProps = {
  setSelected: null,
  toggleDateView: null,
  date: new Date(),
  locale: 'en-US',
  weekStartsOn: 1
};
export default DateInput;