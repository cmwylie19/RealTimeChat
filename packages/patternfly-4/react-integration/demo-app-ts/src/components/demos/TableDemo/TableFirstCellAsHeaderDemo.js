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
var TableFirstCellAsHeaderDemo = /** @class */ (function (_super) {
    __extends(TableFirstCellAsHeaderDemo, _super);
    function TableFirstCellAsHeaderDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            columns: [
                { title: 'Header cell', cellTransforms: [react_table_1.headerCol('selectable')] },
                'Branches',
                { title: 'Pull requests' },
                'Workspaces',
                'Last Commit'
            ],
            rows: [['one', 'two', 'three', 'four', 'five']]
        };
        return _this;
    }
    TableFirstCellAsHeaderDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    TableFirstCellAsHeaderDemo.prototype.render = function () {
        var _a = this.state, columns = _a.columns, rows = _a.rows;
        return (<react_table_1.Table caption="Table with First cell as Header" rows={rows} cells={columns}>
        <react_table_1.TableHeader />
        <react_table_1.TableBody />
      </react_table_1.Table>);
    };
    return TableFirstCellAsHeaderDemo;
}(React.Component));
exports.TableFirstCellAsHeaderDemo = TableFirstCellAsHeaderDemo;
