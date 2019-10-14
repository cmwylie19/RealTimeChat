"use strict";
exports.__esModule = true;
/**
 * Helper utility that updates the specified callback whenever any of the specified indices have changed.
 */
function createCallbackMemoizer(requireAllKeys) {
    if (requireAllKeys === void 0) { requireAllKeys = true; }
    var cachedIndices = {};
    return function (_a) {
        var callback = _a.callback, indices = _a.indices;
        var keys = Object.keys(indices);
        var allInitialized = !requireAllKeys ||
            keys.every(function (key) {
                var value = indices[key];
                return Array.isArray(value) ? value.length > 0 : value >= 0;
            });
        var indexChanged = keys.length !== Object.keys(cachedIndices).length ||
            keys.some(function (key) {
                var cachedValue = cachedIndices[key];
                var value = indices[key];
                return Array.isArray(value) ? cachedValue.join(',') !== value.join(',') : cachedValue !== value;
            });
        cachedIndices = indices;
        if (allInitialized && indexChanged) {
            callback(indices);
        }
    };
}
exports["default"] = createCallbackMemoizer;
