(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./TopologyView"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./TopologyView"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.TopologyView);
    global.undefined = mod.exports;
  }
})(this, function (exports, _TopologyView) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_TopologyView).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _TopologyView[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map