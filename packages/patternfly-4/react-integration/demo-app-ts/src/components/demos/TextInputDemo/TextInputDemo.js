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
var TextInputDemo = /** @class */ (function (_super) {
    __extends(TextInputDemo, _super);
    function TextInputDemo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: ''
        };
        _this.handleTextInputChange = function (value) {
            _this.setState({ value: value });
        };
        _this.myTextInputProps = {
            onChange: _this.handleTextInputChange
        };
        _this.myDisabledTextInputProps = {
            isDisabled: true,
            value: 'disabled text input example'
        };
        _this.myReadOnlyTextInputProps = {
            isReadOnly: true,
            value: 'read only text input example'
        };
        _this.myValidTextInputProps = {
            isValid: false
        };
        return _this;
    }
    TextInputDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    TextInputDemo.prototype.render = function () {
        return (<react_1["default"].Fragment>
      <react_core_1.TextInput id="text" onChange={this.myTextInputProps.onChange}/>
      <react_core_1.TextInput id="text-disabled" isDisabled={this.myDisabledTextInputProps.isDisabled} value={this.myDisabledTextInputProps.value}/>
      <react_core_1.TextInput id="text-read-only" isReadOnly={this.myReadOnlyTextInputProps.isReadOnly} value={this.myReadOnlyTextInputProps.value}/>
      <react_core_1.TextInput id="text-invalid" isValid={this.myValidTextInputProps.isValid}/>
    </react_1["default"].Fragment>);
    };
    return TextInputDemo;
}(react_1.Component));
exports.TextInputDemo = TextInputDemo;
