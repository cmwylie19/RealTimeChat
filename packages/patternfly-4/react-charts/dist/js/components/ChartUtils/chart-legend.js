"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPieLegendY = exports.getPieLegendX = exports.getChartLegendY = exports.getChartLegendX = exports.getBulletLegendY = exports.getLegendY = exports.getLegendX = exports.getLegendDimensions = void 0;

var _victory = require("victory");

var _victoryCore = require("victory-core");

var _ChartTheme = require("../ChartTheme");

var _chartLabel = require("./chart-label");

var _chartOrigin = require("./chart-origin");

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Returns legend dimensions
var getLegendDimensions = function getLegendDimensions(_ref) {
  var legendData = _ref.legendData,
      legendOrientation = _ref.legendOrientation,
      legendProps = _ref.legendProps,
      theme = _ref.theme;

  if (legendData || legendProps.data) {
    return _victory.VictoryLegend.getDimensions(_objectSpread({
      data: legendData,
      orientation: legendOrientation,
      theme: theme
    }, legendProps));
  }

  return {};
}; // Returns x coordinate for legend


exports.getLegendDimensions = getLegendDimensions;

var getLegendX = function getLegendX(_ref2) {
  var chartType = _ref2.chartType,
      rest = _objectWithoutProperties(_ref2, ["chartType"]);

  return chartType === 'pie' ? getPieLegendX(rest) : getChartLegendX(rest);
}; // Returns y coordinate for legend


exports.getLegendX = getLegendX;

var getLegendY = function getLegendY(_ref3) {
  var chartType = _ref3.chartType,
      rest = _objectWithoutProperties(_ref3, ["chartType"]);

  switch (chartType) {
    case 'pie':
      return getPieLegendY(rest);

    case 'bullet':
      return getBulletLegendY(rest);

    default:
      return getChartLegendY(rest);
  }
}; // Returns y coordinate for bullet legends


exports.getLegendY = getLegendY;

var getBulletLegendY = function getBulletLegendY(_ref4) {
  var _ref4$dy = _ref4.dy,
      dy = _ref4$dy === void 0 ? 0 : _ref4$dy,
      height = _ref4.height,
      legendPosition = _ref4.legendPosition,
      legendData = _ref4.legendData,
      legendOrientation = _ref4.legendOrientation,
      legendProps = _ref4.legendProps,
      padding = _ref4.padding,
      theme = _ref4.theme,
      width = _ref4.width;

  var _Helpers$getPadding = _victoryCore.Helpers.getPadding({
    padding: padding
  }),
      left = _Helpers$getPadding.left,
      right = _Helpers$getPadding.right;

  var chartSize = {
    height: height,
    // Fixed size
    width: width - left - right
  };

  switch (legendPosition) {
    case 'bottom':
    case 'bottom-left':
      return chartSize.height + _ChartTheme.ChartCommonStyles.legend.margin + dy;

    case 'right':
      {
        // Legend height with padding
        var legendDimensions = getLegendDimensions({
          legendData: legendData,
          legendOrientation: legendOrientation,
          legendProps: legendProps,
          theme: theme
        });

        var legendPadding = function legendPadding(legendData) {
          return legendData && legendData.length > 0 ? 17 : 0;
        };

        return (chartSize.height - legendDimensions.height) / 2 + legendPadding(legendData);
      }

    default:
      return dy;
  }
}; // Returns x coordinate for chart legends


exports.getBulletLegendY = getBulletLegendY;

var getChartLegendX = function getChartLegendX(_ref5) {
  var _ref5$dx = _ref5.dx,
      dx = _ref5$dx === void 0 ? 0 : _ref5$dx,
      height = _ref5.height,
      legendData = _ref5.legendData,
      legendOrientation = _ref5.legendOrientation,
      legendPosition = _ref5.legendPosition,
      legendProps = _ref5.legendProps,
      padding = _ref5.padding,
      theme = _ref5.theme,
      width = _ref5.width;

  var _Helpers$getPadding2 = _victoryCore.Helpers.getPadding({
    padding: padding
  }),
      top = _Helpers$getPadding2.top,
      bottom = _Helpers$getPadding2.bottom,
      left = _Helpers$getPadding2.left,
      right = _Helpers$getPadding2.right;

  var chartSize = {
    height: Math.abs(height - (bottom + top)),
    width: Math.abs(width - (left + right))
  };
  var legendDimensions = getLegendDimensions({
    legendData: legendData,
    legendOrientation: legendOrientation,
    legendProps: legendProps,
    theme: theme
  });
  var textSizeWorkAround = getTextSizeWorkAround({
    legendData: legendData,
    legendOrientation: legendOrientation,
    theme: theme
  });

  switch (legendPosition) {
    case 'bottom':
      return width > legendDimensions.width - textSizeWorkAround ? Math.round((width - (legendDimensions.width - textSizeWorkAround)) / 2) + dx : dx;

    case 'bottom-left':
      return left + dx;

    case 'right':
      return chartSize.width + _ChartTheme.ChartCommonStyles.legend.margin + left + dx;

    default:
      return dx;
  }
}; // Returns y coordinate for chart legends


exports.getChartLegendX = getChartLegendX;

var getChartLegendY = function getChartLegendY(_ref6) {
  var _ref6$dy = _ref6.dy,
      dy = _ref6$dy === void 0 ? 0 : _ref6$dy,
      height = _ref6.height,
      legendPosition = _ref6.legendPosition,
      legendData = _ref6.legendData,
      legendOrientation = _ref6.legendOrientation,
      legendProps = _ref6.legendProps,
      padding = _ref6.padding,
      theme = _ref6.theme,
      width = _ref6.width;

  var _Helpers$getPadding3 = _victoryCore.Helpers.getPadding({
    padding: padding
  }),
      top = _Helpers$getPadding3.top,
      bottom = _Helpers$getPadding3.bottom,
      left = _Helpers$getPadding3.left,
      right = _Helpers$getPadding3.right;

  var chartSize = {
    height: Math.abs(height - (bottom + top)),
    width: Math.abs(width - (left + right))
  };

  switch (legendPosition) {
    case 'bottom':
    case 'bottom-left':
      return chartSize.height + _ChartTheme.ChartCommonStyles.legend.margin * 2 + top + dy;

    case 'right':
      {
        // Legend height with padding
        var legendDimensions = getLegendDimensions({
          legendData: legendData,
          legendOrientation: legendOrientation,
          legendProps: legendProps,
          theme: theme
        });
        var originX = chartSize.height / 2 + top;

        var legendPadding = function legendPadding(legendData) {
          return legendData && legendData.length > 0 ? 2 : 0;
        };

        return originX - legendDimensions.height / 2 + legendPadding(legendData);
      }

    default:
      return dy;
  }
}; // Returns x coordinate for pie legends


exports.getChartLegendY = getChartLegendY;

var getPieLegendX = function getPieLegendX(_ref7) {
  var _ref7$dx = _ref7.dx,
      dx = _ref7$dx === void 0 ? 0 : _ref7$dx,
      height = _ref7.height,
      legendData = _ref7.legendData,
      legendOrientation = _ref7.legendOrientation,
      legendPosition = _ref7.legendPosition,
      legendProps = _ref7.legendProps,
      padding = _ref7.padding,
      theme = _ref7.theme,
      width = _ref7.width;
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

  var legendDimensions = getLegendDimensions({
    legendData: legendData,
    legendOrientation: legendOrientation,
    legendProps: legendProps,
    theme: theme
  });
  var textSizeWorkAround = getTextSizeWorkAround({
    legendData: legendData,
    legendOrientation: legendOrientation,
    theme: theme
  });

  switch (legendPosition) {
    case 'bottom':
      return width > legendDimensions.width - textSizeWorkAround ? Math.round((width - (legendDimensions.width - textSizeWorkAround)) / 2) + dx : dx;

    case 'right':
      return origin.x + _ChartTheme.ChartCommonStyles.label.margin + dx + radius;

    default:
      return dx;
  }
}; // Returns y coordinate for pie legends


exports.getPieLegendX = getPieLegendX;

var getPieLegendY = function getPieLegendY(_ref8) {
  var _ref8$dy = _ref8.dy,
      dy = _ref8$dy === void 0 ? 0 : _ref8$dy,
      height = _ref8.height,
      legendPosition = _ref8.legendPosition,
      legendData = _ref8.legendData,
      legendOrientation = _ref8.legendOrientation,
      legendProps = _ref8.legendProps,
      padding = _ref8.padding,
      theme = _ref8.theme,
      width = _ref8.width;
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

  switch (legendPosition) {
    case 'bottom':
      return origin.y + _ChartTheme.ChartCommonStyles.legend.margin + radius + dy;

    case 'right':
      {
        // Legend height with padding
        var legendDimensions = getLegendDimensions({
          legendData: legendData,
          legendOrientation: legendOrientation,
          legendProps: legendProps,
          theme: theme
        });

        var legendPadding = function legendPadding(legendData) {
          return legendData && legendData.length > 0 ? 2 : 0;
        };

        return origin.y - legendDimensions.height / 2 + legendPadding(legendData);
      }

    default:
      return dy;
  }
}; // Returns an approximation of over-sized text width due to growing character count
//
// See https://github.com/FormidableLabs/victory/issues/864


exports.getPieLegendY = getPieLegendY;

var getTextSizeWorkAround = function getTextSizeWorkAround(_ref9) {
  var legendData = _ref9.legendData,
      legendOrientation = _ref9.legendOrientation,
      theme = _ref9.theme;
  var style = theme.legend.style.labels;

  if (!(legendData && legendData.length)) {
    return 0;
  } // For horizontal legends, account for the growing char count of the last legend item


  var result = legendData[legendData.length - 1].name; // For vertical legends, account for the growing char count of the longest legend item

  if (legendOrientation === 'vertical') {
    legendData.forEach(function (data) {
      if (data.name && data.name.length > result.length) {
        result = data.name;
      }
    });
  }

  var textSize = _victoryCore.TextSize.approximateTextSize(result, style);

  var adjustedTextSize = _victoryCore.TextSize.approximateTextSize(result, _objectSpread({}, style, {
    characterConstant: _chartLabel.overpassFontCharacterConstant
  }));

  return Math.abs(textSize.width - adjustedTextSize.width);
};
//# sourceMappingURL=chart-legend.js.map