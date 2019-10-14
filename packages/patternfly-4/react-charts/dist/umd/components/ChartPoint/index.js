(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./ChartPoint"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./ChartPoint"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ChartPoint);
    global.undefined = mod.exports;
  }
})(this, function (exports, _ChartPoint) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_ChartPoint).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartPoint[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map