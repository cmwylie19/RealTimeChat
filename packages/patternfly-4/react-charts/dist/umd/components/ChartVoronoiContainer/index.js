(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./ChartVoronoiContainer"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./ChartVoronoiContainer"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ChartVoronoiContainer);
    global.undefined = mod.exports;
  }
})(this, function (exports, _ChartVoronoiContainer) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_ChartVoronoiContainer).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartVoronoiContainer[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map