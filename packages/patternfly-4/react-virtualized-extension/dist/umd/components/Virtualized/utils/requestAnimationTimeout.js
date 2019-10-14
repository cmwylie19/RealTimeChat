(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./animationFrame"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./animationFrame"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.animationFrame);
    global.undefined = mod.exports;
  }
})(this, function (exports, _animationFrame) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.requestAnimationTimeout = exports.cancelAnimationTimeout = undefined;

  /**
   * requestAnimationTimeout.js
   * https://github.com/bvaughn/react-virtualized/blob/9.21.0/source/utils/requestAnimationTimeout.js
   * Brian Vaughn
   *
   * Forked from version 9.21.0
   * */
  const cancelAnimationTimeout = exports.cancelAnimationTimeout = frame => (0, _animationFrame.caf)(frame.id);
  /**
   * Recursively calls requestAnimationFrame until a specified delay has been met or exceeded.
   * When the delay time has been reached the function you're timing out will be called.
   *
   * Credit: Joe Lambert (https://gist.github.com/joelambert/1002116#file-requesttimeout-js)
   */


  const requestAnimationTimeout = exports.requestAnimationTimeout = (callback, delay) => {
    let start; // wait for end of processing current event handler, because event handler may be long

    Promise.resolve().then(() => {
      start = Date.now();
    });

    const timeout = () => {
      if (Date.now() - start >= delay) {
        callback.call();
      } else {
        frame.id = (0, _animationFrame.raf)(timeout);
      }
    };

    const frame = {
      id: (0, _animationFrame.raf)(timeout)
    };
    return frame;
  };
});
//# sourceMappingURL=requestAnimationTimeout.js.map