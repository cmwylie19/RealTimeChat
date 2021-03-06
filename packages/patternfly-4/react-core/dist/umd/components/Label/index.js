(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Label"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Label"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Label);
    global.undefined = mod.exports;
  }
})(this, function (exports, _Label) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_Label).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _Label[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map