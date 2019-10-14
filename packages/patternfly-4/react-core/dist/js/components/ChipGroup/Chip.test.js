"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ChipButton = require("./ChipButton");

var _Chip = require("./Chip");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('ChipButton', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_ChipButton.ChipButton, {
    id: "my-chip-button",
    className: "chip-bttn-cls"
  }, _react["default"].createElement("b", null, "Close")));
  expect(view).toMatchSnapshot();
});
describe('Chip', function () {
  test('overflow', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_Chip.Chip, {
      className: "my-chp-cls",
      isOverflowChip: true
    }, "4 more"));
    expect(view).toMatchSnapshot();
  });
  test('closable', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_Chip.Chip, {
      className: "my-chp-cls",
      id: "chip_one"
    }, "Chip"));
    expect(view).toMatchSnapshot();
  });
  test('closable with tooltip', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_Chip.Chip, {
      className: "my-chp-cls",
      id: "chip_one"
    }, "1234567890123456789"));
    expect(view).toMatchSnapshot();
  });
  test('readonly', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_Chip.Chip, {
      className: "my-chp-cls",
      isReadOnly: true
    }, "4 more"));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=Chip.test.js.map