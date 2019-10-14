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

var _reactVirtualized = require('react-virtualized');

var _TableGridHead = require('./TableGridHead');

var _TableGridHead2 = _interopRequireDefault(_TableGridHead);

var _TableGridColumnHeader = require('./TableGridColumnHeader');

var _TableGridColumnHeader2 = _interopRequireDefault(_TableGridColumnHeader);

var _TableGridRow = require('./TableGridRow');

var _TableGridRow2 = _interopRequireDefault(_TableGridRow);

var _TableGridCol = require('./TableGridCol');

var _TableGridCol2 = _interopRequireDefault(_TableGridCol);

var _TableGrid = require('./TableGrid');

var _TableGrid2 = _interopRequireDefault(_TableGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

  var cellMeasurementCache = measurementCache || new _reactVirtualized.CellMeasurerCache({
    fixedWidth: true,
    minHeight: 44
  });

  var rowRenderer = function rowRenderer(rowProps) {
    var index = rowProps.index,
        style = rowProps.style,
        key = rowProps.key,
        parent = rowProps.parent;

    var obj = data[index];

    return _react2.default.createElement(
      _reactVirtualized.CellMeasurer,
      { cache: cellMeasurementCache, columnIndex: 0, key: key, rowIndex: index, parent: parent },
      _react2.default.createElement(
        'div',
        { style: style },
        row({ obj: obj, tableData: tableData, index: index })
      )
    );
  };

  var classes = (0, _classnames2.default)({
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


    return _react2.default.createElement(
      _reactVirtualized.AutoSizer,
      { disableHeight: true },
      function (_ref2) {
        var width = _ref2.width;
        return _react2.default.createElement(
          'div',
          { ref: registerChild },
          _react2.default.createElement(_reactVirtualized.List, {
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

  var bodyComponent = empty ? emptyComponent : _react2.default.createElement(
    _reactVirtualized.WindowScroller,
    { scrollElement: scrollElement },
    renderAutoSizer
  );

  return _react2.default.createElement(
    'div',
    _extends({ className: classes }, props),
    header(tableData),
    _react2.default.createElement(
      _TableGrid2.default.Body,
      { className: bodyClassName },
      bodyComponent
    )
  );
};

VirtualTableGrid.propTypes = {
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** Flag to use a bordered grid */
  bordered: _propTypes2.default.bool,
  /** Type of selection for the grid */
  selectType: _propTypes2.default.oneOf(['row', 'cell', 'checkbox', 'none']),
  /** Scrollable element for the list (use scrollableElementId or scrollable or neither to default to window) */
  scrollable: _propTypes2.default.any,
  /** Id of the scrollable element for the list (use scrollableElementId or scrollable or neither to default to window) */
  scrollableElementId: _propTypes2.default.any,
  /** Function(tableData) to return the header for the grid */
  header: _propTypes2.default.func.isRequired,
  /** Function({obj, tableData, index}) to return a row  */
  row: _propTypes2.default.func.isRequired,
  /** Classes to add to the body */
  bodyClassName: _propTypes2.default.string,
  /** Flag if there is no data */
  empty: _propTypes2.default.bool,
  /** Component to show if empty */
  emptyComponent: _propTypes2.default.node,
  /* react-virtualized: Cache to be shared between CellMeasurer and its parent Grid. */
  measurementCache: _propTypes2.default.object,
  /** Data to fill the table */
  data: _propTypes2.default.array,
  /** Global table data to be passed to each row (state values?) */
  tableData: _propTypes2.default.any
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

VirtualTableGrid.Head = _TableGridHead2.default;
VirtualTableGrid.ColumnHeader = _TableGridColumnHeader2.default;
VirtualTableGrid.Row = _TableGridRow2.default;
VirtualTableGrid.Col = _TableGridCol2.default;

exports.default = VirtualTableGrid;