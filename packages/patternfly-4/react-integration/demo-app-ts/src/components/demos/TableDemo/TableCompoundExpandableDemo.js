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
var react_icons_1 = require("@patternfly/react-icons");
var TableSortableForCompoundExpandableDemo_1 = require("./TableSortableForCompoundExpandableDemo");
var TableCompoundExpandableDemo = /** @class */ (function (_super) {
    __extends(TableCompoundExpandableDemo, _super);
    function TableCompoundExpandableDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            columns: [
                'Repositories',
                {
                    title: 'Branches',
                    cellTransforms: [react_table_1.compoundExpand]
                },
                {
                    title: 'Pull requests',
                    cellTransforms: [react_table_1.compoundExpand]
                },
                {
                    title: 'Workspaces',
                    cellTransforms: [react_table_1.compoundExpand]
                },
                'Last Commit',
                ''
            ],
            rows: [
                {
                    isOpen: true,
                    cells: [
                        { title: <a href="#">siemur/test-space</a>, props: { component: 'th' } },
                        {
                            title: (<React.Fragment>
                  <react_icons_1.CodeBranchIcon key="icon"/> 10
                </React.Fragment>),
                            props: { isOpen: true, ariaControls: 'compoound-expansion-table-1' }
                        },
                        {
                            title: (<React.Fragment>
                  <react_icons_1.CodeIcon key="icon"/> 4
                </React.Fragment>),
                            props: { isOpen: false, ariaControls: 'compoound-expansion-table-2' }
                        },
                        {
                            title: (<React.Fragment>
                  <react_icons_1.CubeIcon key="icon"/> 4
                </React.Fragment>),
                            props: { isOpen: false, ariaControls: 'compoound-expansion-table-3' }
                        },
                        '20 minutes',
                        { title: <a href="#">Open in Github</a> }
                    ]
                },
                {
                    parent: 0,
                    compoundParent: 1,
                    cells: [
                        {
                            title: <TableSortableForCompoundExpandableDemo_1.DemoSortableTable firstColumnRows={['parent-0', 'compound-1', 'three', 'four', 'five']} id="compoound-expansion-table-1"/>,
                            props: { colSpan: 6, className: 'pf-m-no-padding' }
                        }
                    ]
                },
                {
                    parent: 0,
                    compoundParent: 2,
                    cells: [
                        {
                            title: <TableSortableForCompoundExpandableDemo_1.DemoSortableTable firstColumnRows={['parent-0', 'compound-2', 'three', 'four', 'five']} id="compoound-expansion-table-2"/>,
                            props: { colSpan: 6, className: 'pf-m-no-padding' }
                        }
                    ]
                },
                {
                    parent: 0,
                    compoundParent: 3,
                    cells: [
                        {
                            title: <TableSortableForCompoundExpandableDemo_1.DemoSortableTable firstColumnRows={['parent-0', 'compound-3', 'three', 'four', 'five']} id="compoound-expansion-table-3"/>,
                            props: { colSpan: 6, className: 'pf-m-no-padding' }
                        }
                    ]
                },
                {
                    isOpen: false,
                    cells: [
                        { title: <a href="#">siemur/test-space</a>, props: { component: 'th' } },
                        {
                            title: (<React.Fragment>
                  <react_icons_1.CodeBranchIcon key="icon"/> 3
                </React.Fragment>),
                            props: { isOpen: false, ariaControls: 'compoound-expansion-table-4' }
                        },
                        {
                            title: (<React.Fragment>
                  <react_icons_1.CodeIcon key="icon"/> 4
                </React.Fragment>),
                            props: { isOpen: false, ariaControls: 'compoound-expansion-table-5' }
                        },
                        {
                            title: (<React.Fragment>
                  <react_icons_1.CubeIcon key="icon"/> 2
                </React.Fragment>),
                            props: { isOpen: false, ariaControls: 'compoound-expansion-table-6' }
                        },
                        '20 minutes',
                        { title: <a href="#">Open in Github</a> }
                    ]
                },
                {
                    parent: 4,
                    compoundParent: 1,
                    cells: [
                        {
                            title: <TableSortableForCompoundExpandableDemo_1.DemoSortableTable firstColumnRows={['parent-4', 'compound-1', 'three', 'four', 'five']} id="compoound-expansion-table-4"/>,
                            props: { colSpan: 6, className: 'pf-m-no-padding' }
                        }
                    ]
                },
                {
                    parent: 4,
                    compoundParent: 2,
                    cells: [
                        {
                            title: <TableSortableForCompoundExpandableDemo_1.DemoSortableTable firstColumnRows={['parent-4', 'compound-2', 'three', 'four', 'five']} id="compoound-expansion-table-5"/>,
                            props: { colSpan: 6, className: 'pf-m-no-padding' }
                        }
                    ]
                },
                {
                    parent: 4,
                    compoundParent: 3,
                    cells: [
                        {
                            title: <TableSortableForCompoundExpandableDemo_1.DemoSortableTable firstColumnRows={['parent-4', 'compound-3', 'three', 'four', 'five']} id="compoound-expansion-table-6"/>,
                            props: { colSpan: 6, className: 'pf-m-no-padding' }
                        }
                    ]
                }
            ]
        };
        _this.onExpand = _this.onExpand.bind(_this);
        return _this;
    }
    TableCompoundExpandableDemo.prototype.onExpand = function (event, rowIndex, colIndex, isOpen, rowData, extraData) {
        var rows = this.state.rows;
        if (!isOpen) {
            // set all other expanded cells false in this row if we are expanding
            rows[rowIndex].cells.forEach(function (cell) {
                if (cell.props) {
                    cell.props.isOpen = false;
                }
            });
            rows[rowIndex].cells[colIndex].props.isOpen = true;
            rows[rowIndex].isOpen = true;
        }
        else {
            rows[rowIndex].cells[colIndex].props.isOpen = false;
            rows[rowIndex].isOpen = rows[rowIndex].cells.some(function (cell) { return cell.props && cell.props.isOpen; });
        }
        this.setState({
            rows: rows
        });
    };
    TableCompoundExpandableDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    TableCompoundExpandableDemo.prototype.render = function () {
        var _a = this.state, columns = _a.columns, rows = _a.rows;
        return (<react_table_1.Table caption="Compound expandable table" onExpand={this.onExpand} rows={rows} cells={columns}>
        <react_table_1.TableHeader />
        <react_table_1.TableBody />
      </react_table_1.Table>);
    };
    return TableCompoundExpandableDemo;
}(React.Component));
exports.TableCompoundExpandableDemo = TableCompoundExpandableDemo;
