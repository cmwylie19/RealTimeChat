(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "clsx", "./utils/calculateSizeAndPositionDataAndUpdateScrollOffset", "./utils/ScalingCellSizeAndPositionManager", "./utils/createCallbackMemoizer", "./defaultOverscanIndicesGetter", "./utils/updateScrollIndexHelper", "./defaultCellRangeRenderer", "dom-helpers/util/scrollbarSize", "react-lifecycles-compat", "./utils/requestAnimationTimeout"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("clsx"), require("./utils/calculateSizeAndPositionDataAndUpdateScrollOffset"), require("./utils/ScalingCellSizeAndPositionManager"), require("./utils/createCallbackMemoizer"), require("./defaultOverscanIndicesGetter"), require("./utils/updateScrollIndexHelper"), require("./defaultCellRangeRenderer"), require("dom-helpers/util/scrollbarSize"), require("react-lifecycles-compat"), require("./utils/requestAnimationTimeout"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.clsx, global.calculateSizeAndPositionDataAndUpdateScrollOffset, global.ScalingCellSizeAndPositionManager, global.createCallbackMemoizer, global.defaultOverscanIndicesGetter, global.updateScrollIndexHelper, global.defaultCellRangeRenderer, global.scrollbarSize, global.reactLifecyclesCompat, global.requestAnimationTimeout);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _clsx, _calculateSizeAndPositionDataAndUpdateScrollOffset, _ScalingCellSizeAndPositionManager, _createCallbackMemoizer, _defaultOverscanIndicesGetter, _updateScrollIndexHelper, _defaultCellRangeRenderer, _scrollbarSize, _reactLifecyclesCompat, _requestAnimationTimeout) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DEFAULT_SCROLLING_RESET_TIME_INTERVAL = undefined;

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var React = _interopRequireWildcard(_react);

  var _clsx2 = _interopRequireDefault(_clsx);

  var _calculateSizeAndPositionDataAndUpdateScrollOffset2 = _interopRequireDefault(_calculateSizeAndPositionDataAndUpdateScrollOffset);

  var _ScalingCellSizeAndPositionManager2 = _interopRequireDefault(_ScalingCellSizeAndPositionManager);

  var _createCallbackMemoizer2 = _interopRequireDefault(_createCallbackMemoizer);

  var _defaultOverscanIndicesGetter2 = _interopRequireDefault(_defaultOverscanIndicesGetter);

  var _updateScrollIndexHelper2 = _interopRequireDefault(_updateScrollIndexHelper);

  var _defaultCellRangeRenderer2 = _interopRequireDefault(_defaultCellRangeRenderer);

  var _scrollbarSize2 = _interopRequireDefault(_scrollbarSize);

  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();

    _getRequireWildcardCache = function () {
      return cache;
    };

    return cache;
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    var cache = _getRequireWildcardCache();

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};

    if (obj != null) {
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
  }

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(source, true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }
  /* eslint-disable */


  /**
   * Specifies the number of milliseconds during which to disable pointer events while a scroll is in progress.
   * This improves performance and makes scrolling smoother.
   */
  const DEFAULT_SCROLLING_RESET_TIME_INTERVAL = exports.DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150;
  /**
   * Controls whether the VirtualGrid updates the DOM element's scrollLeft/scrollTop based on the current state or just observes it.
   * This prevents VirtualGrid from interrupting mouse-wheel animations (see issue #2).
   */

  const SCROLL_POSITION_CHANGE_REASONS = {
    OBSERVED: 'observed',
    REQUESTED: 'requested'
  };

  const renderNull = () => null;
  /**
   * Renders tabular data with virtualization along the vertical and horizontal axes.
   * Row heights and column widths must be known ahead of time and specified as properties.
   */


  class VirtualGrid extends React.PureComponent {
    // Invokes onSectionRendered callback only when start/stop row or column indices change
    constructor(props) {
      super(props);

      _defineProperty(this, "_onVirtualGridRenderedMemoizer", (0, _createCallbackMemoizer2.default)());

      _defineProperty(this, "_onScrollMemoizer", (0, _createCallbackMemoizer2.default)(false));

      _defineProperty(this, "_deferredInvalidateColumnIndex", null);

      _defineProperty(this, "_deferredInvalidateRowIndex", null);

      _defineProperty(this, "_recomputeScrollLeftFlag", false);

      _defineProperty(this, "_recomputeScrollTopFlag", false);

      _defineProperty(this, "_horizontalScrollBarSize", 0);

      _defineProperty(this, "_verticalScrollBarSize", 0);

      _defineProperty(this, "_scrollbarPresenceChanged", false);

      _defineProperty(this, "_renderedColumnStartIndex", 0);

      _defineProperty(this, "_renderedColumnStopIndex", 0);

      _defineProperty(this, "_renderedRowStartIndex", 0);

      _defineProperty(this, "_renderedRowStopIndex", 0);

      _defineProperty(this, "_styleCache", {});

      _defineProperty(this, "_cellCache", {});

      _defineProperty(this, "_debounceScrollEndedCallback", () => {
        this._disablePointerEventsTimeoutId = null; // isScrolling is used to determine if we reset styleCache

        this.setState({
          isScrolling: false,
          needToResetStyleCache: false
        });
      });

      _defineProperty(this, "_invokeOnVirtualGridRenderedHelper", () => {
        const {
          onSectionRendered
        } = this.props;

        this._onVirtualGridRenderedMemoizer({
          callback: onSectionRendered,
          indices: {
            columnOverscanStartIndex: this._columnStartIndex,
            columnOverscanStopIndex: this._columnStopIndex,
            columnStartIndex: this._renderedColumnStartIndex,
            columnStopIndex: this._renderedColumnStopIndex,
            rowOverscanStartIndex: this._rowStartIndex,
            rowOverscanStopIndex: this._rowStopIndex,
            rowStartIndex: this._renderedRowStartIndex,
            rowStopIndex: this._renderedRowStopIndex
          }
        });
      });

      _defineProperty(this, "_setScrollingContainerRef", ref => {
        this._scrollingContainer = ref;
      });

      _defineProperty(this, "_onScroll", event => {
        // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
        // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
        // See issue #404 for more information.
        if (event.target === this._scrollingContainer) {
          this.handleScrollEvent(event.target);
        }
      });

      const columnSizeAndPositionManager = new _ScalingCellSizeAndPositionManager2.default({
        cellCount: props.columnCount,
        cellSizeGetter: params => VirtualGrid._wrapSizeGetter(props.columnWidth)(params),
        estimatedCellSize: VirtualGrid._getEstimatedColumnSize(props)
      });
      const rowSizeAndPositionManager = new _ScalingCellSizeAndPositionManager2.default({
        cellCount: props.rowCount,
        cellSizeGetter: params => VirtualGrid._wrapSizeGetter(props.rowHeight)(params),
        estimatedCellSize: VirtualGrid._getEstimatedRowSize(props)
      });
      this.state = {
        instanceProps: {
          columnSizeAndPositionManager,
          rowSizeAndPositionManager,
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
        scrollDirectionHorizontal: _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD,
        scrollDirectionVertical: _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD,
        scrollLeft: props.scrollLeft || 0,
        scrollTop: props.scrollTop || 0,
        scrollPositionChangeReason: null,
        needToResetStyleCache: false
      };

      if (props.scrollToRow > 0) {
        this._initialScrollTop = this._getCalculatedScrollTop(props, this.state);
      }

      if (props.scrollToColumn > 0) {
        this._initialScrollLeft = this._getCalculatedScrollLeft(props, this.state);
      }
    }
    /**
     * Gets offsets for a given cell and alignment.
     */


    getOffsetForCell({
      alignment = this.props.scrollToAlignment,
      columnIndex = this.props.scrollToColumn,
      rowIndex = this.props.scrollToRow
    } = {}) {
      const offsetProps = _objectSpread({}, this.props, {
        scrollToAlignment: alignment,
        scrollToColumn: columnIndex,
        scrollToRow: rowIndex
      });

      return {
        scrollLeft: this._getCalculatedScrollLeft(offsetProps),
        scrollTop: this._getCalculatedScrollTop(offsetProps)
      };
    }
    /**
     * Gets estimated total rows' height.
     */


    getTotalRowsHeight() {
      return this.state.instanceProps.rowSizeAndPositionManager.getTotalSize();
    }
    /**
     * Gets estimated total columns' width.
     */


    getTotalColumnsWidth() {
      return this.state.instanceProps.columnSizeAndPositionManager.getTotalSize();
    }
    /**
     * This method handles a scroll event originating from an external scroll control.
     * It's an advanced method and should probably not be used unless you're implementing a custom scroll-bar solution.
     */


    handleScrollEvent({
      scrollLeft: scrollLeftParam = 0,
      scrollTop: scrollTopParam = 0
    }) {
      // On iOS, we can arrive at negative offsets by swiping past the start.
      // To prevent flicker here, we make playing in the negative offset zone cause nothing to happen.
      if (scrollTopParam < 0) {
        return;
      } // Prevent pointer events from interrupting a smooth scroll


      this._debounceScrollEnded();

      const {
        autoHeight,
        autoWidth,
        height,
        width
      } = this.props;
      const {
        instanceProps
      } = this.state; // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
      // This causes a series of rapid renders that is slow for long lists.
      // We can avoid that by doing some simple bounds checking to ensure that scroll offsets never exceed their bounds.

      const {
        scrollbarSize
      } = instanceProps;
      const totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
      const totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
      const scrollLeft = Math.min(Math.max(0, totalColumnsWidth - width + scrollbarSize), scrollLeftParam);
      const scrollTop = Math.min(Math.max(0, totalRowsHeight - height + scrollbarSize), scrollTopParam); // Certain devices (like Apple touchpad) rapid-fire duplicate events.
      // Don't force a re-render if this is the case.
      // The mouse may move faster then the animation frame does.
      // Use requestAnimationFrame to avoid over-updating.

      if (this.state.scrollLeft !== scrollLeft || this.state.scrollTop !== scrollTop) {
        // Track scrolling direction so we can more efficiently overscan rows to reduce empty space around the edges while scrolling.
        // Don't change direction for an axis unless scroll offset has changed.
        const scrollDirectionHorizontal = scrollLeft !== this.state.scrollLeft ? scrollLeft > this.state.scrollLeft ? _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD : this.state.scrollDirectionHorizontal;
        const scrollDirectionVertical = scrollTop !== this.state.scrollTop ? scrollTop > this.state.scrollTop ? _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD : this.state.scrollDirectionVertical;
        const newState = {
          isScrolling: true,
          scrollDirectionHorizontal,
          scrollDirectionVertical,
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
        scrollLeft,
        scrollTop,
        totalColumnsWidth,
        totalRowsHeight
      });
    }
    /**
     * Invalidate VirtualGrid size and recompute visible cells.
     * This is a deferred wrapper for recomputeVirtualGridSize().
     * It sets a flag to be evaluated on cDM/cDU to avoid unnecessary renders.
     * This method is intended for advanced use-cases like CellMeasurer.
     */
    // @TODO (bvaughn) Add automated test coverage for this.


    invalidateCellSizeAfterRender({
      columnIndex,
      rowIndex
    }) {
      this._deferredInvalidateColumnIndex = typeof this._deferredInvalidateColumnIndex === 'number' ? Math.min(this._deferredInvalidateColumnIndex, columnIndex) : columnIndex;
      this._deferredInvalidateRowIndex = typeof this._deferredInvalidateRowIndex === 'number' ? Math.min(this._deferredInvalidateRowIndex, rowIndex) : rowIndex;
    }
    /**
     * Pre-measure all columns and rows in a VirtualGrid.
     * Typically cells are only measured as needed and estimated sizes are used for cells that have not yet been measured.
     * This method ensures that the next call to getTotalSize() returns an exact size (as opposed to just an estimated one).
     */


    measureAllCells() {
      const {
        columnCount,
        rowCount
      } = this.props;
      const {
        instanceProps
      } = this.state;
      instanceProps.columnSizeAndPositionManager.getSizeAndPositionOfCell(columnCount - 1);
      instanceProps.rowSizeAndPositionManager.getSizeAndPositionOfCell(rowCount - 1);
    }
    /**
     * Forced recompute of row heights and column widths.
     * This function should be called if dynamic column or row sizes have changed but nothing else has.
     * Since VirtualGrid only receives :columnCount and :rowCount it has no way of detecting when the underlying data changes.
     */


    recomputeVirtualGridSize({
      columnIndex = 0,
      rowIndex = 0
    } = {}) {
      const {
        scrollToColumn,
        scrollToRow
      } = this.props;
      const {
        instanceProps
      } = this.state;
      instanceProps.columnSizeAndPositionManager.resetCell(columnIndex);
      instanceProps.rowSizeAndPositionManager.resetCell(rowIndex); // Cell sizes may be determined by a function property.
      // In this case the cDU handler can't know if they changed.
      // Store this flag to let the next cDU pass know it needs to recompute the scroll offset.

      this._recomputeScrollLeftFlag = scrollToColumn >= 0 && (this.state.scrollDirectionHorizontal === _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD ? columnIndex <= scrollToColumn : columnIndex >= scrollToColumn);
      this._recomputeScrollTopFlag = scrollToRow >= 0 && (this.state.scrollDirectionVertical === _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD ? rowIndex <= scrollToRow : rowIndex >= scrollToRow); // Clear cell cache in case we are scrolling;
      // Invalid row heights likely mean invalid cached content as well.

      this._styleCache = {};
      this._cellCache = {};
      this.forceUpdate();
    }
    /**
     * Ensure column and row are visible.
     */


    scrollToCell({
      columnIndex,
      rowIndex
    }) {
      const {
        columnCount
      } = this.props;
      const {
        props
      } = this; // Don't adjust scroll offset for single-column grids (eg List, Table).
      // This can cause a funky scroll offset because of the vertical scrollbar width.

      if (columnCount > 1 && columnIndex !== undefined) {
        this._updateScrollLeftForScrollToColumn(_objectSpread({}, props, {
          scrollToColumn: columnIndex
        }));
      }

      if (rowIndex !== undefined) {
        this._updateScrollTopForScrollToRow(_objectSpread({}, props, {
          scrollToRow: rowIndex
        }));
      }
    }

    componentDidMount() {
      const {
        getScrollbarSize,
        height,
        scrollLeft,
        scrollToColumn,
        scrollTop,
        scrollToRow,
        width
      } = this.props;
      const {
        instanceProps
      } = this.state; // Reset initial offsets to be ignored in browser

      this._initialScrollTop = 0;
      this._initialScrollLeft = 0; // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
      // We must do this at the start of the method as we may calculate and update scroll position below.

      this._handleInvalidatedVirtualGridSize(); // If this component was first rendered server-side, scrollbar size will be undefined.
      // In that event we need to remeasure.


      if (!instanceProps.scrollbarSizeMeasured) {
        this.setState(prevState => {
          const stateUpdate = _objectSpread({}, prevState, {
            needToResetStyleCache: false
          });

          stateUpdate.instanceProps.scrollbarSize = getScrollbarSize();
          stateUpdate.instanceProps.scrollbarSizeMeasured = true;
          return stateUpdate;
        });
      }

      if (typeof scrollLeft === 'number' && scrollLeft >= 0 || typeof scrollTop === 'number' && scrollTop >= 0) {
        const stateUpdate = VirtualGrid._getScrollToPositionStateUpdate({
          prevState: this.state,
          scrollLeft,
          scrollTop
        });

        if (stateUpdate) {
          stateUpdate.needToResetStyleCache = false;
          this.setState(stateUpdate);
        }
      } // refs don't work in `react-test-renderer`


      if (this._scrollingContainer) {
        // setting the ref's scrollLeft and scrollTop.
        // Somehow in MultiVirtualGrid the main grid doesn't trigger a update on mount.
        if (this._scrollingContainer.scrollLeft !== this.state.scrollLeft) {
          this._scrollingContainer.scrollLeft = this.state.scrollLeft;
        }

        if (this._scrollingContainer.scrollTop !== this.state.scrollTop) {
          this._scrollingContainer.scrollTop = this.state.scrollTop;
        }
      } // Don't update scroll offset if the size is 0; we don't render any cells in this case.
      // Setting a state may cause us to later thing we've updated the offce when we haven't.


      const sizeIsBiggerThanZero = height > 0 && width > 0;

      if (scrollToColumn >= 0 && sizeIsBiggerThanZero) {
        this._updateScrollLeftForScrollToColumn();
      }

      if (scrollToRow >= 0 && sizeIsBiggerThanZero) {
        this._updateScrollTopForScrollToRow();
      } // Update onRowsRendered callback


      this._invokeOnVirtualGridRenderedHelper(); // Initialize onScroll callback


      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft || 0,
        scrollTop: scrollTop || 0,
        totalColumnsWidth: instanceProps.columnSizeAndPositionManager.getTotalSize(),
        totalRowsHeight: instanceProps.rowSizeAndPositionManager.getTotalSize()
      });

      this._maybeCallOnScrollbarPresenceChange();
    }
    /**
     * @private
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) New scroll-to-cell props have been set
     */


    componentDidUpdate(prevProps, prevState) {
      const {
        autoHeight,
        autoWidth,
        columnCount,
        height,
        rowCount,
        scrollToAlignment,
        scrollToColumn,
        scrollToRow,
        width
      } = this.props;
      const {
        scrollLeft,
        scrollPositionChangeReason,
        scrollTop,
        instanceProps
      } = this.state; // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
      // We must do this at the start of the method as we may calculate and update scroll position below.

      this._handleInvalidatedVirtualGridSize(); // Handle edge case where column or row count has only just increased over 0.
      // In this case we may have to restore a previously-specified scroll offset.
      // For more info see bvaughn/react-virtualized/issues/218


      const columnOrRowCountJustIncreasedFromZero = columnCount > 0 && prevProps.columnCount === 0 || rowCount > 0 && prevProps.rowCount === 0; // Make sure requested changes to :scrollLeft or :scrollTop get applied.
      // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
      // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
      // So we only set these when we require an adjustment of the scroll position.
      // See issue #2 for more information.

      if (scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
        // @TRICKY :autoHeight and :autoWidth properties instructs VirtualGrid to leave :scrollTop and :scrollLeft management to an external HOC (eg WindowScroller).
        // In this case we should avoid checking scrollingContainer.scrollTop and scrollingContainer.scrollLeft since it forces layout/flow.
        if (!autoWidth && scrollLeft >= 0 && (scrollLeft !== this._scrollingContainer.scrollLeft || columnOrRowCountJustIncreasedFromZero)) {
          this._scrollingContainer.scrollLeft = scrollLeft;
        }

        if (!autoHeight && scrollTop >= 0 && (scrollTop !== this._scrollingContainer.scrollTop || columnOrRowCountJustIncreasedFromZero)) {
          this._scrollingContainer.scrollTop = scrollTop;
        }
      } // Special case where the previous size was 0:
      // In this case we don't show any windowed cells at all.
      // So we should always recalculate offset afterwards.


      const sizeJustIncreasedFromZero = (prevProps.width === 0 || prevProps.height === 0) && height > 0 && width > 0; // Update scroll offsets if the current :scrollToColumn or :scrollToRow values requires it
      // @TODO Do we also need this check or can the one in componentWillUpdate() suffice?

      if (this._recomputeScrollLeftFlag) {
        this._recomputeScrollLeftFlag = false;

        this._updateScrollLeftForScrollToColumn(this.props);
      } else {
        (0, _updateScrollIndexHelper2.default)({
          cellSizeAndPositionManager: instanceProps.columnSizeAndPositionManager,
          previousCellsCount: prevProps.columnCount,
          previousCellSize: prevProps.columnWidth,
          previousScrollToAlignment: prevProps.scrollToAlignment,
          previousScrollToIndex: prevProps.scrollToColumn,
          previousSize: prevProps.width,
          scrollOffset: scrollLeft,
          scrollToAlignment,
          scrollToIndex: scrollToColumn,
          size: width,
          sizeJustIncreasedFromZero,
          updateScrollIndexCallback: () => this._updateScrollLeftForScrollToColumn(this.props)
        });
      }

      if (this._recomputeScrollTopFlag) {
        this._recomputeScrollTopFlag = false;

        this._updateScrollTopForScrollToRow(this.props);
      } else {
        (0, _updateScrollIndexHelper2.default)({
          cellSizeAndPositionManager: instanceProps.rowSizeAndPositionManager,
          previousCellsCount: prevProps.rowCount,
          previousCellSize: prevProps.rowHeight,
          previousScrollToAlignment: prevProps.scrollToAlignment,
          previousScrollToIndex: prevProps.scrollToRow,
          previousSize: prevProps.height,
          scrollOffset: scrollTop,
          scrollToAlignment,
          scrollToIndex: scrollToRow,
          size: height,
          sizeJustIncreasedFromZero,
          updateScrollIndexCallback: () => this._updateScrollTopForScrollToRow(this.props)
        });
      } // Update onRowsRendered callback if start/stop indices have changed


      this._invokeOnVirtualGridRenderedHelper(); // Changes to :scrollLeft or :scrollTop should also notify :onScroll listeners


      if (scrollLeft !== prevState.scrollLeft || scrollTop !== prevState.scrollTop) {
        const totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
        const totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();

        this._invokeOnScrollMemoizer({
          scrollLeft,
          scrollTop,
          totalColumnsWidth,
          totalRowsHeight
        });
      }

      this._maybeCallOnScrollbarPresenceChange();
    }

    componentWillUnmount() {
      if (this._disablePointerEventsTimeoutId) {
        (0, _requestAnimationTimeout.cancelAnimationTimeout)(this._disablePointerEventsTimeoutId);
      }
    }
    /**
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) Empty content (0 rows or columns)
     * 2) New scroll props overriding the current state
     * 3) Cells-count or cells-size has changed, making previous scroll offsets invalid
     */


    static getDerivedStateFromProps(nextProps, prevState) {
      const newState = {};
      const {
        instanceProps
      } = prevState;

      if (nextProps.columnCount === 0 && prevState.scrollLeft !== 0 || nextProps.rowCount === 0 && prevState.scrollTop !== 0) {
        newState.scrollLeft = 0;
        newState.scrollTop = 0; // only use scroll{Left,Top} from props if scrollTo{Column,Row} isn't specified
        // scrollTo{Column,Row} should override scroll{Left,Top}
      } else if (nextProps.scrollLeft !== instanceProps.prevScrollLeft && nextProps.scrollToColumn < 0 || nextProps.scrollTop !== instanceProps.prevScrollTop && nextProps.scrollToRow < 0) {
        Object.assign(newState, VirtualGrid._getScrollToPositionStateUpdate({
          prevState,
          scrollLeft: nextProps.scrollLeft,
          scrollTop: nextProps.scrollTop
        }));
      } // Initially we should not clearStyleCache


      newState.needToResetStyleCache = false;

      if (nextProps.columnWidth !== instanceProps.prevColumnWidth || nextProps.rowHeight !== instanceProps.prevRowHeight) {
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
      } // If scrolling is controlled outside this component, clear cache when scrolling stops


      if (nextProps.autoHeight && nextProps.isScrolling === false && instanceProps.prevIsScrolling === true) {
        Object.assign(newState, {
          isScrolling: false
        });
      }

      let maybeStateA;
      let maybeStateB;
      (0, _calculateSizeAndPositionDataAndUpdateScrollOffset2.default)({
        cellCount: instanceProps.prevColumnCount,
        cellSize: typeof instanceProps.prevColumnWidth === 'number' ? instanceProps.prevColumnWidth : null,
        computeMetadataCallback: () => instanceProps.columnSizeAndPositionManager.resetCell(0),
        computeMetadataCallbackProps: nextProps,
        nextCellsCount: nextProps.columnCount,
        nextCellSize: typeof nextProps.columnWidth === 'number' ? nextProps.columnWidth : null,
        nextScrollToIndex: nextProps.scrollToColumn,
        scrollToIndex: instanceProps.prevScrollToColumn,
        updateScrollOffsetForScrollToIndex: () => {
          maybeStateA = VirtualGrid._getScrollLeftForScrollToColumnStateUpdate(nextProps, prevState);
        }
      });
      (0, _calculateSizeAndPositionDataAndUpdateScrollOffset2.default)({
        cellCount: instanceProps.prevRowCount,
        cellSize: typeof instanceProps.prevRowHeight === 'number' ? instanceProps.prevRowHeight : null,
        computeMetadataCallback: () => instanceProps.rowSizeAndPositionManager.resetCell(0),
        computeMetadataCallbackProps: nextProps,
        nextCellsCount: nextProps.rowCount,
        nextCellSize: typeof nextProps.rowHeight === 'number' ? nextProps.rowHeight : null,
        nextScrollToIndex: nextProps.scrollToRow,
        scrollToIndex: instanceProps.prevScrollToRow,
        updateScrollOffsetForScrollToIndex: () => {
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
      instanceProps.prevScrollTop = nextProps.scrollTop; // getting scrollBarSize (moved from componentWillMount)

      instanceProps.scrollbarSize = nextProps.getScrollbarSize();

      if (instanceProps.scrollbarSize === undefined) {
        instanceProps.scrollbarSizeMeasured = false;
        instanceProps.scrollbarSize = 0;
      } else {
        instanceProps.scrollbarSizeMeasured = true;
      }

      newState.instanceProps = instanceProps;
      return _objectSpread({}, newState, {}, maybeStateA, {}, maybeStateB);
    }

    render() {
      const {
        autoContainerWidth,
        autoHeight,
        autoWidth,
        className,
        containerProps,
        containerRole,
        containerStyle,
        height,
        id,
        noContentRenderer,
        role,
        style,
        tabIndex,
        width,
        scrollContainerComponent,
        innerScrollContainerComponent
      } = this.props;
      const {
        instanceProps,
        needToResetStyleCache
      } = this.state;

      const isScrolling = this._isScrolling();

      const gridStyle = {
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
      } // calculate _styleCache here
      // if state.isScrolling (not from _isScrolling) then reset


      if (!this.state.isScrolling) {
        this._resetStyleCache();
      } // calculate children to render here


      this._calculateChildrenToRender(this.props, this.state);

      const totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
      const totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize(); // Force browser to hide scrollbars when we know they aren't necessary.
      // Otherwise once scrollbars appear they may not disappear again.
      // For more info see issue #116

      const verticalScrollBarSize = totalRowsHeight > height ? instanceProps.scrollbarSize : 0;
      const horizontalScrollBarSize = totalColumnsWidth > width ? instanceProps.scrollbarSize : 0;

      if (horizontalScrollBarSize !== this._horizontalScrollBarSize || verticalScrollBarSize !== this._verticalScrollBarSize) {
        this._horizontalScrollBarSize = horizontalScrollBarSize;
        this._verticalScrollBarSize = verticalScrollBarSize;
        this._scrollbarPresenceChanged = true;
      } // Also explicitly init styles to 'auto' if scrollbars are required.
      // This works around an obscure edge case where external CSS styles have not yet been loaded,
      // But an initial scroll index of offset is set as an external prop.
      // Without this style, VirtualGrid would render the correct range of cells but would NOT update its internal offset.
      // This was originally reported via clauderic/react-infinite-calendar/issues/23


      gridStyle.overflowX = totalColumnsWidth + verticalScrollBarSize <= width ? 'hidden' : 'auto';
      gridStyle.overflowY = totalRowsHeight + horizontalScrollBarSize <= height ? 'hidden' : 'auto';
      const childrenToDisplay = this._childrenToDisplay;
      const showNoContentRenderer = childrenToDisplay.length === 0 && height > 0 && width > 0;

      const scrollContainerProps = _objectSpread({}, containerProps, {
        "ref": this._setScrollingContainerRef,
        'aria-label': this.props['aria-label'],
        'aria-readonly': this.props['aria-readonly'],
        "className": (0, _clsx2.default)('ReactVirtualized__VirtualGrid', className),
        id,
        "onScroll": this._onScroll,
        role,
        "style": _objectSpread({}, gridStyle, {}, style),
        tabIndex
      });

      let innerScrollContainer = null;

      if (childrenToDisplay.length > 0) {
        const innerScrollContainerProps = {
          className: 'ReactVirtualized__VirtualGrid__innerScrollContainer',
          key: 'ReactVirtualized__VirtualGrid__innerScrollContainer',
          role: containerRole,
          style: _objectSpread({
            width: autoContainerWidth ? 'auto' : totalColumnsWidth,
            height: totalRowsHeight,
            maxWidth: totalColumnsWidth,
            maxHeight: totalRowsHeight,
            overflow: 'hidden',
            pointerEvents: isScrolling ? 'none' : '',
            position: 'relative'
          }, containerStyle)
        };
        innerScrollContainer = React.createElement(innerScrollContainerComponent, innerScrollContainerProps, childrenToDisplay);
      }

      return React.createElement(scrollContainerComponent, scrollContainerProps, [innerScrollContainer, showNoContentRenderer && noContentRenderer()]);
    }
    /* ---------------------------- Helper methods ---------------------------- */


    _calculateChildrenToRender(props = this.props, state = this.state) {
      const {
        cellRenderer,
        cellRangeRenderer,
        columnCount,
        deferredMeasurementCache,
        height,
        overscanColumnCount,
        overscanIndicesGetter,
        overscanRowCount,
        rowCount,
        width,
        isScrollingOptOut
      } = props;
      const {
        scrollDirectionHorizontal,
        scrollDirectionVertical,
        instanceProps
      } = state;
      const scrollTop = this._initialScrollTop > 0 ? this._initialScrollTop : state.scrollTop;
      const scrollLeft = this._initialScrollLeft > 0 ? this._initialScrollLeft : state.scrollLeft;

      const isScrolling = this._isScrolling(props, state);

      this._childrenToDisplay = []; // Render only enough columns and rows to cover the visible area of the grid.

      if (height > 0 && width > 0) {
        const visibleColumnIndices = instanceProps.columnSizeAndPositionManager.getVisibleCellRange({
          containerSize: width,
          offset: scrollLeft
        });
        const visibleRowIndices = instanceProps.rowSizeAndPositionManager.getVisibleCellRange({
          containerSize: height,
          offset: scrollTop
        });
        const horizontalOffsetAdjustment = instanceProps.columnSizeAndPositionManager.getOffsetAdjustment({
          containerSize: width,
          offset: scrollLeft
        });
        const verticalOffsetAdjustment = instanceProps.rowSizeAndPositionManager.getOffsetAdjustment({
          containerSize: height,
          offset: scrollTop
        }); // Store for _invokeOnVirtualGridRenderedHelper()

        this._renderedColumnStartIndex = visibleColumnIndices.start;
        this._renderedColumnStopIndex = visibleColumnIndices.stop;
        this._renderedRowStartIndex = visibleRowIndices.start;
        this._renderedRowStopIndex = visibleRowIndices.stop;
        const overscanColumnIndices = overscanIndicesGetter({
          direction: 'horizontal',
          cellCount: columnCount,
          overscanCellsCount: overscanColumnCount,
          scrollDirection: scrollDirectionHorizontal,
          startIndex: typeof visibleColumnIndices.start === 'number' ? visibleColumnIndices.start : 0,
          stopIndex: typeof visibleColumnIndices.stop === 'number' ? visibleColumnIndices.stop : -1
        });
        const overscanRowIndices = overscanIndicesGetter({
          direction: 'vertical',
          cellCount: rowCount,
          overscanCellsCount: overscanRowCount,
          scrollDirection: scrollDirectionVertical,
          startIndex: typeof visibleRowIndices.start === 'number' ? visibleRowIndices.start : 0,
          stopIndex: typeof visibleRowIndices.stop === 'number' ? visibleRowIndices.stop : -1
        }); // Store for _invokeOnVirtualGridRenderedHelper()

        let columnStartIndex = overscanColumnIndices.overscanStartIndex;
        let columnStopIndex = overscanColumnIndices.overscanStopIndex;
        let rowStartIndex = overscanRowIndices.overscanStartIndex;
        let rowStopIndex = overscanRowIndices.overscanStopIndex; // Advanced use-cases (eg CellMeasurer) require batched measurements to determine accurate sizes.

        if (deferredMeasurementCache) {
          // If rows have a dynamic height, scan the rows we are about to render.
          // If any have not yet been measured, then we need to render all columns initially,
          // Because the height of the row is equal to the tallest cell within that row,
          // (And so we can't know the height without measuring all column-cells first).
          if (!deferredMeasurementCache.hasFixedHeight()) {
            for (let rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++) {
              if (!deferredMeasurementCache.has(rowIndex, 0)) {
                columnStartIndex = 0;
                columnStopIndex = columnCount - 1;
                break;
              }
            }
          } // If columns have a dynamic width, scan the columns we are about to render.
          // If any have not yet been measured, then we need to render all rows initially,
          // Because the width of the column is equal to the widest cell within that column,
          // (And so we can't know the width without measuring all row-cells first).


          if (!deferredMeasurementCache.hasFixedWidth()) {
            for (let columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++) {
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
          cellRenderer,
          columnSizeAndPositionManager: instanceProps.columnSizeAndPositionManager,
          columnStartIndex,
          columnStopIndex,
          deferredMeasurementCache,
          horizontalOffsetAdjustment,
          isScrolling,
          isScrollingOptOut,
          parent: this,
          rowSizeAndPositionManager: instanceProps.rowSizeAndPositionManager,
          rowStartIndex,
          rowStopIndex,
          scrollLeft,
          scrollTop,
          styleCache: this._styleCache,
          verticalOffsetAdjustment,
          visibleColumnIndices,
          visibleRowIndices
        }); // update the indices

        this._columnStartIndex = columnStartIndex;
        this._columnStopIndex = columnStopIndex;
        this._rowStartIndex = rowStartIndex;
        this._rowStopIndex = rowStopIndex;
      }
    }
    /**
     * Sets an :isScrolling flag for a small window of time.
     * This flag is used to disable pointer events on the scrollable portion of the VirtualGrid.
     * This prevents jerky/stuttery mouse-wheel scrolling.
     */


    _debounceScrollEnded() {
      const {
        scrollingResetTimeInterval
      } = this.props;

      if (this._disablePointerEventsTimeoutId) {
        (0, _requestAnimationTimeout.cancelAnimationTimeout)(this._disablePointerEventsTimeoutId);
      }

      this._disablePointerEventsTimeoutId = (0, _requestAnimationTimeout.requestAnimationTimeout)(this._debounceScrollEndedCallback, scrollingResetTimeInterval);
    }

    static _getEstimatedColumnSize(props) {
      return typeof props.columnWidth === 'number' ? props.columnWidth : props.estimatedColumnSize;
    }

    static _getEstimatedRowSize(props) {
      return typeof props.rowHeight === 'number' ? props.rowHeight : props.estimatedRowSize;
    }
    /**
     * Check for batched CellMeasurer size invalidations.
     * This will occur the first time one or more previously unmeasured cells are rendered.
     */


    _handleInvalidatedVirtualGridSize() {
      if (typeof this._deferredInvalidateColumnIndex === 'number' && typeof this._deferredInvalidateRowIndex === 'number') {
        const columnIndex = this._deferredInvalidateColumnIndex;
        const rowIndex = this._deferredInvalidateRowIndex;
        this._deferredInvalidateColumnIndex = null;
        this._deferredInvalidateRowIndex = null;
        this.recomputeVirtualGridSize({
          columnIndex,
          rowIndex
        });
      }
    }

    _invokeOnScrollMemoizer({
      scrollLeft,
      scrollTop,
      totalColumnsWidth,
      totalRowsHeight
    }) {
      this._onScrollMemoizer({
        callback: ({
          scrollLeft,
          scrollTop
        }) => {
          const {
            height,
            onScroll,
            width
          } = this.props;
          onScroll({
            clientHeight: height,
            clientWidth: width,
            scrollHeight: totalRowsHeight,
            scrollLeft,
            scrollTop,
            scrollWidth: totalColumnsWidth
          });
        },
        indices: {
          scrollLeft,
          scrollTop
        }
      });
    }

    _isScrolling(props = this.props, state = this.state) {
      // If isScrolling is defined in props, use it to override the value in state
      // This is a performance optimization for WindowScroller + VirtualGrid
      return Object.hasOwnProperty.call(props, 'isScrolling') ? Boolean(props.isScrolling) : Boolean(state.isScrolling);
    }

    _maybeCallOnScrollbarPresenceChange() {
      if (this._scrollbarPresenceChanged) {
        const {
          onScrollbarPresenceChange
        } = this.props;
        this._scrollbarPresenceChanged = false;
        onScrollbarPresenceChange({
          horizontal: this._horizontalScrollBarSize > 0,
          size: this.state.instanceProps.scrollbarSize,
          vertical: this._verticalScrollBarSize > 0
        });
      }
    }
    /**
     * Get the updated state after scrolling to
     * scrollLeft and scrollTop
     */


    static _getScrollToPositionStateUpdate({
      prevState,
      scrollLeft,
      scrollTop
    }) {
      const newState = {
        scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
      };

      if (typeof scrollLeft === 'number' && scrollLeft >= 0) {
        newState.scrollDirectionHorizontal = scrollLeft > prevState.scrollLeft ? _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD;
        newState.scrollLeft = scrollLeft;
      }

      if (typeof scrollTop === 'number' && scrollTop >= 0) {
        newState.scrollDirectionVertical = scrollTop > prevState.scrollTop ? _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD;
        newState.scrollTop = scrollTop;
      }

      if (typeof scrollLeft === 'number' && scrollLeft >= 0 && scrollLeft !== prevState.scrollLeft || typeof scrollTop === 'number' && scrollTop >= 0 && scrollTop !== prevState.scrollTop) {
        return newState;
      }

      return null;
    }
    /**
     * Scroll to the specified offset(s).
     * Useful for animating position changes.
     */


    scrollToPosition({
      scrollLeft,
      scrollTop
    }) {
      const stateUpdate = VirtualGrid._getScrollToPositionStateUpdate({
        prevState: this.state,
        scrollLeft,
        scrollTop
      });

      if (stateUpdate) {
        stateUpdate.needToResetStyleCache = false;
        this.setState(stateUpdate);
      }
    }

    static _wrapSizeGetter(value) {
      return typeof value === 'function' ? value : () => value;
    }

    static _getCalculatedScrollLeft(nextProps, prevState) {
      const {
        columnCount,
        height,
        scrollToAlignment,
        scrollToColumn,
        width
      } = nextProps;
      const {
        scrollLeft,
        instanceProps
      } = prevState;

      if (columnCount > 0) {
        const finalColumn = columnCount - 1;
        const targetIndex = scrollToColumn < 0 ? finalColumn : Math.min(finalColumn, scrollToColumn);
        const totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
        const scrollBarSize = instanceProps.scrollbarSizeMeasured && totalRowsHeight > height ? instanceProps.scrollbarSize : 0;
        return instanceProps.columnSizeAndPositionManager.getUpdatedOffsetForIndex({
          align: scrollToAlignment,
          containerSize: width - scrollBarSize,
          currentOffset: scrollLeft,
          targetIndex
        });
      }

      return 0;
    }

    _getCalculatedScrollLeft(props = this.props, state = this.state) {
      return VirtualGrid._getCalculatedScrollLeft(props, state);
    }

    static _getScrollLeftForScrollToColumnStateUpdate(nextProps, prevState) {
      const {
        scrollLeft
      } = prevState;

      const calculatedScrollLeft = VirtualGrid._getCalculatedScrollLeft(nextProps, prevState);

      if (typeof calculatedScrollLeft === 'number' && calculatedScrollLeft >= 0 && scrollLeft !== calculatedScrollLeft) {
        return VirtualGrid._getScrollToPositionStateUpdate({
          prevState,
          scrollLeft: calculatedScrollLeft,
          scrollTop: -1
        });
      }

      return null;
    }

    _updateScrollLeftForScrollToColumn(props = this.props, state = this.state) {
      const stateUpdate = VirtualGrid._getScrollLeftForScrollToColumnStateUpdate(props, state);

      if (stateUpdate) {
        stateUpdate.needToResetStyleCache = false;
        this.setState(stateUpdate);
      }
    }

    static _getCalculatedScrollTop(nextProps, prevState) {
      const {
        height,
        rowCount,
        scrollToAlignment,
        scrollToRow,
        width
      } = nextProps;
      const {
        scrollTop,
        instanceProps
      } = prevState;

      if (rowCount > 0) {
        const finalRow = rowCount - 1;
        const targetIndex = scrollToRow < 0 ? finalRow : Math.min(finalRow, scrollToRow);
        const totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
        const scrollBarSize = instanceProps.scrollbarSizeMeasured && totalColumnsWidth > width ? instanceProps.scrollbarSize : 0;
        return instanceProps.rowSizeAndPositionManager.getUpdatedOffsetForIndex({
          align: scrollToAlignment,
          containerSize: height - scrollBarSize,
          currentOffset: scrollTop,
          targetIndex
        });
      }

      return 0;
    }

    _getCalculatedScrollTop(props = this.props, state = this.state) {
      return VirtualGrid._getCalculatedScrollTop(props, state);
    }

    _resetStyleCache() {
      const styleCache = this._styleCache;
      const cellCache = this._cellCache;
      const {
        isScrollingOptOut
      } = this.props; // Reset cell and style caches once scrolling stops.
      // This makes VirtualGrid simpler to use (since cells commonly change).
      // And it keeps the caches from growing too large.
      // Performance is most sensitive when a user is scrolling.
      // Don't clear visible cells from cellCache if isScrollingOptOut is specified.
      // This keeps the cellCache to a resonable size.

      this._cellCache = {};
      this._styleCache = {}; // Copy over the visible cell styles so avoid unnecessary re-render.

      for (let rowIndex = this._rowStartIndex; rowIndex <= this._rowStopIndex; rowIndex++) {
        for (let columnIndex = this._columnStartIndex; columnIndex <= this._columnStopIndex; columnIndex++) {
          const key = `${rowIndex}-${columnIndex}`;
          this._styleCache[key] = styleCache[key];

          if (isScrollingOptOut) {
            this._cellCache[key] = cellCache[key];
          }
        }
      }
    }

    static _getScrollTopForScrollToRowStateUpdate(nextProps, prevState) {
      const {
        scrollTop
      } = prevState;

      const calculatedScrollTop = VirtualGrid._getCalculatedScrollTop(nextProps, prevState);

      if (typeof calculatedScrollTop === 'number' && calculatedScrollTop >= 0 && scrollTop !== calculatedScrollTop) {
        return VirtualGrid._getScrollToPositionStateUpdate({
          prevState,
          scrollLeft: -1,
          scrollTop: calculatedScrollTop
        });
      }

      return null;
    }

    _updateScrollTopForScrollToRow(props = this.props, state = this.state) {
      const stateUpdate = VirtualGrid._getScrollTopForScrollToRowStateUpdate(props, state);

      if (stateUpdate) {
        stateUpdate.needToResetStyleCache = false;
        this.setState(stateUpdate);
      }
    }

  }

  _defineProperty(VirtualGrid, "propTypes", {
    'aria-label': _propTypes2.default.string,
    'aria-readonly': _propTypes2.default.bool,
    autoContainerWidth: _propTypes2.default.bool.isRequired,
    autoHeight: _propTypes2.default.bool.isRequired,
    autoWidth: _propTypes2.default.bool.isRequired,
    cellRenderer: _propTypes2.default.any.isRequired,
    cellRangeRenderer: _propTypes2.default.any.isRequired,
    className: _propTypes2.default.string,
    columnCount: _propTypes2.default.number.isRequired,
    columnWidth: _propTypes2.default.any.isRequired,
    containerProps: _propTypes2.default.any,
    containerRole: _propTypes2.default.string.isRequired,
    containerStyle: _propTypes2.default.any.isRequired,
    deferredMeasurementCache: _propTypes2.default.any,
    estimatedColumnSize: _propTypes2.default.number.isRequired,
    estimatedRowSize: _propTypes2.default.number.isRequired,
    getScrollbarSize: _propTypes2.default.func.isRequired,
    height: _propTypes2.default.number.isRequired,
    id: _propTypes2.default.string,
    isScrolling: _propTypes2.default.bool,
    isScrollingOptOut: _propTypes2.default.bool.isRequired,
    noContentRenderer: _propTypes2.default.any.isRequired,
    onScroll: _propTypes2.default.func.isRequired,
    onScrollbarPresenceChange: _propTypes2.default.func.isRequired,
    onSectionRendered: _propTypes2.default.func.isRequired
  });

  _defineProperty(VirtualGrid, "defaultProps", {
    'aria-label': 'grid',
    'aria-readonly': true,
    "autoContainerWidth": false,
    "autoHeight": false,
    "autoWidth": false,
    "cellRangeRenderer": _defaultCellRangeRenderer2.default,
    "containerRole": 'rowgroup',
    "containerStyle": {},
    "estimatedColumnSize": 100,
    "estimatedRowSize": 30,
    "getScrollbarSize": _scrollbarSize2.default,
    "noContentRenderer": renderNull,
    "onScroll": () => {},
    "onScrollbarPresenceChange": () => {},
    "onSectionRendered": () => {},
    "overscanColumnCount": 0,
    "overscanIndicesGetter": _defaultOverscanIndicesGetter2.default,
    "overscanRowCount": 10,
    "role": 'grid',
    "scrollingResetTimeInterval": DEFAULT_SCROLLING_RESET_TIME_INTERVAL,
    "scrollToAlignment": 'auto',
    "scrollToColumn": -1,
    "scrollToRow": -1,
    "style": {},
    "tabIndex": 0,
    "isScrollingOptOut": false,
    "scrollContainerComponent": 'div',
    "innerScrollContainerComponent": 'div'
  });

  (0, _reactLifecyclesCompat.polyfill)(VirtualGrid);
  exports.default = VirtualGrid;
});
//# sourceMappingURL=VirtualGrid.js.map