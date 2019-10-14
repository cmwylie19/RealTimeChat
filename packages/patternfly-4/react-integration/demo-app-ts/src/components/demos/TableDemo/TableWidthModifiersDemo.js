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
var TableWidthModifiersDemo = /** @class */ (function (_super) {
    __extends(TableWidthModifiersDemo, _super);
    function TableWidthModifiersDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            columns: [
                { title: 'Header cell', transforms: [react_table_1.cellWidth(10)] },
                'Branches',
                { title: 'Pull requests', transforms: [react_table_1.cellWidth(30)] },
                'Workspaces',
                {
                    title: 'Last Commit',
                    transforms: [react_table_1.cellWidth('max')]
                }
            ],
            rows: [['one', 'two', 'three', 'four', 'five']]
        };
        return _this;
    }
    TableWidthModifiersDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    TableWidthModifiersDemo.prototype.render = function () {
        var _a = this.state, columns = _a.columns, rows = _a.rows;
        return (<react_table_1.Table caption="Table with Width Modifiers" cells={columns} rows={rows}>
        <react_table_1.TableHeader />
        <react_table_1.TableBody />
      </react_table_1.Table>);
    };
    return TableWidthModifiersDemo;
}(React.Component));
exports.TableWidthModifiersDemo = TableWidthModifiersDemo;
