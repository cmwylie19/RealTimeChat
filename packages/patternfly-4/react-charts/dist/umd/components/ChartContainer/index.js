(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./ChartContainer"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./ChartContainer"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ChartContainer);
    global.undefined = mod.exports;
  }
})(this, function (exports, _ChartContainer) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_ChartContainer).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartContainer[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map