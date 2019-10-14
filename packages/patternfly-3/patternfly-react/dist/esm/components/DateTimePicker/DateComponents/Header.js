var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../../index';
import { addDays, getWeekStart } from './helpers';
import times from 'lodash/times';

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

      var weekStart = getWeekStart(new Date());
      var dayFormat = Intl.DateTimeFormat(_this.props.locale, { weekday: 'short' }).format(weekStart).length > 3 ? 'narrow' : 'short';
      return times(7, function (i) {
        return Intl.DateTimeFormat(_this.props.locale, { weekday: dayFormat }).format(addDays(weekStart, (i + weekStartsOn) % 7)).slice(0, 2);
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
      return React.createElement(
        'thead',
        null,
        React.createElement(
          'tr',
          null,
          React.createElement(
            'th',
            { className: 'prev', onClick: getPrevMonth },
            React.createElement(Icon, { type: 'fa', name: 'angle-left' })
          ),
          React.createElement(
            'th',
            { className: 'picker-switch', colSpan: '5', onClick: function onClick() {
                return toggleDateView('Y');
              } },
            month,
            ' ',
            year
          ),
          React.createElement(
            'th',
            { className: 'next', onClick: getNextMonth },
            React.createElement(Icon, { type: 'fa', name: 'angle-right' })
          )
        ),
        React.createElement(
          'tr',
          null,
          daysOfTheWeek.map(function (day, idx) {
            return React.createElement(
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
}(React.Component);

Header.propTypes = {
  date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  getPrevMonth: PropTypes.func,
  getNextMonth: PropTypes.func,
  toggleDateView: PropTypes.func,
  locale: PropTypes.string,
  weekStartsOn: PropTypes.number
};

Header.defaultProps = {
  date: new Date(),
  getPrevMonth: null,
  getNextMonth: null,
  toggleDateView: null,
  locale: 'en-US',
  weekStartsOn: 1
};
export default Header;