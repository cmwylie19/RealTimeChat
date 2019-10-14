"use strict";

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _Checkbox = require("./Checkbox");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var props = {
  onChange: jest.fn(),
  isChecked: false
};
test('controlled', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_Checkbox.Checkbox, {
    isChecked: true,
    id: "check",
    "aria-label": "check"
  }));
  expect(view).toMatchSnapshot();
});
test('controlled - 3rd state', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_Checkbox.Checkbox, {
    isChecked: null,
    id: "check",
    "aria-label": "check"
  }));
  expect(view).toMatchSnapshot();
});
test('uncontrolled', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_Checkbox.Checkbox, {
    id: "check",
    "aria-label": "check"
  }));
  expect(view).toMatchSnapshot();
});
test('isDisabled', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_Checkbox.Checkbox, {
    id: "check",
    isDisabled: true,
    "aria-label": "check"
  }));
  expect(view).toMatchSnapshot();
});
test('label is string', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_Checkbox.Checkbox, {
    label: "Label",
    id: "check",
    isChecked: true,
    "aria-label": "check"
  }));
  expect(view).toMatchSnapshot();
});
test('label is function', function () {
  var functionLabel = function functionLabel() {
    return React.createElement("h1", null, "Header");
  };

  var view = (0, _enzyme.shallow)(React.createElement(_Checkbox.Checkbox, {
    label: functionLabel(),
    id: "check",
    isChecked: true,
    "aria-label": "check"
  }));
  expect(view).toMatchSnapshot();
});
test('label is node', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_Checkbox.Checkbox, {
    label: React.createElement("h1", null, "Header"),
    id: "check",
    isChecked: true,
    "aria-label": "check"
  }));
  expect(view).toMatchSnapshot();
});
test('passing class', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_Checkbox.Checkbox, {
    label: "label",
    className: "class-123",
    id: "check",
    isChecked: true,
    "aria-label": "check"
  }));
  expect(view).toMatchSnapshot();
});
test('passing HTML attribute', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_Checkbox.Checkbox, {
    label: "label",
    "aria-labelledby": "labelId",
    id: "check",
    isChecked: true,
    "aria-label": "check"
  }));
  expect(view).toMatchSnapshot();
});
test('checkbox passes value and event to onChange handler', function () {
  var newValue = true;
  var event = {
    currentTarget: {
      checked: newValue
    }
  };
  var view = (0, _enzyme.shallow)(React.createElement(_Checkbox.Checkbox, _extends({
    id: "check"
  }, props, {
    "aria-label": "check"
  })));
  view.find('input').simulate('change', event);
  expect(props.onChange).toBeCalledWith(newValue, event);
});
//# sourceMappingURL=Checkbox.test.js.map