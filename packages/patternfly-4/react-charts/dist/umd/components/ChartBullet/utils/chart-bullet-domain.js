(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../../ChartUtils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../../ChartUtils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ChartUtils);
    global.undefined = mod.exports;
  }
})(this, function (exports, _ChartUtils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getBulletDomain = undefined;

  // Returns the bullet chart's min and max domain for comparative / primary measures and qualitative range data
  const getBulletDomain = exports.getBulletDomain = ({
    comparativeErrorMeasureComponent,
    comparativeErrorMeasureData,
    comparativeWarningMeasureComponent,
    comparativeWarningMeasureData,
    primaryDotMeasureComponent,
    primaryDotMeasureData,
    primarySegmentedMeasureComponent,
    primarySegmentedMeasureData,
    maxDomain,
    minDomain,
    qualitativeRangeComponent,
    qualitativeRangeData
  }) => {
    const domain = (0, _ChartUtils.getDomains)({
      maxDomain,
      minDomain,
      sources: [{
        component: comparativeErrorMeasureComponent,
        data: comparativeErrorMeasureData
      }, {
        component: comparativeWarningMeasureComponent,
        data: comparativeWarningMeasureData
      }, {
        component: primaryDotMeasureComponent,
        data: primaryDotMeasureData
      }, {
        component: primarySegmentedMeasureComponent,
        data: primarySegmentedMeasureData
      }, {
        component: qualitativeRangeComponent,
        data: qualitativeRangeData
      }]
    }); // Note that comparative measures and qualitative range bars are currently given an x-value of 1, while the bar widths
    // fill the domain. At one point, lines were used to represent comparative warning, comparative error, and zero
    // measures. Those components had x-values of 0 and 2, which rendered the lines on top of the comparative measure and
    // qualitative range bars.

    domain.x = [0, 2];
    return domain;
  };
});
//# sourceMappingURL=chart-bullet-domain.js.map