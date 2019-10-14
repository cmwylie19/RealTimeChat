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
var TextDemo = /** @class */ (function (_super) {
    __extends(TextDemo, _super);
    function TextDemo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.myTextProps = {
            component: react_core_1.TextVariants.h1,
            children: 'Header text'
        };
        _this.myTextListProps = {
            component: react_core_1.TextListVariants.ul
        };
        _this.myTextListItemProps = {
            component: react_core_1.TextListItemVariants.li,
            children: 'Text list item'
        };
        return _this;
    }
    TextDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    TextDemo.prototype.render = function () {
        return (<react_core_1.TextContent>
      <react_core_1.Text component={this.myTextProps.component}>{this.myTextProps.children}</react_core_1.Text>
      <react_core_1.TextList component={this.myTextListProps.component}>
        <react_core_1.TextListItem children={this.myTextListItemProps.children} component={this.myTextListItemProps.component}/>
      </react_core_1.TextList>
     </react_core_1.TextContent>);
    };
    return TextDemo;
}(react_1.Component));
exports.TextDemo = TextDemo;
exports["default"] = TextDemo;
