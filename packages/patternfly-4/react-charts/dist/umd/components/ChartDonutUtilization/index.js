(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./ChartDonutThreshold", "./ChartDonutUtilization"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./ChartDonutThreshold"), require("./ChartDonutUtilization"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ChartDonutThreshold, global.ChartDonutUtilization);
    global.undefined = mod.exports;
  }
})(this, function (exports, _ChartDonutThreshold, _ChartDonutUtilization) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_ChartDonutThreshold).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartDonutThreshold[key];
      }
    });
  });
  Object.keys(_ChartDonutUtilization).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartDonutUtilization[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map