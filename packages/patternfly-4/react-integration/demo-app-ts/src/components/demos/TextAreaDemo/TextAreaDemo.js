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
var TextAreaDemo = /** @class */ (function (_super) {
    __extends(TextAreaDemo, _super);
    function TextAreaDemo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            textAreaValue: '',
            requiredTextAreaValue: '',
            isValid: true,
            requiredIsValid: true
        };
        _this.handleChange = function (value) {
            // If the text area contains less than 1 character, set isValid to false
            var valid = !(value.length < 1);
            _this.setState({ textAreaValue: value, isValid: valid });
        };
        _this.handleChangeRequired = function (value) {
            // If the text area contains less than 1 character, set isValid to false
            var isValid = !(value.length < 1);
            _this.setState({ requiredTextAreaValue: value, requiredIsValid: isValid });
        };
        return _this;
    }
    TextAreaDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    TextAreaDemo.prototype.render = function () {
        var _a = this.state, textAreaValue = _a.textAreaValue, requiredTextAreaValue = _a.requiredTextAreaValue, isValid = _a.isValid, requiredIsValid = _a.requiredIsValid;
        return (<react_1["default"].Fragment>
        <react_core_1.Text>Text area</react_core_1.Text>
        <react_core_1.TextArea id="textarea1" value={textAreaValue} onChange={this.handleChange} isValid={isValid} aria-label="text area example 1"/>
        <react_core_1.Text>Required text area</react_core_1.Text>
        <react_core_1.TextArea id="textarea2" value={requiredTextAreaValue} onChange={this.handleChangeRequired} isRequired isValid={requiredIsValid} aria-label="text area example 2"/>
      </react_1["default"].Fragment>);
    };
    return TextAreaDemo;
}(react_1["default"].Component));
exports.TextAreaDemo = TextAreaDemo;
