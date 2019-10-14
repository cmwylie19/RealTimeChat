"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
/**
 * merge-props.js
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
var lodash_1 = require("lodash");
var classnames_1 = require("classnames");
function mergeProps() {
    var props = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        props[_i] = arguments[_i];
    }
    var firstProps = props[0];
    var restProps = props.slice(1);
    if (!restProps.length) {
        return lodash_1.mergeWith({}, firstProps);
    }
    // Avoid mutating the first prop collection
    return lodash_1.mergeWith.apply(void 0, __spreadArrays([lodash_1.mergeWith({}, firstProps)], restProps, [function (a, b, key) {
            if (key === 'children') {
                // Children have to be merged in reverse order for Reactabular
                // logic to work.
                return __assign(__assign({}, b), a);
            }
            if (key === 'className') {
                // Process class names through classNames to merge properly
                // as a string.
                return classnames_1["default"](a, b);
            }
            return undefined;
        }]));
}
exports.mergeProps = mergeProps;
