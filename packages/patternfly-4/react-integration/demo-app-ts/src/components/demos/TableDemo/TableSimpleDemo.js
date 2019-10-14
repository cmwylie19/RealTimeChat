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
var TableSimpleDemo = /** @class */ (function (_super) {
    __extends(TableSimpleDemo, _super);
    function TableSimpleDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            columns: [
                { title: 'Repositories' },
                'Branches',
                { title: 'Pull requests' },
                'Workspaces',
                {
                    title: 'Last Commit',
                    transforms: [react_table_1.textCenter],
                    cellTransforms: [react_table_1.textCenter]
                }
            ],
            rows: [
                ['one', 'two', 'three', 'four', 'five'],
                [
                    {
                        title: <div>one - 2</div>,
                        props: { title: 'hover title', colSpan: 3 }
                    },
                    'four - 2',
                    'five - 2'
                ],
                [
                    'one - 3',
                    'two - 3',
                    'three - 3',
                    'four - 3',
                    {
                        title: 'five - 3 (not centered)',
                        props: { textCenter: false }
                    }
                ]
            ]
        };
        return _this;
    }
    TableSimpleDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    TableSimpleDemo.prototype.render = function () {
        var _a = this.state, columns = _a.columns, rows = _a.rows;
        return (<react_table_1.Table caption="Simple Table" cells={columns} rows={rows}>
        <react_table_1.TableHeader />
        <react_table_1.TableBody />
      </react_table_1.Table>);
    };
    return TableSimpleDemo;
}(React.Component));
exports.TableSimpleDemo = TableSimpleDemo;
