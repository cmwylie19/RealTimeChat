(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Drawer", "./DrawerPanelContent", "./DrawerContent"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Drawer"), require("./DrawerPanelContent"), require("./DrawerContent"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Drawer, global.DrawerPanelContent, global.DrawerContent);
    global.undefined = mod.exports;
  }
})(this, function (exports, _Drawer, _DrawerPanelContent, _DrawerContent) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
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
  Object.keys(_DrawerPanelContent).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _DrawerPanelContent[key];
      }
    });
  });
  Object.keys(_DrawerContent).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _DrawerContent[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map