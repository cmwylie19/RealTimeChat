"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DarkMultiColorUnorderedTheme = void 0;

var _reactTokens = require("@patternfly/react-tokens");

var _colorTheme = require("../color-theme");

/* eslint-disable camelcase */
// The color order below improves the color contrast in unordered charts; area & line
// See https://github.com/patternfly/patternfly-next/issues/1551
var COLOR_SCALE = [_reactTokens.chart_color_blue_300.value, _reactTokens.chart_color_gold_300.value, _reactTokens.chart_color_green_300.value, _reactTokens.chart_color_purple_300.value, _reactTokens.chart_color_orange_300.value, _reactTokens.chart_color_cyan_300.value, _reactTokens.chart_color_black_300.value, _reactTokens.chart_color_blue_100.value, _reactTokens.chart_color_gold_500.value, _reactTokens.chart_color_green_100.value, _reactTokens.chart_color_purple_500.value, _reactTokens.chart_color_orange_100.value, _reactTokens.chart_color_cyan_500.value, _reactTokens.chart_color_black_100.value, _reactTokens.chart_color_blue_500.value, _reactTokens.chart_color_gold_100.value, _reactTokens.chart_color_green_500.value, _reactTokens.chart_color_purple_100.value, _reactTokens.chart_color_orange_500.value, _reactTokens.chart_color_cyan_100.value, _reactTokens.chart_color_black_500.value, _reactTokens.chart_color_blue_200.value, _reactTokens.chart_color_gold_400.value, _reactTokens.chart_color_green_200.value, _reactTokens.chart_color_purple_400.value, _reactTokens.chart_color_orange_200.value, _reactTokens.chart_color_cyan_400.value, _reactTokens.chart_color_black_200.value, _reactTokens.chart_color_blue_400.value, _reactTokens.chart_color_gold_200.value, _reactTokens.chart_color_green_400.value, _reactTokens.chart_color_purple_200.value, _reactTokens.chart_color_orange_400.value, _reactTokens.chart_color_cyan_200.value, _reactTokens.chart_color_black_400.value];
var DarkMultiColorUnorderedTheme = (0, _colorTheme.ColorTheme)({
  COLOR_SCALE: COLOR_SCALE
});
exports.DarkMultiColorUnorderedTheme = DarkMultiColorUnorderedTheme;
//# sourceMappingURL=multi-color-unordered-theme.js.map