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
var react_styles_1 = require("@patternfly/react-styles");
var BackgroundImage_1 = require("../BackgroundImage");
var Brand_1 = require("../Brand");
var List_1 = require("../List");
var Login_1 = require("./Login");
var LoginHeader_1 = require("./LoginHeader");
var LoginFooter_1 = require("./LoginFooter");
var LoginMainHeader_1 = require("./LoginMainHeader");
var LoginMainBody_1 = require("./LoginMainBody");
var LoginMainFooter_1 = require("./LoginMainFooter");
exports.LoginPage = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.brandImgSrc, brandImgSrc = _d === void 0 ? '' : _d, _e = _a.brandImgAlt, brandImgAlt = _e === void 0 ? '' : _e, _f = _a.backgroundImgSrc, backgroundImgSrc = _f === void 0 ? '' : _f, _g = _a.backgroundImgAlt, backgroundImgAlt = _g === void 0 ? '' : _g, _h = _a.footerListItems, footerListItems = _h === void 0 ? null : _h, _j = _a.textContent, textContent = _j === void 0 ? '' : _j, footerListVariants = _a.footerListVariants, loginTitle = _a.loginTitle, loginSubtitle = _a.loginSubtitle, _k = _a.signUpForAccountMessage, signUpForAccountMessage = _k === void 0 ? null : _k, _l = _a.forgotCredentials, forgotCredentials = _l === void 0 ? null : _l, _m = _a.socialMediaLoginContent, socialMediaLoginContent = _m === void 0 ? null : _m, props = __rest(_a, ["children", "className", "brandImgSrc", "brandImgAlt", "backgroundImgSrc", "backgroundImgAlt", "footerListItems", "textContent", "footerListVariants", "loginTitle", "loginSubtitle", "signUpForAccountMessage", "forgotCredentials", "socialMediaLoginContent"]);
    var HeaderBrand = (<React.Fragment>
      <Brand_1.Brand src={brandImgSrc} alt={brandImgAlt}/>
    </React.Fragment>);
    var Header = <LoginHeader_1.LoginHeader headerBrand={HeaderBrand}/>;
    var Footer = (<LoginFooter_1.LoginFooter>
      <p>{textContent}</p>
      <List_1.List variant={footerListVariants}>{footerListItems}</List_1.List>
    </LoginFooter_1.LoginFooter>);
    return (<React.Fragment>
      {backgroundImgSrc && <BackgroundImage_1.BackgroundImage src={backgroundImgSrc} alt={backgroundImgAlt}/>}
      <Login_1.Login header={Header} footer={Footer} className={react_styles_1.css(className)} {...props}>
        <LoginMainHeader_1.LoginMainHeader title={loginTitle} subtitle={loginSubtitle}/>
        <LoginMainBody_1.LoginMainBody>{children}</LoginMainBody_1.LoginMainBody>
        {(socialMediaLoginContent || forgotCredentials || signUpForAccountMessage) && (<LoginMainFooter_1.LoginMainFooter socialMediaLoginContent={socialMediaLoginContent} forgotCredentials={forgotCredentials} signUpForAccountMessage={signUpForAccountMessage}/>)}
      </Login_1.Login>
    </React.Fragment>);
};
