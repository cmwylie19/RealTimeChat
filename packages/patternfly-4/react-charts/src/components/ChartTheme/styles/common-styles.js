"use strict";
exports.__esModule = true;
var react_tokens_1 = require("@patternfly/react-tokens");
// Typography
var TYPOGRAPHY_FONT_FAMILY = react_tokens_1.chart_global_FontFamily["var"];
var TYPOGRAPHY_LETTER_SPACING = react_tokens_1.chart_global_letter_spacing["var"];
var TYPOGRAPHY_FONT_SIZE = react_tokens_1.chart_global_FontSize_sm.value;
exports.CommonStyles = {
    label: {
        fontFamily: TYPOGRAPHY_FONT_FAMILY,
        fontSize: TYPOGRAPHY_FONT_SIZE,
        letterSpacing: TYPOGRAPHY_LETTER_SPACING,
        margin: react_tokens_1.chart_global_label_Margin.value
    },
    legend: {
        margin: react_tokens_1.chart_legend_Margin.value,
        position: react_tokens_1.chart_legend_position.value
    }
};
