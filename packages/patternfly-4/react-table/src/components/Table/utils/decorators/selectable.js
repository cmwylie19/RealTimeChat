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
var SelectColumn_1 = require("../../SelectColumn");
exports.selectable = function (label, _a) {
    var rowIndex = _a.rowIndex, columnIndex = _a.columnIndex, rowData = _a.rowData, column = _a.column, property = _a.property;
    var _b = column.extraParams, onSelect = _b.onSelect, allRowsSelected = _b.allRowsSelected, _c = _b.rowLabeledBy, rowLabeledBy = _c === void 0 ? 'simple-node' : _c;
    var extraData = {
        rowIndex: rowIndex,
        columnIndex: columnIndex,
        column: column,
        property: property
    };
    if (rowData && rowData.hasOwnProperty('parent') && !rowData.showSelect) {
        return {
            component: 'td',
            isVisible: true,
            scope: ''
        };
    }
    var rowId = rowIndex !== undefined ? rowIndex : -1;
    function selectClick(event) {
        var selected = rowIndex === undefined ? event.target.checked : rowData && !rowData.selected;
        // todo: change event type to React.FormEvent<HTMLInputElement> in the future, breaking change a.t.m.
        // tslint:disable-next-line:no-unused-expression
        onSelect && onSelect(event, selected, rowId, rowData, extraData);
    }
    var customProps = __assign({}, (rowId !== -1
        ? {
            "checked": rowData && !!rowData.selected,
            'aria-labelledby': rowLabeledBy + rowIndex
        }
        : {
            "checked": allRowsSelected,
            'aria-label': 'Select all rows'
        }));
    return {
        className: react_styles_1.css(table_1["default"].tableCheck),
        component: 'td',
        scope: '',
        isVisible: true,
        children: (<SelectColumn_1.SelectColumn {...customProps} onSelect={selectClick} name={rowId !== -1 ? "checkrow" + rowIndex : 'check-all'}>
        {label}
      </SelectColumn_1.SelectColumn>)
    };
};
