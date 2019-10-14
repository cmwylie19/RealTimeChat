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
var CheckboxDemo = /** @class */ (function (_super) {
    __extends(CheckboxDemo, _super);
    function CheckboxDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            check1: false,
            check2: false
        };
        _this.handleChange = function (checked, event) {
            var _a, _b;
            var target = event.target;
            var value = target.type === 'checkbox' ? target.checked : target.value;
            var name = target.name;
            if (name === 'check1') {
                _this.setState((_a = {}, _a['check1'] = value, _a));
            }
            else if (name === 'check2') {
                _this.setState((_b = {}, _b['check2'] = value, _b));
            }
        };
        return _this;
    }
    CheckboxDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    CheckboxDemo.prototype.render = function () {
        return (<react_1["default"].Fragment>
        <react_core_1.Checkbox label="Controlled CheckBox" isChecked={this.state.check1} onChange={this.handleChange} aria-label="controlled checkbox example" id="check-1" name="check1"/>
        <react_core_1.Checkbox label="Controlled CheckBox" isChecked={this.state.check2} onChange={this.handleChange} aria-label="controlled checkbox example" id="check-2" name="check2"/>
      </react_1["default"].Fragment>);
    };
    return CheckboxDemo;
}(react_1["default"].Component));
exports.CheckboxDemo = CheckboxDemo;
