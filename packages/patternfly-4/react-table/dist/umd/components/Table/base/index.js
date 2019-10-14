(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./provider", "./header", "./body", "./body-row", "./evaluate-formatters", "./evaluate-transforms", "./merge-props", "./columns-are-equal", "./resolve-row-key", "./types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./provider"), require("./header"), require("./body"), require("./body-row"), require("./evaluate-formatters"), require("./evaluate-transforms"), require("./merge-props"), require("./columns-are-equal"), require("./resolve-row-key"), require("./types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.provider, global.header, global.body, global.bodyRow, global.evaluateFormatters, global.evaluateTransforms, global.mergeProps, global.columnsAreEqual, global.resolveRowKey, global.types);
    global.undefined = mod.exports;
  }
})(this, function (exports, _provider, _header, _body, _bodyRow, _evaluateFormatters, _evaluateTransforms, _mergeProps, _columnsAreEqual, _resolveRowKey, _types) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_provider).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _provider[key];
      }
    });
  });
  Object.keys(_header).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _header[key];
      }
    });
  });
  Object.keys(_body).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _body[key];
      }
    });
  });
  Object.keys(_bodyRow).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _bodyRow[key];
      }
    });
  });
  Object.keys(_evaluateFormatters).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _evaluateFormatters[key];
      }
    });
  });
  Object.keys(_evaluateTransforms).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _evaluateTransforms[key];
      }
    });
  });
  Object.keys(_mergeProps).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _mergeProps[key];
      }
    });
  });
  Object.keys(_columnsAreEqual).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _columnsAreEqual[key];
      }
    });
  });
  Object.keys(_resolveRowKey).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _resolveRowKey[key];
      }
    });
  });
  Object.keys(_types).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _types[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map