"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scaleSize = exports.scaleBarWidth = exports.getQualitativeRangeBarWidth = exports.getPrimarySegmentedMeasureWidth = exports.getPrimaryDotMeasureSize = exports.getComparativeMeasureWarningWidth = exports.getComparativeMeasureWidth = exports.getComparativeMeasureErrorWidth = void 0;

var _ChartTheme = require("../../ChartTheme");

var _ChartUtils = require("../../ChartUtils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getComparativeMeasureErrorWidth = function getComparativeMeasureErrorWidth(_ref) {
  var height = _ref.height,
      horizontal = _ref.horizontal,
      themeColor = _ref.themeColor,
      themeVariant = _ref.themeVariant,
      width = _ref.width,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? (0, _ChartUtils.getBulletComparativeErrorMeasureTheme)(themeColor, themeVariant) : _ref$theme;
  return scaleBarWidth({
    defaultSize: theme.bar.height,
    height: height,
    horizontal: horizontal,
    value: _ChartTheme.ChartBulletStyles.comparativeMeasureErrorWidth,
    width: width
  });
};

exports.getComparativeMeasureErrorWidth = getComparativeMeasureErrorWidth;

var getComparativeMeasureWidth = function getComparativeMeasureWidth(_ref2) {
  var height = _ref2.height,
      horizontal = _ref2.horizontal,
      themeColor = _ref2.themeColor,
      themeVariant = _ref2.themeVariant,
      width = _ref2.width,
      _ref2$theme = _ref2.theme,
      theme = _ref2$theme === void 0 ? (0, _ChartUtils.getBulletComparativeMeasureTheme)(themeColor, themeVariant) : _ref2$theme;
  return scaleBarWidth({
    defaultSize: theme.bar.height,
    height: height,
    horizontal: horizontal,
    value: _ChartTheme.ChartBulletStyles.comparativeMeasureWidth,
    width: width
  });
};

exports.getComparativeMeasureWidth = getComparativeMeasureWidth;

var getComparativeMeasureWarningWidth = function getComparativeMeasureWarningWidth(_ref3) {
  var height = _ref3.height,
      horizontal = _ref3.horizontal,
      themeColor = _ref3.themeColor,
      themeVariant = _ref3.themeVariant,
      width = _ref3.width,
      _ref3$theme = _ref3.theme,
      theme = _ref3$theme === void 0 ? (0, _ChartUtils.getBulletComparativeWarningMeasureTheme)(themeColor, themeVariant) : _ref3$theme;
  return scaleBarWidth({
    defaultSize: theme.bar.height,
    height: height,
    horizontal: horizontal,
    value: _ChartTheme.ChartBulletStyles.comparativeMeasureWarningWidth,
    width: width
  });
};

exports.getComparativeMeasureWarningWidth = getComparativeMeasureWarningWidth;

var getPrimaryDotMeasureSize = function getPrimaryDotMeasureSize(_ref4) {
  var height = _ref4.height,
      horizontal = _ref4.horizontal,
      themeColor = _ref4.themeColor,
      themeVariant = _ref4.themeVariant,
      width = _ref4.width,
      _ref4$theme = _ref4.theme,
      theme = _ref4$theme === void 0 ? (0, _ChartUtils.getBulletPrimaryDotMeasureTheme)(themeColor, themeVariant) : _ref4$theme;
  return scaleSize({
    defaultSize: theme.group.height,
    height: height,
    horizontal: horizontal,
    value: _ChartTheme.ChartBulletStyles.primaryDotMeasureSize,
    width: width
  });
};

exports.getPrimaryDotMeasureSize = getPrimaryDotMeasureSize;

var getPrimarySegmentedMeasureWidth = function getPrimarySegmentedMeasureWidth(_ref5) {
  var height = _ref5.height,
      horizontal = _ref5.horizontal,
      themeColor = _ref5.themeColor,
      themeVariant = _ref5.themeVariant,
      width = _ref5.width,
      _ref5$theme = _ref5.theme,
      theme = _ref5$theme === void 0 ? (0, _ChartUtils.getBulletPrimarySegmentedMeasureTheme)(themeColor, themeVariant) : _ref5$theme;
  return scaleBarWidth({
    defaultSize: theme.group.height,
    height: height,
    horizontal: horizontal,
    scale: .3,
    value: _ChartTheme.ChartBulletStyles.primarySegmentedMeasureWidth,
    width: width
  });
};

exports.getPrimarySegmentedMeasureWidth = getPrimarySegmentedMeasureWidth;

var getQualitativeRangeBarWidth = function getQualitativeRangeBarWidth(_ref6) {
  var height = _ref6.height,
      horizontal = _ref6.horizontal,
      themeColor = _ref6.themeColor,
      themeVariant = _ref6.themeVariant,
      width = _ref6.width,
      _ref6$theme = _ref6.theme,
      theme = _ref6$theme === void 0 ? (0, _ChartUtils.getBulletQualitativeRangeTheme)(themeColor, themeVariant) : _ref6$theme;
  return scaleBarWidth({
    defaultSize: theme.group.height,
    height: height,
    horizontal: horizontal,
    value: _ChartTheme.ChartBulletStyles.qualitativeRangeWidth,
    width: width
  });
};

exports.getQualitativeRangeBarWidth = getQualitativeRangeBarWidth;

var scale = function scale(_ref7) {
  var defaultSize = _ref7.defaultSize,
      height = _ref7.height,
      _ref7$horizontal = _ref7.horizontal,
      horizontal = _ref7$horizontal === void 0 ? true : _ref7$horizontal,
      _ref7$scale = _ref7.scale,
      scale = _ref7$scale === void 0 ? 1 : _ref7$scale,
      value = _ref7.value,
      width = _ref7.width;
  return horizontal ? height > defaultSize ? value + (height - defaultSize) * scale : value - (defaultSize - height) * scale : width > defaultSize ? value + (width - defaultSize) * scale : value - (defaultSize - width) * scale;
}; // Scale bar width per the given size properties


var scaleBarWidth = function scaleBarWidth(props) {
  return Math.max(scale(props), 0);
}; // Scale size per the given size properties


exports.scaleBarWidth = scaleBarWidth;

var scaleSize = function scaleSize(_ref8) {
  var value = _ref8.value,
      rest = _objectWithoutProperties(_ref8, ["value"]);

  return Math.round(scale(_objectSpread({
    scale: 1 / value,
    value: value
  }, rest)));
};

exports.scaleSize = scaleSize;
//# sourceMappingURL=chart-bullet-size.js.map