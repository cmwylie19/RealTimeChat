(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Table"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Table"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Table);
    global.undefined = mod.exports;
  }
})(this, function (exports, _Table) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_Table).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _Table[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map