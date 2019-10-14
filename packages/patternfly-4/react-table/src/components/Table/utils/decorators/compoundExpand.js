"use strict";
exports.__esModule = true;
var React = require("react");
var react_styles_1 = require("@patternfly/react-styles");
var react_core_1 = require("@patternfly/react-core");
var table_1 = require("@patternfly/react-styles/css/components/Table/table");
exports.compoundExpand = function (value, _a) {
    var rowIndex = _a.rowIndex, columnIndex = _a.columnIndex, rowData = _a.rowData, column = _a.column, property = _a.property;
    if (!value) {
        return null;
    }
    var title = value.title, props = value.props;
    var onExpand = column.extraParams.onExpand;
    var extraData = {
        rowIndex: rowIndex,
        columnIndex: columnIndex,
        column: column,
        property: property
    };
    function onToggle(event) {
        // tslint:disable-next-line:no-unused-expression
        onExpand && onExpand(event, rowIndex, columnIndex, props.isOpen, rowData, extraData);
    }
    return {
        className: react_styles_1.css(table_1["default"].tableCompoundExpansionToggle, props.isOpen && table_1["default"].modifiers.expanded),
        children: props.isOpen !== undefined && (<react_core_1.Button variant="link" onClick={onToggle} aria-expanded={props.isOpen} aria-controls={props.ariaControls}>
        {title}
      </react_core_1.Button>)
    };
};
