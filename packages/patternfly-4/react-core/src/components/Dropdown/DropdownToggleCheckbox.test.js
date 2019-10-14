"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var DropdownToggleCheckbox_1 = require("./DropdownToggleCheckbox");
var props = {
    onChange: jest.fn(),
    isChecked: false
};
test('controlled', function () {
    var view = enzyme_1.shallow(<DropdownToggleCheckbox_1.DropdownToggleCheckbox isChecked id="check" aria-label="check"/>);
    expect(view).toMatchSnapshot();
});
test('uncontrolled', function () {
    var view = enzyme_1.shallow(<DropdownToggleCheckbox_1.DropdownToggleCheckbox id="check" aria-label="check"/>);
    expect(view).toMatchSnapshot();
});
test('with text', function () {
    var view = enzyme_1.shallow(<DropdownToggleCheckbox_1.DropdownToggleCheckbox id="check" isDisabled aria-label="check">Some text</DropdownToggleCheckbox_1.DropdownToggleCheckbox>);
    expect(view).toMatchSnapshot();
});
test('isDisabled', function () {
    var view = enzyme_1.shallow(<DropdownToggleCheckbox_1.DropdownToggleCheckbox id="check" isDisabled aria-label="check"/>);
    expect(view).toMatchSnapshot();
});
test('3rd state', function () {
    var view = enzyme_1.shallow(<DropdownToggleCheckbox_1.DropdownToggleCheckbox id="check" isChecked={null} aria-label="check"/>);
    expect(view).toMatchSnapshot();
});
test('passing class', function () {
    var view = enzyme_1.shallow(<DropdownToggleCheckbox_1.DropdownToggleCheckbox label="label" className="class-123" id="check" isChecked aria-label="check"/>);
    expect(view).toMatchSnapshot();
});
test('passing HTML attribute', function () {
    var view = enzyme_1.shallow(<DropdownToggleCheckbox_1.DropdownToggleCheckbox label="label" aria-labelledby="labelId" id="check" isChecked aria-label="check"/>);
    expect(view).toMatchSnapshot();
});
test('checkbox passes value and event to onChange handler', function () {
    var newValue = true;
    var event = {
        target: { checked: newValue }
    };
    var view = enzyme_1.mount(<DropdownToggleCheckbox_1.DropdownToggleCheckbox id="check" {...props} aria-label="check"/>);
    view.find('input').simulate('change', event);
    expect(props.onChange.mock.calls[0][0]).toBe(newValue);
    expect(props.onChange.mock.calls[0][1]).toMatchObject(event);
});
