/**
 * Helper method that determines when to recalculate row or column metadata.
 */
export default function calculateSizeAndPositionDataAndUpdateScrollOffset({
  cellCount,
  cellSize,
  computeMetadataCallback,
  computeMetadataCallbackProps,
  nextCellsCount,
  nextCellSize,
  nextScrollToIndex,
  scrollToIndex,
  updateScrollOffsetForScrollToIndex
}) {
  // Don't compare cell sizes if they are functions because inline functions would cause infinite loops.
  // In that event users should use the manual recompute methods to inform of changes.
  if (cellCount !== nextCellsCount || (typeof cellSize === 'number' || typeof nextCellSize === 'number') && cellSize !== nextCellSize) {
    computeMetadataCallback(computeMetadataCallbackProps); // Updated cell metadata may have hidden the previous scrolled-to item.
    // In this case we should also update the scrollTop to ensure it stays visible.

    if (scrollToIndex >= 0 && scrollToIndex === nextScrollToIndex) {
      updateScrollOffsetForScrollToIndex();
    }
  }
}
//# sourceMappingURL=calculateSizeAndPositionDataAndUpdateScrollOffset.js.map