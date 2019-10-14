"use strict";

var _common = require("./common");

Object.values(_common.IconSize).forEach(function (size) {
  test("getSize returns size for ".concat(size, " icons"), function () {
    expect((0, _common.getSize)(size)).toMatchSnapshot();
  });
});
test('getSize returns a default size for unknown sizes', function () {
  expect((0, _common.getSize)('unknown')).toMatchSnapshot();
});
//# sourceMappingURL=common.test.js.map