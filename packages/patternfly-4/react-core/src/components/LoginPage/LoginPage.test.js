"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var LoginPage_1 = require("./LoginPage");
var needAccountMesseage = (<React.Fragment>
    Login to your account <a href="https://www.patternfly.org">Need an account?</a>
  </React.Fragment>);
test('check loginpage example against snapshot', function () {
    var view = enzyme_1.shallow(<LoginPage_1.LoginPage footerListVariants="inline" brandImgSrc="Brand src" brandImgAlt="Pf-logo" backgroundImgSrc="Background src" backgroundImgAlt="Pf-background" footerListItems="English" textContent="This is placeholder text only." loginTitle="Log into your account" signUpForAccountMessage={needAccountMesseage} socialMediaLoginContent="Footer"/>);
    expect(view).toMatchSnapshot();
});
