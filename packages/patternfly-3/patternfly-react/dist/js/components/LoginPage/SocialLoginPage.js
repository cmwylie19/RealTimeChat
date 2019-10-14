'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LoginCard = require('./components/LoginCardComponents/LoginCard');

var _LoginCard2 = _interopRequireDefault(_LoginCard);

var _LoginPage = require('./LoginPage');

var _LoginPage2 = _interopRequireDefault(_LoginPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SocialLoginPagePattern = function SocialLoginPagePattern(_ref) {
  var container = _ref.container,
      header = _ref.header,
      footerLinks = _ref.footerLinks,
      card = _ref.card;
  return _react2.default.createElement(
    _LoginPage2.default.SocialContainer,
    container,
    _react2.default.createElement(_LoginPage2.default.Alerts, { alert: container.alert }),
    _react2.default.createElement(_LoginPage2.default.Header, header),
    _react2.default.createElement(
      _LoginCard2.default.Social,
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
        _LoginCard2.default.SocialSection,
        null,
        _react2.default.createElement(
          _LoginCard2.default.WithValidation,
          card.form,
          _react2.default.createElement(_LoginCard2.default.Form, null)
        )
      ),
      _react2.default.createElement(
        _LoginCard2.default.SocialSection,
        null,
        _react2.default.createElement(_LoginCard2.default.SocialColumns, card.social)
      ),
      _react2.default.createElement(_LoginCard2.default.SignUp, card.signUp)
    ),
    _react2.default.createElement(_LoginPage2.default.Footer, { links: footerLinks })
  );
};

var SocialLoginPage = function SocialLoginPage(props) {
  return _react2.default.createElement(
    _LoginPage2.default.WithTranslation,
    props,
    _react2.default.createElement(SocialLoginPagePattern, null)
  );
};

var getLoginPage = function getLoginPage(props) {
  return (0, _LoginPage2.default)(props);
};

SocialLoginPage.Pattern = SocialLoginPagePattern;

SocialLoginPagePattern.propTypes = _extends({}, getLoginPage.propTypes);

SocialLoginPagePattern.defaultProps = _extends({}, getLoginPage.defaultProps);

exports.default = SocialLoginPage;