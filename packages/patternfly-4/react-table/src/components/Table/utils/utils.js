"use strict";
exports.__esModule = true;
var hasCompoundParentsExpanded = function (parentId, compoundParent, rows) {
    // max rows.length parents
    for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
        var i = rows_1[_i];
        if (rows[parentId].hasOwnProperty('parent')) {
            parentId = rows[parentId].parent;
        }
        else {
            return rows[parentId].cells[compoundParent].props.isOpen;
        }
    }
    return false;
};
var hasParentsExpanded = function (parentId, rows) {
    // max rows.length parents
    for (var _i = 0, rows_2 = rows; _i < rows_2.length; _i++) {
        var i = rows_2[_i];
        if (rows[parentId].hasOwnProperty('parent')) {
            parentId = rows[parentId].parent;
        }
        else {
            return rows[parentId].isOpen;
        }
    }
    return false;
};
exports.isRowExpanded = function (row, rows) {
    if (row.parent !== undefined) {
        if (row.hasOwnProperty('compoundParent')) {
            return hasCompoundParentsExpanded(row.parent, row.compoundParent, rows);
        }
        return hasParentsExpanded(row.parent, rows) && rows[row.parent].isOpen;
    }
    return undefined;
};
