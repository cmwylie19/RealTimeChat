'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _helpers = require('./helpers');

var _MonthView = require('./MonthView');

var _MonthView2 = _interopRequireDefault(_MonthView);

var _YearView = require('./YearView');

var _YearView2 = _interopRequireDefault(_YearView);

var _DecadeView = require('./DecadeView');

var _DecadeView2 = _interopRequireDefault(_DecadeView);

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
      date: new Date(_this.props.date),
      typeOfDateInput: _this.props.typeOfDateInput
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
    }, _this.toggleDateView = function () {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      _this.setState({
        typeOfDateInput: type
      });
    }, _this.getDateViewByType = function (type) {
      var _this$props = _this.props,
          date = _this$props.date,
          weekStartsOn = _this$props.weekStartsOn,
          locale = _this$props.locale,
          setSelected = _this$props.setSelected;

      var parsedDate = Date.parse(date) ? date : new Date();
      switch (type) {
        case 'D':
          return _react2.default.createElement(_DecadeView2.default, { date: parsedDate, setSelected: setSelected, toggleDateView: _this.toggleDateView });
        case 'Y':
          return _react2.default.createElement(_YearView2.default, { date: parsedDate, setSelected: setSelected, locale: locale, toggleDateView: _this.toggleDateView });
        default:
          return _react2.default.createElement(_MonthView2.default, {
            date: parsedDate,
            setSelected: setSelected,
            locale: locale,
            weekStartsOn: weekStartsOn,
            toggleDateView: _this.toggleDateView
          });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DateInput, [{
    key: 'render',
    value: function render() {
      var className = this.props.className;
      var typeOfDateInput = this.state.typeOfDateInput;

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('datepicker', className) },
        this.getDateViewByType(typeOfDateInput)
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var nextDate = new Date(nextProps.date);
      var prevDate = new Date(prevState.selectedDate);
      var nextType = new Date(nextProps.date);
      return Date.parse(nextDate) === Date.parse(prevDate) ? null : {
        selectedDate: nextDate,
        date: nextDate,
        typeOfDateInput: nextType
      };
    }
  }]);

  return DateInput;
}(_react2.default.Component);

DateInput.propTypes = {
  date: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(Date), _propTypes2.default.string]),
  setSelected: _propTypes2.default.func,
  locale: _propTypes2.default.string,
  weekStartsOn: _propTypes2.default.number,
  className: _propTypes2.default.string,
  typeOfDateInput: _propTypes2.default.string
};

DateInput.defaultProps = {
  setSelected: null,
  date: new Date(),
  locale: 'en-US',
  weekStartsOn: 1,
  className: '',
  typeOfDateInput: 'M'
};
exports.default = DateInput;