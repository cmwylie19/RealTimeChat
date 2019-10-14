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
var dropdown_1 = require("@patternfly/react-styles/css/components/Dropdown/dropdown");
var react_styles_1 = require("@patternfly/react-styles");
var Checkbox_1 = require("../Checkbox");
var DropdownToggleCheckbox = /** @class */ (function (_super) {
    __extends(DropdownToggleCheckbox, _super);
    function DropdownToggleCheckbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function (checked, event) {
            _this.props.onChange(event.target.checked, event);
        };
        _this.calculateChecked = function () {
            var _a = _this.props, isChecked = _a.isChecked, checked = _a.checked;
            return isChecked !== undefined ? isChecked : checked;
        };
        return _this;
    }
    DropdownToggleCheckbox.prototype.render = function () {
        var _a = this.props, className = _a.className, onChange = _a.onChange, isValid = _a.isValid, isDisabled = _a.isDisabled, isChecked = _a.isChecked, ref = _a.ref, checked = _a.checked, children = _a.children, props = __rest(_a, ["className", "onChange", "isValid", "isDisabled", "isChecked", "ref", "checked", "children"]);
        var text = children && <span className={react_styles_1.css(dropdown_1["default"].dropdownToggleText, className)} aria-hidden="true" id={props.id + "-text"}>
      {children}
    </span>;
        return (<label className={react_styles_1.css(dropdown_1["default"].dropdownToggleCheck, className)} htmlFor={props.id}>
        <Checkbox_1.Checkbox {...props} {...(this.calculateChecked() !== undefined) && { onChange: this.handleChange }} ref={ref} aria-invalid={!isValid} isDisabled={isDisabled} isChecked={this.calculateChecked()}/>
        {text}
      </label>);
    };
    DropdownToggleCheckbox.defaultProps = {
        className: '',
        isValid: true,
        isDisabled: false,
        onChange: function () { return undefined; }
    };
    return DropdownToggleCheckbox;
}(React.Component));
exports.DropdownToggleCheckbox = DropdownToggleCheckbox;
