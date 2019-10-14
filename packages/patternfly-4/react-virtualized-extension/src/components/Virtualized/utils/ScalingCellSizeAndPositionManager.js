"use strict";
/* eslint-disable */
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var CellSizeAndPositionManager_1 = require("./CellSizeAndPositionManager");
var maxElementSize_js_1 = require("./maxElementSize.js");
/**
 * Extends CellSizeAndPositionManager and adds scaling behavior for lists that are too large to fit within a browser's native limits.
 */
var ScalingCellSizeAndPositionManager = /** @class */ (function () {
    function ScalingCellSizeAndPositionManager(_a) {
        var _b = _a.maxScrollSize, maxScrollSize = _b === void 0 ? maxElementSize_js_1.getMaxElementSize() : _b, params = __rest(_a, ["maxScrollSize"]);
        // Favor composition over inheritance to simplify IE10 support
        this._cellSizeAndPositionManager = new CellSizeAndPositionManager_1["default"](params);
        this._maxScrollSize = maxScrollSize;
    }
    ScalingCellSizeAndPositionManager.prototype.areOffsetsAdjusted = function () {
        return this._cellSizeAndPositionManager.getTotalSize() > this._maxScrollSize;
    };
    ScalingCellSizeAndPositionManager.prototype.configure = function (params) {
        this._cellSizeAndPositionManager.configure(params);
    };
    ScalingCellSizeAndPositionManager.prototype.getCellCount = function () {
        return this._cellSizeAndPositionManager.getCellCount();
    };
    ScalingCellSizeAndPositionManager.prototype.getEstimatedCellSize = function () {
        return this._cellSizeAndPositionManager.getEstimatedCellSize();
    };
    ScalingCellSizeAndPositionManager.prototype.getLastMeasuredIndex = function () {
        return this._cellSizeAndPositionManager.getLastMeasuredIndex();
    };
    /**
     * Number of pixels a cell at the given position (offset) should be shifted in order to fit within the scaled container.
     * The offset passed to this function is scaled (safe) as well.
     */
    ScalingCellSizeAndPositionManager.prototype.getOffsetAdjustment = function (_a) {
        var containerSize = _a.containerSize, offset = _a.offset // safe
        ;
        var totalSize = this._cellSizeAndPositionManager.getTotalSize();
        var safeTotalSize = this.getTotalSize();
        var offsetPercentage = this._getOffsetPercentage({
            containerSize: containerSize,
            offset: offset,
            totalSize: safeTotalSize
        });
        return Math.round(offsetPercentage * (safeTotalSize - totalSize));
    };
    ScalingCellSizeAndPositionManager.prototype.getSizeAndPositionOfCell = function (index) {
        return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(index);
    };
    ScalingCellSizeAndPositionManager.prototype.getSizeAndPositionOfLastMeasuredCell = function () {
        return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell();
    };
    /** See CellSizeAndPositionManager#getTotalSize */
    ScalingCellSizeAndPositionManager.prototype.getTotalSize = function () {
        return Math.min(this._maxScrollSize, this._cellSizeAndPositionManager.getTotalSize());
    };
    /** See CellSizeAndPositionManager#getUpdatedOffsetForIndex */
    ScalingCellSizeAndPositionManager.prototype.getUpdatedOffsetForIndex = function (_a) {
        var _b = _a.align, align = _b === void 0 ? 'auto' : _b, containerSize = _a.containerSize, currentOffset = _a.currentOffset, // safe
        targetIndex = _a.targetIndex;
        currentOffset = this._safeOffsetToOffset({
            containerSize: containerSize,
            offset: currentOffset
        });
        var offset = this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({
            align: align,
            containerSize: containerSize,
            currentOffset: currentOffset,
            targetIndex: targetIndex
        });
        return this._offsetToSafeOffset({
            containerSize: containerSize,
            offset: offset
        });
    };
    /** See CellSizeAndPositionManager#getVisibleCellRange */
    ScalingCellSizeAndPositionManager.prototype.getVisibleCellRange = function (_a) {
        var containerSize = _a.containerSize, offset = _a.offset // safe
        ;
        offset = this._safeOffsetToOffset({
            containerSize: containerSize,
            offset: offset
        });
        return this._cellSizeAndPositionManager.getVisibleCellRange({
            containerSize: containerSize,
            offset: offset
        });
    };
    ScalingCellSizeAndPositionManager.prototype.resetCell = function (index) {
        this._cellSizeAndPositionManager.resetCell(index);
    };
    ScalingCellSizeAndPositionManager.prototype._getOffsetPercentage = function (_a) {
        var containerSize = _a.containerSize, offset = _a.offset, // safe
        totalSize = _a.totalSize;
        return totalSize <= containerSize ? 0 : offset / (totalSize - containerSize);
    };
    ScalingCellSizeAndPositionManager.prototype._offsetToSafeOffset = function (_a) {
        var containerSize = _a.containerSize, offset = _a.offset // unsafe
        ;
        var totalSize = this._cellSizeAndPositionManager.getTotalSize();
        var safeTotalSize = this.getTotalSize();
        if (totalSize === safeTotalSize) {
            return offset;
        }
        var offsetPercentage = this._getOffsetPercentage({
            containerSize: containerSize,
            offset: offset,
            totalSize: totalSize
        });
        return Math.round(offsetPercentage * (safeTotalSize - containerSize));
    };
    ScalingCellSizeAndPositionManager.prototype._safeOffsetToOffset = function (_a) {
        var containerSize = _a.containerSize, offset = _a.offset // safe
        ;
        var totalSize = this._cellSizeAndPositionManager.getTotalSize();
        var safeTotalSize = this.getTotalSize();
        if (totalSize === safeTotalSize) {
            return offset;
        }
        var offsetPercentage = this._getOffsetPercentage({
            containerSize: containerSize,
            offset: offset,
            totalSize: safeTotalSize
        });
        return Math.round(offsetPercentage * (totalSize - containerSize));
    };
    return ScalingCellSizeAndPositionManager;
}());
exports["default"] = ScalingCellSizeAndPositionManager;
