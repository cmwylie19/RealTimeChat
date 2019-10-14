(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.undefined = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  // Threshold theme
  const ThresholdTheme = exports.ThresholdTheme = {
    line: {
      style: {
        data: {
          strokeDasharray: '6,6'
        }
      }
    }
  };
});
//# sourceMappingURL=threshold-theme.js.map