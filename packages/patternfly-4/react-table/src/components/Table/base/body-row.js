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
exports.__esModule = true;
/**
 * body-row.tsx
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
var lodash_1 = require("lodash");
var React = require("react");
var columns_are_equal_1 = require("./columns-are-equal");
var evaluate_formatters_1 = require("./evaluate-formatters");
var evaluate_transforms_1 = require("./evaluate-transforms");
var merge_props_1 = require("./merge-props");
var BodyRow = /** @class */ (function (_super) {
    __extends(BodyRow, _super);
    function BodyRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BodyRow.prototype.shouldComponentUpdate = function (nextProps) {
        var _a = this.props, columns = _a.columns, rowData = _a.rowData;
        // Check for row based override.
        var renderers = nextProps.renderers;
        if (renderers && renderers.row && renderers.row.shouldComponentUpdate) {
            if (lodash_1.isFunction(renderers.row.shouldComponentUpdate)) {
                return renderers.row.shouldComponentUpdate.call(this, nextProps, {}, {});
            }
            return true;
        }
        return !(columns_are_equal_1.columnsAreEqual(columns, nextProps.columns) && lodash_1.isEqual(rowData, nextProps.rowData));
    };
    BodyRow.prototype.render = function () {
        var _a = this.props, columns = _a.columns, renderers = _a.renderers, onRow = _a.onRow, rowKey = _a.rowKey, rowIndex = _a.rowIndex, rowData = _a.rowData;
        return React.createElement(renderers.row, onRow(rowData, { rowIndex: rowIndex, rowKey: rowKey }), columns.map(function (column, columnIndex) {
            var property = column.property, cell = column.cell, props = column.props;
            var evaluatedProperty = (property || (cell && cell.property));
            var _a = cell || {}, _b = _a.transforms, transforms = _b === void 0 ? [] : _b, _c = _a.formatters, formatters = _c === void 0 ? [] : _c;
            var extraParameters = {
                columnIndex: columnIndex,
                property: evaluatedProperty,
                column: column,
                rowData: rowData,
                rowIndex: rowIndex,
                rowKey: rowKey
            };
            var transformed = evaluate_transforms_1.evaluateTransforms(transforms, rowData[evaluatedProperty], extraParameters);
            if (!transformed) {
                // tslint:disable-next-line:no-console
                console.warn('Table.Body - Failed to receive a transformed result');
            }
            return React.createElement(renderers.cell, __assign({ key: columnIndex + "-cell" }, merge_props_1.mergeProps(props, cell && cell.props, transformed)), transformed.children ||
                evaluate_formatters_1.evaluateFormatters(formatters)(rowData["_" + evaluatedProperty] || rowData[evaluatedProperty], extraParameters));
        }));
    };
    BodyRow.defaultProps = {
        onRow: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return Object;
        }
    };
    return BodyRow;
}(React.Component));
exports.BodyRow = BodyRow;
