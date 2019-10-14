function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable */
import CellSizeAndPositionManager from './CellSizeAndPositionManager';
import { getMaxElementSize } from './maxElementSize.js';

/**
 * Extends CellSizeAndPositionManager and adds scaling behavior for lists that are too large to fit within a browser's native limits.
 */
export default class ScalingCellSizeAndPositionManager {
  constructor(_ref) {
    let {
      maxScrollSize = getMaxElementSize()
    } = _ref,
        params = _objectWithoutProperties(_ref, ["maxScrollSize"]);

    // Favor composition over inheritance to simplify IE10 support
    this._cellSizeAndPositionManager = new CellSizeAndPositionManager(params);
    this._maxScrollSize = maxScrollSize;
  }

  areOffsetsAdjusted() {
    return this._cellSizeAndPositionManager.getTotalSize() > this._maxScrollSize;
  }

  configure(params) {
    this._cellSizeAndPositionManager.configure(params);
  }

  getCellCount() {
    return this._cellSizeAndPositionManager.getCellCount();
  }

  getEstimatedCellSize() {
    return this._cellSizeAndPositionManager.getEstimatedCellSize();
  }

  getLastMeasuredIndex() {
    return this._cellSizeAndPositionManager.getLastMeasuredIndex();
  }
  /**
   * Number of pixels a cell at the given position (offset) should be shifted in order to fit within the scaled container.
   * The offset passed to this function is scaled (safe) as well.
   */


  getOffsetAdjustment({
    containerSize,
    offset // safe

  }) {
    const totalSize = this._cellSizeAndPositionManager.getTotalSize();

    const safeTotalSize = this.getTotalSize();

    const offsetPercentage = this._getOffsetPercentage({
      containerSize,
      offset,
      totalSize: safeTotalSize
    });

    return Math.round(offsetPercentage * (safeTotalSize - totalSize));
  }

  getSizeAndPositionOfCell(index) {
    return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(index);
  }

  getSizeAndPositionOfLastMeasuredCell() {
    return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell();
  }
  /** See CellSizeAndPositionManager#getTotalSize */


  getTotalSize() {
    return Math.min(this._maxScrollSize, this._cellSizeAndPositionManager.getTotalSize());
  }
  /** See CellSizeAndPositionManager#getUpdatedOffsetForIndex */


  getUpdatedOffsetForIndex({
    align = 'auto',
    containerSize,
    currentOffset,
    // safe
    targetIndex
  }) {
    currentOffset = this._safeOffsetToOffset({
      containerSize,
      offset: currentOffset
    });

    const offset = this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({
      align,
      containerSize,
      currentOffset,
      targetIndex
    });

    return this._offsetToSafeOffset({
      containerSize,
      offset
    });
  }
  /** See CellSizeAndPositionManager#getVisibleCellRange */


  getVisibleCellRange({
    containerSize,
    offset // safe

  }) {
    offset = this._safeOffsetToOffset({
      containerSize,
      offset
    });
    return this._cellSizeAndPositionManager.getVisibleCellRange({
      containerSize,
      offset
    });
  }

  resetCell(index) {
    this._cellSizeAndPositionManager.resetCell(index);
  }

  _getOffsetPercentage({
    containerSize,
    offset,
    // safe
    totalSize
  }) {
    return totalSize <= containerSize ? 0 : offset / (totalSize - containerSize);
  }

  _offsetToSafeOffset({
    containerSize,
    offset // unsafe

  }) {
    const totalSize = this._cellSizeAndPositionManager.getTotalSize();

    const safeTotalSize = this.getTotalSize();

    if (totalSize === safeTotalSize) {
      return offset;
    }

    const offsetPercentage = this._getOffsetPercentage({
      containerSize,
      offset,
      totalSize
    });

    return Math.round(offsetPercentage * (safeTotalSize - containerSize));
  }

  _safeOffsetToOffset({
    containerSize,
    offset // safe

  }) {
    const totalSize = this._cellSizeAndPositionManager.getTotalSize();

    const safeTotalSize = this.getTotalSize();

    if (totalSize === safeTotalSize) {
      return offset;
    }

    const offsetPercentage = this._getOffsetPercentage({
      containerSize,
      offset,
      totalSize: safeTotalSize
    });

    return Math.round(offsetPercentage * (totalSize - containerSize));
  }

}
//# sourceMappingURL=ScalingCellSizeAndPositionManager.js.map