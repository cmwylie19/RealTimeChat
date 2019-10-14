var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import times from 'lodash/times';
import { addYears } from './helpers';
import { noop } from '../../../common/helpers';
import { DecadeViewHeader } from './DecadeViewHeader';
import { DecadeViewTable } from './DecadeViewTable';

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
      return times(12, function (i) {
        return addYears(date, i).getFullYear();
      });
    }, _this.getPrevDecade = function () {
      var date = _this.state.date;

      _this.setState({ date: addYears(date, -10) });
    }, _this.getNextDecade = function () {
      var date = _this.state.date;

      _this.setState({ date: addYears(date, 10) });
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
      return React.createElement(
        'div',
        { className: 'datepicker-years' },
        React.createElement(
          'table',
          { className: 'table-condensed' },
          React.createElement(DecadeViewHeader, {
            currDecade: currDecade,
            getNextDecade: this.getNextDecade,
            getPrevDecade: this.getPrevDecade
          }),
          React.createElement(DecadeViewTable, { selectedYear: selectedYear, yearArray: yearArray, setSelectedYear: this.setSelectedYear })
        )
      );
    }
  }]);

  return DecadeView;
}(React.Component);

DecadeView.propTypes = {
  date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  setSelected: PropTypes.func,
  toggleDateView: PropTypes.func
};

DecadeView.defaultProps = {
  setSelected: noop,
  toggleDateView: noop,
  date: new Date()
};
export default DecadeView;