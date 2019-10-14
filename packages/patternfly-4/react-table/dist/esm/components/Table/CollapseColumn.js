import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { AngleDownIcon } from '@patternfly/react-icons';
import { css } from '@patternfly/react-styles';
import { Button } from '@patternfly/react-core';
import styles from '@patternfly/react-styles/css/components/Table/table';
export const CollapseColumn = (_ref) => {
  let {
    className = '',
    children = null,
    isOpen,
    onToggle
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "children", "isOpen", "onToggle"]);

  return React.createElement(React.Fragment, null, isOpen !== undefined && React.createElement(Button, _extends({
    className: css(className, isOpen && styles.modifiers.expanded)
  }, props, {
    variant: "plain",
    "aria-label": "Details",
    onClick: onToggle,
    "aria-expanded": isOpen
  }), React.createElement(AngleDownIcon, null)), children);
};
CollapseColumn.propTypes = {
  id: _pt.string,
  className: _pt.string,
  children: _pt.node,
  onToggle: _pt.func,
  isOpen: _pt.bool
};
//# sourceMappingURL=CollapseColumn.js.map