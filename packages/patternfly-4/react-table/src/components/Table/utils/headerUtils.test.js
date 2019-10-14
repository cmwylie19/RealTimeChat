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
exports.__esModule = true;
var headerUtils_1 = require("./headerUtils");
describe('headerUtils', function () {
    describe('calculateColumns', function () {
        test('collapsibleTransfroms', function () {
            var collapsibleTransfroms = headerUtils_1.calculateColumns(['Some'], { onCollapse: function () { return undefined; } });
            expect(collapsibleTransfroms[0].cell.formatters).toHaveLength(1);
            expect(collapsibleTransfroms[0].cell.formatters[0].name).toBe('defaultTitle');
            expect(collapsibleTransfroms[0].cell.transforms).toHaveLength(2);
            expect(collapsibleTransfroms[0].extraParams.onCollapse).toBeDefined();
            expect(collapsibleTransfroms[0].header.transforms).toHaveLength(3);
            expect(collapsibleTransfroms[1].cell.transforms).toHaveLength(3);
            expect(collapsibleTransfroms[1].cell.transforms.find(function (transform) { return transform.name === 'parentId'; })).toBeDefined();
            expect(collapsibleTransfroms[1].cell.transforms.find(function (transform) { return transform.name === 'expandedRowFormatter'; })).toBeDefined();
        });
        test('selectableTransforms', function () {
            var selectableTransforms = headerUtils_1.calculateColumns([], { onSelect: function () { return undefined; }, canSelectAll: true });
            expect(selectableTransforms[0].cell.formatters).toHaveLength(1);
            expect(selectableTransforms[0].cell.formatters[0].name).toBe('defaultTitle');
            expect(selectableTransforms[0].cell.transforms).toHaveLength(2);
            expect(selectableTransforms[0].extraParams.onSelect).toBeDefined();
            expect(selectableTransforms[0].header.transforms).toHaveLength(3);
        });
        test('basicActionsTransforms', function () {
            var actionsTransforms = headerUtils_1.calculateColumns([], { actions: [{ title: 'some' }] });
            expect(actionsTransforms[0].cell.formatters).toHaveLength(1);
            expect(actionsTransforms[0].cell.formatters[0].name).toBe('defaultTitle');
            expect(actionsTransforms[0].cell.transforms).toHaveLength(2);
            expect(actionsTransforms[0].extraParams).toEqual({ actions: [{ title: 'some' }] });
            expect(actionsTransforms[0].header.transforms).toHaveLength(3);
        });
        test('actionsTransforms', function () {
            var actionsTransforms = headerUtils_1.calculateColumns([], {
                areActionsDisabled: function () { return false; },
                actionResolver: function () { return [{ title: 'some' }]; }
            });
            expect(actionsTransforms[0].cell.formatters).toHaveLength(1);
            expect(actionsTransforms[0].cell.formatters[0].name).toBe('defaultTitle');
            expect(actionsTransforms[0].extraParams.areActionsDisabled).toBeDefined();
            expect(actionsTransforms[0].extraParams.actionResolver).toBeDefined();
            expect(actionsTransforms[0].cell.transforms).toHaveLength(2);
            expect(actionsTransforms[0].header.transforms).toHaveLength(3);
        });
        test('emptyTransforms', function () {
            var actionsTransforms = headerUtils_1.calculateColumns([], {});
            expect(actionsTransforms).toHaveLength(0);
        });
        describe('mixed strings and objects', function () {
            var cells = ['first', { title: 'second' }, 'third', { title: 'some' }];
            var mixed = headerUtils_1.calculateColumns(cells, {});
            cells.forEach(function (oneCell, key) {
                test("" + oneCell, function () {
                    expect(mixed[key].property).toBe(oneCell.title || oneCell);
                    expect(mixed[key].header.label).toBe(oneCell.title || oneCell);
                    expect(mixed[key].header.transforms).toHaveLength(2);
                    expect(mixed[key].cell.transforms).toHaveLength(1);
                    expect(mixed[key].cell.formatters).toHaveLength(1);
                });
            });
        });
        test('correct property', function () {
            expect(headerUtils_1.calculateColumns(['some'], {})[0].property).toBe('some');
            expect(headerUtils_1.calculateColumns(['some with space'], {})[0].property).toBe('some-with-space');
            expect(headerUtils_1.calculateColumns([''], {})[0].property).toBe('column-0');
        });
        describe('generateHeader', function () {
            test('additional data', function () {
                var result = headerUtils_1.calculateColumns([
                    {
                        header: {
                            someData: 'test'
                        }
                    }
                ], {});
                expect(result[0].header).toMatchObject({ someData: 'test' });
            });
            test('custom functions', function () {
                var testFunc = function () { return undefined; };
                var result = headerUtils_1.calculateColumns([
                    {
                        title: '',
                        transforms: [testFunc],
                        formatters: [testFunc]
                    }
                ], {});
                expect(result[0].header.formatters.find(function (formatter) { return formatter.name === 'testFunc'; })).toBeDefined();
                expect(result[0].header.transforms.find(function (transform) { return transform.name === 'testFunc'; })).toBeDefined();
            });
            test('custom functions in header', function () {
                var testFunc = function () { return undefined; };
                var result = headerUtils_1.calculateColumns([
                    {
                        title: '',
                        header: {
                            transforms: [testFunc],
                            formatters: [testFunc]
                        }
                    }
                ], {});
                expect(result[0].header.formatters.find(function (formatter) { return formatter.name === 'testFunc'; })).toBeDefined();
                expect(result[0].header.transforms.find(function (transform) { return transform.name === 'testFunc'; })).toBeDefined();
            });
        });
        describe('generateCell', function () {
            test('additional data', function () {
                var result = headerUtils_1.calculateColumns([
                    {
                        cell: {
                            someData: 'test'
                        }
                    }
                ], {});
                expect(result[0].cell).toMatchObject({ someData: 'test' });
            });
            test('custom functions', function () {
                var testFunc = function () { return undefined; };
                var result = headerUtils_1.calculateColumns([
                    {
                        title: '',
                        cellTransforms: [testFunc],
                        cellFormatters: [testFunc]
                    }
                ], {});
                expect(result[0].cell.formatters.find(function (formatter) { return formatter.name === 'testFunc'; })).toBeDefined();
                expect(result[0].cell.transforms.find(function (transform) { return transform.name === 'testFunc'; })).toBeDefined();
            });
            test('custom functions in header', function () {
                var testFunc = function () { return undefined; };
                var result = headerUtils_1.calculateColumns([
                    {
                        title: '',
                        cell: {
                            transforms: [testFunc],
                            formatters: [testFunc]
                        }
                    }
                ], {});
                expect(result[0].cell.formatters.find(function (formatter) { return formatter.name === 'testFunc'; })).toBeDefined();
                expect(result[0].cell.transforms.find(function (transform) { return transform.name === 'testFunc'; })).toBeDefined();
            });
        });
    });
    describe('mapOpenedRows', function () {
        test('flat structure', function () {
            var rows = [{}, { parent: 0 }, {}, { parent: 2 }];
            var children = ['one', 'two', 'three', 'four'];
            var mappedRows = headerUtils_1.mapOpenedRows(rows, children);
            expect(mappedRows).toHaveLength(2);
            expect(mappedRows[0].rows).toHaveLength(2);
            expect(mappedRows[0]).toMatchObject({ rows: ['one', 'two'] });
        });
        test('nested children', function () {
            var rows = [{}, { parent: 0 }, { parent: 1 }, { parent: 2 }];
            var children = ['one', 'two', 'three', 'four'];
            var mappedRows = headerUtils_1.mapOpenedRows(rows, children);
            expect(mappedRows).toHaveLength(1);
            expect(mappedRows[0].rows).toHaveLength(4);
            expect(mappedRows[0]).toMatchObject({ rows: children });
        });
        test('no parent', function () {
            var rows = [{ parent: 'something' }, { parent: 0 }, {}, { parent: 2 }];
            var children = ['one', 'two', 'three', 'four'];
            var mappedRows = headerUtils_1.mapOpenedRows(rows, children);
            expect(mappedRows).toHaveLength(1);
            expect(mappedRows[0].rows).toHaveLength(2);
            expect(mappedRows[0]).toMatchObject({ rows: ['three', 'four'] });
        });
        test('should add rest props', function () {
            var rows = [{ isOpen: true, somethig: 'other' }, { parent: 0 }, { isOpen: false }, { parent: 2 }];
            var children = ['one', 'two', 'three', 'four'];
            var mappedRows = headerUtils_1.mapOpenedRows(rows, children);
            expect(mappedRows).toHaveLength(2);
            expect(mappedRows[0].rows).toHaveLength(2);
            expect(mappedRows[0]).toMatchObject(__assign(__assign({}, rows[0]), { rows: ['one', 'two'] }));
        });
    });
});
