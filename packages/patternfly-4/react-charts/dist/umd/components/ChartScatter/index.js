(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./ChartScatter"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./ChartScatter"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ChartScatter);
    global.undefined = mod.exports;
  }
})(this, function (exports, _ChartScatter) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_ChartScatter).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartScatter[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map