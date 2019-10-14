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
var react_core_1 = require("@patternfly/react-core");
var react_1 = require("react");
var ListDemo = /** @class */ (function (_super) {
    __extends(ListDemo, _super);
    function ListDemo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.myInlineListProps = {
            variant: react_core_1.ListVariant.inline
        };
        return _this;
    }
    ListDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    ListDemo.prototype.render = function () {
        return (<react_1["default"].Fragment>
       <react_core_1.List>
        <react_core_1.ListItem>I am a plain list item</react_core_1.ListItem>
        <react_core_1.ListItem>I am a plain list item</react_core_1.ListItem>
        <react_core_1.ListItem>I am a plain list item</react_core_1.ListItem>
       </react_core_1.List>
       <react_core_1.List variant={this.myInlineListProps.variant}>
        <react_core_1.ListItem>I am an inline list item</react_core_1.ListItem>
        <react_core_1.ListItem>I am an inline list item</react_core_1.ListItem>
        <react_core_1.ListItem>I am an inline list item</react_core_1.ListItem>
       </react_core_1.List>
     </react_1["default"].Fragment>);
    };
    return ListDemo;
}(react_1.Component));
exports.ListDemo = ListDemo;
exports["default"] = ListDemo;
