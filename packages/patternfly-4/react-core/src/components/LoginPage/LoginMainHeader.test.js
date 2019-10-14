"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var LoginMainHeader_1 = require("./LoginMainHeader");
test('renders with PatternFly Core styles', function () {
    var view = enzyme_1.shallow(<LoginMainHeader_1.LoginMainHeader />);
    expect(view).toMatchSnapshot();
});
test('className is added to the root element', function () {
    var view = enzyme_1.shallow(<LoginMainHeader_1.LoginMainHeader className="extra-class"/>);
    expect(view.prop('className')).toMatchSnapshot();
});
test('extra props are spread to the root element', function () {
    var testId = 'login-header';
    var view = enzyme_1.shallow(<LoginMainHeader_1.LoginMainHeader data-testid={testId}/>);
    expect(view.prop('data-testid')).toBe(testId);
});
test('title and subtitle are rendered correctly', function () {
    var view = enzyme_1.shallow(<LoginMainHeader_1.LoginMainHeader title="Log in to your account" subtitle="Use LDAP credentials"/>);
    expect(view.prop('className')).toMatchSnapshot();
});
