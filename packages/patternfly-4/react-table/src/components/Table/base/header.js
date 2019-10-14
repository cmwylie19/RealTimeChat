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
/**
 * header.tsx
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
var React = require("react");
var provider_1 = require("./provider");
var header_row_1 = require("./header-row");
var BaseHeader = /** @class */ (function (_super) {
    __extends(BaseHeader, _super);
    function BaseHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseHeader.prototype.render = function () {
        var _a = this.props, children = _a.children, headerRows = _a.headerRows, onRow = _a.onRow, renderers = _a.renderers, columns = _a.columns, props = __rest(_a, ["children", "headerRows", "onRow", "renderers", "columns"]);
        // If headerRows aren't passed, default to bodyColumns as header rows
        return React.createElement(renderers.header.wrapper, props, [
            (headerRows || [columns]).map(function (rowData, rowIndex) {
                return React.createElement(header_row_1.HeaderRow, {
                    key: rowIndex + "-header-row",
                    renderers: renderers.header,
                    onRow: onRow,
                    rowData: rowData,
                    rowIndex: rowIndex
                });
            })
        ].concat(children));
    };
    return BaseHeader;
}(React.Component));
exports.Header = function (props) { return (<provider_1.ProviderContext.Consumer>
    {function (_a) {
    var columns = _a.columns, renderers = _a.renderers;
    return <BaseHeader columns={columns} renderers={renderers} {...props}/>;
}}
  </provider_1.ProviderContext.Consumer>); };
