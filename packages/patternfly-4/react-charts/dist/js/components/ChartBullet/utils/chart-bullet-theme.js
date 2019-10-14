"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBulletThemeWithLegendColorScale = exports.getColorScale = void 0;

var _chartBulletData = require("./chart-bullet-data");

var _ChartUtils = require("../../ChartUtils");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var getLegendColorScale = function getLegendColorScale(computedData, legendData) {
  var colorScale = [];
  legendData.forEach(function (data, index) {
    for (var i = 0; i < computedData.length; i++) {
      if (index === computedData[i]._index) {
        colorScale.push(computedData[i]._color);
      }
    }
  });
  return colorScale;
};

var getColorScale = function getColorScale(_ref) {
  var comparativeErrorMeasureData = _ref.comparativeErrorMeasureData,
      comparativeErrorMeasureLegendData = _ref.comparativeErrorMeasureLegendData,
      comparativeWarningMeasureData = _ref.comparativeWarningMeasureData,
      comparativeWarningMeasureLegendData = _ref.comparativeWarningMeasureLegendData,
      invert = _ref.invert,
      primaryDotMeasureData = _ref.primaryDotMeasureData,
      primaryDotMeasureLegendData = _ref.primaryDotMeasureLegendData,
      primarySegmentedMeasureData = _ref.primarySegmentedMeasureData,
      primarySegmentedMeasureLegendData = _ref.primarySegmentedMeasureLegendData,
      qualitativeRangeData = _ref.qualitativeRangeData,
      qualitativeRangeLegendData = _ref.qualitativeRangeLegendData,
      themeColor = _ref.themeColor,
      themeVariant = _ref.themeVariant;
  var colorScale = [];

  if (primaryDotMeasureLegendData && primaryDotMeasureLegendData.length) {
    var computedData = (0, _chartBulletData.getPrimaryDotMeasureData)({
      data: primaryDotMeasureData,
      invert: invert
    });
    colorScale.push.apply(colorScale, _toConsumableArray(getLegendColorScale(computedData, primaryDotMeasureLegendData)));
  }

  if (primarySegmentedMeasureLegendData && primarySegmentedMeasureLegendData.length) {
    var _computedData = (0, _chartBulletData.getPrimarySegmentedMeasureData)({
      data: primarySegmentedMeasureData,
      invert: invert,
      themeColor: themeColor,
      themeVariant: themeVariant
    });

    colorScale.push.apply(colorScale, _toConsumableArray(getLegendColorScale(_computedData, primarySegmentedMeasureLegendData)));
  }

  if (comparativeWarningMeasureLegendData && comparativeWarningMeasureLegendData.length) {
    var _computedData2 = (0, _chartBulletData.getComparativeWarningMeasureData)({
      data: comparativeWarningMeasureData,
      invert: invert,
      themeColor: themeColor,
      themeVariant: themeVariant
    });

    colorScale.push.apply(colorScale, _toConsumableArray(getLegendColorScale(_computedData2, comparativeWarningMeasureLegendData)));
  }

  if (comparativeErrorMeasureLegendData && comparativeErrorMeasureLegendData.length) {
    var _computedData3 = (0, _chartBulletData.getComparativeErrorMeasureData)({
      data: comparativeErrorMeasureData,
      invert: invert,
      themeColor: themeColor,
      themeVariant: themeVariant
    });

    colorScale.push.apply(colorScale, _toConsumableArray(getLegendColorScale(_computedData3, comparativeErrorMeasureLegendData)));
  }

  if (qualitativeRangeLegendData && qualitativeRangeLegendData.length) {
    var _computedData4 = (0, _chartBulletData.getQualitativeRangeData)({
      data: qualitativeRangeData,
      invert: invert
    });

    colorScale.push.apply(colorScale, _toConsumableArray(getLegendColorScale(_computedData4, qualitativeRangeLegendData)));
  }

  return colorScale;
}; // Get bullet chart theme with legend color scale


exports.getColorScale = getColorScale;

var getBulletThemeWithLegendColorScale = function getBulletThemeWithLegendColorScale(_ref2) {
  var comparativeErrorMeasureData = _ref2.comparativeErrorMeasureData,
      comparativeErrorMeasureLegendData = _ref2.comparativeErrorMeasureLegendData,
      comparativeWarningMeasureData = _ref2.comparativeWarningMeasureData,
      comparativeWarningMeasureLegendData = _ref2.comparativeWarningMeasureLegendData,
      invert = _ref2.invert,
      primaryDotMeasureData = _ref2.primaryDotMeasureData,
      primaryDotMeasureLegendData = _ref2.primaryDotMeasureLegendData,
      primarySegmentedMeasureData = _ref2.primarySegmentedMeasureData,
      primarySegmentedMeasureLegendData = _ref2.primarySegmentedMeasureLegendData,
      qualitativeRangeData = _ref2.qualitativeRangeData,
      qualitativeRangeLegendData = _ref2.qualitativeRangeLegendData,
      themeColor = _ref2.themeColor,
      themeVariant = _ref2.themeVariant;
  var colorScale = getColorScale({
    comparativeErrorMeasureData: comparativeErrorMeasureData,
    comparativeErrorMeasureLegendData: comparativeErrorMeasureLegendData,
    comparativeWarningMeasureData: comparativeWarningMeasureData,
    comparativeWarningMeasureLegendData: comparativeWarningMeasureLegendData,
    invert: invert,
    primaryDotMeasureData: primaryDotMeasureData,
    primaryDotMeasureLegendData: primaryDotMeasureLegendData,
    primarySegmentedMeasureData: primarySegmentedMeasureData,
    primarySegmentedMeasureLegendData: primarySegmentedMeasureLegendData,
    qualitativeRangeData: qualitativeRangeData,
    qualitativeRangeLegendData: qualitativeRangeLegendData,
    themeColor: themeColor,
    themeVariant: themeVariant
  });
  var theme = (0, _ChartUtils.getBulletTheme)(themeColor, themeVariant);
  theme.legend.colorScale = _toConsumableArray(colorScale);
  return theme;
};

exports.getBulletThemeWithLegendColorScale = getBulletThemeWithLegendColorScale;
//# sourceMappingURL=chart-bullet-theme.js.map