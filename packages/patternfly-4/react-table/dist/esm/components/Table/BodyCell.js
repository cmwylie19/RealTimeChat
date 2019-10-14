import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
export const BodyCell = (_ref) => {
  let {
    'data-label': dataLabel = '',
    className = '',
    colSpan,
    component = 'td',
    isVisible,
    parentId,
    textCenter = false,
    isOpen,
    ariaControls = ''
  } = _ref,
      props = _objectWithoutProperties(_ref, ["data-label", "className", "colSpan", "component", "isVisible", "parentId", "textCenter", "isOpen", "ariaControls"]);

  const Component = component;

  const mappedProps = _objectSpread({}, dataLabel ? {
    'data-label': dataLabel
  } : {}, {}, props);

  return parentId !== undefined && colSpan === undefined || !isVisible ? null : React.createElement(Component, _extends({}, mappedProps, {
    className: css(className, textCenter && styles.modifiers.center),
    colSpan: colSpan
  }));
};
BodyCell.propTypes = {
  'data-label': _pt.string,
  className: _pt.string,
  colSpan: _pt.number,
  component: _pt.node,
  isVisible: _pt.bool,
  parentId: _pt.number,
  textCenter: _pt.bool,
  isOpen: _pt.bool,
  ariaControls: _pt.string
};
//# sourceMappingURL=BodyCell.js.map