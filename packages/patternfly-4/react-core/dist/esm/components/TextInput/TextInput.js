import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/FormControl/form-control';
import { css } from '@patternfly/react-styles';
export let TextInputTypes;

(function (TextInputTypes) {
  TextInputTypes["text"] = "text";
  TextInputTypes["date"] = "date";
  TextInputTypes["datetimeLocal"] = "datetime-local";
  TextInputTypes["email"] = "email";
  TextInputTypes["month"] = "month";
  TextInputTypes["number"] = "number";
  TextInputTypes["password"] = "password";
  TextInputTypes["search"] = "search";
  TextInputTypes["tel"] = "tel";
  TextInputTypes["time"] = "time";
  TextInputTypes["url"] = "url";
})(TextInputTypes || (TextInputTypes = {}));

export class TextInput extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChange", event => {
      if (this.props.onChange) {
        this.props.onChange(event.currentTarget.value, event);
      }
    });

    if (!props.id && !props['aria-label'] && !props['aria-labelledby']) {
      // tslint:disable-next-line:no-console
      console.error('Text input:', 'Text input requires either an id or aria-label to be specified');
    }
  }

  render() {
    const _this$props = this.props,
          {
      className,
      type,
      value,
      onChange,
      isValid,
      isReadOnly,
      isRequired,
      isDisabled
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["className", "type", "value", "onChange", "isValid", "isReadOnly", "isRequired", "isDisabled"]);

    return React.createElement("input", _extends({}, props, {
      className: css(styles.formControl, className),
      onChange: this.handleChange,
      type: type,
      value: value,
      "aria-invalid": !isValid,
      required: isRequired,
      disabled: isDisabled,
      readOnly: isReadOnly
    }));
  }

}

_defineProperty(TextInput, "propTypes", {
  className: _pt.string,
  isDisabled: _pt.bool,
  isReadOnly: _pt.bool,
  isRequired: _pt.bool,
  isValid: _pt.bool,
  onChange: _pt.func,
  type: _pt.oneOf(['text', 'date', 'datetime-local', 'email', 'month', 'number', 'password', 'search', 'tel', 'time', 'url']),
  value: _pt.oneOfType([_pt.string, _pt.number]),
  'aria-label': _pt.string
});

_defineProperty(TextInput, "defaultProps", {
  'aria-label': null,
  "className": '',
  "isRequired": false,
  "isValid": true,
  "isDisabled": false,
  "isReadOnly": false,
  "type": 'text',
  "onChange": () => undefined
});
//# sourceMappingURL=TextInput.js.map