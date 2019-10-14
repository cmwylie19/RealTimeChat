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
var TableCompactBorderlessRowsDemo = /** @class */ (function (_super) {
    __extends(TableCompactBorderlessRowsDemo, _super);
    function TableCompactBorderlessRowsDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            columns: [
                { title: 'Header cell' },
                'Branches',
                { title: 'Pull requests', props: { className: 'pf-u-text-align-center' } },
                '' // deliberately empty
            ],
            rows: [['one', 'two', 'three', 'four'], ['one', 'two', 'three', 'four'], ['one', 'two', 'three', 'four']]
        };
        return _this;
    }
    TableCompactBorderlessRowsDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    TableCompactBorderlessRowsDemo.prototype.render = function () {
        var _a = this.state, columns = _a.columns, rows = _a.rows;
        return (<react_table_1.Table caption="Compact Table with borderless rows" variant={react_table_1.TableVariant.compact} borders={false} cells={columns} rows={rows}>
        <react_table_1.TableHeader />
        <react_table_1.TableBody />
      </react_table_1.Table>);
    };
    return TableCompactBorderlessRowsDemo;
}(React.Component));
exports.TableCompactBorderlessRowsDemo = TableCompactBorderlessRowsDemo;
