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
var RadioDemo = /** @class */ (function (_super) {
    __extends(RadioDemo, _super);
    function RadioDemo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: '4'
        };
        _this.handleChange = function (_, event) {
            var value = event.currentTarget.value;
            _this.setState({ value: value });
        };
        _this.myUncheckedControlledRadioProps = {
            id: 'radio-1',
            label: 'Controlled radio 1',
            name: 'controlled',
            value: '3'
        };
        _this.myCheckedControlledRadioProps = {
            id: 'radio-2',
            label: 'Controlled radio 2',
            name: 'controlled',
            value: '4'
        };
        _this.myFirstUncontrolledRadioProps = {
            id: 'radio-3',
            label: 'Uncontrolled radio 1',
            name: 'uncontrolled'
        };
        _this.mySecondUncontrolledRadioProps = {
            id: 'radio-4',
            label: 'Uncontrolled radio 2',
            name: 'uncontrolled'
        };
        _this.myCheckedDisabledRadioProps = {
            id: 'radio-5',
            defaultChecked: true,
            label: 'Disabled checked radio example',
            isDisabled: true,
            name: 'disabled-1'
        };
        _this.myUncheckedDisabledRadioProps = {
            id: 'radio-6',
            label: 'Disabled unchecked radio example',
            isDisabled: true,
            name: 'disabled-2'
        };
        return _this;
    }
    RadioDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    RadioDemo.prototype.render = function () {
        return (<react_1["default"].Fragment>
       <react_core_1.Radio id={this.myUncheckedControlledRadioProps.id} isChecked={this.state.value === '3'} label={this.myUncheckedControlledRadioProps.label} name={this.myUncheckedControlledRadioProps.name} onChange={this.handleChange} value={this.myUncheckedControlledRadioProps.value}/>
       <react_core_1.Radio id={this.myCheckedControlledRadioProps.id} isChecked={this.state.value === '4'} label={this.myCheckedControlledRadioProps.label} name={this.myCheckedControlledRadioProps.name} onChange={this.handleChange} value={this.myCheckedControlledRadioProps.value}/>
       <react_core_1.Radio id={this.myFirstUncontrolledRadioProps.id} label={this.myFirstUncontrolledRadioProps.label} name={this.myFirstUncontrolledRadioProps.name}/>
       <react_core_1.Radio id={this.mySecondUncontrolledRadioProps.id} label={this.mySecondUncontrolledRadioProps.label} name={this.mySecondUncontrolledRadioProps.name}/>
       <react_core_1.Radio id={this.myCheckedDisabledRadioProps.id} defaultChecked={this.myCheckedDisabledRadioProps.defaultChecked} isDisabled={this.myCheckedDisabledRadioProps.isDisabled} label={this.myCheckedDisabledRadioProps.label} name={this.myCheckedDisabledRadioProps.name}/>
       <react_core_1.Radio id={this.myUncheckedDisabledRadioProps.id} isDisabled={this.myUncheckedDisabledRadioProps.isDisabled} label={this.myUncheckedDisabledRadioProps.label} name={this.myUncheckedDisabledRadioProps.name}/>
     </react_1["default"].Fragment>);
    };
    return RadioDemo;
}(react_1.Component));
exports.RadioDemo = RadioDemo;
exports["default"] = RadioDemo;
