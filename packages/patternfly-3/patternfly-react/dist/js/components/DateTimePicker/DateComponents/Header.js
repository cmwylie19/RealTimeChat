'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../../../index');

var _helpers = require('./helpers');

var _times = require('lodash/times');

var _times2 = _interopRequireDefault(_times);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.getWeekArray = function () {
      var weekStartsOn = _this.props.weekStartsOn;

      var weekStart = (0, _helpers.getWeekStart)(new Date());
      var dayFormat = Intl.DateTimeFormat(_this.props.locale, { weekday: 'short' }).format(weekStart).length > 3 ? 'narrow' : 'short';
      return (0, _times2.default)(7, function (i) {
        return Intl.DateTimeFormat(_this.props.locale, { weekday: dayFormat }).format((0, _helpers.addDays)(weekStart, (i + weekStartsOn) % 7)).slice(0, 2);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          getNextMonth = _props.getNextMonth,
          getPrevMonth = _props.getPrevMonth,
          toggleDateView = _props.toggleDateView;

      var date = new Date(this.props.date);
      var month = Intl.DateTimeFormat(this.props.locale, { month: 'long' }).format(date);
      var year = date.getFullYear();
      var daysOfTheWeek = this.getWeekArray();
      return _react2.default.createElement(
        'thead',
        null,
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'th',
            { className: 'prev', onClick: getPrevMonth },
            _react2.default.createElement(_index.Icon, { type: 'fa', name: 'angle-left' })
          ),
          _react2.default.createElement(
            'th',
            { className: 'picker-switch', colSpan: '5', onClick: function onClick() {
                return toggleDateView('Y');
              } },
            month,
            ' ',
            year
          ),
          _react2.default.createElement(
            'th',
            { className: 'next', onClick: getNextMonth },
            _react2.default.createElement(_index.Icon, { type: 'fa', name: 'angle-right' })
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          daysOfTheWeek.map(function (day, idx) {
            return _react2.default.createElement(
              'th',
              { key: idx, className: 'dow' },
              day
            );
          })
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

Header.propTypes = {
  date: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(Date), _propTypes2.default.string]),
  getPrevMonth: _propTypes2.default.func,
  getNextMonth: _propTypes2.default.func,
  toggleDateView: _propTypes2.default.func,
  locale: _propTypes2.default.string,
  weekStartsOn: _propTypes2.default.number
};

Header.defaultProps = {
  date: new Date(),
  getPrevMonth: null,
  getNextMonth: null,
  toggleDateView: null,
  locale: 'en-US',
  weekStartsOn: 1
};
exports.default = Header;