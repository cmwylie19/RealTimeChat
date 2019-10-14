"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _linearLayoutVector = _interopRequireDefault(require("linear-layout-vector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Just-in-time calculates and caches size and position information for a collection of cells.
 */
var CellSizeAndPositionManager =
/*#__PURE__*/
function () {
  // Cache of size and position data for cells, mapped by cell index.
  // Note that invalid values may exist in this map so only rely on cells up to this._lastMeasuredIndex
  // Measurements for cells up to this index can be trusted; cells afterward should be estimated.
  function CellSizeAndPositionManager(_ref) {
    var cellCount = _ref.cellCount,
        cellSizeGetter = _ref.cellSizeGetter,
        estimatedCellSize = _ref.estimatedCellSize;

    _classCallCheck(this, CellSizeAndPositionManager);

    _defineProperty(this, "_lastMeasuredIndex", -1);

    this._cellSizeGetter = cellSizeGetter;
    this._cellCount = cellCount;
    this._estimatedCellSize = estimatedCellSize;
    this._layoutVector = new _linearLayoutVector["default"]();

    this._layoutVector.setLength(cellCount);

    this._layoutVector.setDefaultSize(estimatedCellSize);
  }

  _createClass(CellSizeAndPositionManager, [{
    key: "areOffsetsAdjusted",
    value: function areOffsetsAdjusted() {
      return false;
    }
  }, {
    key: "configure",
    value: function configure(_ref2) {
      var cellCount = _ref2.cellCount,
          estimatedCellSize = _ref2.estimatedCellSize,
          cellSizeGetter = _ref2.cellSizeGetter;
      this._cellCount = cellCount;
      this._estimatedCellSize = estimatedCellSize;
      this._cellSizeGetter = cellSizeGetter;

      this._layoutVector.setLength(cellCount);

      this._layoutVector.setDefaultSize(estimatedCellSize);
    }
  }, {
    key: "getCellCount",
    value: function getCellCount() {
      return this._cellCount;
    }
  }, {
    key: "getEstimatedCellSize",
    value: function getEstimatedCellSize() {
      return this._estimatedCellSize;
    }
  }, {
    key: "getLastMeasuredIndex",
    value: function getLastMeasuredIndex() {
      return this._lastMeasuredIndex;
    }
  }, {
    key: "getOffsetAdjustment",
    value: function getOffsetAdjustment() {
      return 0;
    }
    /**
     * This method returns the size and position for the cell at the specified index.
     * It just-in-time calculates (or used cached values) for cells leading up to the index.
     */

  }, {
    key: "getSizeAndPositionOfCell",
    value: function getSizeAndPositionOfCell(index) {
      if (index < 0 || index >= this._cellCount) {
        throw Error("Requested index ".concat(index, " is outside of range 0..").concat(this._cellCount));
      }

      var vector = this._layoutVector;

      if (index > this._lastMeasuredIndex) {
        var token = {
          index: this._lastMeasuredIndex + 1
        };

        for (var i = token.index; i <= index; token.index = ++i) {
          var size = this._cellSizeGetter(token); // undefined or NaN probably means a logic error in the size getter.
          // null means we're using CellMeasurer and haven't yet measured a given index.


          if (size === undefined || size !== size) {
            throw Error("Invalid size returned for cell ".concat(i, " of value ").concat(size));
          } else if (size !== null) {
            vector.setItemSize(i, size);
          }
        }

        this._lastMeasuredIndex = Math.min(index, this._cellCount - 1);
      }

      return {
        offset: vector.start(index),
        size: vector.getItemSize(index)
      };
    }
  }, {
    key: "getSizeAndPositionOfLastMeasuredCell",
    value: function getSizeAndPositionOfLastMeasuredCell() {
      var index = this._lastMeasuredIndex;

      if (index <= 0) {
        return {
          offset: 0,
          size: 0
        };
      }

      var vector = this._layoutVector;
      return {
        offset: vector.start(index),
        size: vector.getItemSize(index)
      };
    }
    /**
     * Total size of all cells being measured.
     * This value will be completely estimated initially.
     * As cells are measured, the estimate will be updated.
     */

  }, {
    key: "getTotalSize",
    value: function getTotalSize() {
      var lastIndex = this._cellCount - 1;
      return lastIndex >= 0 ? this._layoutVector.end(lastIndex) : 0;
    }
    /**
     * Determines a new offset that ensures a certain cell is visible, given the current offset.
     * If the cell is already visible then the current offset will be returned.
     * If the current offset is too great or small, it will be adjusted just enough to ensure the specified index is visible.
     *
     * @param align Desired alignment within container; one of "auto" (default), "start", or "end"
     * @param containerSize Size (width or height) of the container viewport
     * @param currentOffset Container's current (x or y) offset
     * @param totalSize Total size (width or height) of all cells
     * @return Offset to use to ensure the specified cell is visible
     */

  }, {
    key: "getUpdatedOffsetForIndex",
    value: function getUpdatedOffsetForIndex(_ref3) {
      var _ref3$align = _ref3.align,
          align = _ref3$align === void 0 ? 'auto' : _ref3$align,
          containerSize = _ref3.containerSize,
          currentOffset = _ref3.currentOffset,
          targetIndex = _ref3.targetIndex;

      if (containerSize <= 0) {
        return 0;
      }

      var datum = this.getSizeAndPositionOfCell(targetIndex);
      var maxOffset = datum.offset;
      var minOffset = maxOffset - containerSize + datum.size;
      var idealOffset;

      switch (align) {
        case 'start':
          idealOffset = maxOffset;
          break;

        case 'end':
          idealOffset = minOffset;
          break;

        case 'center':
          idealOffset = maxOffset - (containerSize - datum.size) / 2;
          break;

        default:
          idealOffset = Math.max(minOffset, Math.min(maxOffset, currentOffset));
          break;
      }

      var totalSize = this.getTotalSize();
      return Math.max(0, Math.min(totalSize - containerSize, idealOffset));
    }
  }, {
    key: "getVisibleCellRange",
    value: function getVisibleCellRange(params) {
      if (this.getTotalSize() === 0) {
        return {};
      }

      var containerSize = params.containerSize,
          offset = params.offset;
      var maxOffset = offset + containerSize - 1;
      return {
        start: this._findNearestCell(offset),
        stop: this._findNearestCell(maxOffset)
      };
    }
    /**
     * Clear all cached values for cells after the specified index.
     * This method should be called for any cell that has changed its size.
     * It will not immediately perform any calculations; they'll be performed the next time getSizeAndPositionOfCell() is called.
     */

  }, {
    key: "resetCell",
    value: function resetCell(index) {
      this._lastMeasuredIndex = Math.min(this._lastMeasuredIndex, index - 1);
    }
    /**
     * Searches for the cell (index) nearest the specified offset.
     *
     * If no exact match is found the next lowest cell index will be returned.
     * This allows partially visible cells (with offsets just before/above the fold) to be visible.
     */

  }, {
    key: "_findNearestCell",
    value: function _findNearestCell(offset) {
      if (isNaN(offset)) {
        throw Error("Invalid offset ".concat(offset, " specified"));
      }

      var vector = this._layoutVector;
      var lastIndex = this._cellCount - 1; // Our search algorithms find the nearest match at or below the specified offset.
      // So make sure the offset is at least 0 or no match will be found.

      var targetOffset = Math.max(0, Math.min(offset, vector.start(lastIndex))); // First interrogate the constant-time lookup table

      var nearestCellIndex = vector.indexOf(targetOffset); // If we haven't yet measured this high, compute sizes for each cell up to the desired offset.

      while (nearestCellIndex > this._lastMeasuredIndex) {
        // Measure all the cells up to the one we want to find presently.
        // Do this before the last-index check to ensure the sparse array
        // is fully populated.
        this.getSizeAndPositionOfCell(nearestCellIndex); // No need to search and compare again if we're at the end.

        if (nearestCellIndex === lastIndex) {
          return nearestCellIndex;
        }

        nearestCellIndex = vector.indexOf(targetOffset); // Guard in case `getSizeAndPositionOfCell` didn't fully measure to
        // the nearestCellIndex. This might happen scrolling quickly down
        // and back up on large lists -- possible race with React or DOM?

        if (nearestCellIndex === -1) {
          nearestCellIndex = this._lastMeasuredIndex;
          this._lastMeasuredIndex = nearestCellIndex - 1;
          targetOffset = Math.max(0, Math.min(offset, vector.start(lastIndex)));
        }
      }

      return nearestCellIndex;
    }
  }]);

  return CellSizeAndPositionManager;
}();

exports["default"] = CellSizeAndPositionManager;
//# sourceMappingURL=CellSizeAndPositionManager.js.map