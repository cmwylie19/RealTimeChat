"use strict";
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
/* eslint-disable */
var React = require("react");
var clsx_1 = require("clsx");
var calculateSizeAndPositionDataAndUpdateScrollOffset_1 = require("./utils/calculateSizeAndPositionDataAndUpdateScrollOffset");
var ScalingCellSizeAndPositionManager_1 = require("./utils/ScalingCellSizeAndPositionManager");
var createCallbackMemoizer_1 = require("./utils/createCallbackMemoizer");
var defaultOverscanIndicesGetter_1 = require("./defaultOverscanIndicesGetter");
var updateScrollIndexHelper_1 = require("./utils/updateScrollIndexHelper");
var defaultCellRangeRenderer_1 = require("./defaultCellRangeRenderer");
var scrollbarSize_1 = require("dom-helpers/util/scrollbarSize");
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var requestAnimationTimeout_1 = require("./utils/requestAnimationTimeout");
/**
 * Specifies the number of milliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
exports.DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150;
/**
 * Controls whether the VirtualGrid updates the DOM element's scrollLeft/scrollTop based on the current state or just observes it.
 * This prevents VirtualGrid from interrupting mouse-wheel animations (see issue #2).
 */
var SCROLL_POSITION_CHANGE_REASONS = {
    OBSERVED: 'observed',
    REQUESTED: 'requested'
};
var renderNull = function () { return null; };
/**
 * Renders tabular data with virtualization along the vertical and horizontal axes.
 * Row heights and column widths must be known ahead of time and specified as properties.
 */
var VirtualGrid = /** @class */ (function (_super) {
    __extends(VirtualGrid, _super);
    function VirtualGrid(props) {
        var _this = _super.call(this, props) || this;
        // Invokes onSectionRendered callback only when start/stop row or column indices change
        _this._onVirtualGridRenderedMemoizer = createCallbackMemoizer_1["default"]();
        _this._onScrollMemoizer = createCallbackMemoizer_1["default"](false);
        _this._deferredInvalidateColumnIndex = null;
        _this._deferredInvalidateRowIndex = null;
        _this._recomputeScrollLeftFlag = false;
        _this._recomputeScrollTopFlag = false;
        _this._horizontalScrollBarSize = 0;
        _this._verticalScrollBarSize = 0;
        _this._scrollbarPresenceChanged = false;
        _this._renderedColumnStartIndex = 0;
        _this._renderedColumnStopIndex = 0;
        _this._renderedRowStartIndex = 0;
        _this._renderedRowStopIndex = 0;
        _this._styleCache = {};
        _this._cellCache = {};
        _this._debounceScrollEndedCallback = function () {
            _this._disablePointerEventsTimeoutId = null;
            // isScrolling is used to determine if we reset styleCache
            _this.setState({
                isScrolling: false,
                needToResetStyleCache: false
            });
        };
        _this._invokeOnVirtualGridRenderedHelper = function () {
            var onSectionRendered = _this.props.onSectionRendered;
            _this._onVirtualGridRenderedMemoizer({
                callback: onSectionRendered,
                indices: {
                    columnOverscanStartIndex: _this._columnStartIndex,
                    columnOverscanStopIndex: _this._columnStopIndex,
                    columnStartIndex: _this._renderedColumnStartIndex,
                    columnStopIndex: _this._renderedColumnStopIndex,
                    rowOverscanStartIndex: _this._rowStartIndex,
                    rowOverscanStopIndex: _this._rowStopIndex,
                    rowStartIndex: _this._renderedRowStartIndex,
                    rowStopIndex: _this._renderedRowStopIndex
                }
            });
        };
        _this._setScrollingContainerRef = function (ref) {
            _this._scrollingContainer = ref;
        };
        _this._onScroll = function (event) {
            // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
            // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
            // See issue #404 for more information.
            if (event.target === _this._scrollingContainer) {
                _this.handleScrollEvent(event.target);
            }
        };
        var columnSizeAndPositionManager = new ScalingCellSizeAndPositionManager_1["default"]({
            cellCount: props.columnCount,
            cellSizeGetter: function (params) { return VirtualGrid._wrapSizeGetter(props.columnWidth)(params); },
            estimatedCellSize: VirtualGrid._getEstimatedColumnSize(props)
        });
        var rowSizeAndPositionManager = new ScalingCellSizeAndPositionManager_1["default"]({
            cellCount: props.rowCount,
            cellSizeGetter: function (params) { return VirtualGrid._wrapSizeGetter(props.rowHeight)(params); },
            estimatedCellSize: VirtualGrid._getEstimatedRowSize(props)
        });
        _this.state = {
            instanceProps: {
                columnSizeAndPositionManager: columnSizeAndPositionManager,
                rowSizeAndPositionManager: rowSizeAndPositionManager,
                prevColumnWidth: props.columnWidth,
                prevRowHeight: props.rowHeight,
                prevColumnCount: props.columnCount,
                prevRowCount: props.rowCount,
                prevIsScrolling: props.isScrolling === true,
                prevScrollToColumn: props.scrollToColumn,
                prevScrollToRow: props.scrollToRow,
                prevScrollLeft: props.scrollLeft,
                prevScrollTop: props.scrollTop,
                scrollbarSize: 0,
                scrollbarSizeMeasured: false
            },
            isScrolling: false,
            scrollDirectionHorizontal: defaultOverscanIndicesGetter_1.SCROLL_DIRECTION_FORWARD,
            scrollDirectionVertical: defaultOverscanIndicesGetter_1.SCROLL_DIRECTION_FORWARD,
            scrollLeft: props.scrollLeft || 0,
            scrollTop: props.scrollTop || 0,
            scrollPositionChangeReason: null,
            needToResetStyleCache: false
        };
        if (props.scrollToRow > 0) {
            _this._initialScrollTop = _this._getCalculatedScrollTop(props, _this.state);
        }
        if (props.scrollToColumn > 0) {
            _this._initialScrollLeft = _this._getCalculatedScrollLeft(props, _this.state);
        }
        return _this;
    }
    /**
     * Gets offsets for a given cell and alignment.
     */
    VirtualGrid.prototype.getOffsetForCell = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.alignment, alignment = _c === void 0 ? this.props.scrollToAlignment : _c, _d = _b.columnIndex, columnIndex = _d === void 0 ? this.props.scrollToColumn : _d, _e = _b.rowIndex, rowIndex = _e === void 0 ? this.props.scrollToRow : _e;
        var offsetProps = __assign(__assign({}, this.props), { scrollToAlignment: alignment, scrollToColumn: columnIndex, scrollToRow: rowIndex });
        return {
            scrollLeft: this._getCalculatedScrollLeft(offsetProps),
            scrollTop: this._getCalculatedScrollTop(offsetProps)
        };
    };
    /**
     * Gets estimated total rows' height.
     */
    VirtualGrid.prototype.getTotalRowsHeight = function () {
        return this.state.instanceProps.rowSizeAndPositionManager.getTotalSize();
    };
    /**
     * Gets estimated total columns' width.
     */
    VirtualGrid.prototype.getTotalColumnsWidth = function () {
        return this.state.instanceProps.columnSizeAndPositionManager.getTotalSize();
    };
    /**
     * This method handles a scroll event originating from an external scroll control.
     * It's an advanced method and should probably not be used unless you're implementing a custom scroll-bar solution.
     */
    VirtualGrid.prototype.handleScrollEvent = function (_a) {
        var _b = _a.scrollLeft, scrollLeftParam = _b === void 0 ? 0 : _b, _c = _a.scrollTop, scrollTopParam = _c === void 0 ? 0 : _c;
        // On iOS, we can arrive at negative offsets by swiping past the start.
        // To prevent flicker here, we make playing in the negative offset zone cause nothing to happen.
        if (scrollTopParam < 0) {
            return;
        }
        // Prevent pointer events from interrupting a smooth scroll
        this._debounceScrollEnded();
        var _d = this.props, autoHeight = _d.autoHeight, autoWidth = _d.autoWidth, height = _d.height, width = _d.width;
        var instanceProps = this.state.instanceProps;
        // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
        // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
        // This causes a series of rapid renders that is slow for long lists.
        // We can avoid that by doing some simple bounds checking to ensure that scroll offsets never exceed their bounds.
        var scrollbarSize = instanceProps.scrollbarSize;
        var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
        var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
        var scrollLeft = Math.min(Math.max(0, totalColumnsWidth - width + scrollbarSize), scrollLeftParam);
        var scrollTop = Math.min(Math.max(0, totalRowsHeight - height + scrollbarSize), scrollTopParam);
        // Certain devices (like Apple touchpad) rapid-fire duplicate events.
        // Don't force a re-render if this is the case.
        // The mouse may move faster then the animation frame does.
        // Use requestAnimationFrame to avoid over-updating.
        if (this.state.scrollLeft !== scrollLeft || this.state.scrollTop !== scrollTop) {
            // Track scrolling direction so we can more efficiently overscan rows to reduce empty space around the edges while scrolling.
            // Don't change direction for an axis unless scroll offset has changed.
            var scrollDirectionHorizontal = scrollLeft !== this.state.scrollLeft
                ? scrollLeft > this.state.scrollLeft
                    ? defaultOverscanIndicesGetter_1.SCROLL_DIRECTION_FORWARD
                    : defaultOverscanIndicesGetter_1.SCROLL_DIRECTION_BACKWARD
                : this.state.scrollDirectionHorizontal;
            var scrollDirectionVertical = scrollTop !== this.state.scrollTop
                ? scrollTop > this.state.scrollTop
                    ? defaultOverscanIndicesGetter_1.SCROLL_DIRECTION_FORWARD
                    : defaultOverscanIndicesGetter_1.SCROLL_DIRECTION_BACKWARD
                : this.state.scrollDirectionVertical;
            var newState = {
                isScrolling: true,
                scrollDirectionHorizontal: scrollDirectionHorizontal,
                scrollDirectionVertical: scrollDirectionVertical,
                scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.OBSERVED
            };
            if (!autoHeight) {
                newState.scrollTop = scrollTop;
            }
            if (!autoWidth) {
                newState.scrollLeft = scrollLeft;
            }
            newState.needToResetStyleCache = false;
            this.setState(newState);
        }
        this._invokeOnScrollMemoizer({
            scrollLeft: scrollLeft,
            scrollTop: scrollTop,
            totalColumnsWidth: totalColumnsWidth,
            totalRowsHeight: totalRowsHeight
        });
    };
    /**
     * Invalidate VirtualGrid size and recompute visible cells.
     * This is a deferred wrapper for recomputeVirtualGridSize().
     * It sets a flag to be evaluated on cDM/cDU to avoid unnecessary renders.
     * This method is intended for advanced use-cases like CellMeasurer.
     */
    // @TODO (bvaughn) Add automated test coverage for this.
    VirtualGrid.prototype.invalidateCellSizeAfterRender = function (_a) {
        var columnIndex = _a.columnIndex, rowIndex = _a.rowIndex;
        this._deferredInvalidateColumnIndex =
            typeof this._deferredInvalidateColumnIndex === 'number'
                ? Math.min(this._deferredInvalidateColumnIndex, columnIndex)
                : columnIndex;
        this._deferredInvalidateRowIndex =
            typeof this._deferredInvalidateRowIndex === 'number'
                ? Math.min(this._deferredInvalidateRowIndex, rowIndex)
                : rowIndex;
    };
    /**
     * Pre-measure all columns and rows in a VirtualGrid.
     * Typically cells are only measured as needed and estimated sizes are used for cells that have not yet been measured.
     * This method ensures that the next call to getTotalSize() returns an exact size (as opposed to just an estimated one).
     */
    VirtualGrid.prototype.measureAllCells = function () {
        var _a = this.props, columnCount = _a.columnCount, rowCount = _a.rowCount;
        var instanceProps = this.state.instanceProps;
        instanceProps.columnSizeAndPositionManager.getSizeAndPositionOfCell(columnCount - 1);
        instanceProps.rowSizeAndPositionManager.getSizeAndPositionOfCell(rowCount - 1);
    };
    /**
     * Forced recompute of row heights and column widths.
     * This function should be called if dynamic column or row sizes have changed but nothing else has.
     * Since VirtualGrid only receives :columnCount and :rowCount it has no way of detecting when the underlying data changes.
     */
    VirtualGrid.prototype.recomputeVirtualGridSize = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.columnIndex, columnIndex = _c === void 0 ? 0 : _c, _d = _b.rowIndex, rowIndex = _d === void 0 ? 0 : _d;
        var _e = this.props, scrollToColumn = _e.scrollToColumn, scrollToRow = _e.scrollToRow;
        var instanceProps = this.state.instanceProps;
        instanceProps.columnSizeAndPositionManager.resetCell(columnIndex);
        instanceProps.rowSizeAndPositionManager.resetCell(rowIndex);
        // Cell sizes may be determined by a function property.
        // In this case the cDU handler can't know if they changed.
        // Store this flag to let the next cDU pass know it needs to recompute the scroll offset.
        this._recomputeScrollLeftFlag =
            scrollToColumn >= 0 &&
                (this.state.scrollDirectionHorizontal === defaultOverscanIndicesGetter_1.SCROLL_DIRECTION_FORWARD
                    ? columnIndex <= scrollToColumn
                    : columnIndex >= scrollToColumn);
        this._recomputeScrollTopFlag =
            scrollToRow >= 0 &&
                (this.state.scrollDirectionVertical === defaultOverscanIndicesGetter_1.SCROLL_DIRECTION_FORWARD
                    ? rowIndex <= scrollToRow
                    : rowIndex >= scrollToRow);
        // Clear cell cache in case we are scrolling;
        // Invalid row heights likely mean invalid cached content as well.
        this._styleCache = {};
        this._cellCache = {};
        this.forceUpdate();
    };
    /**
     * Ensure column and row are visible.
     */
    VirtualGrid.prototype.scrollToCell = function (_a) {
        var columnIndex = _a.columnIndex, rowIndex = _a.rowIndex;
        var columnCount = this.props.columnCount;
        var props = this.props;
        // Don't adjust scroll offset for single-column grids (eg List, Table).
        // This can cause a funky scroll offset because of the vertical scrollbar width.
        if (columnCount > 1 && columnIndex !== undefined) {
            this._updateScrollLeftForScrollToColumn(__assign(__assign({}, props), { scrollToColumn: columnIndex }));
        }
        if (rowIndex !== undefined) {
            this._updateScrollTopForScrollToRow(__assign(__assign({}, props), { scrollToRow: rowIndex }));
        }
    };
    VirtualGrid.prototype.componentDidMount = function () {
        var _a = this.props, getScrollbarSize = _a.getScrollbarSize, height = _a.height, scrollLeft = _a.scrollLeft, scrollToColumn = _a.scrollToColumn, scrollTop = _a.scrollTop, scrollToRow = _a.scrollToRow, width = _a.width;
        var instanceProps = this.state.instanceProps;
        // Reset initial offsets to be ignored in browser
        this._initialScrollTop = 0;
        this._initialScrollLeft = 0;
        // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
        // We must do this at the start of the method as we may calculate and update scroll position below.
        this._handleInvalidatedVirtualGridSize();
        // If this component was first rendered server-side, scrollbar size will be undefined.
        // In that event we need to remeasure.
        if (!instanceProps.scrollbarSizeMeasured) {
            this.setState(function (prevState) {
                var stateUpdate = __assign(__assign({}, prevState), { needToResetStyleCache: false });
                stateUpdate.instanceProps.scrollbarSize = getScrollbarSize();
                stateUpdate.instanceProps.scrollbarSizeMeasured = true;
                return stateUpdate;
            });
        }
        if ((typeof scrollLeft === 'number' && scrollLeft >= 0) || (typeof scrollTop === 'number' && scrollTop >= 0)) {
            var stateUpdate = VirtualGrid._getScrollToPositionStateUpdate({
                prevState: this.state,
                scrollLeft: scrollLeft,
                scrollTop: scrollTop
            });
            if (stateUpdate) {
                stateUpdate.needToResetStyleCache = false;
                this.setState(stateUpdate);
            }
        }
        // refs don't work in `react-test-renderer`
        if (this._scrollingContainer) {
            // setting the ref's scrollLeft and scrollTop.
            // Somehow in MultiVirtualGrid the main grid doesn't trigger a update on mount.
            if (this._scrollingContainer.scrollLeft !== this.state.scrollLeft) {
                this._scrollingContainer.scrollLeft = this.state.scrollLeft;
            }
            if (this._scrollingContainer.scrollTop !== this.state.scrollTop) {
                this._scrollingContainer.scrollTop = this.state.scrollTop;
            }
        }
        // Don't update scroll offset if the size is 0; we don't render any cells in this case.
        // Setting a state may cause us to later thing we've updated the offce when we haven't.
        var sizeIsBiggerThanZero = height > 0 && width > 0;
        if (scrollToColumn >= 0 && sizeIsBiggerThanZero) {
            this._updateScrollLeftForScrollToColumn();
        }
        if (scrollToRow >= 0 && sizeIsBiggerThanZero) {
            this._updateScrollTopForScrollToRow();
        }
        // Update onRowsRendered callback
        this._invokeOnVirtualGridRenderedHelper();
        // Initialize onScroll callback
        this._invokeOnScrollMemoizer({
            scrollLeft: scrollLeft || 0,
            scrollTop: scrollTop || 0,
            totalColumnsWidth: instanceProps.columnSizeAndPositionManager.getTotalSize(),
            totalRowsHeight: instanceProps.rowSizeAndPositionManager.getTotalSize()
        });
        this._maybeCallOnScrollbarPresenceChange();
    };
    /**
     * @private
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) New scroll-to-cell props have been set
     */
    VirtualGrid.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _this = this;
        var _a = this.props, autoHeight = _a.autoHeight, autoWidth = _a.autoWidth, columnCount = _a.columnCount, height = _a.height, rowCount = _a.rowCount, scrollToAlignment = _a.scrollToAlignment, scrollToColumn = _a.scrollToColumn, scrollToRow = _a.scrollToRow, width = _a.width;
        var _b = this.state, scrollLeft = _b.scrollLeft, scrollPositionChangeReason = _b.scrollPositionChangeReason, scrollTop = _b.scrollTop, instanceProps = _b.instanceProps;
        // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
        // We must do this at the start of the method as we may calculate and update scroll position below.
        this._handleInvalidatedVirtualGridSize();
        // Handle edge case where column or row count has only just increased over 0.
        // In this case we may have to restore a previously-specified scroll offset.
        // For more info see bvaughn/react-virtualized/issues/218
        var columnOrRowCountJustIncreasedFromZero = (columnCount > 0 && prevProps.columnCount === 0) || (rowCount > 0 && prevProps.rowCount === 0);
        // Make sure requested changes to :scrollLeft or :scrollTop get applied.
        // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
        // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
        // So we only set these when we require an adjustment of the scroll position.
        // See issue #2 for more information.
        if (scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
            // @TRICKY :autoHeight and :autoWidth properties instructs VirtualGrid to leave :scrollTop and :scrollLeft management to an external HOC (eg WindowScroller).
            // In this case we should avoid checking scrollingContainer.scrollTop and scrollingContainer.scrollLeft since it forces layout/flow.
            if (!autoWidth &&
                scrollLeft >= 0 &&
                (scrollLeft !== this._scrollingContainer.scrollLeft || columnOrRowCountJustIncreasedFromZero)) {
                this._scrollingContainer.scrollLeft = scrollLeft;
            }
            if (!autoHeight &&
                scrollTop >= 0 &&
                (scrollTop !== this._scrollingContainer.scrollTop || columnOrRowCountJustIncreasedFromZero)) {
                this._scrollingContainer.scrollTop = scrollTop;
            }
        }
        // Special case where the previous size was 0:
        // In this case we don't show any windowed cells at all.
        // So we should always recalculate offset afterwards.
        var sizeJustIncreasedFromZero = (prevProps.width === 0 || prevProps.height === 0) && (height > 0 && width > 0);
        // Update scroll offsets if the current :scrollToColumn or :scrollToRow values requires it
        // @TODO Do we also need this check or can the one in componentWillUpdate() suffice?
        if (this._recomputeScrollLeftFlag) {
            this._recomputeScrollLeftFlag = false;
            this._updateScrollLeftForScrollToColumn(this.props);
        }
        else {
            updateScrollIndexHelper_1["default"]({
                cellSizeAndPositionManager: instanceProps.columnSizeAndPositionManager,
                previousCellsCount: prevProps.columnCount,
                previousCellSize: prevProps.columnWidth,
                previousScrollToAlignment: prevProps.scrollToAlignment,
                previousScrollToIndex: prevProps.scrollToColumn,
                previousSize: prevProps.width,
                scrollOffset: scrollLeft,
                scrollToAlignment: scrollToAlignment,
                scrollToIndex: scrollToColumn,
                size: width,
                sizeJustIncreasedFromZero: sizeJustIncreasedFromZero,
                updateScrollIndexCallback: function () { return _this._updateScrollLeftForScrollToColumn(_this.props); }
            });
        }
        if (this._recomputeScrollTopFlag) {
            this._recomputeScrollTopFlag = false;
            this._updateScrollTopForScrollToRow(this.props);
        }
        else {
            updateScrollIndexHelper_1["default"]({
                cellSizeAndPositionManager: instanceProps.rowSizeAndPositionManager,
                previousCellsCount: prevProps.rowCount,
                previousCellSize: prevProps.rowHeight,
                previousScrollToAlignment: prevProps.scrollToAlignment,
                previousScrollToIndex: prevProps.scrollToRow,
                previousSize: prevProps.height,
                scrollOffset: scrollTop,
                scrollToAlignment: scrollToAlignment,
                scrollToIndex: scrollToRow,
                size: height,
                sizeJustIncreasedFromZero: sizeJustIncreasedFromZero,
                updateScrollIndexCallback: function () { return _this._updateScrollTopForScrollToRow(_this.props); }
            });
        }
        // Update onRowsRendered callback if start/stop indices have changed
        this._invokeOnVirtualGridRenderedHelper();
        // Changes to :scrollLeft or :scrollTop should also notify :onScroll listeners
        if (scrollLeft !== prevState.scrollLeft || scrollTop !== prevState.scrollTop) {
            var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
            var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
            this._invokeOnScrollMemoizer({
                scrollLeft: scrollLeft,
                scrollTop: scrollTop,
                totalColumnsWidth: totalColumnsWidth,
                totalRowsHeight: totalRowsHeight
            });
        }
        this._maybeCallOnScrollbarPresenceChange();
    };
    VirtualGrid.prototype.componentWillUnmount = function () {
        if (this._disablePointerEventsTimeoutId) {
            requestAnimationTimeout_1.cancelAnimationTimeout(this._disablePointerEventsTimeoutId);
        }
    };
    /**
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) Empty content (0 rows or columns)
     * 2) New scroll props overriding the current state
     * 3) Cells-count or cells-size has changed, making previous scroll offsets invalid
     */
    VirtualGrid.getDerivedStateFromProps = function (nextProps, prevState) {
        var newState = {};
        var instanceProps = prevState.instanceProps;
        if ((nextProps.columnCount === 0 && prevState.scrollLeft !== 0) ||
            (nextProps.rowCount === 0 && prevState.scrollTop !== 0)) {
            newState.scrollLeft = 0;
            newState.scrollTop = 0;
            // only use scroll{Left,Top} from props if scrollTo{Column,Row} isn't specified
            // scrollTo{Column,Row} should override scroll{Left,Top}
        }
        else if ((nextProps.scrollLeft !== instanceProps.prevScrollLeft && nextProps.scrollToColumn < 0) ||
            (nextProps.scrollTop !== instanceProps.prevScrollTop && nextProps.scrollToRow < 0)) {
            Object.assign(newState, VirtualGrid._getScrollToPositionStateUpdate({
                prevState: prevState,
                scrollLeft: nextProps.scrollLeft,
                scrollTop: nextProps.scrollTop
            }));
        }
        // Initially we should not clearStyleCache
        newState.needToResetStyleCache = false;
        if (nextProps.columnWidth !== instanceProps.prevColumnWidth ||
            nextProps.rowHeight !== instanceProps.prevRowHeight) {
            // Reset cache. set it to {} in render
            newState.needToResetStyleCache = true;
        }
        instanceProps.columnSizeAndPositionManager.configure({
            cellCount: nextProps.columnCount,
            estimatedCellSize: VirtualGrid._getEstimatedColumnSize(nextProps),
            cellSizeGetter: VirtualGrid._wrapSizeGetter(nextProps.columnWidth)
        });
        instanceProps.rowSizeAndPositionManager.configure({
            cellCount: nextProps.rowCount,
            estimatedCellSize: VirtualGrid._getEstimatedRowSize(nextProps),
            cellSizeGetter: VirtualGrid._wrapSizeGetter(nextProps.rowHeight)
        });
        if (instanceProps.prevColumnCount === 0 || instanceProps.prevRowCount === 0) {
            instanceProps.prevColumnCount = 0;
            instanceProps.prevRowCount = 0;
        }
        // If scrolling is controlled outside this component, clear cache when scrolling stops
        if (nextProps.autoHeight && nextProps.isScrolling === false && instanceProps.prevIsScrolling === true) {
            Object.assign(newState, {
                isScrolling: false
            });
        }
        var maybeStateA;
        var maybeStateB;
        calculateSizeAndPositionDataAndUpdateScrollOffset_1["default"]({
            cellCount: instanceProps.prevColumnCount,
            cellSize: typeof instanceProps.prevColumnWidth === 'number' ? instanceProps.prevColumnWidth : null,
            computeMetadataCallback: function () { return instanceProps.columnSizeAndPositionManager.resetCell(0); },
            computeMetadataCallbackProps: nextProps,
            nextCellsCount: nextProps.columnCount,
            nextCellSize: typeof nextProps.columnWidth === 'number' ? nextProps.columnWidth : null,
            nextScrollToIndex: nextProps.scrollToColumn,
            scrollToIndex: instanceProps.prevScrollToColumn,
            updateScrollOffsetForScrollToIndex: function () {
                maybeStateA = VirtualGrid._getScrollLeftForScrollToColumnStateUpdate(nextProps, prevState);
            }
        });
        calculateSizeAndPositionDataAndUpdateScrollOffset_1["default"]({
            cellCount: instanceProps.prevRowCount,
            cellSize: typeof instanceProps.prevRowHeight === 'number' ? instanceProps.prevRowHeight : null,
            computeMetadataCallback: function () { return instanceProps.rowSizeAndPositionManager.resetCell(0); },
            computeMetadataCallbackProps: nextProps,
            nextCellsCount: nextProps.rowCount,
            nextCellSize: typeof nextProps.rowHeight === 'number' ? nextProps.rowHeight : null,
            nextScrollToIndex: nextProps.scrollToRow,
            scrollToIndex: instanceProps.prevScrollToRow,
            updateScrollOffsetForScrollToIndex: function () {
                maybeStateB = VirtualGrid._getScrollTopForScrollToRowStateUpdate(nextProps, prevState);
            }
        });
        instanceProps.prevColumnCount = nextProps.columnCount;
        instanceProps.prevColumnWidth = nextProps.columnWidth;
        instanceProps.prevIsScrolling = nextProps.isScrolling === true;
        instanceProps.prevRowCount = nextProps.rowCount;
        instanceProps.prevRowHeight = nextProps.rowHeight;
        instanceProps.prevScrollToColumn = nextProps.scrollToColumn;
        instanceProps.prevScrollToRow = nextProps.scrollToRow;
        instanceProps.prevScrollLeft = nextProps.scrollLeft;
        instanceProps.prevScrollTop = nextProps.scrollTop;
        // getting scrollBarSize (moved from componentWillMount)
        instanceProps.scrollbarSize = nextProps.getScrollbarSize();
        if (instanceProps.scrollbarSize === undefined) {
            instanceProps.scrollbarSizeMeasured = false;
            instanceProps.scrollbarSize = 0;
        }
        else {
            instanceProps.scrollbarSizeMeasured = true;
        }
        newState.instanceProps = instanceProps;
        return __assign(__assign(__assign({}, newState), maybeStateA), maybeStateB);
    };
    VirtualGrid.prototype.render = function () {
        var _a = this.props, autoContainerWidth = _a.autoContainerWidth, autoHeight = _a.autoHeight, autoWidth = _a.autoWidth, className = _a.className, containerProps = _a.containerProps, containerRole = _a.containerRole, containerStyle = _a.containerStyle, height = _a.height, id = _a.id, noContentRenderer = _a.noContentRenderer, role = _a.role, style = _a.style, tabIndex = _a.tabIndex, width = _a.width, scrollContainerComponent = _a.scrollContainerComponent, innerScrollContainerComponent = _a.innerScrollContainerComponent;
        var _b = this.state, instanceProps = _b.instanceProps, needToResetStyleCache = _b.needToResetStyleCache;
        var isScrolling = this._isScrolling();
        var gridStyle = {
            boxSizing: 'border-box',
            direction: 'ltr',
            height: autoHeight ? 'auto' : height,
            position: 'relative',
            width: autoWidth ? 'auto' : width,
            WebkitOverflowScrolling: 'touch',
            willChange: 'transform'
        };
        if (needToResetStyleCache) {
            this._styleCache = {};
        }
        // calculate _styleCache here
        // if state.isScrolling (not from _isScrolling) then reset
        if (!this.state.isScrolling) {
            this._resetStyleCache();
        }
        // calculate children to render here
        this._calculateChildrenToRender(this.props, this.state);
        var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
        var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
        // Force browser to hide scrollbars when we know they aren't necessary.
        // Otherwise once scrollbars appear they may not disappear again.
        // For more info see issue #116
        var verticalScrollBarSize = totalRowsHeight > height ? instanceProps.scrollbarSize : 0;
        var horizontalScrollBarSize = totalColumnsWidth > width ? instanceProps.scrollbarSize : 0;
        if (horizontalScrollBarSize !== this._horizontalScrollBarSize ||
            verticalScrollBarSize !== this._verticalScrollBarSize) {
            this._horizontalScrollBarSize = horizontalScrollBarSize;
            this._verticalScrollBarSize = verticalScrollBarSize;
            this._scrollbarPresenceChanged = true;
        }
        // Also explicitly init styles to 'auto' if scrollbars are required.
        // This works around an obscure edge case where external CSS styles have not yet been loaded,
        // But an initial scroll index of offset is set as an external prop.
        // Without this style, VirtualGrid would render the correct range of cells but would NOT update its internal offset.
        // This was originally reported via clauderic/react-infinite-calendar/issues/23
        gridStyle.overflowX = totalColumnsWidth + verticalScrollBarSize <= width ? 'hidden' : 'auto';
        gridStyle.overflowY = totalRowsHeight + horizontalScrollBarSize <= height ? 'hidden' : 'auto';
        var childrenToDisplay = this._childrenToDisplay;
        var showNoContentRenderer = childrenToDisplay.length === 0 && height > 0 && width > 0;
        var scrollContainerProps = __assign(__assign({}, containerProps), { "ref": this._setScrollingContainerRef, 'aria-label': this.props['aria-label'], 'aria-readonly': this.props['aria-readonly'], "className": clsx_1["default"]('ReactVirtualized__VirtualGrid', className), id: id, "onScroll": this._onScroll, role: role, "style": __assign(__assign({}, gridStyle), style), tabIndex: tabIndex });
        var innerScrollContainer = null;
        if (childrenToDisplay.length > 0) {
            var innerScrollContainerProps = {
                className: 'ReactVirtualized__VirtualGrid__innerScrollContainer',
                key: 'ReactVirtualized__VirtualGrid__innerScrollContainer',
                role: containerRole,
                style: __assign({ width: autoContainerWidth ? 'auto' : totalColumnsWidth, height: totalRowsHeight, maxWidth: totalColumnsWidth, maxHeight: totalRowsHeight, overflow: 'hidden', pointerEvents: isScrolling ? 'none' : '', position: 'relative' }, containerStyle)
            };
            innerScrollContainer = React.createElement(innerScrollContainerComponent, innerScrollContainerProps, childrenToDisplay);
        }
        return React.createElement(scrollContainerComponent, scrollContainerProps, [
            innerScrollContainer,
            showNoContentRenderer && noContentRenderer()
        ]);
    };
    /* ---------------------------- Helper methods ---------------------------- */
    VirtualGrid.prototype._calculateChildrenToRender = function (props, state) {
        if (props === void 0) { props = this.props; }
        if (state === void 0) { state = this.state; }
        var cellRenderer = props.cellRenderer, cellRangeRenderer = props.cellRangeRenderer, columnCount = props.columnCount, deferredMeasurementCache = props.deferredMeasurementCache, height = props.height, overscanColumnCount = props.overscanColumnCount, overscanIndicesGetter = props.overscanIndicesGetter, overscanRowCount = props.overscanRowCount, rowCount = props.rowCount, width = props.width, isScrollingOptOut = props.isScrollingOptOut;
        var scrollDirectionHorizontal = state.scrollDirectionHorizontal, scrollDirectionVertical = state.scrollDirectionVertical, instanceProps = state.instanceProps;
        var scrollTop = this._initialScrollTop > 0 ? this._initialScrollTop : state.scrollTop;
        var scrollLeft = this._initialScrollLeft > 0 ? this._initialScrollLeft : state.scrollLeft;
        var isScrolling = this._isScrolling(props, state);
        this._childrenToDisplay = [];
        // Render only enough columns and rows to cover the visible area of the grid.
        if (height > 0 && width > 0) {
            var visibleColumnIndices = instanceProps.columnSizeAndPositionManager.getVisibleCellRange({
                containerSize: width,
                offset: scrollLeft
            });
            var visibleRowIndices = instanceProps.rowSizeAndPositionManager.getVisibleCellRange({
                containerSize: height,
                offset: scrollTop
            });
            var horizontalOffsetAdjustment = instanceProps.columnSizeAndPositionManager.getOffsetAdjustment({
                containerSize: width,
                offset: scrollLeft
            });
            var verticalOffsetAdjustment = instanceProps.rowSizeAndPositionManager.getOffsetAdjustment({
                containerSize: height,
                offset: scrollTop
            });
            // Store for _invokeOnVirtualGridRenderedHelper()
            this._renderedColumnStartIndex = visibleColumnIndices.start;
            this._renderedColumnStopIndex = visibleColumnIndices.stop;
            this._renderedRowStartIndex = visibleRowIndices.start;
            this._renderedRowStopIndex = visibleRowIndices.stop;
            var overscanColumnIndices = overscanIndicesGetter({
                direction: 'horizontal',
                cellCount: columnCount,
                overscanCellsCount: overscanColumnCount,
                scrollDirection: scrollDirectionHorizontal,
                startIndex: typeof visibleColumnIndices.start === 'number' ? visibleColumnIndices.start : 0,
                stopIndex: typeof visibleColumnIndices.stop === 'number' ? visibleColumnIndices.stop : -1
            });
            var overscanRowIndices = overscanIndicesGetter({
                direction: 'vertical',
                cellCount: rowCount,
                overscanCellsCount: overscanRowCount,
                scrollDirection: scrollDirectionVertical,
                startIndex: typeof visibleRowIndices.start === 'number' ? visibleRowIndices.start : 0,
                stopIndex: typeof visibleRowIndices.stop === 'number' ? visibleRowIndices.stop : -1
            });
            // Store for _invokeOnVirtualGridRenderedHelper()
            var columnStartIndex = overscanColumnIndices.overscanStartIndex;
            var columnStopIndex = overscanColumnIndices.overscanStopIndex;
            var rowStartIndex = overscanRowIndices.overscanStartIndex;
            var rowStopIndex = overscanRowIndices.overscanStopIndex;
            // Advanced use-cases (eg CellMeasurer) require batched measurements to determine accurate sizes.
            if (deferredMeasurementCache) {
                // If rows have a dynamic height, scan the rows we are about to render.
                // If any have not yet been measured, then we need to render all columns initially,
                // Because the height of the row is equal to the tallest cell within that row,
                // (And so we can't know the height without measuring all column-cells first).
                if (!deferredMeasurementCache.hasFixedHeight()) {
                    for (var rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++) {
                        if (!deferredMeasurementCache.has(rowIndex, 0)) {
                            columnStartIndex = 0;
                            columnStopIndex = columnCount - 1;
                            break;
                        }
                    }
                }
                // If columns have a dynamic width, scan the columns we are about to render.
                // If any have not yet been measured, then we need to render all rows initially,
                // Because the width of the column is equal to the widest cell within that column,
                // (And so we can't know the width without measuring all row-cells first).
                if (!deferredMeasurementCache.hasFixedWidth()) {
                    for (var columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++) {
                        if (!deferredMeasurementCache.has(0, columnIndex)) {
                            rowStartIndex = 0;
                            rowStopIndex = rowCount - 1;
                            break;
                        }
                    }
                }
            }
            this._childrenToDisplay = cellRangeRenderer({
                cellCache: this._cellCache,
                cellRenderer: cellRenderer,
                columnSizeAndPositionManager: instanceProps.columnSizeAndPositionManager,
                columnStartIndex: columnStartIndex,
                columnStopIndex: columnStopIndex,
                deferredMeasurementCache: deferredMeasurementCache,
                horizontalOffsetAdjustment: horizontalOffsetAdjustment,
                isScrolling: isScrolling,
                isScrollingOptOut: isScrollingOptOut,
                parent: this,
                rowSizeAndPositionManager: instanceProps.rowSizeAndPositionManager,
                rowStartIndex: rowStartIndex,
                rowStopIndex: rowStopIndex,
                scrollLeft: scrollLeft,
                scrollTop: scrollTop,
                styleCache: this._styleCache,
                verticalOffsetAdjustment: verticalOffsetAdjustment,
                visibleColumnIndices: visibleColumnIndices,
                visibleRowIndices: visibleRowIndices
            });
            // update the indices
            this._columnStartIndex = columnStartIndex;
            this._columnStopIndex = columnStopIndex;
            this._rowStartIndex = rowStartIndex;
            this._rowStopIndex = rowStopIndex;
        }
    };
    /**
     * Sets an :isScrolling flag for a small window of time.
     * This flag is used to disable pointer events on the scrollable portion of the VirtualGrid.
     * This prevents jerky/stuttery mouse-wheel scrolling.
     */
    VirtualGrid.prototype._debounceScrollEnded = function () {
        var scrollingResetTimeInterval = this.props.scrollingResetTimeInterval;
        if (this._disablePointerEventsTimeoutId) {
            requestAnimationTimeout_1.cancelAnimationTimeout(this._disablePointerEventsTimeoutId);
        }
        this._disablePointerEventsTimeoutId = requestAnimationTimeout_1.requestAnimationTimeout(this._debounceScrollEndedCallback, scrollingResetTimeInterval);
    };
    VirtualGrid._getEstimatedColumnSize = function (props) {
        return typeof props.columnWidth === 'number' ? props.columnWidth : props.estimatedColumnSize;
    };
    VirtualGrid._getEstimatedRowSize = function (props) {
        return typeof props.rowHeight === 'number' ? props.rowHeight : props.estimatedRowSize;
    };
    /**
     * Check for batched CellMeasurer size invalidations.
     * This will occur the first time one or more previously unmeasured cells are rendered.
     */
    VirtualGrid.prototype._handleInvalidatedVirtualGridSize = function () {
        if (typeof this._deferredInvalidateColumnIndex === 'number' &&
            typeof this._deferredInvalidateRowIndex === 'number') {
            var columnIndex = this._deferredInvalidateColumnIndex;
            var rowIndex = this._deferredInvalidateRowIndex;
            this._deferredInvalidateColumnIndex = null;
            this._deferredInvalidateRowIndex = null;
            this.recomputeVirtualGridSize({ columnIndex: columnIndex, rowIndex: rowIndex });
        }
    };
    VirtualGrid.prototype._invokeOnScrollMemoizer = function (_a) {
        var _this = this;
        var scrollLeft = _a.scrollLeft, scrollTop = _a.scrollTop, totalColumnsWidth = _a.totalColumnsWidth, totalRowsHeight = _a.totalRowsHeight;
        this._onScrollMemoizer({
            callback: function (_a) {
                var scrollLeft = _a.scrollLeft, scrollTop = _a.scrollTop;
                var _b = _this.props, height = _b.height, onScroll = _b.onScroll, width = _b.width;
                onScroll({
                    clientHeight: height,
                    clientWidth: width,
                    scrollHeight: totalRowsHeight,
                    scrollLeft: scrollLeft,
                    scrollTop: scrollTop,
                    scrollWidth: totalColumnsWidth
                });
            },
            indices: {
                scrollLeft: scrollLeft,
                scrollTop: scrollTop
            }
        });
    };
    VirtualGrid.prototype._isScrolling = function (props, state) {
        if (props === void 0) { props = this.props; }
        if (state === void 0) { state = this.state; }
        // If isScrolling is defined in props, use it to override the value in state
        // This is a performance optimization for WindowScroller + VirtualGrid
        return Object.hasOwnProperty.call(props, 'isScrolling') ? Boolean(props.isScrolling) : Boolean(state.isScrolling);
    };
    VirtualGrid.prototype._maybeCallOnScrollbarPresenceChange = function () {
        if (this._scrollbarPresenceChanged) {
            var onScrollbarPresenceChange = this.props.onScrollbarPresenceChange;
            this._scrollbarPresenceChanged = false;
            onScrollbarPresenceChange({
                horizontal: this._horizontalScrollBarSize > 0,
                size: this.state.instanceProps.scrollbarSize,
                vertical: this._verticalScrollBarSize > 0
            });
        }
    };
    /**
     * Get the updated state after scrolling to
     * scrollLeft and scrollTop
     */
    VirtualGrid._getScrollToPositionStateUpdate = function (_a) {
        var prevState = _a.prevState, scrollLeft = _a.scrollLeft, scrollTop = _a.scrollTop;
        var newState = {
            scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
        };
        if (typeof scrollLeft === 'number' && scrollLeft >= 0) {
            newState.scrollDirectionHorizontal =
                scrollLeft > prevState.scrollLeft ? defaultOverscanIndicesGetter_1.SCROLL_DIRECTION_FORWARD : defaultOverscanIndicesGetter_1.SCROLL_DIRECTION_BACKWARD;
            newState.scrollLeft = scrollLeft;
        }
        if (typeof scrollTop === 'number' && scrollTop >= 0) {
            newState.scrollDirectionVertical =
                scrollTop > prevState.scrollTop ? defaultOverscanIndicesGetter_1.SCROLL_DIRECTION_FORWARD : defaultOverscanIndicesGetter_1.SCROLL_DIRECTION_BACKWARD;
            newState.scrollTop = scrollTop;
        }
        if ((typeof scrollLeft === 'number' && scrollLeft >= 0 && scrollLeft !== prevState.scrollLeft) ||
            (typeof scrollTop === 'number' && scrollTop >= 0 && scrollTop !== prevState.scrollTop)) {
            return newState;
        }
        return null;
    };
    /**
     * Scroll to the specified offset(s).
     * Useful for animating position changes.
     */
    VirtualGrid.prototype.scrollToPosition = function (_a) {
        var scrollLeft = _a.scrollLeft, scrollTop = _a.scrollTop;
        var stateUpdate = VirtualGrid._getScrollToPositionStateUpdate({
            prevState: this.state,
            scrollLeft: scrollLeft,
            scrollTop: scrollTop
        });
        if (stateUpdate) {
            stateUpdate.needToResetStyleCache = false;
            this.setState(stateUpdate);
        }
    };
    VirtualGrid._wrapSizeGetter = function (value) {
        return typeof value === 'function' ? value : function () { return value; };
    };
    VirtualGrid._getCalculatedScrollLeft = function (nextProps, prevState) {
        var columnCount = nextProps.columnCount, height = nextProps.height, scrollToAlignment = nextProps.scrollToAlignment, scrollToColumn = nextProps.scrollToColumn, width = nextProps.width;
        var scrollLeft = prevState.scrollLeft, instanceProps = prevState.instanceProps;
        if (columnCount > 0) {
            var finalColumn = columnCount - 1;
            var targetIndex = scrollToColumn < 0 ? finalColumn : Math.min(finalColumn, scrollToColumn);
            var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
            var scrollBarSize = instanceProps.scrollbarSizeMeasured && totalRowsHeight > height ? instanceProps.scrollbarSize : 0;
            return instanceProps.columnSizeAndPositionManager.getUpdatedOffsetForIndex({
                align: scrollToAlignment,
                containerSize: width - scrollBarSize,
                currentOffset: scrollLeft,
                targetIndex: targetIndex
            });
        }
        return 0;
    };
    VirtualGrid.prototype._getCalculatedScrollLeft = function (props, state) {
        if (props === void 0) { props = this.props; }
        if (state === void 0) { state = this.state; }
        return VirtualGrid._getCalculatedScrollLeft(props, state);
    };
    VirtualGrid._getScrollLeftForScrollToColumnStateUpdate = function (nextProps, prevState) {
        var scrollLeft = prevState.scrollLeft;
        var calculatedScrollLeft = VirtualGrid._getCalculatedScrollLeft(nextProps, prevState);
        if (typeof calculatedScrollLeft === 'number' && calculatedScrollLeft >= 0 && scrollLeft !== calculatedScrollLeft) {
            return VirtualGrid._getScrollToPositionStateUpdate({
                prevState: prevState,
                scrollLeft: calculatedScrollLeft,
                scrollTop: -1
            });
        }
        return null;
    };
    VirtualGrid.prototype._updateScrollLeftForScrollToColumn = function (props, state) {
        if (props === void 0) { props = this.props; }
        if (state === void 0) { state = this.state; }
        var stateUpdate = VirtualGrid._getScrollLeftForScrollToColumnStateUpdate(props, state);
        if (stateUpdate) {
            stateUpdate.needToResetStyleCache = false;
            this.setState(stateUpdate);
        }
    };
    VirtualGrid._getCalculatedScrollTop = function (nextProps, prevState) {
        var height = nextProps.height, rowCount = nextProps.rowCount, scrollToAlignment = nextProps.scrollToAlignment, scrollToRow = nextProps.scrollToRow, width = nextProps.width;
        var scrollTop = prevState.scrollTop, instanceProps = prevState.instanceProps;
        if (rowCount > 0) {
            var finalRow = rowCount - 1;
            var targetIndex = scrollToRow < 0 ? finalRow : Math.min(finalRow, scrollToRow);
            var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
            var scrollBarSize = instanceProps.scrollbarSizeMeasured && totalColumnsWidth > width ? instanceProps.scrollbarSize : 0;
            return instanceProps.rowSizeAndPositionManager.getUpdatedOffsetForIndex({
                align: scrollToAlignment,
                containerSize: height - scrollBarSize,
                currentOffset: scrollTop,
                targetIndex: targetIndex
            });
        }
        return 0;
    };
    VirtualGrid.prototype._getCalculatedScrollTop = function (props, state) {
        if (props === void 0) { props = this.props; }
        if (state === void 0) { state = this.state; }
        return VirtualGrid._getCalculatedScrollTop(props, state);
    };
    VirtualGrid.prototype._resetStyleCache = function () {
        var styleCache = this._styleCache;
        var cellCache = this._cellCache;
        var isScrollingOptOut = this.props.isScrollingOptOut;
        // Reset cell and style caches once scrolling stops.
        // This makes VirtualGrid simpler to use (since cells commonly change).
        // And it keeps the caches from growing too large.
        // Performance is most sensitive when a user is scrolling.
        // Don't clear visible cells from cellCache if isScrollingOptOut is specified.
        // This keeps the cellCache to a resonable size.
        this._cellCache = {};
        this._styleCache = {};
        // Copy over the visible cell styles so avoid unnecessary re-render.
        for (var rowIndex = this._rowStartIndex; rowIndex <= this._rowStopIndex; rowIndex++) {
            for (var columnIndex = this._columnStartIndex; columnIndex <= this._columnStopIndex; columnIndex++) {
                var key = rowIndex + "-" + columnIndex;
                this._styleCache[key] = styleCache[key];
                if (isScrollingOptOut) {
                    this._cellCache[key] = cellCache[key];
                }
            }
        }
    };
    VirtualGrid._getScrollTopForScrollToRowStateUpdate = function (nextProps, prevState) {
        var scrollTop = prevState.scrollTop;
        var calculatedScrollTop = VirtualGrid._getCalculatedScrollTop(nextProps, prevState);
        if (typeof calculatedScrollTop === 'number' && calculatedScrollTop >= 0 && scrollTop !== calculatedScrollTop) {
            return VirtualGrid._getScrollToPositionStateUpdate({
                prevState: prevState,
                scrollLeft: -1,
                scrollTop: calculatedScrollTop
            });
        }
        return null;
    };
    VirtualGrid.prototype._updateScrollTopForScrollToRow = function (props, state) {
        if (props === void 0) { props = this.props; }
        if (state === void 0) { state = this.state; }
        var stateUpdate = VirtualGrid._getScrollTopForScrollToRowStateUpdate(props, state);
        if (stateUpdate) {
            stateUpdate.needToResetStyleCache = false;
            this.setState(stateUpdate);
        }
    };
    VirtualGrid.defaultProps = {
        'aria-label': 'grid',
        'aria-readonly': true,
        "autoContainerWidth": false,
        "autoHeight": false,
        "autoWidth": false,
        "cellRangeRenderer": defaultCellRangeRenderer_1["default"],
        "containerRole": 'rowgroup',
        "containerStyle": {},
        "estimatedColumnSize": 100,
        "estimatedRowSize": 30,
        "getScrollbarSize": scrollbarSize_1["default"],
        "noContentRenderer": renderNull,
        "onScroll": function () { },
        "onScrollbarPresenceChange": function () { },
        "onSectionRendered": function () { },
        "overscanColumnCount": 0,
        "overscanIndicesGetter": defaultOverscanIndicesGetter_1["default"],
        "overscanRowCount": 10,
        "role": 'grid',
        "scrollingResetTimeInterval": exports.DEFAULT_SCROLLING_RESET_TIME_INTERVAL,
        "scrollToAlignment": 'auto',
        "scrollToColumn": -1,
        "scrollToRow": -1,
        "style": {},
        "tabIndex": 0,
        "isScrollingOptOut": false,
        "scrollContainerComponent": 'div',
        "innerScrollContainerComponent": 'div'
    };
    return VirtualGrid;
}(React.PureComponent));
react_lifecycles_compat_1.polyfill(VirtualGrid);
exports["default"] = VirtualGrid;
