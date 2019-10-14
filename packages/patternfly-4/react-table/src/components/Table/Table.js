"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var React = require("react");
var table_1 = require("@patternfly/react-styles/css/components/Table/table");
var table_grid_1 = require("@patternfly/react-styles/css/components/Table/table-grid");
var react_core_1 = require("@patternfly/react-core");
var react_styles_1 = require("@patternfly/react-styles");
var base_1 = require("./base");
var BodyCell_1 = require("./BodyCell");
var HeaderCell_1 = require("./HeaderCell");
var RowWrapper_1 = require("./RowWrapper");
var BodyWrapper_1 = require("./BodyWrapper");
var headerUtils_1 = require("./utils/headerUtils");
var TableGridBreakpoint;
(function (TableGridBreakpoint) {
    TableGridBreakpoint["none"] = "";
    TableGridBreakpoint["grid"] = "grid";
    TableGridBreakpoint["gridMd"] = "grid-md";
    TableGridBreakpoint["gridLg"] = "grid-lg";
    TableGridBreakpoint["gridXl"] = "grid-xl";
    TableGridBreakpoint["grid2xl"] = "grid-2xl";
})(TableGridBreakpoint = exports.TableGridBreakpoint || (exports.TableGridBreakpoint = {}));
var TableVariant;
(function (TableVariant) {
    TableVariant["compact"] = "compact";
})(TableVariant = exports.TableVariant || (exports.TableVariant = {}));
var SortByDirection;
(function (SortByDirection) {
    SortByDirection["asc"] = "asc";
    SortByDirection["desc"] = "desc";
})(SortByDirection = exports.SortByDirection || (exports.SortByDirection = {}));
exports.TableContext = React.createContext({
    headerData: null,
    headerRows: null,
    rows: []
});
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isSelected = function (row) { return row.selected === true; };
        _this.areAllRowsSelected = function (rows) {
            if (rows === undefined || rows.length === 0) {
                return false;
            }
            return rows.every(function (row) { return _this.isSelected(row) || (row.hasOwnProperty('parent') && !row.showSelect); });
        };
        return _this;
    }
    Table.prototype.render = function () {
        var _a = this.props, ariaLabel = _a["aria-label"], caption = _a.caption, header = _a.header, className = _a.className, gridBreakPoint = _a.gridBreakPoint, onSort = _a.onSort, onSelect = _a.onSelect, canSelectAll = _a.canSelectAll, sortBy = _a.sortBy, children = _a.children, actions = _a.actions, actionResolver = _a.actionResolver, areActionsDisabled = _a.areActionsDisabled, onCollapse = _a.onCollapse, onExpand = _a.onExpand, rowLabeledBy = _a.rowLabeledBy, dropdownPosition = _a.dropdownPosition, dropdownDirection = _a.dropdownDirection, contentId = _a.contentId, expandId = _a.expandId, variant = _a.variant, rows = _a.rows, cells = _a.cells, bodyWrapper = _a.bodyWrapper, rowWrapper = _a.rowWrapper, borders = _a.borders, role = _a.role, props = __rest(_a, ['aria-label', "caption", "header", "className", "gridBreakPoint", "onSort", "onSelect", "canSelectAll", "sortBy", "children", "actions", "actionResolver", "areActionsDisabled", "onCollapse", "onExpand", "rowLabeledBy", "dropdownPosition", "dropdownDirection", "contentId", "expandId", "variant", "rows", "cells", "bodyWrapper", "rowWrapper", "borders", "role"]);
        if (!ariaLabel && !caption && !header && role !== 'presentation') {
            // tslint:disable-next-line:no-console
            console.error('Table: Specify at least one of: header, caption, aria-label');
        }
        var headerData = headerUtils_1.calculateColumns(cells, {
            sortBy: sortBy,
            onSort: onSort,
            onSelect: onSelect,
            canSelectAll: canSelectAll,
            allRowsSelected: onSelect ? this.areAllRowsSelected(rows) : false,
            actions: actions,
            actionResolver: actionResolver,
            areActionsDisabled: areActionsDisabled,
            onCollapse: onCollapse,
            onExpand: onExpand,
            rowLabeledBy: rowLabeledBy,
            expandId: expandId,
            contentId: contentId,
            dropdownPosition: dropdownPosition,
            dropdownDirection: dropdownDirection,
            firstUserColumnIndex: [onCollapse, onSelect].filter(function (callback) { return callback; }).length
        });
        return (<exports.TableContext.Provider value={{
            headerData: headerData,
            headerRows: null,
            rows: rows
        }}>
        {header}
        <base_1.Provider {...props} aria-label={ariaLabel} renderers={{
            body: {
                wrapper: bodyWrapper || BodyWrapper_1.BodyWrapper,
                row: rowWrapper || RowWrapper_1.RowWrapper,
                cell: BodyCell_1.BodyCell
            },
            header: {
                cell: HeaderCell_1.HeaderCell
            }
        }} columns={headerData} role={role} className={react_styles_1.css(table_1["default"].table, gridBreakPoint && react_styles_1.getModifier(table_grid_1["default"], gridBreakPoint), react_styles_1.getModifier(table_1["default"], variant), ((onCollapse && variant === TableVariant.compact) || onExpand) && table_1["default"].modifiers.expandable, variant === TableVariant.compact && borders === false ? table_1["default"].modifiers.noBorderRows : null, className)}>
          {caption && <caption>{caption}</caption>}
          {children}
        </base_1.Provider>
      </exports.TableContext.Provider>);
    };
    Table.defaultProps = {
        "children": null,
        "className": '',
        "variant": null,
        "borders": true,
        "rowLabeledBy": 'simple-node',
        "expandId": 'expandable-toggle',
        "contentId": 'expanded-content',
        "dropdownPosition": react_core_1.DropdownPosition.right,
        "dropdownDirection": react_core_1.DropdownDirection.down,
        "header": undefined,
        "caption": undefined,
        'aria-label': undefined,
        "gridBreakPoint": TableGridBreakpoint.gridMd,
        "role": 'grid',
        "canSelectAll": true
    };
    return Table;
}(React.Component));
exports.Table = Table;
