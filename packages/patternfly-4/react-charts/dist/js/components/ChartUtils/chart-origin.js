"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPieOrigin = void 0;

var _victoryCore = require("victory-core");

// Returns te origin for pie based charts. For example, something with a radius such as pie, donut, donut utilization,
// and donut threshold.
var getPieOrigin = function getPieOrigin(_ref) {
  var height = _ref.height,
      padding = _ref.padding,
      width = _ref.width;

  var _Helpers$getPadding = _victoryCore.Helpers.getPadding({
    padding: padding
  }),
      top = _Helpers$getPadding.top,
      bottom = _Helpers$getPadding.bottom,
      left = _Helpers$getPadding.left,
      right = _Helpers$getPadding.right;

  var radius = _victoryCore.Helpers.getRadius({
    height: height,
    width: width,
    padding: padding
  });

  var offsetX = (width - radius * 2 - left - right) / 2;
  var offsetY = (height - radius * 2 - top - bottom) / 2;
  return {
    x: radius + left + offsetX,
    y: radius + top + offsetY
  };
};

exports.getPieOrigin = getPieOrigin;
//# sourceMappingURL=chart-origin.js.map