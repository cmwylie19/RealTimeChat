var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import LoginCard from './components/LoginCardComponents/LoginCard';
import LoginPage from './LoginPage';

var SocialLoginPagePattern = function SocialLoginPagePattern(_ref) {
  var container = _ref.container,
      header = _ref.header,
      footerLinks = _ref.footerLinks,
      card = _ref.card;
  return React.createElement(
    LoginPage.SocialContainer,
    container,
    React.createElement(LoginPage.Alerts, { alert: container.alert }),
    React.createElement(LoginPage.Header, header),
    React.createElement(
      LoginCard.Social,
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
        LoginCard.SocialSection,
        null,
        React.createElement(
          LoginCard.WithValidation,
          card.form,
          React.createElement(LoginCard.Form, null)
        )
      ),
      React.createElement(
        LoginCard.SocialSection,
        null,
        React.createElement(LoginCard.SocialColumns, card.social)
      ),
      React.createElement(LoginCard.SignUp, card.signUp)
    ),
    React.createElement(LoginPage.Footer, { links: footerLinks })
  );
};

var SocialLoginPage = function SocialLoginPage(props) {
  return React.createElement(
    LoginPage.WithTranslation,
    props,
    React.createElement(SocialLoginPagePattern, null)
  );
};

var getLoginPage = function getLoginPage(props) {
  return LoginPage(props);
};

SocialLoginPage.Pattern = SocialLoginPagePattern;

SocialLoginPagePattern.propTypes = _extends({}, getLoginPage.propTypes);

SocialLoginPagePattern.defaultProps = _extends({}, getLoginPage.defaultProps);

export default SocialLoginPage;