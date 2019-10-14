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

var _DateHelpers = require('./DateHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      tmpValue: (0, _DateHelpers.formatDate)(_this.props.value, _this.props.locale)
    }, _this.setSelected = function (date) {
      var newDate = new Date(_this.state.value);
      if (Date.parse(date)) {
        newDate = new Date(date);
      } else if (date === '') {
        newDate = date;
      }
      _this.setState({ value: newDate, tmpValue: (0, _DateHelpers.formatDate)(newDate) });
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

      var popover = _react2.default.createElement(
        _.Popover,
        { id: id, className: 'bootstrap-datetimepicker-widget date-picker-pf usetwentyfour' },
        _react2.default.createElement(
          'ul',
          { className: 'list-unstyled' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(_DateInput2.default, { date: value, setSelected: this.setSelected, locale: locale, weekStartsOn: weekStartsOn })
          ),
          _react2.default.createElement(
            'li',
            { className: 'picker-switch accordion-toggle' },
            _react2.default.createElement(_TodayButton2.default, { setSelected: this.setSelected })
          )
        )
      );
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _.InputGroup,
          { className: 'input-group date-time-picker-pf' },
          _react2.default.createElement(_.FormControl, {
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
          _react2.default.createElement(
            _.OverlayTrigger,
            { trigger: 'click', placement: placement, overlay: popover, rootClose: true },
            _react2.default.createElement(
              _.InputGroup.Addon,
              { className: 'date-picker-pf', onClick: function onClick() {
                  return _this2.setState({ tmpValue: (0, _DateHelpers.formatDate)(value) });
                } },
              _react2.default.createElement(_.Icon, { type: 'fa', name: 'calendar' })
            )
          )
        )
      );
    }
  }]);

  return DatePicker;
}(_react2.default.Component);

DatePicker.propTypes = {
  value: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(Date), _propTypes2.default.string]),
  locale: _propTypes2.default.string,
  weekStartsOn: _propTypes2.default.number,
  id: _propTypes2.default.string,
  placement: _.OverlayTrigger.propTypes.placement
};
DatePicker.defaultProps = {
  value: new Date(),
  locale: 'en-US',
  weekStartsOn: 1,
  id: 'popover-date-picker',
  placement: 'top'
};
exports.default = DatePicker;