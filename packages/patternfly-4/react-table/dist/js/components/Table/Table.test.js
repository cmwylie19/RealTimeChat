"use strict";

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _index = require("./index");

var _dataSets = require("../../test-helpers/data-sets");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('Simple table', function () {
  test('caption', function () {
    var view = (0, _enzyme.mount)(React.createElement(_index.Table, {
      caption: "Simple Table",
      cells: _dataSets.columns,
      rows: _dataSets.rows
    }, React.createElement(_index.TableHeader, null), React.createElement(_index.TableBody, null)));
    expect(view).toMatchSnapshot();
  });
  test('header', function () {
    var view = (0, _enzyme.mount)(React.createElement(_index.Table, {
      header: React.createElement("h4", null, "Header title"),
      cells: _dataSets.columns,
      rows: _dataSets.rows
    }, React.createElement(_index.TableHeader, null), React.createElement(_index.TableBody, null)));
    expect(view).toMatchSnapshot();
  });
  test('aria-label', function () {
    var view = (0, _enzyme.mount)(React.createElement(_index.Table, {
      "aria-label": "Aria labeled",
      cells: _dataSets.columns,
      rows: _dataSets.rows
    }, React.createElement(_index.TableHeader, null), React.createElement(_index.TableBody, null)));
    expect(view).toMatchSnapshot();
  });
});
test('Sortable table', function () {
  var onSortCall = function onSortCall() {
    return undefined;
  };

  _dataSets.columns[0] = _objectSpread({}, _dataSets.columns[0], {
    transforms: [_index.sortable]
  });
  var view = (0, _enzyme.mount)(React.createElement(_index.Table, {
    "aria-label": "Aria labeled",
    onSort: onSortCall,
    sortBy: {},
    cells: _dataSets.columns,
    rows: _dataSets.rows
  }, React.createElement(_index.TableHeader, null), React.createElement(_index.TableBody, null)));
  expect(view).toMatchSnapshot();
});
describe('Table variants', function () {
  Object.values(_index.TableGridBreakpoint).forEach(function (oneBreakpoint) {
    test("Breakpoint - ".concat(oneBreakpoint), function () {
      var view = (0, _enzyme.mount)(React.createElement(_index.Table, {
        "aria-label": "Aria labeled",
        gridBreakPoint: oneBreakpoint,
        cells: _dataSets.columns,
        rows: _dataSets.rows
      }, React.createElement(_index.TableHeader, null), React.createElement(_index.TableBody, null)));
      expect(view).toMatchSnapshot();
    });
  });
  Object.values(_index.TableVariant).forEach(function (onevariant) {
    test("Size - ".concat(onevariant), function () {
      var view = (0, _enzyme.mount)(React.createElement(_index.Table, {
        "aria-label": "Aria labeled",
        variant: onevariant,
        cells: _dataSets.columns,
        rows: _dataSets.rows
      }, React.createElement(_index.TableHeader, null), React.createElement(_index.TableBody, null)));
      expect(view).toMatchSnapshot();
    });
  });
});
test('Simple Actions table', function () {
  var rowsWithDisabledAction = [].concat(_toConsumableArray(_dataSets.rows), [{
    cells: ['one', 'two', 'three', 'four', 'five'],
    disableActions: true
  }]);
  var view = (0, _enzyme.mount)(React.createElement(_index.Table, {
    "aria-label": "Aria labeled",
    actions: _dataSets.actions,
    cells: _dataSets.columns,
    rows: rowsWithDisabledAction
  }, React.createElement(_index.TableHeader, null), React.createElement(_index.TableBody, null)));
  expect(view).toMatchSnapshot();
});
test('Actions table', function () {
  var view = (0, _enzyme.mount)(React.createElement(_index.Table, {
    "aria-label": "Aria labeled",
    actionResolver: function actionResolver() {
      return _dataSets.actions;
    },
    areActionsDisabled: function areActionsDisabled() {
      return false;
    },
    cells: _dataSets.columns,
    rows: _dataSets.rows
  }, React.createElement(_index.TableHeader, null), React.createElement(_index.TableBody, null)));
  expect(view).toMatchSnapshot();
});
test('Cell header table', function () {
  _dataSets.columns[0] = _objectSpread({}, _dataSets.columns[0], {
    cellTransforms: [_index.headerCol]
  });
  var view = (0, _enzyme.mount)(React.createElement(_index.Table, {
    "aria-label": "Aria labeled",
    cells: _dataSets.columns,
    rows: _dataSets.rows
  }, React.createElement(_index.TableHeader, null), React.createElement(_index.TableBody, null)));
  expect(view).toMatchSnapshot();
});
test('Collapsible table', function () {
  _dataSets.rows[0] = _objectSpread({}, _dataSets.rows[0], {
    isOpen: true
  });
  _dataSets.rows[1] = _objectSpread({}, _dataSets.rows[1], {
    parent: 0
  });
  _dataSets.rows[3] = _objectSpread({}, _dataSets.rows[3], {
    isOpen: false
  });
  _dataSets.rows[4] = _objectSpread({}, _dataSets.rows[4], {
    parent: 3
  });
  _dataSets.columns[0] = _objectSpread({}, _dataSets.columns[0], {
    cellFormatters: [_index.expandable]
  });

  var onCollapse = function onCollapse() {
    return undefined;
  };

  var view = (0, _enzyme.mount)(React.createElement(_index.Table, {
    "aria-label": "Aria labeled",
    onCollapse: onCollapse,
    cells: _dataSets.columns,
    rows: _dataSets.rows
  }, React.createElement(_index.TableHeader, null), React.createElement(_index.TableBody, null)));
  expect(view).toMatchSnapshot();
});
test('Compound Expandable table', function () {
  var compoundColumns = [{
    title: 'col1',
    cell: {
      transforms: [_index.compoundExpand]
    }
  }, {
    title: 'col2',
    cell: {
      transforms: [_index.compoundExpand]
    }
  }];
  var compoundRows = [{
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

  var onExpand = function onExpand() {
    return undefined;
  };

  var view = (0, _enzyme.mount)(React.createElement(_index.Table, {
    "aria-label": "Aria labeled",
    onExpand: onExpand,
    cells: compoundColumns,
    rows: compoundRows
  }, React.createElement(_index.TableHeader, null), React.createElement(_index.TableBody, null)));
  expect(view).toMatchSnapshot();
});
test('Collapsible nested table', function () {
  _dataSets.rows[0] = _objectSpread({}, _dataSets.rows[0], {
    isOpen: false
  });
  _dataSets.rows[1] = _objectSpread({}, _dataSets.rows[1], {
    parent: 0,
    isOpen: true
  });
  _dataSets.rows[2] = _objectSpread({}, _dataSets.rows[2], {
    parent: 1
  });

  var onCollapse = function onCollapse() {
    return undefined;
  };

  var view = (0, _enzyme.mount)(React.createElement(_index.Table, {
    "aria-label": "Aria labeled",
    onCollapse: onCollapse,
    cells: _dataSets.columns,
    rows: _dataSets.rows
  }, React.createElement(_index.TableHeader, null), React.createElement(_index.TableBody, null)));
  expect(view).toMatchSnapshot();
});
test('Selectable table', function () {
  var onSelect = function onSelect() {
    return undefined;
  };

  var view = (0, _enzyme.mount)(React.createElement(_index.Table, {
    "aria-label": "Aria labeled",
    onSelect: onSelect,
    cells: _dataSets.columns,
    rows: _dataSets.rows
  }, React.createElement(_index.TableHeader, null), React.createElement(_index.TableBody, null)));
  expect(view).toMatchSnapshot();
});
test('Header width table', function () {
  _dataSets.columns[0] = _objectSpread({}, _dataSets.columns[0], {
    transforms: [(0, _index.cellWidth)(10)]
  });
  _dataSets.columns[2] = _objectSpread({}, _dataSets.columns[2], {
    transforms: [(0, _index.cellWidth)(30)]
  });
  _dataSets.columns[4] = _objectSpread({}, _dataSets.columns[4], {
    transforms: [(0, _index.cellWidth)('max')]
  });
  var view = (0, _enzyme.mount)(React.createElement(_index.Table, {
    "aria-label": "Aria labeled",
    cells: _dataSets.columns,
    rows: _dataSets.rows
  }, React.createElement(_index.TableHeader, null), React.createElement(_index.TableBody, null)));
  expect(view).toMatchSnapshot();
});
test('Selectable table with selected expandable row', function () {
  var data = {
    cells: ['column'],
    rows: [{
      cells: ['one'],
      selected: true
    }, {
      cells: ['one'],
      parent: 0
    }],
    onSelect: function onSelect(f) {
      return f;
    }
  };
  var view = (0, _enzyme.mount)(React.createElement(_index.Table, _extends({
    "aria-label": "Aria labeled"
  }, data), React.createElement(_index.TableHeader, null), React.createElement(_index.TableBody, null)));
  expect(view.find('input[name="check-all"]').prop('checked')).toEqual(true);
});
//# sourceMappingURL=Table.test.js.map