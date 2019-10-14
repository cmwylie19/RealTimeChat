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

  const buildExpandableRows = exports.buildExpandableRows = (relationships = {}, openIndexes = [], rowCount = 10) => {
    const rows = [];

    for (let i = 0; i < rowCount; i++) {
      const row = {
        data: {
          mockData: 'mock'
        }
      };

      if (openIndexes.indexOf(i) >= 0) {
        row.isOpen = true;
      }

      if (relationships[i] >= 0) {
        row.parent = relationships[i];
      }

      rows.push(row);
    }

    return rows;
  };
});
//# sourceMappingURL=data-helpers.js.map