"use strict";
exports.__esModule = true;
exports.buildExpandableRows = function (relationships, openIndexes, rowCount) {
    if (relationships === void 0) { relationships = {}; }
    if (openIndexes === void 0) { openIndexes = []; }
    if (rowCount === void 0) { rowCount = 10; }
    var rows = [];
    for (var i = 0; i < rowCount; i++) {
        var row = {
            data: {
                mockData: 'mock'
            }
        };
        if (openIndexes.indexOf(i) >= 0) {
            row.isOpen = true;
        }
        if (relationships[i] >= 0) {
            row.parent = relationships[i];
        }
        rows.push(row);
    }
    return rows;
};
