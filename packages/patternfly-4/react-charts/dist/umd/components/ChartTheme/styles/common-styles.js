(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@patternfly/react-tokens"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@patternfly/react-tokens"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactTokens);
    global.undefined = mod.exports;
  }
})(this, function (exports, _reactTokens) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.CommonStyles = undefined;
  // Typography
  const TYPOGRAPHY_FONT_FAMILY = _reactTokens.chart_global_FontFamily.var;
  const TYPOGRAPHY_LETTER_SPACING = _reactTokens.chart_global_letter_spacing.var;
  const TYPOGRAPHY_FONT_SIZE = _reactTokens.chart_global_FontSize_sm.value;
  const CommonStyles = exports.CommonStyles = {
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
});
//# sourceMappingURL=common-styles.js.map