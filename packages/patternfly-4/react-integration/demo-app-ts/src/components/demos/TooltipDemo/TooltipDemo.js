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
var TooltipDemo = /** @class */ (function (_super) {
    __extends(TooltipDemo, _super);
    function TooltipDemo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.myTooltipProps = {
            content: <div>World</div>,
            children: <div id="tooltipTarget">Hello</div>
        };
        return _this;
    }
    TooltipDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    TooltipDemo.prototype.render = function () {
        return (<react_core_1.Tooltip content={this.myTooltipProps.content}>
        {this.myTooltipProps.children}
      </react_core_1.Tooltip>);
    };
    return TooltipDemo;
}(react_1.Component));
exports.TooltipDemo = TooltipDemo;
