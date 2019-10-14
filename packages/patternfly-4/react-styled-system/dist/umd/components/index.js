(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./StyledSystem"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./StyledSystem"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.StyledSystem);
    global.undefined = mod.exports;
  }
})(this, function (exports, _StyledSystem) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_StyledSystem).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _StyledSystem[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map