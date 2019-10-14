function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { mount } from 'enzyme';
import { Table, TableHeader, TableBody, TableGridBreakpoint, TableVariant, cellWidth, headerCol, sortable, expandable, compoundExpand } from './index';
import { rows, columns, actions } from '../../test-helpers/data-sets';
describe('Simple table', () => {
  test('caption', () => {
    const view = mount(React.createElement(Table, {
      caption: "Simple Table",
      cells: columns,
      rows: rows
    }, React.createElement(TableHeader, null), React.createElement(TableBody, null)));
    expect(view).toMatchSnapshot();
  });
  test('header', () => {
    const view = mount(React.createElement(Table, {
      header: React.createElement("h4", null, "Header title"),
      cells: columns,
      rows: rows
    }, React.createElement(TableHeader, null), React.createElement(TableBody, null)));
    expect(view).toMatchSnapshot();
  });
  test('aria-label', () => {
    const view = mount(React.createElement(Table, {
      "aria-label": "Aria labeled",
      cells: columns,
      rows: rows
    }, React.createElement(TableHeader, null), React.createElement(TableBody, null)));
    expect(view).toMatchSnapshot();
  });
});
test('Sortable table', () => {
  const onSortCall = () => undefined;

  columns[0] = _objectSpread({}, columns[0], {
    transforms: [sortable]
  });
  const view = mount(React.createElement(Table, {
    "aria-label": "Aria labeled",
    onSort: onSortCall,
    sortBy: {},
    cells: columns,
    rows: rows
  }, React.createElement(TableHeader, null), React.createElement(TableBody, null)));
  expect(view).toMatchSnapshot();
});
describe('Table variants', () => {
  Object.values(TableGridBreakpoint).forEach(oneBreakpoint => {
    test(`Breakpoint - ${oneBreakpoint}`, () => {
      const view = mount(React.createElement(Table, {
        "aria-label": "Aria labeled",
        gridBreakPoint: oneBreakpoint,
        cells: columns,
        rows: rows
      }, React.createElement(TableHeader, null), React.createElement(TableBody, null)));
      expect(view).toMatchSnapshot();
    });
  });
  Object.values(TableVariant).forEach(onevariant => {
    test(`Size - ${onevariant}`, () => {
      const view = mount(React.createElement(Table, {
        "aria-label": "Aria labeled",
        variant: onevariant,
        cells: columns,
        rows: rows
      }, React.createElement(TableHeader, null), React.createElement(TableBody, null)));
      expect(view).toMatchSnapshot();
    });
  });
});
test('Simple Actions table', () => {
  const rowsWithDisabledAction = [...rows, {
    cells: ['one', 'two', 'three', 'four', 'five'],
    disableActions: true
  }];
  const view = mount(React.createElement(Table, {
    "aria-label": "Aria labeled",
    actions: actions,
    cells: columns,
    rows: rowsWithDisabledAction
  }, React.createElement(TableHeader, null), React.createElement(TableBody, null)));
  expect(view).toMatchSnapshot();
});
test('Actions table', () => {
  const view = mount(React.createElement(Table, {
    "aria-label": "Aria labeled",
    actionResolver: () => actions,
    areActionsDisabled: () => false,
    cells: columns,
    rows: rows
  }, React.createElement(TableHeader, null), React.createElement(TableBody, null)));
  expect(view).toMatchSnapshot();
});
test('Cell header table', () => {
  columns[0] = _objectSpread({}, columns[0], {
    cellTransforms: [headerCol]
  });
  const view = mount(React.createElement(Table, {
    "aria-label": "Aria labeled",
    cells: columns,
    rows: rows
  }, React.createElement(TableHeader, null), React.createElement(TableBody, null)));
  expect(view).toMatchSnapshot();
});
test('Collapsible table', () => {
  rows[0] = _objectSpread({}, rows[0], {
    isOpen: true
  });
  rows[1] = _objectSpread({}, rows[1], {
    parent: 0
  });
  rows[3] = _objectSpread({}, rows[3], {
    isOpen: false
  });
  rows[4] = _objectSpread({}, rows[4], {
    parent: 3
  });
  columns[0] = _objectSpread({}, columns[0], {
    cellFormatters: [expandable]
  });

  const onCollapse = () => undefined;

  const view = mount(React.createElement(Table, {
    "aria-label": "Aria labeled",
    onCollapse: onCollapse,
    cells: columns,
    rows: rows
  }, React.createElement(TableHeader, null), React.createElement(TableBody, null)));
  expect(view).toMatchSnapshot();
});
test('Compound Expandable table', () => {
  const compoundColumns = [{
    title: 'col1',
    cell: {
      transforms: [compoundExpand]
    }
  }, {
    title: 'col2',
    cell: {
      transforms: [compoundExpand]
    }
  }];
  const compoundRows = [{
    isOpen: true,
    cells: [{
      title: '1',
      props: {
        isOpen: true
      }
    }, {
      title: '2',
      props: {
        isOpen: false
      }
    }]
  }, {
    parent: 0,
    compoundParent: 0,
    cells: [{
      title: 'expanded',
      props: {
        colSpan: 2
      }
    }]
  }, {
    isOpen: false,
    cells: [{
      title: '3',
      props: {
        isOpen: false
      }
    }, {
      title: '4',
      props: {
        isOpen: false
      }
    }]
  }, {
    parent: 2,
    compoundParent: 0,
    cells: [{
      title: 'expanded',
      props: {
        colSpan: 2
      }
    }]
  }];

  const onExpand = () => undefined;

  const view = mount(React.createElement(Table, {
    "aria-label": "Aria labeled",
    onExpand: onExpand,
    cells: compoundColumns,
    rows: compoundRows
  }, React.createElement(TableHeader, null), React.createElement(TableBody, null)));
  expect(view).toMatchSnapshot();
});
test('Collapsible nested table', () => {
  rows[0] = _objectSpread({}, rows[0], {
    isOpen: false
  });
  rows[1] = _objectSpread({}, rows[1], {
    parent: 0,
    isOpen: true
  });
  rows[2] = _objectSpread({}, rows[2], {
    parent: 1
  });

  const onCollapse = () => undefined;

  const view = mount(React.createElement(Table, {
    "aria-label": "Aria labeled",
    onCollapse: onCollapse,
    cells: columns,
    rows: rows
  }, React.createElement(TableHeader, null), React.createElement(TableBody, null)));
  expect(view).toMatchSnapshot();
});
test('Selectable table', () => {
  const onSelect = () => undefined;

  const view = mount(React.createElement(Table, {
    "aria-label": "Aria labeled",
    onSelect: onSelect,
    cells: columns,
    rows: rows
  }, React.createElement(TableHeader, null), React.createElement(TableBody, null)));
  expect(view).toMatchSnapshot();
});
test('Header width table', () => {
  columns[0] = _objectSpread({}, columns[0], {
    transforms: [cellWidth(10)]
  });
  columns[2] = _objectSpread({}, columns[2], {
    transforms: [cellWidth(30)]
  });
  columns[4] = _objectSpread({}, columns[4], {
    transforms: [cellWidth('max')]
  });
  const view = mount(React.createElement(Table, {
    "aria-label": "Aria labeled",
    cells: columns,
    rows: rows
  }, React.createElement(TableHeader, null), React.createElement(TableBody, null)));
  expect(view).toMatchSnapshot();
});
test('Selectable table with selected expandable row', () => {
  const data = {
    cells: ['column'],
    rows: [{
      cells: ['one'],
      selected: true
    }, {
      cells: ['one'],
      parent: 0
    }],
    onSelect: f => f
  };
  const view = mount(React.createElement(Table, _extends({
    "aria-label": "Aria labeled"
  }, data), React.createElement(TableHeader, null), React.createElement(TableBody, null)));
  expect(view.find('input[name="check-all"]').prop('checked')).toEqual(true);
});
//# sourceMappingURL=Table.test.js.map