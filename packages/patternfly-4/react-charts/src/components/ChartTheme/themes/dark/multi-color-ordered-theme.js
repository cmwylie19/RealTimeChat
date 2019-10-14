"use strict";
exports.__esModule = true;
/* eslint-disable camelcase */
var react_tokens_1 = require("@patternfly/react-tokens");
var color_theme_1 = require("../color-theme");
// The color order below (minus the purple color family) improves the color contrast in ordered charts; donut, pie, bar, & stack
// See https://docs.google.com/document/d/1cw10pJFXWruB1SA8TQwituxn5Ss6KpxYPCOYGrH8qAY/edit
var COLOR_SCALE = [
    react_tokens_1.chart_color_blue_300.value,
    react_tokens_1.chart_color_green_300.value,
    react_tokens_1.chart_color_cyan_300.value,
    react_tokens_1.chart_color_gold_300.value,
    react_tokens_1.chart_color_orange_300.value,
    react_tokens_1.chart_color_blue_100.value,
    react_tokens_1.chart_color_green_500.value,
    react_tokens_1.chart_color_cyan_100.value,
    react_tokens_1.chart_color_gold_100.value,
    react_tokens_1.chart_color_orange_500.value,
    react_tokens_1.chart_color_blue_500.value,
    react_tokens_1.chart_color_green_100.value,
    react_tokens_1.chart_color_cyan_500.value,
    react_tokens_1.chart_color_gold_500.value,
    react_tokens_1.chart_color_orange_100.value,
    react_tokens_1.chart_color_blue_200.value,
    react_tokens_1.chart_color_green_400.value,
    react_tokens_1.chart_color_cyan_200.value,
    react_tokens_1.chart_color_gold_200.value,
    react_tokens_1.chart_color_orange_400.value,
    react_tokens_1.chart_color_blue_400.value,
    react_tokens_1.chart_color_green_200.value,
    react_tokens_1.chart_color_cyan_400.value,
    react_tokens_1.chart_color_gold_400.value,
    react_tokens_1.chart_color_orange_200.value
];
exports.DarkMultiColorOrderedTheme = color_theme_1.ColorTheme({
    COLOR_SCALE: COLOR_SCALE
});
