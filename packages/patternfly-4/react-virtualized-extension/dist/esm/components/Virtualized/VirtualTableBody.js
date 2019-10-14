import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable */
import * as React from 'react';
import accessibilityOverscanIndicesGetter from './accessibilityOverscanIndicesGetter';
import VirtualGrid from './VirtualGrid';
import clsx from 'clsx';
/**
 * It is inefficient to create and manage a large list of DOM elements within a scrolling container
 * if only a few of those elements are visible. The primary purpose of this component is to improve
 * performance by only rendering the DOM nodes that a user is able to see based on their current
 * scroll position.
 *
 * This component renders a virtualized list of elements with either fixed or dynamic heights.
 */

export default class VirtualTableBody extends React.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_cellRenderer", ({
      parent,
      rowIndex,
      style,
      isScrolling,
      isVisible,
      key
    }) => {
      const {
        rowRenderer
      } = this.props; // TRICKY The style object is sometimes cached by VirtualGrid.
      // This prevents new style objects from bypassing shallowCompare().
      // However as of React 16, style props are auto-frozen (at least in dev mode)
      // Check to make sure we can still modify the style before proceeding.
      // https://github.com/facebook/react/commit/977357765b44af8ff0cfea327866861073095c12#commitcomment-20648713

      const {
        writable
      } = Object.getOwnPropertyDescriptor(style, 'width');

      if (writable) {
        // By default, List cells should be 100% width.
        // This prevents them from flowing under a scrollbar (if present).
        style.width = '100%';
      }

      return rowRenderer({
        index: rowIndex,
        style,
        isScrolling,
        isVisible,
        key,
        parent
      });
    });

    _defineProperty(this, "_setRef", ref => {
      this.VirtualGrid = ref;
    });

    _defineProperty(this, "_onScroll", ({
      clientHeight,
      scrollHeight,
      scrollTop
    }) => {
      const {
        onScroll
      } = this.props;
      onScroll({
        clientHeight,
        scrollHeight,
        scrollTop
      });
    });

    _defineProperty(this, "_onSectionRendered", ({
      rowOverscanStartIndex,
      rowOverscanStopIndex,
      rowStartIndex,
      rowStopIndex
    }) => {
      const {
        onRowsRendered
      } = this.props;
      onRowsRendered({
        overscanStartIndex: rowOverscanStartIndex,
        overscanStopIndex: rowOverscanStopIndex,
        startIndex: rowStartIndex,
        stopIndex: rowStopIndex
      });
    });
  }

  forceUpdateVirtualGrid() {
    if (this.VirtualGrid) {
      this.VirtualGrid.forceUpdate();
    }
  }
  /** See VirtualGrid#getOffsetForCell */


  getOffsetForRow({
    alignment,
    index
  }) {
    if (this.VirtualGrid) {
      const {
        scrollTop
      } = this.VirtualGrid.getOffsetForCell({
        alignment,
        rowIndex: index,
        columnIndex: 0
      });
      return scrollTop;
    }

    return 0;
  }
  /** CellMeasurer compatibility */


  invalidateCellSizeAfterRender({
    columnIndex,
    rowIndex
  }) {
    if (this.VirtualGrid) {
      this.VirtualGrid.invalidateCellSizeAfterRender({
        rowIndex,
        columnIndex
      });
    }
  }
  /** See VirtualGrid#measureAllCells */


  measureAllRows() {
    if (this.VirtualGrid) {
      this.VirtualGrid.measureAllCells();
    }
  }
  /** CellMeasurer compatibility */


  recomputeVirtualGridSize({
    columnIndex = 0,
    rowIndex = 0
  } = {}) {
    if (this.VirtualGrid) {
      this.VirtualGrid.recomputeVirtualGridSize({
        rowIndex,
        columnIndex
      });
    }
  }
  /** See VirtualGrid#recomputeVirtualGridSize */


  recomputeRowHeights(index = 0) {
    if (this.VirtualGrid) {
      this.VirtualGrid.recomputeVirtualGridSize({
        rowIndex: index,
        columnIndex: 0
      });
    }
  }
  /** See VirtualGrid#scrollToPosition */


  scrollToPosition(scrollTop = 0) {
    if (this.VirtualGrid) {
      this.VirtualGrid.scrollToPosition({
        scrollTop
      });
    }
  }
  /** See VirtualGrid#scrollToCell */


  scrollToRow(index = 0) {
    if (this.VirtualGrid) {
      this.VirtualGrid.scrollToCell({
        columnIndex: 0,
        rowIndex: index
      });
    }
  }

  render() {
    const {
      className,
      noRowsRenderer,
      scrollToIndex,
      width,
      columns,
      columnCount,
      rows,
      tabIndex,
      style
    } = this.props;
    const classNames = clsx('ReactVirtualized__List', className);
    const VirtualGridAny = VirtualGrid;
    return (// note: these aria props if rendered will break a11y for role="presentation"
      // this approach attempts to fix non standard table grids
      // see: https://www.html5accessibility.com/tests/aria-table-fix.html
      React.createElement(VirtualGridAny, _extends({}, this.props, {
        style: _objectSpread({
          tableLayout: 'fixed',
          display: 'block'
        }, style),
        containerStyle: {
          display: 'block'
        },
        "aria-label": null,
        "aria-readonly": null,
        tabIndex: null,
        role: "presentation",
        autoContainerWidth: true,
        cellRenderer: this._cellRenderer,
        className: classNames,
        columnWidth: width,
        columnCount: columns ? columns.length : columnCount,
        noContentRenderer: noRowsRenderer,
        onScroll: this._onScroll,
        onSectionRendered: this._onSectionRendered,
        ref: this._setRef,
        scrollToRow: scrollToIndex,
        columns: columns,
        rows: rows,
        scrollContainerComponent: "table",
        innerScrollContainerComponent: "tbody"
      }))
    );
  }

}

_defineProperty(VirtualTableBody, "propTypes", {
  'aria-label': _pt.string,
  autoHeight: _pt.bool,
  className: _pt.string,
  estimatedRowSize: _pt.number,
  height: _pt.number.isRequired,
  noRowsRenderer: _pt.any,
  onRowsRendered: _pt.func,
  onScroll: _pt.func,
  overscanIndicesGetter: _pt.any,
  overscanRowCount: _pt.number,
  rowHeight: _pt.any.isRequired,
  rowRenderer: _pt.any.isRequired,
  rowCount: _pt.number.isRequired,
  scrollToAlignment: _pt.any,
  scrollToIndex: _pt.number,
  scrollTop: _pt.number,
  style: _pt.any,
  tabIndex: _pt.number,
  width: _pt.number.isRequired,
  columns: _pt.arrayOf(_pt.any),
  columnCount: _pt.number,
  rows: _pt.arrayOf(_pt.any).isRequired
});

_defineProperty(VirtualTableBody, "defaultProps", {
  autoHeight: false,
  estimatedRowSize: 30,
  onScroll: () => {},
  noRowsRenderer: () => null,
  onRowsRendered: () => {},
  overscanIndicesGetter: accessibilityOverscanIndicesGetter,
  overscanRowCount: 10,
  scrollToAlignment: 'auto',
  scrollToIndex: -1,
  style: {}
});
//# sourceMappingURL=VirtualTableBody.js.map