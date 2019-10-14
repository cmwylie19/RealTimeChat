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
// eslint-disable-next-line import/no-extraneous-dependencies
var react_table_1 = require("@patternfly/react-table");
var DemoSortableTable = /** @class */ (function (_super) {
    __extends(DemoSortableTable, _super);
    function DemoSortableTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            columns: [
                { title: 'Repositories', transforms: [react_table_1.sortable] },
                'Branches',
                { title: 'Pull requests', transforms: [react_table_1.sortable] },
                'Workspaces',
                'Last Commit'
            ],
            rows: [_this.props.firstColumnRows, ['a', 'two', 'k', 'four', 'five'], ['p', 'two', 'b', 'four', 'five']],
            sortBy: {}
        };
        _this.onSort = function (_event, index, direction) {
            var sortedRows = _this.state.rows.sort(function (a, b) {
                if (a[index] < b[index]) {
                    return -1;
                }
                return a[index] > b[index] ? 1 : 0;
            });
            _this.setState({
                sortBy: {
                    index: index,
                    direction: direction
                },
                rows: direction === react_table_1.SortByDirection.asc ? sortedRows : sortedRows.reverse()
            });
        };
        return _this;
    }
    DemoSortableTable.prototype.render = function () {
        var _a = this.state, columns = _a.columns, rows = _a.rows, sortBy = _a.sortBy;
        return (<react_table_1.Table aria-label="Sortable Table" variant={react_table_1.TableVariant.compact} sortBy={sortBy} onSort={this.onSort} cells={columns} rows={rows} className="pf-m-no-border-rows">
        <react_table_1.TableHeader />
        <react_table_1.TableBody />
      </react_table_1.Table>);
    };
    return DemoSortableTable;
}(React.Component));
exports.DemoSortableTable = DemoSortableTable;
