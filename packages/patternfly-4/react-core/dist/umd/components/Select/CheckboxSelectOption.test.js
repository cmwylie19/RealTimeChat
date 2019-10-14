(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./CheckboxSelectOption"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./CheckboxSelectOption"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.CheckboxSelectOption);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _CheckboxSelectOption) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('checkbox select options', () => {
    test('renders with value parameter successfully', () => {
      const view = (0, _enzyme.shallow)(_react2.default.createElement(_CheckboxSelectOption.CheckboxSelectOption, {
        value: "test",
        sendRef: jest.fn()
      }));
      expect(view).toMatchSnapshot();
    });
    test('renders with children successfully', () => {
      const view = (0, _enzyme.shallow)(_react2.default.createElement(_CheckboxSelectOption.CheckboxSelectOption, {
        value: "test",
        sendRef: jest.fn()
      }, _react2.default.createElement("div", null, "test")));
      expect(view).toMatchSnapshot();
    });
    describe('hover', () => {
      test('renders with checked successfully', () => {
        const view = (0, _enzyme.shallow)(_react2.default.createElement(_CheckboxSelectOption.CheckboxSelectOption, {
          isChecked: true,
          value: "test",
          sendRef: jest.fn()
        }));
        expect(view).toMatchSnapshot();
      });
    });
    describe('disabled', () => {
      test('renders disabled successfully', () => {
        const view = (0, _enzyme.shallow)(_react2.default.createElement(_CheckboxSelectOption.CheckboxSelectOption, {
          isDisabled: true,
          value: "test",
          sendRef: jest.fn()
        }));
        expect(view).toMatchSnapshot();
      });
    });
  });
});
//# sourceMappingURL=CheckboxSelectOption.test.js.map