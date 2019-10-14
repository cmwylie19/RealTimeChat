"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getThresholdTheme = exports.getTheme = exports.getLightThemeColors = exports.getDarkThemeColors = exports.getDonutUtilizationTheme = exports.getDonutThresholdStaticTheme = exports.getDonutThresholdDynamicTheme = exports.getDonutTheme = exports.getBulletQualitativeRangeTheme = exports.getBulletPrimarySegmentedMeasureTheme = exports.getBulletPrimaryNegativeMeasureTheme = exports.getBulletPrimaryDotMeasureTheme = exports.getBulletGroupTitleTheme = exports.getBulletComparativeWarningMeasureTheme = exports.getBulletComparativeMeasureTheme = exports.getBulletComparativeErrorMeasureTheme = exports.getBulletTheme = exports.getAxisTheme = exports.getCustomTheme = void 0;

var _lodash = require("lodash");

var _blueColorTheme = require("../ChartTheme/themes/dark/blue-color-theme");

var _cyanColorTheme = require("../ChartTheme/themes/dark/cyan-color-theme");

var _goldColorTheme = require("../ChartTheme/themes/dark/gold-color-theme");

var _grayColorTheme = require("../ChartTheme/themes/dark/gray-color-theme");

var _greenColorTheme = require("../ChartTheme/themes/dark/green-color-theme");

var _multiColorOrderedTheme = require("../ChartTheme/themes/dark/multi-color-ordered-theme");

var _multiColorUnorderedTheme = require("../ChartTheme/themes/dark/multi-color-unordered-theme");

var _orangeColorTheme = require("../ChartTheme/themes/dark/orange-color-theme");

var _purpleColorTheme = require("../ChartTheme/themes/dark/purple-color-theme");

var _blueColorTheme2 = require("../ChartTheme/themes/light/blue-color-theme");

var _cyanColorTheme2 = require("../ChartTheme/themes/light/cyan-color-theme");

var _goldColorTheme2 = require("../ChartTheme/themes/light/gold-color-theme");

var _grayColorTheme2 = require("../ChartTheme/themes/light/gray-color-theme");

var _greenColorTheme2 = require("../ChartTheme/themes/light/green-color-theme");

var _multiColorOrderedTheme2 = require("../ChartTheme/themes/light/multi-color-ordered-theme");

var _multiColorUnorderedTheme2 = require("../ChartTheme/themes/light/multi-color-unordered-theme");

var _orangeColorTheme2 = require("../ChartTheme/themes/light/orange-color-theme");

var _purpleColorTheme2 = require("../ChartTheme/themes/light/purple-color-theme");

var _ChartTheme = require("../ChartTheme/ChartTheme");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Apply custom properties to base and color themes
var getCustomTheme = function getCustomTheme(themeColor, themeVariant, customTheme) {
  return (0, _lodash.merge)(getTheme(themeColor, themeVariant), customTheme);
}; // Returns axis theme


exports.getCustomTheme = getCustomTheme;

var getAxisTheme = function getAxisTheme(themeColor, themeVariant) {
  var theme = getCustomTheme(themeColor, themeVariant, _ChartTheme.ChartAxisTheme);
  return theme;
}; // Returns bullet chart theme


exports.getAxisTheme = getAxisTheme;

var getBulletTheme = function getBulletTheme(themeColor, themeVariant) {
  return getCustomTheme(themeColor, themeVariant, _ChartTheme.ChartBulletTheme);
}; // Returns comparative error measure theme for bullet chart


exports.getBulletTheme = getBulletTheme;

var getBulletComparativeErrorMeasureTheme = function getBulletComparativeErrorMeasureTheme(themeColor, themeVariant) {
  return getCustomTheme(themeColor, themeVariant, _ChartTheme.ChartBulletComparativeErrorMeasureTheme);
}; // Returns comparative measure theme for bullet chart


exports.getBulletComparativeErrorMeasureTheme = getBulletComparativeErrorMeasureTheme;

var getBulletComparativeMeasureTheme = function getBulletComparativeMeasureTheme(themeColor, themeVariant) {
  return getCustomTheme(themeColor, themeVariant, _ChartTheme.ChartBulletComparativeMeasureTheme);
}; // Returns comparative warning measure theme for bullet chart


exports.getBulletComparativeMeasureTheme = getBulletComparativeMeasureTheme;

var getBulletComparativeWarningMeasureTheme = function getBulletComparativeWarningMeasureTheme(themeColor, themeVariant) {
  return getCustomTheme(themeColor, themeVariant, _ChartTheme.ChartBulletComparativeWarningMeasureTheme);
}; // Returns group title theme for bullet chart


exports.getBulletComparativeWarningMeasureTheme = getBulletComparativeWarningMeasureTheme;

var getBulletGroupTitleTheme = function getBulletGroupTitleTheme(themeColor, themeVariant) {
  return getCustomTheme(themeColor, themeVariant, _ChartTheme.ChartBulletGroupTitleTheme);
}; // Returns primary dot measure theme for bullet chart


exports.getBulletGroupTitleTheme = getBulletGroupTitleTheme;

var getBulletPrimaryDotMeasureTheme = function getBulletPrimaryDotMeasureTheme(themeColor, themeVariant) {
  return getCustomTheme(themeColor, themeVariant, _ChartTheme.ChartBulletPrimaryDotMeasureTheme);
}; // Returns primary negative measure theme for bullet chart


exports.getBulletPrimaryDotMeasureTheme = getBulletPrimaryDotMeasureTheme;

var getBulletPrimaryNegativeMeasureTheme = function getBulletPrimaryNegativeMeasureTheme(themeColor, themeVariant) {
  return getCustomTheme(themeColor, themeVariant, _ChartTheme.ChartBulletPrimaryNegativeMeasureTheme);
}; // Returns primary segmented measure theme for bullet chart


exports.getBulletPrimaryNegativeMeasureTheme = getBulletPrimaryNegativeMeasureTheme;

var getBulletPrimarySegmentedMeasureTheme = function getBulletPrimarySegmentedMeasureTheme(themeColor, themeVariant) {
  return getCustomTheme(themeColor, themeVariant, _ChartTheme.ChartBulletPrimarySegmentedMeasureTheme);
}; // Returns qualitative range theme for bullet chart


exports.getBulletPrimarySegmentedMeasureTheme = getBulletPrimarySegmentedMeasureTheme;

var getBulletQualitativeRangeTheme = function getBulletQualitativeRangeTheme(themeColor, themeVariant) {
  return getCustomTheme(themeColor, themeVariant, _ChartTheme.ChartBulletQualitativeRangeTheme);
}; // Returns donut theme


exports.getBulletQualitativeRangeTheme = getBulletQualitativeRangeTheme;

var getDonutTheme = function getDonutTheme(themeColor, themeVariant) {
  return getCustomTheme(themeColor, themeVariant, _ChartTheme.ChartDonutTheme);
}; // Returns dynamic donut threshold theme


exports.getDonutTheme = getDonutTheme;

var getDonutThresholdDynamicTheme = function getDonutThresholdDynamicTheme(themeColor, themeVariant) {
  var theme = getCustomTheme(themeColor, themeVariant, _ChartTheme.ChartDonutThresholdDynamicTheme); // Merge just the first color of dynamic (blue, green, etc.) with static (grey) for expected colorScale

  theme.legend.colorScale = [theme.pie.colorScale[0]].concat(_toConsumableArray(_ChartTheme.ChartDonutThresholdDynamicTheme.legend.colorScale)); // Merge the threshold colors in case users want to show the unused data

  theme.pie.colorScale = [theme.pie.colorScale[0]].concat(_toConsumableArray(_ChartTheme.ChartDonutThresholdStaticTheme.pie.colorScale));
  return theme;
}; // Returns static donut threshold theme


exports.getDonutThresholdDynamicTheme = getDonutThresholdDynamicTheme;

var getDonutThresholdStaticTheme = function getDonutThresholdStaticTheme(themeColor, themeVariant, invert) {
  var staticTheme = (0, _lodash.cloneDeep)(_ChartTheme.ChartDonutThresholdStaticTheme);

  if (invert) {
    staticTheme.pie.colorScale = staticTheme.pie.colorScale.reverse();
  }

  return getCustomTheme(themeColor, themeVariant, staticTheme);
}; // Returns donut utilization theme


exports.getDonutThresholdStaticTheme = getDonutThresholdStaticTheme;

var getDonutUtilizationTheme = function getDonutUtilizationTheme(themeColor, themeVariant) {
  var theme = getCustomTheme(themeColor, themeVariant, _ChartTheme.ChartDonutUtilizationDynamicTheme); // Merge just the first color of dynamic (blue, green, etc.) with static (grey) for expected colorScale

  theme.pie.colorScale = [theme.pie.colorScale[0]].concat(_toConsumableArray(_ChartTheme.ChartDonutUtilizationStaticTheme.pie.colorScale));
  theme.legend.colorScale = [theme.legend.colorScale[0]].concat(_toConsumableArray(_ChartTheme.ChartDonutUtilizationStaticTheme.legend.colorScale));
  return theme;
}; // Returns dark theme colors


exports.getDonutUtilizationTheme = getDonutUtilizationTheme;

var getDarkThemeColors = function getDarkThemeColors(themeColor) {
  switch (themeColor) {
    case _ChartTheme.ChartThemeColor.blue:
      return _blueColorTheme.DarkBlueColorTheme;

    case _ChartTheme.ChartThemeColor.cyan:
      return _cyanColorTheme.DarkCyanColorTheme;

    case _ChartTheme.ChartThemeColor.gold:
      return _goldColorTheme.DarkGoldColorTheme;

    case _ChartTheme.ChartThemeColor.gray:
      return _grayColorTheme.DarkGrayColorTheme;

    case _ChartTheme.ChartThemeColor.green:
      return _greenColorTheme.DarkGreenColorTheme;

    case _ChartTheme.ChartThemeColor.multi:
    case _ChartTheme.ChartThemeColor.multiOrdered:
      return _multiColorOrderedTheme.DarkMultiColorOrderedTheme;

    case _ChartTheme.ChartThemeColor.multiUnordered:
      return _multiColorUnorderedTheme.DarkMultiColorUnorderedTheme;

    case _ChartTheme.ChartThemeColor.orange:
      return _orangeColorTheme.DarkOrangeColorTheme;

    case _ChartTheme.ChartThemeColor.purple:
      return _purpleColorTheme.DarkPurpleColorTheme;

    default:
      return _blueColorTheme.DarkBlueColorTheme;
  }
}; // Returns light theme colors


exports.getDarkThemeColors = getDarkThemeColors;

var getLightThemeColors = function getLightThemeColors(themeColor) {
  switch (themeColor) {
    case _ChartTheme.ChartThemeColor.blue:
      return _blueColorTheme2.LightBlueColorTheme;

    case _ChartTheme.ChartThemeColor.cyan:
      return _cyanColorTheme2.LightCyanColorTheme;

    case _ChartTheme.ChartThemeColor.gold:
      return _goldColorTheme2.LightGoldColorTheme;

    case _ChartTheme.ChartThemeColor.gray:
      return _grayColorTheme2.LightGrayColorTheme;

    case _ChartTheme.ChartThemeColor.green:
      return _greenColorTheme2.LightGreenColorTheme;

    case _ChartTheme.ChartThemeColor.multi:
    case _ChartTheme.ChartThemeColor.multiOrdered:
      return _multiColorOrderedTheme2.LightMultiColorOrderedTheme;

    case _ChartTheme.ChartThemeColor.multiUnordered:
      return _multiColorUnorderedTheme2.LightMultiColorUnorderedTheme;

    case _ChartTheme.ChartThemeColor.orange:
      return _orangeColorTheme2.LightOrangeColorTheme;

    case _ChartTheme.ChartThemeColor.purple:
      return _purpleColorTheme2.LightPurpleColorTheme;

    default:
      return _blueColorTheme2.LightBlueColorTheme;
  }
}; // Applies theme color and variant to base theme


exports.getLightThemeColors = getLightThemeColors;

var getTheme = function getTheme(themeColor, themeVariant) {
  // Deep clone
  var baseTheme = _objectSpread({}, JSON.parse(JSON.stringify(_ChartTheme.ChartBaseTheme)));

  switch (themeVariant) {
    case _ChartTheme.ChartThemeVariant.dark:
      return (0, _lodash.merge)(baseTheme, getDarkThemeColors(themeColor));

    case _ChartTheme.ChartThemeVariant.light:
      return (0, _lodash.merge)(baseTheme, getLightThemeColors(themeColor));

    default:
      return (0, _lodash.merge)(baseTheme, getLightThemeColors(themeColor));
  }
}; // Returns threshold theme


exports.getTheme = getTheme;

var getThresholdTheme = function getThresholdTheme(themeColor, themeVariant) {
  return getCustomTheme(themeColor, themeVariant, _ChartTheme.ChartThresholdTheme);
};

exports.getThresholdTheme = getThresholdTheme;
//# sourceMappingURL=chart-theme.js.map