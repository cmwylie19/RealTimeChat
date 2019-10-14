"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DonutUtilizationStaticTheme = exports.DonutUtilizationDynamicTheme = void 0;

var _reactTokens = require("@patternfly/react-tokens");

/* eslint-disable camelcase */
// Donut utilization dynamic theme
var DonutUtilizationDynamicTheme = {
  pie: {
    height: _reactTokens.chart_donut_utilization_dynamic_pie_Height.value,
    padding: _reactTokens.chart_donut_utilization_dynamic_pie_Padding.value,
    padAngle: _reactTokens.chart_donut_utilization_dynamic_pie_angle_Padding.value,
    width: _reactTokens.chart_donut_utilization_dynamic_pie_Width.value
  }
}; // Donut utilization static theme

exports.DonutUtilizationDynamicTheme = DonutUtilizationDynamicTheme;
var DonutUtilizationStaticTheme = {
  legend: {
    colorScale: [_reactTokens.chart_donut_threshold_first_Color.value, _reactTokens.chart_donut_threshold_second_Color.value, _reactTokens.chart_donut_threshold_third_Color.value]
  },
  pie: {
    colorScale: [_reactTokens.chart_donut_threshold_first_Color.value],
    padding: _reactTokens.chart_donut_utilization_static_pie_Padding.value
  }
};
exports.DonutUtilizationStaticTheme = DonutUtilizationStaticTheme;
//# sourceMappingURL=donut-utilization-theme.js.map