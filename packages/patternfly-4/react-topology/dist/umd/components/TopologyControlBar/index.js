(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./TopologyControlBar"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./TopologyControlBar"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.TopologyControlBar);
    global.undefined = mod.exports;
  }
})(this, function (exports, _TopologyControlBar) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_TopologyControlBar).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _TopologyControlBar[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map