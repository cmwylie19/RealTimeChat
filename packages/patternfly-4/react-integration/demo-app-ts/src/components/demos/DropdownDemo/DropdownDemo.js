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
var React = require("react");
var react_core_1 = require("@patternfly/react-core");
var DropdownDemo = /** @class */ (function (_super) {
    __extends(DropdownDemo, _super);
    function DropdownDemo(props) {
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
            _this.setState({
                isOpen: !_this.state.isOpen
            });
        };
        return _this;
    }
    DropdownDemo.prototype.render = function () {
        var isOpen = this.state.isOpen;
        return (<react_core_1.Dropdown onSelect={this.onSelect} toggle={<react_core_1.DropdownToggle onToggle={this.onToggle}>Expanded Dropdown</react_core_1.DropdownToggle>} isOpen={isOpen}>
        <ul className="pf-c-dropdown__menu">
          <react_core_1.DropdownItem key="link" href="https://patternfly-react.surge.sh/patternfly-4/">Link</react_core_1.DropdownItem>
          <react_core_1.DropdownItem key="action" component="button" autoFocus>
            Action
          </react_core_1.DropdownItem>
          <react_core_1.DropdownItem key="disabled link" isDisabled>
            Disabled Link
          </react_core_1.DropdownItem>
          <react_core_1.DropdownItem key="disabled action" isDisabled component="button">
            Disabled Action
          </react_core_1.DropdownItem>
          <react_core_1.DropdownSeparator key="separator"/>
          <react_core_1.DropdownItem key="separated link">Separated Link</react_core_1.DropdownItem>
          <react_core_1.DropdownItem key="separated action" component="button">
            Separated Action
          </react_core_1.DropdownItem>
        </ul>
      </react_core_1.Dropdown>);
    };
    return DropdownDemo;
}(React.Component));
exports.DropdownDemo = DropdownDemo;
