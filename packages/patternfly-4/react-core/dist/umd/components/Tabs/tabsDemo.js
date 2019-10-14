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

  class TabsNavVariant extends _react.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeTabKey: 0
      }; // Toggle currently active tab

      this.handleTabClick = (event, tabIndex) => {
        this.setState({
          activeTabKey: tabIndex
        });
      };
    }

    render() {
      return _react2.default.createElement(_react.Fragment, null, _react2.default.createElement(_reactCore.Tabs, {
        activeKey: this.state.activeTabKey,
        onSelect: this.handleTabClick,
        "aria-label": "Local",
        variant: _reactCore.TabsVariant.nav
      }, _react2.default.createElement(_reactCore.Tab, {
        eventKey: 0,
        title: "Tab item 1"
      }, "Tab 1 section"), _react2.default.createElement(_reactCore.Tab, {
        eventKey: 1,
        title: "Tab item 2"
      }, "Tab 2 section"), _react2.default.createElement(_reactCore.Tab, {
        eventKey: 2,
        title: "Tab item 3"
      }, "Tab 3 section"), _react2.default.createElement(_reactCore.Tab, {
        eventKey: 3,
        title: "Tab item 4"
      }, "Tab 4 section"), _react2.default.createElement(_reactCore.Tab, {
        eventKey: 4,
        title: "Tab item 5"
      }, "Tab 5 section"), _react2.default.createElement(_reactCore.Tab, {
        eventKey: 5,
        title: "Tab item 6"
      }, "Tab 6 section"), _react2.default.createElement(_reactCore.Tab, {
        eventKey: 6,
        title: "Tab item 7"
      }, "Tab 7 section"), _react2.default.createElement(_reactCore.Tab, {
        eventKey: 7,
        title: "Tab item 8"
      }, "Tab 8 section"), _react2.default.createElement(_reactCore.Tab, {
        eventKey: 8,
        title: "Tab item 9"
      }, "Tab 9 section"), _react2.default.createElement(_reactCore.Tab, {
        eventKey: 9,
        title: "Tab item 10"
      }, "Tab 10 section"), _react2.default.createElement(_reactCore.Tab, {
        eventKey: 10,
        title: "Tab item 11"
      }, "Tab 11 section"), _react2.default.createElement(_reactCore.Tab, {
        eventKey: 11,
        title: "Tab item 12"
      }, "Tab 12 section")), _react2.default.createElement("br", null), _react2.default.createElement(_reactCore.Tabs, {
        activeKey: this.state.activeTabKey,
        onSelect: this.handleTabClick,
        "aria-label": "Local",
        variant: _reactCore.TabsVariant.nav
      }, _react2.default.createElement(_reactCore.Tab, {
        eventKey: 0,
        title: "Tab item 1"
      }, "Tab 1 section"), _react2.default.createElement(_reactCore.Tab, {
        eventKey: 1,
        title: "Tab item 2"
      }, "Tab 2 section"), _react2.default.createElement(_reactCore.Tab, {
        eventKey: 2,
        title: "Tab item 3"
      }, "Tab 3 section")));
    }

  }

  exports.default = TabsNavVariant;
});
//# sourceMappingURL=tabsDemo.js.map