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
var TextArea = /** @class */ (function (_super) {
    __extends(TextArea, _super);
    function TextArea(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (event) {
            if (_this.props.onChange) {
                _this.props.onChange(event.currentTarget.value, event);
            }
        };
        if (!props.id && !props['aria-label']) {
            // tslint:disable-next-line:no-console
            console.error('TextArea: TextArea requires either an id or aria-label to be specified');
        }
        return _this;
    }
    TextArea.prototype.render = function () {
        var _a = this.props, className = _a.className, value = _a.value, onChange = _a.onChange, isValid = _a.isValid, isRequired = _a.isRequired, props = __rest(_a, ["className", "value", "onChange", "isValid", "isRequired"]);
        return (<textarea className={react_styles_1.css(form_control_1["default"].formControl, className)} onChange={this.handleChange} {...(typeof this.props.defaultValue !== 'string') && { value: value }} aria-invalid={!isValid} required={isRequired} {...props}/>);
    };
    TextArea.defaultProps = {
        "className": '',
        "isRequired": false,
        "isValid": true,
        'aria-label': null
    };
    return TextArea;
}(React.Component));
exports.TextArea = TextArea;
