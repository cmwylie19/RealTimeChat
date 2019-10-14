var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputGroup, Icon, OverlayTrigger, Popover } from '../../';
import DateInput from './DateComponents/DateInput';
import TodayButton from './DateComponents/TodayButton';
import { formatDate } from './DateHelpers';

var DatePicker = function (_React$Component) {
  _inherits(DatePicker, _React$Component);

  function DatePicker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DatePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: new Date(_this.props.value),
      tmpValue: formatDate(_this.props.value, _this.props.locale)
    }, _this.setSelected = function (date) {
      var newDate = new Date(_this.state.value);
      if (Date.parse(date)) {
        newDate = new Date(date);
      } else if (date === '') {
        newDate = date;
      }
      _this.setState({ value: newDate, tmpValue: formatDate(newDate) });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DatePicker, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var value = this.state.value;
      var _props = this.props,
          locale = _props.locale,
          weekStartsOn = _props.weekStartsOn,
          id = _props.id,
          placement = _props.placement;

      var popover = React.createElement(
        Popover,
        { id: id, className: 'bootstrap-datetimepicker-widget date-picker-pf usetwentyfour' },
        React.createElement(
          'ul',
          { className: 'list-unstyled' },
          React.createElement(
            'li',
            null,
            React.createElement(DateInput, { date: value, setSelected: this.setSelected, locale: locale, weekStartsOn: weekStartsOn })
          ),
          React.createElement(
            'li',
            { className: 'picker-switch accordion-toggle' },
            React.createElement(TodayButton, { setSelected: this.setSelected })
          )
        )
      );
      return React.createElement(
        'div',
        null,
        React.createElement(
          InputGroup,
          { className: 'input-group date-time-picker-pf' },
          React.createElement(FormControl, {
            'aria-label': 'date-time-picker-input',
            type: 'text',
            value: this.state.tmpValue,
            onChange: function onChange(e) {
              return _this2.setState({ tmpValue: e.target.value });
            },
            onBlur: function onBlur(e) {
              return _this2.setSelected(e.target.value);
            }
          }),
          React.createElement(
            OverlayTrigger,
            { trigger: 'click', placement: placement, overlay: popover, rootClose: true },
            React.createElement(
              InputGroup.Addon,
              { className: 'date-picker-pf', onClick: function onClick() {
                  return _this2.setState({ tmpValue: formatDate(value) });
                } },
              React.createElement(Icon, { type: 'fa', name: 'calendar' })
            )
          )
        )
      );
    }
  }]);

  return DatePicker;
}(React.Component);

DatePicker.propTypes = {
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  locale: PropTypes.string,
  weekStartsOn: PropTypes.number,
  id: PropTypes.string,
  placement: OverlayTrigger.propTypes.placement
};
DatePicker.defaultProps = {
  value: new Date(),
  locale: 'en-US',
  weekStartsOn: 1,
  id: 'popover-date-picker',
  placement: 'top'
};
export default DatePicker;