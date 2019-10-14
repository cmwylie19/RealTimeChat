"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _TableTextInput = _interopRequireDefault(require("./TableTextInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var props = {
  defaultValue: 'test',
  autoFocus: true,
  onBlur: jest.fn()
};
test('simple table text input', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_TableTextInput["default"], {
    "aria-label": "simple text input"
  }));
  expect(view).toMatchSnapshot();
});
test('focused table text input', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_TableTextInput["default"], _extends({}, props, {
    "aria-label": "focused text input"
  })));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=TableTextInput.test.js.map