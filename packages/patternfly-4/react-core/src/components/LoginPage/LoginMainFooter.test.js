"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var LoginMainFooter_1 = require("./LoginMainFooter");
test('renders with PatternFly Core styles', function () {
    var view = enzyme_1.shallow(<LoginMainFooter_1.LoginMainFooter />);
    expect(view).toMatchSnapshot();
});
test('className is added to the root element', function () {
    var view = enzyme_1.shallow(<LoginMainFooter_1.LoginMainFooter className="extra-class"/>);
    expect(view.prop('className')).toMatchSnapshot();
});
test('extra props are spread to the root element', function () {
    var testId = 'login-body';
    var view = enzyme_1.shallow(<LoginMainFooter_1.LoginMainFooter data-testid={testId}/>);
    expect(view.prop('data-testid')).toBe(testId);
});
