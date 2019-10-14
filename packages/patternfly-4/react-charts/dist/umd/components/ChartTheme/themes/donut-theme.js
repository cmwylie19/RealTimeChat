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
  exports.DonutTheme = undefined;

  /* eslint-disable camelcase */
  // Donut theme
  const DonutTheme = exports.DonutTheme = {
    pie: {
      height: _reactTokens.chart_donut_pie_Height.value,
      padding: _reactTokens.chart_donut_pie_Padding.value,
      padAngle: _reactTokens.chart_donut_pie_angle_Padding.value,
      width: _reactTokens.chart_donut_pie_Width.value
    }
  };
});
//# sourceMappingURL=donut-theme.js.map