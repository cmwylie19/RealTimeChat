"use strict";
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
var form_1 = require("@patternfly/react-styles/css/components/Form/form");
var htmlConstants_1 = require("../../helpers/htmlConstants");
var FormContext_1 = require("./FormContext");
var react_styles_1 = require("@patternfly/react-styles");
exports.FormGroup = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.className, className = _c === void 0 ? '' : _c, label = _a.label, _d = _a.isRequired, isRequired = _d === void 0 ? false : _d, _e = _a.isValid, isValid = _e === void 0 ? true : _e, _f = _a.isInline, isInline = _f === void 0 ? false : _f, helperText = _a.helperText, helperTextInvalid = _a.helperTextInvalid, fieldId = _a.fieldId, props = __rest(_a, ["children", "className", "label", "isRequired", "isValid", "isInline", "helperText", "helperTextInvalid", "fieldId"]);
    return (<FormContext_1.FormContext.Consumer>
    {function (_a) {
        var isHorizontal = _a.isHorizontal;
        return (<div {...props} className={react_styles_1.css(form_1["default"].formGroup, isInline ? react_styles_1.getModifier(form_1["default"], 'inline', className) : className)}>
        {label && (<label className={react_styles_1.css(form_1["default"].formLabel)} htmlFor={fieldId}>
            <span className={react_styles_1.css(form_1["default"].formLabelText)}>
              {label}
            </span>
            {isRequired && (<span className={react_styles_1.css(form_1["default"].formLabelRequired)} aria-hidden="true">
                {htmlConstants_1.ASTERISK}
              </span>)}
          </label>)}
        {isHorizontal ? <div className={react_styles_1.css(form_1["default"].formHorizontalGroup)}>{children}</div> : children}
        {((isValid && helperText) || (!isValid && helperTextInvalid)) && (<div className={react_styles_1.css(form_1["default"].formHelperText, !isValid ? react_styles_1.getModifier(form_1["default"], 'error') : '')} id={fieldId + "-helper"} aria-live="polite">
            {isValid ? helperText : helperTextInvalid}
          </div>)}
      </div>);
    }}
  </FormContext_1.FormContext.Consumer>);
};
