"use strict";

var _react = _interopRequireDefault(require("react"));

var _CardHeader = require("./CardHeader");

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('renders with PatternFly Core styles', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_CardHeader.CardHeader, null));
  expect(view).toMatchSnapshot();
});
test('className is added to the root element', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_CardHeader.CardHeader, {
    className: "extra-class"
  }));
  expect(view.prop('className')).toMatchSnapshot();
});
test('extra props are spread to the root element', function () {
  var testId = 'card-header';
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_CardHeader.CardHeader, {
    "data-testid": testId
  }));
  expect(view.prop('data-testid')).toBe(testId);
});
//# sourceMappingURL=CardHeader.test.js.map