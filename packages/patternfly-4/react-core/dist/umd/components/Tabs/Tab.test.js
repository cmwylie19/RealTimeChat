(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Tab"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Tab"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Tab);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _Tab) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('should render tab', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_Tab.Tab, {
      eventKey: 0,
      title: "Tab item 1"
    }, "Tab 1 section"));
    expect(view).toMatchSnapshot();
  });
  test('should render active tab', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_Tab.Tab, {
      eventKey: 0,
      title: "Tab item 1"
    }, "Tab 1 section"));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=Tab.test.js.map