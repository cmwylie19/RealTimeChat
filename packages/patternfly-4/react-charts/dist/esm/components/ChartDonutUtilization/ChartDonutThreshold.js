import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { VictoryPie } from 'victory';
import { Data, Helpers } from 'victory-core';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { ChartContainer } from '../ChartContainer';
import { ChartDonut } from '../ChartDonut';
import { ChartCommonStyles, ChartDonutStyles } from '../ChartTheme';
import { getDonutThresholdDynamicTheme, getDonutThresholdStaticTheme, getPaddingForSide } from '../ChartUtils';
export let ChartDonutThresholdDonutOrientation;

(function (ChartDonutThresholdDonutOrientation) {
  ChartDonutThresholdDonutOrientation["left"] = "left";
  ChartDonutThresholdDonutOrientation["right"] = "right";
  ChartDonutThresholdDonutOrientation["top"] = "top";
})(ChartDonutThresholdDonutOrientation || (ChartDonutThresholdDonutOrientation = {}));

export let ChartDonutThresholdLabelOrientation;

(function (ChartDonutThresholdLabelOrientation) {
  ChartDonutThresholdLabelOrientation["horizontal"] = "horizontal";
  ChartDonutThresholdLabelOrientation["vertical"] = "vertical";
})(ChartDonutThresholdLabelOrientation || (ChartDonutThresholdLabelOrientation = {}));

export let ChartDonutThresholdLabelPosition;

(function (ChartDonutThresholdLabelPosition) {
  ChartDonutThresholdLabelPosition["centroid"] = "centroid";
  ChartDonutThresholdLabelPosition["endAngle"] = "endAngle";
  ChartDonutThresholdLabelPosition["startAngle"] = "startAngle";
})(ChartDonutThresholdLabelPosition || (ChartDonutThresholdLabelPosition = {}));

export let ChartDonutThresholdLegendPosition;

(function (ChartDonutThresholdLegendPosition) {
  ChartDonutThresholdLegendPosition["bottom"] = "bottom";
  ChartDonutThresholdLegendPosition["right"] = "right";
})(ChartDonutThresholdLegendPosition || (ChartDonutThresholdLegendPosition = {}));

export let ChartDonutThresholdSortOrder;

(function (ChartDonutThresholdSortOrder) {
  ChartDonutThresholdSortOrder["ascending"] = "ascending";
  ChartDonutThresholdSortOrder["descending"] = "descending";
})(ChartDonutThresholdSortOrder || (ChartDonutThresholdSortOrder = {}));

export let ChartDonutThresholdSubTitlePosition;
/**
 * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
 */

(function (ChartDonutThresholdSubTitlePosition) {
  ChartDonutThresholdSubTitlePosition["bottom"] = "bottom";
  ChartDonutThresholdSubTitlePosition["center"] = "center";
  ChartDonutThresholdSubTitlePosition["right"] = "right";
})(ChartDonutThresholdSubTitlePosition || (ChartDonutThresholdSubTitlePosition = {}));

export const ChartDonutThreshold = (_ref) => {
  let {
    allowTooltip = true,
    ariaDesc,
    ariaTitle,
    children,
    constrainToVisibleArea = false,
    containerComponent = React.createElement(ChartContainer, null),
    data = [],
    invert = false,
    labels = [],
    // Don't show any tooltip labels by default, let consumer override if needed
    legendPosition = ChartCommonStyles.legend.position,
    padding,
    radius,
    standalone = true,
    subTitlePosition = ChartDonutStyles.label.subTitlePosition,
    themeColor,
    themeVariant,
    x,
    y,
    // destructure last
    theme = getDonutThresholdStaticTheme(themeColor, themeVariant, invert),
    height = theme.pie.height,
    width = theme.pie.width
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["allowTooltip", "ariaDesc", "ariaTitle", "children", "constrainToVisibleArea", "containerComponent", "data", "invert", "labels", "legendPosition", "padding", "radius", "standalone", "subTitlePosition", "themeColor", "themeVariant", "x", "y", "theme", "height", "width"]);

  const defaultPadding = {
    bottom: getPaddingForSide('bottom', padding, theme.pie.padding),
    left: getPaddingForSide('left', padding, theme.pie.padding),
    right: getPaddingForSide('right', padding, theme.pie.padding),
    top: getPaddingForSide('top', padding, theme.pie.padding)
  };
  const chartRadius = radius | Helpers.getRadius({
    height,
    width,
    padding: defaultPadding
  }); // Returns computed data representing pie chart slices

  const getComputedData = () => {
    // Format and sort data. Sorting ensures thresholds are displayed in the correct order and simplifies calculations.
    const datum = Data.formatData(data, _objectSpread({
      x,
      y
    }, rest), ['x', 'y']).sort((a, b) => a._y - b._y); // Data must be offset so that the sum of all data point y-values (including the final slice) == 100.

    const [prev, computedData] = datum.reduce((acc, dataPoint) => {
      return [dataPoint._y, // Set the previous value to current y value
      [...acc[1], {
        x: dataPoint._x,
        // Conditionally add x property only if it is in the original data object
        y: dataPoint._y - acc[0] // Must be offset by previous value

      }]];
    }, [0, []]);
    return [...computedData, {
      y: prev ? 100 - prev : 0
    }];
  }; // Render dynamic utilization donut cart


  const renderChildren = () => React.Children.toArray(children).map((child, index) => {
    if (child.props) {
      const _child$props = child.props,
            {
        data: childData
      } = _child$props,
            childProps = _objectWithoutProperties(_child$props, ["data"]);

      const datum = Data.formatData([childData], childProps, ['x', 'y']); // Format child data independently of this component's props

      const dynamicTheme = childProps.theme || getDonutThresholdDynamicTheme(childProps.themeColor || themeColor, childProps.themeVariant || themeVariant);
      return React.cloneElement(child, _objectSpread({
        constrainToVisibleArea,
        data: childData,
        endAngle: 360 * (datum[0]._y ? datum[0]._y / 100 : 0),
        height,
        invert,
        key: `pf-chart-donut-utilization-${index}`,
        legendPosition: childProps.legendPosition || legendPosition,
        padding: defaultPadding,
        radius: chartRadius - 14,
        // Donut utilization radius is threshold radius minus 14px spacing
        showStatic: false,
        standalone: false,
        subTitlePosition: childProps.subTitlePosition || subTitlePosition,
        theme: dynamicTheme,
        width
      }, childProps));
    }

    return child;
  }); // Static threshold donut chart


  const chart = React.createElement(ChartDonut, _extends({
    allowTooltip: allowTooltip,
    constrainToVisibleArea: constrainToVisibleArea,
    data: getComputedData(),
    height: height,
    labels: labels,
    padding: defaultPadding,
    standalone: false,
    theme: theme,
    width: width
  }, rest)); // Clone so users can override container props

  const StandaloneContainer = ({
    children
  }) => React.cloneElement(containerComponent, _objectSpread({
    desc: ariaDesc,
    height,
    title: ariaTitle,
    width,
    theme
  }, containerComponent.props), children);

  return standalone ? React.createElement(StandaloneContainer, null, chart, renderChildren()) : React.createElement(React.Fragment, null, chart, renderChildren());
}; // Note: VictoryPie.role must be hoisted

ChartDonutThreshold.propTypes = {
  allowTooltip: _pt.bool,
  animate: _pt.any,
  ariaDesc: _pt.string,
  ariaTitle: _pt.string,
  categories: _pt.any,
  children: _pt.element,
  colorScale: _pt.any,
  constrainToVisibleArea: _pt.bool,
  containerComponent: _pt.element,
  cornerRadius: _pt.number,
  data: _pt.arrayOf(_pt.any),
  dataComponent: _pt.element,
  desc: _pt.string,
  endAngle: _pt.number,
  eventKey: _pt.any,
  events: _pt.arrayOf(_pt.any),
  externalEventMutations: _pt.arrayOf(_pt.any),
  groupComponent: _pt.element,
  height: _pt.number,
  innerRadius: _pt.number,
  invert: _pt.bool,
  labelRadius: _pt.number,
  labels: _pt.oneOfType([_pt.arrayOf(_pt.string), _pt.func]),
  legendPosition: _pt.oneOf(['bottom', 'right']),
  name: _pt.string
};
hoistNonReactStatics(ChartDonutThreshold, VictoryPie);
//# sourceMappingURL=ChartDonutThreshold.js.map