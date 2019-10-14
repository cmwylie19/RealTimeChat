import _pt from "prop-types";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryPie } from 'victory';
import { Helpers } from 'victory-core';
import { ChartContainer } from '../ChartContainer';
import { ChartLegend, ChartLegendWrapper } from '../ChartLegend';
import { ChartCommonStyles } from '../ChartTheme';
import { ChartTooltip } from '../ChartTooltip';
import { getPaddingForSide, getTheme } from '../ChartUtils';
export let ChartPieLabelPosition;

(function (ChartPieLabelPosition) {
  ChartPieLabelPosition["centroid"] = "centroid";
  ChartPieLabelPosition["endAngle"] = "endAngle";
  ChartPieLabelPosition["startAngle"] = "startAngle";
})(ChartPieLabelPosition || (ChartPieLabelPosition = {}));

export let ChartPieLegendPosition;

(function (ChartPieLegendPosition) {
  ChartPieLegendPosition["bottom"] = "bottom";
  ChartPieLegendPosition["right"] = "right";
})(ChartPieLegendPosition || (ChartPieLegendPosition = {}));

export let ChartPieSortOrder;
/**
 * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
 */

(function (ChartPieSortOrder) {
  ChartPieSortOrder["ascending"] = "ascending";
  ChartPieSortOrder["descending"] = "descending";
})(ChartPieSortOrder || (ChartPieSortOrder = {}));

let someId = 0;
export const ChartPie = (_ref) => {
  let {
    allowTooltip = true,
    ariaDesc,
    ariaTitle,
    constrainToVisibleArea = false,
    containerComponent = React.createElement(ChartContainer, null),
    labels,
    legendComponent = React.createElement(ChartLegend, null),
    legendData,
    legendPosition = ChartCommonStyles.legend.position,
    padding,
    radius,
    standalone = true,
    themeColor,
    themeVariant,
    // destructure last
    theme = getTheme(themeColor, themeVariant),
    labelComponent = allowTooltip ? React.createElement(ChartTooltip, {
      constrainToVisibleArea: constrainToVisibleArea,
      theme: theme
    }) : undefined,
    legendOrientation = theme.legend.orientation,
    height = theme.pie.height,
    width = theme.pie.width
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["allowTooltip", "ariaDesc", "ariaTitle", "constrainToVisibleArea", "containerComponent", "labels", "legendComponent", "legendData", "legendPosition", "padding", "radius", "standalone", "themeColor", "themeVariant", "theme", "labelComponent", "legendOrientation", "height", "width"]);

  const defaultPadding = {
    bottom: getPaddingForSide('bottom', padding, theme.pie.padding),
    left: getPaddingForSide('left', padding, theme.pie.padding),
    right: getPaddingForSide('right', padding, theme.pie.padding),
    top: getPaddingForSide('top', padding, theme.pie.padding)
  };
  const chartRadius = radius ? radius : Helpers.getRadius({
    height,
    width,
    padding: defaultPadding
  });
  const chart = React.createElement(VictoryPie, _extends({
    height: height,
    labels: labels,
    labelComponent: labelComponent,
    padding: padding,
    radius: chartRadius,
    standalone: false,
    theme: theme,
    width: width
  }, rest));
  const legend = React.cloneElement(legendComponent, _objectSpread({
    data: legendData,
    orientation: legendOrientation,
    theme
  }, legendComponent.props)); // Returns a wrapped legend

  const getWrappedLegend = () => {
    if (!legend.props.data) {
      return null;
    }

    return React.createElement(ChartLegendWrapper, {
      chartType: "pie",
      height: height,
      legendComponent: legend,
      orientation: legendOrientation,
      padding: defaultPadding,
      position: legendPosition,
      theme: theme,
      width: width
    });
  }; // Clone so users can override container props


  const StandaloneContainer = ({
    children
  }) => React.cloneElement(containerComponent, _objectSpread({
    desc: ariaDesc,
    height,
    title: ariaTitle,
    width,
    theme
  }, containerComponent.props), children);

  return standalone ? React.createElement(StandaloneContainer, null, chart, getWrappedLegend()) : React.createElement(React.Fragment, null, chart, getWrappedLegend());
}; // Note: VictoryPie.role must be hoisted

ChartPie.propTypes = {
  allowTooltip: _pt.bool,
  animate: _pt.any,
  ariaDesc: _pt.string,
  ariaTitle: _pt.string,
  categories: _pt.any,
  colorScale: _pt.any,
  constrainToVisibleArea: _pt.bool,
  containerComponent: _pt.element,
  cornerRadius: _pt.number,
  data: _pt.arrayOf(_pt.any),
  dataComponent: _pt.element,
  endAngle: _pt.number,
  eventKey: _pt.any,
  events: _pt.arrayOf(_pt.any),
  externalEventMutations: _pt.arrayOf(_pt.any),
  groupComponent: _pt.element,
  height: _pt.number,
  innerRadius: _pt.number,
  labelComponent: _pt.element,
  labelPosition: _pt.oneOf(['startAngle', 'endAngle', 'centroid']),
  labelRadius: _pt.number,
  labels: _pt.oneOfType([_pt.arrayOf(_pt.string), _pt.func]),
  legendComponent: _pt.element,
  legendData: _pt.arrayOf(_pt.shape({
    name: _pt.string,
    symbol: _pt.shape({
      fill: _pt.string,
      type: _pt.string
    })
  })),
  legendOrientation: _pt.oneOf(['horizontal', 'vertical'])
};
hoistNonReactStatics(ChartPie, VictoryPie);
//# sourceMappingURL=ChartPie.js.map