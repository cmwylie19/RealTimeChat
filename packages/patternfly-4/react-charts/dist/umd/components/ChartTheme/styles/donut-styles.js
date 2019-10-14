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
  exports.DonutStyles = undefined;

  /* eslint-disable camelcase */
  // Donut styles
  const DonutStyles = exports.DonutStyles = {
    label: {
      subTitle: {
        // Victory props only
        fill: _reactTokens.chart_donut_label_subtitle_Fill.value,
        fontSize: _reactTokens.chart_global_FontSize_sm.value
      },
      subTitlePosition: _reactTokens.chart_donut_label_subtitle_position.value,
      title: {
        // Victory props only
        fontSize: _reactTokens.chart_global_FontSize_2xl.value
      }
    }
  };
});
//# sourceMappingURL=donut-styles.js.map