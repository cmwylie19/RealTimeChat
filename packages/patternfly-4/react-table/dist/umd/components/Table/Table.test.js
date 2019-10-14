(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./index", "../../test-helpers/data-sets"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./index"), require("../../test-helpers/data-sets"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.index, global.dataSets);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _index, _dataSets) {
  "use strict";

  var React = _interopRequireWildcard(_react);

  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();

    _getRequireWildcardCache = function () {
      return cache;
    };

    return cache;
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    var cache = _getRequireWildcardCache();

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};

    if (obj != null) {
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(source, true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  describe('Simple table', () => {
    test('caption', () => {
      const view = (0, _enzyme.mount)(React.createElement(_index.Table, {
        caption: "Simple Table",
        cells: _dataSets.columns,
        rows: _dataSets.rows
      }, React.createElement(_index.TableHeader, null), React.createElement(_index.TableBody, null)));
      expect(view).toMatchSnapshot();
    });
    test('header', () => {
      const view = (0, _enzyme.mount)(React.createElement(_index.Table, {
        header: React.createElement("h4", null, "Header title"),
        cells: _dataSets.columns,
        rows: _dataSets.rows
      }, React.createElement(_index.TableHeader, null), React.createElement(_index.TableBody, null)));
      expect(view).toMatchSnapshot();
    });
    test('aria-label', () => {
      const view = (0, _enzyme.mount)(React.createElement(_index.Table, {
        "aria-label": "Aria labeled",
        cells: _dataSets.columns,
        rows: _dataSets.rows
      }, React.createElement(_index.TableHeader, null), React.createElement(_index.TableBody, null)));
      expect(view).toMatchSnapshot();
    });
  });
  test('Sortable table', () => {
    const onSortCall = () => undefined;

    _dataSets.columns[0] = _objectSpread({}, _dataSets.columns[0], {
      transforms: [_index.sortable]
    });
    const view = (0, _enzyme.mount)(React.createElement(_index.Table, {
      "aria-label": "Aria labeled",
      onSort: onSortCall,
      sortBy: {},
      cells: _dataSets.columns,
      rows: _dataSets.rows
    }, React.createElement(_index.TableHeader, null), React.createElement(_index.TableBody, null)));
    expect(view).toMatchSnapshot();
  });
  describe('Table variants', () => {
    Object.values(_index.TableGridBreakpoint).forEach(oneBreakpoint => {
      test(`Breakpoint - ${oneBreakpoint}`, () => {
        const view = (0, _enzyme.mount)(React.createElement(_index.Table, {
          "aria-label": "Aria labeled",
          gridBreakPoint: oneBreakpoint,
          cells: _dataSets.columns,
          rows: _dataSets.rows
        }, React.createElement(_index.TableHeader, null), React.createElement(_index.TableBody, null)));
        expect(view).toMatchSnapshot();
      });
    });
    Object.values(_index.TableVariant).forEach(onevariant => {
      test(`Size - ${onevariant}`, () => {
        const view = (0, _enzyme.mount)(React.createElement(_index.Table, {
          "aria-label": "Aria labeled",
          variant: onevariant,
          cells: _dataSets.columns,
          rows: _dataSets.rows
        }, React.createElement(_index.TableHeader, null), React.createElement(_index.TableBody, null)));
        expect(view).toMatchSnapshot();
      });
    });
  });
  test('Simple Actions table', () => {
    const rowsWithDisabledAction = [..._dataSets.rows, {
      cells: ['one', 'two', 'three', 'four', 'five'],
      disableActions: true
    }];
    const view = (0, _enzyme.mount)(React.createElement(_index.Table, {
      "aria-label": "Aria labeled",
      actions: _dataSets.actions,
      cells: _dataSets.columns,
      rows: rowsWithDisabledAction
    }, React.createElement(_index.TableHeader, null), React.createElement(_index.TableBody, null)));
    expect(view).toMatchSnapshot();
  });
  test('Actions table', () => {
    const view = (0, _enzyme.mount)(React.createElement(_index.Table, {
      "aria-label": "Aria labeled",
      actionResolver: () => _dataSets.actions,
      areActionsDisabled: () => false,
      cells: _dataSets.columns,
      rows: _dataSets.rows
    }, React.createElement(_index.TableHeader, null), React.createElement(_index.TableBody, null)));
    expect(view).toMatchSnapshot();
  });
  test('Cell header table', () => {
    _dataSets.columns[0] = _objectSpread({}, _dataSets.columns[0], {
      cellTransforms: [_index.headerCol]
    });
    const view = (0, _enzyme.mount)(React.createElement(_index.Table, {
      "aria-label": "Aria labeled",
      cells: _dataSets.columns,
      rows: _dataSets.rows
    }, React.createElement(_index.TableHeader, null), React.createElement(_index.TableBody, null)));
    expect(view).toMatchSnapshot();
  });
  test('Collapsible table', () => {
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

    const onCollapse = () => undefined;

    const view = (0, _enzyme.mount)(React.createElement(_index.Table, {
      "aria-label": "Aria labeled",
      onCollapse: onCollapse,
      cells: _dataSets.columns,
      rows: _dataSets.rows
    }, React.createElement(_index.TableHeader, null), React.createElement(_index.TableBody, null)));
    expect(view).toMatchSnapshot();
  });
  test('Compound Expandable table', () => {
    const compoundColumns = [{
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

    const view = (0, _enzyme.mount)(React.createElement(_index.Table, {
      "aria-label": "Aria labeled",
      onExpand: onExpand,
      cells: compoundColumns,
      rows: compoundRows
    }, React.createElement(_index.TableHeader, null), React.createElement(_index.TableBody, null)));
    expect(view).toMatchSnapshot();
  });
  test('Collapsible nested table', () => {
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

    const onCollapse = () => undefined;

    const view = (0, _enzyme.mount)(React.createElement(_index.Table, {
      "aria-label": "Aria labeled",
      onCollapse: onCollapse,
      cells: _dataSets.columns,
      rows: _dataSets.rows
    }, React.createElement(_index.TableHeader, null), React.createElement(_index.TableBody, null)));
    expect(view).toMatchSnapshot();
  });
  test('Selectable table', () => {
    const onSelect = () => undefined;

    const view = (0, _enzyme.mount)(React.createElement(_index.Table, {
      "aria-label": "Aria labeled",
      onSelect: onSelect,
      cells: _dataSets.columns,
      rows: _dataSets.rows
    }, React.createElement(_index.TableHeader, null), React.createElement(_index.TableBody, null)));
    expect(view).toMatchSnapshot();
  });
  test('Header width table', () => {
    _dataSets.columns[0] = _objectSpread({}, _dataSets.columns[0], {
      transforms: [(0, _index.cellWidth)(10)]
    });
    _dataSets.columns[2] = _objectSpread({}, _dataSets.columns[2], {
      transforms: [(0, _index.cellWidth)(30)]
    });
    _dataSets.columns[4] = _objectSpread({}, _dataSets.columns[4], {
      transforms: [(0, _index.cellWidth)('max')]
    });
    const view = (0, _enzyme.mount)(React.createElement(_index.Table, {
      "aria-label": "Aria labeled",
      cells: _dataSets.columns,
      rows: _dataSets.rows
    }, React.createElement(_index.TableHeader, null), React.createElement(_index.TableBody, null)));
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
    const view = (0, _enzyme.mount)(React.createElement(_index.Table, _extends({
      "aria-label": "Aria labeled"
    }, data), React.createElement(_index.TableHeader, null), React.createElement(_index.TableBody, null)));
    expect(view.find('input[name="check-all"]').prop('checked')).toEqual(true);
  });
});
//# sourceMappingURL=Table.test.js.map