"use strict";

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _Switch = require("./Switch");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var props = {
  onChange: jest.fn(),
  isChecked: false
};
test('switch label for attribute equals input id attribute', function () {
  var view = (0, _enzyme.mount)(React.createElement(_Switch.Switch, {
    id: "foo"
  }));
  expect(view.find('input').prop('id')).toBe('foo');
  expect(view.find('label').prop('htmlFor')).toBe('foo');
});
test('switch label id is auto generated', function () {
  var view = (0, _enzyme.mount)(React.createElement(_Switch.Switch, {
    "aria-label": "..."
  }));
  expect(view.find('input').prop('id')).toBeDefined();
});
test('switch is checked', function () {
  var view = (0, _enzyme.mount)(React.createElement(_Switch.Switch, {
    id: "switch-is-checked",
    label: "On",
    labelOff: "Off",
    isChecked: true
  }));
  expect(view).toMatchSnapshot();
});
test('switch is not checked', function () {
  var view = (0, _enzyme.mount)(React.createElement(_Switch.Switch, {
    id: "switch-is-not-checked",
    label: "On",
    labelOff: "Off",
    isChecked: false
  }));
  expect(view).toMatchSnapshot();
});
test('switch with only label is checked', function () {
  var check = true;
  var view = (0, _enzyme.mount)(React.createElement(_Switch.Switch, {
    id: "switch-is-checked",
    label: check ? "On" : "Off",
    isChecked: check
  }));
  expect(view).toMatchSnapshot();
});
test('switch with only label is not checked', function () {
  var check = false;
  var view = (0, _enzyme.mount)(React.createElement(_Switch.Switch, {
    id: "switch-is-not-checked",
    label: check ? "On" : "Off",
    isChecked: check
  }));
  expect(view).toMatchSnapshot();
});
test('no label switch is checked', function () {
  var view = (0, _enzyme.mount)(React.createElement(_Switch.Switch, {
    id: "no-label-switch-is-checked",
    isChecked: true
  }));
  expect(view).toMatchSnapshot();
});
test('no label switch is not checked', function () {
  var view = (0, _enzyme.mount)(React.createElement(_Switch.Switch, {
    id: "no-label-switch-is-not-checked",
    isChecked: false
  }));
  expect(view).toMatchSnapshot();
});
test('switch is checked and disabled', function () {
  var view = (0, _enzyme.mount)(React.createElement(_Switch.Switch, {
    id: "switch-is-checked-and-disabled",
    isChecked: true,
    isDisabled: true
  }));
  expect(view).toMatchSnapshot();
});
test('switch is not checked and disabled', function () {
  var view = (0, _enzyme.mount)(React.createElement(_Switch.Switch, {
    id: "switch-is-not-checked-and-disabled",
    isChecked: false,
    isDisabled: true
  }));
  expect(view).toMatchSnapshot();
});
test('switch passes value and event to onChange handler', function () {
  var view = (0, _enzyme.mount)(React.createElement(_Switch.Switch, _extends({
    id: "onChange-switch"
  }, props)));
  var input = view.find('input');
  expect(input.prop('defaultChecked')).toBe(false);
  input.simulate('change', {
    target: {
      checked: true
    }
  });
  expect(props.onChange.mock.calls[0][0]).toBe(true);
});
//# sourceMappingURL=Switch.test.js.map