(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./formatters", "./utils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./formatters"), require("./utils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.formatters, global.utils);
    global.undefined = mod.exports;
  }
})(this, function (exports, _formatters, _utils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_formatters).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _formatters[key];
      }
    });
  });
  Object.keys(_utils).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _utils[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map