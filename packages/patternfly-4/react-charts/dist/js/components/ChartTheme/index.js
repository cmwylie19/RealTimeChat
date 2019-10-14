"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ChartTheme = require("./ChartTheme");

Object.keys(_ChartTheme).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ChartTheme[key];
    }
  });
});

var _ChartStyles = require("./ChartStyles");

Object.keys(_ChartStyles).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ChartStyles[key];
    }
  });
});
//# sourceMappingURL=index.js.map