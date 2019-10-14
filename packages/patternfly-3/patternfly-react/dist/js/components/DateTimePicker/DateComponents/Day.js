'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Day = function Day(_ref) {
  var day = _ref.day,
      setSelected = _ref.setSelected,
      classNamesArray = _ref.classNamesArray;

  var date = day.getDate();
  return _react2.default.createElement(
    'td',
    {
      className: (0, _classnames2.default)('day', classNamesArray),
      'data-day': date,
      onClick: function onClick() {
        setSelected(day);
      }
    },
    date
  );
};

Day.propTypes = {
  day: _propTypes2.default.instanceOf(Date).isRequired,
  classNamesArray: _propTypes2.default.object,
  setSelected: _propTypes2.default.func
};

Day.defaultProps = {
  setSelected: null,
  classNamesArray: []
};
exports.default = Day;