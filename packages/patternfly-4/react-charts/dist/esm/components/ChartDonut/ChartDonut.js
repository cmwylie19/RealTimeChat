import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryPie } from 'victory';
import { Helpers } from "victory-core";
import { getDonutTheme } from '../ChartUtils/chart-theme';
import { ChartContainer } from '../ChartContainer';
import { ChartLabel } from '../ChartLabel';
import { ChartPie } from '../ChartPie';
import { ChartCommonStyles, ChartDonutStyles } from '../ChartTheme';
import { getPieLabelX, getPieLabelY, getPaddingForSide } from '../ChartUtils';
export let ChartDonutLabelPosition;

(function (ChartDonutLabelPosition) {
  ChartDonutLabelPosition["centroid"] = "centroid";
  ChartDonutLabelPosition["endAngle"] = "endAngle";
  ChartDonutLabelPosition["startAngle"] = "startAngle";
})(ChartDonutLabelPosition || (ChartDonutLabelPosition = {}));

export let ChartDonutSortOrder;

(function (ChartDonutSortOrder) {
  ChartDonutSortOrder["ascending"] = "ascending";
  ChartDonutSortOrder["descending"] = "descending";
})(ChartDonutSortOrder || (ChartDonutSortOrder = {}));

export let ChartDonutSubTitlePosition;
/**
 * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
 */

(function (ChartDonutSubTitlePosition) {
  ChartDonutSubTitlePosition["bottom"] = "bottom";
  ChartDonutSubTitlePosition["center"] = "center";
  ChartDonutSubTitlePosition["right"] = "right";
})(ChartDonutSubTitlePosition || (ChartDonutSubTitlePosition = {}));

export const ChartDonut = (_ref) => {
  let {
    allowTooltip = true,
    ariaDesc,
    ariaTitle,
    capHeight = 1.1,
    containerComponent = React.createElement(ChartContainer, null),
    innerRadius,
    legendPosition = ChartCommonStyles.legend.position,
    padding,
    radius,
    standalone = true,
    subTitle,
    subTitleComponent = React.createElement(ChartLabel, null),
    subTitlePosition = ChartDonutStyles.label.subTitlePosition,
    themeColor,
    themeVariant,
    title,
    titleComponent = React.createElement(ChartLabel, null),
    // destructure last
    theme = getDonutTheme(themeColor, themeVariant),
    height = theme.pie.height,
    width = theme.pie.width
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["allowTooltip", "ariaDesc", "ariaTitle", "capHeight", "containerComponent", "innerRadius", "legendPosition", "padding", "radius", "standalone", "subTitle", "subTitleComponent", "subTitlePosition", "themeColor", "themeVariant", "title", "titleComponent", "theme", "height", "width"]);

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
  const chartInnerRadius = innerRadius ? innerRadius : chartRadius - 9; // Todo: Add pf-core variable
  // Returns subtitle

  const getSubTitle = () => {
    if (!subTitle || subTitlePosition === ChartDonutSubTitlePosition.center) {
      return null;
    }

    const subTitleProps = subTitleComponent.props ? subTitleComponent.props : {};
    return React.cloneElement(subTitleComponent, _objectSpread({
      style: ChartDonutStyles.label.subTitle,
      text: subTitle,
      textAnchor: subTitlePosition === 'right' ? 'start' : 'middle',
      verticalAnchor: 'middle',
      x: getPieLabelX({
        height,
        labelPosition: subTitlePosition,
        legendPosition,
        padding: defaultPadding,
        width
      }),
      y: getPieLabelY({
        height,
        labelPosition: subTitlePosition,
        padding: defaultPadding,
        width
      })
    }, subTitleProps));
  }; // Returns title


  const getTitle = () => {
    if (!title) {
      return null;
    }

    const titleProps = titleComponent ? titleComponent.props : {};
    const showBoth = title && subTitle && subTitlePosition == ChartDonutSubTitlePosition.center;
    return React.cloneElement(titleComponent, _objectSpread({}, showBoth && {
      capHeight
    }, {
      style: [ChartDonutStyles.label.title, ChartDonutStyles.label.subTitle],
      text: showBoth ? [title, subTitle] : title,
      textAnchor: 'middle',
      verticalAnchor: 'middle',
      x: getPieLabelX({
        height,
        labelPosition: 'center',
        legendPosition,
        padding: defaultPadding,
        width
      }),
      y: getPieLabelY({
        height,
        labelPosition: 'center',
        padding: defaultPadding,
        width
      })
    }, titleProps));
  };

  const chart = React.createElement(ChartPie, _extends({
    allowTooltip: allowTooltip,
    height: height,
    innerRadius: chartInnerRadius > 0 ? chartInnerRadius : 0,
    legendPosition: legendPosition,
    padding: padding,
    radius: chartRadius > 0 ? chartRadius : 0,
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

  return standalone ? React.createElement(StandaloneContainer, null, chart, getTitle(), getSubTitle()) : React.createElement(React.Fragment, null, chart, getTitle(), getSubTitle());
}; // Note: VictoryPie.role must be hoisted

ChartDonut.propTypes = {
  allowTooltip: _pt.bool,
  animate: _pt.any,
  ariaDesc: _pt.string,
  ariaTitle: _pt.string,
  capHeight: _pt.any,
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
  }))
};
hoistNonReactStatics(ChartDonut, VictoryPie);
//# sourceMappingURL=ChartDonut.js.map