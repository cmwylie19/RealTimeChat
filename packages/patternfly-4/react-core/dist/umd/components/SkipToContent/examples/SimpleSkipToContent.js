(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@patternfly/react-core"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@patternfly/react-core"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactCore);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _reactCore) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // eslint-disable-next-line react/prefer-stateless-function
  class SimpleSkipToContent extends _react2.default.Component {
    render() {
      return _react2.default.createElement(_reactCore.SkipToContent, {
        href: "#main-content"
      }, "Skip to Content");
    }

  }

  exports.default = SimpleSkipToContent;
});
//# sourceMappingURL=SimpleSkipToContent.js.map