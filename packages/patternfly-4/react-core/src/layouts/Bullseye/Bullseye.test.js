"use strict";
exports.__esModule = true;
var React = require("react");
var Bullseye_1 = require("./Bullseye");
var enzyme_1 = require("enzyme");
test('renders with PatternFly Core styles', function () {
    var view = enzyme_1.shallow(<Bullseye_1.Bullseye />);
    expect(view).toMatchSnapshot();
});
test('className is added to the root element', function () {
    var view = enzyme_1.shallow(<Bullseye_1.Bullseye className="extra-class"/>);
    expect(view.prop('className')).toMatchSnapshot();
});
test('extra props are spread to the root element', function () {
    var testId = 'bullseye';
    var view = enzyme_1.shallow(<Bullseye_1.Bullseye data-testid={testId}/>);
    expect(view.prop('data-testid')).toBe(testId);
});
test('allows passing in a string as the component', function () {
    var component = 'div';
    var view = enzyme_1.shallow(<Bullseye_1.Bullseye component={component}/>);
    expect(view.type()).toBe(component);
});
test('allows passing in a React Component as the component', function () {
    var Component = function () { return null; };
    var view = enzyme_1.shallow(<Bullseye_1.Bullseye component={Component}/>);
    expect(view.type()).toBe(Component);
});
