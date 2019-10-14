(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Chart"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Chart"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Chart);
    global.undefined = mod.exports;
  }
})(this, function (exports, _Chart) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_Chart).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _Chart[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map