(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./styles/common-styles", "./styles/bullet-styles", "./styles/donut-styles", "./styles/donut-utilization-styles"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./styles/common-styles"), require("./styles/bullet-styles"), require("./styles/donut-styles"), require("./styles/donut-utilization-styles"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.commonStyles, global.bulletStyles, global.donutStyles, global.donutUtilizationStyles);
    global.undefined = mod.exports;
  }
})(this, function (exports, _commonStyles, _bulletStyles, _donutStyles, _donutUtilizationStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ChartDonutUtilizationStyles = exports.ChartDonutStyles = exports.ChartBulletStyles = exports.ChartCommonStyles = undefined;
  const ChartCommonStyles = exports.ChartCommonStyles = _commonStyles.CommonStyles;
  const ChartBulletStyles = exports.ChartBulletStyles = _bulletStyles.BulletStyles;
  const ChartDonutStyles = exports.ChartDonutStyles = _donutStyles.DonutStyles;
  const ChartDonutUtilizationStyles = exports.ChartDonutUtilizationStyles = _donutUtilizationStyles.DonutUtilizationStyles;
});
//# sourceMappingURL=ChartStyles.js.map