(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./constants", "./utils", "./editableTableBody", "./editableRowWrapper"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./constants"), require("./utils"), require("./editableTableBody"), require("./editableRowWrapper"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.constants, global.utils, global.editableTableBody, global.editableRowWrapper);
    global.undefined = mod.exports;
  }
})(this, function (exports, _constants, _utils, _editableTableBody, _editableRowWrapper) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "TableEditConfirmation", {
    enumerable: true,
    get: function () {
      return _constants.TableEditConfirmation;
    }
  });
  Object.defineProperty(exports, "inlineEditFormatterFactory", {
    enumerable: true,
    get: function () {
      return _utils.inlineEditFormatterFactory;
    }
  });
  Object.defineProperty(exports, "editableTableBody", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_editableTableBody).default;
    }
  });
  Object.defineProperty(exports, "editableRowWrapper", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_editableRowWrapper).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});
//# sourceMappingURL=index.js.map