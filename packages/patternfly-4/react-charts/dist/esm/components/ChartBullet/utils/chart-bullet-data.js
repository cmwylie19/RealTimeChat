function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { Data } from 'victory-core';
import { getBulletComparativeErrorMeasureTheme, getBulletComparativeMeasureTheme, getBulletComparativeWarningMeasureTheme, getBulletPrimaryDotMeasureTheme, getBulletPrimaryNegativeMeasureTheme, getBulletPrimarySegmentedMeasureTheme, getBulletQualitativeRangeTheme } from '../../ChartUtils';
export const getComparativeErrorMeasureData = ({
  data,
  themeColor,
  themeVariant,
  // destructure last
  theme = getBulletComparativeErrorMeasureTheme(themeColor, themeVariant),
  y
}) => {
  return getComparativeMeasureData({
    data,
    theme,
    themeColor,
    themeVariant,
    y
  });
};
export const getComparativeMeasureData = ({
  data,
  themeColor,
  themeVariant,
  // destructure last
  theme = getBulletComparativeMeasureTheme(themeColor, themeVariant),
  y
}) => {
  const datum = [];
  Data.formatData(data, {
    y
  }, ['y']).forEach((dataPoint, index) => {
    datum.push(_objectSpread({}, dataPoint, {
      _index: index // Save to sync legend color

    }));
  });
  const computedData = datum.map((dataPoint, index) => {
    return _objectSpread({}, dataPoint, {
      x: 1,
      _x: 1,
      y0: dataPoint._y,
      _y0: dataPoint._y,
      _color: theme.bar.style.data.fill // Save to sync legend color

    });
  });
  return computedData;
};
export const getComparativeWarningMeasureData = ({
  data,
  themeColor,
  themeVariant,
  // destructure last
  theme = getBulletComparativeWarningMeasureTheme(themeColor, themeVariant),
  y
}) => {
  return getComparativeMeasureData({
    data,
    theme,
    themeColor,
    themeVariant,
    y
  });
};
export const getPrimaryDotMeasureData = ({
  data,
  invert,
  themeColor,
  themeVariant,
  // destructure last
  theme = getBulletPrimaryDotMeasureTheme(themeColor, themeVariant),
  y,
  y0
}) => {
  return getComparativeMeasureData({
    data,
    invert,
    theme,
    themeColor,
    themeVariant,
    y,
    y0
  });
};
export const getPrimarySegmentedMeasureData = ({
  data,
  invert,
  themeColor,
  themeVariant,
  // destructure last
  theme = getBulletPrimarySegmentedMeasureTheme(themeColor, themeVariant),
  negativeMeasureTheme = getBulletPrimaryNegativeMeasureTheme(themeColor, themeVariant),
  y,
  y0
}) => {
  const negativeDatum = [];
  const positiveDatum = [];
  Data.formatData(data, {
    y,
    y0
  }, ['y', 'y0']).forEach((dataPoint, index) => {
    if (dataPoint._y < 0) {
      negativeDatum.push(_objectSpread({}, dataPoint, {
        _index: index // Save to sync legend color

      }));
    } else {
      positiveDatum.push(_objectSpread({}, dataPoint, {
        _index: index // Save to sync legend color

      }));
    }
  }); // Instead of relying on colorScale, colors must be added to each measure in ascending order

  const negativeComputedData = negativeDatum.sort((a, b) => b._y - a._y).map((dataPoint, index) => {
    return _objectSpread({}, dataPoint, {
      x: 1,
      _x: 1,
      _color: invert ? theme.group.colorScale[index % theme.group.colorScale.length] : negativeMeasureTheme.group.colorScale[index % theme.group.colorScale.length]
    }); // Sort descending so largest bar is appears behind others
  }).reverse(); // Instead of relying on colorScale, colors must be added to each measure in ascending order

  const positiveComputedData = positiveDatum.sort((a, b) => a._y - b._y).map((dataPoint, index) => {
    return _objectSpread({}, dataPoint, {
      x: 1,
      _x: 1,
      _color: invert ? negativeMeasureTheme.group.colorScale[index % theme.group.colorScale.length] : theme.group.colorScale[index % theme.group.colorScale.length]
    }); // Sort descending so largest bar is appears behind others
  }).reverse();
  return [...negativeComputedData, ...positiveComputedData];
};
export const getQualitativeRangeData = ({
  data,
  invert,
  themeColor,
  themeVariant,
  // destructure last
  theme = getBulletQualitativeRangeTheme(themeColor, themeVariant),
  y,
  y0
}) => {
  const datum = [];
  Data.formatData(data, {
    y,
    y0
  }, ['y', 'y0']).forEach((dataPoint, index) => {
    datum.push(_objectSpread({}, dataPoint, {
      _index: index // Save to sync legend color

    }));
  });
  const computedData = datum.sort((a, b) => invert ? b._y - a._y : a._y - b._y).map((dataPoint, index) => {
    return _objectSpread({}, dataPoint, {
      x: 1,
      _x: 1,
      // Instead of relying on colorScale, colors must be added to each measure in ascending order
      _color: theme.group.colorScale[index % theme.group.colorScale.length]
    }); // Sort descending so largest bar is appears behind others
  }).reverse();
  return computedData;
};
//# sourceMappingURL=chart-bullet-data.js.map