"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBulletDomain = void 0;

var _ChartUtils = require("../../ChartUtils");

// Returns the bullet chart's min and max domain for comparative / primary measures and qualitative range data
var getBulletDomain = function getBulletDomain(_ref) {
  var comparativeErrorMeasureComponent = _ref.comparativeErrorMeasureComponent,
      comparativeErrorMeasureData = _ref.comparativeErrorMeasureData,
      comparativeWarningMeasureComponent = _ref.comparativeWarningMeasureComponent,
      comparativeWarningMeasureData = _ref.comparativeWarningMeasureData,
      primaryDotMeasureComponent = _ref.primaryDotMeasureComponent,
      primaryDotMeasureData = _ref.primaryDotMeasureData,
      primarySegmentedMeasureComponent = _ref.primarySegmentedMeasureComponent,
      primarySegmentedMeasureData = _ref.primarySegmentedMeasureData,
      maxDomain = _ref.maxDomain,
      minDomain = _ref.minDomain,
      qualitativeRangeComponent = _ref.qualitativeRangeComponent,
      qualitativeRangeData = _ref.qualitativeRangeData;
  var domain = (0, _ChartUtils.getDomains)({
    maxDomain: maxDomain,
    minDomain: minDomain,
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

exports.getBulletDomain = getBulletDomain;
//# sourceMappingURL=chart-bullet-domain.js.map