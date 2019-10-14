"use strict";

var _react = _interopRequireDefault(require("react"));

var _CardFooter = require("./CardFooter");

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('renders with PatternFly Core styles', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_CardFooter.CardFooter, null));
  expect(view).toMatchSnapshot();
});
test('className is added to the root element', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_CardFooter.CardFooter, {
    className: "extra-class"
  }));
  expect(view.prop('className')).toMatchSnapshot();
});
test('extra props are spread to the root element', function () {
  var testId = 'card-footer';
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_CardFooter.CardFooter, {
    "data-testid": testId
  }));
  expect(view.prop('data-testid')).toBe(testId);
});
test('allows passing in a string as the component', function () {
  var component = 'div';
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_CardFooter.CardFooter, {
    component: component
  }));
  expect(view.type()).toBe(component);
});
test('allows passing in a React Component as the component', function () {
  var Component = function Component() {
    return _react["default"].createElement("div", null, "im a div");
  };

  var view = (0, _enzyme.shallow)(_react["default"].createElement(_CardFooter.CardFooter, {
    component: Component
  }));
  expect(view.type()).toBe(Component);
});
//# sourceMappingURL=CardFooter.test.js.map