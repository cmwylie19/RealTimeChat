(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./ActionGroup", "./Form"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./ActionGroup"), require("./Form"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.ActionGroup, global.Form);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _ActionGroup, _Form) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('ActionGroup component', () => {
    test('should render default action group variant', () => {
      const view = (0, _enzyme.mount)(_react2.default.createElement(_ActionGroup.ActionGroup, null, _react2.default.createElement("div", null, "Hello")));
      expect(view).toMatchSnapshot();
    });
    test('should render horizontal form ActionGroup variant', () => {
      const view = (0, _enzyme.mount)(_react2.default.createElement(_Form.Form, {
        isHorizontal: true
      }, _react2.default.createElement(_ActionGroup.ActionGroup, null)));
      expect(view).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=ActionGroup.test.js.map