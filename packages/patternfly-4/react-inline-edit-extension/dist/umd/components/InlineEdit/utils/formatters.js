(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./formatters/inlineEditFormatterFactory"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./formatters/inlineEditFormatterFactory"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.inlineEditFormatterFactory);
    global.undefined = mod.exports;
  }
})(this, function (exports, _inlineEditFormatterFactory) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "inlineEditFormatterFactory", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_inlineEditFormatterFactory).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});
//# sourceMappingURL=formatters.js.map