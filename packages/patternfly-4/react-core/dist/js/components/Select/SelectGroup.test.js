"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SelectGroup = require("./SelectGroup");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('select group', function () {
  test('renders with children successfully', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_SelectGroup.SelectGroup, {
      label: "test"
    }, _react["default"].createElement("div", null, "child")));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=SelectGroup.test.js.map