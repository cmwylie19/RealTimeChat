(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./chart-bullet-data", "./chart-bullet-domain", "./chart-bullet-size", "./chart-bullet-theme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./chart-bullet-data"), require("./chart-bullet-domain"), require("./chart-bullet-size"), require("./chart-bullet-theme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.chartBulletData, global.chartBulletDomain, global.chartBulletSize, global.chartBulletTheme);
    global.undefined = mod.exports;
  }
})(this, function (exports, _chartBulletData, _chartBulletDomain, _chartBulletSize, _chartBulletTheme) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_chartBulletData).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _chartBulletData[key];
      }
    });
  });
  Object.keys(_chartBulletDomain).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _chartBulletDomain[key];
      }
    });
  });
  Object.keys(_chartBulletSize).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _chartBulletSize[key];
      }
    });
  });
  Object.keys(_chartBulletTheme).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _chartBulletTheme[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map