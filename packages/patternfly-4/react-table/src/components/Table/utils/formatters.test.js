"use strict";
exports.__esModule = true;
var formatters_1 = require("./formatters");
describe('formatters', function () {
    test('defaultTitle', function () {
        expect(formatters_1.defaultTitle('test')).toBe('test');
        expect(formatters_1.defaultTitle({ title: 'test' })).toBe('test');
    });
});
