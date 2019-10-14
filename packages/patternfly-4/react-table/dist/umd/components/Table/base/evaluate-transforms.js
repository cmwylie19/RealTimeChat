(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "lodash", "./merge-props"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("lodash"), require("./merge-props"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.lodash, global.mergeProps);
    global.undefined = mod.exports;
  }
})(this, function (exports, _lodash, _mergeProps) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.evaluateTransforms = evaluateTransforms;

  /**
   * evaluate-transforms.ts
   *
   * Forked from reactabular-table version 8.14.0
   * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
   */
  function evaluateTransforms(transforms = [], value, extraParameters = {}) {
    if (process.env.NODE_ENV !== 'production') {
      if (!transforms.every(_lodash.isFunction)) {
        throw new Error('All transforms weren\'t functions!');
      }
    }

    if (transforms.length === 0) {
      return {};
    }

    return (0, _mergeProps.mergeProps)(...transforms.map(transform => transform(value, extraParameters)));
  }
});
//# sourceMappingURL=evaluate-transforms.js.map