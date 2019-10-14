"use strict";
/**
 * resolve-row-key.ts
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
exports.__esModule = true;
var lodash_1 = require("lodash");
function resolveRowKey(_a) {
    var rowData = _a.rowData, rowIndex = _a.rowIndex, rowKey = _a.rowKey;
    if (typeof rowKey === 'function') {
        return rowKey({ rowData: rowData, rowIndex: rowIndex }) + "-row";
    }
    else if (process.env.NODE_ENV !== 'production') {
        // Arrays cannot have rowKeys by definition so we have to go by index there.
        if (!lodash_1.isArray(rowData) && rowData[rowKey] === undefined) {
            // tslint:disable-next-line:no-console
            console.warn('Table.Body - Missing valid rowKey!', rowData, rowKey);
        }
    }
    if (rowData[rowKey] === 0) {
        return rowData[rowKey] + "-row";
    }
    return (rowData[rowKey] || rowIndex) + "-row";
}
exports.resolveRowKey = resolveRowKey;
