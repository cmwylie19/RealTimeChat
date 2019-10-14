(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./TableTextInput"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./TableTextInput"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.TableTextInput);
    global.undefined = mod.exports;
  }
})(this, function (exports, _TableTextInput) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "TableTextInput", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_TableTextInput).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});
//# sourceMappingURL=index.js.map