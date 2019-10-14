"use strict";
exports.__esModule = true;
var React = require("react");
var react_styles_1 = require("@patternfly/react-styles");
var table_1 = require("@patternfly/react-styles/css/components/Table/table");
var button_1 = require("@patternfly/react-styles/css/components/Button/button");
var Table_1 = require("../../Table");
var SortColumn_1 = require("../../SortColumn");
exports.sortable = function (label, _a) {
    var columnIndex = _a.columnIndex, column = _a.column, property = _a.property;
    var _b = column.extraParams, sortBy = _b.sortBy, onSort = _b.onSort;
    var extraData = {
        columnIndex: columnIndex,
        column: column,
        property: property
    };
    var isSortedBy = sortBy && columnIndex === sortBy.index;
    function sortClicked(event) {
        var reversedDirection;
        if (!isSortedBy) {
            reversedDirection = Table_1.SortByDirection.asc;
        }
        else {
            reversedDirection = sortBy.direction === Table_1.SortByDirection.asc ? Table_1.SortByDirection.desc : Table_1.SortByDirection.asc;
        }
        // tslint:disable-next-line:no-unused-expression
        onSort && onSort(event, columnIndex, reversedDirection, extraData);
    }
    return {
        "className": react_styles_1.css(table_1["default"].tableSort, isSortedBy && table_1["default"].modifiers.selected),
        'aria-sort': isSortedBy ? sortBy.direction + "ending" : 'none',
        "children": (<SortColumn_1.SortColumn isSortedBy={isSortedBy} sortDirection={isSortedBy ? sortBy.direction : ''} onSort={sortClicked} className={react_styles_1.css(button_1["default"].button, button_1["default"].modifiers.plain)}>
        {label}
      </SortColumn_1.SortColumn>)
    };
};
