(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./ChartAxis"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./ChartAxis"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ChartAxis);
    global.undefined = mod.exports;
  }
})(this, function (exports, _ChartAxis) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_ChartAxis).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartAxis[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map