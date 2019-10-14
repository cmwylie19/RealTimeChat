(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./ChartTheme", "./ChartStyles"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./ChartTheme"), require("./ChartStyles"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ChartTheme, global.ChartStyles);
    global.undefined = mod.exports;
  }
})(this, function (exports, _ChartTheme, _ChartStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_ChartTheme).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartTheme[key];
      }
    });
  });
  Object.keys(_ChartStyles).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartStyles[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map