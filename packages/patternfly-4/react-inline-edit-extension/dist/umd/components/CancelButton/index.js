(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./CancelButton"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./CancelButton"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.CancelButton);
    global.undefined = mod.exports;
  }
})(this, function (exports, _CancelButton) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "CancelButton", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_CancelButton).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});
//# sourceMappingURL=index.js.map