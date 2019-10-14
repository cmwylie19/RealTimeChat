(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./ChartArea"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./ChartArea"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ChartArea);
    global.undefined = mod.exports;
  }
})(this, function (exports, _ChartArea) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_ChartArea).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartArea[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map