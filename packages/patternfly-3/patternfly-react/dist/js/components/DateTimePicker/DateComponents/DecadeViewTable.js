'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DecadeViewTable = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require('../../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DecadeViewTable = exports.DecadeViewTable = function DecadeViewTable(_ref) {
  var yearArray = _ref.yearArray,
      selectedYear = _ref.selectedYear,
      setSelectedYear = _ref.setSelectedYear;
  return _react2.default.createElement(
    'tbody',
    null,
    _react2.default.createElement(
      'tr',
      null,
      _react2.default.createElement(
        'td',
        { colSpan: '7' },
        yearArray.map(function (year) {
          return _react2.default.createElement(
            'span',
            {
              onClick: function onClick() {
                return setSelectedYear(year);
              },
              className: 'year ' + (year === selectedYear ? 'active' : ''),
              key: year
            },
            year
          );
        })
      )
    )
  );
};

DecadeViewTable.propTypes = {
  yearArray: _propTypes2.default.array,
  selectedYear: _propTypes2.default.number,
  setSelectedYear: _propTypes2.default.func
};
DecadeViewTable.defaultProps = {
  yearArray: [],
  selectedYear: new Date().getFullYear(),
  setSelectedYear: _helpers.noop
};

exports.default = DecadeViewTable;