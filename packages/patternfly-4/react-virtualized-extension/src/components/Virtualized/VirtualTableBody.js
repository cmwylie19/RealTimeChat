"use strict";
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = require("react");
var accessibilityOverscanIndicesGetter_1 = require("./accessibilityOverscanIndicesGetter");
var VirtualGrid_1 = require("./VirtualGrid");
var clsx_1 = require("clsx");
var VirtualTableBody = /** @class */ (function (_super) {
    __extends(VirtualTableBody, _super);
    function VirtualTableBody() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._cellRenderer = function (_a) {
            var parent = _a.parent, rowIndex = _a.rowIndex, style = _a.style, isScrolling = _a.isScrolling, isVisible = _a.isVisible, key = _a.key;
            var rowRenderer = _this.props.rowRenderer;
            // TRICKY The style object is sometimes cached by VirtualGrid.
            // This prevents new style objects from bypassing shallowCompare().
            // However as of React 16, style props are auto-frozen (at least in dev mode)
            // Check to make sure we can still modify the style before proceeding.
            // https://github.com/facebook/react/commit/977357765b44af8ff0cfea327866861073095c12#commitcomment-20648713
            var writable = Object.getOwnPropertyDescriptor(style, 'width').writable;
            if (writable) {
                // By default, List cells should be 100% width.
                // This prevents them from flowing under a scrollbar (if present).
                style.width = '100%';
            }
            return rowRenderer({
                index: rowIndex,
                style: style,
                isScrolling: isScrolling,
                isVisible: isVisible,
                key: key,
                parent: parent
            });
        };
        _this._setRef = function (ref) {
            _this.VirtualGrid = ref;
        };
        _this._onScroll = function (_a) {
            var clientHeight = _a.clientHeight, scrollHeight = _a.scrollHeight, scrollTop = _a.scrollTop;
            var onScroll = _this.props.onScroll;
            onScroll({ clientHeight: clientHeight, scrollHeight: scrollHeight, scrollTop: scrollTop });
        };
        _this._onSectionRendered = function (_a) {
            var rowOverscanStartIndex = _a.rowOverscanStartIndex, rowOverscanStopIndex = _a.rowOverscanStopIndex, rowStartIndex = _a.rowStartIndex, rowStopIndex = _a.rowStopIndex;
            var onRowsRendered = _this.props.onRowsRendered;
            onRowsRendered({
                overscanStartIndex: rowOverscanStartIndex,
                overscanStopIndex: rowOverscanStopIndex,
                startIndex: rowStartIndex,
                stopIndex: rowStopIndex
            });
        };
        return _this;
    }
    VirtualTableBody.prototype.forceUpdateVirtualGrid = function () {
        if (this.VirtualGrid) {
            this.VirtualGrid.forceUpdate();
        }
    };
    /** See VirtualGrid#getOffsetForCell */
    VirtualTableBody.prototype.getOffsetForRow = function (_a) {
        var alignment = _a.alignment, index = _a.index;
        if (this.VirtualGrid) {
            var scrollTop = this.VirtualGrid.getOffsetForCell({
                alignment: alignment,
                rowIndex: index,
                columnIndex: 0
            }).scrollTop;
            return scrollTop;
        }
        return 0;
    };
    /** CellMeasurer compatibility */
    VirtualTableBody.prototype.invalidateCellSizeAfterRender = function (_a) {
        var columnIndex = _a.columnIndex, rowIndex = _a.rowIndex;
        if (this.VirtualGrid) {
            this.VirtualGrid.invalidateCellSizeAfterRender({
                rowIndex: rowIndex,
                columnIndex: columnIndex
            });
        }
    };
    /** See VirtualGrid#measureAllCells */
    VirtualTableBody.prototype.measureAllRows = function () {
        if (this.VirtualGrid) {
            this.VirtualGrid.measureAllCells();
        }
    };
    /** CellMeasurer compatibility */
    VirtualTableBody.prototype.recomputeVirtualGridSize = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.columnIndex, columnIndex = _c === void 0 ? 0 : _c, _d = _b.rowIndex, rowIndex = _d === void 0 ? 0 : _d;
        if (this.VirtualGrid) {
            this.VirtualGrid.recomputeVirtualGridSize({
                rowIndex: rowIndex,
                columnIndex: columnIndex
            });
        }
    };
    /** See VirtualGrid#recomputeVirtualGridSize */
    VirtualTableBody.prototype.recomputeRowHeights = function (index) {
        if (index === void 0) { index = 0; }
        if (this.VirtualGrid) {
            this.VirtualGrid.recomputeVirtualGridSize({
                rowIndex: index,
                columnIndex: 0
            });
        }
    };
    /** See VirtualGrid#scrollToPosition */
    VirtualTableBody.prototype.scrollToPosition = function (scrollTop) {
        if (scrollTop === void 0) { scrollTop = 0; }
        if (this.VirtualGrid) {
            this.VirtualGrid.scrollToPosition({ scrollTop: scrollTop });
        }
    };
    /** See VirtualGrid#scrollToCell */
    VirtualTableBody.prototype.scrollToRow = function (index) {
        if (index === void 0) { index = 0; }
        if (this.VirtualGrid) {
            this.VirtualGrid.scrollToCell({
                columnIndex: 0,
                rowIndex: index
            });
        }
    };
    VirtualTableBody.prototype.render = function () {
        var _a = this.props, className = _a.className, noRowsRenderer = _a.noRowsRenderer, scrollToIndex = _a.scrollToIndex, width = _a.width, columns = _a.columns, columnCount = _a.columnCount, rows = _a.rows, tabIndex = _a.tabIndex, style = _a.style;
        var classNames = clsx_1["default"]('ReactVirtualized__List', className);
        var VirtualGridAny = VirtualGrid_1["default"];
        return (
        // note: these aria props if rendered will break a11y for role="presentation"
        // this approach attempts to fix non standard table grids
        // see: https://www.html5accessibility.com/tests/aria-table-fix.html
        <VirtualGridAny {...this.props} style={__assign({ tableLayout: 'fixed', display: 'block' }, style)} containerStyle={{
            display: 'block'
        }} aria-label={null} aria-readonly={null} tabIndex={null} role="presentation" autoContainerWidth cellRenderer={this._cellRenderer} className={classNames} columnWidth={width} columnCount={columns ? columns.length : columnCount} noContentRenderer={noRowsRenderer} onScroll={this._onScroll} onSectionRendered={this._onSectionRendered} ref={this._setRef} scrollToRow={scrollToIndex} columns={columns} rows={rows} scrollContainerComponent="table" innerScrollContainerComponent="tbody"/>);
    };
    VirtualTableBody.defaultProps = {
        autoHeight: false,
        estimatedRowSize: 30,
        onScroll: function () { },
        noRowsRenderer: function () { return null; },
        onRowsRendered: function () { },
        overscanIndicesGetter: accessibilityOverscanIndicesGetter_1["default"],
        overscanRowCount: 10,
        scrollToAlignment: 'auto',
        scrollToIndex: -1,
        style: {}
    };
    return VirtualTableBody;
}(React.PureComponent));
exports["default"] = VirtualTableBody;
