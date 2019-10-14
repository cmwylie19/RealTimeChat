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

var _TimeInput = require('./TimeComponents/TimeInput');

var _TimeInput2 = _interopRequireDefault(_TimeInput);

var _TimeHelpers = require('./TimeHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      value: (0, _TimeHelpers.getDateFromTime)(_this.props.value),
      tmpValue: (0, _TimeHelpers.formatTime)(_this.props.value, _this.props.locale)
    }, _this.setSelected = function (time) {
      var newTime = (0, _TimeHelpers.getDateFromTime)(time);
      if (newTime) {
        _this.setState({ value: newTime, tmpValue: (0, _TimeHelpers.formatTime)(newTime, _this.props.locale) });
      } else {
        _this.setState({ tmpValue: (0, _TimeHelpers.formatTime)(newTime, _this.props.locale) });
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

      var popover = _react2.default.createElement(
        _.Popover,
        { id: id, className: 'bootstrap-datetimepicker-widget date-time-picker-pf bootstrap-timepicker-widget' },
        _react2.default.createElement(
          'ul',
          { className: 'list-unstyled' },
          _react2.default.createElement(
            'li',
            { className: 'picker-switch accordion-toggle' },
            _react2.default.createElement(
              'table',
              { className: 'table-condensed' },
              _react2.default.createElement(
                'tbody',
                null,
                _react2.default.createElement('tr', null)
              )
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(_TimeInput2.default, { time: value, setSelected: this.setSelected, locale: locale })
          )
        )
      );

      return _react2.default.createElement(
        _.InputGroup,
        { className: 'input-group date-time-picker-pf time-picker-pf' },
        _react2.default.createElement(_.FormControl, {
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
        _react2.default.createElement(
          _.OverlayTrigger,
          { trigger: 'click', placement: placement, overlay: popover, rootClose: true },
          _react2.default.createElement(
            _.InputGroup.Addon,
            {
              className: 'picker-pf',
              onClick: function onClick() {
                return _this2.setState({ tmpValue: (0, _TimeHelpers.formatTime)(value, locale) });
              }
            },
            _react2.default.createElement(_.Icon, { type: 'fa', name: 'clock-o' })
          )
        )
      );
    }
  }]);

  return TimePicker;
}(_react2.default.Component);

TimePicker.propTypes = {
  /** Value of the input */
  value: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(Date), _propTypes2.default.string]),
  /** locale string for formating the time string */
  locale: _propTypes2.default.string,
  /** id of the popover */
  id: _propTypes2.default.string,
  /** Placement of the popover */
  placement: _.OverlayTrigger.propTypes.placement
};
TimePicker.defaultProps = {
  value: new Date(),
  locale: 'en-US',
  id: 'popover-time-picker',
  placement: 'top'
};
exports.default = TimePicker;