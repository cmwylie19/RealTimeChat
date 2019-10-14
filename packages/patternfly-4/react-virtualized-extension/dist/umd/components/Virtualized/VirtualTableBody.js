(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "./accessibilityOverscanIndicesGetter", "./VirtualGrid", "clsx"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("./accessibilityOverscanIndicesGetter"), require("./VirtualGrid"), require("clsx"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.accessibilityOverscanIndicesGetter, global.VirtualGrid, global.clsx);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _accessibilityOverscanIndicesGetter, _VirtualGrid, _clsx) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var React = _interopRequireWildcard(_react);

  var _accessibilityOverscanIndicesGetter2 = _interopRequireDefault(_accessibilityOverscanIndicesGetter);

  var _VirtualGrid2 = _interopRequireDefault(_VirtualGrid);

  var _clsx2 = _interopRequireDefault(_clsx);

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

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
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
   * It is inefficient to create and manage a large list of DOM elements within a scrolling container
   * if only a few of those elements are visible. The primary purpose of this component is to improve
   * performance by only rendering the DOM nodes that a user is able to see based on their current
   * scroll position.
   *
   * This component renders a virtualized list of elements with either fixed or dynamic heights.
   */
  class VirtualTableBody extends React.PureComponent {
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
      const classNames = (0, _clsx2.default)('ReactVirtualized__List', className);
      const VirtualGridAny = _VirtualGrid2.default;
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

  exports.default = VirtualTableBody;

  _defineProperty(VirtualTableBody, "propTypes", {
    'aria-label': _propTypes2.default.string,
    autoHeight: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    estimatedRowSize: _propTypes2.default.number,
    height: _propTypes2.default.number.isRequired,
    noRowsRenderer: _propTypes2.default.any,
    onRowsRendered: _propTypes2.default.func,
    onScroll: _propTypes2.default.func,
    overscanIndicesGetter: _propTypes2.default.any,
    overscanRowCount: _propTypes2.default.number,
    rowHeight: _propTypes2.default.any.isRequired,
    rowRenderer: _propTypes2.default.any.isRequired,
    rowCount: _propTypes2.default.number.isRequired,
    scrollToAlignment: _propTypes2.default.any,
    scrollToIndex: _propTypes2.default.number,
    scrollTop: _propTypes2.default.number,
    style: _propTypes2.default.any,
    tabIndex: _propTypes2.default.number,
    width: _propTypes2.default.number.isRequired,
    columns: _propTypes2.default.arrayOf(_propTypes2.default.any),
    columnCount: _propTypes2.default.number,
    rows: _propTypes2.default.arrayOf(_propTypes2.default.any).isRequired
  });

  _defineProperty(VirtualTableBody, "defaultProps", {
    autoHeight: false,
    estimatedRowSize: 30,
    onScroll: () => {},
    noRowsRenderer: () => null,
    onRowsRendered: () => {},
    overscanIndicesGetter: _accessibilityOverscanIndicesGetter2.default,
    overscanRowCount: 10,
    scrollToAlignment: 'auto',
    scrollToIndex: -1,
    style: {}
  });
});
//# sourceMappingURL=VirtualTableBody.js.map