(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react-virtualized", "./VirtualGrid", "./VirtualTableBody"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react-virtualized"), require("./VirtualGrid"), require("./VirtualTableBody"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactVirtualized, global.VirtualGrid, global.VirtualTableBody);
    global.undefined = mod.exports;
  }
})(this, function (exports, _reactVirtualized, _VirtualGrid, _VirtualTableBody) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "AutoSizer", {
    enumerable: true,
    get: function () {
      return _reactVirtualized.AutoSizer;
    }
  });
  Object.defineProperty(exports, "WindowScroller", {
    enumerable: true,
    get: function () {
      return _reactVirtualized.WindowScroller;
    }
  });
  Object.defineProperty(exports, "VirtualGrid", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_VirtualGrid).default;
    }
  });
  Object.defineProperty(exports, "VirtualTableBody", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_VirtualTableBody).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});
//# sourceMappingURL=index.js.map