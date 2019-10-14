"use strict";
exports.__esModule = true;
var DEFAULT_MAX_ELEMENT_SIZE = 1500000;
var CHROME_MAX_ELEMENT_SIZE = 1.67771e7;
var isBrowser = function () { return typeof window !== 'undefined'; };
var isChrome = function () { return !!window.chrome && !!window.chrome.webstore; };
exports.getMaxElementSize = function () {
    if (isBrowser()) {
        if (isChrome()) {
            return CHROME_MAX_ELEMENT_SIZE;
        }
    }
    return DEFAULT_MAX_ELEMENT_SIZE;
};
