import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { css, getModifier } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Alert/alert';
import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import { AlertIcon } from './AlertIcon';
import { capitalize } from '../../helpers/util';
export let AlertVariant;

(function (AlertVariant) {
  AlertVariant["success"] = "success";
  AlertVariant["danger"] = "danger";
  AlertVariant["warning"] = "warning";
  AlertVariant["info"] = "info";
  AlertVariant["default"] = "default";
})(AlertVariant || (AlertVariant = {}));

export const Alert = (_ref) => {
  let {
    variant = AlertVariant.info,
    isInline = false,
    variantLabel = `${capitalize(variant)} alert:`,
    'aria-label': ariaLabel = `${capitalize(variant)} Alert`,
    action = null,
    title,
    children = '',
    className = ''
  } = _ref,
      props = _objectWithoutProperties(_ref, ["variant", "isInline", "variantLabel", "aria-label", "action", "title", "children", "className"]);

  const readerTitle = React.createElement(React.Fragment, null, React.createElement("span", {
    className: css(accessibleStyles.screenReader)
  }, variantLabel), title);
  const customClassName = css(styles.alert, isInline && styles.modifiers.inline, variant !== AlertVariant.default && getModifier(styles, variant, styles.modifiers.info), className);
  return React.createElement("div", _extends({}, props, {
    className: customClassName,
    "aria-label": ariaLabel
  }), React.createElement(AlertIcon, {
    variant: variant
  }), React.createElement("h4", {
    className: css(styles.alertTitle)
  }, readerTitle), children && React.createElement("div", {
    className: css(styles.alertDescription)
  }, children), action && React.createElement("div", {
    className: css(styles.alertAction)
  }, React.cloneElement(action, {
    title,
    variantLabel
  })));
};
Alert.propTypes = {
  variant: _pt.oneOf(['success', 'danger', 'warning', 'info', 'default']),
  isInline: _pt.bool,
  title: _pt.node.isRequired,
  action: _pt.node,
  children: _pt.node,
  className: _pt.string,
  'aria-label': _pt.string,
  variantLabel: _pt.string
};
//# sourceMappingURL=Alert.js.map