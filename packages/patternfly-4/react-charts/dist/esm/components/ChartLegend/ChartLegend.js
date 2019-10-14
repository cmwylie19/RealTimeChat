import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryLegend } from 'victory';
import { ChartContainer } from '../ChartContainer';
import { ChartPoint } from '../ChartPoint';
import { getTheme } from '../ChartUtils';
export let ChartLegendOrientation;

(function (ChartLegendOrientation) {
  ChartLegendOrientation["horizontal"] = "horizontal";
  ChartLegendOrientation["vertical"] = "vertical";
})(ChartLegendOrientation || (ChartLegendOrientation = {}));

export let ChartLegendPosition;

(function (ChartLegendPosition) {
  ChartLegendPosition["bottom"] = "bottom";
  ChartLegendPosition["bottomLeft"] = "bottom-left";
  ChartLegendPosition["right"] = "right";
})(ChartLegendPosition || (ChartLegendPosition = {}));

export let ChartLegendRowGutter;
/**
 * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
 */

(function (ChartLegendRowGutter) {
  ChartLegendRowGutter["bottom"] = "bottom";
  ChartLegendRowGutter["top"] = "top";
})(ChartLegendRowGutter || (ChartLegendRowGutter = {}));

export const ChartLegend = (_ref) => {
  let {
    containerComponent = React.createElement(ChartContainer, null),
    dataComponent = React.createElement(ChartPoint, null),
    responsive = true,
    themeColor,
    themeVariant,
    // destructure last
    theme = getTheme(themeColor, themeVariant)
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["containerComponent", "dataComponent", "responsive", "themeColor", "themeVariant", "theme"]);

  // Clone so users can override container props
  const container = React.cloneElement(containerComponent, _objectSpread({
    responsive,
    theme
  }, containerComponent.props));
  return React.createElement(VictoryLegend, _extends({
    containerComponent: container,
    dataComponent: dataComponent,
    theme: theme
  }, rest));
}; // Note: VictoryLegend.role must be hoisted, but getBaseProps causes error with ChartVoronoiContainer

ChartLegend.propTypes = {
  borderComponent: _pt.element,
  borderPadding: _pt.any,
  centerTitle: _pt.bool,
  colorScale: _pt.any,
  containerComponent: _pt.element,
  data: _pt.arrayOf(_pt.shape({
    name: _pt.string,
    symbol: _pt.shape({
      fill: _pt.string,
      type: _pt.string
    })
  })),
  dataComponent: _pt.element,
  eventKey: _pt.oneOfType([_pt.any, _pt.arrayOf(_pt.string)]),
  events: _pt.arrayOf(_pt.any),
  externalEventMutations: _pt.arrayOf(_pt.any),
  groupComponent: _pt.element,
  gutter: _pt.oneOfType([_pt.number, _pt.shape({
    left: _pt.number.isRequired,
    right: _pt.number.isRequired
  })]),
  height: _pt.number,
  itemsPerRow: _pt.number,
  labelComponent: _pt.element,
  orientation: _pt.oneOf(['horizontal', 'vertical']),
  padding: _pt.any,
  responsive: _pt.bool,
  rowGutter: _pt.oneOfType([_pt.number, _pt.any]),
  sharedEvents: _pt.any,
  standalone: _pt.bool,
  style: _pt.any,
  symbolSpacer: _pt.number,
  theme: _pt.any,
  themeColor: _pt.string
};
hoistNonReactStatics(ChartLegend, VictoryLegend, {
  getBaseProps: true
});
//# sourceMappingURL=ChartLegend.js.map