"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LightGreenColorTheme = void 0;

var _reactTokens = require("@patternfly/react-tokens");

var _colorTheme = require("../color-theme");

/* eslint-disable camelcase */
// Color scale
// See https://docs.google.com/document/d/1cw10pJFXWruB1SA8TQwituxn5Ss6KpxYPCOYGrH8qAY/edit
var COLOR_SCALE = [_reactTokens.chart_color_green_300.value, _reactTokens.chart_color_green_100.value, _reactTokens.chart_color_green_500.value, _reactTokens.chart_color_green_200.value, _reactTokens.chart_color_green_400.value];
var LightGreenColorTheme = (0, _colorTheme.ColorTheme)({
  COLOR_SCALE: COLOR_SCALE
});
exports.LightGreenColorTheme = LightGreenColorTheme;
//# sourceMappingURL=green-color-theme.js.map