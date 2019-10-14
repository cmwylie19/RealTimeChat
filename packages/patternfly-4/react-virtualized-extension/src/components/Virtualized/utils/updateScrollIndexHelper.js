"use strict";
exports.__esModule = true;
function updateScrollIndexHelper(_a) {
    var cellSize = _a.cellSize, cellSizeAndPositionManager = _a.cellSizeAndPositionManager, previousCellsCount = _a.previousCellsCount, previousCellSize = _a.previousCellSize, previousScrollToAlignment = _a.previousScrollToAlignment, previousScrollToIndex = _a.previousScrollToIndex, previousSize = _a.previousSize, scrollOffset = _a.scrollOffset, scrollToAlignment = _a.scrollToAlignment, scrollToIndex = _a.scrollToIndex, size = _a.size, sizeJustIncreasedFromZero = _a.sizeJustIncreasedFromZero, updateScrollIndexCallback = _a.updateScrollIndexCallback;
    var cellCount = cellSizeAndPositionManager.getCellCount();
    var hasScrollToIndex = scrollToIndex >= 0 && scrollToIndex < cellCount;
    var sizeHasChanged = size !== previousSize ||
        sizeJustIncreasedFromZero ||
        !previousCellSize ||
        (typeof cellSize === 'number' && cellSize !== previousCellSize);
    // If we have a new scroll target OR if height/row-height has changed,
    // We should ensure that the scroll target is visible.
    if (hasScrollToIndex &&
        (sizeHasChanged || scrollToAlignment !== previousScrollToAlignment || scrollToIndex !== previousScrollToIndex)) {
        updateScrollIndexCallback(scrollToIndex);
        // If we don't have a selected item but list size or number of children have decreased,
        // Make sure we aren't scrolled too far past the current content.
    }
    else if (!hasScrollToIndex && cellCount > 0 && (size < previousSize || cellCount < previousCellsCount)) {
        // We need to ensure that the current scroll offset is still within the collection's range.
        // To do this, we don't need to measure everything; CellMeasurer would perform poorly.
        // Just check to make sure we're still okay.
        // Only adjust the scroll position if we've scrolled below the last set of rows.
        if (scrollOffset > cellSizeAndPositionManager.getTotalSize() - size) {
            updateScrollIndexCallback(cellCount - 1);
        }
    }
}
exports["default"] = updateScrollIndexHelper;
