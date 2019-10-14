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
var LabelDemo = /** @class */ (function (_super) {
    __extends(LabelDemo, _super);
    function LabelDemo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.myLabelProps = {
            isCompact: true,
            children: 'Compact label'
        };
        return _this;
    }
    LabelDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    LabelDemo.prototype.render = function () {
        return (<react_1["default"].Fragment>
       <react_core_1.Label>Default label</react_core_1.Label>
       <react_core_1.Label isCompact={this.myLabelProps.isCompact}>{this.myLabelProps.children}</react_core_1.Label>
     </react_1["default"].Fragment>);
    };
    return LabelDemo;
}(react_1.Component));
exports.LabelDemo = LabelDemo;
exports["default"] = LabelDemo;
