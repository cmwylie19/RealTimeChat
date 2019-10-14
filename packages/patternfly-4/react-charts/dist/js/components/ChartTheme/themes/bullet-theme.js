"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BulletQualitativeRangeTheme = exports.BulletPrimarySegmentedMeasureTheme = exports.BulletPrimaryNegativeMeasureTheme = exports.BulletPrimaryDotMeasureTheme = exports.BulletGroupTitleTheme = exports.BulletComparativeWarningMeasureTheme = exports.BulletComparativeMeasureTheme = exports.BulletComparativeErrorMeasureTheme = exports.BulletTheme = void 0;

var _reactTokens = require("@patternfly/react-tokens");

/* eslint-disable camelcase */
// See https://docs.google.com/document/d/1cw10pJFXWruB1SA8TQwituxn5Ss6KpxYPCOYGrH8qAY/edit#
// See https://www.patternfly.org/v3/pattern-library/data-visualization/bullet-chart/#design
// Bullet theme
var BulletTheme = {
  chart: {
    height: _reactTokens.chart_bullet_Height.value
  }
}; // Bullet comparative measure error theme

exports.BulletTheme = BulletTheme;
var BulletComparativeErrorMeasureTheme = {
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

exports.BulletComparativeErrorMeasureTheme = BulletComparativeErrorMeasureTheme;
var BulletComparativeMeasureTheme = {
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

exports.BulletComparativeMeasureTheme = BulletComparativeMeasureTheme;
var BulletComparativeWarningMeasureTheme = {
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

exports.BulletComparativeWarningMeasureTheme = BulletComparativeWarningMeasureTheme;
var BulletGroupTitleTheme = {
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

exports.BulletGroupTitleTheme = BulletGroupTitleTheme;
var BulletPrimaryDotMeasureTheme = {
  group: {
    height: _reactTokens.chart_bullet_Height.value
  }
}; // Bullet primary negative measure theme

exports.BulletPrimaryDotMeasureTheme = BulletPrimaryDotMeasureTheme;
var BulletPrimaryNegativeMeasureTheme = {
  group: {
    colorScale: [_reactTokens.chart_color_red_100.value, _reactTokens.chart_color_red_200.value, _reactTokens.chart_color_red_300.value, _reactTokens.chart_color_red_400.value, _reactTokens.chart_color_red_500.value],
    height: _reactTokens.chart_bullet_Height.value
  }
}; // Bullet primary segmented measure theme

exports.BulletPrimaryNegativeMeasureTheme = BulletPrimaryNegativeMeasureTheme;
var BulletPrimarySegmentedMeasureTheme = {
  group: {
    height: _reactTokens.chart_bullet_Height.value
  }
}; // Bullet qualitative range theme

exports.BulletPrimarySegmentedMeasureTheme = BulletPrimarySegmentedMeasureTheme;
var BulletQualitativeRangeTheme = {
  group: {
    colorScale: [_reactTokens.chart_color_black_100.value, _reactTokens.chart_color_black_200.value, _reactTokens.chart_color_black_300.value, _reactTokens.chart_color_black_400.value, _reactTokens.chart_color_black_500.value],
    height: _reactTokens.chart_bullet_Height.value
  }
};
exports.BulletQualitativeRangeTheme = BulletQualitativeRangeTheme;
//# sourceMappingURL=bullet-theme.js.map