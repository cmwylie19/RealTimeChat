(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./chart-bullet-data", "../../ChartUtils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./chart-bullet-data"), require("../../ChartUtils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.chartBulletData, global.ChartUtils);
    global.undefined = mod.exports;
  }
})(this, function (exports, _chartBulletData, _ChartUtils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getBulletThemeWithLegendColorScale = exports.getColorScale = undefined;

  const getLegendColorScale = (computedData, legendData) => {
    const colorScale = [];
    legendData.forEach((data, index) => {
      for (let i = 0; i < computedData.length; i++) {
        if (index === computedData[i]._index) {
          colorScale.push(computedData[i]._color);
        }
      }
    });
    return colorScale;
  };

  const getColorScale = exports.getColorScale = ({
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
  }) => {
    const colorScale = [];

    if (primaryDotMeasureLegendData && primaryDotMeasureLegendData.length) {
      const computedData = (0, _chartBulletData.getPrimaryDotMeasureData)({
        data: primaryDotMeasureData,
        invert
      });
      colorScale.push(...getLegendColorScale(computedData, primaryDotMeasureLegendData));
    }

    if (primarySegmentedMeasureLegendData && primarySegmentedMeasureLegendData.length) {
      const computedData = (0, _chartBulletData.getPrimarySegmentedMeasureData)({
        data: primarySegmentedMeasureData,
        invert,
        themeColor,
        themeVariant
      });
      colorScale.push(...getLegendColorScale(computedData, primarySegmentedMeasureLegendData));
    }

    if (comparativeWarningMeasureLegendData && comparativeWarningMeasureLegendData.length) {
      const computedData = (0, _chartBulletData.getComparativeWarningMeasureData)({
        data: comparativeWarningMeasureData,
        invert,
        themeColor,
        themeVariant
      });
      colorScale.push(...getLegendColorScale(computedData, comparativeWarningMeasureLegendData));
    }

    if (comparativeErrorMeasureLegendData && comparativeErrorMeasureLegendData.length) {
      const computedData = (0, _chartBulletData.getComparativeErrorMeasureData)({
        data: comparativeErrorMeasureData,
        invert,
        themeColor,
        themeVariant
      });
      colorScale.push(...getLegendColorScale(computedData, comparativeErrorMeasureLegendData));
    }

    if (qualitativeRangeLegendData && qualitativeRangeLegendData.length) {
      const computedData = (0, _chartBulletData.getQualitativeRangeData)({
        data: qualitativeRangeData,
        invert
      });
      colorScale.push(...getLegendColorScale(computedData, qualitativeRangeLegendData));
    }

    return colorScale;
  }; // Get bullet chart theme with legend color scale


  const getBulletThemeWithLegendColorScale = exports.getBulletThemeWithLegendColorScale = ({
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
  }) => {
    const colorScale = getColorScale({
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
    });
    const theme = (0, _ChartUtils.getBulletTheme)(themeColor, themeVariant);
    theme.legend.colorScale = [...colorScale];
    return theme;
  };
});
//# sourceMappingURL=chart-bullet-theme.js.map