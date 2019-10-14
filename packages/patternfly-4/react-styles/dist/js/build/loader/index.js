"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = pfStyleLoader;

var _util = require("../util");

function pfStyleLoader(source, cssOutputPath) {
  return (0, _util.cssToJSNew)(source, cssOutputPath, false);
}
//# sourceMappingURL=index.js.map