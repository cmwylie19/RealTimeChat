(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./ChartBullet", "./ChartBulletComparativeErrorMeasure", "./ChartBulletComparativeMeasure", "./ChartBulletComparativeWarningMeasure", "./ChartBulletPrimaryDotMeasure", "./ChartBulletPrimarySegmentedMeasure", "./ChartBulletQualitativeRange"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./ChartBullet"), require("./ChartBulletComparativeErrorMeasure"), require("./ChartBulletComparativeMeasure"), require("./ChartBulletComparativeWarningMeasure"), require("./ChartBulletPrimaryDotMeasure"), require("./ChartBulletPrimarySegmentedMeasure"), require("./ChartBulletQualitativeRange"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ChartBullet, global.ChartBulletComparativeErrorMeasure, global.ChartBulletComparativeMeasure, global.ChartBulletComparativeWarningMeasure, global.ChartBulletPrimaryDotMeasure, global.ChartBulletPrimarySegmentedMeasure, global.ChartBulletQualitativeRange);
    global.undefined = mod.exports;
  }
})(this, function (exports, _ChartBullet, _ChartBulletComparativeErrorMeasure, _ChartBulletComparativeMeasure, _ChartBulletComparativeWarningMeasure, _ChartBulletPrimaryDotMeasure, _ChartBulletPrimarySegmentedMeasure, _ChartBulletQualitativeRange) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_ChartBullet).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartBullet[key];
      }
    });
  });
  Object.keys(_ChartBulletComparativeErrorMeasure).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartBulletComparativeErrorMeasure[key];
      }
    });
  });
  Object.keys(_ChartBulletComparativeMeasure).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartBulletComparativeMeasure[key];
      }
    });
  });
  Object.keys(_ChartBulletComparativeWarningMeasure).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartBulletComparativeWarningMeasure[key];
      }
    });
  });
  Object.keys(_ChartBulletPrimaryDotMeasure).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartBulletPrimaryDotMeasure[key];
      }
    });
  });
  Object.keys(_ChartBulletPrimarySegmentedMeasure).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartBulletPrimarySegmentedMeasure[key];
      }
    });
  });
  Object.keys(_ChartBulletQualitativeRange).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartBulletQualitativeRange[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map