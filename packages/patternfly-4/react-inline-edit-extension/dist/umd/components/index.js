(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./InlineEdit", "./TableTextInput"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./InlineEdit"), require("./TableTextInput"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.InlineEdit, global.TableTextInput);
    global.undefined = mod.exports;
  }
})(this, function (exports, _InlineEdit, _TableTextInput) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_InlineEdit).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _InlineEdit[key];
      }
    });
  });
  Object.keys(_TableTextInput).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _TableTextInput[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map