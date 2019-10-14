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
var check_1 = require("@patternfly/react-styles/css/components/Check/check");
var react_styles_1 = require("@patternfly/react-styles");
// tslint:disable-next-line:no-empty
var defaultOnChange = function () { };
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (event) {
            _this.props.onChange(event.currentTarget.checked, event);
        };
        return _this;
    }
    Checkbox.prototype.render = function () {
        var _a = this.props, ariaLabel = _a["aria-label"], className = _a.className, onChange = _a.onChange, isValid = _a.isValid, isDisabled = _a.isDisabled, isChecked = _a.isChecked, label = _a.label, checked = _a.checked, defaultChecked = _a.defaultChecked, props = __rest(_a, ['aria-label', "className", "onChange", "isValid", "isDisabled", "isChecked", "label", "checked", "defaultChecked"]);
        var checkedProps = {};
        if ([true, false].includes(checked) || isChecked === true) {
            checkedProps.checked = checked || isChecked;
        }
        if (onChange !== defaultOnChange) {
            checkedProps.checked = isChecked;
        }
        if ([false, true].includes(defaultChecked)) {
            checkedProps.defaultChecked = defaultChecked;
        }
        checkedProps.checked = checkedProps.checked === null ? false : checkedProps.checked;
        return (<div className={react_styles_1.css(check_1["default"].check, className)}>
        <input {...props} className={react_styles_1.css(check_1["default"].checkInput)} type="checkbox" onChange={this.handleChange} aria-invalid={!isValid} aria-label={ariaLabel} disabled={isDisabled} ref={function (elem) { return elem && (elem.indeterminate = isChecked === null); }} {...checkedProps}/>
        {label && (<label className={react_styles_1.css(check_1["default"].checkLabel, isDisabled ? react_styles_1.getModifier(check_1["default"], 'disabled') : '')} htmlFor={props.id}>
            {label}
          </label>)}
      </div>);
    };
    Checkbox.defaultProps = {
        className: '',
        isValid: true,
        isDisabled: false,
        isChecked: false,
        onChange: defaultOnChange
    };
    return Checkbox;
}(React.Component));
exports.Checkbox = Checkbox;
