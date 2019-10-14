(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./ChartGroup"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./ChartGroup"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ChartGroup);
    global.undefined = mod.exports;
  }
})(this, function (exports, _ChartGroup) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_ChartGroup).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartGroup[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map