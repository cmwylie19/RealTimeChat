"use strict";
exports.__esModule = true;
var React = require("react");
var BreadcrumbItem_1 = require("./BreadcrumbItem");
var enzyme_1 = require("enzyme");
describe('BreadcrumbItem component', function () {
    test('should render default breadcrumbItem', function () {
        var view = enzyme_1.shallow(<BreadcrumbItem_1.BreadcrumbItem>Item</BreadcrumbItem_1.BreadcrumbItem>);
        expect(view).toMatchSnapshot();
    });
    test('should render breadcrumbItem with className', function () {
        var view = enzyme_1.shallow(<BreadcrumbItem_1.BreadcrumbItem className="Class">Item</BreadcrumbItem_1.BreadcrumbItem>);
        expect(view).toMatchSnapshot();
    });
    test('should render breadcrumbItem with id', function () {
        var view = enzyme_1.shallow(<BreadcrumbItem_1.BreadcrumbItem id="Item 1">Item</BreadcrumbItem_1.BreadcrumbItem>);
        expect(view).toMatchSnapshot();
    });
    test('should render active breadcrumbItem', function () {
        var view = enzyme_1.shallow(<BreadcrumbItem_1.BreadcrumbItem isActive>Item</BreadcrumbItem_1.BreadcrumbItem>);
        expect(view).toMatchSnapshot();
    });
    test('should render link breadcrumbItem', function () {
        var view = enzyme_1.shallow(<BreadcrumbItem_1.BreadcrumbItem to="/somewhere">Item</BreadcrumbItem_1.BreadcrumbItem>);
        expect(view).toMatchSnapshot();
    });
    test('should render breadcrumbItem with target', function () {
        var view = enzyme_1.shallow(<BreadcrumbItem_1.BreadcrumbItem target="/somewhere">Item</BreadcrumbItem_1.BreadcrumbItem>);
        expect(view).toMatchSnapshot();
    });
    test('should render breadcrumbItem with custom element', function () {
        var view = enzyme_1.shallow(<BreadcrumbItem_1.BreadcrumbItem>
        <h1>Header</h1>
      </BreadcrumbItem_1.BreadcrumbItem>);
        expect(view).toMatchSnapshot();
    });
});
