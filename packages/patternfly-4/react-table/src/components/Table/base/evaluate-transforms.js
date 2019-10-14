"use strict";
exports.__esModule = true;
/**
 * evaluate-transforms.ts
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
var lodash_1 = require("lodash");
var merge_props_1 = require("./merge-props");
function evaluateTransforms(transforms, value, extraParameters) {
    if (transforms === void 0) { transforms = []; }
    if (extraParameters === void 0) { extraParameters = {}; }
    if (process.env.NODE_ENV !== 'production') {
        if (!transforms.every(lodash_1.isFunction)) {
            throw new Error('All transforms weren\'t functions!');
        }
    }
    if (transforms.length === 0) {
        return {};
    }
    return merge_props_1.mergeProps.apply(void 0, transforms.map(function (transform) { return transform(value, extraParameters); }));
}
exports.evaluateTransforms = evaluateTransforms;
