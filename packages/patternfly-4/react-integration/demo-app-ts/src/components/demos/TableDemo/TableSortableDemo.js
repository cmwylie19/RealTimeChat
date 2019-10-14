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
var TableSortableDemo = /** @class */ (function (_super) {
    __extends(TableSortableDemo, _super);
    function TableSortableDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            columns: [
                { title: 'Repositories', transforms: [react_table_1.sortable] },
                'Branches',
                { title: 'Pull requests', transforms: [react_table_1.sortable] },
                'Workspaces',
                'Last Commit'
            ],
            rows: [['one', 'two', 'a', 'four', 'five'], ['a', 'two', 'k', 'four', 'five'], ['p', 'two', 'b', 'four', 'five']],
            sortBy: {}
        };
        _this.onSort = _this.onSort.bind(_this);
        return _this;
    }
    TableSortableDemo.prototype.onSort = function (_event, index, direction) {
        var sortedRows = this.state.rows.sort(function (a, b) { return (a[index] < b[index] ? -1 : a[index] > b[index] ? 1 : 0); });
        this.setState({
            sortBy: {
                index: index,
                direction: direction
            },
            rows: direction === react_table_1.SortByDirection.asc ? sortedRows : sortedRows.reverse()
        });
    };
    TableSortableDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    TableSortableDemo.prototype.render = function () {
        var _a = this.state, columns = _a.columns, rows = _a.rows, sortBy = _a.sortBy;
        return (<react_table_1.Table caption="Sortable Table" sortBy={sortBy} onSort={this.onSort} cells={columns} rows={rows}>
        <react_table_1.TableHeader />
        <react_table_1.TableBody />
      </react_table_1.Table>);
    };
    return TableSortableDemo;
}(React.Component));
exports.TableSortableDemo = TableSortableDemo;
