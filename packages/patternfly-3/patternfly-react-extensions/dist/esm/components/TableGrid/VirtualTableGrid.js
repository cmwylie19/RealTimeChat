var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AutoSizer, List as VirtualList, WindowScroller, CellMeasurerCache, CellMeasurer } from 'react-virtualized';

import TableGridHead from './TableGridHead';
import TableGridColumnHeader from './TableGridColumnHeader';
import TableGridRow from './TableGridRow';
import TableGridCol from './TableGridCol';
import TableGrid from './TableGrid';

/**
 * VirtualTableGrid Component for PatternFly
 */

var VirtualTableGrid = function VirtualTableGrid(_ref) {
  var className = _ref.className,
      bordered = _ref.bordered,
      selectType = _ref.selectType,
      scrollable = _ref.scrollable,
      scrollableElementId = _ref.scrollableElementId,
      header = _ref.header,
      row = _ref.row,
      bodyClassName = _ref.bodyClassName,
      empty = _ref.empty,
      emptyComponent = _ref.emptyComponent,
      measurementCache = _ref.measurementCache,
      data = _ref.data,
      tableData = _ref.tableData,
      props = _objectWithoutProperties(_ref, ['className', 'bordered', 'selectType', 'scrollable', 'scrollableElementId', 'header', 'row', 'bodyClassName', 'empty', 'emptyComponent', 'measurementCache', 'data', 'tableData']);

  var cellMeasurementCache = measurementCache || new CellMeasurerCache({
    fixedWidth: true,
    minHeight: 44
  });

  var rowRenderer = function rowRenderer(rowProps) {
    var index = rowProps.index,
        style = rowProps.style,
        key = rowProps.key,
        parent = rowProps.parent;

    var obj = data[index];

    return React.createElement(
      CellMeasurer,
      { cache: cellMeasurementCache, columnIndex: 0, key: key, rowIndex: index, parent: parent },
      React.createElement(
        'div',
        { style: style },
        row({ obj: obj, tableData: tableData, index: index })
      )
    );
  };

  var classes = classNames({
    'table-grid-pf': true,
    'container-fluid': true,
    bordered: bordered,
    'row-select': selectType === 'row',
    'cell-select': selectType === 'cell',
    'checkbox-select': selectType === 'checkbox'
  }, className);

  var renderAutoSizer = function renderAutoSizer(sizerProps) {
    var height = sizerProps.height,
        isScrolling = sizerProps.isScrolling,
        registerChild = sizerProps.registerChild,
        onChildScroll = sizerProps.onChildScroll,
        scrollTop = sizerProps.scrollTop;


    return React.createElement(
      AutoSizer,
      { disableHeight: true },
      function (_ref2) {
        var width = _ref2.width;
        return React.createElement(
          'div',
          { ref: registerChild },
          React.createElement(VirtualList, {
            autoHeight: true,
            data: data,
            height: height || 0,
            deferredMeasurementCache: cellMeasurementCache,
            rowHeight: cellMeasurementCache.rowHeight,
            isScrolling: isScrolling,
            onScroll: onChildScroll,
            rowRenderer: rowRenderer,
            rowCount: data.length,
            scrollTop: scrollTop,
            width: width,
            tabIndex: null
          })
        );
      }
    );
  };

  var scrollElement = scrollable || document.getElementById(scrollableElementId) || window;

  var bodyComponent = empty ? emptyComponent : React.createElement(
    WindowScroller,
    { scrollElement: scrollElement },
    renderAutoSizer
  );

  return React.createElement(
    'div',
    _extends({ className: classes }, props),
    header(tableData),
    React.createElement(
      TableGrid.Body,
      { className: bodyClassName },
      bodyComponent
    )
  );
};

VirtualTableGrid.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** Flag to use a bordered grid */
  bordered: PropTypes.bool,
  /** Type of selection for the grid */
  selectType: PropTypes.oneOf(['row', 'cell', 'checkbox', 'none']),
  /** Scrollable element for the list (use scrollableElementId or scrollable or neither to default to window) */
  scrollable: PropTypes.any,
  /** Id of the scrollable element for the list (use scrollableElementId or scrollable or neither to default to window) */
  scrollableElementId: PropTypes.any,
  /** Function(tableData) to return the header for the grid */
  header: PropTypes.func.isRequired,
  /** Function({obj, tableData, index}) to return a row  */
  row: PropTypes.func.isRequired,
  /** Classes to add to the body */
  bodyClassName: PropTypes.string,
  /** Flag if there is no data */
  empty: PropTypes.bool,
  /** Component to show if empty */
  emptyComponent: PropTypes.node,
  /* react-virtualized: Cache to be shared between CellMeasurer and its parent Grid. */
  measurementCache: PropTypes.object,
  /** Data to fill the table */
  data: PropTypes.array,
  /** Global table data to be passed to each row (state values?) */
  tableData: PropTypes.any
};

VirtualTableGrid.defaultProps = {
  className: '',
  bordered: true,
  selectType: 'none',
  scrollable: null,
  scrollableElementId: '',
  bodyClassName: '',
  empty: false,
  emptyComponent: null,
  measurementCache: null,
  data: [],
  tableData: null
};

VirtualTableGrid.Head = TableGridHead;
VirtualTableGrid.ColumnHeader = TableGridColumnHeader;
VirtualTableGrid.Row = TableGridRow;
VirtualTableGrid.Col = TableGridCol;

export default VirtualTableGrid;