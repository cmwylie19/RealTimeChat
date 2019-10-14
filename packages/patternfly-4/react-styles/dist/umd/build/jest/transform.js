(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "fbjs-scripts/jest/createCacheKeyFunction", "../util"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("fbjs-scripts/jest/createCacheKeyFunction"), require("../util"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.createCacheKeyFunction, global.util);
    global.undefined = mod.exports;
  }
})(this, function (exports, _createCacheKeyFunction, _util) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getCacheKey = undefined;
  exports.process = process;

  var _createCacheKeyFunction2 = _interopRequireDefault(_createCacheKeyFunction);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function process(src) {
    return (0, _util.cssToJS)((0, _util.minifyCSS)(src), false);
  }

  const getCacheKey = exports.getCacheKey = (0, _createCacheKeyFunction2.default)([]);
});
//# sourceMappingURL=transform.js.map