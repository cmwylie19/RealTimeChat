var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import LoginCardInput from './LoginCardInput';
import { KEY_CODES, KEYS } from '../../../../common/helpers';

var LoginCardWithValidation = function (_React$Component) {
  _inherits(LoginCardWithValidation, _React$Component);

  function LoginCardWithValidation() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LoginCardWithValidation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LoginCardWithValidation.__proto__ || Object.getPrototypeOf(LoginCardWithValidation)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      usernameField: {
        value: '',
        errorType: null,
        isFocused: false,
        showError: false
      },
      passwordField: {
        value: '',
        errorType: null,
        warningType: null,
        isFocused: false,
        showError: false
      },
      isCapsLock: false,
      form: {
        showError: _this.props.topErrorOnly ? true : _this.props.showError,
        submitError: _this.props.submitError,
        disableSubmit: true,
        isSubmitting: _this.props.isSubmitting,
        topErrorOnly: _this.props.topErrorOnly,
        errors: [_this.props.submitError]
      }
    }, _this.shouldDisableSubmit = function (inputType, updatedInputValue) {
      if (updatedInputValue.length < 1) {
        return true;
      }
      var otherInputType = inputType === 'usernameField' ? 'passwordField' : 'usernameField';
      var otherInputValue = _this.state[otherInputType].value;
      return otherInputValue.length < 1;
    }, _this.onInputChange = function (e, inputType) {
      var value = e.target.value;

      _this.props[inputType].onChange && _this.props[inputType].onChange(e);
      _this.setState(function (_ref2) {
        var _ref3;

        var form = _ref2.form;
        return _ref3 = {}, _defineProperty(_ref3, inputType, _extends({}, _this.state[inputType], {
          value: value,
          showError: false
        })), _defineProperty(_ref3, 'form', _extends({}, form, {
          disableSubmit: _this.shouldDisableSubmit(inputType, value)
        })), _ref3;
      });
    }, _this.onInputFocus = function (e, inputType) {
      _this.props[inputType].onFocus && _this.props[inputType].onFocus(e);
      _this.setState(_defineProperty({}, inputType, _extends({}, _this.state[inputType], {
        isFocused: true,
        showError: false
      })));
    }, _this.onInputBlur = function (e, inputType) {
      var _this$setState2;

      _this.props[inputType].onBlur && _this.props[inputType].onBlur(e);
      _this.setState((_this$setState2 = {}, _defineProperty(_this$setState2, inputType, _extends({}, _this.state[inputType], {
        isFocused: false,
        showError: false
      })), _defineProperty(_this$setState2, 'isCapsLock', false), _this$setState2));
    }, _this.onKeyPress = function (e, inputType) {
      _this.props[inputType].onMouseEnter && _this.props[inputType].onMouseEnter(e);
      _this.handleCapsLock(e);
    }, _this.onSubmit = function (e) {
      e.preventDefault();
      if (_this.isFormValid()) {
        _this.onSubmitStart();
        _this.props.onSubmit(e, _this.onSubmitError);
      } else {
        _this.handleOnInputErrors();
      }
    }, _this.onSubmitStart = function () {
      _this.setState(function (_ref4) {
        var form = _ref4.form;
        return {
          form: _extends({}, form, {
            disableSubmit: true,
            isSubmitting: true,
            errors: form.topErrorOnly ? [] : form.topErrorOnly,
            showError: false
          })
        };
      });
    }, _this.onSubmitError = function (submitError) {
      _this.setState(function (_ref5) {
        var form = _ref5.form;
        return {
          form: _extends({}, form, {
            showError: true,
            submitError: submitError,
            errors: [submitError],
            disableSubmit: false,
            isSubmitting: false
          })
        };
      });
    }, _this.getFormError = function () {
      var _this$state$form = _this.state.form,
          topErrorOnly = _this$state$form.topErrorOnly,
          submitError = _this$state$form.submitError,
          errors = _this$state$form.errors;

      return topErrorOnly ? errors.map(function (error, index) {
        return React.createElement(
          'div',
          { className: 'login-form-error', key: index },
          error
        );
      }) : submitError;
    }, _this.getModifiedProps = function () {
      var _this$state = _this.state,
          usernameField = _this$state.usernameField,
          passwordField = _this$state.passwordField,
          isCapsLock = _this$state.isCapsLock,
          form = _this$state.form;
      var warnings = _this.props.passwordField.warnings;

      var passwordFieldWarningType = _this.state.isCapsLock ? 'capsLock' : _this.state.passwordField.warningType;
      return {
        usernameField: _extends({}, _this.props.usernameField, {
          onChange: function onChange(e) {
            return _this.onInputChange(e, 'usernameField');
          },
          onFocus: function onFocus(e) {
            return _this.onInputFocus(e, 'usernameField');
          },
          onBlur: function onBlur(e) {
            return _this.onInputBlur(e, 'usernameField');
          },
          onKeyPress: function onKeyPress(e) {
            return _this.onKeyPress(e, 'usernameField');
          },
          error: usernameField.error,
          showError: usernameField.showError
        }),
        passwordField: _extends({}, _this.props.passwordField, {
          onChange: function onChange(e) {
            return _this.onInputChange(e, 'passwordField');
          },
          onFocus: function onFocus(e) {
            return _this.onInputFocus(e, 'passwordField');
          },
          onBlur: function onBlur(e) {
            return _this.onInputBlur(e, 'passwordField');
          },
          onKeyPress: function onKeyPress(e) {
            return _this.onKeyPress(e, 'passwordField');
          },
          warning: warnings && warnings[passwordFieldWarningType],
          showWarning: passwordField.isFocused && isCapsLock,
          error: passwordField.error,
          showError: passwordField.showError
        }),
        onSubmit: function onSubmit(e) {
          return _this.onSubmit(e);
        },
        showError: form.showError,
        disableSubmit: form.disableSubmit,
        isSubmitting: form.isSubmitting,
        submitError: _this.getFormError()
      };
    }, _this.handleOnInputErrors = function () {
      var _this$state2 = _this.state,
          usernameField = _this$state2.usernameField,
          passwordField = _this$state2.passwordField;
      var topErrorOnly = _this.props.topErrorOnly;


      topErrorOnly && _this.clearFormErrors();

      if (usernameField.value) {
        !_this.isUserNameValid() && _this.handleOnInvalidUsername();
      } else {
        _this.handleOnEmptyInput('usernameField');
      }

      if (passwordField.value) {
        _this.isPasswordShort() && _this.handleOnPasswordTooShort();
      } else {
        _this.handleOnEmptyInput('passwordField');
      }

      !topErrorOnly && _this.hideSubmitError();
    }, _this.isFormValid = function () {
      return !!_this.state.usernameField.value && !!_this.state.passwordField.value && !_this.isPasswordShort() && _this.isUserNameValid();
    }, _this.isPasswordShort = function () {
      var passwordMinLength = _this.props.passwordField.minLength;
      var currentPasswordLength = _this.state.passwordField.value.length;

      return passwordMinLength > 0 && currentPasswordLength < passwordMinLength;
    }, _this.hideSubmitError = function () {
      _this.setState({
        form: _extends({}, _this.state.form, {
          showError: false
        })
      });
    }, _this.clearFormErrors = function () {
      _this.setState(function (_ref6) {
        var form = _ref6.form;
        return {
          form: _extends({}, form, {
            errors: []
          })
        };
      });
    }, _this.handleOnPasswordTooShort = function () {
      var error = _this.props.passwordField.errors.short;

      _this.setState(function (_ref7) {
        var form = _ref7.form,
            passwordField = _ref7.passwordField;
        return form.topErrorOnly ? {
          form: _extends({}, form, {
            errors: [].concat(_toConsumableArray(form.errors), [error]),
            showError: true
          })
        } : {
          passwordField: _extends({}, passwordField, {
            error: error,
            showError: true
          })
        };
      });
    }, _this.handleOnInvalidUsername = function () {
      var error = _this.props.usernameField.errors.invalid;

      _this.setState(function (_ref8) {
        var form = _ref8.form,
            usernameField = _ref8.usernameField;
        return form.topErrorOnly ? {
          form: _extends({}, form, {
            errors: [].concat(_toConsumableArray(form.errors), [error]),
            showError: true
          })
        } : {
          usernameField: _extends({}, usernameField, {
            error: error,
            showError: true
          })
        };
      });
    }, _this.handleOnEmptyInput = function (inputType) {
      var error = _this.props[inputType].errors.empty;

      _this.setState(function (_ref9) {
        var form = _ref9.form;
        return form.topErrorOnly ? {
          form: _extends({}, form, {
            errors: [].concat(_toConsumableArray(form.errors), [error]),
            showError: true
          })
        } : _defineProperty({}, inputType, _extends({}, _this.state[inputType], {
          error: error,
          showError: true
        }));
      });
    }, _this.toggleCapsLock = function (e) {
      if (!_this.state.passwordField.value) {
        return;
      }
      e.key === KEYS.CAPSLOCK && _this.setState({
        isCapsLock: !_this.state.isCapsLock
      });
    }, _this.handleCapsLock = function (e) {
      var keyCode = e.keyCode ? e.keyCode : e.which;
      var shiftKey = e.shiftKey ? e.shiftKey : keyCode === KEY_CODES.SHIFT;
      var isCapsLock = keyCode >= KEY_CODES.A && keyCode <= KEY_CODES.Z && !shiftKey || keyCode >= KEY_CODES.NUMPAD['0'] && keyCode <= KEY_CODES.F11 && shiftKey;
      _this.setState({
        isCapsLock: isCapsLock
      });
    }, _this.isUserNameValid = function () {
      var userType = _this.props.usernameField.type;

      if (userType === 'email') {
        var mailAddress = _this.state.usernameField.value;
        var atPos = mailAddress.indexOf('@');
        var dotPos = mailAddress.lastIndexOf('.');
        return atPos > 1 && dotPos - atPos > 2 && atPos < dotPos;
      }
      return true;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LoginCardWithValidation, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('keyup', this.toggleCapsLock);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('keyup', this.toggleCapsLock);
    }

    // eslint-disable-next-line class-methods-use-this

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          validate = _props.validate,
          children = _props.children;

      return validate ? React.cloneElement(children, _extends({}, this.props, this.getModifiedProps())) : React.cloneElement(children, _extends({}, this.props));
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, state) {
      // disableSubmit prop will only be used in a not validated login card
      var validate = props.validate,
          disableSubmit = props.disableSubmit;

      if (validate) {
        return null;
      }
      if (disableSubmit !== state.form.disableSubmit) {
        return {
          form: { disableSubmit: disableSubmit }
        };
      }
      return null;
    }
  }]);

  return LoginCardWithValidation;
}(React.Component);

LoginCardWithValidation.propTypes = {
  validate: PropTypes.bool,
  children: PropTypes.node.isRequired,
  usernameField: PropTypes.shape(_extends({}, LoginCardInput.propTypes, {
    errors: PropTypes.object
  })),
  passwordField: PropTypes.shape(_extends({}, LoginCardInput.propTypes, {
    errors: PropTypes.object,
    warnings: PropTypes.object,
    minLength: PropTypes.number
  })),
  onSubmit: PropTypes.func,
  submitError: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  // eslint-disable-next-line react/no-unused-prop-types
  disableSubmit: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  showError: PropTypes.bool,
  topErrorOnly: PropTypes.bool
};

LoginCardWithValidation.defaultProps = {
  validate: true,
  usernameField: _extends({}, LoginCardInput.defaultProps.usernameField),
  passwordField: _extends({}, LoginCardInput.defaultProps.passwordField),
  onSubmit: function onSubmit(e) {
    return e.target.submit();
  },
  submitError: null,
  disableSubmit: false,
  isSubmitting: false,
  showError: false,
  topErrorOnly: false
};

export default LoginCardWithValidation;