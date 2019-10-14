"use strict";
/* eslint-disable */
exports.__esModule = true;
var linear_layout_vector_1 = require("linear-layout-vector");
/**
 * Just-in-time calculates and caches size and position information for a collection of cells.
 */
var CellSizeAndPositionManager = /** @class */ (function () {
    function CellSizeAndPositionManager(_a) {
        var cellCount = _a.cellCount, cellSizeGetter = _a.cellSizeGetter, estimatedCellSize = _a.estimatedCellSize;
        // Measurements for cells up to this index can be trusted; cells afterward should be estimated.
        this._lastMeasuredIndex = -1;
        this._cellSizeGetter = cellSizeGetter;
        this._cellCount = cellCount;
        this._estimatedCellSize = estimatedCellSize;
        this._layoutVector = new linear_layout_vector_1["default"]();
        this._layoutVector.setLength(cellCount);
        this._layoutVector.setDefaultSize(estimatedCellSize);
    }
    CellSizeAndPositionManager.prototype.areOffsetsAdjusted = function () {
        return false;
    };
    CellSizeAndPositionManager.prototype.configure = function (_a) {
        var cellCount = _a.cellCount, estimatedCellSize = _a.estimatedCellSize, cellSizeGetter = _a.cellSizeGetter;
        this._cellCount = cellCount;
        this._estimatedCellSize = estimatedCellSize;
        this._cellSizeGetter = cellSizeGetter;
        this._layoutVector.setLength(cellCount);
        this._layoutVector.setDefaultSize(estimatedCellSize);
    };
    CellSizeAndPositionManager.prototype.getCellCount = function () {
        return this._cellCount;
    };
    CellSizeAndPositionManager.prototype.getEstimatedCellSize = function () {
        return this._estimatedCellSize;
    };
    CellSizeAndPositionManager.prototype.getLastMeasuredIndex = function () {
        return this._lastMeasuredIndex;
    };
    CellSizeAndPositionManager.prototype.getOffsetAdjustment = function () {
        return 0;
    };
    /**
     * This method returns the size and position for the cell at the specified index.
     * It just-in-time calculates (or used cached values) for cells leading up to the index.
     */
    CellSizeAndPositionManager.prototype.getSizeAndPositionOfCell = function (index) {
        if (index < 0 || index >= this._cellCount) {
            throw Error("Requested index " + index + " is outside of range 0.." + this._cellCount);
        }
        var vector = this._layoutVector;
        if (index > this._lastMeasuredIndex) {
            var token = { index: this._lastMeasuredIndex + 1 };
            for (var i = token.index; i <= index; token.index = ++i) {
                var size = this._cellSizeGetter(token);
                // undefined or NaN probably means a logic error in the size getter.
                // null means we're using CellMeasurer and haven't yet measured a given index.
                if (size === undefined || size !== size) {
                    throw Error("Invalid size returned for cell " + i + " of value " + size);
                }
                else if (size !== null) {
                    vector.setItemSize(i, size);
                }
            }
            this._lastMeasuredIndex = Math.min(index, this._cellCount - 1);
        }
        return {
            offset: vector.start(index),
            size: vector.getItemSize(index)
        };
    };
    CellSizeAndPositionManager.prototype.getSizeAndPositionOfLastMeasuredCell = function () {
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
    };
    /**
     * Total size of all cells being measured.
     * This value will be completely estimated initially.
     * As cells are measured, the estimate will be updated.
     */
    CellSizeAndPositionManager.prototype.getTotalSize = function () {
        var lastIndex = this._cellCount - 1;
        return lastIndex >= 0 ? this._layoutVector.end(lastIndex) : 0;
    };
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
    CellSizeAndPositionManager.prototype.getUpdatedOffsetForIndex = function (_a) {
        var _b = _a.align, align = _b === void 0 ? 'auto' : _b, containerSize = _a.containerSize, currentOffset = _a.currentOffset, targetIndex = _a.targetIndex;
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
    };
    CellSizeAndPositionManager.prototype.getVisibleCellRange = function (params) {
        if (this.getTotalSize() === 0) {
            return {};
        }
        var containerSize = params.containerSize, offset = params.offset;
        var maxOffset = offset + containerSize - 1;
        return {
            start: this._findNearestCell(offset),
            stop: this._findNearestCell(maxOffset)
        };
    };
    /**
     * Clear all cached values for cells after the specified index.
     * This method should be called for any cell that has changed its size.
     * It will not immediately perform any calculations; they'll be performed the next time getSizeAndPositionOfCell() is called.
     */
    CellSizeAndPositionManager.prototype.resetCell = function (index) {
        this._lastMeasuredIndex = Math.min(this._lastMeasuredIndex, index - 1);
    };
    /**
     * Searches for the cell (index) nearest the specified offset.
     *
     * If no exact match is found the next lowest cell index will be returned.
     * This allows partially visible cells (with offsets just before/above the fold) to be visible.
     */
    CellSizeAndPositionManager.prototype._findNearestCell = function (offset) {
        if (isNaN(offset)) {
            throw Error("Invalid offset " + offset + " specified");
        }
        var vector = this._layoutVector;
        var lastIndex = this._cellCount - 1;
        // Our search algorithms find the nearest match at or below the specified offset.
        // So make sure the offset is at least 0 or no match will be found.
        var targetOffset = Math.max(0, Math.min(offset, vector.start(lastIndex)));
        // First interrogate the constant-time lookup table
        var nearestCellIndex = vector.indexOf(targetOffset);
        // If we haven't yet measured this high, compute sizes for each cell up to the desired offset.
        while (nearestCellIndex > this._lastMeasuredIndex) {
            // Measure all the cells up to the one we want to find presently.
            // Do this before the last-index check to ensure the sparse array
            // is fully populated.
            this.getSizeAndPositionOfCell(nearestCellIndex);
            // No need to search and compare again if we're at the end.
            if (nearestCellIndex === lastIndex) {
                return nearestCellIndex;
            }
            nearestCellIndex = vector.indexOf(targetOffset);
            // Guard in case `getSizeAndPositionOfCell` didn't fully measure to
            // the nearestCellIndex. This might happen scrolling quickly down
            // and back up on large lists -- possible race with React or DOM?
            if (nearestCellIndex === -1) {
                nearestCellIndex = this._lastMeasuredIndex;
                this._lastMeasuredIndex = nearestCellIndex - 1;
                targetOffset = Math.max(0, Math.min(offset, vector.start(lastIndex)));
            }
        }
        return nearestCellIndex;
    };
    return CellSizeAndPositionManager;
}());
exports["default"] = CellSizeAndPositionManager;
