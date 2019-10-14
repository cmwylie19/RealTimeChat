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
  const columns = exports.columns = [{
    title: 'Header cell'
  }, 'Branches', {
    title: 'Pull requests'
  }, 'Workspaces', {
    title: 'Last Commit'
  }];
  const rows = exports.rows = [{
    cells: ['one', 'two', 'three', 'four', 'five']
  }, {
    cells: ['one', 'two', 'three', 'four', 'five']
  }, {
    cells: ['one', 'two', 'three', 'four', 'five']
  }, {
    cells: ['one', 'two', 'three', 'four', 'five']
  }, {
    cells: ['one', 'two', 'three', 'four', 'five']
  }, {
    cells: ['one', 'two', 'three', 'four', 'five']
  }, {
    cells: ['one', 'two', 'three', 'four', 'five']
  }, {
    cells: ['one', 'two', 'three', 'four', 'five']
  }, {
    cells: ['one', 'two', 'three', 'four', 'five']
  }];
});
//# sourceMappingURL=data-sets.js.map