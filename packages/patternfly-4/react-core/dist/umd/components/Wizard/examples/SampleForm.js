(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "@patternfly/react-core"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("@patternfly/react-core"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactCore);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _reactCore) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  const propTypes = {
    formValue: _propTypes2.default.string,
    isFormValid: _propTypes2.default.bool,
    onChange: _propTypes2.default.func
  };
  const defaultProps = {
    formValue: '',
    isFormValid: false,
    onChange: () => undefined
  };

  class SampleForm extends _react2.default.Component {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "state", {
        value: this.props.formValue,
        isValid: this.props.isFormValid
      });

      _defineProperty(this, "handleTextInputChange", value => {
        const isValid = /^\d+$/.test(value);
        this.setState({
          value,
          isValid
        });
        this.props.onChange && this.props.onChange(isValid, value);
      });
    }

    render() {
      const {
        value,
        isValid
      } = this.state;
      return _react2.default.createElement(_reactCore.Form, null, _react2.default.createElement(_reactCore.FormGroup, {
        label: "Age:",
        type: "number",
        helperText: "Please write your age",
        helperTextInvalid: "Age has to be a number",
        fieldId: "age",
        isValid: isValid
      }, _react2.default.createElement(_reactCore.TextInput, {
        isValid: isValid,
        value: value,
        id: "age",
        "aria-describedby": "age-helper",
        onChange: this.handleTextInputChange
      })));
    }

  }

  _defineProperty(SampleForm, "propTypes", propTypes);

  _defineProperty(SampleForm, "defaultProps", defaultProps);

  exports.default = SampleForm;
});
//# sourceMappingURL=SampleForm.js.map