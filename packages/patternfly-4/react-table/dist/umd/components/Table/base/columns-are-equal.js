(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "lodash"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("lodash"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.lodash);
    global.undefined = mod.exports;
  }
})(this, function (exports, _lodash) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.columnsAreEqual = columnsAreEqual;

  /**
   * columns-are-equal.ts
   *
   * Forked from reactabular-table version 8.14.0
   * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
   */
  function columnsAreEqual(oldColumns, newColumns) {
    return (0, _lodash.isEqualWith)(oldColumns, newColumns, (a, b) => {
      if ((0, _lodash.isFunction)(a) && (0, _lodash.isFunction)(b)) {
        return true;
      }

      return undefined;
    });
  }
});
//# sourceMappingURL=columns-are-equal.js.map