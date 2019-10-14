import * as React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from './LoginPage';
const needAccountMesseage = React.createElement(React.Fragment, null, "Login to your account ", React.createElement("a", {
  href: "https://www.patternfly.org"
}, "Need an account?"));
test('check loginpage example against snapshot', () => {
  const view = shallow(React.createElement(LoginPage, {
    footerListVariants: "inline",
    brandImgSrc: "Brand src",
    brandImgAlt: "Pf-logo",
    backgroundImgSrc: "Background src",
    backgroundImgAlt: "Pf-background",
    footerListItems: "English",
    textContent: "This is placeholder text only.",
    loginTitle: "Log into your account",
    signUpForAccountMessage: needAccountMesseage,
    socialMediaLoginContent: "Footer"
  }));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=LoginPage.test.js.map