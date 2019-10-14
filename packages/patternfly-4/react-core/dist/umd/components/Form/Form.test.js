(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Form"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Form"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Form);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _Form) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('Form component', () => {
    test('should render default form variant', () => {
      const view = (0, _enzyme.shallow)(_react2.default.createElement(_Form.Form, null));
      expect(view).toMatchSnapshot();
    });
    test('should render horizontal form variant', () => {
      const view = (0, _enzyme.shallow)(_react2.default.createElement(_Form.Form, {
        isHorizontal: true
      }));
      expect(view).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=Form.test.js.map