import _pt from "prop-types";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { ChartContainer } from '../ChartContainer';
import { ChartLabel } from '../ChartLabel';
import { ChartBulletStyles, ChartCommonStyles } from '../ChartTheme';
import { getBulletTheme, getBulletLabelX, getBulletLabelY, getPaddingForSide } from '../ChartUtils';
/**
 * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
 */

export const ChartBulletTitle = (_ref) => {
  let {
    ariaDesc,
    ariaTitle,
    capHeight = 1.1,
    horizontal = true,
    legendPosition = 'bottom',
    padding,
    standalone = true,
    subTitleComponent = React.createElement(ChartLabel, null),
    subTitle,
    themeColor,
    themeVariant,
    title,
    titleComponent = React.createElement(ChartLabel, null),
    titlePosition,
    // destructure last
    theme = getBulletTheme(themeColor, themeVariant),
    height = horizontal ? theme.chart.height : theme.chart.width,
    width = horizontal ? theme.chart.width : theme.chart.height
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["ariaDesc", "ariaTitle", "capHeight", "horizontal", "legendPosition", "padding", "standalone", "subTitleComponent", "subTitle", "themeColor", "themeVariant", "title", "titleComponent", "titlePosition", "theme", "height", "width"]);

  const chartSize = {
    height: horizontal ? theme.chart.height : height,
    width: horizontal ? width : theme.chart.height
  };
  const defaultPadding = {
    bottom: getPaddingForSide('bottom', padding, theme.chart.padding),
    left: getPaddingForSide('left', padding, theme.chart.padding),
    right: getPaddingForSide('right', padding, theme.chart.padding),
    top: getPaddingForSide('top', padding, theme.chart.padding)
  }; // Returns title

  const getTitle = () => {
    const showBoth = title && subTitle;
    let labelPosition = horizontal ? 'left' : 'bottom';

    if (titlePosition && titlePosition.includes('left') && horizontal) {
      labelPosition = titlePosition;
    } // The x and y calculations below are used to adjust the position of the title, based on padding and scale.
    // This ensures that when padding is adjusted, the title moves along with the chart's position.


    return React.cloneElement(titleComponent, _objectSpread({}, showBoth && {
      capHeight
    }, {
      style: [ChartBulletStyles.label.title, ChartBulletStyles.label.subTitle],
      text: showBoth ? [title, subTitle] : title,
      textAnchor: labelPosition === 'top-left' ? 'start' : horizontal ? 'end' : 'middle',
      verticalAnchor: labelPosition === 'top-left' ? 'end' : 'middle',
      // Adjust for padding
      x: horizontal ? getBulletLabelX({
        chartWidth: chartSize.width,
        dx: labelPosition === 'top-left' ? defaultPadding.left : defaultPadding.left - ChartCommonStyles.label.margin * 1.75,
        labelPosition: 'left',
        // skip 'bottom'
        legendPosition,
        svgWidth: width
      }) : defaultPadding.left * .5 + (defaultPadding.right * .5 - (defaultPadding.right - 50)) + ChartBulletStyles.qualitativeRangeWidth / 2,
      y: getBulletLabelY({
        chartHeight: chartSize.height,
        // Adjust for padding
        dy: labelPosition === 'top-left' ? defaultPadding.top * .5 + (defaultPadding.bottom * .5 - defaultPadding.bottom) + 58 - ChartCommonStyles.legend.margin + (showBoth ? 0 : 1) : horizontal ? defaultPadding.top * .5 + (defaultPadding.bottom * .5 - defaultPadding.bottom) : ChartCommonStyles.legend.margin * 2 - defaultPadding.bottom,
        labelPosition
      })
    }, titleComponent.props));
  };

  return standalone ? React.createElement(ChartContainer, {
    desc: ariaDesc,
    height: height,
    title: ariaTitle,
    width: width
  }, getTitle()) : React.createElement(React.Fragment, null, getTitle());
};
ChartBulletTitle.propTypes = {
  ariaDesc: _pt.string,
  ariaTitle: _pt.string,
  capHeight: _pt.any,
  height: _pt.number,
  horizontal: _pt.bool,
  legendPosition: _pt.oneOf(['bottom', 'bottom-left', 'right']),
  padding: _pt.any,
  standalone: _pt.bool,
  subTitle: _pt.string,
  subTitleComponent: _pt.element,
  theme: _pt.any,
  themeColor: _pt.string,
  themeVariant: _pt.string,
  title: _pt.string,
  titleComponent: _pt.element,
  titlePosition: _pt.oneOf(['left', 'top-left']),
  width: _pt.number
};
//# sourceMappingURL=ChartBulletTitle.js.map