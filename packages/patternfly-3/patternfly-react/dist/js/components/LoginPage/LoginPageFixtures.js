'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBuildYourOwnSocialLoginPageProps = exports.getManagedSocialLoginPageProps = exports.getBuildYourOwnPageProps = exports.getManagedPageProps = exports.getManagedPageWithErrorsOnTopProps = exports.createLogoList = undefined;

var _messages = require('./mocks/messages.en');

var _messages2 = _interopRequireDefault(_messages);

var _messages3 = require('./mocks/messages.fr');

var _messages4 = _interopRequireDefault(_messages3);

var _img = require('./assets/img');

var _img2 = _interopRequireDefault(_img);

var _addonActions = require('@storybook/addon-actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storyAction = function storyAction(e, message) {
  e.preventDefault();
  (0, _addonActions.action)(message)();
};
// eslint-disable-next-line import/no-extraneous-dependencies
var createLogoList = exports.createLogoList = function createLogoList() {
  var socialLinkClick = function socialLinkClick(e) {
    return storyAction(e, 'Social Link was clicked');
  };
  var google = _img2.default.google,
      facebook = _img2.default.facebook,
      linkedin = _img2.default.linkedin,
      github = _img2.default.github,
      instagram = _img2.default.instagram,
      stackExchange = _img2.default.stackExchange,
      twitter = _img2.default.twitter,
      git = _img2.default.git,
      openID = _img2.default.openID,
      dropbox = _img2.default.dropbox,
      fedora = _img2.default.fedora,
      skype = _img2.default.skype;

  return [{
    src: google,
    alt: 'Google',
    text: 'Google',
    onClick: function onClick(e) {
      return socialLinkClick(e);
    }
  }, {
    src: facebook,
    alt: 'Facebook',
    text: 'Facebook',
    onClick: function onClick(e) {
      return socialLinkClick(e);
    }
  }, {
    src: linkedin,
    alt: 'Linkedin',
    text: 'Linkedin',
    onClick: function onClick(e) {
      return socialLinkClick(e);
    }
  }, {
    src: github,
    alt: 'Github',
    text: 'Github',
    onClick: function onClick(e) {
      return socialLinkClick(e);
    }
  }, {
    src: instagram,
    alt: 'Instagram',
    text: 'Instagram',
    onClick: function onClick(e) {
      return socialLinkClick(e);
    }
  }, {
    src: git,
    alt: 'Git',
    text: 'Git',
    onClick: function onClick(e) {
      return socialLinkClick(e);
    }
  }, {
    src: openID,
    alt: 'OpenID',
    text: 'OpenID',
    onClick: function onClick(e) {
      return socialLinkClick(e);
    }
  }, {
    src: dropbox,
    alt: 'Dropbox',
    text: 'Dropbox',
    onClick: function onClick(e) {
      return socialLinkClick(e);
    }
  }, {
    src: fedora,
    alt: 'Fedora',
    text: 'Fedora',
    onClick: function onClick(e) {
      return socialLinkClick(e);
    }
  }, {
    src: skype,
    alt: 'Skype',
    text: 'Skype',
    onClick: function onClick(e) {
      return socialLinkClick(e);
    }
  }, {
    src: twitter,
    alt: 'Twitter',
    text: 'Twitter',
    onClick: function onClick(e) {
      return socialLinkClick(e);
    }
  }, {
    src: stackExchange,
    alt: 'StackExchange',
    text: 'StackExchange',
    onClick: function onClick(e) {
      return socialLinkClick(e);
    }
  }];
};

var getManagedPageWithErrorsOnTopProps = exports.getManagedPageWithErrorsOnTopProps = function getManagedPageWithErrorsOnTopProps() {
  var header = _messages2.default.header,
      footerLinks = _messages2.default.footerLinks,
      card = _messages2.default.card;

  footerLinks.forEach(function (link) {
    link.onClick = function (e) {
      return storyAction(e, 'Footer Link was pressed');
    };
  });
  return {
    container: {
      backgroundUrl: _img2.default.background,
      translations: { en: _messages2.default, fr: _messages4.default },
      className: '',
      alert: {
        message: header.alert,
        onDismiss: function onDismiss(e) {
          return storyAction(e, 'Notification was dismissed');
        },
        show: true
      }
    },
    header: {
      logoSrc: _img2.default.brand,
      logoTitle: header.logo,
      caption: header.caption
    },
    footerLinks: footerLinks,
    card: {
      title: card.header.title,
      selectedLanguage: card.header.selectedLanguage,
      availableLanguages: card.header.availableLanguages,
      signUp: {
        label: card.signUp.label,
        link: {
          children: card.signUp.link.label,
          href: '#',
          onClick: function onClick(e) {
            return storyAction(e, 'sign up was clicked');
          }
        }
      },
      form: {
        validate: true,
        topErrorOnly: true,
        usernameField: {
          id: 'card_email',
          type: 'email',
          placeholder: card.usernameField.placeholder,
          errors: card.usernameField.errors
        },
        passwordField: {
          id: 'card_password',
          type: 'password',
          placeholder: card.passwordField.placeholder,
          minLength: 8,
          errors: card.passwordField.errors,
          warnings: card.passwordField.warnings
        },
        additionalFields: null,
        rememberMe: {
          label: card.rememberMe,
          onClick: function onClick(e) {
            return (0, _addonActions.action)('remember me checkbox was clicked')();
          }
        },
        forgotPassword: {
          label: card.forgotPassword,
          href: '#',
          onClick: function onClick(e) {
            return storyAction(e, 'Forgot password was clicked');
          }
        },
        disableSubmit: false,
        submitText: card.form.submitText,
        onSubmit: function onSubmit(e, onError) {
          storyAction(e, 'Form was submitted successfully !');
          setTimeout(function () {
            return onError('Returning some server error');
          }, 2000);
        }
      }
    }
  };
};

var getManagedPageProps = exports.getManagedPageProps = function getManagedPageProps() {
  var header = _messages2.default.header,
      footerLinks = _messages2.default.footerLinks,
      card = _messages2.default.card;

  footerLinks.forEach(function (link) {
    link.onClick = function (e) {
      return storyAction(e, 'Footer Link was pressed');
    };
  });
  return {
    container: {
      backgroundUrl: _img2.default.background,
      translations: { en: _messages2.default, fr: _messages4.default },
      className: '',
      alert: {
        message: header.alert,
        onDismiss: function onDismiss(e) {
          return storyAction(e, 'Notification was dismissed');
        },
        show: true
      }
    },
    header: {
      logoSrc: _img2.default.brand,
      logoTitle: header.logo,
      caption: header.caption
    },
    footerLinks: footerLinks,
    card: {
      title: card.header.title,
      selectedLanguage: card.header.selectedLanguage,
      availableLanguages: card.header.availableLanguages,
      signUp: {
        label: card.signUp.label,
        link: {
          children: card.signUp.link.label,
          href: '#',
          onClick: function onClick(e) {
            return storyAction(e, 'sign up was clicked');
          }
        }
      },
      form: {
        validate: true,
        usernameField: {
          id: 'card_email',
          type: 'email',
          placeholder: card.usernameField.placeholder,
          errors: card.usernameField.errors
        },
        passwordField: {
          id: 'card_password',
          type: 'password',
          placeholder: card.passwordField.placeholder,
          minLength: 8,
          errors: card.passwordField.errors,
          warnings: card.passwordField.warnings
        },
        additionalFields: null,
        rememberMe: {
          label: card.rememberMe,
          onClick: function onClick(e) {
            return (0, _addonActions.action)('remember me checkbox was clicked')();
          }
        },
        forgotPassword: {
          label: card.forgotPassword,
          href: '#',
          onClick: function onClick(e) {
            return storyAction(e, 'Forgot password was clicked');
          }
        },
        disableSubmit: false,
        submitText: card.form.submitText,
        onSubmit: function onSubmit(e, onError) {
          storyAction(e, 'Form was submitted successfully !');
          setTimeout(function () {
            return onError('Returning some server error');
          }, 2000);
        }
      },
      social: {
        links: createLogoList()
      }
    }
  };
};

var getBuildYourOwnPageProps = exports.getBuildYourOwnPageProps = function getBuildYourOwnPageProps() {
  var header = _messages2.default.header,
      footerLinks = _messages2.default.footerLinks,
      card = _messages2.default.card;

  footerLinks.forEach(function (link) {
    link.onClick = function (e) {
      return storyAction(e, 'Footer Link was pressed');
    };
  });
  return {
    container: {
      backgroundUrl: _img2.default.background,
      translations: { en: _messages2.default, fr: _messages4.default },
      className: '',
      alert: {
        message: header.alert,
        onDismiss: function onDismiss(e) {
          return storyAction(e, 'Notification was dismissed');
        },
        show: true
      }
    },
    header: {
      logoSrc: _img2.default.brand,
      logoTitle: header.logo,
      caption: header.caption
    },
    footerLinks: footerLinks,
    card: {
      title: card.header.title,
      selectedLanguage: card.header.selectedLanguage,
      availableLanguages: card.header.availableLanguages,
      signUp: {
        label: card.signUp.label,
        link: {
          children: card.signUp.link.label,
          href: '#',
          onClick: function onClick(e) {
            return storyAction(e, 'sign up was clicked');
          }
        }
      },
      form: {
        validate: false,
        usernameField: {
          id: 'card_email',
          type: 'email',
          placeholder: card.usernameField.placeholder,
          errors: card.usernameField.errors
        },
        passwordField: {
          id: 'card_password',
          type: 'password',
          placeholder: card.passwordField.placeholder,
          minLength: 8,
          errors: card.passwordField.errors,
          warnings: card.passwordField.warnings
        },
        additionalFields: null,
        rememberMe: {
          label: card.rememberMe,
          onClick: function onClick(e) {
            return (0, _addonActions.action)('remember me checkbox was clicked')();
          }
        },
        forgotPassword: {
          label: card.forgotPassword,
          href: '#',
          onClick: function onClick(e) {
            return storyAction(e, 'Forgot password was clicked');
          }
        },
        disableSubmit: false,
        submitText: card.form.submitText,
        onSubmit: function onSubmit(e, onError) {
          storyAction(e, 'Form was submitted successfully !');
          setTimeout(function () {
            return onError('Returning some server error');
          }, 2000);
        }
      }
    }
  };
};

var getManagedSocialLoginPageProps = exports.getManagedSocialLoginPageProps = function getManagedSocialLoginPageProps() {
  var header = _messages2.default.header,
      footerLinks = _messages2.default.footerLinks,
      card = _messages2.default.card;

  footerLinks.forEach(function (link) {
    link.onClick = function (e) {
      return storyAction(e, 'Footer Link was pressed');
    };
  });
  return {
    container: {
      backgroundUrl: _img2.default.background,
      translations: { en: _messages2.default, fr: _messages4.default },
      className: '',
      alert: {
        message: header.alert,
        onDismiss: function onDismiss(e) {
          return storyAction(e, 'Notification was dismissed');
        },
        show: true
      }
    },
    header: {
      logoSrc: _img2.default.brand,
      logoTitle: header.logo,
      caption: header.caption
    },
    footerLinks: footerLinks,
    card: {
      title: card.header.title,
      selectedLanguage: card.header.selectedLanguage,
      availableLanguages: card.header.availableLanguages,
      signUp: {
        label: card.signUp.label,
        link: {
          children: card.signUp.link.label,
          href: '#',
          onClick: function onClick(e) {
            return storyAction(e, 'sign up was clicked');
          }
        }
      },
      form: {
        validate: true,
        usernameField: {
          id: 'card_email',
          type: 'email',
          placeholder: card.usernameField.placeholder,
          errors: card.usernameField.errors
        },
        passwordField: {
          id: 'card_password',
          type: 'password',
          placeholder: card.passwordField.placeholder,
          minLength: 8,
          errors: card.passwordField.errors,
          warnings: card.passwordField.warnings
        },
        additionalFields: null,
        rememberMe: {
          label: card.rememberMe,
          onClick: function onClick(e) {
            return (0, _addonActions.action)('remember me checkbox was clicked')();
          }
        },
        forgotPassword: {
          label: card.forgotPassword,
          href: '#',
          onClick: function onClick(e) {
            return storyAction(e, 'Forgot password was clicked');
          }
        },
        disableSubmit: false,
        submitText: card.form.submitText,
        onSubmit: function onSubmit(e, onError) {
          storyAction(e, 'Form was submitted successfully !');
          setTimeout(function () {
            return onError('Returning some server error');
          }, 2000);
        }
      },
      social: {
        links: createLogoList()
      }
    }
  };
};

var getBuildYourOwnSocialLoginPageProps = exports.getBuildYourOwnSocialLoginPageProps = function getBuildYourOwnSocialLoginPageProps() {
  var header = _messages2.default.header,
      footerLinks = _messages2.default.footerLinks,
      card = _messages2.default.card;

  footerLinks.forEach(function (link) {
    link.onClick = function (e) {
      return storyAction(e, 'Footer Link was pressed');
    };
  });
  return {
    container: {
      backgroundUrl: _img2.default.background,
      translations: { en: _messages2.default, fr: _messages4.default },
      className: '',
      alert: {
        message: header.alert,
        onDismiss: function onDismiss(e) {
          return storyAction(e, 'Notification was dismissed');
        },
        show: true
      }
    },
    header: {
      logoSrc: _img2.default.brand,
      logoTitle: header.logo,
      caption: header.caption
    },
    footerLinks: footerLinks,
    card: {
      title: card.header.title,
      selectedLanguage: card.header.selectedLanguage,
      availableLanguages: card.header.availableLanguages,
      signUp: {
        label: card.signUp.label,
        link: {
          children: card.signUp.link.label,
          href: '#',
          onClick: function onClick(e) {
            return storyAction(e, 'sign up was clicked');
          }
        }
      },
      form: {
        validate: false,
        submitError: card.form.error,
        showError: true,
        usernameField: {
          id: 'card_email',
          type: 'email',
          placeholder: card.usernameField.placeholder,
          errors: card.usernameField.errors,
          error: card.usernameField.errors.invalid,
          showError: true
        },
        passwordField: {
          id: 'card_password',
          type: 'password',
          placeholder: card.passwordField.placeholder,
          minLength: 8,
          errors: card.passwordField.errors,
          warnings: card.passwordField.warnings,
          warning: card.passwordField.warnings.capsLock,
          showWarning: true
        },
        additionalFields: null,
        rememberMe: {
          label: card.rememberMe,
          onClick: function onClick(e) {
            return (0, _addonActions.action)('remember me checkbox was clicked')();
          }
        },
        forgotPassword: {
          label: card.forgotPassword,
          href: '#',
          onClick: function onClick(e) {
            return storyAction(e, 'Forgot password was clicked');
          }
        },
        disableSubmit: false,
        submitText: card.form.submitText,
        onSubmit: function onSubmit(e, onError) {
          storyAction(e, 'Form was submitted successfully !');
          setTimeout(function () {
            return onError('Returning some server error');
          }, 2000);
        }
      },
      social: {
        links: createLogoList()
      }
    }
  };
};