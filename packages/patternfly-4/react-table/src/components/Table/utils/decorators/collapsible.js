"use strict";
exports.__esModule = true;
var React = require("react");
var react_styles_1 = require("@patternfly/react-styles");
var table_1 = require("@patternfly/react-styles/css/components/Table/table");
var CollapseColumn_1 = require("../../CollapseColumn");
var ExpandableRowContent_1 = require("../../ExpandableRowContent");
exports.collapsible = function (value, _a) {
    var rowIndex = _a.rowIndex, columnIndex = _a.columnIndex, rowData = _a.rowData, column = _a.column, property = _a.property;
    var _b = column.extraParams, onCollapse = _b.onCollapse, _c = _b.rowLabeledBy, rowLabeledBy = _c === void 0 ? 'simple-node' : _c, _d = _b.expandId, expandId = _d === void 0 ? 'expand-toggle' : _d;
    var extraData = {
        rowIndex: rowIndex,
        columnIndex: columnIndex,
        column: column,
        property: property
    };
    function onToggle(event) {
        // tslint:disable-next-line:no-unused-expression
        onCollapse && onCollapse(event, rowIndex, rowData && !rowData.isOpen, rowData, extraData);
    }
    return {
        className: rowData.isOpen !== undefined && react_styles_1.css(table_1["default"].tableToggle),
        isVisible: !rowData.fullWidth,
        children: (<CollapseColumn_1.CollapseColumn aria-labelledby={"" + rowLabeledBy + rowIndex + " " + expandId + rowIndex} onToggle={onToggle} id={expandId + rowIndex} isOpen={rowData && rowData.isOpen}>
        {value}
      </CollapseColumn_1.CollapseColumn>)
    };
};
exports.expandable = function (value, _a) {
    var rowData = _a.rowData;
    return rowData.hasOwnProperty('parent') ? <ExpandableRowContent_1.ExpandableRowContent>{value}</ExpandableRowContent_1.ExpandableRowContent> : value;
};
exports.expandedRow = function (colSpan) {
    var expandedRowFormatter = function (value, _a) {
        var rowIndex = _a.rowIndex, rowData = _a.rowData, _b = _a.column.extraParams.contentId, contentId = _b === void 0 ? 'expanded-content' : _b;
        return rowData.hasOwnProperty('parent') && {
            // todo: rewrite this logic, it is not type safe
            colSpan: colSpan + !!rowData.fullWidth,
            id: contentId + rowIndex,
            className: rowData.noPadding && react_styles_1.css(table_1["default"].modifiers.noPadding)
        };
    };
    return expandedRowFormatter;
};
