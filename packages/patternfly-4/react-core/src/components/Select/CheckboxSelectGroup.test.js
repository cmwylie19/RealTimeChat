"use strict";
exports.__esModule = true;
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var CheckboxSelectGroup_1 = require("./CheckboxSelectGroup");
describe('checkbox select options', function () {
    test('renders with children successfully', function () {
        var view = enzyme_1.shallow(<CheckboxSelectGroup_1.CheckboxSelectGroup label="test">
        <div>child</div>
      </CheckboxSelectGroup_1.CheckboxSelectGroup>);
        expect(view).toMatchSnapshot();
    });
});
