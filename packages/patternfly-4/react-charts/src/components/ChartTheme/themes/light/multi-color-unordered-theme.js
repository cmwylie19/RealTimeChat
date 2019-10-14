"use strict";
exports.__esModule = true;
/* eslint-disable camelcase */
var react_tokens_1 = require("@patternfly/react-tokens");
var color_theme_1 = require("../color-theme");
// The color order below improves the color contrast in unordered charts; area & line
// See https://github.com/patternfly/patternfly-next/issues/1551
var COLOR_SCALE = [
    react_tokens_1.chart_color_blue_300.value,
    react_tokens_1.chart_color_gold_300.value,
    react_tokens_1.chart_color_green_300.value,
    react_tokens_1.chart_color_purple_300.value,
    react_tokens_1.chart_color_orange_300.value,
    react_tokens_1.chart_color_cyan_300.value,
    react_tokens_1.chart_color_black_300.value,
    react_tokens_1.chart_color_blue_100.value,
    react_tokens_1.chart_color_gold_500.value,
    react_tokens_1.chart_color_green_100.value,
    react_tokens_1.chart_color_purple_500.value,
    react_tokens_1.chart_color_orange_100.value,
    react_tokens_1.chart_color_cyan_500.value,
    react_tokens_1.chart_color_black_100.value,
    react_tokens_1.chart_color_blue_500.value,
    react_tokens_1.chart_color_gold_100.value,
    react_tokens_1.chart_color_green_500.value,
    react_tokens_1.chart_color_purple_100.value,
    react_tokens_1.chart_color_orange_500.value,
    react_tokens_1.chart_color_cyan_100.value,
    react_tokens_1.chart_color_black_500.value,
    react_tokens_1.chart_color_blue_200.value,
    react_tokens_1.chart_color_gold_400.value,
    react_tokens_1.chart_color_green_200.value,
    react_tokens_1.chart_color_purple_400.value,
    react_tokens_1.chart_color_orange_200.value,
    react_tokens_1.chart_color_cyan_400.value,
    react_tokens_1.chart_color_black_200.value,
    react_tokens_1.chart_color_blue_400.value,
    react_tokens_1.chart_color_gold_200.value,
    react_tokens_1.chart_color_green_400.value,
    react_tokens_1.chart_color_purple_200.value,
    react_tokens_1.chart_color_orange_400.value,
    react_tokens_1.chart_color_cyan_200.value,
    react_tokens_1.chart_color_black_400.value
];
exports.LightMultiColorUnorderedTheme = color_theme_1.ColorTheme({
    COLOR_SCALE: COLOR_SCALE
});
