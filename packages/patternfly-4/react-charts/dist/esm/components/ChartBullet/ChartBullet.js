import _pt from "prop-types";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryChart } from 'victory';
import { getComparativeMeasureErrorWidth, getComparativeMeasureWidth, getComparativeMeasureWarningWidth, getPrimaryDotMeasureSize, getPrimarySegmentedMeasureWidth, getQualitativeRangeBarWidth } from './utils/chart-bullet-size';
import { getBulletDomain } from './utils/chart-bullet-domain';
import { getBulletThemeWithLegendColorScale } from './utils/chart-bullet-theme';
import { ChartAxis } from '../ChartAxis';
import { ChartBulletComparativeErrorMeasure } from './ChartBulletComparativeErrorMeasure';
import { ChartBulletComparativeMeasure } from './ChartBulletComparativeMeasure';
import { ChartBulletComparativeWarningMeasure } from './ChartBulletComparativeWarningMeasure';
import { ChartBulletGroupTitle } from './ChartBulletGroupTitle';
import { ChartBulletPrimaryDotMeasure } from './ChartBulletPrimaryDotMeasure';
import { ChartBulletPrimarySegmentedMeasure } from './ChartBulletPrimarySegmentedMeasure';
import { ChartBulletQualitativeRange } from './ChartBulletQualitativeRange';
import { ChartBulletTitle } from './ChartBulletTitle';
import { ChartContainer } from '../ChartContainer';
import { ChartLegend, ChartLegendPosition, ChartLegendWrapper } from '../ChartLegend';
import { ChartBulletStyles } from '../ChartTheme';
import { ChartTooltip } from '../ChartTooltip';
import { getPaddingForSide } from '../ChartUtils';
/**
 * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
 */

export const ChartBullet = (_ref) => {
  let {
    ariaDesc,
    ariaTitle,
    axisComponent = React.createElement(ChartAxis, null),
    comparativeErrorMeasureComponent = React.createElement(ChartBulletComparativeErrorMeasure, null),
    comparativeErrorMeasureData,
    comparativeErrorMeasureDataY,
    comparativeErrorMeasureLegendData,
    comparativeWarningMeasureComponent = React.createElement(ChartBulletComparativeWarningMeasure, null),
    comparativeWarningMeasureData,
    comparativeWarningMeasureDataY,
    comparativeWarningMeasureLegendData,
    comparativeZeroMeasureComponent = React.createElement(ChartBulletComparativeMeasure, null),
    constrainToVisibleArea = false,
    groupTitleComponent = React.createElement(ChartBulletGroupTitle, null),
    groupSubTitle,
    groupTitle,
    horizontal = true,
    invert = false,
    labels,
    legendComponent = React.createElement(ChartLegend, null),
    legendItemsPerRow,
    legendPosition = 'bottom',
    maxDomain,
    minDomain,
    padding,
    primaryDotMeasureComponent = React.createElement(ChartBulletPrimaryDotMeasure, null),
    primaryDotMeasureData,
    primaryDotMeasureDataY,
    primaryDotMeasureLegendData,
    primarySegmentedMeasureComponent = React.createElement(ChartBulletPrimarySegmentedMeasure, null),
    primarySegmentedMeasureData,
    primarySegmentedMeasureDataY,
    primarySegmentedMeasureLegendData,
    qualitativeRangeComponent = React.createElement(ChartBulletQualitativeRange, null),
    qualitativeRangeData,
    qualitativeRangeDataY,
    qualitativeRangeDataY0,
    qualitativeRangeLegendData,
    standalone = true,
    subTitle,
    themeColor,
    themeVariant,
    title,
    titleComponent = React.createElement(ChartBulletTitle, null),
    titlePosition,
    // destructure last
    theme = getBulletThemeWithLegendColorScale({
      comparativeErrorMeasureData,
      comparativeErrorMeasureLegendData,
      comparativeWarningMeasureData,
      comparativeWarningMeasureLegendData,
      invert,
      primaryDotMeasureData,
      primaryDotMeasureLegendData,
      primarySegmentedMeasureData,
      primarySegmentedMeasureLegendData,
      qualitativeRangeData,
      qualitativeRangeLegendData,
      themeColor,
      themeVariant
    }),
    domain = getBulletDomain({
      comparativeErrorMeasureComponent,
      comparativeErrorMeasureData,
      comparativeWarningMeasureComponent,
      comparativeWarningMeasureData,
      maxDomain,
      minDomain,
      primaryDotMeasureComponent,
      primaryDotMeasureData,
      primarySegmentedMeasureComponent,
      primarySegmentedMeasureData,
      qualitativeRangeComponent,
      qualitativeRangeData
    }),
    legendOrientation = theme.legend.orientation,
    height = horizontal ? theme.chart.height : theme.chart.width,
    width = horizontal ? theme.chart.width : theme.chart.height,
    bulletSize = theme.chart.height
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["ariaDesc", "ariaTitle", "axisComponent", "comparativeErrorMeasureComponent", "comparativeErrorMeasureData", "comparativeErrorMeasureDataY", "comparativeErrorMeasureLegendData", "comparativeWarningMeasureComponent", "comparativeWarningMeasureData", "comparativeWarningMeasureDataY", "comparativeWarningMeasureLegendData", "comparativeZeroMeasureComponent", "constrainToVisibleArea", "groupTitleComponent", "groupSubTitle", "groupTitle", "horizontal", "invert", "labels", "legendComponent", "legendItemsPerRow", "legendPosition", "maxDomain", "minDomain", "padding", "primaryDotMeasureComponent", "primaryDotMeasureData", "primaryDotMeasureDataY", "primaryDotMeasureLegendData", "primarySegmentedMeasureComponent", "primarySegmentedMeasureData", "primarySegmentedMeasureDataY", "primarySegmentedMeasureLegendData", "qualitativeRangeComponent", "qualitativeRangeData", "qualitativeRangeDataY", "qualitativeRangeDataY0", "qualitativeRangeLegendData", "standalone", "subTitle", "themeColor", "themeVariant", "title", "titleComponent", "titlePosition", "theme", "domain", "legendOrientation", "height", "width", "bulletSize"]);

  // Note that we're using a fixed bullet height width to align components.
  const chartSize = {
    height: horizontal ? bulletSize : height,
    width: horizontal ? width : bulletSize
  };
  const defaultPadding = {
    bottom: getPaddingForSide('bottom', padding, theme.chart.padding),
    left: getPaddingForSide('left', padding, theme.chart.padding),
    right: getPaddingForSide('right', padding, theme.chart.padding),
    top: getPaddingForSide('top', padding, theme.chart.padding)
  }; // Bullet group title

  const bulletGroupTitle = React.cloneElement(groupTitleComponent, _objectSpread({
    height,
    standalone: false,
    subTitle: groupSubTitle,
    title: groupTitle,
    width
  }, groupTitleComponent.props)); // Bullet title

  const bulletTitle = React.cloneElement(titleComponent, _objectSpread({
    height,
    horizontal,
    legendPosition,
    padding,
    standalone: false,
    subTitle,
    theme,
    title,
    titlePosition,
    width
  }, titleComponent.props)); // Comparative error measure

  const comparativeErrorMeasure = React.cloneElement(comparativeErrorMeasureComponent, _objectSpread({
    barWidth: getComparativeMeasureErrorWidth({
      height: chartSize.height,
      horizontal,
      width: chartSize.width
    }),
    constrainToVisibleArea,
    data: comparativeErrorMeasureData,
    domain,
    height: chartSize.height,
    horizontal,
    labelComponent: React.createElement(ChartTooltip, {
      height: height,
      width: width
    }),
    labels,
    padding,
    standalone: false,
    width: chartSize.width,
    y: comparativeErrorMeasureDataY
  }, comparativeErrorMeasureComponent.props)); // Comparative warning measure

  const comparativeWarningMeasure = React.cloneElement(comparativeWarningMeasureComponent, _objectSpread({
    barWidth: getComparativeMeasureWarningWidth({
      height: chartSize.height,
      horizontal,
      width: chartSize.width
    }),
    constrainToVisibleArea,
    data: comparativeWarningMeasureData,
    domain,
    height: chartSize.height,
    horizontal,
    labelComponent: React.createElement(ChartTooltip, {
      height: height,
      width: width
    }),
    labels,
    padding,
    standalone: false,
    width: chartSize.width,
    y: comparativeWarningMeasureDataY
  }, comparativeWarningMeasureComponent.props)); // Comparative zero measure

  const comparativeZeroMeasure = React.cloneElement(comparativeZeroMeasureComponent, _objectSpread({
    barWidth: getComparativeMeasureWidth({
      height: chartSize.height,
      horizontal,
      width: chartSize.width
    }),
    data: [{
      y: 0
    }],
    domain,
    height: chartSize.height,
    horizontal,
    padding,
    standalone: false,
    width: chartSize.width
  }, comparativeZeroMeasureComponent.props)); // Legend

  const legend = React.cloneElement(legendComponent, _objectSpread({
    data: [...(primaryDotMeasureLegendData ? primaryDotMeasureLegendData : []), ...(primarySegmentedMeasureLegendData ? primarySegmentedMeasureLegendData : []), ...(comparativeWarningMeasureLegendData ? comparativeWarningMeasureLegendData : []), ...(comparativeErrorMeasureLegendData ? comparativeErrorMeasureLegendData : []), ...(qualitativeRangeLegendData ? qualitativeRangeLegendData : [])],
    itemsPerRow: legendItemsPerRow,
    orientation: legendOrientation,
    position: legendPosition,
    theme
  }, legendComponent.props)); // Primary dot measure

  const primaryDotMeasure = React.cloneElement(primaryDotMeasureComponent, _objectSpread({
    constrainToVisibleArea,
    data: primaryDotMeasureData,
    domain,
    height: chartSize.height,
    horizontal,
    invert,
    labelComponent: React.createElement(ChartTooltip, {
      height: height,
      width: width
    }),
    labels,
    padding,
    size: getPrimaryDotMeasureSize({
      height: chartSize.height,
      horizontal,
      width: chartSize.width
    }),
    standalone: false,
    themeColor,
    themeVariant,
    width: chartSize.width,
    y: primaryDotMeasureDataY
  }, primaryDotMeasureComponent.props)); // Primary segmented measure

  const primarySegmentedMeasure = React.cloneElement(primarySegmentedMeasureComponent, _objectSpread({
    constrainToVisibleArea,
    barWidth: getPrimarySegmentedMeasureWidth({
      height: chartSize.height,
      horizontal,
      width: chartSize.width
    }),
    data: primarySegmentedMeasureData,
    domain,
    height: chartSize.height,
    horizontal,
    invert,
    labelComponent: React.createElement(ChartTooltip, {
      height: height,
      width: width
    }),
    labels,
    padding,
    standalone: false,
    themeColor,
    themeVariant,
    width: chartSize.width,
    y: primarySegmentedMeasureDataY
  }, primarySegmentedMeasureComponent.props)); // Qualitative range

  const qualitativeRange = React.cloneElement(qualitativeRangeComponent, _objectSpread({
    constrainToVisibleArea,
    barWidth: getQualitativeRangeBarWidth({
      height: chartSize.height,
      horizontal,
      width: chartSize.width
    }),
    data: qualitativeRangeData,
    domain,
    height: chartSize.height,
    horizontal,
    invert,
    labelComponent: React.createElement(ChartTooltip, {
      height: height,
      width: width
    }),
    labels,
    padding,
    standalone: false,
    width: chartSize.width,
    y: qualitativeRangeDataY,
    y0: qualitativeRangeDataY0
  }, qualitativeRangeComponent.props)); // Returns tick values -- Victory doesn't include min/max domain

  const getTickValues = (minVal, maxVal) => {
    const tickValues = [minVal, maxVal];
    let range = 0;

    if (minVal < 0 && maxVal < 0) {
      range = Math.abs(minVal - maxVal);
    } else if (minVal < 0) {
      range = Math.abs(minVal) + maxVal;
    } else {
      range = maxVal - minVal;
    }

    const tickInterval = range / (ChartBulletStyles.axisTickCount - 1);

    for (let i = minVal; i < maxVal;) {
      i += tickInterval;
      tickValues.push(Math.ceil(i));
    }

    return tickValues;
  }; // Returns a wrapped legend


  const getWrappedLegend = () => {
    if (!legend.props.data) {
      return null;
    }

    let dx = 0;
    let dy = 0; // Adjust for padding

    if (legendPosition === ChartLegendPosition.bottom) {
      dy = horizontal ? defaultPadding.top * .5 + (defaultPadding.bottom * .5 - defaultPadding.bottom) - 25 : title ? -defaultPadding.bottom + 60 : -defaultPadding.bottom;
    } else if (legendPosition === ChartLegendPosition.bottomLeft) {
      dy = horizontal ? defaultPadding.top * .5 + (defaultPadding.bottom * .5 - defaultPadding.bottom) - 25 : title ? -defaultPadding.bottom + 60 : -defaultPadding.bottom;
      dx = -10;
    }

    return React.createElement(ChartLegendWrapper, {
      chartType: "bullet",
      dx: dx,
      dy: dy,
      height: chartSize.height,
      legendComponent: legend,
      orientation: legendOrientation,
      padding: padding,
      position: legendPosition,
      theme: theme,
      width: chartSize.width
    });
  }; // Returns comparative zero measure


  const getComparativeZeroMeasure = () => {
    const _domain = domain;
    const low = Array.isArray(_domain) ? _domain[0] : _domain.y && Array.isArray(_domain.y) ? _domain.y[0] : 0;
    const high = Array.isArray(_domain) ? _domain[_domain.length - 1] : _domain.y && Array.isArray(_domain.y) ? _domain.y[_domain.y.length - 1] : 0;

    if (low < 0 && high > 0) {
      return comparativeZeroMeasure;
    }

    return null;
  }; // Axis component for custom tick values


  const axis = React.cloneElement(axisComponent, _objectSpread({
    dependentAxis: horizontal ? false : true,
    domain: !horizontal ? domain : {
      x: domain.y,
      y: domain.x
    },
    height: chartSize.height,
    // Adjust for padding
    offsetX: !horizontal ? defaultPadding.left * .5 + (defaultPadding.right * .5 - (defaultPadding.right - 55)) : 0,
    offsetY: horizontal ? 80 - defaultPadding.top * .5 + (defaultPadding.bottom * .5 - 25) : 0,
    padding,
    standalone: false,
    tickCount: ChartBulletStyles.axisTickCount,
    tickValues: getTickValues(domain.y[0], domain.y[1]),
    width: chartSize.width
  }, axisComponent.props));
  const bulletChart = React.createElement(React.Fragment, null, axis, bulletGroupTitle, bulletTitle, qualitativeRange, primarySegmentedMeasure, primaryDotMeasure, comparativeErrorMeasure, comparativeWarningMeasure, getComparativeZeroMeasure(), getWrappedLegend());
  return standalone ? React.createElement(ChartContainer, {
    desc: ariaDesc,
    height: height,
    title: ariaTitle,
    theme: theme,
    width: width
  }, bulletChart) : React.createElement(React.Fragment, null, bulletChart);
};
ChartBullet.propTypes = {
  ariaDesc: _pt.string,
  ariaTitle: _pt.string,
  axisComponent: _pt.element,
  bulletSize: _pt.number,
  comparativeErrorMeasureComponent: _pt.element,
  comparativeErrorMeasureData: _pt.arrayOf(_pt.any),
  comparativeErrorMeasureDataY: _pt.any,
  comparativeErrorMeasureLegendData: _pt.arrayOf(_pt.shape({
    name: _pt.string,
    symbol: _pt.shape({
      fill: _pt.string,
      type: _pt.string
    })
  })),
  comparativeWarningMeasureComponent: _pt.element,
  comparativeWarningMeasureData: _pt.arrayOf(_pt.any),
  comparativeWarningMeasureDataY: _pt.any,
  comparativeWarningMeasureLegendData: _pt.arrayOf(_pt.shape({
    name: _pt.string,
    symbol: _pt.shape({
      fill: _pt.string,
      type: _pt.string
    })
  })),
  comparativeZeroMeasureComponent: _pt.element,
  constrainToVisibleArea: _pt.bool,
  domain: _pt.any,
  groupTitleComponent: _pt.element,
  groupSubTitle: _pt.string,
  groupTitle: _pt.string,
  height: _pt.number,
  horizontal: _pt.bool,
  invert: _pt.bool,
  labels: _pt.func,
  legendComponent: _pt.element,
  legendItemsPerRow: _pt.number,
  legendOrientation: _pt.oneOf(['horizontal', 'vertical'])
};
hoistNonReactStatics(ChartBullet, VictoryChart);
//# sourceMappingURL=ChartBullet.js.map