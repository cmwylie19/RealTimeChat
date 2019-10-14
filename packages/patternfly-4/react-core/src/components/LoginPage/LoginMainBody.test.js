"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var LoginMainBody_1 = require("./LoginMainBody");
test('renders with PatternFly Core styles', function () {
    var view = enzyme_1.shallow(<LoginMainBody_1.LoginMainBody />);
    expect(view).toMatchSnapshot();
});
test('className is added to the root element', function () {
    var view = enzyme_1.shallow(<LoginMainBody_1.LoginMainBody className="extra-class"/>);
    expect(view.prop('className')).toMatchSnapshot();
});
test('extra props are spread to the root element', function () {
    var testId = 'login-body';
    var view = enzyme_1.shallow(<LoginMainBody_1.LoginMainBody data-testid={testId}/>);
    expect(view.prop('data-testid')).toBe(testId);
});
