(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./chart-domain", "./chart-helpers", "./chart-label", "./chart-legend", "./chart-origin", "./chart-padding", "./chart-theme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./chart-domain"), require("./chart-helpers"), require("./chart-label"), require("./chart-legend"), require("./chart-origin"), require("./chart-padding"), require("./chart-theme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.chartDomain, global.chartHelpers, global.chartLabel, global.chartLegend, global.chartOrigin, global.chartPadding, global.chartTheme);
    global.undefined = mod.exports;
  }
})(this, function (exports, _chartDomain, _chartHelpers, _chartLabel, _chartLegend, _chartOrigin, _chartPadding, _chartTheme) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_chartDomain).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _chartDomain[key];
      }
    });
  });
  Object.keys(_chartHelpers).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _chartHelpers[key];
      }
    });
  });
  Object.keys(_chartLabel).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _chartLabel[key];
      }
    });
  });
  Object.keys(_chartLegend).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _chartLegend[key];
      }
    });
  });
  Object.keys(_chartOrigin).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _chartOrigin[key];
      }
    });
  });
  Object.keys(_chartPadding).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _chartPadding[key];
      }
    });
  });
  Object.keys(_chartTheme).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _chartTheme[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map