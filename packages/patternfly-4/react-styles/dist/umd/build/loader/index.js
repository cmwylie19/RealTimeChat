(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../util"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../util"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.util);
    global.undefined = mod.exports;
  }
})(this, function (exports, _util) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = pfStyleLoader;

  function pfStyleLoader(source, cssOutputPath) {
    return (0, _util.cssToJSNew)(source, cssOutputPath, false);
  }
});
//# sourceMappingURL=index.js.map