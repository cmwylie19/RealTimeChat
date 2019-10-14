"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CardFooter_1 = require("./CardFooter");
var enzyme_1 = require("enzyme");
test('renders with PatternFly Core styles', function () {
    var view = enzyme_1.shallow(<CardFooter_1.CardFooter />);
    expect(view).toMatchSnapshot();
});
test('className is added to the root element', function () {
    var view = enzyme_1.shallow(<CardFooter_1.CardFooter className="extra-class"/>);
    expect(view.prop('className')).toMatchSnapshot();
});
test('extra props are spread to the root element', function () {
    var testId = 'card-footer';
    var view = enzyme_1.shallow(<CardFooter_1.CardFooter data-testid={testId}/>);
    expect(view.prop('data-testid')).toBe(testId);
});
test('allows passing in a string as the component', function () {
    var component = 'div';
    var view = enzyme_1.shallow(<CardFooter_1.CardFooter component={component}/>);
    expect(view.type()).toBe(component);
});
test('allows passing in a React Component as the component', function () {
    var Component = function () { return <div>im a div</div>; };
    var view = enzyme_1.shallow(<CardFooter_1.CardFooter component={Component}/>);
    expect(view.type()).toBe(Component);
});
