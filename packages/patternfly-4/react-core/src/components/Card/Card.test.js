"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Card_1 = require("./Card");
var enzyme_1 = require("enzyme");
test('renders with PatternFly Core styles', function () {
    var view = enzyme_1.shallow(<Card_1.Card />);
    expect(view).toMatchSnapshot();
});
test('className is added to the root element', function () {
    var view = enzyme_1.shallow(<Card_1.Card className="extra-class"/>);
    expect(view.prop('className')).toMatchSnapshot();
});
test('extra props are spread to the root element', function () {
    var testId = 'card';
    var view = enzyme_1.shallow(<Card_1.Card data-testid={testId}/>);
    expect(view.prop('data-testid')).toBe(testId);
});
test('allows passing in a string as the component', function () {
    var component = 'section';
    var view = enzyme_1.shallow(<Card_1.Card component={component}/>);
    expect(view.type()).toBe(component);
});
test('allows passing in a React Component as the component', function () {
    var Component = function () { return <div>im a div</div>; };
    var view = enzyme_1.shallow(<Card_1.Card component={Component}/>);
    expect(view.type()).toBe(Component);
});
test('card with isHoverable applied ', function () {
    var view = enzyme_1.shallow(<Card_1.Card isHoverable/>);
    expect(view).toMatchSnapshot();
});
test('card with isCompact applied ', function () {
    var view = enzyme_1.shallow(<Card_1.Card isCompact/>);
    expect(view).toMatchSnapshot();
});
