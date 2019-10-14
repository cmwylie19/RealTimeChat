"use strict";

var _formatters = require("./formatters");

describe('formatters', function () {
  test('defaultTitle', function () {
    expect((0, _formatters.defaultTitle)('test')).toBe('test');
    expect((0, _formatters.defaultTitle)({
      title: 'test'
    })).toBe('test');
  });
});
//# sourceMappingURL=formatters.test.js.map