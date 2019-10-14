(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./StyledTheme", "./StyledBox", "./StyledFlex", "./StyledText"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./StyledTheme"), require("./StyledBox"), require("./StyledFlex"), require("./StyledText"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.StyledTheme, global.StyledBox, global.StyledFlex, global.StyledText);
    global.undefined = mod.exports;
  }
})(this, function (exports, _StyledTheme, _StyledBox, _StyledFlex, _StyledText) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "PatternFlyThemeProvider", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_StyledTheme).default;
    }
  });
  Object.defineProperty(exports, "StyledTheme", {
    enumerable: true,
    get: function () {
      return _StyledTheme.StyledTheme;
    }
  });
  Object.defineProperty(exports, "StyledConstants", {
    enumerable: true,
    get: function () {
      return _StyledTheme.StyledConstants;
    }
  });
  Object.defineProperty(exports, "StyledBox", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_StyledBox).default;
    }
  });
  Object.defineProperty(exports, "StyledFlex", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_StyledFlex).default;
    }
  });
  Object.defineProperty(exports, "StyledText", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_StyledText).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});
//# sourceMappingURL=index.js.map