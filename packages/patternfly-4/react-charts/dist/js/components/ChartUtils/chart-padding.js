"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPaddingForSide = void 0;

var _lodash = require("lodash");

var getPaddingForSide = function getPaddingForSide(side, padding, fallback) {
  if (!(0, _lodash.isEmpty)(padding)) {
    return (0, _lodash.get)(padding, side, 0);
  }

  if ((0, _lodash.isFinite)(padding)) {
    return padding;
  }

  return getPaddingForSide(side, fallback, 0);
};

exports.getPaddingForSide = getPaddingForSide;
//# sourceMappingURL=chart-padding.js.map