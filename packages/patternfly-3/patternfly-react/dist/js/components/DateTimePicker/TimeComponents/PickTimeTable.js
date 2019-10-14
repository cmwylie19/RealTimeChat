'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require('../../../common/helpers');

var _TimeConstants = require('./TimeConstants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PickTimeTable = function (_React$Component) {
  _inherits(PickTimeTable, _React$Component);

  function PickTimeTable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PickTimeTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PickTimeTable.__proto__ || Object.getPrototypeOf(PickTimeTable)).call.apply(_ref, [this].concat(args))), _this), _this.setTime = function (newTime, type) {
      var _this$props = _this.props,
          time = _this$props.time,
          setSelected = _this$props.setSelected,
          toggleTimeTable = _this$props.toggleTimeTable;

      var hours = time.getHours();
      newTime = parseInt(newTime, 10);
      if (type === _TimeConstants.MINUTE) {
        time.setMinutes(newTime);
      } else if (type === _TimeConstants.HOUR) {
        time.setHours(hours < 12 ? newTime % 12 : newTime % 12 + 12);
      }
      setSelected(time);
      toggleTimeTable();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PickTimeTable, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var hoursArray = [['12', '01', '02', '03'], ['04', '05', '06', '07'], ['08', '09', '10', '11']];
      var minutesArray = [['00', '05', '10', '15'], ['20', '25', '30', '35'], ['40', '45', '50', '55']];
      return this.props.type === _TimeConstants.HOUR ? _react2.default.createElement(
        'div',
        { className: 'timepicker-hours' },
        _react2.default.createElement(
          'table',
          { className: 'table-condensed' },
          _react2.default.createElement(
            'tbody',
            null,
            hoursArray.map(function (hoursRow, idx) {
              return _react2.default.createElement(
                'tr',
                { key: idx },
                hoursRow.map(function (hour) {
                  return _react2.default.createElement(
                    'td',
                    { key: hour, className: 'hour', onClick: function onClick() {
                        return _this2.setTime(hour, _TimeConstants.HOUR);
                      } },
                    hour
                  );
                })
              );
            })
          )
        )
      ) : _react2.default.createElement(
        'div',
        { className: 'timepicker-minutes' },
        _react2.default.createElement(
          'table',
          { className: 'table-condensed' },
          _react2.default.createElement(
            'tbody',
            null,
            minutesArray.map(function (minutesRow, idx) {
              return _react2.default.createElement(
                'tr',
                { key: idx },
                minutesRow.map(function (minute) {
                  return _react2.default.createElement(
                    'td',
                    { key: minute, className: 'minute', onClick: function onClick() {
                        return _this2.setTime(minute, _TimeConstants.MINUTE);
                      } },
                    minute
                  );
                })
              );
            })
          )
        )
      );
    }
  }]);

  return PickTimeTable;
}(_react2.default.Component);

PickTimeTable.propTypes = {
  time: _propTypes2.default.instanceOf(Date).isRequired,
  setSelected: _propTypes2.default.func,
  toggleTimeTable: _propTypes2.default.func,
  type: _propTypes2.default.string.isRequired
};
PickTimeTable.defaultProps = {
  setSelected: _helpers.noop,
  toggleTimeTable: _helpers.noop
};
exports.default = PickTimeTable;