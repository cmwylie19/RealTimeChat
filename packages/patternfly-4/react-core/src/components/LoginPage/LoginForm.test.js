"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var LoginForm_1 = require("./LoginForm");
test('should render Login form', function () {
    var view = enzyme_1.shallow(<LoginForm_1.LoginForm />);
    expect(view).toMatchSnapshot();
});
test('should call onChangeUsername callback', function () {
    var mockFn = jest.fn();
    var view = enzyme_1.shallow(<LoginForm_1.LoginForm onChangeUsername={mockFn} rememberMeLabel="Login Form"/>);
    view.find('#pf-login-username-id').simulate('change');
    expect(mockFn).toHaveBeenCalled();
});
test('should call onChangePassword callback', function () {
    var mockFn = jest.fn();
    var view = enzyme_1.shallow(<LoginForm_1.LoginForm onChangePassword={mockFn} rememberMeLabel="Login Form"/>);
    view.find('#pf-login-password-id').simulate('change');
    expect(mockFn).toHaveBeenCalled();
});
test('should call onChangeRememberMe callback', function () {
    var mockFn = jest.fn();
    var view = enzyme_1.shallow(<LoginForm_1.LoginForm onChangeRememberMe={mockFn} rememberMeLabel="Login Form"/>);
    view.find('#pf-login-remember-me-id').simulate('change');
    expect(mockFn).toHaveBeenCalled();
});
test('LoginForm with rememberMeLabel', function () {
    var view = enzyme_1.shallow(<LoginForm_1.LoginForm rememberMeLabel="remember me"/>);
    expect(view).toMatchSnapshot();
});
test('LoginForm with rememberMeLabel and rememberMeAriaLabel uses the rememberMeAriaLabel', function () {
    var view = enzyme_1.shallow(<LoginForm_1.LoginForm rememberMeAriaLabel="ARIA remember me" rememberMeLabel="remember me"/>);
    expect(view).toMatchSnapshot();
});
