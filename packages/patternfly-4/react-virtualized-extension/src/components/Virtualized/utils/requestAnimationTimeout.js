"use strict";
/**
 * requestAnimationTimeout.js
 * https://github.com/bvaughn/react-virtualized/blob/9.21.0/source/utils/requestAnimationTimeout.js
 * Brian Vaughn
 *
 * Forked from version 9.21.0
 * */
exports.__esModule = true;
var animationFrame_1 = require("./animationFrame");
exports.cancelAnimationTimeout = function (frame) { return animationFrame_1.caf(frame.id); };
/**
 * Recursively calls requestAnimationFrame until a specified delay has been met or exceeded.
 * When the delay time has been reached the function you're timing out will be called.
 *
 * Credit: Joe Lambert (https://gist.github.com/joelambert/1002116#file-requesttimeout-js)
 */
exports.requestAnimationTimeout = function (callback, delay) {
    var start;
    // wait for end of processing current event handler, because event handler may be long
    Promise.resolve().then(function () {
        start = Date.now();
    });
    var timeout = function () {
        if (Date.now() - start >= delay) {
            callback.call();
        }
        else {
            frame.id = animationFrame_1.raf(timeout);
        }
    };
    var frame = {
        id: animationFrame_1.raf(timeout)
    };
    return frame;
};
