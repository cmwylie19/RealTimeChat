"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LightGrayColorTheme = void 0;

var _reactTokens = require("@patternfly/react-tokens");

var _colorTheme = require("../color-theme");

/* eslint-disable camelcase */
// Color scale
// See https://docs.google.com/document/d/1cw10pJFXWruB1SA8TQwituxn5Ss6KpxYPCOYGrH8qAY/edit
var COLOR_SCALE = [_reactTokens.chart_color_black_300.value, _reactTokens.chart_color_black_100.value, _reactTokens.chart_color_black_500.value, _reactTokens.chart_color_black_200.value, _reactTokens.chart_color_black_400.value];
var LightGrayColorTheme = (0, _colorTheme.ColorTheme)({
  COLOR_SCALE: COLOR_SCALE
});
exports.LightGrayColorTheme = LightGrayColorTheme;
//# sourceMappingURL=gray-color-theme.js.map