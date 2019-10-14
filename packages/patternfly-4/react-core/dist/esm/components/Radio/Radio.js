import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Radio/radio';
import { css, getModifier } from '@patternfly/react-styles';
export class Radio extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChange", event => {
      this.props.onChange(event.currentTarget.checked, event);
    });

    if (!props.label && !props['aria-label']) {
      // tslint:disable-next-line:no-console
      console.error('Radio:', 'Radio requires an aria-label to be specified');
    }
  }

  render() {
    const _this$props = this.props,
          {
      'aria-label': ariaLabel,
      checked,
      className,
      defaultChecked,
      isChecked,
      isDisabled,
      isValid,
      label,
      onChange
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["aria-label", "checked", "className", "defaultChecked", "isChecked", "isDisabled", "isValid", "label", "onChange"]);

    return React.createElement("div", {
      className: css(styles.radio, className)
    }, React.createElement("input", _extends({}, props, {
      className: css(styles.radioInput),
      type: "radio",
      onChange: this.handleChange,
      "aria-invalid": !isValid,
      disabled: isDisabled,
      defaultChecked: checked || isChecked
    }, !isChecked && {
      defaultChecked
    }, !label && {
      'aria-label': ariaLabel
    })), label && React.createElement("label", {
      className: css(styles.radioLabel, getModifier(styles, isDisabled && 'disabled')),
      htmlFor: props.id
    }, label));
  }

}

_defineProperty(Radio, "propTypes", {
  className: _pt.string,
  id: _pt.string.isRequired,
  isChecked: _pt.bool,
  isDisabled: _pt.bool,
  isValid: _pt.bool,
  label: _pt.node,
  name: _pt.string.isRequired,
  onChange: _pt.func,
  'aria-label': _pt.string
});

_defineProperty(Radio, "defaultProps", {
  className: '',
  isDisabled: false,
  isValid: true,
  onChange: Function.prototype
});
//# sourceMappingURL=Radio.js.map