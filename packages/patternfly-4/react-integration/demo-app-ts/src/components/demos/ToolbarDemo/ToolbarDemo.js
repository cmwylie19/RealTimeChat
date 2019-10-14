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
var ToolbarDemo = /** @class */ (function (_super) {
    __extends(ToolbarDemo, _super);
    function ToolbarDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToolbarDemo.prototype.render = function () {
        return (<react_core_1.Toolbar>
        <react_core_1.ToolbarSection aria-label="First section">
          <react_core_1.ToolbarGroup>
            <react_core_1.ToolbarItem>Item 1</react_core_1.ToolbarItem>
          </react_core_1.ToolbarGroup>
          <react_core_1.ToolbarGroup>
            <react_core_1.ToolbarItem>Item 2</react_core_1.ToolbarItem>
            <react_core_1.ToolbarItem>Item 3</react_core_1.ToolbarItem>
          </react_core_1.ToolbarGroup>
        </react_core_1.ToolbarSection>
        <react_core_1.ToolbarSection aria-label="Second section">
          <react_core_1.ToolbarGroup>
            <react_core_1.ToolbarItem>Item 4</react_core_1.ToolbarItem>
            <react_core_1.ToolbarItem>Item 5</react_core_1.ToolbarItem>
            <react_core_1.ToolbarItem>Item 6</react_core_1.ToolbarItem>
          </react_core_1.ToolbarGroup>
          <react_core_1.ToolbarGroup>
            <react_core_1.ToolbarItem>Item 7</react_core_1.ToolbarItem>
          </react_core_1.ToolbarGroup>
        </react_core_1.ToolbarSection>
      </react_core_1.Toolbar>);
    };
    return ToolbarDemo;
}(react_1["default"].Component));
exports.ToolbarDemo = ToolbarDemo;
