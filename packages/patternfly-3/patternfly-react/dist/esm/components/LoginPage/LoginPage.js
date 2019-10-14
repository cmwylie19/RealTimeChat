var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import React from 'react';
import PropTypes from 'prop-types';
import LoginPageAlert from './components/LoginPageComponents/LoginPageAlert';
import LoginPageAlerts from './components/LoginPageComponents/LoginPageAlerts';
import Container from './components/LoginPageComponents/LoginPageContainer';
import Header from './components/LoginPageComponents/LoginPageHeader';
import Footer from './components/LoginPageComponents/LoginPageFooter';
import FooterLinks from './components/LoginPageComponents/LoginFooterLinks';
import LoginCard from './components/LoginCardComponents/LoginCard';
import WithTranslation from './components/LoginPageComponents/LoginPageWithTranslation';
import LoginPageLink from './components/LoginPageComponents/LoginPageLink';
import SocialLoginPage from './SocialLoginPage';
import SocialLoginPageContainer from './components/LoginPageComponents/SocialLoginPageContainer';
import BasicLoginPageLayout from './components/LoginPageComponents/BasicLoginPageLayout';
import LoginCardHeader from './components/LoginCardComponents/LoginCardHeader';
import LoginLanguagePicker from './components/LoginCardComponents/LoginLanguagePicker';
import LoginCardWithValidation from './components/LoginCardComponents/LoginCardWithValidation';
import LoginCardForm from './components/LoginCardComponents/LoginCardForm';
import LoginCardSignUp from './components/LoginCardComponents/LoginCardSignUp';
import LoginCardInput from './components/LoginCardComponents/LoginCardInput';
import LoginCardInputWarning from './components/LoginCardComponents/LoginCardInputWarning';
import LoginCardSettings from './components/LoginCardComponents/LoginCardSettings';
import LoginFormError from './components/LoginCardComponents/LoginFormError';
import LoginCardForgotPassword from './components/LoginCardComponents/LoginCardForgotPassword';
import LoginCardRememberMe from './components/LoginCardComponents/LoginCardRememberMe';
import LoginCardSocialSection from './components/LoginCardComponents/LoginCardSocialSection';
import LoginCardSocialLink from './components/LoginCardComponents/LoginCardSocialLink';
import LoginCardSocialColumns from './components/LoginCardComponents/LoginCardSocialColumns';
import SocialLoginCard from './components/LoginCardComponents/SocialLoginCard';
import BasicLoginCardLayout from './components/LoginCardComponents/BasicLoginCardLayout';

var LoginPagePattern = function LoginPagePattern(_ref) {
  var container = _ref.container,
      header = _ref.header,
      footerLinks = _ref.footerLinks,
      card = _ref.card;
  return React.createElement(
    LoginPage.Container,
    container,
    React.createElement(LoginPage.Alerts, { alert: container.alert }),
    React.createElement(
      LoginPage.BasicLayout,
      null,
      React.createElement(LoginPage.Header, header),
      React.createElement(
        LoginCard.BasicLayout,
        card.layout,
        React.createElement(
          LoginCard,
          null,
          React.createElement(
            LoginCard.Header,
            null,
            React.createElement(LoginCard.LanguagePicker, {
              selectedLanguage: card.selectedLanguage,
              availableLanguages: card.availableLanguages,
              onLanguageChange: card.onLanguageChange
            }),
            React.createElement(
              'h1',
              null,
              card.title
            )
          ),
          React.createElement(
            LoginCard.WithValidation,
            card.form,
            React.createElement(LoginCard.Form, null)
          ),
          React.createElement(LoginCard.SignUp, card.signUp)
        ),
        React.createElement(LoginPage.Footer, { links: footerLinks })
      )
    )
  );
};

var LoginPage = function LoginPage(props) {
  return React.createElement(
    LoginPage.WithTranslation,
    props,
    React.createElement(LoginPage.Pattern, null)
  );
};

LoginPage.Container = Container;
LoginPage.Header = Header;
LoginPage.Footer = Footer;
LoginPage.Card = LoginCard;
LoginPage.FooterLinks = FooterLinks;
LoginPage.WithTranslation = WithTranslation;
LoginPage.Alerts = LoginPageAlerts;
LoginPage.Alert = LoginPageAlert;
LoginPage.Pattern = LoginPagePattern;
LoginPage.Social = SocialLoginPage;
LoginPage.SocialContainer = SocialLoginPageContainer;
LoginPage.BasicLayout = BasicLoginPageLayout;
LoginPage.Link = LoginPageLink;
LoginPage.CardHeaer = LoginCardHeader;
LoginPage.LanguagePicker = LoginLanguagePicker;
LoginPage.CardWithValidation = LoginCardWithValidation;
LoginPage.CardForm = LoginCardForm;
LoginPage.CardSignUp = LoginCardSignUp;
LoginPage.CardInput = LoginCardInput;
LoginPage.CardInputWarning = LoginCardInputWarning;
LoginPage.CardSettings = LoginCardSettings;
LoginPage.FormError = LoginFormError;
LoginPage.CardForgotPassword = LoginCardForgotPassword;
LoginPage.CardRememberMe = LoginCardRememberMe;
LoginPage.CardSocialSection = LoginCardSocialSection;
LoginPage.CardSocialLink = LoginCardSocialLink;
LoginPage.CardSocialColumns = LoginCardSocialColumns;
LoginPage.SocialLoginCard = SocialLoginCard;
LoginPage.BasicLoginCardLayout = BasicLoginCardLayout;

LoginPagePattern.propTypes = {
  container: PropTypes.shape(_extends({}, LoginPage.Container.propTypes)),
  header: PropTypes.shape(_extends({}, LoginPage.Header.propTypes)),
  card: PropTypes.shape(_extends({}, LoginCard.LanguagePicker.propTypes, LoginCard.Form.propTypes, LoginCard.SignUp.propTypes, LoginCard.RememberMe.propTypes, LoginCard.ForgotPassword.propTypes)),
  footerLinks: PropTypes.array
};

LoginPagePattern.defaultProps = {
  container: _extends({}, LoginPage.Container.defaultProps),
  header: _extends({}, LoginPage.Header.defaultProps),
  card: _extends({}, LoginCard.LanguagePicker.defaultProps, LoginCard.Form.defaultProps, LoginCard.SignUp.defaultProps, LoginCard.RememberMe.defaultProps, LoginCard.ForgotPassword.defaultProps),
  footerLinks: [].concat(_toConsumableArray(LoginPage.Footer.defaultProps.links))
};

LoginPage.propTypes = _extends({}, LoginPagePattern.propTypes);
LoginPage.defaultProps = _extends({}, LoginPagePattern.defaultProps);

export default LoginPage;