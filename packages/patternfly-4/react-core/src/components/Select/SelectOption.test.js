"use strict";
exports.__esModule = true;
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var SelectOption_1 = require("./SelectOption");
var selectConstants_1 = require("./selectConstants");
var User = /** @class */ (function () {
    function User(title, firstName, lastName) {
        var _this = this;
        this.toString = function () { return _this.title + ": " + _this.firstName + " " + _this.lastName; };
        this.title = title;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return User;
}());
describe('select options', function () {
    test('renders with value parameter successfully', function () {
        var view = enzyme_1.mount(<selectConstants_1.SelectProvider value={{ onSelect: function () { }, onClose: function () { }, variant: 'single' }}>
        <SelectOption_1.SelectOption value="test" sendRef={jest.fn()}/>
      </selectConstants_1.SelectProvider>);
        expect(view.instance().props).toHaveProperty('value', 'test');
        expect(view).toMatchSnapshot();
    });
    test('renders with custom display successfully', function () {
        var view = enzyme_1.mount(<selectConstants_1.SelectProvider value={{ onSelect: function () { }, onClose: function () { }, variant: 'single' }}>
        <SelectOption_1.SelectOption value="test" sendRef={jest.fn()}>
          <div>test display</div>
        </SelectOption_1.SelectOption>
      </selectConstants_1.SelectProvider>);
        expect(view).toMatchSnapshot();
    });
    test('renders with custom user object successfully', function () {
        var view = enzyme_1.mount(<selectConstants_1.SelectProvider value={{ onSelect: function () { }, onClose: function () { }, variant: 'single' }}>
        <SelectOption_1.SelectOption value={new User('Mr.', 'Test', 'User')} sendRef={jest.fn()}/>
      </selectConstants_1.SelectProvider>);
        expect(view).toMatchSnapshot();
    });
    test('renders with custom display and custom user object successfully', function () {
        var view = enzyme_1.mount(<selectConstants_1.SelectProvider value={{ onSelect: function () { }, onClose: function () { }, variant: 'single' }}>
        <SelectOption_1.SelectOption value={new User('Mr.', 'Test', 'User')} sendRef={jest.fn()}>
          <div>test display</div>
        </SelectOption_1.SelectOption>
      </selectConstants_1.SelectProvider>);
        expect(view).toMatchSnapshot();
    });
    describe('disabled', function () {
        test('renders disabled successfully', function () {
            var view = enzyme_1.mount(<selectConstants_1.SelectProvider value={{ onSelect: function () { }, onClose: function () { }, variant: 'single' }}>
          <SelectOption_1.SelectOption isDisabled value="test" sendRef={jest.fn()}/>
        </selectConstants_1.SelectProvider>);
            expect(view.find('button').hasClass('pf-m-disabled')).toBe(true);
            expect(view).toMatchSnapshot();
        });
    });
    describe('is selected', function () {
        test('renders selected successfully', function () {
            var view = enzyme_1.shallow(<SelectOption_1.SelectOption isSelected value="test" sendRef={jest.fn()}/>);
            expect(view).toMatchSnapshot();
        });
    });
    describe('checked', function () {
        test('renders with checked successfully', function () {
            var view = enzyme_1.shallow(<SelectOption_1.SelectOption isChecked value="test" sendRef={jest.fn()}/>);
            expect(view).toMatchSnapshot();
        });
    });
});
