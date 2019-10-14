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
  exports.BulletQualitativeRangeTheme = exports.BulletPrimarySegmentedMeasureTheme = exports.BulletPrimaryNegativeMeasureTheme = exports.BulletPrimaryDotMeasureTheme = exports.BulletGroupTitleTheme = exports.BulletComparativeWarningMeasureTheme = exports.BulletComparativeMeasureTheme = exports.BulletComparativeErrorMeasureTheme = exports.BulletTheme = undefined;

  /* eslint-disable camelcase */
  // See https://docs.google.com/document/d/1cw10pJFXWruB1SA8TQwituxn5Ss6KpxYPCOYGrH8qAY/edit#
  // See https://www.patternfly.org/v3/pattern-library/data-visualization/bullet-chart/#design
  // Bullet theme
  const BulletTheme = exports.BulletTheme = {
    chart: {
      height: _reactTokens.chart_bullet_Height.value
    }
  }; // Bullet comparative measure error theme

  const BulletComparativeErrorMeasureTheme = exports.BulletComparativeErrorMeasureTheme = {
    bar: {
      height: _reactTokens.chart_bullet_Height.value,
      style: {
        data: {
          fill: _reactTokens.chart_bullet_comparative_measure_error_Fill_Color.value,
          stroke: _reactTokens.chart_bullet_comparative_measure_error_stroke_Color.value,
          strokeWidth: _reactTokens.chart_bullet_comparative_measure_error_stroke_Width.value
        }
      }
    }
  }; // Bullet comparative measure theme

  const BulletComparativeMeasureTheme = exports.BulletComparativeMeasureTheme = {
    bar: {
      height: _reactTokens.chart_bullet_Height.value,
      style: {
        data: {
          fill: _reactTokens.chart_bullet_comparative_measure_Fill_Color.value,
          stroke: _reactTokens.chart_bullet_comparative_measure_stroke_Color.value,
          strokeWidth: _reactTokens.chart_bullet_comparative_measure_stroke_Width.value
        }
      }
    }
  }; // Bullet comparative measure warning theme

  const BulletComparativeWarningMeasureTheme = exports.BulletComparativeWarningMeasureTheme = {
    bar: {
      height: _reactTokens.chart_bullet_Height.value,
      style: {
        data: {
          fill: _reactTokens.chart_bullet_comparative_measure_warning_Fill_Color.value,
          stroke: _reactTokens.chart_bullet_comparative_measure_warning_stroke_Color.value,
          strokeWidth: _reactTokens.chart_bullet_comparative_measure_warning_stroke_Width.value
        }
      }
    }
  }; // Bullet group title theme

  const BulletGroupTitleTheme = exports.BulletGroupTitleTheme = {
    chart: {
      padding: {
        bottom: 0,
        left: 0,
        right: 0,
        top: _reactTokens.chart_global_layout_Padding.value
      }
    },
    line: {
      style: {
        data: {
          fill: _reactTokens.chart_bullet_group_title_divider_Fill_Color.value,
          stroke: _reactTokens.chart_bullet_group_title_divider_stroke_Color.value,
          strokeWidth: _reactTokens.chart_bullet_group_title_divider_stroke_Width.value
        }
      }
    }
  }; // Bullet primary dot measure theme

  const BulletPrimaryDotMeasureTheme = exports.BulletPrimaryDotMeasureTheme = {
    group: {
      height: _reactTokens.chart_bullet_Height.value
    }
  }; // Bullet primary negative measure theme

  const BulletPrimaryNegativeMeasureTheme = exports.BulletPrimaryNegativeMeasureTheme = {
    group: {
      colorScale: [_reactTokens.chart_color_red_100.value, _reactTokens.chart_color_red_200.value, _reactTokens.chart_color_red_300.value, _reactTokens.chart_color_red_400.value, _reactTokens.chart_color_red_500.value],
      height: _reactTokens.chart_bullet_Height.value
    }
  }; // Bullet primary segmented measure theme

  const BulletPrimarySegmentedMeasureTheme = exports.BulletPrimarySegmentedMeasureTheme = {
    group: {
      height: _reactTokens.chart_bullet_Height.value
    }
  }; // Bullet qualitative range theme

  const BulletQualitativeRangeTheme = exports.BulletQualitativeRangeTheme = {
    group: {
      colorScale: [_reactTokens.chart_color_black_100.value, _reactTokens.chart_color_black_200.value, _reactTokens.chart_color_black_300.value, _reactTokens.chart_color_black_400.value, _reactTokens.chart_color_black_500.value],
      height: _reactTokens.chart_bullet_Height.value
    }
  };
});
//# sourceMappingURL=bullet-theme.js.map