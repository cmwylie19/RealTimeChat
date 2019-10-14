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
var StackDemo = /** @class */ (function (_super) {
    __extends(StackDemo, _super);
    function StackDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StackDemo.prototype.render = function () {
        return (<react_1["default"].Fragment>
        <react_core_1.Badge>3</react_core_1.Badge>
        <react_core_1.Badge isRead>13</react_core_1.Badge>
        <react_core_1.Stack component="article" gutter="sm">
          <react_core_1.StackItem>content</react_core_1.StackItem>
          <react_core_1.StackItem isFilled>pf-m-fill</react_core_1.StackItem>
          <react_core_1.StackItem>content</react_core_1.StackItem>
        </react_core_1.Stack>
      </react_1["default"].Fragment>);
    };
    return StackDemo;
}(react_1.Component));
exports.StackDemo = StackDemo;
