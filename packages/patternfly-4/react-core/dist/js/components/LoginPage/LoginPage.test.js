"use strict";

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _LoginPage = require("./LoginPage");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var needAccountMesseage = React.createElement(React.Fragment, null, "Login to your account ", React.createElement("a", {
  href: "https://www.patternfly.org"
}, "Need an account?"));
test('check loginpage example against snapshot', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_LoginPage.LoginPage, {
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