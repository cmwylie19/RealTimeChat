'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LoginPageAlert = require('./components/LoginPageComponents/LoginPageAlert');

var _LoginPageAlert2 = _interopRequireDefault(_LoginPageAlert);

var _LoginPageAlerts = require('./components/LoginPageComponents/LoginPageAlerts');

var _LoginPageAlerts2 = _interopRequireDefault(_LoginPageAlerts);

var _LoginPageContainer = require('./components/LoginPageComponents/LoginPageContainer');

var _LoginPageContainer2 = _interopRequireDefault(_LoginPageContainer);

var _LoginPageHeader = require('./components/LoginPageComponents/LoginPageHeader');

var _LoginPageHeader2 = _interopRequireDefault(_LoginPageHeader);

var _LoginPageFooter = require('./components/LoginPageComponents/LoginPageFooter');

var _LoginPageFooter2 = _interopRequireDefault(_LoginPageFooter);

var _LoginFooterLinks = require('./components/LoginPageComponents/LoginFooterLinks');

var _LoginFooterLinks2 = _interopRequireDefault(_LoginFooterLinks);

var _LoginCard = require('./components/LoginCardComponents/LoginCard');

var _LoginCard2 = _interopRequireDefault(_LoginCard);

var _LoginPageWithTranslation = require('./components/LoginPageComponents/LoginPageWithTranslation');

var _LoginPageWithTranslation2 = _interopRequireDefault(_LoginPageWithTranslation);

var _LoginPageLink = require('./components/LoginPageComponents/LoginPageLink');

var _LoginPageLink2 = _interopRequireDefault(_LoginPageLink);

var _SocialLoginPage = require('./SocialLoginPage');

var _SocialLoginPage2 = _interopRequireDefault(_SocialLoginPage);

var _SocialLoginPageContainer = require('./components/LoginPageComponents/SocialLoginPageContainer');

var _SocialLoginPageContainer2 = _interopRequireDefault(_SocialLoginPageContainer);

var _BasicLoginPageLayout = require('./components/LoginPageComponents/BasicLoginPageLayout');

var _BasicLoginPageLayout2 = _interopRequireDefault(_BasicLoginPageLayout);

var _LoginCardHeader = require('./components/LoginCardComponents/LoginCardHeader');

var _LoginCardHeader2 = _interopRequireDefault(_LoginCardHeader);

var _LoginLanguagePicker = require('./components/LoginCardComponents/LoginLanguagePicker');

var _LoginLanguagePicker2 = _interopRequireDefault(_LoginLanguagePicker);

var _LoginCardWithValidation = require('./components/LoginCardComponents/LoginCardWithValidation');

var _LoginCardWithValidation2 = _interopRequireDefault(_LoginCardWithValidation);

var _LoginCardForm = require('./components/LoginCardComponents/LoginCardForm');

var _LoginCardForm2 = _interopRequireDefault(_LoginCardForm);

var _LoginCardSignUp = require('./components/LoginCardComponents/LoginCardSignUp');

var _LoginCardSignUp2 = _interopRequireDefault(_LoginCardSignUp);

var _LoginCardInput = require('./components/LoginCardComponents/LoginCardInput');

var _LoginCardInput2 = _interopRequireDefault(_LoginCardInput);

var _LoginCardInputWarning = require('./components/LoginCardComponents/LoginCardInputWarning');

var _LoginCardInputWarning2 = _interopRequireDefault(_LoginCardInputWarning);

var _LoginCardSettings = require('./components/LoginCardComponents/LoginCardSettings');

var _LoginCardSettings2 = _interopRequireDefault(_LoginCardSettings);

var _LoginFormError = require('./components/LoginCardComponents/LoginFormError');

var _LoginFormError2 = _interopRequireDefault(_LoginFormError);

var _LoginCardForgotPassword = require('./components/LoginCardComponents/LoginCardForgotPassword');

var _LoginCardForgotPassword2 = _interopRequireDefault(_LoginCardForgotPassword);

var _LoginCardRememberMe = require('./components/LoginCardComponents/LoginCardRememberMe');

var _LoginCardRememberMe2 = _interopRequireDefault(_LoginCardRememberMe);

var _LoginCardSocialSection = require('./components/LoginCardComponents/LoginCardSocialSection');

var _LoginCardSocialSection2 = _interopRequireDefault(_LoginCardSocialSection);

var _LoginCardSocialLink = require('./components/LoginCardComponents/LoginCardSocialLink');

var _LoginCardSocialLink2 = _interopRequireDefault(_LoginCardSocialLink);

var _LoginCardSocialColumns = require('./components/LoginCardComponents/LoginCardSocialColumns');

var _LoginCardSocialColumns2 = _interopRequireDefault(_LoginCardSocialColumns);

var _SocialLoginCard = require('./components/LoginCardComponents/SocialLoginCard');

var _SocialLoginCard2 = _interopRequireDefault(_SocialLoginCard);

var _BasicLoginCardLayout = require('./components/LoginCardComponents/BasicLoginCardLayout');

var _BasicLoginCardLayout2 = _interopRequireDefault(_BasicLoginCardLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var LoginPagePattern = function LoginPagePattern(_ref) {
  var container = _ref.container,
      header = _ref.header,
      footerLinks = _ref.footerLinks,
      card = _ref.card;
  return _react2.default.createElement(
    LoginPage.Container,
    container,
    _react2.default.createElement(LoginPage.Alerts, { alert: container.alert }),
    _react2.default.createElement(
      LoginPage.BasicLayout,
      null,
      _react2.default.createElement(LoginPage.Header, header),
      _react2.default.createElement(
        _LoginCard2.default.BasicLayout,
        card.layout,
        _react2.default.createElement(
          _LoginCard2.default,
          null,
          _react2.default.createElement(
            _LoginCard2.default.Header,
            null,
            _react2.default.createElement(_LoginCard2.default.LanguagePicker, {
              selectedLanguage: card.selectedLanguage,
              availableLanguages: card.availableLanguages,
              onLanguageChange: card.onLanguageChange
            }),
            _react2.default.createElement(
              'h1',
              null,
              card.title
            )
          ),
          _react2.default.createElement(
            _LoginCard2.default.WithValidation,
            card.form,
            _react2.default.createElement(_LoginCard2.default.Form, null)
          ),
          _react2.default.createElement(_LoginCard2.default.SignUp, card.signUp)
        ),
        _react2.default.createElement(LoginPage.Footer, { links: footerLinks })
      )
    )
  );
};

var LoginPage = function LoginPage(props) {
  return _react2.default.createElement(
    LoginPage.WithTranslation,
    props,
    _react2.default.createElement(LoginPage.Pattern, null)
  );
};

LoginPage.Container = _LoginPageContainer2.default;
LoginPage.Header = _LoginPageHeader2.default;
LoginPage.Footer = _LoginPageFooter2.default;
LoginPage.Card = _LoginCard2.default;
LoginPage.FooterLinks = _LoginFooterLinks2.default;
LoginPage.WithTranslation = _LoginPageWithTranslation2.default;
LoginPage.Alerts = _LoginPageAlerts2.default;
LoginPage.Alert = _LoginPageAlert2.default;
LoginPage.Pattern = LoginPagePattern;
LoginPage.Social = _SocialLoginPage2.default;
LoginPage.SocialContainer = _SocialLoginPageContainer2.default;
LoginPage.BasicLayout = _BasicLoginPageLayout2.default;
LoginPage.Link = _LoginPageLink2.default;
LoginPage.CardHeaer = _LoginCardHeader2.default;
LoginPage.LanguagePicker = _LoginLanguagePicker2.default;
LoginPage.CardWithValidation = _LoginCardWithValidation2.default;
LoginPage.CardForm = _LoginCardForm2.default;
LoginPage.CardSignUp = _LoginCardSignUp2.default;
LoginPage.CardInput = _LoginCardInput2.default;
LoginPage.CardInputWarning = _LoginCardInputWarning2.default;
LoginPage.CardSettings = _LoginCardSettings2.default;
LoginPage.FormError = _LoginFormError2.default;
LoginPage.CardForgotPassword = _LoginCardForgotPassword2.default;
LoginPage.CardRememberMe = _LoginCardRememberMe2.default;
LoginPage.CardSocialSection = _LoginCardSocialSection2.default;
LoginPage.CardSocialLink = _LoginCardSocialLink2.default;
LoginPage.CardSocialColumns = _LoginCardSocialColumns2.default;
LoginPage.SocialLoginCard = _SocialLoginCard2.default;
LoginPage.BasicLoginCardLayout = _BasicLoginCardLayout2.default;

LoginPagePattern.propTypes = {
  container: _propTypes2.default.shape(_extends({}, LoginPage.Container.propTypes)),
  header: _propTypes2.default.shape(_extends({}, LoginPage.Header.propTypes)),
  card: _propTypes2.default.shape(_extends({}, _LoginCard2.default.LanguagePicker.propTypes, _LoginCard2.default.Form.propTypes, _LoginCard2.default.SignUp.propTypes, _LoginCard2.default.RememberMe.propTypes, _LoginCard2.default.ForgotPassword.propTypes)),
  footerLinks: _propTypes2.default.array
};

LoginPagePattern.defaultProps = {
  container: _extends({}, LoginPage.Container.defaultProps),
  header: _extends({}, LoginPage.Header.defaultProps),
  card: _extends({}, _LoginCard2.default.LanguagePicker.defaultProps, _LoginCard2.default.Form.defaultProps, _LoginCard2.default.SignUp.defaultProps, _LoginCard2.default.RememberMe.defaultProps, _LoginCard2.default.ForgotPassword.defaultProps),
  footerLinks: [].concat(_toConsumableArray(LoginPage.Footer.defaultProps.links))
};

LoginPage.propTypes = _extends({}, LoginPagePattern.propTypes);
LoginPage.defaultProps = _extends({}, LoginPagePattern.defaultProps);

exports.default = LoginPage;