(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.undefined = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = defaultOverscanIndicesGetter;
  const SCROLL_DIRECTION_BACKWARD = exports.SCROLL_DIRECTION_BACKWARD = -1;
  const SCROLL_DIRECTION_FORWARD = exports.SCROLL_DIRECTION_FORWARD = 1;
  const SCROLL_DIRECTION_HORIZONTAL = exports.SCROLL_DIRECTION_HORIZONTAL = 'horizontal';
  const SCROLL_DIRECTION_VERTICAL = exports.SCROLL_DIRECTION_VERTICAL = 'vertical';
  /**
   * Calculates the number of cells to overscan before and after a specified range.
   * This function ensures that overscanning doesn't exceed the available cells.
   */

  function defaultOverscanIndicesGetter({
    cellCount,
    overscanCellsCount,
    scrollDirection,
    startIndex,
    stopIndex
  }) {
    if (scrollDirection === SCROLL_DIRECTION_FORWARD) {
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
});
//# sourceMappingURL=defaultOverscanIndicesGetter.js.map