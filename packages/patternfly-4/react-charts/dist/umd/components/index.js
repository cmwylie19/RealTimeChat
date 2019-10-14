(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Chart", "./ChartArea", "./ChartAxis", "./ChartBar", "./ChartBullet", "./ChartContainer", "./ChartDonut", "./ChartDonutUtilization", "./ChartGroup", "./ChartLabel", "./ChartLegend", "./ChartLine", "./ChartPie", "./ChartPoint", "./ChartScatter", "./ChartStack", "./ChartTheme", "./ChartThreshold", "./ChartTooltip", "./ChartUtils", "./ChartVoronoiContainer"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Chart"), require("./ChartArea"), require("./ChartAxis"), require("./ChartBar"), require("./ChartBullet"), require("./ChartContainer"), require("./ChartDonut"), require("./ChartDonutUtilization"), require("./ChartGroup"), require("./ChartLabel"), require("./ChartLegend"), require("./ChartLine"), require("./ChartPie"), require("./ChartPoint"), require("./ChartScatter"), require("./ChartStack"), require("./ChartTheme"), require("./ChartThreshold"), require("./ChartTooltip"), require("./ChartUtils"), require("./ChartVoronoiContainer"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Chart, global.ChartArea, global.ChartAxis, global.ChartBar, global.ChartBullet, global.ChartContainer, global.ChartDonut, global.ChartDonutUtilization, global.ChartGroup, global.ChartLabel, global.ChartLegend, global.ChartLine, global.ChartPie, global.ChartPoint, global.ChartScatter, global.ChartStack, global.ChartTheme, global.ChartThreshold, global.ChartTooltip, global.ChartUtils, global.ChartVoronoiContainer);
    global.undefined = mod.exports;
  }
})(this, function (exports, _Chart, _ChartArea, _ChartAxis, _ChartBar, _ChartBullet, _ChartContainer, _ChartDonut, _ChartDonutUtilization, _ChartGroup, _ChartLabel, _ChartLegend, _ChartLine, _ChartPie, _ChartPoint, _ChartScatter, _ChartStack, _ChartTheme, _ChartThreshold, _ChartTooltip, _ChartUtils, _ChartVoronoiContainer) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_Chart).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _Chart[key];
      }
    });
  });
  Object.keys(_ChartArea).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartArea[key];
      }
    });
  });
  Object.keys(_ChartAxis).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartAxis[key];
      }
    });
  });
  Object.keys(_ChartBar).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartBar[key];
      }
    });
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
  Object.keys(_ChartContainer).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartContainer[key];
      }
    });
  });
  Object.keys(_ChartDonut).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartDonut[key];
      }
    });
  });
  Object.keys(_ChartDonutUtilization).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartDonutUtilization[key];
      }
    });
  });
  Object.keys(_ChartGroup).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartGroup[key];
      }
    });
  });
  Object.keys(_ChartLabel).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartLabel[key];
      }
    });
  });
  Object.keys(_ChartLegend).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartLegend[key];
      }
    });
  });
  Object.keys(_ChartLine).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartLine[key];
      }
    });
  });
  Object.keys(_ChartPie).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartPie[key];
      }
    });
  });
  Object.keys(_ChartPoint).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartPoint[key];
      }
    });
  });
  Object.keys(_ChartScatter).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartScatter[key];
      }
    });
  });
  Object.keys(_ChartStack).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartStack[key];
      }
    });
  });
  Object.keys(_ChartTheme).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartTheme[key];
      }
    });
  });
  Object.keys(_ChartThreshold).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartThreshold[key];
      }
    });
  });
  Object.keys(_ChartTooltip).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartTooltip[key];
      }
    });
  });
  Object.keys(_ChartUtils).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartUtils[key];
      }
    });
  });
  Object.keys(_ChartVoronoiContainer).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartVoronoiContainer[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map