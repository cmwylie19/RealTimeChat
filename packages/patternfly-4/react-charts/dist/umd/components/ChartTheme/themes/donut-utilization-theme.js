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
  exports.DonutUtilizationStaticTheme = exports.DonutUtilizationDynamicTheme = undefined;

  /* eslint-disable camelcase */
  // Donut utilization dynamic theme
  const DonutUtilizationDynamicTheme = exports.DonutUtilizationDynamicTheme = {
    pie: {
      height: _reactTokens.chart_donut_utilization_dynamic_pie_Height.value,
      padding: _reactTokens.chart_donut_utilization_dynamic_pie_Padding.value,
      padAngle: _reactTokens.chart_donut_utilization_dynamic_pie_angle_Padding.value,
      width: _reactTokens.chart_donut_utilization_dynamic_pie_Width.value
    }
  }; // Donut utilization static theme

  const DonutUtilizationStaticTheme = exports.DonutUtilizationStaticTheme = {
    legend: {
      colorScale: [_reactTokens.chart_donut_threshold_first_Color.value, _reactTokens.chart_donut_threshold_second_Color.value, _reactTokens.chart_donut_threshold_third_Color.value]
    },
    pie: {
      colorScale: [_reactTokens.chart_donut_threshold_first_Color.value],
      padding: _reactTokens.chart_donut_utilization_static_pie_Padding.value
    }
  };
});
//# sourceMappingURL=donut-utilization-theme.js.map