(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@patternfly/react-tokens", "../color-theme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@patternfly/react-tokens"), require("../color-theme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactTokens, global.colorTheme);
    global.undefined = mod.exports;
  }
})(this, function (exports, _reactTokens, _colorTheme) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.LightMultiColorOrderedTheme = undefined;

  /* eslint-disable camelcase */
  // The color order below (minus the purple color family) improves the color contrast in ordered charts; donut, pie, bar, & stack
  // See https://docs.google.com/document/d/1cw10pJFXWruB1SA8TQwituxn5Ss6KpxYPCOYGrH8qAY/edit
  const COLOR_SCALE = [_reactTokens.chart_color_blue_300.value, _reactTokens.chart_color_green_300.value, _reactTokens.chart_color_cyan_300.value, _reactTokens.chart_color_gold_300.value, _reactTokens.chart_color_orange_300.value, _reactTokens.chart_color_blue_100.value, _reactTokens.chart_color_green_500.value, _reactTokens.chart_color_cyan_100.value, _reactTokens.chart_color_gold_100.value, _reactTokens.chart_color_orange_500.value, _reactTokens.chart_color_blue_500.value, _reactTokens.chart_color_green_100.value, _reactTokens.chart_color_cyan_500.value, _reactTokens.chart_color_gold_500.value, _reactTokens.chart_color_orange_100.value, _reactTokens.chart_color_blue_200.value, _reactTokens.chart_color_green_400.value, _reactTokens.chart_color_cyan_200.value, _reactTokens.chart_color_gold_200.value, _reactTokens.chart_color_orange_400.value, _reactTokens.chart_color_blue_400.value, _reactTokens.chart_color_green_200.value, _reactTokens.chart_color_cyan_400.value, _reactTokens.chart_color_gold_400.value, _reactTokens.chart_color_orange_200.value];
  const LightMultiColorOrderedTheme = exports.LightMultiColorOrderedTheme = (0, _colorTheme.ColorTheme)({
    COLOR_SCALE
  });
});
//# sourceMappingURL=multi-color-ordered-theme.js.map