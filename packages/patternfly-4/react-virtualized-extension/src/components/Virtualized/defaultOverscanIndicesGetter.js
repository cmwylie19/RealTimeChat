"use strict";
exports.__esModule = true;
exports.SCROLL_DIRECTION_BACKWARD = -1;
exports.SCROLL_DIRECTION_FORWARD = 1;
exports.SCROLL_DIRECTION_HORIZONTAL = 'horizontal';
exports.SCROLL_DIRECTION_VERTICAL = 'vertical';
/**
 * Calculates the number of cells to overscan before and after a specified range.
 * This function ensures that overscanning doesn't exceed the available cells.
 */
function defaultOverscanIndicesGetter(_a) {
    var cellCount = _a.cellCount, overscanCellsCount = _a.overscanCellsCount, scrollDirection = _a.scrollDirection, startIndex = _a.startIndex, stopIndex = _a.stopIndex;
    if (scrollDirection === exports.SCROLL_DIRECTION_FORWARD) {
        return {
            overscanStartIndex: Math.max(0, startIndex),
            overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount)
        };
    }
    return {
        overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
        overscanStopIndex: Math.min(cellCount - 1, stopIndex)
    };
}
exports["default"] = defaultOverscanIndicesGetter;
