(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "exenv"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("exenv"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.exenv);
    global.undefined = mod.exports;
  }
})(this, function (exports, _exenv) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _exenv.canUseDOM ? window.HTMLElement : {};
});
//# sourceMappingURL=safeHTMLElement.js.map