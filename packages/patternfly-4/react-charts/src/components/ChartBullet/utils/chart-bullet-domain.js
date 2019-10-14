"use strict";
exports.__esModule = true;
var ChartUtils_1 = require("../../ChartUtils");
// Returns the bullet chart's min and max domain for comparative / primary measures and qualitative range data
exports.getBulletDomain = function (_a) {
    var comparativeErrorMeasureComponent = _a.comparativeErrorMeasureComponent, comparativeErrorMeasureData = _a.comparativeErrorMeasureData, comparativeWarningMeasureComponent = _a.comparativeWarningMeasureComponent, comparativeWarningMeasureData = _a.comparativeWarningMeasureData, primaryDotMeasureComponent = _a.primaryDotMeasureComponent, primaryDotMeasureData = _a.primaryDotMeasureData, primarySegmentedMeasureComponent = _a.primarySegmentedMeasureComponent, primarySegmentedMeasureData = _a.primarySegmentedMeasureData, maxDomain = _a.maxDomain, minDomain = _a.minDomain, qualitativeRangeComponent = _a.qualitativeRangeComponent, qualitativeRangeData = _a.qualitativeRangeData;
    var domain = ChartUtils_1.getDomains({
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
    });
    // Note that comparative measures and qualitative range bars are currently given an x-value of 1, while the bar widths
    // fill the domain. At one point, lines were used to represent comparative warning, comparative error, and zero
    // measures. Those components had x-values of 0 and 2, which rendered the lines on top of the comparative measure and
    // qualitative range bars.
    domain.x = [0, 2];
    return domain;
};
