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
var ApplicationLauncherDemo = /** @class */ (function (_super) {
    __extends(ApplicationLauncherDemo, _super);
    function ApplicationLauncherDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isOpen: false
        };
        _this.onToggle = function (isOpen) {
            _this.setState({
                isOpen: isOpen
            });
        };
        _this.onSelect = function (event) {
            console.log('This works');
            _this.setState({
                isOpen: !_this.state.isOpen
            });
        };
        return _this;
    }
    ApplicationLauncherDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    ApplicationLauncherDemo.prototype.render = function () {
        var isOpen = this.state.isOpen;
        var dropdownItems = [
            <react_core_1.Tooltip content={<div>Launch Application 1</div>}>
        <react_core_1.DropdownItem key="application_1" component="a" href="http://patternfly-react.surge.sh/">
          Application 1
        </react_core_1.DropdownItem>
      </react_core_1.Tooltip>,
            <react_core_1.Tooltip content={<div>Launch Application 2</div>} position="right">
        <react_core_1.DropdownItem key="application_2" component="a">
          Application 2
        </react_core_1.DropdownItem>
      </react_core_1.Tooltip>,
            <react_core_1.Tooltip content={<div>Launch Application 3</div>} position="right">
        <react_core_1.DropdownItem key="application_3" component="a">
          Application 3
        </react_core_1.DropdownItem>
      </react_core_1.Tooltip>,
            <react_core_1.Tooltip content={<div>Application Unavailable At This Time</div>} position="bottom">
        <react_core_1.DropdownItem key="disabled_application_4" isDisabled component="a">
          Unavailable Application
        </react_core_1.DropdownItem>
      </react_core_1.Tooltip>
        ];
        return (<react_core_1.ApplicationLauncher onSelect={this.onSelect} onToggle={this.onToggle} isOpen={isOpen} dropdownItems={dropdownItems}/>);
    };
    return ApplicationLauncherDemo;
}(react_1["default"].Component));
exports.ApplicationLauncherDemo = ApplicationLauncherDemo;
