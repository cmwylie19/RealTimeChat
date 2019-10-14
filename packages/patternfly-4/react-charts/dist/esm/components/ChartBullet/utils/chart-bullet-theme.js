import { getPrimaryDotMeasureData, getComparativeErrorMeasureData, getComparativeWarningMeasureData, getPrimarySegmentedMeasureData, getQualitativeRangeData } from './chart-bullet-data';
import { getBulletTheme } from '../../ChartUtils';

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

export const getColorScale = ({
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
    const computedData = getPrimaryDotMeasureData({
      data: primaryDotMeasureData,
      invert
    });
    colorScale.push(...getLegendColorScale(computedData, primaryDotMeasureLegendData));
  }

  if (primarySegmentedMeasureLegendData && primarySegmentedMeasureLegendData.length) {
    const computedData = getPrimarySegmentedMeasureData({
      data: primarySegmentedMeasureData,
      invert,
      themeColor,
      themeVariant
    });
    colorScale.push(...getLegendColorScale(computedData, primarySegmentedMeasureLegendData));
  }

  if (comparativeWarningMeasureLegendData && comparativeWarningMeasureLegendData.length) {
    const computedData = getComparativeWarningMeasureData({
      data: comparativeWarningMeasureData,
      invert,
      themeColor,
      themeVariant
    });
    colorScale.push(...getLegendColorScale(computedData, comparativeWarningMeasureLegendData));
  }

  if (comparativeErrorMeasureLegendData && comparativeErrorMeasureLegendData.length) {
    const computedData = getComparativeErrorMeasureData({
      data: comparativeErrorMeasureData,
      invert,
      themeColor,
      themeVariant
    });
    colorScale.push(...getLegendColorScale(computedData, comparativeErrorMeasureLegendData));
  }

  if (qualitativeRangeLegendData && qualitativeRangeLegendData.length) {
    const computedData = getQualitativeRangeData({
      data: qualitativeRangeData,
      invert
    });
    colorScale.push(...getLegendColorScale(computedData, qualitativeRangeLegendData));
  }

  return colorScale;
}; // Get bullet chart theme with legend color scale

export const getBulletThemeWithLegendColorScale = ({
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
  const theme = getBulletTheme(themeColor, themeVariant);
  theme.legend.colorScale = [...colorScale];
  return theme;
};
//# sourceMappingURL=chart-bullet-theme.js.map