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
  exports.LightBlueColorTheme = undefined;

  /* eslint-disable camelcase */
  // Color scale
  // See https://docs.google.com/document/d/1cw10pJFXWruB1SA8TQwituxn5Ss6KpxYPCOYGrH8qAY/edit
  const COLOR_SCALE = [_reactTokens.chart_color_blue_300.value, _reactTokens.chart_color_blue_100.value, _reactTokens.chart_color_blue_500.value, _reactTokens.chart_color_blue_200.value, _reactTokens.chart_color_blue_400.value];
  const LightBlueColorTheme = exports.LightBlueColorTheme = (0, _colorTheme.ColorTheme)({
    COLOR_SCALE
  });
});
//# sourceMappingURL=blue-color-theme.js.map