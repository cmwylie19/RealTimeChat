(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./DataToolbar", "./Drawer", "./Spinner"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./DataToolbar"), require("./Drawer"), require("./Spinner"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.DataToolbar, global.Drawer, global.Spinner);
    global.undefined = mod.exports;
  }
})(this, function (exports, _DataToolbar, _Drawer, _Spinner) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_DataToolbar).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _DataToolbar[key];
      }
    });
  });
  Object.keys(_Drawer).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _Drawer[key];
      }
    });
  });
  Object.keys(_Spinner).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _Spinner[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map