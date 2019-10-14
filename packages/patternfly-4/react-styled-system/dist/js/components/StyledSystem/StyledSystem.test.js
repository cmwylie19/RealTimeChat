"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _StyledBox = _interopRequireDefault(require("./StyledBox"));

var _StyledFlex = _interopRequireDefault(require("./StyledFlex"));

var _StyledText = _interopRequireDefault(require("./StyledText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var props = {
  m: 'md',
  p: 'lg',
  fontSize: 'md',
  fontFamily: 'monospace',
  bg: 'dark_100',
  color: 'light_100'
};
test('StyledBox test', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_StyledBox["default"], props, "Styled Box")); // Add a useful assertion here.

  expect(view).toMatchSnapshot();
});
test('StyledFlex test', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_StyledFlex["default"], props, "Styled Flex")); // Add a useful assertion here.

  expect(view).toMatchSnapshot();
});
test('StyledText test', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_StyledText["default"], props, "Styled Text")); // Add a useful assertion here.

  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=StyledSystem.test.js.map