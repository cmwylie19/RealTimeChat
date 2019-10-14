"use strict";
exports.__esModule = true;
/**
 * columns-are-equal.ts
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
var lodash_1 = require("lodash");
function columnsAreEqual(oldColumns, newColumns) {
    return lodash_1.isEqualWith(oldColumns, newColumns, function (a, b) {
        if (lodash_1.isFunction(a) && lodash_1.isFunction(b)) {
            return true;
        }
        return undefined;
    });
}
exports.columnsAreEqual = columnsAreEqual;
