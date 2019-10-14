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
  exports.AxisTheme = undefined;

  /* eslint-disable camelcase */
  // Axis theme
  const AxisTheme = exports.AxisTheme = {
    axis: {
      style: {
        grid: {
          stroke: _reactTokens.chart_axis_grid_stroke_Color.value
        },
        ticks: {
          stroke: _reactTokens.chart_axis_tick_stroke_Color.value
        }
      }
    }
  };
});
//# sourceMappingURL=axis-theme.js.map