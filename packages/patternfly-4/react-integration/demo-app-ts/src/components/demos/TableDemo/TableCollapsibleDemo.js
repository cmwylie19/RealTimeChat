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
var TableCollapsibleDemo = /** @class */ (function (_super) {
    __extends(TableCollapsibleDemo, _super);
    function TableCollapsibleDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            columns: [
                {
                    title: 'Header cell',
                    cellFormatters: [react_table_1.expandable]
                },
                'Branches',
                { title: 'Pull requests' },
                'Workspaces',
                {
                    title: 'Last Commit'
                }
            ],
            rows: [
                {
                    cells: ['one', 'two', 'three', 'four', 'five']
                },
                {
                    isOpen: true,
                    cells: ['parent - 1', 'two', 'three', 'four', 'five']
                },
                {
                    parent: 1,
                    fullWidth: true,
                    cells: ['child - 1']
                },
                {
                    isOpen: false,
                    cells: ['parent - 2', 'two', 'three', 'four', 'five']
                },
                {
                    parent: 3,
                    cells: ['child - 2']
                },
                {
                    isOpen: false,
                    cells: ['parent - 3', 'two', 'three', 'four', 'five']
                },
                {
                    parent: 5,
                    fullWidth: true,
                    noPadding: true,
                    cells: ['child - 3']
                }
            ]
        };
        _this.onCollapse = _this.onCollapse.bind(_this);
        return _this;
    }
    TableCollapsibleDemo.prototype.onCollapse = function (event, rowKey, isOpen) {
        var rows = this.state.rows;
        /**
         * Please do not use rowKey as row index for more complex tables.
         * Rather use some kind of identifier like ID passed with each row.
         */
        rows[rowKey].isOpen = isOpen;
        this.setState({
            rows: rows
        });
    };
    TableCollapsibleDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    TableCollapsibleDemo.prototype.render = function () {
        var _a = this.state, columns = _a.columns, rows = _a.rows;
        return (<react_table_1.Table caption="Collapsible table" onCollapse={this.onCollapse} rows={rows} cells={columns}>
        <react_table_1.TableHeader />
        <react_table_1.TableBody />
      </react_table_1.Table>);
    };
    return TableCollapsibleDemo;
}(React.Component));
exports.TableCollapsibleDemo = TableCollapsibleDemo;
