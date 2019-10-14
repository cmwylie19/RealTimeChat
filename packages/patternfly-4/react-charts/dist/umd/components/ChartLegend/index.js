(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./ChartLegend", "./ChartLegendWrapper"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./ChartLegend"), require("./ChartLegendWrapper"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ChartLegend, global.ChartLegendWrapper);
    global.undefined = mod.exports;
  }
})(this, function (exports, _ChartLegend, _ChartLegendWrapper) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_ChartLegend).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartLegend[key];
      }
    });
  });
  Object.keys(_ChartLegendWrapper).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartLegendWrapper[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map