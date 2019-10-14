"use strict";
exports.__esModule = true;
/* eslint-disable camelcase */
var react_tokens_1 = require("@patternfly/react-tokens");
// Donut utilization dynamic theme
exports.DonutUtilizationDynamicTheme = {
    pie: {
        height: react_tokens_1.chart_donut_utilization_dynamic_pie_Height.value,
        padding: react_tokens_1.chart_donut_utilization_dynamic_pie_Padding.value,
        padAngle: react_tokens_1.chart_donut_utilization_dynamic_pie_angle_Padding.value,
        width: react_tokens_1.chart_donut_utilization_dynamic_pie_Width.value
    }
};
// Donut utilization static theme
exports.DonutUtilizationStaticTheme = {
    legend: {
        colorScale: [
            react_tokens_1.chart_donut_threshold_first_Color.value,
            react_tokens_1.chart_donut_threshold_second_Color.value,
            react_tokens_1.chart_donut_threshold_third_Color.value
        ]
    },
    pie: {
        colorScale: [
            react_tokens_1.chart_donut_threshold_first_Color.value
        ],
        padding: react_tokens_1.chart_donut_utilization_static_pie_Padding.value
    }
};
