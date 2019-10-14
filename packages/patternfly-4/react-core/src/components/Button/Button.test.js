"use strict";
exports.__esModule = true;
var Button_1 = require("./Button");
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var react_icons_1 = require("@patternfly/react-icons");
Object.values(Button_1.ButtonVariant).forEach(function (variant) {
    test(variant + " button", function () {
        var view = enzyme_1.mount(<Button_1.Button variant={variant} aria-label={variant}>
        {variant} Button
      </Button_1.Button>);
        expect(view).toMatchSnapshot();
    });
});
test('it adds an aria-label to plain buttons', function () {
    var label = 'aria-label test';
    var view = enzyme_1.mount(<Button_1.Button aria-label={label}/>);
    expect(view.find('button').props()['aria-label']).toBe(label);
});
test('link with icon', function () {
    var view = enzyme_1.mount(<Button_1.Button variant={Button_1.ButtonVariant.link} icon={<react_icons_1.CartArrowDownIcon />}>
      Block Button
    </Button_1.Button>);
    expect(view).toMatchSnapshot();
});
test('isBlock', function () {
    var view = enzyme_1.mount(<Button_1.Button isBlock>Block Button</Button_1.Button>);
    expect(view).toMatchSnapshot();
});
test('isDisabled', function () {
    var view = enzyme_1.mount(<Button_1.Button isDisabled>Disabled Button</Button_1.Button>);
    expect(view).toMatchSnapshot();
});
test('isFocus', function () {
    var view = enzyme_1.mount(<Button_1.Button isFocus>Focused Button</Button_1.Button>);
    expect(view).toMatchSnapshot();
});
test('isHover', function () {
    var view = enzyme_1.mount(<Button_1.Button isHover>Hovered Button</Button_1.Button>);
    expect(view).toMatchSnapshot();
});
test('isInline', function () {
    var view = enzyme_1.mount(<Button_1.Button variant={Button_1.ButtonVariant.link} isInline>
      Hovered Button
    </Button_1.Button>);
    expect(view).toMatchSnapshot();
});
test('allows passing in a string as the component', function () {
    var component = 'a';
    var view = enzyme_1.mount(<Button_1.Button component={component}/>);
    expect(view.find(component).type()).toBe(component);
});
test('allows passing in a React Component as the component', function () {
    var Component = function () { return <div>im a div</div>; };
    var view = enzyme_1.mount(<Button_1.Button component={Component}/>);
    expect(view.find(Component).type()).toBe(Component);
});
test('aria-disabled is set to true and tabIndex to -1 if component is not a button and is disabled', function () {
    var view = enzyme_1.mount(<Button_1.Button component="a" isDisabled>
      Disabled Anchor Button
    </Button_1.Button>);
    expect(view).toMatchSnapshot();
});
