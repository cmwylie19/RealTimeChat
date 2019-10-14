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
  exports.DarkMultiColorUnorderedTheme = undefined;

  /* eslint-disable camelcase */
  // The color order below improves the color contrast in unordered charts; area & line
  // See https://github.com/patternfly/patternfly-next/issues/1551
  const COLOR_SCALE = [_reactTokens.chart_color_blue_300.value, _reactTokens.chart_color_gold_300.value, _reactTokens.chart_color_green_300.value, _reactTokens.chart_color_purple_300.value, _reactTokens.chart_color_orange_300.value, _reactTokens.chart_color_cyan_300.value, _reactTokens.chart_color_black_300.value, _reactTokens.chart_color_blue_100.value, _reactTokens.chart_color_gold_500.value, _reactTokens.chart_color_green_100.value, _reactTokens.chart_color_purple_500.value, _reactTokens.chart_color_orange_100.value, _reactTokens.chart_color_cyan_500.value, _reactTokens.chart_color_black_100.value, _reactTokens.chart_color_blue_500.value, _reactTokens.chart_color_gold_100.value, _reactTokens.chart_color_green_500.value, _reactTokens.chart_color_purple_100.value, _reactTokens.chart_color_orange_500.value, _reactTokens.chart_color_cyan_100.value, _reactTokens.chart_color_black_500.value, _reactTokens.chart_color_blue_200.value, _reactTokens.chart_color_gold_400.value, _reactTokens.chart_color_green_200.value, _reactTokens.chart_color_purple_400.value, _reactTokens.chart_color_orange_200.value, _reactTokens.chart_color_cyan_400.value, _reactTokens.chart_color_black_200.value, _reactTokens.chart_color_blue_400.value, _reactTokens.chart_color_gold_200.value, _reactTokens.chart_color_green_400.value, _reactTokens.chart_color_purple_200.value, _reactTokens.chart_color_orange_400.value, _reactTokens.chart_color_cyan_200.value, _reactTokens.chart_color_black_400.value];
  const DarkMultiColorUnorderedTheme = exports.DarkMultiColorUnorderedTheme = (0, _colorTheme.ColorTheme)({
    COLOR_SCALE
  });
});
//# sourceMappingURL=multi-color-unordered-theme.js.map