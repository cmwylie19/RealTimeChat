(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@patternfly/react-tokens"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@patternfly/react-tokens"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactTokens);
    global.undefined = mod.exports;
  }
})(this, function (exports, _reactTokens) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DonutUtilizationStyles = undefined;

  /* eslint-disable camelcase */
  // Donut utilization styles
  const DonutUtilizationStyles = exports.DonutUtilizationStyles = {
    thresholds: {
      colorScale: [_reactTokens.chart_donut_threshold_warning_Color.value, _reactTokens.chart_donut_threshold_danger_Color.value]
    }
  };
});
//# sourceMappingURL=donut-utilization-styles.js.map