import _pt from "prop-types";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { ChartLegend } from '../ChartLegend';
import { ChartCommonStyles } from '../ChartTheme';
import { getLegendX, getLegendY, getTheme } from '../ChartUtils';
export let ChartLegendConfigChartType;
/**
 * Helper to position a legend component within a component's SVG
 *
 * Example:
 *
 * <ChartLegendWrapper
 *   chartHeight={200}
 *   chartWidth={600}
 *   legendComponent={<ChartLegend data={[{ name: 'Cats' }, { name: 'Dogs' }]} orientation="vertical"/>}
 *   position="right"
 *   svgHeight={200}
 *   svgWidth={800}
 * />
 */

(function (ChartLegendConfigChartType) {
  ChartLegendConfigChartType["chart"] = "chart";
  ChartLegendConfigChartType["pie"] = "pie";
})(ChartLegendConfigChartType || (ChartLegendConfigChartType = {}));

export const ChartLegendWrapper = ({
  chartType = 'chart',
  dx = 0,
  dy = 0,
  legendComponent = React.createElement(ChartLegend, null),
  padding,
  position = ChartCommonStyles.legend.position,
  themeColor,
  themeVariant,
  // destructure last
  theme = getTheme(themeColor, themeVariant),
  orientation = theme.legend.orientation,
  height = theme.chart.height,
  width = theme.chart.width
}) => {
  const legendProps = legendComponent.props ? legendComponent.props : {};
  const legendX = getLegendX({
    chartType,
    dx,
    height,
    legendData: legendProps.data,
    legendOrientation: legendProps.legendOrientation ? legendProps.legendOrientation : orientation,
    legendPosition: position,
    legendProps,
    padding,
    theme,
    width
  });
  const legendY = getLegendY({
    chartType,
    dy,
    height,
    legendData: legendProps.data,
    legendOrientation: legendProps.legendOrientation ? legendProps.legendOrientation : orientation,
    legendProps: legendProps,
    legendPosition: position,
    padding,
    theme,
    width
  });
  const legend = React.cloneElement(legendComponent, _objectSpread({
    orientation,
    standalone: false,
    theme,
    x: legendX > 0 ? legendX : 0,
    y: legendY > 0 ? legendY : 0
  }, legendComponent.props));
  return React.createElement(React.Fragment, null, legend);
};
ChartLegendWrapper.propTypes = {
  chartType: _pt.string,
  dx: _pt.number,
  dy: _pt.number,
  height: _pt.number,
  legendComponent: _pt.element,
  orientation: _pt.oneOf(['horizontal', 'vertical']),
  padding: _pt.any,
  position: _pt.oneOf(['bottom', 'bottom-left', 'right']),
  theme: _pt.any,
  themeColor: _pt.string,
  themeVariant: _pt.string,
  width: _pt.number
};
//# sourceMappingURL=ChartLegendWrapper.js.map