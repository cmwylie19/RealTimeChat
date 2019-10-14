(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "lodash"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("lodash"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.lodash);
    global.undefined = mod.exports;
  }
})(this, function (exports, _lodash) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getPaddingForSide = undefined;

  const getPaddingForSide = exports.getPaddingForSide = (side, padding, fallback) => {
    if (!(0, _lodash.isEmpty)(padding)) {
      return (0, _lodash.get)(padding, side, 0);
    }

    if ((0, _lodash.isFinite)(padding)) {
      return padding;
    }

    return getPaddingForSide(side, fallback, 0);
  };
});
//# sourceMappingURL=chart-padding.js.map