'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _times = require('lodash/times');

var _times2 = _interopRequireDefault(_times);

var _helpers = require('./helpers');

var _helpers2 = require('../../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var YearView = function (_React$Component) {
  _inherits(YearView, _React$Component);

  function YearView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, YearView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = YearView.__proto__ || Object.getPrototypeOf(YearView)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      date: new Date(_this.props.date),
      selectedDate: new Date(_this.props.date)
    }, _this.getMonthArray = function () {
      var date = new Date('1/1/1');
      return (0, _times2.default)(12, function (i) {
        return Intl.DateTimeFormat(_this.props.locale, { month: 'short' }).format((0, _helpers.addMonths)(date, i));
      });
    }, _this.getPrevYear = function () {
      var date = _this.state.date;

      _this.setState({ date: (0, _helpers.addYears)(date, -1) });
    }, _this.getNextYear = function () {
      var date = _this.state.date;

      _this.setState({ date: (0, _helpers.addYears)(date, 1) });
    }, _this.setSelectedMonth = function (month) {
      var date = _this.state.date;

      date.setMonth(month);
      _this.props.setSelected(date);
      _this.props.toggleDateView('M');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(YearView, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          date = _state.date,
          selectedDate = _state.selectedDate;
      var _ref2 = [date.getMonth(), date.getFullYear()],
          currMonth = _ref2[0],
          currYear = _ref2[1];

      var selectedYear = selectedDate.getFullYear();
      var monthArray = this.getMonthArray();
      return _react2.default.createElement(
        'div',
        { className: 'datepicker-months' },
        _react2.default.createElement(
          'table',
          { className: 'table-condensed' },
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                { className: 'prev', onClick: this.getPrevYear },
                _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-left' })
              ),
              _react2.default.createElement(
                'th',
                { className: 'picker-switch', onClick: function onClick() {
                    return _this2.props.toggleDateView('D');
                  }, colSpan: '5' },
                currYear
              ),
              _react2.default.createElement(
                'th',
                { className: 'next', onClick: this.getNextYear },
                _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-right' })
              )
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                { colSpan: '7' },
                monthArray.map(function (month, idx) {
                  return _react2.default.createElement(
                    'span',
                    {
                      onClick: function onClick() {
                        return _this2.setSelectedMonth(idx);
                      },
                      className: 'month ' + (idx === currMonth && selectedYear === currYear ? 'active' : ''),
                      key: idx
                    },
                    month
                  );
                })
              )
            )
          )
        )
      );
    }
  }]);

  return YearView;
}(_react2.default.Component);

YearView.propTypes = {
  date: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(Date), _propTypes2.default.string]),
  setSelected: _propTypes2.default.func,
  toggleDateView: _propTypes2.default.func,
  locale: _propTypes2.default.string
};

YearView.defaultProps = {
  setSelected: _helpers2.noop,
  toggleDateView: _helpers2.noop,
  date: new Date(),
  locale: 'en-US'
};
exports.default = YearView;