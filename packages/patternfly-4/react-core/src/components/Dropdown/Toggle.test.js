"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var DropdownToggle_1 = require("./DropdownToggle");
var KebabToggle_1 = require("./KebabToggle");
test('Dropdown toggle', function () {
    var view = enzyme_1.mount(<DropdownToggle_1.DropdownToggle id="Dropdown Toggle">Dropdown</DropdownToggle_1.DropdownToggle>);
    expect(view).toMatchSnapshot();
});
test('Kebab toggle', function () {
    var view = enzyme_1.mount(<KebabToggle_1.KebabToggle id="Dropdown Toggle"/>);
    expect(view).toMatchSnapshot();
});
