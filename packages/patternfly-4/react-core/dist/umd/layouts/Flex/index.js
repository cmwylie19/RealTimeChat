(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Flex", "./FlexItem"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Flex"), require("./FlexItem"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Flex, global.FlexItem);
    global.undefined = mod.exports;
  }
})(this, function (exports, _Flex, _FlexItem) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_Flex).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _Flex[key];
      }
    });
  });
  Object.keys(_FlexItem).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _FlexItem[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map