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
var GridDemo = /** @class */ (function (_super) {
    __extends(GridDemo, _super);
    function GridDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GridDemo.prototype.render = function () {
        return (<react_core_1.Grid>
        <react_core_1.GridItem span={8}>span = 8</react_core_1.GridItem>
        <react_core_1.GridItem span={4} rowSpan={2}>
          span = 4, rowSpan = 2
        </react_core_1.GridItem>
        <react_core_1.GridItem span={2} rowSpan={3}>
          span = 2, rowSpan = 3
        </react_core_1.GridItem>
        <react_core_1.GridItem span={2}>span = 2</react_core_1.GridItem>
        <react_core_1.GridItem span={4}>span = 4</react_core_1.GridItem>
        <react_core_1.GridItem span={2}>span = 2</react_core_1.GridItem>
        <react_core_1.GridItem span={2}>span = 2</react_core_1.GridItem>
        <react_core_1.GridItem span={2}>span = 2</react_core_1.GridItem>
        <react_core_1.GridItem span={4}>span = 4</react_core_1.GridItem>
        <react_core_1.GridItem span={2}>span = 2</react_core_1.GridItem>
        <react_core_1.GridItem span={4}>span = 4</react_core_1.GridItem>
        <react_core_1.GridItem span={4}>span = 4</react_core_1.GridItem>
      </react_core_1.Grid>);
    };
    return GridDemo;
}(react_1["default"].Component));
exports.GridDemo = GridDemo;
