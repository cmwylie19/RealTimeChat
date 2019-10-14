(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./TopologyView", "./TopologyControlBar", "./TopologySideBar"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./TopologyView"), require("./TopologyControlBar"), require("./TopologySideBar"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.TopologyView, global.TopologyControlBar, global.TopologySideBar);
    global.undefined = mod.exports;
  }
})(this, function (exports, _TopologyView, _TopologyControlBar, _TopologySideBar) {
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
  Object.keys(_TopologyControlBar).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _TopologyControlBar[key];
      }
    });
  });
  Object.keys(_TopologySideBar).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _TopologySideBar[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map