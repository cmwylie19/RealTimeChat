"use strict";

var _Button = require("./Button");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _reactIcons = require("@patternfly/react-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

Object.values(_Button.ButtonVariant).forEach(function (variant) {
  test("".concat(variant, " button"), function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Button.Button, {
      variant: variant,
      "aria-label": variant
    }, variant, " Button"));
    expect(view).toMatchSnapshot();
  });
});
test('it adds an aria-label to plain buttons', function () {
  var label = 'aria-label test';
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Button.Button, {
    "aria-label": label
  }));
  expect(view.find('button').props()['aria-label']).toBe(label);
});
test('link with icon', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Button.Button, {
    variant: _Button.ButtonVariant.link,
    icon: _react["default"].createElement(_reactIcons.CartArrowDownIcon, null)
  }, "Block Button"));
  expect(view).toMatchSnapshot();
});
test('isBlock', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Button.Button, {
    isBlock: true
  }, "Block Button"));
  expect(view).toMatchSnapshot();
});
test('isDisabled', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Button.Button, {
    isDisabled: true
  }, "Disabled Button"));
  expect(view).toMatchSnapshot();
});
test('isFocus', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Button.Button, {
    isFocus: true
  }, "Focused Button"));
  expect(view).toMatchSnapshot();
});
test('isHover', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Button.Button, {
    isHover: true
  }, "Hovered Button"));
  expect(view).toMatchSnapshot();
});
test('isInline', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Button.Button, {
    variant: _Button.ButtonVariant.link,
    isInline: true
  }, "Hovered Button"));
  expect(view).toMatchSnapshot();
});
test('allows passing in a string as the component', function () {
  var component = 'a';
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Button.Button, {
    component: component
  }));
  expect(view.find(component).type()).toBe(component);
});
test('allows passing in a React Component as the component', function () {
  var Component = function Component() {
    return _react["default"].createElement("div", null, "im a div");
  };

  var view = (0, _enzyme.mount)(_react["default"].createElement(_Button.Button, {
    component: Component
  }));
  expect(view.find(Component).type()).toBe(Component);
});
test('aria-disabled is set to true and tabIndex to -1 if component is not a button and is disabled', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Button.Button, {
    component: "a",
    isDisabled: true
  }, "Disabled Anchor Button"));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=Button.test.js.map