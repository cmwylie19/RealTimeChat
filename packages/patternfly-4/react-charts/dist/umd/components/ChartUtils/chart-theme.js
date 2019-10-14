(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "lodash", "../ChartTheme/themes/dark/blue-color-theme", "../ChartTheme/themes/dark/cyan-color-theme", "../ChartTheme/themes/dark/gold-color-theme", "../ChartTheme/themes/dark/gray-color-theme", "../ChartTheme/themes/dark/green-color-theme", "../ChartTheme/themes/dark/multi-color-ordered-theme", "../ChartTheme/themes/dark/multi-color-unordered-theme", "../ChartTheme/themes/dark/orange-color-theme", "../ChartTheme/themes/dark/purple-color-theme", "../ChartTheme/themes/light/blue-color-theme", "../ChartTheme/themes/light/cyan-color-theme", "../ChartTheme/themes/light/gold-color-theme", "../ChartTheme/themes/light/gray-color-theme", "../ChartTheme/themes/light/green-color-theme", "../ChartTheme/themes/light/multi-color-ordered-theme", "../ChartTheme/themes/light/multi-color-unordered-theme", "../ChartTheme/themes/light/orange-color-theme", "../ChartTheme/themes/light/purple-color-theme", "../ChartTheme/ChartTheme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("lodash"), require("../ChartTheme/themes/dark/blue-color-theme"), require("../ChartTheme/themes/dark/cyan-color-theme"), require("../ChartTheme/themes/dark/gold-color-theme"), require("../ChartTheme/themes/dark/gray-color-theme"), require("../ChartTheme/themes/dark/green-color-theme"), require("../ChartTheme/themes/dark/multi-color-ordered-theme"), require("../ChartTheme/themes/dark/multi-color-unordered-theme"), require("../ChartTheme/themes/dark/orange-color-theme"), require("../ChartTheme/themes/dark/purple-color-theme"), require("../ChartTheme/themes/light/blue-color-theme"), require("../ChartTheme/themes/light/cyan-color-theme"), require("../ChartTheme/themes/light/gold-color-theme"), require("../ChartTheme/themes/light/gray-color-theme"), require("../ChartTheme/themes/light/green-color-theme"), require("../ChartTheme/themes/light/multi-color-ordered-theme"), require("../ChartTheme/themes/light/multi-color-unordered-theme"), require("../ChartTheme/themes/light/orange-color-theme"), require("../ChartTheme/themes/light/purple-color-theme"), require("../ChartTheme/ChartTheme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.lodash, global.blueColorTheme, global.cyanColorTheme, global.goldColorTheme, global.grayColorTheme, global.greenColorTheme, global.multiColorOrderedTheme, global.multiColorUnorderedTheme, global.orangeColorTheme, global.purpleColorTheme, global.blueColorTheme, global.cyanColorTheme, global.goldColorTheme, global.grayColorTheme, global.greenColorTheme, global.multiColorOrderedTheme, global.multiColorUnorderedTheme, global.orangeColorTheme, global.purpleColorTheme, global.ChartTheme);
    global.undefined = mod.exports;
  }
})(this, function (exports, _lodash, _blueColorTheme, _cyanColorTheme, _goldColorTheme, _grayColorTheme, _greenColorTheme, _multiColorOrderedTheme, _multiColorUnorderedTheme, _orangeColorTheme, _purpleColorTheme, _blueColorTheme2, _cyanColorTheme2, _goldColorTheme2, _grayColorTheme2, _greenColorTheme2, _multiColorOrderedTheme2, _multiColorUnorderedTheme2, _orangeColorTheme2, _purpleColorTheme2, _ChartTheme) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getThresholdTheme = exports.getTheme = exports.getLightThemeColors = exports.getDarkThemeColors = exports.getDonutUtilizationTheme = exports.getDonutThresholdStaticTheme = exports.getDonutThresholdDynamicTheme = exports.getDonutTheme = exports.getBulletQualitativeRangeTheme = exports.getBulletPrimarySegmentedMeasureTheme = exports.getBulletPrimaryNegativeMeasureTheme = exports.getBulletPrimaryDotMeasureTheme = exports.getBulletGroupTitleTheme = exports.getBulletComparativeWarningMeasureTheme = exports.getBulletComparativeMeasureTheme = exports.getBulletComparativeErrorMeasureTheme = exports.getBulletTheme = exports.getAxisTheme = exports.getCustomTheme = undefined;

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(source, true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  // Apply custom properties to base and color themes
  const getCustomTheme = exports.getCustomTheme = (themeColor, themeVariant, customTheme) => (0, _lodash.merge)(getTheme(themeColor, themeVariant), customTheme); // Returns axis theme


  const getAxisTheme = exports.getAxisTheme = (themeColor, themeVariant) => {
    const theme = getCustomTheme(themeColor, themeVariant, _ChartTheme.ChartAxisTheme);
    return theme;
  }; // Returns bullet chart theme


  const getBulletTheme = exports.getBulletTheme = (themeColor, themeVariant) => getCustomTheme(themeColor, themeVariant, _ChartTheme.ChartBulletTheme); // Returns comparative error measure theme for bullet chart


  const getBulletComparativeErrorMeasureTheme = exports.getBulletComparativeErrorMeasureTheme = (themeColor, themeVariant) => getCustomTheme(themeColor, themeVariant, _ChartTheme.ChartBulletComparativeErrorMeasureTheme); // Returns comparative measure theme for bullet chart


  const getBulletComparativeMeasureTheme = exports.getBulletComparativeMeasureTheme = (themeColor, themeVariant) => getCustomTheme(themeColor, themeVariant, _ChartTheme.ChartBulletComparativeMeasureTheme); // Returns comparative warning measure theme for bullet chart


  const getBulletComparativeWarningMeasureTheme = exports.getBulletComparativeWarningMeasureTheme = (themeColor, themeVariant) => getCustomTheme(themeColor, themeVariant, _ChartTheme.ChartBulletComparativeWarningMeasureTheme); // Returns group title theme for bullet chart


  const getBulletGroupTitleTheme = exports.getBulletGroupTitleTheme = (themeColor, themeVariant) => getCustomTheme(themeColor, themeVariant, _ChartTheme.ChartBulletGroupTitleTheme); // Returns primary dot measure theme for bullet chart


  const getBulletPrimaryDotMeasureTheme = exports.getBulletPrimaryDotMeasureTheme = (themeColor, themeVariant) => getCustomTheme(themeColor, themeVariant, _ChartTheme.ChartBulletPrimaryDotMeasureTheme); // Returns primary negative measure theme for bullet chart


  const getBulletPrimaryNegativeMeasureTheme = exports.getBulletPrimaryNegativeMeasureTheme = (themeColor, themeVariant) => getCustomTheme(themeColor, themeVariant, _ChartTheme.ChartBulletPrimaryNegativeMeasureTheme); // Returns primary segmented measure theme for bullet chart


  const getBulletPrimarySegmentedMeasureTheme = exports.getBulletPrimarySegmentedMeasureTheme = (themeColor, themeVariant) => getCustomTheme(themeColor, themeVariant, _ChartTheme.ChartBulletPrimarySegmentedMeasureTheme); // Returns qualitative range theme for bullet chart


  const getBulletQualitativeRangeTheme = exports.getBulletQualitativeRangeTheme = (themeColor, themeVariant) => getCustomTheme(themeColor, themeVariant, _ChartTheme.ChartBulletQualitativeRangeTheme); // Returns donut theme


  const getDonutTheme = exports.getDonutTheme = (themeColor, themeVariant) => getCustomTheme(themeColor, themeVariant, _ChartTheme.ChartDonutTheme); // Returns dynamic donut threshold theme


  const getDonutThresholdDynamicTheme = exports.getDonutThresholdDynamicTheme = (themeColor, themeVariant) => {
    const theme = getCustomTheme(themeColor, themeVariant, _ChartTheme.ChartDonutThresholdDynamicTheme); // Merge just the first color of dynamic (blue, green, etc.) with static (grey) for expected colorScale

    theme.legend.colorScale = [theme.pie.colorScale[0], ..._ChartTheme.ChartDonutThresholdDynamicTheme.legend.colorScale]; // Merge the threshold colors in case users want to show the unused data

    theme.pie.colorScale = [theme.pie.colorScale[0], ..._ChartTheme.ChartDonutThresholdStaticTheme.pie.colorScale];
    return theme;
  }; // Returns static donut threshold theme


  const getDonutThresholdStaticTheme = exports.getDonutThresholdStaticTheme = (themeColor, themeVariant, invert) => {
    const staticTheme = (0, _lodash.cloneDeep)(_ChartTheme.ChartDonutThresholdStaticTheme);

    if (invert) {
      staticTheme.pie.colorScale = staticTheme.pie.colorScale.reverse();
    }

    return getCustomTheme(themeColor, themeVariant, staticTheme);
  }; // Returns donut utilization theme


  const getDonutUtilizationTheme = exports.getDonutUtilizationTheme = (themeColor, themeVariant) => {
    const theme = getCustomTheme(themeColor, themeVariant, _ChartTheme.ChartDonutUtilizationDynamicTheme); // Merge just the first color of dynamic (blue, green, etc.) with static (grey) for expected colorScale

    theme.pie.colorScale = [theme.pie.colorScale[0], ..._ChartTheme.ChartDonutUtilizationStaticTheme.pie.colorScale];
    theme.legend.colorScale = [theme.legend.colorScale[0], ..._ChartTheme.ChartDonutUtilizationStaticTheme.legend.colorScale];
    return theme;
  }; // Returns dark theme colors


  const getDarkThemeColors = exports.getDarkThemeColors = themeColor => {
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


  const getLightThemeColors = exports.getLightThemeColors = themeColor => {
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


  const getTheme = exports.getTheme = (themeColor, themeVariant) => {
    // Deep clone
    const baseTheme = _objectSpread({}, JSON.parse(JSON.stringify(_ChartTheme.ChartBaseTheme)));

    switch (themeVariant) {
      case _ChartTheme.ChartThemeVariant.dark:
        return (0, _lodash.merge)(baseTheme, getDarkThemeColors(themeColor));

      case _ChartTheme.ChartThemeVariant.light:
        return (0, _lodash.merge)(baseTheme, getLightThemeColors(themeColor));

      default:
        return (0, _lodash.merge)(baseTheme, getLightThemeColors(themeColor));
    }
  }; // Returns threshold theme


  const getThresholdTheme = exports.getThresholdTheme = (themeColor, themeVariant) => getCustomTheme(themeColor, themeVariant, _ChartTheme.ChartThresholdTheme);
});
//# sourceMappingURL=chart-theme.js.map