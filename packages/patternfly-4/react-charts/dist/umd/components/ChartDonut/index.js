(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./ChartDonut"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./ChartDonut"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ChartDonut);
    global.undefined = mod.exports;
  }
})(this, function (exports, _ChartDonut) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_ChartDonut).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartDonut[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map