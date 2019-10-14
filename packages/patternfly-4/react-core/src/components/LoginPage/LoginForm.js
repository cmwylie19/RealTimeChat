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
var Form_1 = require("../Form");
var TextInput_1 = require("../TextInput");
var Button_1 = require("../Button");
var Checkbox_1 = require("../Checkbox");
exports.LoginForm = function (_a) {
    var _b = _a.noAutoFocus, noAutoFocus = _b === void 0 ? false : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.showHelperText, showHelperText = _d === void 0 ? false : _d, _e = _a.helperText, helperText = _e === void 0 ? null : _e, _f = _a.usernameLabel, usernameLabel = _f === void 0 ? 'Username' : _f, _g = _a.usernameValue, usernameValue = _g === void 0 ? '' : _g, _h = _a.onChangeUsername, onChangeUsername = _h === void 0 ? function () { return undefined; } : _h, _j = _a.isValidUsername, isValidUsername = _j === void 0 ? true : _j, _k = _a.passwordLabel, passwordLabel = _k === void 0 ? 'Password' : _k, _l = _a.passwordValue, passwordValue = _l === void 0 ? '' : _l, _m = _a.onChangePassword, onChangePassword = _m === void 0 ? function () { return undefined; } : _m, _o = _a.isValidPassword, isValidPassword = _o === void 0 ? true : _o, _p = _a.loginButtonLabel, loginButtonLabel = _p === void 0 ? 'Log In' : _p, _q = _a.isLoginButtonDisabled, isLoginButtonDisabled = _q === void 0 ? false : _q, _r = _a.onLoginButtonClick, onLoginButtonClick = _r === void 0 ? function () { return undefined; } : _r, _s = _a.rememberMeLabel, rememberMeLabel = _s === void 0 ? '' : _s, _t = _a.isRememberMeChecked, isRememberMeChecked = _t === void 0 ? false : _t, _u = _a.onChangeRememberMe, onChangeRememberMe = _u === void 0 ? function () { return undefined; } : _u, _v = _a.rememberMeAriaLabel, rememberMeAriaLabel = _v === void 0 ? '' : _v, props = __rest(_a, ["noAutoFocus", "className", "showHelperText", "helperText", "usernameLabel", "usernameValue", "onChangeUsername", "isValidUsername", "passwordLabel", "passwordValue", "onChangePassword", "isValidPassword", "loginButtonLabel", "isLoginButtonDisabled", "onLoginButtonClick", "rememberMeLabel", "isRememberMeChecked", "onChangeRememberMe", "rememberMeAriaLabel"]);
    return (<Form_1.Form className={className} {...props}>
    <Form_1.FormHelperText isError={!isValidUsername || !isValidPassword} isHidden={!showHelperText}>
      {helperText}
    </Form_1.FormHelperText>
    <Form_1.FormGroup label={usernameLabel} isRequired isValid={isValidUsername} fieldId="pf-login-username-id">
      <TextInput_1.TextInput autoFocus={!noAutoFocus} id="pf-login-username-id" isRequired isValid={isValidUsername} type="text" name="pf-login-username-id" value={usernameValue} onChange={onChangeUsername}/>
    </Form_1.FormGroup>
    <Form_1.FormGroup label={passwordLabel} isRequired isValid={isValidPassword} fieldId="pf-login-password-id">
      <TextInput_1.TextInput isRequired type="password" id="pf-login-password-id" name="pf-login-password-id" isValid={isValidPassword} value={passwordValue} onChange={onChangePassword}/>
    </Form_1.FormGroup>
    {rememberMeLabel.length > 0 && (<Form_1.FormGroup fieldId="pf-login-remember-me-id">
        <Checkbox_1.Checkbox id="pf-login-remember-me-id" label={rememberMeLabel} checked={isRememberMeChecked} onChange={onChangeRememberMe}/>
      </Form_1.FormGroup>)}
    <Form_1.ActionGroup>
      <Button_1.Button variant="primary" type="submit" onClick={onLoginButtonClick} isBlock isDisabled={isLoginButtonDisabled}>
        {loginButtonLabel}
      </Button_1.Button>
    </Form_1.ActionGroup>
  </Form_1.Form>);
};
