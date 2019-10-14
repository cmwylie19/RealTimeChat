import englishMessages from './mocks/messages.en';
import frenchMessages from './mocks/messages.fr';
import images from './assets/img';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

var storyAction = function storyAction(e, message) {
  e.preventDefault();
  action(message)();
};

export var createLogoList = function createLogoList() {
  var socialLinkClick = function socialLinkClick(e) {
    return storyAction(e, 'Social Link was clicked');
  };
  var google = images.google,
      facebook = images.facebook,
      linkedin = images.linkedin,
      github = images.github,
      instagram = images.instagram,
      stackExchange = images.stackExchange,
      twitter = images.twitter,
      git = images.git,
      openID = images.openID,
      dropbox = images.dropbox,
      fedora = images.fedora,
      skype = images.skype;

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

export var getManagedPageWithErrorsOnTopProps = function getManagedPageWithErrorsOnTopProps() {
  var header = englishMessages.header,
      footerLinks = englishMessages.footerLinks,
      card = englishMessages.card;

  footerLinks.forEach(function (link) {
    link.onClick = function (e) {
      return storyAction(e, 'Footer Link was pressed');
    };
  });
  return {
    container: {
      backgroundUrl: images.background,
      translations: { en: englishMessages, fr: frenchMessages },
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
      logoSrc: images.brand,
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
            return action('remember me checkbox was clicked')();
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

export var getManagedPageProps = function getManagedPageProps() {
  var header = englishMessages.header,
      footerLinks = englishMessages.footerLinks,
      card = englishMessages.card;

  footerLinks.forEach(function (link) {
    link.onClick = function (e) {
      return storyAction(e, 'Footer Link was pressed');
    };
  });
  return {
    container: {
      backgroundUrl: images.background,
      translations: { en: englishMessages, fr: frenchMessages },
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
      logoSrc: images.brand,
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
            return action('remember me checkbox was clicked')();
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

export var getBuildYourOwnPageProps = function getBuildYourOwnPageProps() {
  var header = englishMessages.header,
      footerLinks = englishMessages.footerLinks,
      card = englishMessages.card;

  footerLinks.forEach(function (link) {
    link.onClick = function (e) {
      return storyAction(e, 'Footer Link was pressed');
    };
  });
  return {
    container: {
      backgroundUrl: images.background,
      translations: { en: englishMessages, fr: frenchMessages },
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
      logoSrc: images.brand,
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
            return action('remember me checkbox was clicked')();
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

export var getManagedSocialLoginPageProps = function getManagedSocialLoginPageProps() {
  var header = englishMessages.header,
      footerLinks = englishMessages.footerLinks,
      card = englishMessages.card;

  footerLinks.forEach(function (link) {
    link.onClick = function (e) {
      return storyAction(e, 'Footer Link was pressed');
    };
  });
  return {
    container: {
      backgroundUrl: images.background,
      translations: { en: englishMessages, fr: frenchMessages },
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
      logoSrc: images.brand,
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
            return action('remember me checkbox was clicked')();
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

export var getBuildYourOwnSocialLoginPageProps = function getBuildYourOwnSocialLoginPageProps() {
  var header = englishMessages.header,
      footerLinks = englishMessages.footerLinks,
      card = englishMessages.card;

  footerLinks.forEach(function (link) {
    link.onClick = function (e) {
      return storyAction(e, 'Footer Link was pressed');
    };
  });
  return {
    container: {
      backgroundUrl: images.background,
      translations: { en: englishMessages, fr: frenchMessages },
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
      logoSrc: images.brand,
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
            return action('remember me checkbox was clicked')();
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