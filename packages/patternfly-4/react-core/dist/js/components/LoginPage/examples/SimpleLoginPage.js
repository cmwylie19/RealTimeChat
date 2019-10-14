"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _brandImgColor = _interopRequireDefault(require("./brandImgColor.svg"));

var _reactCore = require("@patternfly/react-core");

var _reactIcons = require("@patternfly/react-icons");

var _images;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Note: When using background-filter.svg, you must also include #image_overlay as the fragment identifier
 */
var images = (_images = {}, _defineProperty(_images, _reactCore.BackgroundImageSrc.lg, '/assets/images/pfbg_1200.jpg'), _defineProperty(_images, _reactCore.BackgroundImageSrc.sm, '/assets/images/pfbg_768.jpg'), _defineProperty(_images, _reactCore.BackgroundImageSrc.sm2x, '/assets/images/pfbg_768@2x.jpg'), _defineProperty(_images, _reactCore.BackgroundImageSrc.xs, '/assets/images/pfbg_576.jpg'), _defineProperty(_images, _reactCore.BackgroundImageSrc.xs2x, '/assets/images/pfbg_576@2x.jpg'), _defineProperty(_images, _reactCore.BackgroundImageSrc.filter, '/assets/images/background-filter.svg#image_overlay'), _images);

var SimpleLoginPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SimpleLoginPage, _React$Component);

  function SimpleLoginPage(props) {
    var _this;

    _classCallCheck(this, SimpleLoginPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SimpleLoginPage).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleUsernameChange", function (value) {
      _this.setState({
        usernameValue: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handlePasswordChange", function (passwordValue) {
      _this.setState({
        passwordValue: passwordValue
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onRememberMeClick", function () {
      _this.setState({
        isRememberMeChecked: !_this.state.isRememberMeChecked
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onLoginButtonClick", function (event) {
      event.preventDefault();

      _this.setState({
        isValidUsername: !!_this.state.usernameValue
      });

      _this.setState({
        isValidPassword: !!_this.state.passwordValue
      });

      _this.setState({
        showHelperText: !_this.state.usernameValue || !_this.state.passwordValue
      });
    });

    _this.state = {
      showHelperText: false,
      usernameValue: '',
      isValidUsername: true,
      passwordValue: '',
      isValidPassword: true,
      isRememberMeChecked: false
    };
    return _this;
  }

  _createClass(SimpleLoginPage, [{
    key: "render",
    value: function render() {
      var helperText = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactIcons.ExclamationCircleIcon, null), "\xA0Invalid login credentials.");

      var socialMediaLoginContent = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactCore.LoginMainFooterLinksItem, {
        href: "#"
      }, _react["default"].createElement("svg", {
        "aria-hidden": "true",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 488 512"
      }, _react["default"].createElement("path", {
        d: "M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
      }))), _react["default"].createElement(_reactCore.LoginMainFooterLinksItem, {
        href: "#"
      }, _react["default"].createElement("svg", {
        "aria-hidden": "true",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 496 512"
      }, _react["default"].createElement("path", {
        d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      }))), _react["default"].createElement(_reactCore.LoginMainFooterLinksItem, {
        href: "#"
      }, _react["default"].createElement("svg", {
        "aria-hidden": "true",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 528 512"
      }, _react["default"].createElement("path", {
        d: "M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zM131.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zm132.8-111.6l132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3-131.3-85z"
      }))), _react["default"].createElement(_reactCore.LoginMainFooterLinksItem, {
        href: "#"
      }, _react["default"].createElement("svg", {
        "aria-hidden": "true",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 448 512"
      }, _react["default"].createElement("path", {
        d: "M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"
      }))), _react["default"].createElement(_reactCore.LoginMainFooterLinksItem, {
        href: "#"
      }, _react["default"].createElement("svg", {
        "aria-hidden": "true",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512"
      }, _react["default"].createElement("path", {
        d: "M29.782 199.732L256 493.714 8.074 309.699c-6.856-5.142-9.712-13.996-7.141-21.993l28.849-87.974zm75.405-174.806c-3.142-8.854-15.709-8.854-18.851 0L29.782 199.732h131.961L105.187 24.926zm56.556 174.806L256 493.714l94.257-293.982H161.743zm349.324 87.974l-28.849-87.974L256 493.714l247.926-184.015c6.855-5.142 9.711-13.996 7.141-21.993zm-85.404-262.78c-3.142-8.854-15.709-8.854-18.851 0l-56.555 174.806h131.961L425.663 24.926z"
      }))));

      var signUpForAccountMessage = _react["default"].createElement(_reactCore.LoginMainFooterBandItem, null, "Need an account? ", _react["default"].createElement("a", {
        href: "#"
      }, "Sign up."));

      var forgotCredentials = _react["default"].createElement(_reactCore.LoginMainFooterBandItem, null, _react["default"].createElement("a", {
        href: "#"
      }, "Forgot username or password?"));

      var listItem = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactCore.ListItem, null, _react["default"].createElement(_reactCore.LoginFooterItem, {
        href: "#"
      }, "Terms of Use ")), _react["default"].createElement(_reactCore.ListItem, null, _react["default"].createElement(_reactCore.LoginFooterItem, {
        href: "#"
      }, "Help")), _react["default"].createElement(_reactCore.ListItem, null, _react["default"].createElement(_reactCore.LoginFooterItem, {
        href: "#"
      }, "Privacy Policy")));

      var loginForm = _react["default"].createElement(_reactCore.LoginForm, {
        showHelperText: this.state.showHelperText,
        helperText: helperText,
        usernameLabel: "Username",
        usernameValue: this.state.usernameValue,
        onChangeUsername: this.handleUsernameChange,
        isValidUsername: this.state.isValidUsername,
        passwordLabel: "Password",
        passwordValue: this.state.passwordValue,
        onChangePassword: this.handlePasswordChange,
        isValidPassword: this.state.isValidPassword,
        rememberMeLabel: "Keep me logged in for 30 days.",
        isRememberMeChecked: this.state.isRememberMeChecked,
        onChangeRememberMe: this.onRememberMeClick,
        onLoginButtonClick: this.onLoginButtonClick
      });

      return _react["default"].createElement(_reactCore.LoginPage, {
        footerListVariants: "inline",
        brandImgSrc: _brandImgColor["default"],
        brandImgAlt: "PatternFly logo",
        backgroundImgSrc: images,
        backgroundImgAlt: "Images",
        footerListItems: listItem,
        textContent: "This is placeholder text only. Use this area to place any information or introductory message about your application that may be relevant to users.",
        loginTitle: "Log in to your account",
        loginSubtitle: "Please use your single sign-on LDAP credentials",
        socialMediaLoginContent: socialMediaLoginContent,
        signUpForAccountMessage: signUpForAccountMessage,
        forgotCredentials: forgotCredentials
      }, loginForm);
    }
  }]);

  return SimpleLoginPage;
}(_react["default"].Component);

var _default = SimpleLoginPage;
exports["default"] = _default;
//# sourceMappingURL=SimpleLoginPage.js.map