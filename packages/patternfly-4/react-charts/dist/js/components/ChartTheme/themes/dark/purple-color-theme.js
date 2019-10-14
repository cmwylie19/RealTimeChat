"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DarkPurpleColorTheme = void 0;

var _reactTokens = require("@patternfly/react-tokens");

var _colorTheme = require("../color-theme");

/* eslint-disable camelcase */
// Color scale
// See https://docs.google.com/document/d/1cw10pJFXWruB1SA8TQwituxn5Ss6KpxYPCOYGrH8qAY/edit
var COLOR_SCALE = [_reactTokens.chart_color_purple_300.value, _reactTokens.chart_color_purple_100.value, _reactTokens.chart_color_purple_500.value, _reactTokens.chart_color_purple_200.value, _reactTokens.chart_color_purple_400.value];
var DarkPurpleColorTheme = (0, _colorTheme.ColorTheme)({
  COLOR_SCALE: COLOR_SCALE
});
exports.DarkPurpleColorTheme = DarkPurpleColorTheme;
//# sourceMappingURL=purple-color-theme.js.map