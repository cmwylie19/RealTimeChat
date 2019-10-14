"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var react_core_1 = require("@patternfly/react-core");
var BreadcrumbDemo = /** @class */ (function (_super) {
    __extends(BreadcrumbDemo, _super);
    function BreadcrumbDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BreadcrumbDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    BreadcrumbDemo.prototype.render = function () {
        return (<react_core_1.Breadcrumb>
          <react_core_1.BreadcrumbItem to="/">Section Home</react_core_1.BreadcrumbItem>
          <react_core_1.BreadcrumbItem to="#">Section Title</react_core_1.BreadcrumbItem>
          <react_core_1.BreadcrumbItem to="#">Section Title</react_core_1.BreadcrumbItem>
          <react_core_1.BreadcrumbItem to="#">Section Title</react_core_1.BreadcrumbItem>
          <react_core_1.BreadcrumbHeading to="#">Section Title</react_core_1.BreadcrumbHeading>
      </react_core_1.Breadcrumb>);
    };
    return BreadcrumbDemo;
}(react_1["default"].Component));
exports.BreadcrumbDemo = BreadcrumbDemo;
