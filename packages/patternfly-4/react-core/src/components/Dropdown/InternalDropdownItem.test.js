"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var InternalDropdownItem_1 = require("./InternalDropdownItem");
var Separator_1 = require("./Separator");
describe('dropdown items', function () {
    test('a', function () {
        var view = enzyme_1.shallow(<InternalDropdownItem_1.InternalDropdownItem>Something</InternalDropdownItem_1.InternalDropdownItem>);
        expect(view).toMatchSnapshot();
    });
    test('button', function () {
        var view = enzyme_1.shallow(<InternalDropdownItem_1.InternalDropdownItem component="button">Something</InternalDropdownItem_1.InternalDropdownItem>);
        expect(view).toMatchSnapshot();
    });
    test('separator', function () {
        var view = enzyme_1.shallow(<Separator_1.DropdownSeparator />);
        expect(view).toMatchSnapshot();
    });
    describe('hover', function () {
        test('a', function () {
            var view = enzyme_1.shallow(<InternalDropdownItem_1.InternalDropdownItem isHovered>Something</InternalDropdownItem_1.InternalDropdownItem>);
            expect(view).toMatchSnapshot();
        });
        test('button', function () {
            var view = enzyme_1.shallow(<InternalDropdownItem_1.InternalDropdownItem isHovered component="button">
          Something
        </InternalDropdownItem_1.InternalDropdownItem>);
            expect(view).toMatchSnapshot();
        });
    });
    describe('disabled', function () {
        test('a', function () {
            var view = enzyme_1.shallow(<InternalDropdownItem_1.InternalDropdownItem isDisabled>Something</InternalDropdownItem_1.InternalDropdownItem>);
            expect(view).toMatchSnapshot();
        });
        test('button', function () {
            var view = enzyme_1.shallow(<InternalDropdownItem_1.InternalDropdownItem isDisabled component="button">
          Something
        </InternalDropdownItem_1.InternalDropdownItem>);
            expect(view).toMatchSnapshot();
        });
    });
});
