(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./CheckboxSelectGroup"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./CheckboxSelectGroup"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.CheckboxSelectGroup);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _CheckboxSelectGroup) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('checkbox select options', () => {
    test('renders with children successfully', () => {
      const view = (0, _enzyme.shallow)(_react2.default.createElement(_CheckboxSelectGroup.CheckboxSelectGroup, {
        label: "test"
      }, _react2.default.createElement("div", null, "child")));
      expect(view).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=CheckboxSelectGroup.test.js.map