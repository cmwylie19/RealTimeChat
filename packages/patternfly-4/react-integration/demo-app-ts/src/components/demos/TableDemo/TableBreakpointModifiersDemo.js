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
var TableBreakpointModifersDemo = /** @class */ (function (_super) {
    __extends(TableBreakpointModifersDemo, _super);
    function TableBreakpointModifersDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            columns: [
                {
                    title: 'Repositories',
                    columnTransforms: [react_table_1.classNames(react_table_1.Visibility.hidden, react_table_1.Visibility.visibleOnMd, react_table_1.Visibility.hiddenOnLg)]
                },
                'Branches',
                {
                    title: 'Pull requests',
                    columnTransforms: [react_table_1.classNames(react_table_1.Visibility.hiddenOnMd, react_table_1.Visibility.visibleOnLg)]
                },
                'Workspaces',
                {
                    title: 'Last Commit',
                    columnTransforms: [react_table_1.classNames(react_table_1.Visibility.hidden, react_table_1.Visibility.visibleOnSm)]
                }
            ],
            rows: [
                ['Visible only on md breakpoint', '10', 'Hidden only on md breakpoint', '5', 'Hidden on xs breakpoint'],
                ['Repository 2', '10', '25', '5', '2 days ago'],
                ['Repository 3', '10', '25', '5', '2 days ago'],
                ['Repository 4', '10', '25', '5', '2 days ago']
            ]
        };
        return _this;
    }
    TableBreakpointModifersDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    TableBreakpointModifersDemo.prototype.render = function () {
        var _a = this.state, columns = _a.columns, rows = _a.rows;
        return (<react_table_1.Table caption="Table with hidden/visible breakpoint modifiers" cells={columns} rows={rows}>
        <react_table_1.TableHeader />
        <react_table_1.TableBody />
      </react_table_1.Table>);
    };
    return TableBreakpointModifersDemo;
}(React.Component));
exports.TableBreakpointModifersDemo = TableBreakpointModifersDemo;
