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
var FormSelect = /** @class */ (function (_super) {
    __extends(FormSelect, _super);
    function FormSelect(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (event) {
            _this.props.onChange(event.currentTarget.value, event);
        };
        if (!props.id && !props['aria-label']) {
            // tslint:disable-next-line:no-console
            console.error('FormSelect requires either an id or aria-label to be specified');
        }
        return _this;
    }
    FormSelect.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, value = _a.value, isValid = _a.isValid, isDisabled = _a.isDisabled, isRequired = _a.isRequired, props = __rest(_a, ["children", "className", "value", "isValid", "isDisabled", "isRequired"]);
        return (<select {...props} className={react_styles_1.css(form_control_1["default"].formControl, className)} aria-invalid={!isValid} onChange={this.handleChange} disabled={isDisabled} required={isRequired} value={value}>
        {children}
      </select>);
    };
    FormSelect.defaultProps = {
        className: '',
        value: '',
        isValid: true,
        isDisabled: false,
        isRequired: false,
        onBlur: function () { return undefined; },
        onFocus: function () { return undefined; },
        onChange: function () { return undefined; }
    };
    return FormSelect;
}(React.Component));
exports.FormSelect = FormSelect;
