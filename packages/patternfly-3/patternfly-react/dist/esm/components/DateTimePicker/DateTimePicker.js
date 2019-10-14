var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputGroup, Icon, OverlayTrigger, Popover } from '../../';
import DateInput from './DateComponents/DateInput';
import TodayButton from './DateComponents/TodayButton';
import TimeInput from './TimeComponents/TimeInput';
import { MONTH } from './DateComponents/DateConstants';

var DateTimePicker = function (_React$Component) {
  _inherits(DateTimePicker, _React$Component);

  function DateTimePicker(props) {
    _classCallCheck(this, DateTimePicker);

    var _this = _possibleConstructorReturn(this, (DateTimePicker.__proto__ || Object.getPrototypeOf(DateTimePicker)).call(this, props));

    _this.formatDate = function (date) {
      var locale = _this.props.locale;

      var options = [{ year: 'numeric', month: 'numeric', day: 'numeric' }, { hour: '2-digit', minute: '2-digit' }];
      if (Date.parse(date)) {
        var parsedValue = new Date(date);
        return parsedValue.toLocaleString(locale, options[0]) + ' ' + parsedValue.toLocaleString(locale, options[1]);
      }
      return date;
    };

    _this.setSelected = function (date) {
      var newDate = new Date(_this.state.value);
      if (Date.parse(date)) {
        newDate = new Date(date);
      }
      _this.setState({
        value: newDate,
        tmpValue: _this.formatDate(newDate),
        typeOfDateInput: 'M',
        isTimeTableOpen: false
      });
    };

    _this.state = {
      value: new Date(_this.props.value),
      tmpValue: _this.formatDate(new Date(_this.props.value)),
      typeOfDateInput: MONTH,
      isTimeTableOpen: false
    };
    return _this;
  }

  _createClass(DateTimePicker, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          locale = _props.locale,
          weekStartsOn = _props.weekStartsOn,
          id = _props.id,
          placement = _props.placement;
      var _state = this.state,
          value = _state.value,
          typeOfDateInput = _state.typeOfDateInput,
          isTimeTableOpen = _state.isTimeTableOpen,
          hiddenValue = _state.hiddenValue;

      var popover = React.createElement(
        Popover,
        {
          id: id,
          className: 'bootstrap-datetimepicker-widget date-time-picker-pf dropdown-menu timepicker-sbs'
        },
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(DateInput, {
            date: value,
            setSelected: this.setSelected,
            locale: locale,
            weekStartsOn: weekStartsOn,
            className: 'col-md-6',
            typeOfDateInput: typeOfDateInput
          }),
          React.createElement(TimeInput, {
            time: value,
            setSelected: this.setSelected,
            isTimeTableOpen: isTimeTableOpen,
            locale: locale,
            className: 'col-md-6'
          })
        ),
        React.createElement(
          'li',
          { className: 'picker-switch accordion-toggle' },
          React.createElement(TodayButton, { setSelected: this.setSelected })
        )
      );
      return React.createElement(
        'div',
        null,
        React.createElement(
          InputGroup,
          { className: 'input-group date-time-picker-pf' },
          React.createElement(FormControl, {
            'aria-label': 'date-picker-input',
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
            {
              trigger: 'click',
              placement: placement,
              overlay: popover,
              rootClose: true
            },
            React.createElement(
              InputGroup.Addon,
              {
                className: 'date-time-picker-pf',
                onClick: function onClick() {
                  return _this2.setState({ tmpValue: formatTime(value, locale) });
                }
              },
              React.createElement(Icon, { type: 'fa', name: 'calendar' })
            )
          )
        )
      );
    }
  }]);

  return DateTimePicker;
}(React.Component);

DateTimePicker.propTypes = {
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  locale: PropTypes.string,
  weekStartsOn: PropTypes.number,
  id: PropTypes.string,
  hiddenValue: PropTypes.bool,
  placement: PropTypes.oneOf(['top', 'bottom'])
};
DateTimePicker.defaultProps = {
  value: new Date(),
  locale: 'en-US',
  weekStartsOn: 1,
  id: 'datetime-picker-popover',
  hiddenValue: true,
  placement: 'top'
};
export default DateTimePicker;