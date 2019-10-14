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
var TableSimpleActionsDemo = /** @class */ (function (_super) {
    __extends(TableSimpleActionsDemo, _super);
    function TableSimpleActionsDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            columns: [
                { title: 'Repositories', cellTransforms: [react_table_1.headerCol()] },
                'Branches',
                { title: 'Pull requests' },
                'Workspaces',
                'Last Commit'
            ],
            rows: [
                {
                    cells: ['one', 'two', 'a', 'four', 'five']
                },
                {
                    cells: ['a', 'two', 'k', 'four', 'five']
                },
                {
                    cells: ['p', 'two', 'b', 'four', 'five'],
                    disableActions: true
                }
            ],
            actions: [
                {
                    title: 'Some action',
                    onClick: function (event, rowId, rowData, extra) { return console.log('clicked on Some action, on row: ', rowId); }
                },
                {
                    title: 'Another action',
                    onClick: function (event, rowId, rowData, extra) { return console.log('clicked on Another action, on row: ', rowId); }
                },
                {
                    isSeparator: true
                },
                {
                    title: 'Third action',
                    onClick: function (event, rowId, rowData, extra) { return console.log('clicked on Third action, on row: ', rowId); }
                }
            ]
        };
        return _this;
    }
    TableSimpleActionsDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    TableSimpleActionsDemo.prototype.render = function () {
        var _a = this.state, columns = _a.columns, rows = _a.rows, actions = _a.actions;
        return (<react_table_1.Table caption="Actions Table" actions={actions} cells={columns} rows={rows}>
        <react_table_1.TableHeader />
        <react_table_1.TableBody />
      </react_table_1.Table>);
    };
    ;
    return TableSimpleActionsDemo;
}(React.Component));
exports.TableSimpleActionsDemo = TableSimpleActionsDemo;
;
