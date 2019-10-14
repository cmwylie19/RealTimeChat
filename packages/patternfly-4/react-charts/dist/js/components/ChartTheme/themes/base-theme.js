"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseTheme = void 0;

var _reactTokens = require("@patternfly/react-tokens");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Note: Values must be in pixles
// Typography
var TYPOGRAPHY_FONT_FAMILY = _reactTokens.chart_global_FontFamily["var"];
var TYPOGRAPHY_LETTER_SPACING = _reactTokens.chart_global_letter_spacing["var"];
var TYPOGRAPHY_FONT_SIZE = _reactTokens.chart_global_FontSize_sm.value; // Labels

var LABEL_PROPS = {
  fontFamily: TYPOGRAPHY_FONT_FAMILY,
  fontSize: TYPOGRAPHY_FONT_SIZE,
  letterSpacing: TYPOGRAPHY_LETTER_SPACING,
  padding: _reactTokens.chart_global_label_Padding.value,
  stroke: _reactTokens.chart_global_label_stroke.value
};

var LABEL_CENTERED_PROPS = _objectSpread({}, LABEL_PROPS, {
  textAnchor: _reactTokens.chart_global_label_text_anchor.value
}); // Layout


var LAYOUT_PROPS = {
  padding: _reactTokens.chart_global_layout_Padding.value,
  height: _reactTokens.chart_global_layout_Height.value,
  width: _reactTokens.chart_global_layout_Width.value
}; // Strokes

var STROKE_LINE_CAP = _reactTokens.chart_global_stroke_line_cap.value;
var STROKE_LINE_JOIN = _reactTokens.chart_global_stroke_line_join.value; // Victory theme properties only

var BaseTheme = {
  area: _objectSpread({}, LAYOUT_PROPS, {
    style: {
      data: {
        fill: _reactTokens.chart_area_data_Fill.value,
        fillOpacity: _reactTokens.chart_area_Opacity.value,
        // Omit stroke to add a line border from color scale
        // stroke: chart_global_label_stroke.value,
        strokeWidth: _reactTokens.chart_area_stroke_Width.value
      },
      labels: LABEL_CENTERED_PROPS
    }
  }),
  axis: _objectSpread({}, LAYOUT_PROPS, {
    style: {
      axis: {
        fill: _reactTokens.chart_axis_axis_Fill.value,
        strokeWidth: _reactTokens.chart_axis_axis_stroke_Width.value,
        stroke: _reactTokens.chart_axis_axis_stroke_Color.value,
        strokeLinecap: STROKE_LINE_CAP,
        strokeLinejoin: STROKE_LINE_JOIN
      },
      axisLabel: _objectSpread({}, LABEL_CENTERED_PROPS, {
        padding: _reactTokens.chart_axis_axis_label_Padding.value,
        stroke: _reactTokens.chart_axis_axis_label_stroke_Color.value
      }),
      grid: {
        fill: _reactTokens.chart_axis_grid_Fill.value,
        stroke: 'none',
        pointerEvents: _reactTokens.chart_axis_grid_PointerEvents.value,
        strokeLinecap: STROKE_LINE_CAP,
        strokeLinejoin: STROKE_LINE_JOIN
      },
      ticks: {
        fill: _reactTokens.chart_axis_tick_Fill.value,
        size: _reactTokens.chart_axis_tick_Size.value,
        stroke: _reactTokens.chart_axis_tick_stroke_Color.value,
        strokeLinecap: STROKE_LINE_CAP,
        strokeLinejoin: STROKE_LINE_JOIN,
        strokeWidth: _reactTokens.chart_axis_tick_Width.value
      },
      tickLabels: _objectSpread({}, LABEL_PROPS, {
        fill: _reactTokens.chart_axis_tick_label_Fill.value
      })
    }
  }),
  bar: _objectSpread({}, LAYOUT_PROPS, {
    barWidth: _reactTokens.chart_bar_Width.value,
    style: {
      data: {
        fill: _reactTokens.chart_bar_data_Fill.value,
        padding: _reactTokens.chart_bar_data_Padding.value,
        stroke: _reactTokens.chart_bar_data_stroke.value,
        strokeWidth: _reactTokens.chart_bar_data_stroke_Width.value
      },
      labels: LABEL_PROPS
    }
  }),
  boxplot: _objectSpread({}, LAYOUT_PROPS, {
    style: {
      max: {
        padding: _reactTokens.chart_boxplot_max_Padding.value,
        stroke: _reactTokens.chart_boxplot_max_stroke_Color.value,
        strokeWidth: _reactTokens.chart_boxplot_max_stroke_Width.value
      },
      maxLabels: LABEL_PROPS,
      median: {
        padding: _reactTokens.chart_boxplot_median_Padding.value,
        stroke: _reactTokens.chart_boxplot_median_stroke_Color.value,
        strokeWidth: _reactTokens.chart_boxplot_median_stroke_Width.value
      },
      medianLabels: LABEL_PROPS,
      min: {
        padding: _reactTokens.chart_boxplot_min_Padding.value,
        stroke: _reactTokens.chart_boxplot_min_stroke_Color.value,
        strokeWidth: _reactTokens.chart_boxplot_min_stroke_Width.value
      },
      minLabels: LABEL_PROPS,
      q1: {
        fill: _reactTokens.chart_boxplot_lower_quartile_Fill.value,
        padding: _reactTokens.chart_boxplot_lower_quartile_Padding.value
      },
      q1Labels: LABEL_PROPS,
      q3: {
        fill: _reactTokens.chart_boxplot_upper_quartile_Fill.value,
        padding: _reactTokens.chart_boxplot_upper_quartile_Padding.value
      },
      q3Labels: LABEL_PROPS
    },
    boxWidth: _reactTokens.chart_boxplot_box_Width.value
  }),
  candlestick: _objectSpread({}, LAYOUT_PROPS, {
    candleColors: {
      positive: _reactTokens.chart_candelstick_candle_positive_Color.value,
      negative: _reactTokens.chart_candelstick_candle_negative_Color.value
    },
    style: {
      data: {
        stroke: _reactTokens.chart_candelstick_data_stroke_Color.value,
        strokeWidth: _reactTokens.chart_candelstick_data_stroke_Width.value
      },
      labels: LABEL_CENTERED_PROPS
    }
  }),
  chart: _objectSpread({}, LAYOUT_PROPS),
  errorbar: _objectSpread({}, LAYOUT_PROPS, {
    borderWidth: _reactTokens.chart_errorbar_BorderWidth.value,
    style: {
      data: {
        fill: _reactTokens.chart_errorbar_data_Fill.value,
        opacity: _reactTokens.chart_errorbar_data_Opacity.value,
        stroke: _reactTokens.chart_errorbar_data_stroke_Color.value,
        strokeWidth: _reactTokens.chart_errorbar_data_stroke_Width.value
      },
      labels: LABEL_CENTERED_PROPS
    }
  }),
  group: _objectSpread({}, LAYOUT_PROPS),
  legend: {
    gutter: _reactTokens.chart_legend_gutter_Width.value,
    orientation: _reactTokens.chart_legend_orientation.value,
    titleOrientation: _reactTokens.chart_legend_title_orientation.value,
    style: {
      data: {
        type: _reactTokens.chart_legend_data_type.value
      },
      labels: LABEL_PROPS,
      title: _objectSpread({}, LABEL_PROPS, {
        fontSize: TYPOGRAPHY_FONT_SIZE,
        padding: _reactTokens.chart_legend_title_Padding.value
      })
    }
  },
  line: _objectSpread({}, LAYOUT_PROPS, {
    style: {
      data: {
        fill: _reactTokens.chart_line_data_Fill.value,
        opacity: _reactTokens.chart_line_data_Opacity.value,
        stroke: _reactTokens.chart_line_data_stroke_Color.value,
        strokeWidth: _reactTokens.chart_line_data_stroke_Width.value
      },
      labels: LABEL_CENTERED_PROPS
    }
  }),
  pie: {
    padding: _reactTokens.chart_pie_Padding.value,
    style: {
      data: {
        padding: _reactTokens.chart_pie_data_Padding.value,
        stroke: _reactTokens.chart_pie_data_stroke_Color.value,
        strokeWidth: _reactTokens.chart_pie_data_stroke_Width.value
      },
      labels: _objectSpread({}, LABEL_PROPS, {
        padding: _reactTokens.chart_pie_labels_Padding.value
      })
    },
    height: _reactTokens.chart_pie_Height.value,
    width: _reactTokens.chart_pie_Width.value
  },
  scatter: _objectSpread({}, LAYOUT_PROPS, {
    style: {
      data: {
        fill: _reactTokens.chart_scatter_data_Fill.value,
        opacity: _reactTokens.chart_scatter_data_Opacity.value,
        stroke: _reactTokens.chart_scatter_data_stroke_Color.value,
        strokeWidth: _reactTokens.chart_scatter_data_stroke_Width.value
      },
      labels: LABEL_CENTERED_PROPS
    }
  }),
  stack: _objectSpread({}, LAYOUT_PROPS, {
    style: {
      data: {
        strokeWidth: _reactTokens.chart_stack_data_stroke_Width.value
      }
    }
  }),
  tooltip: {
    cornerRadius: _reactTokens.chart_tooltip_corner_radius.value,
    flyoutStyle: {
      cornerRadius: _reactTokens.chart_tooltip_flyoutStyle_corner_radius.value,
      fill: _reactTokens.chart_tooltip_flyoutStyle_Fill.value,
      // background
      pointerEvents: _reactTokens.chart_tooltip_flyoutStyle_PointerEvents.value,
      stroke: _reactTokens.chart_tooltip_flyoutStyle_stroke_Color.value,
      // border
      strokeWidth: _reactTokens.chart_tooltip_flyoutStyle_stroke_Width.value
    },
    pointerLength: _reactTokens.chart_tooltip_pointer_length.value,
    pointerWidth: _reactTokens.chart_tooltip_pointer_Width.value,
    style: {
      fill: _reactTokens.chart_tooltip_Fill.value,
      // text
      padding: _reactTokens.chart_tooltip_Padding.value,
      pointerEvents: _reactTokens.chart_tooltip_PointerEvents.value
    }
  },
  voronoi: _objectSpread({}, LAYOUT_PROPS, {
    style: {
      data: {
        fill: _reactTokens.chart_voronoi_data_Fill.value,
        stroke: _reactTokens.chart_voronoi_data_stroke_Color.value,
        strokeWidth: _reactTokens.chart_voronoi_data_stroke_Width.value
      },
      labels: _objectSpread({}, LABEL_CENTERED_PROPS, {
        fill: _reactTokens.chart_voronoi_labels_Fill.value,
        // text
        padding: _reactTokens.chart_voronoi_labels_Padding.value,
        pointerEvents: _reactTokens.chart_voronoi_labels_PointerEvents.value
      }),
      // Note: These properties override tooltip
      flyout: {
        fill: _reactTokens.chart_voronoi_flyout_stroke_Fill.value,
        // background
        pointerEvents: _reactTokens.chart_voronoi_flyout_PointerEvents.value,
        stroke: _reactTokens.chart_voronoi_flyout_stroke_Color.value,
        // border
        strokeWidth: _reactTokens.chart_voronoi_flyout_stroke_Width.value
      }
    }
  })
};
exports.BaseTheme = BaseTheme;
//# sourceMappingURL=base-theme.js.map