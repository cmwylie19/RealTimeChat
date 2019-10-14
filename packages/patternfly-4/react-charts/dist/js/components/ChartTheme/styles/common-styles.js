"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommonStyles = void 0;

var _reactTokens = require("@patternfly/react-tokens");

// Typography
var TYPOGRAPHY_FONT_FAMILY = _reactTokens.chart_global_FontFamily["var"];
var TYPOGRAPHY_LETTER_SPACING = _reactTokens.chart_global_letter_spacing["var"];
var TYPOGRAPHY_FONT_SIZE = _reactTokens.chart_global_FontSize_sm.value;
var CommonStyles = {
  label: {
    fontFamily: TYPOGRAPHY_FONT_FAMILY,
    fontSize: TYPOGRAPHY_FONT_SIZE,
    letterSpacing: TYPOGRAPHY_LETTER_SPACING,
    margin: _reactTokens.chart_global_label_Margin.value
  },
  legend: {
    margin: _reactTokens.chart_legend_Margin.value,
    position: _reactTokens.chart_legend_position.value
  }
};
exports.CommonStyles = CommonStyles;
//# sourceMappingURL=common-styles.js.map