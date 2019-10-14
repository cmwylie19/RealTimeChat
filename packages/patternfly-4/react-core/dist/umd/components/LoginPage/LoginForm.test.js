(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./LoginForm"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./LoginForm"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.LoginForm);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _LoginForm) {
  "use strict";

  var React = _interopRequireWildcard(_react);

  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();

    _getRequireWildcardCache = function () {
      return cache;
    };

    return cache;
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    var cache = _getRequireWildcardCache();

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};

    if (obj != null) {
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
  }

  test('should render Login form', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_LoginForm.LoginForm, null));
    expect(view).toMatchSnapshot();
  });
  test('should call onChangeUsername callback', () => {
    const mockFn = jest.fn();
    const view = (0, _enzyme.shallow)(React.createElement(_LoginForm.LoginForm, {
      onChangeUsername: mockFn,
      rememberMeLabel: "Login Form"
    }));
    view.find('#pf-login-username-id').simulate('change');
    expect(mockFn).toHaveBeenCalled();
  });
  test('should call onChangePassword callback', () => {
    const mockFn = jest.fn();
    const view = (0, _enzyme.shallow)(React.createElement(_LoginForm.LoginForm, {
      onChangePassword: mockFn,
      rememberMeLabel: "Login Form"
    }));
    view.find('#pf-login-password-id').simulate('change');
    expect(mockFn).toHaveBeenCalled();
  });
  test('should call onChangeRememberMe callback', () => {
    const mockFn = jest.fn();
    const view = (0, _enzyme.shallow)(React.createElement(_LoginForm.LoginForm, {
      onChangeRememberMe: mockFn,
      rememberMeLabel: "Login Form"
    }));
    view.find('#pf-login-remember-me-id').simulate('change');
    expect(mockFn).toHaveBeenCalled();
  });
  test('LoginForm with rememberMeLabel', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_LoginForm.LoginForm, {
      rememberMeLabel: "remember me"
    }));
    expect(view).toMatchSnapshot();
  });
  test('LoginForm with rememberMeLabel and rememberMeAriaLabel uses the rememberMeAriaLabel', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_LoginForm.LoginForm, {
      rememberMeAriaLabel: "ARIA remember me",
      rememberMeLabel: "remember me"
    }));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=LoginForm.test.js.map