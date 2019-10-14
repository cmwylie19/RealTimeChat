"use strict";
exports.__esModule = true;
/* eslint-disable camelcase */
var react_tokens_1 = require("@patternfly/react-tokens");
// See https://docs.google.com/document/d/1cw10pJFXWruB1SA8TQwituxn5Ss6KpxYPCOYGrH8qAY/edit#
// See https://www.patternfly.org/v3/pattern-library/data-visualization/bullet-chart/#design
// Bullet theme
exports.BulletTheme = {
    chart: {
        height: react_tokens_1.chart_bullet_Height.value
    }
};
// Bullet comparative measure error theme
exports.BulletComparativeErrorMeasureTheme = {
    bar: {
        height: react_tokens_1.chart_bullet_Height.value,
        style: {
            data: {
                fill: react_tokens_1.chart_bullet_comparative_measure_error_Fill_Color.value,
                stroke: react_tokens_1.chart_bullet_comparative_measure_error_stroke_Color.value,
                strokeWidth: react_tokens_1.chart_bullet_comparative_measure_error_stroke_Width.value
            }
        }
    }
};
// Bullet comparative measure theme
exports.BulletComparativeMeasureTheme = {
    bar: {
        height: react_tokens_1.chart_bullet_Height.value,
        style: {
            data: {
                fill: react_tokens_1.chart_bullet_comparative_measure_Fill_Color.value,
                stroke: react_tokens_1.chart_bullet_comparative_measure_stroke_Color.value,
                strokeWidth: react_tokens_1.chart_bullet_comparative_measure_stroke_Width.value
            }
        }
    }
};
// Bullet comparative measure warning theme
exports.BulletComparativeWarningMeasureTheme = {
    bar: {
        height: react_tokens_1.chart_bullet_Height.value,
        style: {
            data: {
                fill: react_tokens_1.chart_bullet_comparative_measure_warning_Fill_Color.value,
                stroke: react_tokens_1.chart_bullet_comparative_measure_warning_stroke_Color.value,
                strokeWidth: react_tokens_1.chart_bullet_comparative_measure_warning_stroke_Width.value
            }
        }
    }
};
// Bullet group title theme
exports.BulletGroupTitleTheme = {
    chart: {
        padding: {
            bottom: 0,
            left: 0,
            right: 0,
            top: react_tokens_1.chart_global_layout_Padding.value
        }
    },
    line: {
        style: {
            data: {
                fill: react_tokens_1.chart_bullet_group_title_divider_Fill_Color.value,
                stroke: react_tokens_1.chart_bullet_group_title_divider_stroke_Color.value,
                strokeWidth: react_tokens_1.chart_bullet_group_title_divider_stroke_Width.value
            }
        }
    }
};
// Bullet primary dot measure theme
exports.BulletPrimaryDotMeasureTheme = {
    group: {
        height: react_tokens_1.chart_bullet_Height.value
    }
};
// Bullet primary negative measure theme
exports.BulletPrimaryNegativeMeasureTheme = {
    group: {
        colorScale: [
            react_tokens_1.chart_color_red_100.value,
            react_tokens_1.chart_color_red_200.value,
            react_tokens_1.chart_color_red_300.value,
            react_tokens_1.chart_color_red_400.value,
            react_tokens_1.chart_color_red_500.value
        ],
        height: react_tokens_1.chart_bullet_Height.value
    }
};
// Bullet primary segmented measure theme
exports.BulletPrimarySegmentedMeasureTheme = {
    group: {
        height: react_tokens_1.chart_bullet_Height.value
    }
};
// Bullet qualitative range theme
exports.BulletQualitativeRangeTheme = {
    group: {
        colorScale: [
            react_tokens_1.chart_color_black_100.value,
            react_tokens_1.chart_color_black_200.value,
            react_tokens_1.chart_color_black_300.value,
            react_tokens_1.chart_color_black_400.value,
            react_tokens_1.chart_color_black_500.value
        ],
        height: react_tokens_1.chart_bullet_Height.value
    }
};
