(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.undefined = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.evaluateFormatters = evaluateFormatters;

  /**
   * evaluate-formatters.ts
   *
   * Forked from reactabular-table version 8.14.0
   * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
   */
  function evaluateFormatters(formatters) {
    return (value, extra) => formatters.reduce((parameters, formatter) => ({
      value: formatter(parameters.value, parameters.extra),
      extra
    }), {
      value,
      extra
    }).value;
  }
});
//# sourceMappingURL=evaluate-formatters.js.map