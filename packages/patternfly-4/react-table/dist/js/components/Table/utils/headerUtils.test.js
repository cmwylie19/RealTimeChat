"use strict";

var _headerUtils = require("./headerUtils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('headerUtils', function () {
  describe('calculateColumns', function () {
    test('collapsibleTransfroms', function () {
      var collapsibleTransfroms = (0, _headerUtils.calculateColumns)(['Some'], {
        onCollapse: function onCollapse() {
          return undefined;
        }
      });
      expect(collapsibleTransfroms[0].cell.formatters).toHaveLength(1);
      expect(collapsibleTransfroms[0].cell.formatters[0].name).toBe('defaultTitle');
      expect(collapsibleTransfroms[0].cell.transforms).toHaveLength(2);
      expect(collapsibleTransfroms[0].extraParams.onCollapse).toBeDefined();
      expect(collapsibleTransfroms[0].header.transforms).toHaveLength(3);
      expect(collapsibleTransfroms[1].cell.transforms).toHaveLength(3);
      expect(collapsibleTransfroms[1].cell.transforms.find(function (transform) {
        return transform.name === 'parentId';
      })).toBeDefined();
      expect(collapsibleTransfroms[1].cell.transforms.find(function (transform) {
        return transform.name === 'expandedRowFormatter';
      })).toBeDefined();
    });
    test('selectableTransforms', function () {
      var selectableTransforms = (0, _headerUtils.calculateColumns)([], {
        onSelect: function onSelect() {
          return undefined;
        },
        canSelectAll: true
      });
      expect(selectableTransforms[0].cell.formatters).toHaveLength(1);
      expect(selectableTransforms[0].cell.formatters[0].name).toBe('defaultTitle');
      expect(selectableTransforms[0].cell.transforms).toHaveLength(2);
      expect(selectableTransforms[0].extraParams.onSelect).toBeDefined();
      expect(selectableTransforms[0].header.transforms).toHaveLength(3);
    });
    test('basicActionsTransforms', function () {
      var actionsTransforms = (0, _headerUtils.calculateColumns)([], {
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
    test('actionsTransforms', function () {
      var actionsTransforms = (0, _headerUtils.calculateColumns)([], {
        areActionsDisabled: function areActionsDisabled() {
          return false;
        },
        actionResolver: function actionResolver() {
          return [{
            title: 'some'
          }];
        }
      });
      expect(actionsTransforms[0].cell.formatters).toHaveLength(1);
      expect(actionsTransforms[0].cell.formatters[0].name).toBe('defaultTitle');
      expect(actionsTransforms[0].extraParams.areActionsDisabled).toBeDefined();
      expect(actionsTransforms[0].extraParams.actionResolver).toBeDefined();
      expect(actionsTransforms[0].cell.transforms).toHaveLength(2);
      expect(actionsTransforms[0].header.transforms).toHaveLength(3);
    });
    test('emptyTransforms', function () {
      var actionsTransforms = (0, _headerUtils.calculateColumns)([], {});
      expect(actionsTransforms).toHaveLength(0);
    });
    describe('mixed strings and objects', function () {
      var cells = ['first', {
        title: 'second'
      }, 'third', {
        title: 'some'
      }];
      var mixed = (0, _headerUtils.calculateColumns)(cells, {});
      cells.forEach(function (oneCell, key) {
        test("".concat(oneCell), function () {
          expect(mixed[key].property).toBe(oneCell.title || oneCell);
          expect(mixed[key].header.label).toBe(oneCell.title || oneCell);
          expect(mixed[key].header.transforms).toHaveLength(2);
          expect(mixed[key].cell.transforms).toHaveLength(1);
          expect(mixed[key].cell.formatters).toHaveLength(1);
        });
      });
    });
    test('correct property', function () {
      expect((0, _headerUtils.calculateColumns)(['some'], {})[0].property).toBe('some');
      expect((0, _headerUtils.calculateColumns)(['some with space'], {})[0].property).toBe('some-with-space');
      expect((0, _headerUtils.calculateColumns)([''], {})[0].property).toBe('column-0');
    });
    describe('generateHeader', function () {
      test('additional data', function () {
        var result = (0, _headerUtils.calculateColumns)([{
          header: {
            someData: 'test'
          }
        }], {});
        expect(result[0].header).toMatchObject({
          someData: 'test'
        });
      });
      test('custom functions', function () {
        var testFunc = function testFunc() {
          return undefined;
        };

        var result = (0, _headerUtils.calculateColumns)([{
          title: '',
          transforms: [testFunc],
          formatters: [testFunc]
        }], {});
        expect(result[0].header.formatters.find(function (formatter) {
          return formatter.name === 'testFunc';
        })).toBeDefined();
        expect(result[0].header.transforms.find(function (transform) {
          return transform.name === 'testFunc';
        })).toBeDefined();
      });
      test('custom functions in header', function () {
        var testFunc = function testFunc() {
          return undefined;
        };

        var result = (0, _headerUtils.calculateColumns)([{
          title: '',
          header: {
            transforms: [testFunc],
            formatters: [testFunc]
          }
        }], {});
        expect(result[0].header.formatters.find(function (formatter) {
          return formatter.name === 'testFunc';
        })).toBeDefined();
        expect(result[0].header.transforms.find(function (transform) {
          return transform.name === 'testFunc';
        })).toBeDefined();
      });
    });
    describe('generateCell', function () {
      test('additional data', function () {
        var result = (0, _headerUtils.calculateColumns)([{
          cell: {
            someData: 'test'
          }
        }], {});
        expect(result[0].cell).toMatchObject({
          someData: 'test'
        });
      });
      test('custom functions', function () {
        var testFunc = function testFunc() {
          return undefined;
        };

        var result = (0, _headerUtils.calculateColumns)([{
          title: '',
          cellTransforms: [testFunc],
          cellFormatters: [testFunc]
        }], {});
        expect(result[0].cell.formatters.find(function (formatter) {
          return formatter.name === 'testFunc';
        })).toBeDefined();
        expect(result[0].cell.transforms.find(function (transform) {
          return transform.name === 'testFunc';
        })).toBeDefined();
      });
      test('custom functions in header', function () {
        var testFunc = function testFunc() {
          return undefined;
        };

        var result = (0, _headerUtils.calculateColumns)([{
          title: '',
          cell: {
            transforms: [testFunc],
            formatters: [testFunc]
          }
        }], {});
        expect(result[0].cell.formatters.find(function (formatter) {
          return formatter.name === 'testFunc';
        })).toBeDefined();
        expect(result[0].cell.transforms.find(function (transform) {
          return transform.name === 'testFunc';
        })).toBeDefined();
      });
    });
  });
  describe('mapOpenedRows', function () {
    test('flat structure', function () {
      var rows = [{}, {
        parent: 0
      }, {}, {
        parent: 2
      }];
      var children = ['one', 'two', 'three', 'four'];
      var mappedRows = (0, _headerUtils.mapOpenedRows)(rows, children);
      expect(mappedRows).toHaveLength(2);
      expect(mappedRows[0].rows).toHaveLength(2);
      expect(mappedRows[0]).toMatchObject({
        rows: ['one', 'two']
      });
    });
    test('nested children', function () {
      var rows = [{}, {
        parent: 0
      }, {
        parent: 1
      }, {
        parent: 2
      }];
      var children = ['one', 'two', 'three', 'four'];
      var mappedRows = (0, _headerUtils.mapOpenedRows)(rows, children);
      expect(mappedRows).toHaveLength(1);
      expect(mappedRows[0].rows).toHaveLength(4);
      expect(mappedRows[0]).toMatchObject({
        rows: children
      });
    });
    test('no parent', function () {
      var rows = [{
        parent: 'something'
      }, {
        parent: 0
      }, {}, {
        parent: 2
      }];
      var children = ['one', 'two', 'three', 'four'];
      var mappedRows = (0, _headerUtils.mapOpenedRows)(rows, children);
      expect(mappedRows).toHaveLength(1);
      expect(mappedRows[0].rows).toHaveLength(2);
      expect(mappedRows[0]).toMatchObject({
        rows: ['three', 'four']
      });
    });
    test('should add rest props', function () {
      var rows = [{
        isOpen: true,
        somethig: 'other'
      }, {
        parent: 0
      }, {
        isOpen: false
      }, {
        parent: 2
      }];
      var children = ['one', 'two', 'three', 'four'];
      var mappedRows = (0, _headerUtils.mapOpenedRows)(rows, children);
      expect(mappedRows).toHaveLength(2);
      expect(mappedRows[0].rows).toHaveLength(2);
      expect(mappedRows[0]).toMatchObject(_objectSpread({}, rows[0], {
        rows: ['one', 'two']
      }));
    });
  });
});
//# sourceMappingURL=headerUtils.test.js.map