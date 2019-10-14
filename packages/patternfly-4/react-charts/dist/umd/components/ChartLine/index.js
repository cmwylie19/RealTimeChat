(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./ChartLine"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./ChartLine"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ChartLine);
    global.undefined = mod.exports;
  }
})(this, function (exports, _ChartLine) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_ChartLine).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartLine[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map