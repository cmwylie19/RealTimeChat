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
var selectable_1 = require("./decorators/selectable");
exports.selectable = selectable_1.selectable;
var sortable_1 = require("./decorators/sortable");
exports.sortable = sortable_1.sortable;
var cellActions_1 = require("./decorators/cellActions");
exports.cellActions = cellActions_1.cellActions;
var cellWidth_1 = require("./decorators/cellWidth");
exports.cellWidth = cellWidth_1.cellWidth;
var cellHeightAuto_1 = require("./decorators/cellHeightAuto");
exports.cellHeightAuto = cellHeightAuto_1.cellHeightAuto;
var wrappable_1 = require("./decorators/wrappable");
exports.wrappable = wrappable_1.wrappable;
var textCenter_1 = require("./decorators/textCenter");
exports.textCenter = textCenter_1.textCenter;
var collapsible_1 = require("./decorators/collapsible");
exports.collapsible = collapsible_1.collapsible;
exports.expandedRow = collapsible_1.expandedRow;
exports.expandable = collapsible_1.expandable;
var compoundExpand_1 = require("./decorators/compoundExpand");
exports.compoundExpand = compoundExpand_1.compoundExpand;
var headerCol_1 = require("./decorators/headerCol");
exports.headerCol = headerCol_1.headerCol;
var classNames_1 = require("./decorators/classNames");
exports.classNames = classNames_1.classNames;
exports.Visibility = classNames_1.Visibility;
var emptyTD = function () { return ({
    scope: '',
    component: 'td'
}); };
exports.emptyTD = emptyTD;
var scopeColTransformer = function () { return ({
    scope: 'col'
}); };
exports.scopeColTransformer = scopeColTransformer;
var emptyCol = function (label) { return (__assign({}, (label ? {} : { scope: '' }))); };
exports.emptyCol = emptyCol;
var parentId = function (_value, _a) {
    var rowData = _a.rowData;
    return ({
        parentId: rowData.parent
    });
};
exports.parentId = parentId;
var mapProps = function (_label, _a) {
    var property = _a.property, rowData = _a.rowData;
    return (__assign({}, (rowData[property] && rowData[property].props)));
};
exports.mapProps = mapProps;
