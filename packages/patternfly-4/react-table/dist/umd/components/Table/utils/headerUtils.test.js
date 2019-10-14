(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./headerUtils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./headerUtils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.headerUtils);
    global.undefined = mod.exports;
  }
})(this, function (_headerUtils) {
  "use strict";

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

  describe('headerUtils', () => {
    describe('calculateColumns', () => {
      test('collapsibleTransfroms', () => {
        const collapsibleTransfroms = (0, _headerUtils.calculateColumns)(['Some'], {
          onCollapse: () => undefined
        });
        expect(collapsibleTransfroms[0].cell.formatters).toHaveLength(1);
        expect(collapsibleTransfroms[0].cell.formatters[0].name).toBe('defaultTitle');
        expect(collapsibleTransfroms[0].cell.transforms).toHaveLength(2);
        expect(collapsibleTransfroms[0].extraParams.onCollapse).toBeDefined();
        expect(collapsibleTransfroms[0].header.transforms).toHaveLength(3);
        expect(collapsibleTransfroms[1].cell.transforms).toHaveLength(3);
        expect(collapsibleTransfroms[1].cell.transforms.find(transform => transform.name === 'parentId')).toBeDefined();
        expect(collapsibleTransfroms[1].cell.transforms.find(transform => transform.name === 'expandedRowFormatter')).toBeDefined();
      });
      test('selectableTransforms', () => {
        const selectableTransforms = (0, _headerUtils.calculateColumns)([], {
          onSelect: () => undefined,
          canSelectAll: true
        });
        expect(selectableTransforms[0].cell.formatters).toHaveLength(1);
        expect(selectableTransforms[0].cell.formatters[0].name).toBe('defaultTitle');
        expect(selectableTransforms[0].cell.transforms).toHaveLength(2);
        expect(selectableTransforms[0].extraParams.onSelect).toBeDefined();
        expect(selectableTransforms[0].header.transforms).toHaveLength(3);
      });
      test('basicActionsTransforms', () => {
        const actionsTransforms = (0, _headerUtils.calculateColumns)([], {
          actions: [{
            title: 'some'
          }]
        });
        expect(actionsTransforms[0].cell.formatters).toHaveLength(1);
        expect(actionsTransforms[0].cell.formatters[0].name).toBe('defaultTitle');
        expect(actionsTransforms[0].cell.transforms).toHaveLength(2);
        expect(actionsTransforms[0].extraParams).toEqual({
          actions: [{
            title: 'some'
          }]
        });
        expect(actionsTransforms[0].header.transforms).toHaveLength(3);
      });
      test('actionsTransforms', () => {
        const actionsTransforms = (0, _headerUtils.calculateColumns)([], {
          areActionsDisabled: () => false,
          actionResolver: () => [{
            title: 'some'
          }]
        });
        expect(actionsTransforms[0].cell.formatters).toHaveLength(1);
        expect(actionsTransforms[0].cell.formatters[0].name).toBe('defaultTitle');
        expect(actionsTransforms[0].extraParams.areActionsDisabled).toBeDefined();
        expect(actionsTransforms[0].extraParams.actionResolver).toBeDefined();
        expect(actionsTransforms[0].cell.transforms).toHaveLength(2);
        expect(actionsTransforms[0].header.transforms).toHaveLength(3);
      });
      test('emptyTransforms', () => {
        const actionsTransforms = (0, _headerUtils.calculateColumns)([], {});
        expect(actionsTransforms).toHaveLength(0);
      });
      describe('mixed strings and objects', () => {
        const cells = ['first', {
          title: 'second'
        }, 'third', {
          title: 'some'
        }];
        const mixed = (0, _headerUtils.calculateColumns)(cells, {});
        cells.forEach((oneCell, key) => {
          test(`${oneCell}`, () => {
            expect(mixed[key].property).toBe(oneCell.title || oneCell);
            expect(mixed[key].header.label).toBe(oneCell.title || oneCell);
            expect(mixed[key].header.transforms).toHaveLength(2);
            expect(mixed[key].cell.transforms).toHaveLength(1);
            expect(mixed[key].cell.formatters).toHaveLength(1);
          });
        });
      });
      test('correct property', () => {
        expect((0, _headerUtils.calculateColumns)(['some'], {})[0].property).toBe('some');
        expect((0, _headerUtils.calculateColumns)(['some with space'], {})[0].property).toBe('some-with-space');
        expect((0, _headerUtils.calculateColumns)([''], {})[0].property).toBe('column-0');
      });
      describe('generateHeader', () => {
        test('additional data', () => {
          const result = (0, _headerUtils.calculateColumns)([{
            header: {
              someData: 'test'
            }
          }], {});
          expect(result[0].header).toMatchObject({
            someData: 'test'
          });
        });
        test('custom functions', () => {
          const testFunc = () => undefined;

          const result = (0, _headerUtils.calculateColumns)([{
            title: '',
            transforms: [testFunc],
            formatters: [testFunc]
          }], {});
          expect(result[0].header.formatters.find(formatter => formatter.name === 'testFunc')).toBeDefined();
          expect(result[0].header.transforms.find(transform => transform.name === 'testFunc')).toBeDefined();
        });
        test('custom functions in header', () => {
          const testFunc = () => undefined;

          const result = (0, _headerUtils.calculateColumns)([{
            title: '',
            header: {
              transforms: [testFunc],
              formatters: [testFunc]
            }
          }], {});
          expect(result[0].header.formatters.find(formatter => formatter.name === 'testFunc')).toBeDefined();
          expect(result[0].header.transforms.find(transform => transform.name === 'testFunc')).toBeDefined();
        });
      });
      describe('generateCell', () => {
        test('additional data', () => {
          const result = (0, _headerUtils.calculateColumns)([{
            cell: {
              someData: 'test'
            }
          }], {});
          expect(result[0].cell).toMatchObject({
            someData: 'test'
          });
        });
        test('custom functions', () => {
          const testFunc = () => undefined;

          const result = (0, _headerUtils.calculateColumns)([{
            title: '',
            cellTransforms: [testFunc],
            cellFormatters: [testFunc]
          }], {});
          expect(result[0].cell.formatters.find(formatter => formatter.name === 'testFunc')).toBeDefined();
          expect(result[0].cell.transforms.find(transform => transform.name === 'testFunc')).toBeDefined();
        });
        test('custom functions in header', () => {
          const testFunc = () => undefined;

          const result = (0, _headerUtils.calculateColumns)([{
            title: '',
            cell: {
              transforms: [testFunc],
              formatters: [testFunc]
            }
          }], {});
          expect(result[0].cell.formatters.find(formatter => formatter.name === 'testFunc')).toBeDefined();
          expect(result[0].cell.transforms.find(transform => transform.name === 'testFunc')).toBeDefined();
        });
      });
    });
    describe('mapOpenedRows', () => {
      test('flat structure', () => {
        const rows = [{}, {
          parent: 0
        }, {}, {
          parent: 2
        }];
        const children = ['one', 'two', 'three', 'four'];
        const mappedRows = (0, _headerUtils.mapOpenedRows)(rows, children);
        expect(mappedRows).toHaveLength(2);
        expect(mappedRows[0].rows).toHaveLength(2);
        expect(mappedRows[0]).toMatchObject({
          rows: ['one', 'two']
        });
      });
      test('nested children', () => {
        const rows = [{}, {
          parent: 0
        }, {
          parent: 1
        }, {
          parent: 2
        }];
        const children = ['one', 'two', 'three', 'four'];
        const mappedRows = (0, _headerUtils.mapOpenedRows)(rows, children);
        expect(mappedRows).toHaveLength(1);
        expect(mappedRows[0].rows).toHaveLength(4);
        expect(mappedRows[0]).toMatchObject({
          rows: children
        });
      });
      test('no parent', () => {
        const rows = [{
          parent: 'something'
        }, {
          parent: 0
        }, {}, {
          parent: 2
        }];
        const children = ['one', 'two', 'three', 'four'];
        const mappedRows = (0, _headerUtils.mapOpenedRows)(rows, children);
        expect(mappedRows).toHaveLength(1);
        expect(mappedRows[0].rows).toHaveLength(2);
        expect(mappedRows[0]).toMatchObject({
          rows: ['three', 'four']
        });
      });
      test('should add rest props', () => {
        const rows = [{
          isOpen: true,
          somethig: 'other'
        }, {
          parent: 0
        }, {
          isOpen: false
        }, {
          parent: 2
        }];
        const children = ['one', 'two', 'three', 'four'];
        const mappedRows = (0, _headerUtils.mapOpenedRows)(rows, children);
        expect(mappedRows).toHaveLength(2);
        expect(mappedRows[0].rows).toHaveLength(2);
        expect(mappedRows[0]).toMatchObject(_objectSpread({}, rows[0], {
          rows: ['one', 'two']
        }));
      });
    });
  });
});
//# sourceMappingURL=headerUtils.test.js.map