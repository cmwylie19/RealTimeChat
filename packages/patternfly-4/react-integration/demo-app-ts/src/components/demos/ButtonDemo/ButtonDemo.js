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
var ButtonDemo = /** @class */ (function (_super) {
    __extends(ButtonDemo, _super);
    function ButtonDemo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.myButtonProps = {
            component: 'button',
            href: 'https://github.com/patternfly/patternfly-next',
            target: '_blank'
        };
        return _this;
    }
    ButtonDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    ButtonDemo.prototype.render = function () {
        return (<react_1["default"].Fragment>
        <a href="https://github.com/patternfly/patternfly-next">
          <react_core_1.Button component={this.myButtonProps.component} href={this.myButtonProps.href} target={this.myButtonProps.target} variant="primary">
            Link to Core Docs
          </react_core_1.Button>{' '}
        </a>
        <a href="https://github.com/patternfly/patternfly-next">
          <react_core_1.Button component={this.myButtonProps.component} href={this.myButtonProps.href} target={this.myButtonProps.target} variant="secondary">
            Secondary Link to Core Docs
          </react_core_1.Button>{' '}
        </a>
        <react_core_1.Button component={this.myButtonProps.component} isDisabled href={this.myButtonProps.href} target={this.myButtonProps.target} variant="tertiary">
          Tertiary Link to Core Docs
        </react_core_1.Button>
        <react_core_1.Button component={this.myButtonProps.component} href={this.myButtonProps.href} target={this.myButtonProps.target} variant="control">
          Control Button
        </react_core_1.Button>
      </react_1["default"].Fragment>);
    };
    return ButtonDemo;
}(react_1["default"].Component));
exports.ButtonDemo = ButtonDemo;
