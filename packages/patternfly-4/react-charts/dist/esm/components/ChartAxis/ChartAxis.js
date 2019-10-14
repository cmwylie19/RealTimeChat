import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryAxis } from 'victory';
import { ChartContainer } from '../ChartContainer';
import { getAxisTheme, getTheme } from '../ChartUtils';
/**
 * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
 */

export const ChartAxis = (_ref) => {
  let {
    containerComponent = React.createElement(ChartContainer, null),
    showGrid = false,
    themeColor,
    themeVariant,
    // destructure last
    theme = getTheme(themeColor, themeVariant)
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["containerComponent", "showGrid", "themeColor", "themeVariant", "theme"]);

  // Clone so users can override container props
  const container = React.cloneElement(containerComponent, _objectSpread({
    theme
  }, containerComponent.props));
  return React.createElement(VictoryAxis, _extends({
    containerComponent: container,
    theme: showGrid ? getAxisTheme(themeColor, themeVariant) : theme
  }, rest));
};
ChartAxis.propTypes = {
  animate: _pt.any,
  axisComponent: _pt.element,
  axisLabelComponent: _pt.element,
  axisValue: _pt.any,
  containerComponent: _pt.element,
  crossAxis: _pt.bool,
  dependentAxis: _pt.bool,
  domain: _pt.any,
  domainPadding: _pt.any,
  events: _pt.arrayOf(_pt.any),
  externalEventMutations: _pt.arrayOf(_pt.any),
  fixLabelOverlap: _pt.bool,
  gridComponent: _pt.element,
  groupComponent: _pt.element,
  height: _pt.number,
  invertAxis: _pt.bool,
  label: _pt.any,
  maxDomain: _pt.oneOfType([_pt.number, _pt.shape({
    x: _pt.number,
    y: _pt.number
  })]),
  minDomain: _pt.oneOfType([_pt.number, _pt.shape({
    x: _pt.number,
    y: _pt.number
  })]),
  name: _pt.string,
  offsetX: _pt.number,
  offsetY: _pt.number,
  orientation: _pt.oneOf(['top', 'bottom', 'left', 'right']),
  padding: _pt.any,
  range: _pt.oneOfType([_pt.shape({})])
};
hoistNonReactStatics(ChartAxis, VictoryAxis);
//# sourceMappingURL=ChartAxis.js.map