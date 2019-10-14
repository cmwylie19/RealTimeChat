"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var DropdownGroup_1 = require("./DropdownGroup");
describe('dropdown groups', function () {
    test('basic render', function () {
        var view = enzyme_1.shallow(<DropdownGroup_1.DropdownGroup label="Group 1">Something</DropdownGroup_1.DropdownGroup>);
        expect(view).toMatchSnapshot();
    });
});
