'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _chunk = require('lodash/chunk');

var _chunk2 = _interopRequireDefault(_chunk);

var _times = require('lodash/times');

var _times2 = _interopRequireDefault(_times);

var _Day = require('./Day');

var _Day2 = _interopRequireDefault(_Day);

var _helpers = require('./helpers');

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

      var monthStart = (0, _helpers.getMonthStart)(new Date(date));
      var offset = monthStart.getDay() - weekStartsOn;
      return (0, _chunk2.default)((0, _times2.default)(35, function (i) {
        return (0, _helpers.addDays)(monthStart, i - offset);
      }), 7);
    }, _this.getPrevMonth = function () {
      var date = _this.state.date;

      _this.setState({ date: (0, _helpers.addMonths)(date, -1) });
    }, _this.getNextMonth = function () {
      var date = _this.state.date;

      _this.setState({ date: (0, _helpers.addMonths)(date, 1) });
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
      return _react2.default.createElement(
        'div',
        { className: 'datepicker-days' },
        _react2.default.createElement(
          'table',
          { className: 'table-condensed' },
          _react2.default.createElement(_Header2.default, {
            getPrevMonth: this.getPrevMonth,
            getNextMonth: this.getNextMonth,
            date: date,
            locale: locale,
            weekStartsOn: weekStartsOn,
            toggleDateView: toggleDateView
          }),
          _react2.default.createElement(
            'tbody',
            null,
            calendar.map(function (el, idx) {
              return _react2.default.createElement(
                'tr',
                { key: idx },
                el.map(function (day) {
                  return _react2.default.createElement(_Day2.default, {
                    key: day,
                    day: day,
                    setSelected: _this2.setSelected,
                    classNamesArray: {
                      weekend: (0, _helpers.isWeekend)(day),
                      old: day.getMonth() !== date.getMonth(),
                      active: (0, _helpers.isEqualDate)(day, selectedDate),
                      today: (0, _helpers.isEqualDate)(day, new Date())
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
}(_react2.default.Component);

DateInput.propTypes = {
  date: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(Date), _propTypes2.default.string]),
  setSelected: _propTypes2.default.func,
  toggleDateView: _propTypes2.default.func,
  locale: _propTypes2.default.string,
  weekStartsOn: _propTypes2.default.number
};

DateInput.defaultProps = {
  setSelected: null,
  toggleDateView: null,
  date: new Date(),
  locale: 'en-US',
  weekStartsOn: 1
};
exports.default = DateInput;