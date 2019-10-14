(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.undefined = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  const mockClosest = exports.mockClosest = (map, resolveFunction, force = false) => {
    if (!Element.prototype.closest || force) {
      Element.prototype.closest = selector => map && map[selector] || resolveFunction && resolveFunction(selector);
    }
  };

  const makeTableId = exports.makeTableId = ({
    column: {
      property
    },
    rowIndex,
    columnIndex,
    name
  }) => `${property}-${rowIndex}-${columnIndex}${name ? `-${name}` : ''}`;
});
//# sourceMappingURL=helpers.js.map