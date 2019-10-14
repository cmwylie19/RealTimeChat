"use strict";
exports.__esModule = true;
var lodash_1 = require("lodash");
exports.getPaddingForSide = function (side, padding, fallback) {
    if (!lodash_1.isEmpty(padding)) {
        return lodash_1.get(padding, side, 0);
    }
    if (lodash_1.isFinite(padding)) {
        return padding;
    }
    return exports.getPaddingForSide(side, fallback, 0);
};
