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
  exports.BulletStyles = undefined;

  /* eslint-disable camelcase */
  // Bullet styles
  const BulletStyles = exports.BulletStyles = {
    axisTickCount: _reactTokens.chart_bullet_axis_tick_count.value,
    comparativeMeasureErrorWidth: _reactTokens.chart_bullet_comparative_measure_error_Width.value,
    comparativeMeasureWarningWidth: _reactTokens.chart_bullet_comparative_measure_warning_Width.value,
    comparativeMeasureWidth: _reactTokens.chart_bullet_comparative_measure_Width.value,
    label: {
      groupTitle: {
        // Victory props only
        fontSize: _reactTokens.chart_global_FontSize_2xl.value
      },
      subTitle: {
        // Victory props only
        fill: _reactTokens.chart_bullet_label_subtitle_Fill.value,
        fontSize: _reactTokens.chart_global_FontSize_sm.value
      },
      title: {
        // Victory props only
        fontSize: _reactTokens.chart_global_FontSize_lg.value
      }
    },
    primaryDotMeasureSize: _reactTokens.chart_bullet_primary_measure_dot_size.value,
    primarySegmentedMeasureWidth: _reactTokens.chart_bullet_primary_measure_segmented_Width.value,
    qualitativeRangeWidth: _reactTokens.chart_bullet_qualitative_range_Width.value
  };
});
//# sourceMappingURL=bullet-styles.js.map