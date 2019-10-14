import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryVoronoiContainer } from 'victory';
import { ChartTooltip } from '../ChartTooltip';
import { getClassName, getTheme } from '../ChartUtils';
export let ChartVoronoiDimension;
/**
 * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
 */

(function (ChartVoronoiDimension) {
  ChartVoronoiDimension["x"] = "x";
  ChartVoronoiDimension["y"] = "y";
})(ChartVoronoiDimension || (ChartVoronoiDimension = {}));

export const ChartVoronoiContainer = (_ref) => {
  let {
    className,
    allowTooltip = true,
    constrainToVisibleArea = false,
    themeColor,
    themeVariant,
    // destructure last
    theme = getTheme(themeColor, themeVariant),
    labelComponent = allowTooltip ? React.createElement(ChartTooltip, null) : undefined
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className", "allowTooltip", "constrainToVisibleArea", "themeColor", "themeVariant", "theme", "labelComponent"]);

  const chartClassName = getClassName({
    className
  });
  const chartLabelComponent = React.cloneElement(labelComponent, _objectSpread({
    constrainToVisibleArea,
    theme
  }, labelComponent.props)); // Note: theme is required by voronoiContainerMixin, but @types/victory is missing a prop type
  // @ts-ignore

  return React.createElement(VictoryVoronoiContainer, _extends({
    className: chartClassName,
    labelComponent: chartLabelComponent,
    theme: theme
  }, rest));
};
ChartVoronoiContainer.propTypes = {
  activateData: _pt.bool,
  activateLabels: _pt.bool,
  allowTooltip: _pt.bool,
  className: _pt.string,
  constrainToVisibleArea: _pt.bool,
  disable: _pt.bool,
  labels: _pt.func,
  labelComponent: _pt.element,
  mouseFollowTooltips: _pt.bool,
  onActivated: _pt.func,
  onDeactivated: _pt.func,
  radius: _pt.number,
  responsive: _pt.bool,
  style: _pt.any,
  theme: _pt.any,
  themeColor: _pt.string,
  themeVariant: _pt.string,
  voronoiBlacklist: _pt.arrayOf(_pt.string),
  voronoiDimension: _pt.oneOf(['x', 'y']),
  voronoiPadding: _pt.number
};
ChartVoronoiContainer.defaultProps = VictoryVoronoiContainer.defaultProps; // Note: VictoryVoronoiContainer.defaultEvents & VictoryContainer.role must be hoisted

hoistNonReactStatics(ChartVoronoiContainer, VictoryVoronoiContainer);
//# sourceMappingURL=ChartVoronoiContainer.js.map