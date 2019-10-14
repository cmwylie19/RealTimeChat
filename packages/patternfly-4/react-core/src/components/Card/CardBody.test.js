"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CardBody_1 = require("./CardBody");
var enzyme_1 = require("enzyme");
test('renders with PatternFly Core styles', function () {
    var view = enzyme_1.shallow(<CardBody_1.CardBody />);
    expect(view).toMatchSnapshot();
});
test('className is added to the root element', function () {
    var view = enzyme_1.shallow(<CardBody_1.CardBody className="extra-class"/>);
    expect(view.prop('className')).toMatchSnapshot();
});
test('extra props are spread to the root element', function () {
    var testId = 'card-body';
    var view = enzyme_1.shallow(<CardBody_1.CardBody data-testid={testId}/>);
    expect(view.prop('data-testid')).toBe(testId);
});
test('allows passing in a string as the component', function () {
    var component = 'section';
    var view = enzyme_1.shallow(<CardBody_1.CardBody component={component}/>);
    expect(view.type()).toBe(component);
});
test('allows passing in a React Component as the component', function () {
    var Component = function () { return <div>im a div</div>; };
    var view = enzyme_1.shallow(<CardBody_1.CardBody component={Component}/>);
    expect(view.type()).toBe(Component);
});
test('body with no-fill applied ', function () {
    var view = enzyme_1.shallow(<CardBody_1.CardBody isFilled={false}/>);
    expect(view).toMatchSnapshot();
});
