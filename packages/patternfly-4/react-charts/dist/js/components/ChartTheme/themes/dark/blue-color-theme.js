"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DarkBlueColorTheme = void 0;

var _reactTokens = require("@patternfly/react-tokens");

var _colorTheme = require("../color-theme");

/* eslint-disable camelcase */
// Color scale
// See https://docs.google.com/document/d/1cw10pJFXWruB1SA8TQwituxn5Ss6KpxYPCOYGrH8qAY/edit
var COLOR_SCALE = [_reactTokens.chart_color_blue_300.value, _reactTokens.chart_color_blue_100.value, _reactTokens.chart_color_blue_500.value, _reactTokens.chart_color_blue_200.value, _reactTokens.chart_color_blue_400.value];
var DarkBlueColorTheme = (0, _colorTheme.ColorTheme)({
  COLOR_SCALE: COLOR_SCALE
});
exports.DarkBlueColorTheme = DarkBlueColorTheme;
//# sourceMappingURL=blue-color-theme.js.map