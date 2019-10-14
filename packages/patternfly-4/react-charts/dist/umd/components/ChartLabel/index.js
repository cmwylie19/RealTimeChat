(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./ChartLabel"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./ChartLabel"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ChartLabel);
    global.undefined = mod.exports;
  }
})(this, function (exports, _ChartLabel) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_ChartLabel).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartLabel[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map