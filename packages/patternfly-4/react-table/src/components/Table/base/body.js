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
 * body.tsx
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
var React = require("react");
var lodash_1 = require("lodash");
var resolve_row_key_1 = require("./resolve-row-key");
var body_row_1 = require("./body-row");
var provider_1 = require("./provider");
var BaseBody = /** @class */ (function (_super) {
    __extends(BaseBody, _super);
    function BaseBody() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.omitOnRow = function (props) {
            var onRow = props.onRow, ret = __rest(props, ["onRow"]);
            return ret;
        };
        return _this;
    }
    BaseBody.prototype.shouldComponentUpdate = function (nextProps) {
        // Skip checking props against `onRow` since that can be bound at render().
        // That's not particularly good practice but you never know how the users
        // prefer to define the handler.
        // Check for wrapper based override.
        var renderers = nextProps.renderers;
        if (renderers && renderers.body && renderers.body.wrapper && renderers.body.wrapper.shouldComponentUpdate) {
            if (lodash_1.isFunction(renderers.body.wrapper.shouldComponentUpdate)) {
                return renderers.body.wrapper.shouldComponentUpdate.call(this, nextProps, {}, {});
            }
            return true;
        }
        return !(lodash_1.isEqual(this.omitOnRow(this.props), this.omitOnRow(nextProps)));
    };
    BaseBody.prototype.render = function () {
        var _a = this.props, onRow = _a.onRow, rows = _a.rows, rowKey = _a.rowKey, columns = _a.columns, renderers = _a.renderers, props = __rest(_a, ["onRow", "rows", "rowKey", "columns", "renderers"]);
        var children = rows.map(function (rowData, index) {
            var key = resolve_row_key_1.resolveRowKey({ rowData: rowData, rowIndex: index, rowKey: rowKey });
            return React.createElement(body_row_1.BodyRow, {
                key: key,
                renderers: renderers.body,
                onRow: onRow,
                rowKey: key,
                rowIndex: index,
                rowData: rowData,
                columns: columns
            });
        });
        return React.createElement(renderers.body.wrapper, props, children);
    };
    BaseBody.defaultProps = {
        onRow: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return Object;
        }
    };
    return BaseBody;
}(React.Component));
exports.Body = function (props) { return (<provider_1.ProviderContext.Consumer>
    {function (_a) {
    var columns = _a.columns, renderers = _a.renderers;
    return <BaseBody columns={columns} renderers={renderers} {...props}/>;
}}
  </provider_1.ProviderContext.Consumer>); };
