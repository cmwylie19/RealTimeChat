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
var PopoverDemo = /** @class */ (function (_super) {
    __extends(PopoverDemo, _super);
    function PopoverDemo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.myPopoverProps = {
            headerContent: <div>Popover Header</div>,
            bodyContent: <div>Popover Body</div>,
            footerContent: 'Popover Footer',
            children: <div id="popoverTarget">Hello</div>
        };
        return _this;
    }
    PopoverDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    PopoverDemo.prototype.render = function () {
        return (<react_core_1.Popover headerContent={this.myPopoverProps.headerContent} bodyContent={this.myPopoverProps.bodyContent} footerContent={this.myPopoverProps.footerContent}>
      {this.myPopoverProps.children}
    </react_core_1.Popover>);
    };
    return PopoverDemo;
}(react_1.Component));
exports.PopoverDemo = PopoverDemo;
