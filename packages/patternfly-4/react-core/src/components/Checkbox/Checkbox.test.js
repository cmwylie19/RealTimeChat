"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var Checkbox_1 = require("./Checkbox");
var props = {
    onChange: jest.fn(),
    isChecked: false
};
test('controlled', function () {
    var view = enzyme_1.shallow(<Checkbox_1.Checkbox isChecked id="check" aria-label="check"/>);
    expect(view).toMatchSnapshot();
});
test('controlled - 3rd state', function () {
    var view = enzyme_1.shallow(<Checkbox_1.Checkbox isChecked={null} id="check" aria-label="check"/>);
    expect(view).toMatchSnapshot();
});
test('uncontrolled', function () {
    var view = enzyme_1.shallow(<Checkbox_1.Checkbox id="check" aria-label="check"/>);
    expect(view).toMatchSnapshot();
});
test('isDisabled', function () {
    var view = enzyme_1.shallow(<Checkbox_1.Checkbox id="check" isDisabled aria-label="check"/>);
    expect(view).toMatchSnapshot();
});
test('label is string', function () {
    var view = enzyme_1.shallow(<Checkbox_1.Checkbox label="Label" id="check" isChecked aria-label="check"/>);
    expect(view).toMatchSnapshot();
});
test('label is function', function () {
    var functionLabel = function () { return <h1>Header</h1>; };
    var view = enzyme_1.shallow(<Checkbox_1.Checkbox label={functionLabel()} id="check" isChecked aria-label="check"/>);
    expect(view).toMatchSnapshot();
});
test('label is node', function () {
    var view = enzyme_1.shallow(<Checkbox_1.Checkbox label={<h1>Header</h1>} id="check" isChecked aria-label="check"/>);
    expect(view).toMatchSnapshot();
});
test('passing class', function () {
    var view = enzyme_1.shallow(<Checkbox_1.Checkbox label="label" className="class-123" id="check" isChecked aria-label="check"/>);
    expect(view).toMatchSnapshot();
});
test('passing HTML attribute', function () {
    var view = enzyme_1.shallow(<Checkbox_1.Checkbox label="label" aria-labelledby="labelId" id="check" isChecked aria-label="check"/>);
    expect(view).toMatchSnapshot();
});
test('checkbox passes value and event to onChange handler', function () {
    var newValue = true;
    var event = {
        currentTarget: { checked: newValue }
    };
    var view = enzyme_1.shallow(<Checkbox_1.Checkbox id="check" {...props} aria-label="check"/>);
    view.find('input').simulate('change', event);
    expect(props.onChange).toBeCalledWith(newValue, event);
});
