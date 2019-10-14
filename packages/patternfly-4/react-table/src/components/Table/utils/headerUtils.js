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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var transformers_1 = require("./transformers");
var formatters_1 = require("./formatters");
/**
 * Generate header with transforms and formatters from custom header object.
 * @param {*} header with transforms, formatters, columnTransforms, and rest of header object.
 * @param {*} title to be used as label in header config.
 * @return {*} header, label, transforms: Array, formatters: Array.
 */
var generateHeader = function (_a, title) {
    var origTransforms = _a.transforms, origFormatters = _a.formatters, columnTransforms = _a.columnTransforms, header = _a.header;
    return (__assign(__assign({}, header), { label: title, transforms: __spreadArrays([
            transformers_1.scopeColTransformer,
            transformers_1.emptyCol
        ], (origTransforms || []), (columnTransforms || []), (header && header.hasOwnProperty('transforms') ? header.transforms : [])), formatters: __spreadArrays((origFormatters || []), (header && header.hasOwnProperty('formatters') ? header.formatters : [])) }));
};
/**
 * Function to generate cell for header config to change look of each cell.
 * @param {*} customCell config with cellFormatters, cellTransforms, columnTransforms and rest of cell config.
 * @returns {*} cell, transforms: Array, formatters: Array.
 */
var generateCell = function (_a, extra) {
    var cellFormatters = _a.cellFormatters, cellTransforms = _a.cellTransforms, columnTransforms = _a.columnTransforms, cell = _a.cell;
    return (__assign(__assign({}, cell), { transforms: __spreadArrays((cellTransforms || []), (columnTransforms || []), (cell && cell.hasOwnProperty('transforms') ? cell.transforms : []), [
            transformers_1.mapProps // This transform should be applied last so that props that are manually defined at the cell level will override all other transforms.
        ]), formatters: __spreadArrays([
            formatters_1.defaultTitle
        ], (cellFormatters || []), (cell && cell.hasOwnProperty('formatters') ? cell.formatters : [])) }));
};
/**
 * Function to map custom simple object properties to expected format with property, header, cell, extra params
 * and props.
 * @param {*} column to be shown in header - either string or object with title, transformers and formatters (for cels as well).
 * @param {*} extra additional object with callbacks for specific formatters.
 * @param {*} key cell key to be shown in data-key.
 * @param {*} props additional props for each cell.
 * @returns {*} object with property, extraParams, header, cell and props.
 */
var mapHeader = function (column, extra, key) {
    var props = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        props[_i - 3] = arguments[_i];
    }
    var title = (column.hasOwnProperty('title') ? column.title : column);
    return {
        property: (typeof title === 'string' &&
            title
                .toLowerCase()
                .trim()
                .replace(/\s/g, '-')) ||
            "column-" + key,
        extraParams: extra,
        data: column.data,
        header: generateHeader(column, title),
        cell: generateCell(column, extra),
        props: __assign(__assign({ 'data-label': typeof title === 'string' ? title : "column-" + key, 'data-key': key }, (column.hasOwnProperty('props') ? column.props : {})), props)
    };
};
/**
 * Function to define select cell in first column.
 * @param {*} extraObject with onSelect callback.
 * @returns {*} object with empty title, tranforms - Array, cellTransforms - Array.
 */
var selectableTransforms = function (_a) {
    var onSelect = _a.onSelect, canSelectAll = _a.canSelectAll;
    return __spreadArrays((onSelect
        ? [
            {
                title: '',
                transforms: (canSelectAll && [transformers_1.selectable]) || null,
                cellTransforms: [transformers_1.selectable]
            }
        ]
        : []));
};
/**
 * Function to define actions in last column.
 * @param {*} extraObject with actions array.
 * @returns {*} object with empty title, tranforms - Array, cellTransforms - Array.
 */
var actionsTransforms = function (_a) {
    var actions = _a.actions, actionResolver = _a.actionResolver, areActionsDisabled = _a.areActionsDisabled;
    return __spreadArrays((actionResolver || actions
        ? [
            {
                title: '',
                transforms: [transformers_1.emptyTD],
                cellTransforms: [transformers_1.cellActions(actions, actionResolver, areActionsDisabled)]
            }
        ]
        : []));
};
/**
 * Function to define collapsible in first column.
 * @param {*}  extraObject with onCollapse callback.
 * @returns {*} object with empty title, tranforms - Array, cellTransforms - Array.
 */
var collapsibleTransfroms = function (_a) {
    var onCollapse = _a.onCollapse;
    return __spreadArrays((onCollapse
        ? [
            {
                title: '',
                transforms: [transformers_1.emptyTD],
                cellTransforms: [transformers_1.collapsible]
            }
        ]
        : []));
};
/**
 * Function to add additional cell transforms to object.
 * @param {*} cell to be expanded.
 * @param {*} additional thing to be added to cellTransforms.
 * @returns {*} object with title from cell and cellTransforms with additional in.
 */
var addAdditionalCellTranforms = function (cell, additional) { return (__assign(__assign({}, (cell.hasOwnProperty('title') ? cell : { title: cell })), { cellTransforms: __spreadArrays((cell.hasOwnProperty('cellTransforms') ? cell.cellTransforms : []), [additional]) })); };
/**
 * Function to change expanded row with additional transforms.
 * @param {*} header info with cellTransforms.
 * @param {*} extraObject with onCollapse function.
 */
var expandContent = function (header, _a) {
    var onCollapse = _a.onCollapse;
    if (!onCollapse) {
        return header;
    }
    return header.map(function (cell, key) {
        var parentIdCell = addAdditionalCellTranforms(cell, transformers_1.parentId);
        return key === 0 ? addAdditionalCellTranforms(parentIdCell, transformers_1.expandedRow(header.length)) : parentIdCell;
    });
};
/**
 * Function to join parent and their children so they can be rendered in tbody.
 * @param {*} rows raw data to find out if it's child or parent.
 * @param {*} children data to render (array of react children).
 */
exports.mapOpenedRows = function (rows, children) {
    return rows.reduce(function (acc, curr, key) {
        if (curr.hasOwnProperty('parent')) {
            var parent_1 = acc.length > 0 && acc[acc.length - 1];
            if (parent_1) {
                acc[acc.length - 1].rows = __spreadArrays(acc[acc.length - 1].rows, [children[key]]);
                if (curr.hasOwnProperty('compoundParent')) {
                    // if this is compound expand, check for any open child cell
                    acc[acc.length - 1].isOpen = acc[acc.length - 1].rows.some(function (oneRow) {
                        return oneRow.props.rowData.cells.some(function (oneCell) { return oneCell.props && oneCell.props.isOpen; });
                    });
                }
            }
        }
        else {
            acc = __spreadArrays(acc, [__assign(__assign({}, curr), { rows: [children[key]] })]);
        }
        return acc;
    }, []);
};
/**
 * Function to calculate columns based on custom config.
 * It adds some custom cells for collapse, select, if expanded row and actions.
 * @param {*} headerRows custom object with described table header cells.
 * @param {*} extra object with custom callbacks.
 * @return {*} expected object for react tabular table.
 */
exports.calculateColumns = function (headerRows, extra) {
    return headerRows &&
        __spreadArrays(collapsibleTransfroms(extra), selectableTransforms(extra), expandContent(headerRows, extra), actionsTransforms(extra)).map(function (oneCol, key) { return (__assign({}, mapHeader(oneCol, extra, key))); });
};
