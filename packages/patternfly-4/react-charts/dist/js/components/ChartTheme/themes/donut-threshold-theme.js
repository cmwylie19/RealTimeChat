"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DonutThresholdStaticTheme = exports.DonutThresholdDynamicTheme = void 0;

var _reactTokens = require("@patternfly/react-tokens");

/* eslint-disable camelcase */
// Donut threshold dynamic theme
var DonutThresholdDynamicTheme = {
  legend: {
    colorScale: [_reactTokens.chart_donut_threshold_second_Color.value, _reactTokens.chart_donut_threshold_third_Color.value]
  },
  pie: {
    height: _reactTokens.chart_donut_threshold_dynamic_pie_Height.value,
    padding: _reactTokens.chart_donut_threshold_dynamic_pie_Padding.value,
    width: _reactTokens.chart_donut_threshold_dynamic_pie_Width.value
  }
}; // Donut threshold static theme

exports.DonutThresholdDynamicTheme = DonutThresholdDynamicTheme;
var DonutThresholdStaticTheme = {
  pie: {
    colorScale: [_reactTokens.chart_donut_threshold_first_Color.value, _reactTokens.chart_donut_threshold_second_Color.value, _reactTokens.chart_donut_threshold_third_Color.value],
    height: _reactTokens.chart_donut_threshold_static_pie_Height.value,
    padAngle: _reactTokens.chart_donut_threshold_static_pie_angle_Padding.value,
    padding: _reactTokens.chart_donut_threshold_static_pie_Padding.value,
    width: _reactTokens.chart_donut_threshold_static_pie_Width.value
  }
};
exports.DonutThresholdStaticTheme = DonutThresholdStaticTheme;
//# sourceMappingURL=donut-threshold-theme.js.map