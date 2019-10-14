"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DarkOrangeColorTheme = void 0;

var _reactTokens = require("@patternfly/react-tokens");

var _colorTheme = require("../color-theme");

/* eslint-disable camelcase */
// Color scale
// See https://docs.google.com/document/d/1cw10pJFXWruB1SA8TQwituxn5Ss6KpxYPCOYGrH8qAY/edit
var COLOR_SCALE = [_reactTokens.chart_color_orange_300.value, _reactTokens.chart_color_orange_100.value, _reactTokens.chart_color_orange_500.value, _reactTokens.chart_color_orange_200.value, _reactTokens.chart_color_orange_400.value];
var DarkOrangeColorTheme = (0, _colorTheme.ColorTheme)({
  COLOR_SCALE: COLOR_SCALE
});
exports.DarkOrangeColorTheme = DarkOrangeColorTheme;
//# sourceMappingURL=orange-color-theme.js.map