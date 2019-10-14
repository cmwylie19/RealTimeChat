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
var BadgeDemo = /** @class */ (function (_super) {
    __extends(BadgeDemo, _super);
    function BadgeDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BadgeDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    BadgeDemo.prototype.render = function () {
        return (<react_1["default"].Fragment>
          <react_core_1.Badge isRead={false}>7</react_core_1.Badge>
          <react_core_1.Badge isRead={false}>24</react_core_1.Badge>
          <react_core_1.Badge isRead={false}>240</react_core_1.Badge>
          <react_core_1.Badge isRead={false}>999+</react_core_1.Badge>
        </react_1["default"].Fragment>);
    };
    return BadgeDemo;
}(react_1["default"].Component));
exports.BadgeDemo = BadgeDemo;
