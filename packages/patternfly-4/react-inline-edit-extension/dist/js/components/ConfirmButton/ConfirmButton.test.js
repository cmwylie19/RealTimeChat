"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('it renders properly', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.ConfirmButton, null));
  expect(component).toMatchSnapshot();
});
//# sourceMappingURL=ConfirmButton.test.js.map