'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PickTimeTable = require('./PickTimeTable');

var _PickTimeTable2 = _interopRequireDefault(_PickTimeTable);

var _PickTimeClock = require('./PickTimeClock');

var _PickTimeClock2 = _interopRequireDefault(_PickTimeClock);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _helpers = require('../../../common/helpers');

var _TimeConstants = require('./TimeConstants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      typeOfTimeInput: _TimeConstants.HOUR,
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
      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('timepicker', className) },
        isTimeTableOpen ? _react2.default.createElement(_PickTimeTable2.default, {
          time: parsedTime,
          setSelected: setSelected,
          type: typeOfTimeInput,
          show: isTimeTableOpen,
          toggleTimeTable: this.toggleTimeTable
        }) : _react2.default.createElement(_PickTimeClock2.default, { time: parsedTime, setSelected: setSelected, toggleTimeTable: this.toggleTimeTable })
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
}(_react2.default.Component);

TimeInput.propTypes = {
  setSelected: _propTypes2.default.func,
  time: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(Date), _propTypes2.default.string]),
  className: _propTypes2.default.string,
  isTimeTableOpen: _propTypes2.default.bool
};
TimeInput.defaultProps = {
  setSelected: _helpers.noop,
  time: new Date(),
  className: '',
  isTimeTableOpen: false
};
exports.default = TimeInput;