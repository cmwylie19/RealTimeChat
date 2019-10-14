(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./utils", "../../../test-helpers/data-helpers"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./utils"), require("../../../test-helpers/data-helpers"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.utils, global.dataHelpers);
    global.undefined = mod.exports;
  }
})(this, function (_utils, _dataHelpers) {
  "use strict";

  const assertExpanded = (rows, expandedRowIndexes) => {
    expandedRowIndexes.forEach(expandedRowIndex => {
      const expandedRow = rows[expandedRowIndex];
      expect((0, _utils.isRowExpanded)(expandedRow, rows)).toBeTruthy();
    });
  };

  const assertNotExpanded = (rows, notExpandedRowIndexes) => {
    notExpandedRowIndexes.forEach(expandedRowIndex => {
      const expandedRow = rows[expandedRowIndex];
      expect((0, _utils.isRowExpanded)(expandedRow, rows)).toBeFalsy();
    });
  };

  describe('Util functions', () => {
    describe('isRowExpanded', () => {
      test('basic', () => {
        const rows = (0, _dataHelpers.buildExpandableRows)({
          6: 5
        }, [5]);
        assertExpanded(rows, [6]);
        assertNotExpanded(rows, [0, 1, 5, 9]);
      });
      test('two open, one closed', () => {
        const rows = (0, _dataHelpers.buildExpandableRows)({
          1: 0,
          3: 2,
          5: 4
        }, [0, 2]);
        assertExpanded(rows, [1, 3]);
        assertNotExpanded(rows, [0, 2, 4, 5, 8]);
      });
      test('all closed', () => {
        const rows = (0, _dataHelpers.buildExpandableRows)({
          1: 0,
          3: 2,
          5: 4
        });
        assertNotExpanded(rows, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
      });
      test('parent-child chain', () => {
        const rows = (0, _dataHelpers.buildExpandableRows)({
          1: 0,
          2: 1,
          3: 2,
          4: 3,
          5: 4,
          6: 5,
          7: 6
        }, [0, 1, 2, 3, 4, 5, 6]);
        assertExpanded(rows, [1, 2, 3, 4, 5, 6, 7]);
        assertNotExpanded(rows, [0, 8, 9]);
      });
      test('two parent-child chains', () => {
        const rows = (0, _dataHelpers.buildExpandableRows)({
          1: 0,
          3: 1,
          4: 2,
          5: 3,
          6: 4,
          7: 6
        }, [0, 1, 2, 3, 4, 5, 6]);
        assertExpanded(rows, [1, 3, 4, 5, 6, 7]);
        assertNotExpanded(rows, [0, 2, 8, 9]);
      });
      test('not in order', () => {
        const rows = (0, _dataHelpers.buildExpandableRows)({
          0: 1,
          1: 4
        }, [4, 1]);
        assertExpanded(rows, [0, 1]);
        assertNotExpanded(rows, [2, 3, 4, 5]);
      });
      test('child parent circle', () => {
        const rows = (0, _dataHelpers.buildExpandableRows)({
          1: 0,
          0: 1
        }, [0, 1]);
        assertNotExpanded(rows, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
      });
      test('undefined without a parent', () => {
        const rows = (0, _dataHelpers.buildExpandableRows)();
        expect((0, _utils.isRowExpanded)(rows[1], rows)).toBeUndefined();
      });
      test('compound parent', () => {
        const rows = [{
          isOpen: true,
          cells: ['1', {
            title: '2',
            props: {
              isOpen: true
            }
          }, {
            title: '3',
            props: {
              isOpen: false
            }
          }, {
            title: '4',
            props: {
              isOpen: false
            }
          }, '5', '6']
        }, {
          parent: 0,
          compoundParent: 1,
          cells: [{
            title: 'parent 0 compound child - 1'
          }]
        }, {
          parent: 0,
          compoundParent: 2,
          cells: [{
            title: 'parent 0 compound child - 2'
          }]
        }, {
          parent: 0,
          compoundParent: 3,
          cells: [{
            title: 'parent 0 compound child - 3'
          }]
        }, {
          isOpen: false,
          cells: ['1', {
            title: '2',
            props: {
              isOpen: false
            }
          }, {
            title: '3',
            props: {
              isOpen: false
            }
          }, {
            title: '4',
            props: {
              isOpen: false
            }
          }, '5', '6']
        }, {
          parent: 4,
          compoundParent: 1,
          cells: [{
            title: 'parent 4 compound child - 1'
          }]
        }, {
          parent: 4,
          compoundParent: 2,
          cells: [{
            title: 'parent 4 compound child - 2'
          }]
        }, {
          parent: 4,
          compoundParent: 3,
          cells: [{
            title: 'parent 4 compound child - 3'
          }]
        }]; // test an expanded compound child to be expanded

        const expandedRow = {
          parent: 0,
          compoundParent: 1,
          cells: [{
            title: 'parent 0 compound child - 1'
          }]
        };
        expect((0, _utils.isRowExpanded)(expandedRow, rows)).toEqual(true); // test a collapsed compound child to be false

        const collapsedRow = {
          parent: 0,
          compoundParent: 2,
          cells: [{
            title: 'parent 0 compound child - 2'
          }]
        };
        expect((0, _utils.isRowExpanded)(collapsedRow, rows)).toEqual(false); // test a row with different parent that is collapsed

        const collapsedRowParent4 = {
          parent: 4,
          compoundParent: 1,
          cells: [{
            title: 'parent 4 compound child - 1'
          }]
        };
        expect((0, _utils.isRowExpanded)(collapsedRowParent4, rows)).toEqual(false);
      });
    });
  });
});
//# sourceMappingURL=utils.test.js.map