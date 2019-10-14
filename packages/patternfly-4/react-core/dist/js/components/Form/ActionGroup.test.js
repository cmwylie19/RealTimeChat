"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ActionGroup = require("./ActionGroup");

var _Form = require("./Form");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('ActionGroup component', function () {
  test('should render default action group variant', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_ActionGroup.ActionGroup, null, _react["default"].createElement("div", null, "Hello")));
    expect(view).toMatchSnapshot();
  });
  test('should render horizontal form ActionGroup variant', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Form.Form, {
      isHorizontal: true
    }, _react["default"].createElement(_ActionGroup.ActionGroup, null)));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=ActionGroup.test.js.map