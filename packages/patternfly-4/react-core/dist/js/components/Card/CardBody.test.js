"use strict";

var _react = _interopRequireDefault(require("react"));

var _CardBody = require("./CardBody");

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('renders with PatternFly Core styles', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_CardBody.CardBody, null));
  expect(view).toMatchSnapshot();
});
test('className is added to the root element', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_CardBody.CardBody, {
    className: "extra-class"
  }));
  expect(view.prop('className')).toMatchSnapshot();
});
test('extra props are spread to the root element', function () {
  var testId = 'card-body';
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_CardBody.CardBody, {
    "data-testid": testId
  }));
  expect(view.prop('data-testid')).toBe(testId);
});
test('allows passing in a string as the component', function () {
  var component = 'section';
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_CardBody.CardBody, {
    component: component
  }));
  expect(view.type()).toBe(component);
});
test('allows passing in a React Component as the component', function () {
  var Component = function Component() {
    return _react["default"].createElement("div", null, "im a div");
  };

  var view = (0, _enzyme.shallow)(_react["default"].createElement(_CardBody.CardBody, {
    component: Component
  }));
  expect(view.type()).toBe(Component);
});
test('body with no-fill applied ', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_CardBody.CardBody, {
    isFilled: false
  }));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=CardBody.test.js.map