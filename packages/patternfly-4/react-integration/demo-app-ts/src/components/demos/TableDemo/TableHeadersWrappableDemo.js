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
exports.__esModule = true;
var React = require("react");
var react_table_1 = require("@patternfly/react-table");
var TableHeadersWrappableDemo = /** @class */ (function (_super) {
    __extends(TableHeadersWrappableDemo, _super);
    function TableHeadersWrappableDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            columns: [
                { title: 'This is a really long table header that goes on for a long time 1.', transforms: [react_table_1.wrappable] },
                { title: 'This is a really long table header that goes on for a long time 2.', transforms: [react_table_1.wrappable] },
                { title: 'This is a really long table header that goes on for a long time 3.', transforms: [react_table_1.wrappable] },
                { title: 'This is a really long table header that goes on for a long time 4.', transforms: [react_table_1.wrappable] },
                { title: 'This is a really long table header that goes on for a long time 5.', transforms: [react_table_1.wrappable] },
            ],
            rows: [
                ['Repository 1', '10', '25', '5', '2 days ago'],
                ['Repository 2', '10', '25', '5', '2 days ago'],
                ['Repository 3', '10', '25', '5', '2 days ago'],
                ['Repository 4', '10', '25', '5', '2 days ago'],
            ]
        };
        return _this;
    }
    TableHeadersWrappableDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    TableHeadersWrappableDemo.prototype.render = function () {
        var _a = this.state, columns = _a.columns, rows = _a.rows;
        return (<react_table_1.Table caption="Table with Wrappable Headers" cells={columns} rows={rows}>
        <react_table_1.TableHeader />
        <react_table_1.TableBody />
      </react_table_1.Table>);
    };
    return TableHeadersWrappableDemo;
}(React.Component));
exports.TableHeadersWrappableDemo = TableHeadersWrappableDemo;
