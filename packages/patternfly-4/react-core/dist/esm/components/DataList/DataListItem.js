import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
export const DataListItem = (_ref) => {
  let {
    children,
    className = '',
    isExpanded = false,
    'aria-labelledby': ariaLabelledBy
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className", "isExpanded", "aria-labelledby"]);

  return React.createElement("li", _extends({
    className: css(styles.dataListItem, isExpanded && styles.modifiers.expanded, className),
    "aria-labelledby": ariaLabelledBy
  }, props), React.Children.map(children, child => React.isValidElement(child) && React.cloneElement(child, {
    rowid: ariaLabelledBy
  })));
};
DataListItem.propTypes = {
  isExpanded: _pt.bool,
  children: _pt.node.isRequired,
  className: _pt.string,
  'aria-labelledby': _pt.string.isRequired
};
//# sourceMappingURL=DataListItem.js.map