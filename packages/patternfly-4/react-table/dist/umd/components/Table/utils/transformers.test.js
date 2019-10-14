(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["enzyme", "./transformers", "@patternfly/react-core"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("enzyme"), require("./transformers"), require("@patternfly/react-core"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.enzyme, global.transformers, global.reactCore);
    global.undefined = mod.exports;
  }
})(this, function (_enzyme, _transformers, _reactCore) {
  "use strict";

  const testCellActions = ({
    actions,
    actionResolver,
    areActionsDisabled,
    rowData,
    extraData,
    expectDisabled
  }) => {
    const returnedData = (0, _transformers.cellActions)(actions, actionResolver, areActionsDisabled)('', {
      rowIndex: 0,
      rowData,
      column: {
        extraParams: {
          dropdownPosition: _reactCore.DropdownPosition.right,
          dropdownDirection: _reactCore.DropdownDirection.down
        }
      }
    });

    if (actionResolver) {
      actions = actionResolver(rowData, extraData);
    }

    expect(returnedData).toMatchObject({
      className: 'pf-c-table__action'
    });

    if (!actions || actions.length === 0) {
      expect(returnedData.children).toBeUndefined();
    } else {
      const view = (0, _enzyme.mount)(returnedData.children);
      view.find('.pf-c-dropdown button').first().simulate('click');
      expect(view.find('.pf-c-dropdown__menu li a')).toHaveLength(expectDisabled ? 0 : 1);
    }
  };

  describe('Transformer functions', () => {
    describe('selectable', () => {
      test('main select', () => {
        const onSelect = jest.fn((_event, selected, rowId) => ({
          selected,
          rowId
        }));
        const column = {
          extraParams: {
            onSelect
          }
        };
        const returnedData = (0, _transformers.selectable)('', {
          column,
          rowData: {}
        });
        expect(returnedData).toMatchObject({
          className: 'pf-c-table__check'
        });
        const view = (0, _enzyme.mount)(returnedData.children);
        view.find('input').simulate('change');
        expect(onSelect.mock.calls).toHaveLength(1);
        expect(onSelect.mock.results[0].value).toMatchObject({
          rowId: -1,
          selected: false
        });
      });
      test('selected', () => {
        const onSelect = jest.fn((_event, selected, rowId) => ({
          selected,
          rowId
        }));
        const column = {
          extraParams: {
            onSelect
          }
        };
        const returnedData = (0, _transformers.selectable)('', {
          column,
          rowIndex: 0,
          rowData: {
            selected: true
          }
        });
        expect(returnedData).toMatchObject({
          className: 'pf-c-table__check'
        });
        const view = (0, _enzyme.mount)(returnedData.children);
        view.find('input').simulate('change');
        expect(onSelect.mock.calls).toHaveLength(1);
        expect(onSelect.mock.results[0].value).toMatchObject({
          rowId: 0,
          selected: false
        });
      });
      test('unselected', () => {
        const onSelect = jest.fn((_event, selected, rowId) => ({
          selected,
          rowId
        }));
        const column = {
          extraParams: {
            onSelect
          }
        };
        const returnedData = (0, _transformers.selectable)('', {
          column,
          rowIndex: 0,
          rowData: {
            selected: false
          }
        });
        expect(returnedData).toMatchSnapshot();
        const view = (0, _enzyme.mount)(returnedData.children);
        view.find('input').simulate('change');
        expect(onSelect.mock.calls).toHaveLength(1);
        expect(onSelect.mock.results[0].value).toMatchObject({
          rowId: 0,
          selected: true
        });
      });
    });
    describe('sortable', () => {
      test('unsorted', () => {
        const onSort = jest.fn();
        const column = {
          extraParams: {
            sortBy: {},
            onSort
          }
        };
        const returnedData = (0, _transformers.sortable)('', {
          column,
          columnIndex: 0
        });
        expect(returnedData).toMatchObject({
          className: 'pf-c-table__sort'
        });
        const view = (0, _enzyme.mount)(returnedData.children);
        view.find('button').simulate('click');
        expect(onSort.mock.calls).toHaveLength(1);
      });
      test('asc', () => {
        const onSort = jest.fn();
        const column = {
          extraParams: {
            sortBy: {
              index: 0,
              direction: 'asc'
            },
            onSort
          }
        };
        const returnedData = (0, _transformers.sortable)('', {
          column,
          columnIndex: 0
        });
        expect(returnedData).toMatchSnapshot();
        const view = (0, _enzyme.mount)(returnedData.children);
        view.find('button').simulate('click');
        expect(onSort.mock.calls).toHaveLength(1);
      });
      test('desc', () => {
        const onSort = jest.fn();
        const column = {
          extraParams: {
            sortBy: {
              index: 0,
              direction: 'desc'
            },
            onSort
          }
        };
        const returnedData = (0, _transformers.sortable)('', {
          column,
          columnIndex: 0
        });
        expect(returnedData).toMatchObject({
          className: 'pf-c-table__sort pf-m-selected'
        });
        const view = (0, _enzyme.mount)(returnedData.children);
        view.find('button').simulate('click');
        expect(onSort.mock.calls).toHaveLength(1);
      });
    });
    test('simpleCellActions', () => {
      const actions = [{
        title: 'Some',
        onClick: jest.fn()
      }];
      const actionConfigs = [{
        actions: []
      }, {
        actions
      }, {
        actionResolver: () => null
      }, {
        actionResolver: () => actions
      }, {
        actionResolver: () => actions,
        areActionsDisabled: () => false
      }, {
        actions,
        rowData: {
          disableActions: true
        },
        expectDisabled: true
      }, {
        actionResolver: () => actions,
        areActionsDisabled: () => true,
        expectDisabled: true
      }];
      actionConfigs.forEach(testCellActions);
    });
    describe('cellWidth', () => {
      const widths = [10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 'max'];
      widths.forEach(width => test(`${width}`, () => {
        expect((0, _transformers.cellWidth)(width)()).toEqual({
          className: `pf-m-width-${width}`
        });
      }));
    });
    test('collapsible', () => {
      const onCollapse = jest.fn();
      const rowData = {
        isOpen: true
      };
      const column = {
        extraParams: {
          onCollapse
        }
      };
      const returnedData = (0, _transformers.collapsible)('', {
        rowIndex: 0,
        rowData,
        column
      });
      expect(returnedData).toMatchObject({
        className: 'pf-c-table__toggle'
      });
      const view = (0, _enzyme.mount)(returnedData.children);
      view.find('button').simulate('click');
      expect(onCollapse.mock.calls).toHaveLength(1);
    });
    test('collapsible full width', () => {
      const onCollapse = jest.fn();
      const rowData = {
        fullWidth: true
      };
      const column = {
        extraParams: {
          onCollapse
        }
      };
      const returnedData = (0, _transformers.collapsible)('', {
        rowIndex: 0,
        rowData,
        column
      });
      expect(returnedData).toMatchObject({
        className: false,
        isVisible: false
      });
    });
    describe('expandable', () => {
      test('with parent', () => {
        const returned = (0, _transformers.expandable)('test', {
          rowIndex: 2,
          rowData: {
            parent: 1
          },
          column: {
            extraParams: {}
          }
        });
        const view = (0, _enzyme.mount)(returned);
        expect(view.find('div.pf-c-table__expandable-row-content')).toHaveLength(1);
        expect(view).toMatchSnapshot();
      });
      test('no parent', () => {
        expect((0, _transformers.expandable)('test', {
          rowData: {},
          column: {
            extraParams: {}
          }
        })).toBe('test');
      });
    });
    describe('expandedRow', () => {
      test('with parent', () => {
        const returned = (0, _transformers.expandedRow)(5)({
          title: 'test'
        }, {
          rowIndex: 2,
          rowData: {
            parent: 1
          },
          column: {
            extraParams: {}
          }
        });
        expect(returned).toMatchObject({
          colSpan: 5,
          id: 'expanded-content2'
        });
      });
      test('no parent', () => {
        expect((0, _transformers.expandedRow)(5)({
          title: 'test'
        }, {
          rowData: {},
          column: {
            extraParams: {}
          }
        })).toBe(false);
      });
      test('full width', () => {
        const returned = (0, _transformers.expandedRow)(5)({
          title: 'test'
        }, {
          rowIndex: 2,
          rowData: {
            parent: 1,
            fullWidth: true
          },
          column: {
            extraParams: {}
          }
        });
        expect(returned).toMatchObject({
          colSpan: 6,
          id: 'expanded-content2'
        });
      });
      test('no padding', () => {
        const returned = (0, _transformers.expandedRow)(5)({
          title: 'test'
        }, {
          rowIndex: 2,
          rowData: {
            parent: 1,
            noPadding: true
          },
          column: {
            extraParams: {}
          }
        });
        expect(returned).toMatchObject({
          colSpan: 5,
          id: 'expanded-content2',
          className: 'pf-m-no-padding'
        });
      });
    });
    test('scopeColTransformer', () => {
      expect((0, _transformers.scopeColTransformer)()).toEqual({
        scope: 'col'
      });
    });
    test('headerCol', () => {
      const returned = (0, _transformers.headerCol)('some-id')('value', {
        rowIndex: 0
      });
      expect(returned).toMatchObject({
        component: 'th'
      });
      const view = (0, _enzyme.mount)(returned.children);
      expect(view.find('#some-id0')).toHaveLength(1);
    });
    test('emptyCol', () => {
      expect((0, _transformers.emptyCol)('')).toEqual({
        scope: ''
      });
      expect((0, _transformers.emptyCol)('some')).toEqual({});
    });
    test('mapProps', () => {
      const rowData = {
        some: {
          props: {
            one: 1
          }
        }
      };
      expect((0, _transformers.mapProps)(undefined, {
        property: 'some',
        rowData
      })).toEqual({
        one: 1
      });
      expect((0, _transformers.mapProps)(undefined, {
        property: 'wrong',
        rowData
      })).toEqual({});
    });
    test('textCenter', () => {
      expect((0, _transformers.textCenter)()).toEqual({
        textCenter: true
      });
    });
    test('wrappable', () => {
      expect((0, _transformers.wrappable)()).toEqual({
        className: 'pf-m-wrap'
      });
    });
    test('cell height auto', () => {
      expect((0, _transformers.cellHeightAuto)()).toEqual({
        className: 'pf-m-height-auto'
      });
    });
  });
});
//# sourceMappingURL=transformers.test.js.map