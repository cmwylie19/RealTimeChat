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
var radio_1 = require("@patternfly/react-styles/css/components/Radio/radio");
var react_styles_1 = require("@patternfly/react-styles");
var Radio = /** @class */ (function (_super) {
    __extends(Radio, _super);
    function Radio(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (event) {
            _this.props.onChange(event.currentTarget.checked, event);
        };
        if (!props.label && !props['aria-label']) {
            // tslint:disable-next-line:no-console
            console.error('Radio:', 'Radio requires an aria-label to be specified');
        }
        return _this;
    }
    Radio.prototype.render = function () {
        var _a = this.props, ariaLabel = _a["aria-label"], checked = _a.checked, className = _a.className, defaultChecked = _a.defaultChecked, isChecked = _a.isChecked, isDisabled = _a.isDisabled, isValid = _a.isValid, label = _a.label, onChange = _a.onChange, props = __rest(_a, ['aria-label', "checked", "className", "defaultChecked", "isChecked", "isDisabled", "isValid", "label", "onChange"]);
        return (<div className={react_styles_1.css(radio_1["default"].radio, className)}>
        <input {...props} className={react_styles_1.css(radio_1["default"].radioInput)} type="radio" onChange={this.handleChange} aria-invalid={!isValid} disabled={isDisabled} defaultChecked={checked || isChecked} {...!isChecked && { defaultChecked: defaultChecked }} {...!label && { 'aria-label': ariaLabel }}/>
        {label && (<label className={react_styles_1.css(radio_1["default"].radioLabel, react_styles_1.getModifier(radio_1["default"], isDisabled && 'disabled'))} htmlFor={props.id}>
            {label}
          </label>)}
      </div>);
    };
    Radio.defaultProps = {
        className: '',
        isDisabled: false,
        isValid: true,
        onChange: Function.prototype
    };
    return Radio;
}(React.Component));
exports.Radio = Radio;
