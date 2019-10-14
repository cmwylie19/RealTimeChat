(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./ApplicationLauncher", "./ApplicationLauncherItem", "./ApplicationLauncherContent", "./ApplicationLauncherIcon", "./ApplicationLauncherText", "./ApplicationLauncherGroup", "./ApplicationLauncherSeparator"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./ApplicationLauncher"), require("./ApplicationLauncherItem"), require("./ApplicationLauncherContent"), require("./ApplicationLauncherIcon"), require("./ApplicationLauncherText"), require("./ApplicationLauncherGroup"), require("./ApplicationLauncherSeparator"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ApplicationLauncher, global.ApplicationLauncherItem, global.ApplicationLauncherContent, global.ApplicationLauncherIcon, global.ApplicationLauncherText, global.ApplicationLauncherGroup, global.ApplicationLauncherSeparator);
    global.undefined = mod.exports;
  }
})(this, function (exports, _ApplicationLauncher, _ApplicationLauncherItem, _ApplicationLauncherContent, _ApplicationLauncherIcon, _ApplicationLauncherText, _ApplicationLauncherGroup, _ApplicationLauncherSeparator) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_ApplicationLauncher).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ApplicationLauncher[key];
      }
    });
  });
  Object.keys(_ApplicationLauncherItem).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ApplicationLauncherItem[key];
      }
    });
  });
  Object.keys(_ApplicationLauncherContent).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ApplicationLauncherContent[key];
      }
    });
  });
  Object.keys(_ApplicationLauncherIcon).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ApplicationLauncherIcon[key];
      }
    });
  });
  Object.keys(_ApplicationLauncherText).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ApplicationLauncherText[key];
      }
    });
  });
  Object.keys(_ApplicationLauncherGroup).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ApplicationLauncherGroup[key];
      }
    });
  });
  Object.keys(_ApplicationLauncherSeparator).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ApplicationLauncherSeparator[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map