"use strict";
exports.__esModule = true;
var React = require("react");
var Breadcrumb_1 = require("./Breadcrumb");
var BreadcrumbItem_1 = require("./BreadcrumbItem");
var enzyme_1 = require("enzyme");
describe('Breadcrumb component', function () {
    test('should render default breadcrumb', function () {
        var view = enzyme_1.shallow(<Breadcrumb_1.Breadcrumb />);
        expect(view).toMatchSnapshot();
    });
    test('should render breadcrumb with className', function () {
        var view = enzyme_1.shallow(<Breadcrumb_1.Breadcrumb className="className"/>);
        expect(view).toMatchSnapshot();
    });
    test('should render breadcrumb with aria-label', function () {
        var view = enzyme_1.shallow(<Breadcrumb_1.Breadcrumb aria-label="custom label"/>);
        expect(view).toMatchSnapshot();
    });
    test('should render breadcrumb with children', function () {
        var view = enzyme_1.shallow(<Breadcrumb_1.Breadcrumb>
        <BreadcrumbItem_1.BreadcrumbItem to="#">Item 1</BreadcrumbItem_1.BreadcrumbItem> <BreadcrumbItem_1.BreadcrumbItem to="#">Item 1</BreadcrumbItem_1.BreadcrumbItem>
      </Breadcrumb_1.Breadcrumb>);
        expect(view).toMatchSnapshot();
    });
});
