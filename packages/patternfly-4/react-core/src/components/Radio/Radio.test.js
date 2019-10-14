"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var Radio_1 = require("./Radio");
var props = {
    onChange: jest.fn()
};
describe('Radio check component', function () {
    test('controlled', function () {
        var view = enzyme_1.shallow(<Radio_1.Radio isChecked id="check" aria-label="check" name="check"/>);
        expect(view).toMatchSnapshot();
    });
    test('uncontrolled', function () {
        var view = enzyme_1.shallow(<Radio_1.Radio id="check" aria-label="check" name="check"/>);
        expect(view).toMatchSnapshot();
    });
    test('isDisabled', function () {
        var view = enzyme_1.shallow(<Radio_1.Radio id="check" isDisabled aria-label="check" name="check"/>);
        expect(view).toMatchSnapshot();
    });
    test('label is string', function () {
        var view = enzyme_1.shallow(<Radio_1.Radio label="Label" id="check" isChecked aria-label="check" name="check"/>);
        expect(view).toMatchSnapshot();
    });
    test('label is function', function () {
        var functionLabel = function () { return <h1>Header</h1>; };
        var view = enzyme_1.shallow(<Radio_1.Radio label={functionLabel()} id="check" isChecked aria-label="check" name="check"/>);
        expect(view).toMatchSnapshot();
    });
    test('label is node', function () {
        var view = enzyme_1.shallow(<Radio_1.Radio label={<h1>Header</h1>} id="check" isChecked aria-label="check" name="check"/>);
        expect(view).toMatchSnapshot();
    });
    test('passing class', function () {
        var view = enzyme_1.shallow(<Radio_1.Radio label="label" className="class-123" id="check" isChecked aria-label="check" name="check"/>);
        expect(view).toMatchSnapshot();
    });
    test('passing HTML attribute', function () {
        var view = enzyme_1.shallow(<Radio_1.Radio label="label" aria-labelledby="labelId" id="check" isChecked aria-label="check" name="check"/>);
        expect(view).toMatchSnapshot();
    });
    test('Radio passes value and event to onChange handler', function () {
        var newValue = true;
        var event = {
            currentTarget: { checked: newValue }
        };
        var view = enzyme_1.shallow(<Radio_1.Radio id="check" {...props} aria-label="check" name="check"/>);
        view.find('input').simulate('change', event);
        expect(props.onChange).toBeCalledWith(newValue, event);
    });
});
