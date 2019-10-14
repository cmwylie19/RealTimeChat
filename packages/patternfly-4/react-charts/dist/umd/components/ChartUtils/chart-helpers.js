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

  // Misc util functions
  // Returns the class name that will be applied to the outer-most div rendered by the chart's container
  const getClassName = exports.getClassName = ({
    className
  }) => {
    let cleanClassName; // Workaround for VictoryContainer class name

    if (className) {
      cleanClassName = className.replace(/VictoryContainer/g, '').replace(/pf-c-chart/g, '').replace(/\s+/g, ' ').trim();
    }

    return cleanClassName && cleanClassName.length ? `pf-c-chart ${cleanClassName}` : 'pf-c-chart';
  };
});
//# sourceMappingURL=chart-helpers.js.map