"use strict";
exports.__esModule = true;
var victory_core_1 = require("victory-core");
// Returns te origin for pie based charts. For example, something with a radius such as pie, donut, donut utilization,
// and donut threshold.
exports.getPieOrigin = function (_a) {
    var height = _a.height, padding = _a.padding, width = _a.width;
    var _b = victory_core_1.Helpers.getPadding({ padding: padding }), top = _b.top, bottom = _b.bottom, left = _b.left, right = _b.right;
    var radius = victory_core_1.Helpers.getRadius({ height: height, width: width, padding: padding });
    var offsetX = (width - radius * 2 - left - right) / 2;
    var offsetY = (height - radius * 2 - top - bottom) / 2;
    return {
        x: radius + left + offsetX,
        y: radius + top + offsetY
    };
};
