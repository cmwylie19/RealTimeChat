"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClassName = void 0;

// Misc util functions
// Returns the class name that will be applied to the outer-most div rendered by the chart's container
var getClassName = function getClassName(_ref) {
  var className = _ref.className;
  var cleanClassName; // Workaround for VictoryContainer class name

  if (className) {
    cleanClassName = className.replace(/VictoryContainer/g, '').replace(/pf-c-chart/g, '').replace(/\s+/g, ' ').trim();
  }

  return cleanClassName && cleanClassName.length ? "pf-c-chart ".concat(cleanClassName) : 'pf-c-chart';
};

exports.getClassName = getClassName;
//# sourceMappingURL=chart-helpers.js.map