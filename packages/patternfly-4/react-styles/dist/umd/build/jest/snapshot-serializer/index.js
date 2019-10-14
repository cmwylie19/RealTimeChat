(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./serializer"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./serializer"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.serializer);
    global.undefined = mod.exports;
  }
})(this, function (exports, _serializer) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_serializer).default;
    }
  });
  Object.defineProperty(exports, "createSerializer", {
    enumerable: true,
    get: function () {
      return _serializer.createSerializer;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});
//# sourceMappingURL=index.js.map