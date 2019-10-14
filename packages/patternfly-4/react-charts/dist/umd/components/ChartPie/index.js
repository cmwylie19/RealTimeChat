(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./ChartPie"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./ChartPie"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ChartPie);
    global.undefined = mod.exports;
  }
})(this, function (exports, _ChartPie) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_ChartPie).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartPie[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map