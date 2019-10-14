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
/**
 * header-row.tsx
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
var React = require("react");
var evaluate_formatters_1 = require("./evaluate-formatters");
var evaluate_transforms_1 = require("./evaluate-transforms");
var merge_props_1 = require("./merge-props");
exports.HeaderRow = function (_a) {
    var rowData = _a.rowData, rowIndex = _a.rowIndex, renderers = _a.renderers, _b = _a.onRow, onRow = _b === void 0 ? function () { return Object; } : _b;
    return React.createElement(renderers.row, onRow(rowData, { rowIndex: rowIndex }), rowData.map(function (column, columnIndex) {
        var property = column.property, _a = column.header, header = _a === void 0 ? {} : _a, _b = column.props, props = _b === void 0 ? {} : _b;
        var evaluatedProperty = property || (header && header.property);
        var label = header.label, _c = header.transforms, transforms = _c === void 0 ? [] : _c, _d = header.formatters, formatters = _d === void 0 ? [] : _d;
        var extraParameters = {
            columnIndex: columnIndex,
            property: evaluatedProperty,
            column: column
        };
        var transformedProps = evaluate_transforms_1.evaluateTransforms(transforms, label, extraParameters);
        if (!transformedProps) {
            // tslint:disable-next-line:no-console
            console.warn('Table.Header - Failed to receive a transformed result'); // eslint-disable-line max-len, no-console
        }
        return React.createElement(renderers.cell, __assign({ key: columnIndex + "-header" }, merge_props_1.mergeProps(props, header && header.props, transformedProps)), transformedProps.children || evaluate_formatters_1.evaluateFormatters(formatters)(label, extraParameters));
    }));
};
