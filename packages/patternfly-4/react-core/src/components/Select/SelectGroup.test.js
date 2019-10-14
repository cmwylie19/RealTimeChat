"use strict";
exports.__esModule = true;
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var SelectGroup_1 = require("./SelectGroup");
describe('select group', function () {
    test('renders with children successfully', function () {
        var view = enzyme_1.shallow(<SelectGroup_1.SelectGroup label="test">
        <div>child</div>
      </SelectGroup_1.SelectGroup>);
        expect(view).toMatchSnapshot();
    });
});
