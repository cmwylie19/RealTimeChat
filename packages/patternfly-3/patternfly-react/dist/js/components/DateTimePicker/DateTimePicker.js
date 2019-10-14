'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ = require('../../');

var _DateInput = require('./DateComponents/DateInput');

var _DateInput2 = _interopRequireDefault(_DateInput);

var _TodayButton = require('./DateComponents/TodayButton');

var _TodayButton2 = _interopRequireDefault(_TodayButton);

var _TimeInput = require('./TimeComponents/TimeInput');

var _TimeInput2 = _interopRequireDefault(_TimeInput);

var _DateConstants = require('./DateComponents/DateConstants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      typeOfDateInput: _DateConstants.MONTH,
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

      var popover = _react2.default.createElement(
        _.Popover,
        {
          id: id,
          className: 'bootstrap-datetimepicker-widget date-time-picker-pf dropdown-menu timepicker-sbs'
        },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(_DateInput2.default, {
            date: value,
            setSelected: this.setSelected,
            locale: locale,
            weekStartsOn: weekStartsOn,
            className: 'col-md-6',
            typeOfDateInput: typeOfDateInput
          }),
          _react2.default.createElement(_TimeInput2.default, {
            time: value,
            setSelected: this.setSelected,
            isTimeTableOpen: isTimeTableOpen,
            locale: locale,
            className: 'col-md-6'
          })
        ),
        _react2.default.createElement(
          'li',
          { className: 'picker-switch accordion-toggle' },
          _react2.default.createElement(_TodayButton2.default, { setSelected: this.setSelected })
        )
      );
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _.InputGroup,
          { className: 'input-group date-time-picker-pf' },
          _react2.default.createElement(_.FormControl, {
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
          _react2.default.createElement(
            _.OverlayTrigger,
            {
              trigger: 'click',
              placement: placement,
              overlay: popover,
              rootClose: true
            },
            _react2.default.createElement(
              _.InputGroup.Addon,
              {
                className: 'date-time-picker-pf',
                onClick: function onClick() {
                  return _this2.setState({ tmpValue: formatTime(value, locale) });
                }
              },
              _react2.default.createElement(_.Icon, { type: 'fa', name: 'calendar' })
            )
          )
        )
      );
    }
  }]);

  return DateTimePicker;
}(_react2.default.Component);

DateTimePicker.propTypes = {
  value: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(Date), _propTypes2.default.string]),
  locale: _propTypes2.default.string,
  weekStartsOn: _propTypes2.default.number,
  id: _propTypes2.default.string,
  hiddenValue: _propTypes2.default.bool,
  placement: _propTypes2.default.oneOf(['top', 'bottom'])
};
DateTimePicker.defaultProps = {
  value: new Date(),
  locale: 'en-US',
  weekStartsOn: 1,
  id: 'datetime-picker-popover',
  hiddenValue: true,
  placement: 'top'
};
exports.default = DateTimePicker;