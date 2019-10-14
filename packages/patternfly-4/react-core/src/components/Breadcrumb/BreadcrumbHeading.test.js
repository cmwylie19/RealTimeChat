"use strict";
exports.__esModule = true;
var React = require("react");
var BreadcrumbHeading_1 = require("./BreadcrumbHeading");
var enzyme_1 = require("enzyme");
describe('BreadcrumbHeading component', function () {
    test('should render default breadcrumbHeading', function () {
        var view = enzyme_1.shallow(<BreadcrumbHeading_1.BreadcrumbHeading>Item</BreadcrumbHeading_1.BreadcrumbHeading>);
        expect(view).toMatchSnapshot();
    });
    test('should pass classname', function () {
        var view = enzyme_1.shallow(<BreadcrumbHeading_1.BreadcrumbHeading className="Class">Item</BreadcrumbHeading_1.BreadcrumbHeading>);
        expect(view).toMatchSnapshot();
    });
    test('should pass custom id', function () {
        var view = enzyme_1.shallow(<BreadcrumbHeading_1.BreadcrumbHeading id="Id">Item</BreadcrumbHeading_1.BreadcrumbHeading>);
        expect(view).toMatchSnapshot();
    });
    test('should render link breadcrumbTitle', function () {
        var view = enzyme_1.shallow(<BreadcrumbHeading_1.BreadcrumbHeading to="/somewhere">Item</BreadcrumbHeading_1.BreadcrumbHeading>);
        expect(view).toMatchSnapshot();
    });
    test('should render breadcrumbHeading with target', function () {
        var view = enzyme_1.shallow(<BreadcrumbHeading_1.BreadcrumbHeading to="#here" target="_blank">
        Item
      </BreadcrumbHeading_1.BreadcrumbHeading>);
        expect(view).toMatchSnapshot();
    });
});
