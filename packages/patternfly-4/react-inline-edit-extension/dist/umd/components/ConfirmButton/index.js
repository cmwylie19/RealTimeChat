(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./ConfirmButton"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./ConfirmButton"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ConfirmButton);
    global.undefined = mod.exports;
  }
})(this, function (exports, _ConfirmButton) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "ConfirmButton", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ConfirmButton).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});
//# sourceMappingURL=index.js.map