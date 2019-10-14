'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _TableGridHead = require('./TableGridHead');

var _TableGridHead2 = _interopRequireDefault(_TableGridHead);

var _TableGridColumnHeader = require('./TableGridColumnHeader');

var _TableGridColumnHeader2 = _interopRequireDefault(_TableGridColumnHeader);

var _TableGridBody = require('./TableGridBody');

var _TableGridBody2 = _interopRequireDefault(_TableGridBody);

var _TableGridRow = require('./TableGridRow');

var _TableGridRow2 = _interopRequireDefault(_TableGridRow);

var _TableGridCol = require('./TableGridCol');

var _TableGridCol2 = _interopRequireDefault(_TableGridCol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * TableGrid Component for PatternFly
 */

var TableGrid = function TableGrid(_ref) {
  var children = _ref.children,
      className = _ref.className,
      bordered = _ref.bordered,
      selectType = _ref.selectType,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'bordered', 'selectType']);

  var classes = (0, _classnames2.default)({
    'table-grid-pf': true,
    bordered: bordered,
    'row-select': selectType === 'row',
    'cell-select': selectType === 'cell',
    'checkbox-select': selectType === 'checkbox'
  }, className);
  return _react2.default.createElement(
    'div',
    _extends({ className: classes }, props),
    children
  );
};

TableGrid.propTypes = {
  /** Children nodes */
  children: _propTypes2.default.node,
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** Flag to use a bordered grid */
  bordered: _propTypes2.default.bool,
  /** Type of selection for the grid */
  selectType: _propTypes2.default.oneOf(['row', 'cell', 'checkbox', 'none'])
};
TableGrid.defaultProps = {
  children: null,
  className: '',
  bordered: true,
  selectType: 'none'
};

TableGrid.Head = _TableGridHead2.default;
TableGrid.ColumnHeader = _TableGridColumnHeader2.default;
TableGrid.Body = _TableGridBody2.default;
TableGrid.Row = _TableGridRow2.default;
TableGrid.Col = _TableGridCol2.default;

exports.default = TableGrid;