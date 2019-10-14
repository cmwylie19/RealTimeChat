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

var _DecadeViewHeader = require('./DecadeViewHeader');

var _DecadeViewTable = require('./DecadeViewTable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DecadeView = function (_React$Component) {
  _inherits(DecadeView, _React$Component);

  function DecadeView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DecadeView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DecadeView.__proto__ || Object.getPrototypeOf(DecadeView)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      date: new Date(_this.props.date),
      selectedDate: new Date(_this.props.date)
    }, _this.getYearArray = function () {
      var date = _this.state.date;

      date.setFullYear(Math.floor(date.getFullYear() / 10) * 10);
      return (0, _times2.default)(12, function (i) {
        return (0, _helpers.addYears)(date, i).getFullYear();
      });
    }, _this.getPrevDecade = function () {
      var date = _this.state.date;

      _this.setState({ date: (0, _helpers.addYears)(date, -10) });
    }, _this.getNextDecade = function () {
      var date = _this.state.date;

      _this.setState({ date: (0, _helpers.addYears)(date, 10) });
    }, _this.setSelectedYear = function (year) {
      var _this$props = _this.props,
          setSelected = _this$props.setSelected,
          toggleDateView = _this$props.toggleDateView;
      var date = _this.state.date;

      date.setFullYear(year);
      setSelected(date);
      toggleDateView('Y');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DecadeView, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          date = _state.date,
          selectedDate = _state.selectedDate;

      var currDecade = Math.floor(date.getFullYear() / 10) * 10;
      var selectedYear = selectedDate.getFullYear();
      var yearArray = this.getYearArray();
      return _react2.default.createElement(
        'div',
        { className: 'datepicker-years' },
        _react2.default.createElement(
          'table',
          { className: 'table-condensed' },
          _react2.default.createElement(_DecadeViewHeader.DecadeViewHeader, {
            currDecade: currDecade,
            getNextDecade: this.getNextDecade,
            getPrevDecade: this.getPrevDecade
          }),
          _react2.default.createElement(_DecadeViewTable.DecadeViewTable, { selectedYear: selectedYear, yearArray: yearArray, setSelectedYear: this.setSelectedYear })
        )
      );
    }
  }]);

  return DecadeView;
}(_react2.default.Component);

DecadeView.propTypes = {
  date: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(Date), _propTypes2.default.string]),
  setSelected: _propTypes2.default.func,
  toggleDateView: _propTypes2.default.func
};

DecadeView.defaultProps = {
  setSelected: _helpers2.noop,
  toggleDateView: _helpers2.noop,
  date: new Date()
};
exports.default = DecadeView;