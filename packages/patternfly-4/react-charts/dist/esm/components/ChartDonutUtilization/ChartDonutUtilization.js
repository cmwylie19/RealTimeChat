import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { orderBy } from 'lodash';
import { VictoryPie } from 'victory';
import { Data } from 'victory-core';
import { ChartContainer } from '../ChartContainer';
import { ChartDonut } from '../ChartDonut';
import { ChartDonutUtilizationStyles } from '../ChartTheme';
import { getDonutUtilizationTheme } from '../ChartUtils';
export let ChartDonutUtilizationLabelPosition;

(function (ChartDonutUtilizationLabelPosition) {
  ChartDonutUtilizationLabelPosition["centroid"] = "centroid";
  ChartDonutUtilizationLabelPosition["endAngle"] = "endAngle";
  ChartDonutUtilizationLabelPosition["startAngle"] = "startAngle";
})(ChartDonutUtilizationLabelPosition || (ChartDonutUtilizationLabelPosition = {}));

export let ChartDonutUtilizationLegendOrientation;

(function (ChartDonutUtilizationLegendOrientation) {
  ChartDonutUtilizationLegendOrientation["horizontal"] = "horizontal";
  ChartDonutUtilizationLegendOrientation["vertical"] = "vertical";
})(ChartDonutUtilizationLegendOrientation || (ChartDonutUtilizationLegendOrientation = {}));

export let ChartDonutUtilizationLegendPosition;

(function (ChartDonutUtilizationLegendPosition) {
  ChartDonutUtilizationLegendPosition["bottom"] = "bottom";
  ChartDonutUtilizationLegendPosition["right"] = "right";
})(ChartDonutUtilizationLegendPosition || (ChartDonutUtilizationLegendPosition = {}));

export let ChartDonutUtilizationSortOrder;

(function (ChartDonutUtilizationSortOrder) {
  ChartDonutUtilizationSortOrder["ascending"] = "ascending";
  ChartDonutUtilizationSortOrder["descending"] = "descending";
})(ChartDonutUtilizationSortOrder || (ChartDonutUtilizationSortOrder = {}));

export let ChartDonutUtilizationSubTitlePosition;
/**
 * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
 */

(function (ChartDonutUtilizationSubTitlePosition) {
  ChartDonutUtilizationSubTitlePosition["bottom"] = "bottom";
  ChartDonutUtilizationSubTitlePosition["center"] = "center";
  ChartDonutUtilizationSubTitlePosition["right"] = "right";
})(ChartDonutUtilizationSubTitlePosition || (ChartDonutUtilizationSubTitlePosition = {}));

export const ChartDonutUtilization = (_ref) => {
  let {
    allowTooltip = true,
    ariaDesc,
    ariaTitle,
    containerComponent = React.createElement(ChartContainer, null),
    data,
    invert = false,
    padding,
    showStatic = true,
    standalone = true,
    themeColor,
    themeVariant,
    thresholds,
    x,
    y,
    // destructure last
    theme = getDonutUtilizationTheme(themeColor, themeVariant),
    height = theme.pie.height,
    width = theme.pie.width
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["allowTooltip", "ariaDesc", "ariaTitle", "containerComponent", "data", "invert", "padding", "showStatic", "standalone", "themeColor", "themeVariant", "thresholds", "x", "y", "theme", "height", "width"]);

  // Returns computed data representing pie chart slices
  const getComputedData = () => {
    const datum = getData();
    const computedData = [{
      x: datum[0]._x,
      y: datum[0]._y || 0
    }];

    if (showStatic) {
      computedData.push({
        y: datum[0]._x ? Math.abs(100 - datum[0]._y) : 100
      });
    }

    return computedData;
  };

  const getData = () => {
    const datum = [_objectSpread({}, data)];
    return Data.formatData(datum, _objectSpread({
      x,
      y
    }, rest), ['x', 'y']).sort((a, b) => a._y - b._y);
  }; // Returns thresholds with default color scale


  const getDonutThresholds = () => {
    const result = [];

    if (thresholds) {
      // Ensure thresholds are in sorted order
      const sThresholds = orderBy(thresholds, 'value', invert ? 'desc' : 'asc');
      const numColors = ChartDonutUtilizationStyles.thresholds.colorScale.length;

      for (let i = 0; i < sThresholds.length; i++) {
        result.push({
          color: sThresholds[i].color ? sThresholds[i].color : ChartDonutUtilizationStyles.thresholds.colorScale[i % numColors],
          value: sThresholds[i].value
        });
      }
    }

    return result;
  }; // Returns theme based on threshold and current value


  const getThresholdTheme = () => {
    const newTheme = _objectSpread({}, theme);

    if (data) {
      const datum = getData();
      const donutThresholds = getDonutThresholds();

      const mergeThemeProps = i => {
        // Merge just the first color of dynamic (blue, green, etc.) with static (gray) for expected colorScale
        newTheme.pie.colorScale[0] = donutThresholds[i].color;
        newTheme.legend.colorScale[0] = donutThresholds[i].color;
      };

      for (let i = 0; i < donutThresholds.length; i++) {
        if (invert) {
          if (datum[0]._y <= donutThresholds[i].value) {
            mergeThemeProps(i);
          }
        } else {
          if (datum[0]._y >= donutThresholds[i].value) {
            mergeThemeProps(i);
          }
        }
      }
    }

    return newTheme;
  }; // Dynamic donut chart


  const chart = React.createElement(ChartDonut, _extends({
    allowTooltip: allowTooltip,
    data: getComputedData(),
    height: height,
    padding: padding,
    standalone: false,
    theme: getThresholdTheme(),
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

  return standalone ? React.createElement(StandaloneContainer, null, chart) : React.createElement(React.Fragment, null, chart);
}; // Note: VictoryPie.role must be hoisted

ChartDonutUtilization.propTypes = {
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
  data: _pt.any,
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
  labelComponent: _pt.element,
  labelPosition: _pt.oneOf(['startAngle', 'endAngle', 'centroid']),
  legendComponent: _pt.element,
  legendData: _pt.arrayOf(_pt.shape({
    name: _pt.string,
    symbol: _pt.shape({
      fill: _pt.string,
      type: _pt.string
    })
  }))
};
hoistNonReactStatics(ChartDonutUtilization, VictoryPie);
//# sourceMappingURL=ChartDonutUtilization.js.map