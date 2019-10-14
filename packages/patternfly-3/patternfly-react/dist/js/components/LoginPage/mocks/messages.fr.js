'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var pageHeader = {
  alert: 'Patternfly sera mis à jour à 2.13.5 à 00:00, 23 Sep 2018 (UTC). Cette mise à jour durera de 8 à 12 heures, veuillez planifier à l\'avance pour cette panne.',
  logo: 'Patternfly',
  caption: 'Utilisez cette zone pour placer des informations ou un message d\'introduction sur votre application qui peut être pertinent pour utilisateurs.'
};

var footerLinks = [{ children: 'Conditions d\'utilisation', href: '#' }, { children: 'Aidez-moi', href: '#' }, { children: 'Politique de confidentialité', href: '#' }];

var cardHeader = {
  title: 'Connectez-vous à votre compte',
  selectedLanguage: 'Français',
  availableLanguages: [{ value: 'en', text: 'Anglais' }, { value: 'fr', text: 'Français' }]
};

var signUp = {
  label: 'Besoin d\'un compte?',
  link: {
    label: 'S\'inscrire'
  }
};

var rememberMe = 'Restez connecté pendant 30 jours';

var forgotPassword = 'mot de passe oublié?';

var form = {
  error: 'Votre compte a été bloqué Contactez votre administrateur pour le débloquer.',
  submitText: 'S\'identifier'
};

var passwordField = {
  placeholder: 'Mot de passe',
  errors: {
    empty: 'Veuillez entrer votre mot de passe.',
    short: 'Mot de passe trop court, la longueur minimale est de 8 caractères'
  },
  warnings: {
    capsLock: 'Le verrouillage des majuscules est actuellement activé.'
  }
};

var usernameField = {
  placeholder: 'Adresse e-mail',
  errors: {
    empty: 'S\'il vous plaît entrer votre email.',
    invalid: 'Votre email est invalide'
  }
};

var card = {
  header: cardHeader,
  form: form,
  passwordField: passwordField,
  usernameField: usernameField,
  rememberMe: rememberMe,
  forgotPassword: forgotPassword,
  signUp: signUp
};

exports.default = {
  header: pageHeader,
  footerLinks: footerLinks,
  card: card
};