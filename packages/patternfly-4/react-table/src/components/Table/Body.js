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
var base_1 = require("./base");
var Table_1 = require("./Table");
var utils_1 = require("./utils");
var flagVisibility = function (rows) {
    var visibleRows = rows.filter(function (oneRow) { return !oneRow.parent || oneRow.isExpanded; });
    if (visibleRows.length > 0) {
        visibleRows[0].isFirstVisible = true;
        visibleRows[visibleRows.length - 1].isLastVisible = true;
    }
};
var ContextBody = /** @class */ (function (_super) {
    __extends(ContextBody, _super);
    function ContextBody() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onRow = function (row, rowProps) {
            var _a = _this.props, onRowClick = _a.onRowClick, onRow = _a.onRow;
            var extendedRowProps = __assign(__assign({}, rowProps), (onRow ? onRow(row, rowProps) : {}));
            return {
                row: row,
                rowProps: extendedRowProps,
                onMouseDown: function (event) {
                    var computedData = {
                        isInput: event.target.tagName !== 'INPUT',
                        isButton: event.target.tagName !== 'BUTTON'
                    };
                    onRowClick(event, row, rowProps, computedData);
                }
            };
        };
        _this.mapCells = function (headerData, row, rowKey) {
            // column indexes start after generated optional columns
            var additionalColsIndexShift = headerData[0].extraParams.firstUserColumnIndex;
            return __assign({}, (row &&
                (row.cells || row).reduce(function (acc, cell, cellIndex) {
                    var _a;
                    var isCellObject = cell === Object(cell);
                    var mappedCell = (_a = {},
                        _a[headerData[cellIndex + additionalColsIndexShift].property] = {
                            title: isCellObject ? cell.title : cell,
                            props: __assign({ isVisible: true }, (isCellObject ? cell.props : null))
                        },
                        _a);
                    // increment the shift index when a cell spans multiple columns
                    if (isCellObject && cell.props && cell.props.colSpan) {
                        additionalColsIndexShift += cell.props.colSpan - 1;
                    }
                    return __assign(__assign({}, acc), mappedCell);
                }, { id: row.id !== undefined ? row.id : rowKey })));
        };
        return _this;
    }
    ContextBody.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, headerData = _a.headerData, rows = _a.rows, rowKey = _a.rowKey, children = _a.children, onRowClick = _a.onRowClick, props = __rest(_a, ["className", "headerData", "rows", "rowKey", "children", "onRowClick"]);
        var mappedRows;
        if (headerData.length > 0) {
            mappedRows = rows.map(function (oneRow, oneRowKey) { return (__assign(__assign(__assign({}, oneRow), _this.mapCells(headerData, oneRow, oneRowKey)), { isExpanded: utils_1.isRowExpanded(oneRow, rows), isFirst: oneRowKey === 0, isLast: oneRowKey === rows.length - 1, isFirstVisible: false, isLastVisible: false })); });
            flagVisibility(mappedRows);
        }
        return (<React.Fragment>
        {mappedRows && (<base_1.Body {...props} mappedRows={mappedRows} rows={mappedRows} onRow={this.onRow} rowKey={rowKey} className={className}/>)}
      </React.Fragment>);
    };
    return ContextBody;
}(React.Component));
exports.TableBody = function (_a) {
    var _b = _a.onRow, onRow = _b === void 0 ? function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return Object;
    } : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.children, children = _d === void 0 ? null : _d, _e = _a.rowKey, rowKey = _e === void 0 ? 'id' : _e, _f = _a.onRowClick, onRowClick = _f === void 0 ? function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return undefined;
    } : _f, props = __rest(_a, ["onRow", "className", "children", "rowKey", "onRowClick"]);
    return (<Table_1.TableContext.Consumer>
    {function (_a) {
        var _b = _a.headerData, headerData = _b === void 0 ? [] : _b, _c = _a.rows, rows = _c === void 0 ? [] : _c, rest = __rest(_a, ["headerData", "rows"]);
        return <ContextBody headerData={headerData} rows={rows} onRow={onRow} className={className} children={children} rowKey={rowKey} onRowClick={onRowClick} {...props} {...rest}/>;
    }}
  </Table_1.TableContext.Consumer>);
};
