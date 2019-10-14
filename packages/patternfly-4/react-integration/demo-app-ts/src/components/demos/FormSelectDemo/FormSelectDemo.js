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
var FormSelectDemo = /** @class */ (function (_super) {
    __extends(FormSelectDemo, _super);
    function FormSelectDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (value, event) {
            _this.setState({ value: value });
        };
        _this.getOptionLbl = function (option) { return option.label; };
        _this.getOptionVal = function (option) { return option.value; };
        _this.getOptionsGroupLbl = function (group) { return group && group.groupLabel; };
        _this.getGroupOptions = function (group) { return group && group.options; };
        _this.state = {
            value: '2'
        };
        _this.groups = [
            {
                groupLabel: 'Group1',
                disabled: false,
                options: [
                    { value: '1', label: 'The First Option', disabled: false },
                    { value: '2', label: 'Second option is selected by default', disabled: false }
                ]
            },
            {
                groupLabel: 'Group2',
                disabled: false,
                options: [
                    { value: '3', label: 'The Third Option', disabled: false },
                    { value: '4', label: 'The Fourth option', disabled: false }
                ]
            },
            {
                groupLabel: 'Group3',
                disabled: true,
                options: [
                    { value: '5', label: 'The Fifth Option', disabled: false },
                    { value: '6', label: 'The Sixth option', disabled: false }
                ]
            }
        ];
        return _this;
    }
    FormSelectDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    FormSelectDemo.prototype.render = function () {
        return (<react_core_1.FormSelect value={this.state.value} onChange={this.onChange} aria-label="FormSelect Input">
        {this.groups.map(function (group, index) { return (<react_core_1.FormSelectOptionGroup isDisabled={group.disabled} key={index} label={group.groupLabel}>
            {group.options.map(function (option, i) { return (<react_core_1.FormSelectOption isDisabled={option.disabled} key={i} value={option.value} label={option.label}/>); })}
          </react_core_1.FormSelectOptionGroup>); })}
      </react_core_1.FormSelect>);
    };
    return FormSelectDemo;
}(react_1.Component));
exports.FormSelectDemo = FormSelectDemo;
