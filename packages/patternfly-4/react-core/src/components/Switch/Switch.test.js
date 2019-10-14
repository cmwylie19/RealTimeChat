"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var Switch_1 = require("./Switch");
var props = {
    onChange: jest.fn(),
    isChecked: false
};
test('switch label for attribute equals input id attribute', function () {
    var view = enzyme_1.mount(<Switch_1.Switch id="foo"/>);
    expect(view.find('input').prop('id')).toBe('foo');
    expect(view.find('label').prop('htmlFor')).toBe('foo');
});
test('switch label id is auto generated', function () {
    var view = enzyme_1.mount(<Switch_1.Switch aria-label="..."/>);
    expect(view.find('input').prop('id')).toBeDefined();
});
test('switch is checked', function () {
    var view = enzyme_1.mount(<Switch_1.Switch id="switch-is-checked" label="On" labelOff="Off" isChecked/>);
    expect(view).toMatchSnapshot();
});
test('switch is not checked', function () {
    var view = enzyme_1.mount(<Switch_1.Switch id="switch-is-not-checked" label="On" labelOff="Off" isChecked={false}/>);
    expect(view).toMatchSnapshot();
});
test('switch with only label is checked', function () {
    var check = true;
    var view = enzyme_1.mount(<Switch_1.Switch id="switch-is-checked" label={check ? "On" : "Off"} isChecked={check}/>);
    expect(view).toMatchSnapshot();
});
test('switch with only label is not checked', function () {
    var check = false;
    var view = enzyme_1.mount(<Switch_1.Switch id="switch-is-not-checked" label={check ? "On" : "Off"} isChecked={check}/>);
    expect(view).toMatchSnapshot();
});
test('no label switch is checked', function () {
    var view = enzyme_1.mount(<Switch_1.Switch id="no-label-switch-is-checked" isChecked/>);
    expect(view).toMatchSnapshot();
});
test('no label switch is not checked', function () {
    var view = enzyme_1.mount(<Switch_1.Switch id="no-label-switch-is-not-checked" isChecked={false}/>);
    expect(view).toMatchSnapshot();
});
test('switch is checked and disabled', function () {
    var view = enzyme_1.mount(<Switch_1.Switch id="switch-is-checked-and-disabled" isChecked isDisabled/>);
    expect(view).toMatchSnapshot();
});
test('switch is not checked and disabled', function () {
    var view = enzyme_1.mount(<Switch_1.Switch id="switch-is-not-checked-and-disabled" isChecked={false} isDisabled/>);
    expect(view).toMatchSnapshot();
});
test('switch passes value and event to onChange handler', function () {
    var view = enzyme_1.mount(<Switch_1.Switch id="onChange-switch" {...props}/>);
    var input = view.find('input');
    expect(input.prop('defaultChecked')).toBe(false);
    input.simulate('change', { target: { checked: true } });
    expect(props.onChange.mock.calls[0][0]).toBe(true);
});
