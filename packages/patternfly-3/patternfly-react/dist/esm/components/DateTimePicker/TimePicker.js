var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputGroup, Icon, OverlayTrigger, Popover } from '../../';
import TimeInput from './TimeComponents/TimeInput';
import { getDateFromTime, formatTime } from './TimeHelpers';

var TimePicker = function (_React$Component) {
  _inherits(TimePicker, _React$Component);

  function TimePicker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TimePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TimePicker.__proto__ || Object.getPrototypeOf(TimePicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: getDateFromTime(_this.props.value),
      tmpValue: formatTime(_this.props.value, _this.props.locale)
    }, _this.setSelected = function (time) {
      var newTime = getDateFromTime(time);
      if (newTime) {
        _this.setState({ value: newTime, tmpValue: formatTime(newTime, _this.props.locale) });
      } else {
        _this.setState({ tmpValue: formatTime(newTime, _this.props.locale) });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TimePicker, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var value = this.state.value;
      var _props = this.props,
          locale = _props.locale,
          placement = _props.placement,
          id = _props.id;

      var popover = React.createElement(
        Popover,
        { id: id, className: 'bootstrap-datetimepicker-widget date-time-picker-pf bootstrap-timepicker-widget' },
        React.createElement(
          'ul',
          { className: 'list-unstyled' },
          React.createElement(
            'li',
            { className: 'picker-switch accordion-toggle' },
            React.createElement(
              'table',
              { className: 'table-condensed' },
              React.createElement(
                'tbody',
                null,
                React.createElement('tr', null)
              )
            )
          ),
          React.createElement(
            'li',
            null,
            React.createElement(TimeInput, { time: value, setSelected: this.setSelected, locale: locale })
          )
        )
      );

      return React.createElement(
        InputGroup,
        { className: 'input-group date-time-picker-pf time-picker-pf' },
        React.createElement(FormControl, {
          'aria-label': 'time-picker-input',
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
            {
              className: 'picker-pf',
              onClick: function onClick() {
                return _this2.setState({ tmpValue: formatTime(value, locale) });
              }
            },
            React.createElement(Icon, { type: 'fa', name: 'clock-o' })
          )
        )
      );
    }
  }]);

  return TimePicker;
}(React.Component);

TimePicker.propTypes = {
  /** Value of the input */
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  /** locale string for formating the time string */
  locale: PropTypes.string,
  /** id of the popover */
  id: PropTypes.string,
  /** Placement of the popover */
  placement: OverlayTrigger.propTypes.placement
};
TimePicker.defaultProps = {
  value: new Date(),
  locale: 'en-US',
  id: 'popover-time-picker',
  placement: 'top'
};
export default TimePicker;