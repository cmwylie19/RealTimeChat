"use strict";
// Misc util functions
exports.__esModule = true;
// Returns the class name that will be applied to the outer-most div rendered by the chart's container
exports.getClassName = function (_a) {
    var className = _a.className;
    var cleanClassName;
    // Workaround for VictoryContainer class name
    if (className) {
        cleanClassName = className.replace(/VictoryContainer/g, '')
            .replace(/pf-c-chart/g, '')
            .replace(/\s+/g, ' ').trim();
    }
    return (cleanClassName && cleanClassName.length) ? "pf-c-chart " + cleanClassName : 'pf-c-chart';
};
