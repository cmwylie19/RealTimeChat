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
var SplitDemo = /** @class */ (function (_super) {
    __extends(SplitDemo, _super);
    function SplitDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SplitDemo.prototype.render = function () {
        return (<react_core_1.Split gutter="md" component="article">
        <react_core_1.SplitItem>content</react_core_1.SplitItem>
        <react_core_1.SplitItem isFilled>pf-m-fill</react_core_1.SplitItem>
        <react_core_1.SplitItem>content</react_core_1.SplitItem>
      </react_core_1.Split>);
    };
    return SplitDemo;
}(react_1["default"].Component));
exports.SplitDemo = SplitDemo;
