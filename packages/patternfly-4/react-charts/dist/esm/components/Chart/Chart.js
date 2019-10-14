import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryChart, VictoryZoomContainer } from 'victory';
import { ChartContainer } from '../ChartContainer';
import { ChartLegend, ChartLegendPosition, ChartLegendWrapper } from '../ChartLegend';
import { ChartCommonStyles } from '../ChartTheme';
import { getClassName, getLabelTextSize, getPaddingForSide, getTheme } from '../ChartUtils';
/**
 * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
 */

export const Chart = (_ref) => {
  let {
    allowZoom = false,
    ariaDesc,
    ariaTitle,
    children,
    legendComponent = React.createElement(ChartLegend, null),
    legendData,
    legendPosition = ChartCommonStyles.legend.position,
    padding,
    standalone = true,
    themeColor,
    themeVariant,
    // destructure last
    theme = getTheme(themeColor, themeVariant),
    containerComponent = allowZoom ? React.createElement(VictoryZoomContainer, null) : React.createElement(ChartContainer, null),
    legendOrientation = theme.legend.orientation,
    height = theme.chart.height,
    width = theme.chart.width
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["allowZoom", "ariaDesc", "ariaTitle", "children", "legendComponent", "legendData", "legendPosition", "padding", "standalone", "themeColor", "themeVariant", "theme", "containerComponent", "legendOrientation", "height", "width"]);

  const defaultPadding = {
    bottom: getPaddingForSide('bottom', padding, theme.chart.padding),
    left: getPaddingForSide('left', padding, theme.chart.padding),
    right: getPaddingForSide('right', padding, theme.chart.padding),
    top: getPaddingForSide('top', padding, theme.chart.padding)
  }; // Clone so users can override container props

  const container = React.cloneElement(containerComponent, _objectSpread({
    desc: ariaDesc,
    title: ariaTitle,
    theme
  }, containerComponent.props, {
    className: getClassName({
      className: containerComponent.props.className
    }) // Override VictoryContainer class name

  }));
  const legend = React.cloneElement(legendComponent, _objectSpread({
    data: legendData,
    orientation: legendOrientation,
    theme
  }, legendComponent.props)); // Returns a wrapped legend

  const getWrappedLegend = () => {
    if (!legend.props.data) {
      return null;
    }

    let dx = 0;
    let dy = 0;
    let xAxisLabelHeight = 0;
    let legendTitleHeight = legend.props.title ? 10 : 0; // Adjust for axis label

    React.Children.toArray(children).map(child => {
      if (child.type.role === 'axis' && child.props.label && !child.props.dependentAxis) {
        xAxisLabelHeight = getLabelTextSize({
          text: child.props.label,
          theme
        }).height + 10;
        legendTitleHeight = 0;
      }
    });

    if (legendPosition === ChartLegendPosition.bottom) {
      dy += xAxisLabelHeight + legendTitleHeight;
    } else if (legendPosition === ChartLegendPosition.bottomLeft) {
      dy += xAxisLabelHeight + legendTitleHeight;
      dx = -10;
    }

    return React.createElement(ChartLegendWrapper, {
      chartType: "chart",
      dx: dx,
      dy: dy,
      height: height,
      legendComponent: legend,
      orientation: legendOrientation,
      padding: defaultPadding,
      position: legendPosition,
      theme: theme,
      width: width
    });
  };

  return React.createElement(VictoryChart, _extends({
    containerComponent: container,
    height: height,
    padding: defaultPadding,
    theme: theme,
    width: width
  }, rest), children, getWrappedLegend());
};
Chart.propTypes = {
  allowZoom: _pt.bool,
  animate: _pt.any,
  ariaDesc: _pt.string,
  ariaTitle: _pt.string,
  children: _pt.node,
  containerComponent: _pt.element,
  domain: _pt.any,
  domainPadding: _pt.any,
  endAngle: _pt.number,
  eventKey: _pt.any,
  events: _pt.arrayOf(_pt.any),
  externalEventMutations: _pt.arrayOf(_pt.any),
  groupComponent: _pt.element,
  height: _pt.number,
  horizontal: _pt.bool,
  innerRadius: _pt.number,
  legendComponent: _pt.element,
  legendData: _pt.arrayOf(_pt.shape({
    name: _pt.string,
    symbol: _pt.shape({
      fill: _pt.string,
      type: _pt.string
    })
  })),
  legendOrientation: _pt.oneOf(['horizontal', 'vertical']),
  legendPosition: _pt.oneOf(['bottom', 'bottom-left', 'right']),
  maxDomain: _pt.oneOfType([_pt.number, _pt.shape({
    x: _pt.number,
    y: _pt.number
  })]),
  minDomain: _pt.oneOfType([_pt.number, _pt.shape({
    x: _pt.number,
    y: _pt.number
  })]),
  padding: _pt.any,
  polar: _pt.bool,
  range: _pt.oneOfType([_pt.shape({})])
};
hoistNonReactStatics(Chart, VictoryChart);
//# sourceMappingURL=Chart.js.map