(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./common"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./common"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.common);
    global.undefined = mod.exports;
  }
})(this, function (_common) {
  "use strict";

  Object.values(_common.IconSize).forEach(size => {
    test(`getSize returns size for ${size} icons`, () => {
      expect((0, _common.getSize)(size)).toMatchSnapshot();
    });
  });
  test('getSize returns a default size for unknown sizes', () => {
    expect((0, _common.getSize)('unknown')).toMatchSnapshot();
  });
});
//# sourceMappingURL=common.test.js.map