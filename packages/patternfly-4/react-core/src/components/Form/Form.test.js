"use strict";
exports.__esModule = true;
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var Form_1 = require("./Form");
describe('Form component', function () {
    test('should render default form variant', function () {
        var view = enzyme_1.shallow(<Form_1.Form />);
        expect(view).toMatchSnapshot();
    });
    test('should render horizontal form variant', function () {
        var view = enzyme_1.shallow(<Form_1.Form isHorizontal/>);
        expect(view).toMatchSnapshot();
    });
});
