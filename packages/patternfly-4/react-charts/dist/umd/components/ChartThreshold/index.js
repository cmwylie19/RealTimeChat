(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./ChartThreshold"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./ChartThreshold"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ChartThreshold);
    global.undefined = mod.exports;
  }
})(this, function (exports, _ChartThreshold) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_ChartThreshold).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartThreshold[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map