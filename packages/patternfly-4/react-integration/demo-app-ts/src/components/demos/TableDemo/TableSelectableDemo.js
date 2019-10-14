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
var react_core_1 = require("@patternfly/react-core");
var TableSelectableDemo = /** @class */ (function (_super) {
    __extends(TableSelectableDemo, _super);
    function TableSelectableDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.toggleSelect = function (checked) {
            _this.setState({
                canSelectAll: checked
            });
        };
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
                    selected: false
                },
                {
                    cells: ['a', 'two', 'k', 'four', 'five'],
                    selected: false
                },
                {
                    cells: ['p', 'two', 'b', 'four', 'five'],
                    selected: false
                }
            ],
            canSelectAll: true
        };
        _this.onSelect = _this.onSelect.bind(_this);
        return _this;
    }
    TableSelectableDemo.prototype.onSelect = function (event, isSelected, rowId) {
        var rows;
        if (rowId === -1) {
            rows = this.state.rows.map(function (oneRow) {
                oneRow.selected = isSelected;
                return oneRow;
            });
        }
        else {
            rows = __spreadArrays(this.state.rows);
            rows[rowId].selected = isSelected;
        }
        this.setState({
            rows: rows
        });
    };
    TableSelectableDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    TableSelectableDemo.prototype.render = function () {
        var _a = this.state, columns = _a.columns, rows = _a.rows;
        return (<div>
        <react_table_1.Table caption="Selectable Table" onSelect={this.onSelect} cells={columns} rows={rows} canSelectAll={this.state.canSelectAll}>
          <react_table_1.TableHeader />
          <react_table_1.TableBody />
        </react_table_1.Table>
        <react_core_1.Checkbox label="canSelectAll" isChecked={this.state.canSelectAll} onChange={this.toggleSelect} aria-label="toggle select all checkbox" id="toggle-select-all" name="toggle-select-all"/>
      </div>);
    };
    return TableSelectableDemo;
}(React.Component));
exports.TableSelectableDemo = TableSelectableDemo;
