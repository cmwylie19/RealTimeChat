function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, TextInput } from '@patternfly/react-core';
const propTypes = {
  formValue: PropTypes.string,
  isFormValid: PropTypes.bool,
  onChange: PropTypes.func
};
const defaultProps = {
  formValue: '',
  isFormValid: false,
  onChange: () => undefined
};

class SampleForm extends React.Component {
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
    return React.createElement(Form, null, React.createElement(FormGroup, {
      label: "Age:",
      type: "number",
      helperText: "Please write your age",
      helperTextInvalid: "Age has to be a number",
      fieldId: "age",
      isValid: isValid
    }, React.createElement(TextInput, {
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

export default SampleForm;
//# sourceMappingURL=SampleForm.js.map