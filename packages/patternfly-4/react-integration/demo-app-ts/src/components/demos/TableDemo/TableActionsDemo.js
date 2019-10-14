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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var React = require("react");
var react_table_1 = require("@patternfly/react-table");
var TableActionsDemo = /** @class */ (function (_super) {
    __extends(TableActionsDemo, _super);
    function TableActionsDemo(props) {
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
                    cells: ['one', 'two', 'a', 'four', 'five'],
                    type: 'green'
                },
                {
                    cells: ['a', 'two', 'k', 'four', 'five']
                },
                {
                    cells: ['p', 'two', 'b', 'four', 'five'],
                    type: 'blue'
                },
                {
                    cells: ['5', '2', 'b', 'four', 'five']
                }
            ]
        };
        return _this;
    }
    TableActionsDemo.prototype.actionResolver = function (rowData, _a) {
        var rowIndex = _a.rowIndex;
        if (rowIndex === 1) {
            return null;
        }
        var thirdAction = rowData.type === 'blue'
            ? [
                {
                    isSeparator: true
                },
                {
                    title: 'Third action',
                    // tslint:disable-next-line:no-shadowed-variable
                    onClick: function (event, rowId, rowData, extra) {
                        // tslint:disable-next-line:no-console
                        return console.log("clicked on Third action, on row " + rowId + " of type " + rowData.type);
                    }
                }
            ]
            : [];
        return __spreadArrays([
            {
                title: 'Some action',
                // tslint:disable-next-line:no-shadowed-variable
                onClick: function (event, rowId, rowData, extra) {
                    // tslint:disable-next-line:no-console
                    return console.log("clicked on Some action, on row " + rowId + " of type " + rowData.type);
                }
            },
            {
                title: 'Another action',
                // tslint:disable-next-line:no-shadowed-variable
                onClick: function (event, rowId, rowData, extra) {
                    // tslint:disable-next-line:no-console
                    return console.log("clicked on Another action, on row " + rowId + " of type " + rowData.type);
                }
            }
        ], thirdAction);
    };
    TableActionsDemo.prototype.areActionsDisabled = function (rowData, _a) {
        var rowIndex = _a.rowIndex;
        return rowIndex === 3;
    };
    TableActionsDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    TableActionsDemo.prototype.render = function () {
        var _a = this.state, columns = _a.columns, rows = _a.rows;
        return (<react_table_1.Table caption="Actions Table" cells={columns} rows={rows} actionResolver={this.actionResolver} areActionsDisabled={this.areActionsDisabled}>
        <react_table_1.TableHeader />
        <react_table_1.TableBody />
      </react_table_1.Table>);
    };
    return TableActionsDemo;
}(React.Component));
exports.TableActionsDemo = TableActionsDemo;
