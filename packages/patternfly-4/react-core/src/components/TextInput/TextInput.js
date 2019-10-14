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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var React = require("react");
var form_control_1 = require("@patternfly/react-styles/css/components/FormControl/form-control");
var react_styles_1 = require("@patternfly/react-styles");
var TextInputTypes;
(function (TextInputTypes) {
    TextInputTypes["text"] = "text";
    TextInputTypes["date"] = "date";
    TextInputTypes["datetimeLocal"] = "datetime-local";
    TextInputTypes["email"] = "email";
    TextInputTypes["month"] = "month";
    TextInputTypes["number"] = "number";
    TextInputTypes["password"] = "password";
    TextInputTypes["search"] = "search";
    TextInputTypes["tel"] = "tel";
    TextInputTypes["time"] = "time";
    TextInputTypes["url"] = "url";
})(TextInputTypes = exports.TextInputTypes || (exports.TextInputTypes = {}));
var TextInput = /** @class */ (function (_super) {
    __extends(TextInput, _super);
    function TextInput(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (event) {
            if (_this.props.onChange) {
                _this.props.onChange(event.currentTarget.value, event);
            }
        };
        if (!props.id && !props['aria-label'] && !props['aria-labelledby']) {
            // tslint:disable-next-line:no-console
            console.error('Text input:', 'Text input requires either an id or aria-label to be specified');
        }
        return _this;
    }
    TextInput.prototype.render = function () {
        var _a = this.props, className = _a.className, type = _a.type, value = _a.value, onChange = _a.onChange, isValid = _a.isValid, isReadOnly = _a.isReadOnly, isRequired = _a.isRequired, isDisabled = _a.isDisabled, props = __rest(_a, ["className", "type", "value", "onChange", "isValid", "isReadOnly", "isRequired", "isDisabled"]);
        return (<input {...props} className={react_styles_1.css(form_control_1["default"].formControl, className)} onChange={this.handleChange} type={type} value={value} aria-invalid={!isValid} required={isRequired} disabled={isDisabled} readOnly={isReadOnly}/>);
    };
    TextInput.defaultProps = {
        'aria-label': null,
        "className": '',
        "isRequired": false,
        "isValid": true,
        "isDisabled": false,
        "isReadOnly": false,
        "type": 'text',
        "onChange": function () { return undefined; }
    };
    return TextInput;
}(React.Component));
exports.TextInput = TextInput;
