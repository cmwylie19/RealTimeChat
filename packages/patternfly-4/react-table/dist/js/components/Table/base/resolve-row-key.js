"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveRowKey = resolveRowKey;

var _lodash = require("lodash");

/**
 * resolve-row-key.ts
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
function resolveRowKey(_ref) {
  var rowData = _ref.rowData,
      rowIndex = _ref.rowIndex,
      rowKey = _ref.rowKey;

  if (typeof rowKey === 'function') {
    return "".concat(rowKey({
      rowData: rowData,
      rowIndex: rowIndex
    }), "-row");
  } else if (process.env.NODE_ENV !== 'production') {
    // Arrays cannot have rowKeys by definition so we have to go by index there.
    if (!(0, _lodash.isArray)(rowData) && rowData[rowKey] === undefined) {
      // tslint:disable-next-line:no-console
      console.warn('Table.Body - Missing valid rowKey!', rowData, rowKey);
    }
  }

  if (rowData[rowKey] === 0) {
    return "".concat(rowData[rowKey], "-row");
  }

  return "".concat(rowData[rowKey] || rowIndex, "-row");
}
//# sourceMappingURL=resolve-row-key.js.map