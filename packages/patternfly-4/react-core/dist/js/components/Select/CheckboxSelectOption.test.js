"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _CheckboxSelectOption = require("./CheckboxSelectOption");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('checkbox select options', function () {
  test('renders with value parameter successfully', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_CheckboxSelectOption.CheckboxSelectOption, {
      value: "test",
      sendRef: jest.fn()
    }));
    expect(view).toMatchSnapshot();
  });
  test('renders with children successfully', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_CheckboxSelectOption.CheckboxSelectOption, {
      value: "test",
      sendRef: jest.fn()
    }, _react["default"].createElement("div", null, "test")));
    expect(view).toMatchSnapshot();
  });
  describe('hover', function () {
    test('renders with checked successfully', function () {
      var view = (0, _enzyme.shallow)(_react["default"].createElement(_CheckboxSelectOption.CheckboxSelectOption, {
        isChecked: true,
        value: "test",
        sendRef: jest.fn()
      }));
      expect(view).toMatchSnapshot();
    });
  });
  describe('disabled', function () {
    test('renders disabled successfully', function () {
      var view = (0, _enzyme.shallow)(_react["default"].createElement(_CheckboxSelectOption.CheckboxSelectOption, {
        isDisabled: true,
        value: "test",
        sendRef: jest.fn()
      }));
      expect(view).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=CheckboxSelectOption.test.js.map