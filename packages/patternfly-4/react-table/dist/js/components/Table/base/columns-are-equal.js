"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.columnsAreEqual = columnsAreEqual;

var _lodash = require("lodash");

/**
 * columns-are-equal.ts
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
function columnsAreEqual(oldColumns, newColumns) {
  return (0, _lodash.isEqualWith)(oldColumns, newColumns, function (a, b) {
    if ((0, _lodash.isFunction)(a) && (0, _lodash.isFunction)(b)) {
      return true;
    }

    return undefined;
  });
}
//# sourceMappingURL=columns-are-equal.js.map