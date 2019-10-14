"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLabelTextSize = exports.overpassFontCharacterConstant = exports.getPieLabelY = exports.getPieLabelX = exports.getBulletLabelY = exports.getBulletLabelX = void 0;

var _victoryCore = require("victory-core");

var _chartOrigin = require("./chart-origin");

var _ChartTheme = require("../ChartTheme");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Returns x coordinate for bullet labels
var getBulletLabelX = function getBulletLabelX(_ref) {
  var chartWidth = _ref.chartWidth,
      _ref$dx = _ref.dx,
      dx = _ref$dx === void 0 ? 0 : _ref$dx,
      labelPosition = _ref.labelPosition;
  return labelPosition === 'top' && chartWidth ? Math.round(chartWidth / 2) : dx;
}; // Returns y coordinate for bullet labels


exports.getBulletLabelX = getBulletLabelX;

var getBulletLabelY = function getBulletLabelY(_ref2) {
  var chartHeight = _ref2.chartHeight,
      _ref2$dy = _ref2.dy,
      dy = _ref2$dy === void 0 ? 0 : _ref2$dy,
      labelPosition = _ref2.labelPosition;

  switch (labelPosition) {
    case 'bottom':
      return chartHeight + _ChartTheme.ChartCommonStyles.label.margin + dy;

    case 'left':
      return chartHeight ? Math.round(chartHeight / 2) + dy : dy;

    default:
      return dy;
  }
}; // Returns x coordinate for pie labels


exports.getBulletLabelY = getBulletLabelY;

var getPieLabelX = function getPieLabelX(_ref3) {
  var _ref3$dx = _ref3.dx,
      dx = _ref3$dx === void 0 ? 0 : _ref3$dx,
      height = _ref3.height,
      labelPosition = _ref3.labelPosition,
      legendPosition = _ref3.legendPosition,
      padding = _ref3.padding,
      width = _ref3.width;
  var origin = (0, _chartOrigin.getPieOrigin)({
    height: height,
    padding: padding,
    width: width
  });

  var radius = _victoryCore.Helpers.getRadius({
    height: height,
    width: width,
    padding: padding
  });

  switch (labelPosition) {
    case 'bottom':
    case 'center':
      return origin.x + dx;

    case 'right':
      switch (legendPosition) {
        case 'bottom':
          return origin.x + _ChartTheme.ChartCommonStyles.label.margin + dx + radius;

        case 'right':
          return origin.x + _ChartTheme.ChartCommonStyles.label.margin + dx;

        default:
          return dx;
      }

    default:
      return dx;
  }
}; // Returns x coordinate for pie labels


exports.getPieLabelX = getPieLabelX;

var getPieLabelY = function getPieLabelY(_ref4) {
  var _ref4$dy = _ref4.dy,
      dy = _ref4$dy === void 0 ? 0 : _ref4$dy,
      height = _ref4.height,
      labelPosition = _ref4.labelPosition,
      padding = _ref4.padding,
      width = _ref4.width;
  var origin = (0, _chartOrigin.getPieOrigin)({
    height: height,
    padding: padding,
    width: width
  });

  var radius = _victoryCore.Helpers.getRadius({
    height: height,
    width: width,
    padding: padding
  });

  switch (labelPosition) {
    case 'center':
    case 'right':
      return origin.y + dy;

    case 'bottom':
      return origin.y + radius + _ChartTheme.ChartCommonStyles.label.margin * 2 + dy;

    default:
      return dy;
  }
}; // Average pixels per glyph for overpass / Red Hat fonts


exports.getPieLabelY = getPieLabelY;
var overpassFontCharacterConstant = 2.5875; // Returns an approximate size for the give text

exports.overpassFontCharacterConstant = overpassFontCharacterConstant;

var getLabelTextSize = function getLabelTextSize(_ref5) {
  var text = _ref5.text,
      theme = _ref5.theme;
  var style = theme.legend.style.labels;
  return _victoryCore.TextSize.approximateTextSize(text, _objectSpread({}, style, {
    characterConstant: overpassFontCharacterConstant
  }));
};

exports.getLabelTextSize = getLabelTextSize;
//# sourceMappingURL=chart-label.js.map