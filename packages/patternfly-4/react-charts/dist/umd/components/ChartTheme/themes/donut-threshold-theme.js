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
  exports.DonutThresholdStaticTheme = exports.DonutThresholdDynamicTheme = undefined;

  /* eslint-disable camelcase */
  // Donut threshold dynamic theme
  const DonutThresholdDynamicTheme = exports.DonutThresholdDynamicTheme = {
    legend: {
      colorScale: [_reactTokens.chart_donut_threshold_second_Color.value, _reactTokens.chart_donut_threshold_third_Color.value]
    },
    pie: {
      height: _reactTokens.chart_donut_threshold_dynamic_pie_Height.value,
      padding: _reactTokens.chart_donut_threshold_dynamic_pie_Padding.value,
      width: _reactTokens.chart_donut_threshold_dynamic_pie_Width.value
    }
  }; // Donut threshold static theme

  const DonutThresholdStaticTheme = exports.DonutThresholdStaticTheme = {
    pie: {
      colorScale: [_reactTokens.chart_donut_threshold_first_Color.value, _reactTokens.chart_donut_threshold_second_Color.value, _reactTokens.chart_donut_threshold_third_Color.value],
      height: _reactTokens.chart_donut_threshold_static_pie_Height.value,
      padAngle: _reactTokens.chart_donut_threshold_static_pie_angle_Padding.value,
      padding: _reactTokens.chart_donut_threshold_static_pie_Padding.value,
      width: _reactTokens.chart_donut_threshold_static_pie_Width.value
    }
  };
});
//# sourceMappingURL=donut-threshold-theme.js.map