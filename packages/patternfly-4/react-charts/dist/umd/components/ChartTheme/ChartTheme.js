(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./themes/axis-theme", "./themes/base-theme", "./themes/bullet-theme", "./themes/donut-theme", "./themes/threshold-theme", "./themes/donut-threshold-theme", "./themes/donut-utilization-theme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./themes/axis-theme"), require("./themes/base-theme"), require("./themes/bullet-theme"), require("./themes/donut-theme"), require("./themes/threshold-theme"), require("./themes/donut-threshold-theme"), require("./themes/donut-utilization-theme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.axisTheme, global.baseTheme, global.bulletTheme, global.donutTheme, global.thresholdTheme, global.donutThresholdTheme, global.donutUtilizationTheme);
    global.undefined = mod.exports;
  }
})(this, function (exports, _axisTheme, _baseTheme, _bulletTheme, _donutTheme, _thresholdTheme, _donutThresholdTheme, _donutUtilizationTheme) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ChartThresholdTheme = exports.ChartDonutThresholdStaticTheme = exports.ChartDonutThresholdDynamicTheme = exports.ChartDonutTheme = exports.ChartDonutUtilizationStaticTheme = exports.ChartDonutUtilizationDynamicTheme = exports.ChartBulletQualitativeRangeTheme = exports.ChartBulletTheme = exports.ChartBulletPrimarySegmentedMeasureTheme = exports.ChartBulletPrimaryNegativeMeasureTheme = exports.ChartBulletPrimaryDotMeasureTheme = exports.ChartBulletGroupTitleTheme = exports.ChartBulletComparativeWarningMeasureTheme = exports.ChartBulletComparativeMeasureTheme = exports.ChartBulletComparativeErrorMeasureTheme = exports.ChartBaseTheme = exports.ChartAxisTheme = exports.ChartThemeVariant = exports.ChartThemeColor = undefined;

  /**
   * The color family to be applied to a theme. For example, 'blue' represents an ordered list of colors
   * (i.e., a color scale) composed from the blue color family defined by PatternFly core.
   *
   * For example, the 'blue' color scale looks like:
   *
   * chart_color_blue_100
   * chart_color_blue_200
   * chart_color_blue_300
   * chart_color_blue_400
   * chart_color_blue_500
   *
   * In this case, the chart_color_blue_100 value would be applied to the first data point in a chart.
   * The chart_color_blue_200 value would be applied to the second data point in a chart. And so on...
   *
   * If legend data is provided to a chart, those colors would be synced with the legend as well.
   *
   * The 'multiOrdered' color family is intended for ordered charts; donut, pie, bar, & stack
   * The 'multiUnordered' color family is intended for unordered charts; area & line
   * The 'multi' defaults to the 'multiOrdered' color family
   *
   * Note: These values are not intended to be applied directly as a component's fill style. For example, "multi" would
   * not be a valid fill color. Please use chart variables from PatternFly core (e.g., via the react-charts package)
   */
  const ChartThemeColor = exports.ChartThemeColor = {
    blue: 'blue',
    cyan: 'cyan',
    default: 'blue',
    gold: 'gold',
    gray: 'gray',
    green: 'green',
    multi: 'multi',
    multiOrdered: 'multi-ordered',
    multiUnordered: 'multi-unordered',
    orange: 'orange',
    purple: 'purple'
  };
  /**
   * The variant to be applied to a theme.
   *
   * Note: Only the light variant is currently supported
   */

  const ChartThemeVariant = exports.ChartThemeVariant = {
    dark: 'dark',
    default: 'light',
    light: 'light'
  };
  const ChartAxisTheme = exports.ChartAxisTheme = _axisTheme.AxisTheme;
  const ChartBaseTheme = exports.ChartBaseTheme = _baseTheme.BaseTheme;
  const ChartBulletComparativeErrorMeasureTheme = exports.ChartBulletComparativeErrorMeasureTheme = _bulletTheme.BulletComparativeErrorMeasureTheme;
  const ChartBulletComparativeMeasureTheme = exports.ChartBulletComparativeMeasureTheme = _bulletTheme.BulletComparativeMeasureTheme;
  const ChartBulletComparativeWarningMeasureTheme = exports.ChartBulletComparativeWarningMeasureTheme = _bulletTheme.BulletComparativeWarningMeasureTheme;
  const ChartBulletGroupTitleTheme = exports.ChartBulletGroupTitleTheme = _bulletTheme.BulletGroupTitleTheme;
  const ChartBulletPrimaryDotMeasureTheme = exports.ChartBulletPrimaryDotMeasureTheme = _bulletTheme.BulletPrimaryDotMeasureTheme;
  const ChartBulletPrimaryNegativeMeasureTheme = exports.ChartBulletPrimaryNegativeMeasureTheme = _bulletTheme.BulletPrimaryNegativeMeasureTheme;
  const ChartBulletPrimarySegmentedMeasureTheme = exports.ChartBulletPrimarySegmentedMeasureTheme = _bulletTheme.BulletPrimarySegmentedMeasureTheme;
  const ChartBulletTheme = exports.ChartBulletTheme = _bulletTheme.BulletTheme;
  const ChartBulletQualitativeRangeTheme = exports.ChartBulletQualitativeRangeTheme = _bulletTheme.BulletQualitativeRangeTheme;
  const ChartDonutUtilizationDynamicTheme = exports.ChartDonutUtilizationDynamicTheme = _donutUtilizationTheme.DonutUtilizationDynamicTheme;
  const ChartDonutUtilizationStaticTheme = exports.ChartDonutUtilizationStaticTheme = _donutUtilizationTheme.DonutUtilizationStaticTheme;
  const ChartDonutTheme = exports.ChartDonutTheme = _donutTheme.DonutTheme;
  const ChartDonutThresholdDynamicTheme = exports.ChartDonutThresholdDynamicTheme = _donutThresholdTheme.DonutThresholdDynamicTheme;
  const ChartDonutThresholdStaticTheme = exports.ChartDonutThresholdStaticTheme = _donutThresholdTheme.DonutThresholdStaticTheme;
  const ChartThresholdTheme = exports.ChartThresholdTheme = _thresholdTheme.ThresholdTheme;
});
//# sourceMappingURL=ChartTheme.js.map