"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var index_1 = require("./index");
var data_sets_1 = require("../../test-helpers/data-sets");
describe('Simple table', function () {
    test('caption', function () {
        var view = enzyme_1.mount(<index_1.Table caption="Simple Table" cells={data_sets_1.columns} rows={data_sets_1.rows}>
        <index_1.TableHeader />
        <index_1.TableBody />
      </index_1.Table>);
        expect(view).toMatchSnapshot();
    });
    test('header', function () {
        var view = enzyme_1.mount(<index_1.Table header={<h4>Header title</h4>} cells={data_sets_1.columns} rows={data_sets_1.rows}>
        <index_1.TableHeader />
        <index_1.TableBody />
      </index_1.Table>);
        expect(view).toMatchSnapshot();
    });
    test('aria-label', function () {
        var view = enzyme_1.mount(<index_1.Table aria-label="Aria labeled" cells={data_sets_1.columns} rows={data_sets_1.rows}>
        <index_1.TableHeader />
        <index_1.TableBody />
      </index_1.Table>);
        expect(view).toMatchSnapshot();
    });
});
test('Sortable table', function () {
    var onSortCall = function () { return undefined; };
    data_sets_1.columns[0] = __assign(__assign({}, data_sets_1.columns[0]), { transforms: [index_1.sortable] });
    var view = enzyme_1.mount(<index_1.Table aria-label="Aria labeled" onSort={onSortCall} sortBy={{}} cells={data_sets_1.columns} rows={data_sets_1.rows}>
      <index_1.TableHeader />
      <index_1.TableBody />
    </index_1.Table>);
    expect(view).toMatchSnapshot();
});
describe('Table variants', function () {
    Object.values(index_1.TableGridBreakpoint).forEach(function (oneBreakpoint) {
        test("Breakpoint - " + oneBreakpoint, function () {
            var view = enzyme_1.mount(<index_1.Table aria-label="Aria labeled" gridBreakPoint={oneBreakpoint} cells={data_sets_1.columns} rows={data_sets_1.rows}>
          <index_1.TableHeader />
          <index_1.TableBody />
        </index_1.Table>);
            expect(view).toMatchSnapshot();
        });
    });
    Object.values(index_1.TableVariant).forEach(function (onevariant) {
        test("Size - " + onevariant, function () {
            var view = enzyme_1.mount(<index_1.Table aria-label="Aria labeled" variant={onevariant} cells={data_sets_1.columns} rows={data_sets_1.rows}>
          <index_1.TableHeader />
          <index_1.TableBody />
        </index_1.Table>);
            expect(view).toMatchSnapshot();
        });
    });
});
test('Simple Actions table', function () {
    var rowsWithDisabledAction = __spreadArrays(data_sets_1.rows, [
        {
            cells: ['one', 'two', 'three', 'four', 'five'],
            disableActions: true
        }
    ]);
    var view = enzyme_1.mount(<index_1.Table aria-label="Aria labeled" actions={data_sets_1.actions} cells={data_sets_1.columns} rows={rowsWithDisabledAction}>
      <index_1.TableHeader />
      <index_1.TableBody />
    </index_1.Table>);
    expect(view).toMatchSnapshot();
});
test('Actions table', function () {
    var view = enzyme_1.mount(<index_1.Table aria-label="Aria labeled" actionResolver={function () { return data_sets_1.actions; }} areActionsDisabled={function () { return false; }} cells={data_sets_1.columns} rows={data_sets_1.rows}>
      <index_1.TableHeader />
      <index_1.TableBody />
    </index_1.Table>);
    expect(view).toMatchSnapshot();
});
test('Cell header table', function () {
    data_sets_1.columns[0] = __assign(__assign({}, data_sets_1.columns[0]), { cellTransforms: [index_1.headerCol] });
    var view = enzyme_1.mount(<index_1.Table aria-label="Aria labeled" cells={data_sets_1.columns} rows={data_sets_1.rows}>
      <index_1.TableHeader />
      <index_1.TableBody />
    </index_1.Table>);
    expect(view).toMatchSnapshot();
});
test('Collapsible table', function () {
    data_sets_1.rows[0] = __assign(__assign({}, data_sets_1.rows[0]), { isOpen: true });
    data_sets_1.rows[1] = __assign(__assign({}, data_sets_1.rows[1]), { parent: 0 });
    data_sets_1.rows[3] = __assign(__assign({}, data_sets_1.rows[3]), { isOpen: false });
    data_sets_1.rows[4] = __assign(__assign({}, data_sets_1.rows[4]), { parent: 3 });
    data_sets_1.columns[0] = __assign(__assign({}, data_sets_1.columns[0]), { cellFormatters: [index_1.expandable] });
    var onCollapse = function () { return undefined; };
    var view = enzyme_1.mount(<index_1.Table aria-label="Aria labeled" onCollapse={onCollapse} cells={data_sets_1.columns} rows={data_sets_1.rows}>
      <index_1.TableHeader />
      <index_1.TableBody />
    </index_1.Table>);
    expect(view).toMatchSnapshot();
});
test('Compound Expandable table', function () {
    var compoundColumns = [
        { title: 'col1', cell: { transforms: [index_1.compoundExpand] } },
        { title: 'col2', cell: { transforms: [index_1.compoundExpand] } }
    ];
    var compoundRows = [
        { isOpen: true, cells: [{ title: '1', props: { isOpen: true } }, { title: '2', props: { isOpen: false } }] },
        { parent: 0, compoundParent: 0, cells: [{ title: 'expanded', props: { colSpan: 2 } }] },
        { isOpen: false, cells: [{ title: '3', props: { isOpen: false } }, { title: '4', props: { isOpen: false } }] },
        { parent: 2, compoundParent: 0, cells: [{ title: 'expanded', props: { colSpan: 2 } }] }
    ];
    var onExpand = function () { return undefined; };
    var view = enzyme_1.mount(<index_1.Table aria-label="Aria labeled" onExpand={onExpand} cells={compoundColumns} rows={compoundRows}>
      <index_1.TableHeader />
      <index_1.TableBody />
    </index_1.Table>);
    expect(view).toMatchSnapshot();
});
test('Collapsible nested table', function () {
    data_sets_1.rows[0] = __assign(__assign({}, data_sets_1.rows[0]), { isOpen: false });
    data_sets_1.rows[1] = __assign(__assign({}, data_sets_1.rows[1]), { parent: 0, isOpen: true });
    data_sets_1.rows[2] = __assign(__assign({}, data_sets_1.rows[2]), { parent: 1 });
    var onCollapse = function () { return undefined; };
    var view = enzyme_1.mount(<index_1.Table aria-label="Aria labeled" onCollapse={onCollapse} cells={data_sets_1.columns} rows={data_sets_1.rows}>
      <index_1.TableHeader />
      <index_1.TableBody />
    </index_1.Table>);
    expect(view).toMatchSnapshot();
});
test('Selectable table', function () {
    var onSelect = function () { return undefined; };
    var view = enzyme_1.mount(<index_1.Table aria-label="Aria labeled" onSelect={onSelect} cells={data_sets_1.columns} rows={data_sets_1.rows}>
      <index_1.TableHeader />
      <index_1.TableBody />
    </index_1.Table>);
    expect(view).toMatchSnapshot();
});
test('Header width table', function () {
    data_sets_1.columns[0] = __assign(__assign({}, data_sets_1.columns[0]), { transforms: [index_1.cellWidth(10)] });
    data_sets_1.columns[2] = __assign(__assign({}, data_sets_1.columns[2]), { transforms: [index_1.cellWidth(30)] });
    data_sets_1.columns[4] = __assign(__assign({}, data_sets_1.columns[4]), { transforms: [index_1.cellWidth('max')] });
    var view = enzyme_1.mount(<index_1.Table aria-label="Aria labeled" cells={data_sets_1.columns} rows={data_sets_1.rows}>
      <index_1.TableHeader />
      <index_1.TableBody />
    </index_1.Table>);
    expect(view).toMatchSnapshot();
});
test('Selectable table with selected expandable row', function () {
    var data = {
        cells: ['column'],
        rows: [
            {
                cells: ['one'],
                selected: true
            },
            {
                cells: ['one'],
                parent: 0
            }
        ],
        onSelect: function (f) { return f; }
    };
    var view = enzyme_1.mount(<index_1.Table aria-label="Aria labeled" {...data}>
      <index_1.TableHeader />
      <index_1.TableBody />
    </index_1.Table>);
    expect(view.find('input[name="check-all"]').prop('checked')).toEqual(true);
});
