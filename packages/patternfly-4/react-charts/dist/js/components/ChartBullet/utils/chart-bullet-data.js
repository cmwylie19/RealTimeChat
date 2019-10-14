"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQualitativeRangeData = exports.getPrimarySegmentedMeasureData = exports.getPrimaryDotMeasureData = exports.getComparativeWarningMeasureData = exports.getComparativeMeasureData = exports.getComparativeErrorMeasureData = void 0;

var _victoryCore = require("victory-core");

var _ChartUtils = require("../../ChartUtils");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getComparativeErrorMeasureData = function getComparativeErrorMeasureData(_ref) {
  var data = _ref.data,
      themeColor = _ref.themeColor,
      themeVariant = _ref.themeVariant,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? (0, _ChartUtils.getBulletComparativeErrorMeasureTheme)(themeColor, themeVariant) : _ref$theme,
      y = _ref.y;
  return getComparativeMeasureData({
    data: data,
    theme: theme,
    themeColor: themeColor,
    themeVariant: themeVariant,
    y: y
  });
};

exports.getComparativeErrorMeasureData = getComparativeErrorMeasureData;

var getComparativeMeasureData = function getComparativeMeasureData(_ref2) {
  var data = _ref2.data,
      themeColor = _ref2.themeColor,
      themeVariant = _ref2.themeVariant,
      _ref2$theme = _ref2.theme,
      theme = _ref2$theme === void 0 ? (0, _ChartUtils.getBulletComparativeMeasureTheme)(themeColor, themeVariant) : _ref2$theme,
      y = _ref2.y;
  var datum = [];

  _victoryCore.Data.formatData(data, {
    y: y
  }, ['y']).forEach(function (dataPoint, index) {
    datum.push(_objectSpread({}, dataPoint, {
      _index: index // Save to sync legend color

    }));
  });

  var computedData = datum.map(function (dataPoint, index) {
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

exports.getComparativeMeasureData = getComparativeMeasureData;

var getComparativeWarningMeasureData = function getComparativeWarningMeasureData(_ref3) {
  var data = _ref3.data,
      themeColor = _ref3.themeColor,
      themeVariant = _ref3.themeVariant,
      _ref3$theme = _ref3.theme,
      theme = _ref3$theme === void 0 ? (0, _ChartUtils.getBulletComparativeWarningMeasureTheme)(themeColor, themeVariant) : _ref3$theme,
      y = _ref3.y;
  return getComparativeMeasureData({
    data: data,
    theme: theme,
    themeColor: themeColor,
    themeVariant: themeVariant,
    y: y
  });
};

exports.getComparativeWarningMeasureData = getComparativeWarningMeasureData;

var getPrimaryDotMeasureData = function getPrimaryDotMeasureData(_ref4) {
  var data = _ref4.data,
      invert = _ref4.invert,
      themeColor = _ref4.themeColor,
      themeVariant = _ref4.themeVariant,
      _ref4$theme = _ref4.theme,
      theme = _ref4$theme === void 0 ? (0, _ChartUtils.getBulletPrimaryDotMeasureTheme)(themeColor, themeVariant) : _ref4$theme,
      y = _ref4.y,
      y0 = _ref4.y0;
  return getComparativeMeasureData({
    data: data,
    invert: invert,
    theme: theme,
    themeColor: themeColor,
    themeVariant: themeVariant,
    y: y,
    y0: y0
  });
};

exports.getPrimaryDotMeasureData = getPrimaryDotMeasureData;

var getPrimarySegmentedMeasureData = function getPrimarySegmentedMeasureData(_ref5) {
  var data = _ref5.data,
      invert = _ref5.invert,
      themeColor = _ref5.themeColor,
      themeVariant = _ref5.themeVariant,
      _ref5$theme = _ref5.theme,
      theme = _ref5$theme === void 0 ? (0, _ChartUtils.getBulletPrimarySegmentedMeasureTheme)(themeColor, themeVariant) : _ref5$theme,
      _ref5$negativeMeasure = _ref5.negativeMeasureTheme,
      negativeMeasureTheme = _ref5$negativeMeasure === void 0 ? (0, _ChartUtils.getBulletPrimaryNegativeMeasureTheme)(themeColor, themeVariant) : _ref5$negativeMeasure,
      y = _ref5.y,
      y0 = _ref5.y0;
  var negativeDatum = [];
  var positiveDatum = [];

  _victoryCore.Data.formatData(data, {
    y: y,
    y0: y0
  }, ['y', 'y0']).forEach(function (dataPoint, index) {
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


  var negativeComputedData = negativeDatum.sort(function (a, b) {
    return b._y - a._y;
  }).map(function (dataPoint, index) {
    return _objectSpread({}, dataPoint, {
      x: 1,
      _x: 1,
      _color: invert ? theme.group.colorScale[index % theme.group.colorScale.length] : negativeMeasureTheme.group.colorScale[index % theme.group.colorScale.length]
    }); // Sort descending so largest bar is appears behind others
  }).reverse(); // Instead of relying on colorScale, colors must be added to each measure in ascending order

  var positiveComputedData = positiveDatum.sort(function (a, b) {
    return a._y - b._y;
  }).map(function (dataPoint, index) {
    return _objectSpread({}, dataPoint, {
      x: 1,
      _x: 1,
      _color: invert ? negativeMeasureTheme.group.colorScale[index % theme.group.colorScale.length] : theme.group.colorScale[index % theme.group.colorScale.length]
    }); // Sort descending so largest bar is appears behind others
  }).reverse();
  return [].concat(_toConsumableArray(negativeComputedData), _toConsumableArray(positiveComputedData));
};

exports.getPrimarySegmentedMeasureData = getPrimarySegmentedMeasureData;

var getQualitativeRangeData = function getQualitativeRangeData(_ref6) {
  var data = _ref6.data,
      invert = _ref6.invert,
      themeColor = _ref6.themeColor,
      themeVariant = _ref6.themeVariant,
      _ref6$theme = _ref6.theme,
      theme = _ref6$theme === void 0 ? (0, _ChartUtils.getBulletQualitativeRangeTheme)(themeColor, themeVariant) : _ref6$theme,
      y = _ref6.y,
      y0 = _ref6.y0;
  var datum = [];

  _victoryCore.Data.formatData(data, {
    y: y,
    y0: y0
  }, ['y', 'y0']).forEach(function (dataPoint, index) {
    datum.push(_objectSpread({}, dataPoint, {
      _index: index // Save to sync legend color

    }));
  });

  var computedData = datum.sort(function (a, b) {
    return invert ? b._y - a._y : a._y - b._y;
  }).map(function (dataPoint, index) {
    return _objectSpread({}, dataPoint, {
      x: 1,
      _x: 1,
      // Instead of relying on colorScale, colors must be added to each measure in ascending order
      _color: theme.group.colorScale[index % theme.group.colorScale.length]
    }); // Sort descending so largest bar is appears behind others
  }).reverse();
  return computedData;
};

exports.getQualitativeRangeData = getQualitativeRangeData;
//# sourceMappingURL=chart-bullet-data.js.map