(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Progress", "./ProgressContainer"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Progress"), require("./ProgressContainer"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Progress, global.ProgressContainer);
    global.undefined = mod.exports;
  }
})(this, function (exports, _Progress, _ProgressContainer) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_Progress).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _Progress[key];
      }
    });
  });
  Object.defineProperty(exports, "ProgressMeasureLocation", {
    enumerable: true,
    get: function () {
      return _ProgressContainer.ProgressMeasureLocation;
    }
  });
  Object.defineProperty(exports, "ProgressVariant", {
    enumerable: true,
    get: function () {
      return _ProgressContainer.ProgressVariant;
    }
  });
});
//# sourceMappingURL=index.js.map