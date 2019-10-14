(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./ChartTooltip"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./ChartTooltip"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ChartTooltip);
    global.undefined = mod.exports;
  }
})(this, function (exports, _ChartTooltip) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_ChartTooltip).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartTooltip[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map