import _pt from "prop-types";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryBar } from 'victory';
import { ChartContainer } from '../ChartContainer';
import { getBulletComparativeErrorMeasureTheme } from '../ChartUtils';
import { ChartBulletComparativeMeasure } from './ChartBulletComparativeMeasure';
/**
 * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
 */

export const ChartBulletComparativeErrorMeasure = (_ref) => {
  let {
    ariaDesc,
    ariaTitle,
    barWidth,
    constrainToVisibleArea = false,
    data,
    domain,
    horizontal = true,
    labelComponent,
    labels,
    measureComponent = React.createElement(ChartBulletComparativeMeasure, null),
    padding,
    standalone = true,
    themeColor,
    themeVariant,
    y,
    // destructure last
    theme = getBulletComparativeErrorMeasureTheme(themeColor, themeVariant),
    height = theme.bar.height,
    width = theme.bar.width
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["ariaDesc", "ariaTitle", "barWidth", "constrainToVisibleArea", "data", "domain", "horizontal", "labelComponent", "labels", "measureComponent", "padding", "standalone", "themeColor", "themeVariant", "y", "theme", "height", "width"]);

  // Comparative measure component
  const measure = React.cloneElement(measureComponent, _objectSpread({
    ariaDesc,
    ariaTitle,
    barWidth,
    constrainToVisibleArea,
    data,
    domain,
    height,
    horizontal,
    labelComponent,
    labels,
    padding,
    standalone: false,
    theme,
    width,
    y
  }, measureComponent.props));
  return standalone ? React.createElement(ChartContainer, {
    desc: ariaDesc,
    height: height,
    title: ariaTitle,
    width: width
  }, measure) : React.createElement(React.Fragment, null, measure);
}; // Note: VictoryBar.role must be hoisted

ChartBulletComparativeErrorMeasure.propTypes = {
  ariaDesc: _pt.string,
  ariaTitle: _pt.string,
  barWidth: _pt.any,
  constrainToVisibleArea: _pt.bool,
  data: _pt.arrayOf(_pt.any),
  domain: _pt.any,
  height: _pt.number,
  horizontal: _pt.bool,
  labelComponent: _pt.element,
  labels: _pt.oneOfType([_pt.any, _pt.arrayOf(_pt.string), _pt.arrayOf(_pt.number)]),
  measureComponent: _pt.element,
  padding: _pt.any,
  standalone: _pt.bool,
  theme: _pt.any,
  themeColor: _pt.string,
  themeVariant: _pt.string,
  width: _pt.number,
  y: _pt.any
};
hoistNonReactStatics(ChartBulletComparativeErrorMeasure, VictoryBar);
//# sourceMappingURL=ChartBulletComparativeErrorMeasure.js.map