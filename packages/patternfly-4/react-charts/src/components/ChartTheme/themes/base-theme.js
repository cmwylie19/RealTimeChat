"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
/* eslint-disable camelcase */
var react_tokens_1 = require("@patternfly/react-tokens");
// Note: Values must be in pixles
// Typography
var TYPOGRAPHY_FONT_FAMILY = react_tokens_1.chart_global_FontFamily["var"];
var TYPOGRAPHY_LETTER_SPACING = react_tokens_1.chart_global_letter_spacing["var"];
var TYPOGRAPHY_FONT_SIZE = react_tokens_1.chart_global_FontSize_sm.value;
// Labels
var LABEL_PROPS = {
    fontFamily: TYPOGRAPHY_FONT_FAMILY,
    fontSize: TYPOGRAPHY_FONT_SIZE,
    letterSpacing: TYPOGRAPHY_LETTER_SPACING,
    padding: react_tokens_1.chart_global_label_Padding.value,
    stroke: react_tokens_1.chart_global_label_stroke.value
};
var LABEL_CENTERED_PROPS = __assign(__assign({}, LABEL_PROPS), { textAnchor: react_tokens_1.chart_global_label_text_anchor.value });
// Layout
var LAYOUT_PROPS = {
    padding: react_tokens_1.chart_global_layout_Padding.value,
    height: react_tokens_1.chart_global_layout_Height.value,
    width: react_tokens_1.chart_global_layout_Width.value
};
// Strokes
var STROKE_LINE_CAP = react_tokens_1.chart_global_stroke_line_cap.value;
var STROKE_LINE_JOIN = react_tokens_1.chart_global_stroke_line_join.value;
// Victory theme properties only
exports.BaseTheme = {
    area: __assign(__assign({}, LAYOUT_PROPS), { style: {
            data: {
                fill: react_tokens_1.chart_area_data_Fill.value,
                fillOpacity: react_tokens_1.chart_area_Opacity.value,
                // Omit stroke to add a line border from color scale
                // stroke: chart_global_label_stroke.value,
                strokeWidth: react_tokens_1.chart_area_stroke_Width.value
            },
            labels: LABEL_CENTERED_PROPS
        } }),
    axis: __assign(__assign({}, LAYOUT_PROPS), { style: {
            axis: {
                fill: react_tokens_1.chart_axis_axis_Fill.value,
                strokeWidth: react_tokens_1.chart_axis_axis_stroke_Width.value,
                stroke: react_tokens_1.chart_axis_axis_stroke_Color.value,
                strokeLinecap: STROKE_LINE_CAP,
                strokeLinejoin: STROKE_LINE_JOIN
            },
            axisLabel: __assign(__assign({}, LABEL_CENTERED_PROPS), { padding: react_tokens_1.chart_axis_axis_label_Padding.value, stroke: react_tokens_1.chart_axis_axis_label_stroke_Color.value }),
            grid: {
                fill: react_tokens_1.chart_axis_grid_Fill.value,
                stroke: 'none',
                pointerEvents: react_tokens_1.chart_axis_grid_PointerEvents.value,
                strokeLinecap: STROKE_LINE_CAP,
                strokeLinejoin: STROKE_LINE_JOIN
            },
            ticks: {
                fill: react_tokens_1.chart_axis_tick_Fill.value,
                size: react_tokens_1.chart_axis_tick_Size.value,
                stroke: react_tokens_1.chart_axis_tick_stroke_Color.value,
                strokeLinecap: STROKE_LINE_CAP,
                strokeLinejoin: STROKE_LINE_JOIN,
                strokeWidth: react_tokens_1.chart_axis_tick_Width.value
            },
            tickLabels: __assign(__assign({}, LABEL_PROPS), { fill: react_tokens_1.chart_axis_tick_label_Fill.value })
        } }),
    bar: __assign(__assign({}, LAYOUT_PROPS), { barWidth: react_tokens_1.chart_bar_Width.value, style: {
            data: {
                fill: react_tokens_1.chart_bar_data_Fill.value,
                padding: react_tokens_1.chart_bar_data_Padding.value,
                stroke: react_tokens_1.chart_bar_data_stroke.value,
                strokeWidth: react_tokens_1.chart_bar_data_stroke_Width.value
            },
            labels: LABEL_PROPS
        } }),
    boxplot: __assign(__assign({}, LAYOUT_PROPS), { style: {
            max: {
                padding: react_tokens_1.chart_boxplot_max_Padding.value,
                stroke: react_tokens_1.chart_boxplot_max_stroke_Color.value,
                strokeWidth: react_tokens_1.chart_boxplot_max_stroke_Width.value
            },
            maxLabels: LABEL_PROPS,
            median: {
                padding: react_tokens_1.chart_boxplot_median_Padding.value,
                stroke: react_tokens_1.chart_boxplot_median_stroke_Color.value,
                strokeWidth: react_tokens_1.chart_boxplot_median_stroke_Width.value
            },
            medianLabels: LABEL_PROPS,
            min: {
                padding: react_tokens_1.chart_boxplot_min_Padding.value,
                stroke: react_tokens_1.chart_boxplot_min_stroke_Color.value,
                strokeWidth: react_tokens_1.chart_boxplot_min_stroke_Width.value
            },
            minLabels: LABEL_PROPS,
            q1: {
                fill: react_tokens_1.chart_boxplot_lower_quartile_Fill.value,
                padding: react_tokens_1.chart_boxplot_lower_quartile_Padding.value
            },
            q1Labels: LABEL_PROPS,
            q3: {
                fill: react_tokens_1.chart_boxplot_upper_quartile_Fill.value,
                padding: react_tokens_1.chart_boxplot_upper_quartile_Padding.value
            },
            q3Labels: LABEL_PROPS
        }, boxWidth: react_tokens_1.chart_boxplot_box_Width.value }),
    candlestick: __assign(__assign({}, LAYOUT_PROPS), { candleColors: {
            positive: react_tokens_1.chart_candelstick_candle_positive_Color.value,
            negative: react_tokens_1.chart_candelstick_candle_negative_Color.value
        }, style: {
            data: {
                stroke: react_tokens_1.chart_candelstick_data_stroke_Color.value,
                strokeWidth: react_tokens_1.chart_candelstick_data_stroke_Width.value
            },
            labels: LABEL_CENTERED_PROPS
        } }),
    chart: __assign({}, LAYOUT_PROPS),
    errorbar: __assign(__assign({}, LAYOUT_PROPS), { borderWidth: react_tokens_1.chart_errorbar_BorderWidth.value, style: {
            data: {
                fill: react_tokens_1.chart_errorbar_data_Fill.value,
                opacity: react_tokens_1.chart_errorbar_data_Opacity.value,
                stroke: react_tokens_1.chart_errorbar_data_stroke_Color.value,
                strokeWidth: react_tokens_1.chart_errorbar_data_stroke_Width.value
            },
            labels: LABEL_CENTERED_PROPS
        } }),
    group: __assign({}, LAYOUT_PROPS),
    legend: {
        gutter: react_tokens_1.chart_legend_gutter_Width.value,
        orientation: react_tokens_1.chart_legend_orientation.value,
        titleOrientation: react_tokens_1.chart_legend_title_orientation.value,
        style: {
            data: {
                type: react_tokens_1.chart_legend_data_type.value
            },
            labels: LABEL_PROPS,
            title: __assign(__assign({}, LABEL_PROPS), { fontSize: TYPOGRAPHY_FONT_SIZE, padding: react_tokens_1.chart_legend_title_Padding.value })
        }
    },
    line: __assign(__assign({}, LAYOUT_PROPS), { style: {
            data: {
                fill: react_tokens_1.chart_line_data_Fill.value,
                opacity: react_tokens_1.chart_line_data_Opacity.value,
                stroke: react_tokens_1.chart_line_data_stroke_Color.value,
                strokeWidth: react_tokens_1.chart_line_data_stroke_Width.value
            },
            labels: LABEL_CENTERED_PROPS
        } }),
    pie: {
        padding: react_tokens_1.chart_pie_Padding.value,
        style: {
            data: {
                padding: react_tokens_1.chart_pie_data_Padding.value,
                stroke: react_tokens_1.chart_pie_data_stroke_Color.value,
                strokeWidth: react_tokens_1.chart_pie_data_stroke_Width.value
            },
            labels: __assign(__assign({}, LABEL_PROPS), { padding: react_tokens_1.chart_pie_labels_Padding.value })
        },
        height: react_tokens_1.chart_pie_Height.value,
        width: react_tokens_1.chart_pie_Width.value
    },
    scatter: __assign(__assign({}, LAYOUT_PROPS), { style: {
            data: {
                fill: react_tokens_1.chart_scatter_data_Fill.value,
                opacity: react_tokens_1.chart_scatter_data_Opacity.value,
                stroke: react_tokens_1.chart_scatter_data_stroke_Color.value,
                strokeWidth: react_tokens_1.chart_scatter_data_stroke_Width.value
            },
            labels: LABEL_CENTERED_PROPS
        } }),
    stack: __assign(__assign({}, LAYOUT_PROPS), { style: {
            data: {
                strokeWidth: react_tokens_1.chart_stack_data_stroke_Width.value
            }
        } }),
    tooltip: {
        cornerRadius: react_tokens_1.chart_tooltip_corner_radius.value,
        flyoutStyle: {
            cornerRadius: react_tokens_1.chart_tooltip_flyoutStyle_corner_radius.value,
            fill: react_tokens_1.chart_tooltip_flyoutStyle_Fill.value,
            pointerEvents: react_tokens_1.chart_tooltip_flyoutStyle_PointerEvents.value,
            stroke: react_tokens_1.chart_tooltip_flyoutStyle_stroke_Color.value,
            strokeWidth: react_tokens_1.chart_tooltip_flyoutStyle_stroke_Width.value
        },
        pointerLength: react_tokens_1.chart_tooltip_pointer_length.value,
        pointerWidth: react_tokens_1.chart_tooltip_pointer_Width.value,
        style: {
            fill: react_tokens_1.chart_tooltip_Fill.value,
            padding: react_tokens_1.chart_tooltip_Padding.value,
            pointerEvents: react_tokens_1.chart_tooltip_PointerEvents.value
        }
    },
    voronoi: __assign(__assign({}, LAYOUT_PROPS), { style: {
            data: {
                fill: react_tokens_1.chart_voronoi_data_Fill.value,
                stroke: react_tokens_1.chart_voronoi_data_stroke_Color.value,
                strokeWidth: react_tokens_1.chart_voronoi_data_stroke_Width.value
            },
            labels: __assign(__assign({}, LABEL_CENTERED_PROPS), { fill: react_tokens_1.chart_voronoi_labels_Fill.value, padding: react_tokens_1.chart_voronoi_labels_Padding.value, pointerEvents: react_tokens_1.chart_voronoi_labels_PointerEvents.value }),
            // Note: These properties override tooltip
            flyout: {
                fill: react_tokens_1.chart_voronoi_flyout_stroke_Fill.value,
                pointerEvents: react_tokens_1.chart_voronoi_flyout_PointerEvents.value,
                stroke: react_tokens_1.chart_voronoi_flyout_stroke_Color.value,
                strokeWidth: react_tokens_1.chart_voronoi_flyout_stroke_Width.value
            }
        } })
};
