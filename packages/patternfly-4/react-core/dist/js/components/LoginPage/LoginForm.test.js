"use strict";

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _LoginForm = require("./LoginForm");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

test('should render Login form', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_LoginForm.LoginForm, null));
  expect(view).toMatchSnapshot();
});
test('should call onChangeUsername callback', function () {
  var mockFn = jest.fn();
  var view = (0, _enzyme.shallow)(React.createElement(_LoginForm.LoginForm, {
    onChangeUsername: mockFn,
    rememberMeLabel: "Login Form"
  }));
  view.find('#pf-login-username-id').simulate('change');
  expect(mockFn).toHaveBeenCalled();
});
test('should call onChangePassword callback', function () {
  var mockFn = jest.fn();
  var view = (0, _enzyme.shallow)(React.createElement(_LoginForm.LoginForm, {
    onChangePassword: mockFn,
    rememberMeLabel: "Login Form"
  }));
  view.find('#pf-login-password-id').simulate('change');
  expect(mockFn).toHaveBeenCalled();
});
test('should call onChangeRememberMe callback', function () {
  var mockFn = jest.fn();
  var view = (0, _enzyme.shallow)(React.createElement(_LoginForm.LoginForm, {
    onChangeRememberMe: mockFn,
    rememberMeLabel: "Login Form"
  }));
  view.find('#pf-login-remember-me-id').simulate('change');
  expect(mockFn).toHaveBeenCalled();
});
test('LoginForm with rememberMeLabel', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_LoginForm.LoginForm, {
    rememberMeLabel: "remember me"
  }));
  expect(view).toMatchSnapshot();
});
test('LoginForm with rememberMeLabel and rememberMeAriaLabel uses the rememberMeAriaLabel', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_LoginForm.LoginForm, {
    rememberMeAriaLabel: "ARIA remember me",
    rememberMeLabel: "remember me"
  }));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=LoginForm.test.js.map