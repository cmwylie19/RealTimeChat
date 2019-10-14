function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { flexWrap, flexDirection, alignItems, alignContent, justifyContent } from 'styled-system';
import StyledBox, { StyledBoxBase } from './StyledBox';
const StyledFlexBase = styled(StyledBoxBase)({
  display: 'flex'
}, // flex parent props
flexWrap, flexDirection, alignItems, alignContent, justifyContent);
/**
 * StyledFlex inherits all the props from the StyledBox component.
 */

const StyledFlex = (_ref) => {
  let {
    className,
    children,
    component
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "children", "component"]);

  const StyledFlexBaseWithComponent = StyledFlexBase.withComponent(component);
  return React.createElement(StyledFlexBaseWithComponent, _extends({}, props, {
    className: css(className)
  }), children);
};

StyledFlex.propTypes = _objectSpread({}, StyledBox.propTypes, {
  /** flex-wrap */
  flexWrap: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** flex-direction */
  flexDirection: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** align-items */
  alignItems: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** align-content */
  alignContent: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** justify-content */
  justifyContent: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array])
});
StyledFlex.defaultProps = _objectSpread({}, StyledBox.defaultProps, {
  flexWrap: null,
  flexDirection: null,
  alignItems: null,
  alignContent: null,
  justifyContent: null
});
export default StyledFlex;
//# sourceMappingURL=StyledFlex.js.map