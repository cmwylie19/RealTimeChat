"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = require("react");
var react_styles_1 = require("@patternfly/react-styles");
var table_1 = require("@patternfly/react-styles/css/components/Table/table");
var ActionsColumn_1 = require("../../ActionsColumn");
var resolveOrDefault = function (resolver, defaultValue, rowData, extraData) {
    return typeof resolver === 'function' ? resolver(rowData, extraData) : defaultValue;
};
exports.cellActions = function (actions, actionResolver, areActionsDisabled) { return function (label, _a) {
    var rowData = _a.rowData, column = _a.column, rowIndex = _a.rowIndex, columnIndex = _a.columnIndex, _b = _a.column.extraParams, dropdownPosition = _b.dropdownPosition, dropdownDirection = _b.dropdownDirection, property = _a.property;
    var extraData = {
        rowIndex: rowIndex,
        columnIndex: columnIndex,
        column: column,
        property: property
    };
    var resolvedActions = resolveOrDefault(actionResolver, actions, rowData, extraData);
    var resolvedIsDisabled = resolveOrDefault(areActionsDisabled, rowData && rowData.disableActions, rowData, extraData);
    var renderProps = resolvedActions && resolvedActions.length > 0
        ? {
            children: (<ActionsColumn_1.ActionsColumn items={resolvedActions} dropdownPosition={dropdownPosition} dropdownDirection={dropdownDirection} isDisabled={resolvedIsDisabled} rowData={rowData} extraData={extraData}>
              {label}
            </ActionsColumn_1.ActionsColumn>)
        }
        : {};
    return __assign({ className: react_styles_1.css(table_1["default"].tableAction), isVisible: true }, renderProps);
}; };
