"use strict";

var _enzyme = require("enzyme");

var _transformers = require("./transformers");

var _reactCore = require("@patternfly/react-core");

var testCellActions = function testCellActions(_ref) {
  var actions = _ref.actions,
      actionResolver = _ref.actionResolver,
      areActionsDisabled = _ref.areActionsDisabled,
      rowData = _ref.rowData,
      extraData = _ref.extraData,
      expectDisabled = _ref.expectDisabled;
  var returnedData = (0, _transformers.cellActions)(actions, actionResolver, areActionsDisabled)('', {
    rowIndex: 0,
    rowData: rowData,
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
    var view = (0, _enzyme.mount)(returnedData.children);
    view.find('.pf-c-dropdown button').first().simulate('click');
    expect(view.find('.pf-c-dropdown__menu li a')).toHaveLength(expectDisabled ? 0 : 1);
  }
};

describe('Transformer functions', function () {
  describe('selectable', function () {
    test('main select', function () {
      var onSelect = jest.fn(function (_event, selected, rowId) {
        return {
          selected: selected,
          rowId: rowId
        };
      });
      var column = {
        extraParams: {
          onSelect: onSelect
        }
      };
      var returnedData = (0, _transformers.selectable)('', {
        column: column,
        rowData: {}
      });
      expect(returnedData).toMatchObject({
        className: 'pf-c-table__check'
      });
      var view = (0, _enzyme.mount)(returnedData.children);
      view.find('input').simulate('change');
      expect(onSelect.mock.calls).toHaveLength(1);
      expect(onSelect.mock.results[0].value).toMatchObject({
        rowId: -1,
        selected: false
      });
    });
    test('selected', function () {
      var onSelect = jest.fn(function (_event, selected, rowId) {
        return {
          selected: selected,
          rowId: rowId
        };
      });
      var column = {
        extraParams: {
          onSelect: onSelect
        }
      };
      var returnedData = (0, _transformers.selectable)('', {
        column: column,
        rowIndex: 0,
        rowData: {
          selected: true
        }
      });
      expect(returnedData).toMatchObject({
        className: 'pf-c-table__check'
      });
      var view = (0, _enzyme.mount)(returnedData.children);
      view.find('input').simulate('change');
      expect(onSelect.mock.calls).toHaveLength(1);
      expect(onSelect.mock.results[0].value).toMatchObject({
        rowId: 0,
        selected: false
      });
    });
    test('unselected', function () {
      var onSelect = jest.fn(function (_event, selected, rowId) {
        return {
          selected: selected,
          rowId: rowId
        };
      });
      var column = {
        extraParams: {
          onSelect: onSelect
        }
      };
      var returnedData = (0, _transformers.selectable)('', {
        column: column,
        rowIndex: 0,
        rowData: {
          selected: false
        }
      });
      expect(returnedData).toMatchSnapshot();
      var view = (0, _enzyme.mount)(returnedData.children);
      view.find('input').simulate('change');
      expect(onSelect.mock.calls).toHaveLength(1);
      expect(onSelect.mock.results[0].value).toMatchObject({
        rowId: 0,
        selected: true
      });
    });
  });
  describe('sortable', function () {
    test('unsorted', function () {
      var onSort = jest.fn();
      var column = {
        extraParams: {
          sortBy: {},
          onSort: onSort
        }
      };
      var returnedData = (0, _transformers.sortable)('', {
        column: column,
        columnIndex: 0
      });
      expect(returnedData).toMatchObject({
        className: 'pf-c-table__sort'
      });
      var view = (0, _enzyme.mount)(returnedData.children);
      view.find('button').simulate('click');
      expect(onSort.mock.calls).toHaveLength(1);
    });
    test('asc', function () {
      var onSort = jest.fn();
      var column = {
        extraParams: {
          sortBy: {
            index: 0,
            direction: 'asc'
          },
          onSort: onSort
        }
      };
      var returnedData = (0, _transformers.sortable)('', {
        column: column,
        columnIndex: 0
      });
      expect(returnedData).toMatchSnapshot();
      var view = (0, _enzyme.mount)(returnedData.children);
      view.find('button').simulate('click');
      expect(onSort.mock.calls).toHaveLength(1);
    });
    test('desc', function () {
      var onSort = jest.fn();
      var column = {
        extraParams: {
          sortBy: {
            index: 0,
            direction: 'desc'
          },
          onSort: onSort
        }
      };
      var returnedData = (0, _transformers.sortable)('', {
        column: column,
        columnIndex: 0
      });
      expect(returnedData).toMatchObject({
        className: 'pf-c-table__sort pf-m-selected'
      });
      var view = (0, _enzyme.mount)(returnedData.children);
      view.find('button').simulate('click');
      expect(onSort.mock.calls).toHaveLength(1);
    });
  });
  test('simpleCellActions', function () {
    var actions = [{
      title: 'Some',
      onClick: jest.fn()
    }];
    var actionConfigs = [{
      actions: []
    }, {
      actions: actions
    }, {
      actionResolver: function actionResolver() {
        return null;
      }
    }, {
      actionResolver: function actionResolver() {
        return actions;
      }
    }, {
      actionResolver: function actionResolver() {
        return actions;
      },
      areActionsDisabled: function areActionsDisabled() {
        return false;
      }
    }, {
      actions: actions,
      rowData: {
        disableActions: true
      },
      expectDisabled: true
    }, {
      actionResolver: function actionResolver() {
        return actions;
      },
      areActionsDisabled: function areActionsDisabled() {
        return true;
      },
      expectDisabled: true
    }];
    actionConfigs.forEach(testCellActions);
  });
  describe('cellWidth', function () {
    var widths = [10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 'max'];
    widths.forEach(function (width) {
      return test("".concat(width), function () {
        expect((0, _transformers.cellWidth)(width)()).toEqual({
          className: "pf-m-width-".concat(width)
        });
      });
    });
  });
  test('collapsible', function () {
    var onCollapse = jest.fn();
    var rowData = {
      isOpen: true
    };
    var column = {
      extraParams: {
        onCollapse: onCollapse
      }
    };
    var returnedData = (0, _transformers.collapsible)('', {
      rowIndex: 0,
      rowData: rowData,
      column: column
    });
    expect(returnedData).toMatchObject({
      className: 'pf-c-table__toggle'
    });
    var view = (0, _enzyme.mount)(returnedData.children);
    view.find('button').simulate('click');
    expect(onCollapse.mock.calls).toHaveLength(1);
  });
  test('collapsible full width', function () {
    var onCollapse = jest.fn();
    var rowData = {
      fullWidth: true
    };
    var column = {
      extraParams: {
        onCollapse: onCollapse
      }
    };
    var returnedData = (0, _transformers.collapsible)('', {
      rowIndex: 0,
      rowData: rowData,
      column: column
    });
    expect(returnedData).toMatchObject({
      className: false,
      isVisible: false
    });
  });
  describe('expandable', function () {
    test('with parent', function () {
      var returned = (0, _transformers.expandable)('test', {
        rowIndex: 2,
        rowData: {
          parent: 1
        },
        column: {
          extraParams: {}
        }
      });
      var view = (0, _enzyme.mount)(returned);
      expect(view.find('div.pf-c-table__expandable-row-content')).toHaveLength(1);
      expect(view).toMatchSnapshot();
    });
    test('no parent', function () {
      expect((0, _transformers.expandable)('test', {
        rowData: {},
        column: {
          extraParams: {}
        }
      })).toBe('test');
    });
  });
  describe('expandedRow', function () {
    test('with parent', function () {
      var returned = (0, _transformers.expandedRow)(5)({
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
    test('no parent', function () {
      expect((0, _transformers.expandedRow)(5)({
        title: 'test'
      }, {
        rowData: {},
        column: {
          extraParams: {}
        }
      })).toBe(false);
    });
    test('full width', function () {
      var returned = (0, _transformers.expandedRow)(5)({
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
    test('no padding', function () {
      var returned = (0, _transformers.expandedRow)(5)({
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
  test('scopeColTransformer', function () {
    expect((0, _transformers.scopeColTransformer)()).toEqual({
      scope: 'col'
    });
  });
  test('headerCol', function () {
    var returned = (0, _transformers.headerCol)('some-id')('value', {
      rowIndex: 0
    });
    expect(returned).toMatchObject({
      component: 'th'
    });
    var view = (0, _enzyme.mount)(returned.children);
    expect(view.find('#some-id0')).toHaveLength(1);
  });
  test('emptyCol', function () {
    expect((0, _transformers.emptyCol)('')).toEqual({
      scope: ''
    });
    expect((0, _transformers.emptyCol)('some')).toEqual({});
  });
  test('mapProps', function () {
    var rowData = {
      some: {
        props: {
          one: 1
        }
      }
    };
    expect((0, _transformers.mapProps)(undefined, {
      property: 'some',
      rowData: rowData
    })).toEqual({
      one: 1
    });
    expect((0, _transformers.mapProps)(undefined, {
      property: 'wrong',
      rowData: rowData
    })).toEqual({});
  });
  test('textCenter', function () {
    expect((0, _transformers.textCenter)()).toEqual({
      textCenter: true
    });
  });
  test('wrappable', function () {
    expect((0, _transformers.wrappable)()).toEqual({
      className: 'pf-m-wrap'
    });
  });
  test('cell height auto', function () {
    expect((0, _transformers.cellHeightAuto)()).toEqual({
      className: 'pf-m-height-auto'
    });
  });
});
//# sourceMappingURL=transformers.test.js.map