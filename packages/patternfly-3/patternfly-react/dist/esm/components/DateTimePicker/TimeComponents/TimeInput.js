var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import PickTimeTable from './PickTimeTable';
import PickTimeClock from './PickTimeClock';
import classNames from 'classnames';
import { noop } from '../../../common/helpers';
import { HOUR } from './TimeConstants';

var TimeInput = function (_React$Component) {
  _inherits(TimeInput, _React$Component);

  function TimeInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TimeInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TimeInput.__proto__ || Object.getPrototypeOf(TimeInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isTimeTableOpen: _this.props.isTimeTableOpen,
      typeOfTimeInput: HOUR,
      selectedTime: _this.props.time
    }, _this.toggleTimeTable = function (type) {
      _this.setState({
        typeOfTimeInput: type,
        isTimeTableOpen: !_this.state.isTimeTableOpen
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TimeInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          time = _props.time,
          setSelected = _props.setSelected,
          className = _props.className;
      var _state = this.state,
          typeOfTimeInput = _state.typeOfTimeInput,
          isTimeTableOpen = _state.isTimeTableOpen;

      var parsedTime = Date.parse(time) ? time : new Date();
      return React.createElement(
        'div',
        { className: classNames('timepicker', className) },
        isTimeTableOpen ? React.createElement(PickTimeTable, {
          time: parsedTime,
          setSelected: setSelected,
          type: typeOfTimeInput,
          show: isTimeTableOpen,
          toggleTimeTable: this.toggleTimeTable
        }) : React.createElement(PickTimeClock, { time: parsedTime, setSelected: setSelected, toggleTimeTable: this.toggleTimeTable })
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var nextTime = new Date(nextProps.time);
      var prevTime = new Date(prevState.selectedTime);
      var nextIsTableOpen = nextProps.isTimeTableOpen;
      return Date.parse(nextTime) === Date.parse(prevTime) ? null : {
        selectedTime: nextTime,
        isTimeTableOpen: nextIsTableOpen
      };
    }
  }]);

  return TimeInput;
}(React.Component);

TimeInput.propTypes = {
  setSelected: PropTypes.func,
  time: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  className: PropTypes.string,
  isTimeTableOpen: PropTypes.bool
};
TimeInput.defaultProps = {
  setSelected: noop,
  time: new Date(),
  className: '',
  isTimeTableOpen: false
};
export default TimeInput;