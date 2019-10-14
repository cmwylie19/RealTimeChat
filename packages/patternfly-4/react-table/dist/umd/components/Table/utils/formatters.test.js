(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./formatters"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./formatters"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.formatters);
    global.undefined = mod.exports;
  }
})(this, function (_formatters) {
  "use strict";

  describe('formatters', () => {
    test('defaultTitle', () => {
      expect((0, _formatters.defaultTitle)('test')).toBe('test');
      expect((0, _formatters.defaultTitle)({
        title: 'test'
      })).toBe('test');
    });
  });
});
//# sourceMappingURL=formatters.test.js.map