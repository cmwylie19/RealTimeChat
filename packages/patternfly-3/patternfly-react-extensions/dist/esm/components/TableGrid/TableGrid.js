var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TableGridHead from './TableGridHead';
import TableGridColumnHeader from './TableGridColumnHeader';
import TableGridBody from './TableGridBody';
import TableGridRow from './TableGridRow';
import TableGridCol from './TableGridCol';

/**
 * TableGrid Component for PatternFly
 */

var TableGrid = function TableGrid(_ref) {
  var children = _ref.children,
      className = _ref.className,
      bordered = _ref.bordered,
      selectType = _ref.selectType,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'bordered', 'selectType']);

  var classes = classNames({
    'table-grid-pf': true,
    bordered: bordered,
    'row-select': selectType === 'row',
    'cell-select': selectType === 'cell',
    'checkbox-select': selectType === 'checkbox'
  }, className);
  return React.createElement(
    'div',
    _extends({ className: classes }, props),
    children
  );
};

TableGrid.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Flag to use a bordered grid */
  bordered: PropTypes.bool,
  /** Type of selection for the grid */
  selectType: PropTypes.oneOf(['row', 'cell', 'checkbox', 'none'])
};
TableGrid.defaultProps = {
  children: null,
  className: '',
  bordered: true,
  selectType: 'none'
};

TableGrid.Head = TableGridHead;
TableGrid.ColumnHeader = TableGridColumnHeader;
TableGrid.Body = TableGridBody;
TableGrid.Row = TableGridRow;
TableGrid.Col = TableGridCol;

export default TableGrid;