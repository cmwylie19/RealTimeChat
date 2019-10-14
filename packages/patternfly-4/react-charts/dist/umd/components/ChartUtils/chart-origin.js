(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "victory-core"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("victory-core"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.victoryCore);
    global.undefined = mod.exports;
  }
})(this, function (exports, _victoryCore) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getPieOrigin = undefined;

  // Returns te origin for pie based charts. For example, something with a radius such as pie, donut, donut utilization,
  // and donut threshold.
  const getPieOrigin = exports.getPieOrigin = ({
    height,
    padding,
    width
  }) => {
    const {
      top,
      bottom,
      left,
      right
    } = _victoryCore.Helpers.getPadding({
      padding
    });

    const radius = _victoryCore.Helpers.getRadius({
      height,
      width,
      padding
    });

    const offsetX = (width - radius * 2 - left - right) / 2;
    const offsetY = (height - radius * 2 - top - bottom) / 2;
    return {
      x: radius + left + offsetX,
      y: radius + top + offsetY
    };
  };
});
//# sourceMappingURL=chart-origin.js.map