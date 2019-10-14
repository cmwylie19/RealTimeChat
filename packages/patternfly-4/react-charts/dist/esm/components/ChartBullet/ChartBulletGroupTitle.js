import _pt from "prop-types";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { Line } from 'victory-core';
import { ChartContainer } from '../ChartContainer';
import { ChartLabel } from '../ChartLabel';
import { ChartBulletStyles } from '../ChartTheme';
import { getBulletGroupTitleTheme, getLabelTextSize, getBulletLabelX, getBulletLabelY, getPaddingForSide } from '../ChartUtils';
/**
 * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
 */

export const ChartBulletGroupTitle = (_ref) => {
  let {
    ariaDesc,
    ariaTitle,
    capHeight = 1.1,
    dividerComponent = React.createElement(Line, null),
    padding,
    standalone = true,
    subTitleComponent = React.createElement(ChartLabel, null),
    subTitle,
    themeColor,
    themeVariant,
    title,
    titleComponent = React.createElement(ChartLabel, null),
    // destructure last
    theme = getBulletGroupTitleTheme(themeColor, themeVariant),
    height = theme.chart.height,
    width = theme.chart.width
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["ariaDesc", "ariaTitle", "capHeight", "dividerComponent", "padding", "standalone", "subTitleComponent", "subTitle", "themeColor", "themeVariant", "title", "titleComponent", "theme", "height", "width"]);

  const defaultPadding = {
    bottom: getPaddingForSide('bottom', padding, theme.chart.padding),
    left: getPaddingForSide('left', padding, theme.chart.padding),
    right: getPaddingForSide('right', padding, theme.chart.padding),
    top: getPaddingForSide('top', padding, theme.chart.padding)
  };
  const labelPadding = {
    bottom: getPaddingForSide('bottom', padding, theme.legend.style.labels.padding),
    left: getPaddingForSide('left', padding, theme.legend.style.labels.padding),
    right: getPaddingForSide('right', padding, theme.legend.style.labels.padding),
    top: getPaddingForSide('top', padding, theme.legend.style.labels.padding)
  }; // Horizontal divider to render under the group title

  const getDivider = () => {
    const titleSize = getLabelTextSize({
      text: title,
      theme
    });
    const subTitleSize = getLabelTextSize({
      text: subTitle,
      theme
    });
    const dy = title && subTitle ? titleSize.height + subTitleSize.height + labelPadding.top + labelPadding.bottom : titleSize.height + labelPadding.top + labelPadding.bottom;
    return React.cloneElement(dividerComponent, _objectSpread({
      x1: defaultPadding.left,
      x2: width - defaultPadding.right,
      y1: defaultPadding.top + dy,
      y2: defaultPadding.top + dy,
      style: theme.line.style.data
    }, dividerComponent.props));
  }; // Returns title


  const getTitle = () => {
    const titleProps = titleComponent ? titleComponent.props : {};
    const showBoth = title && subTitle;
    return React.cloneElement(titleComponent, _objectSpread({}, showBoth && {
      capHeight
    }, {
      style: [ChartBulletStyles.label.groupTitle, ChartBulletStyles.label.subTitle],
      text: showBoth ? [title, subTitle] : title,
      textAnchor: 'middle',
      verticalAnchor: 'middle',
      x: getBulletLabelX({
        chartWidth: width,
        labelPosition: 'top'
      }),
      y: getBulletLabelY({
        chartHeight: height,
        dy: defaultPadding.top,
        labelPosition: 'top'
      })
    }, titleProps));
  };

  const groupTitle = Boolean(title) && React.createElement(React.Fragment, null, getTitle(), getDivider());
  return standalone ? React.createElement(ChartContainer, {
    desc: ariaDesc,
    height: height,
    title: ariaTitle,
    width: width
  }, groupTitle) : React.createElement(React.Fragment, null, groupTitle);
};
ChartBulletGroupTitle.propTypes = {
  ariaDesc: _pt.string,
  ariaTitle: _pt.string,
  capHeight: _pt.any,
  dividerComponent: _pt.element,
  height: _pt.number,
  padding: _pt.any,
  standalone: _pt.bool,
  subTitle: _pt.string,
  subTitleComponent: _pt.element,
  theme: _pt.any,
  themeColor: _pt.string,
  themeVariant: _pt.string,
  title: _pt.string,
  titleComponent: _pt.element,
  width: _pt.number
};
//# sourceMappingURL=ChartBulletGroupTitle.js.map