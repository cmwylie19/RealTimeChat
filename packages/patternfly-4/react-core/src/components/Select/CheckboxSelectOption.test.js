"use strict";
exports.__esModule = true;
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var CheckboxSelectOption_1 = require("./CheckboxSelectOption");
describe('checkbox select options', function () {
    test('renders with value parameter successfully', function () {
        var view = enzyme_1.shallow(<CheckboxSelectOption_1.CheckboxSelectOption value="test" sendRef={jest.fn()}/>);
        expect(view).toMatchSnapshot();
    });
    test('renders with children successfully', function () {
        var view = enzyme_1.shallow(<CheckboxSelectOption_1.CheckboxSelectOption value="test" sendRef={jest.fn()}>
        <div>test</div>
      </CheckboxSelectOption_1.CheckboxSelectOption>);
        expect(view).toMatchSnapshot();
    });
    describe('hover', function () {
        test('renders with checked successfully', function () {
            var view = enzyme_1.shallow(<CheckboxSelectOption_1.CheckboxSelectOption isChecked value="test" sendRef={jest.fn()}/>);
            expect(view).toMatchSnapshot();
        });
    });
    describe('disabled', function () {
        test('renders disabled successfully', function () {
            var view = enzyme_1.shallow(<CheckboxSelectOption_1.CheckboxSelectOption isDisabled value="test" sendRef={jest.fn()}/>);
            expect(view).toMatchSnapshot();
        });
    });
});
