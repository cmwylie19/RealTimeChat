"use strict";
exports.__esModule = true;
/* eslint-disable camelcase */
var react_tokens_1 = require("@patternfly/react-tokens");
// Donut threshold dynamic theme
exports.DonutThresholdDynamicTheme = {
    legend: {
        colorScale: [
            react_tokens_1.chart_donut_threshold_second_Color.value,
            react_tokens_1.chart_donut_threshold_third_Color.value
        ]
    },
    pie: {
        height: react_tokens_1.chart_donut_threshold_dynamic_pie_Height.value,
        padding: react_tokens_1.chart_donut_threshold_dynamic_pie_Padding.value,
        width: react_tokens_1.chart_donut_threshold_dynamic_pie_Width.value
    }
};
// Donut threshold static theme
exports.DonutThresholdStaticTheme = {
    pie: {
        colorScale: [
            react_tokens_1.chart_donut_threshold_first_Color.value,
            react_tokens_1.chart_donut_threshold_second_Color.value,
            react_tokens_1.chart_donut_threshold_third_Color.value
        ],
        height: react_tokens_1.chart_donut_threshold_static_pie_Height.value,
        padAngle: react_tokens_1.chart_donut_threshold_static_pie_angle_Padding.value,
        padding: react_tokens_1.chart_donut_threshold_static_pie_Padding.value,
        width: react_tokens_1.chart_donut_threshold_static_pie_Width.value
    }
};
