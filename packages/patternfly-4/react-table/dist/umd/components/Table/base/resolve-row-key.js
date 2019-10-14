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
  exports.resolveRowKey = resolveRowKey;

  /**
   * resolve-row-key.ts
   *
   * Forked from reactabular-table version 8.14.0
   * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
   */
  function resolveRowKey({
    rowData,
    rowIndex,
    rowKey
  }) {
    if (typeof rowKey === 'function') {
      return `${rowKey({
        rowData,
        rowIndex
      })}-row`;
    } else if (process.env.NODE_ENV !== 'production') {
      // Arrays cannot have rowKeys by definition so we have to go by index there.
      if (!(0, _lodash.isArray)(rowData) && rowData[rowKey] === undefined) {
        // tslint:disable-next-line:no-console
        console.warn('Table.Body - Missing valid rowKey!', rowData, rowKey);
      }
    }

    if (rowData[rowKey] === 0) {
      return `${rowData[rowKey]}-row`;
    }

    return `${rowData[rowKey] || rowIndex}-row`;
  }
});
//# sourceMappingURL=resolve-row-key.js.map