(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Virtualized"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Virtualized"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Virtualized);
    global.undefined = mod.exports;
  }
})(this, function (exports, _Virtualized) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_Virtualized).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _Virtualized[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map