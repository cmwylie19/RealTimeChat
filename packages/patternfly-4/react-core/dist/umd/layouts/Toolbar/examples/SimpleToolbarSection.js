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

  class SimpleToolbarSection extends _react2.default.Component {
    render() {
      return _react2.default.createElement(_reactCore.Toolbar, null, _react2.default.createElement(_reactCore.ToolbarSection, {
        "aria-label": "First section"
      }, _react2.default.createElement(_reactCore.ToolbarGroup, null, _react2.default.createElement(_reactCore.ToolbarItem, null, "Item 1")), _react2.default.createElement(_reactCore.ToolbarGroup, null, _react2.default.createElement(_reactCore.ToolbarItem, null, "Item 2"), _react2.default.createElement(_reactCore.ToolbarItem, null, "Item 3"))), _react2.default.createElement(_reactCore.ToolbarSection, {
        "aria-label": "Second section"
      }, _react2.default.createElement(_reactCore.ToolbarGroup, null, _react2.default.createElement(_reactCore.ToolbarItem, null, "Item 4"), _react2.default.createElement(_reactCore.ToolbarItem, null, "Item 5"), _react2.default.createElement(_reactCore.ToolbarItem, null, "Item 6")), _react2.default.createElement(_reactCore.ToolbarGroup, null, _react2.default.createElement(_reactCore.ToolbarItem, null, "Item 7"))));
    }

  }

  exports.default = SimpleToolbarSection;
});
//# sourceMappingURL=SimpleToolbarSection.js.map