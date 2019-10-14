(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.undefined = mod.exports;
  }
})(this, function () {
  "use strict";
});
//# sourceMappingURL=low-vision-icon.d.js.map