"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.process = process;
exports.getCacheKey = void 0;

var _createCacheKeyFunction = _interopRequireDefault(require("fbjs-scripts/jest/createCacheKeyFunction"));

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function process(src) {
  return (0, _util.cssToJS)((0, _util.minifyCSS)(src), false);
}

var getCacheKey = (0, _createCacheKeyFunction["default"])([]);
exports.getCacheKey = getCacheKey;
//# sourceMappingURL=transform.js.map