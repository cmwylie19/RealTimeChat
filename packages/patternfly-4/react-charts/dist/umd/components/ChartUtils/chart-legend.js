(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "victory", "victory-core", "../ChartTheme", "./chart-label", "./chart-origin"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("victory"), require("victory-core"), require("../ChartTheme"), require("./chart-label"), require("./chart-origin"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.victory, global.victoryCore, global.ChartTheme, global.chartLabel, global.chartOrigin);
    global.undefined = mod.exports;
  }
})(this, function (exports, _victory, _victoryCore, _ChartTheme, _chartLabel, _chartOrigin) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getPieLegendY = exports.getPieLegendX = exports.getChartLegendY = exports.getChartLegendX = exports.getBulletLegendY = exports.getLegendY = exports.getLegendX = exports.getLegendDimensions = undefined;

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

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

  // Returns legend dimensions
  const getLegendDimensions = exports.getLegendDimensions = ({
    legendData,
    legendOrientation,
    legendProps,
    theme
  }) => {
    if (legendData || legendProps.data) {
      return _victory.VictoryLegend.getDimensions(_objectSpread({
        data: legendData,
        orientation: legendOrientation,
        theme
      }, legendProps));
    }

    return {};
  }; // Returns x coordinate for legend


  const getLegendX = exports.getLegendX = _ref => {
    let {
      chartType
    } = _ref,
        rest = _objectWithoutProperties(_ref, ["chartType"]);

    return chartType === 'pie' ? getPieLegendX(rest) : getChartLegendX(rest);
  }; // Returns y coordinate for legend


  const getLegendY = exports.getLegendY = _ref2 => {
    let {
      chartType
    } = _ref2,
        rest = _objectWithoutProperties(_ref2, ["chartType"]);

    switch (chartType) {
      case 'pie':
        return getPieLegendY(rest);

      case 'bullet':
        return getBulletLegendY(rest);

      default:
        return getChartLegendY(rest);
    }
  }; // Returns y coordinate for bullet legends


  const getBulletLegendY = exports.getBulletLegendY = ({
    dy = 0,
    height,
    legendPosition,
    legendData,
    legendOrientation,
    legendProps,
    padding,
    theme,
    width
  }) => {
    const {
      left,
      right
    } = _victoryCore.Helpers.getPadding({
      padding
    });

    const chartSize = {
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
          const legendDimensions = getLegendDimensions({
            legendData,
            legendOrientation,
            legendProps,
            theme
          });

          const legendPadding = legendData => legendData && legendData.length > 0 ? 17 : 0;

          return (chartSize.height - legendDimensions.height) / 2 + legendPadding(legendData);
        }

      default:
        return dy;
    }
  }; // Returns x coordinate for chart legends


  const getChartLegendX = exports.getChartLegendX = ({
    dx = 0,
    height,
    legendData,
    legendOrientation,
    legendPosition,
    legendProps,
    padding,
    theme,
    width
  }) => {
    const {
      top,
      bottom,
      left,
      right
    } = _victoryCore.Helpers.getPadding({
      padding
    });

    const chartSize = {
      height: Math.abs(height - (bottom + top)),
      width: Math.abs(width - (left + right))
    };
    const legendDimensions = getLegendDimensions({
      legendData,
      legendOrientation,
      legendProps,
      theme
    });
    const textSizeWorkAround = getTextSizeWorkAround({
      legendData,
      legendOrientation,
      theme
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


  const getChartLegendY = exports.getChartLegendY = ({
    dy = 0,
    height,
    legendPosition,
    legendData,
    legendOrientation,
    legendProps,
    padding,
    theme,
    width
  }) => {
    const {
      top,
      bottom,
      left,
      right
    } = _victoryCore.Helpers.getPadding({
      padding
    });

    const chartSize = {
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
          const legendDimensions = getLegendDimensions({
            legendData,
            legendOrientation,
            legendProps,
            theme
          });
          const originX = chartSize.height / 2 + top;

          const legendPadding = legendData => legendData && legendData.length > 0 ? 2 : 0;

          return originX - legendDimensions.height / 2 + legendPadding(legendData);
        }

      default:
        return dy;
    }
  }; // Returns x coordinate for pie legends


  const getPieLegendX = exports.getPieLegendX = ({
    dx = 0,
    height,
    legendData,
    legendOrientation,
    legendPosition,
    legendProps,
    padding,
    theme,
    width
  }) => {
    const origin = (0, _chartOrigin.getPieOrigin)({
      height,
      padding,
      width
    });

    const radius = _victoryCore.Helpers.getRadius({
      height,
      width,
      padding
    });

    const legendDimensions = getLegendDimensions({
      legendData,
      legendOrientation,
      legendProps,
      theme
    });
    const textSizeWorkAround = getTextSizeWorkAround({
      legendData,
      legendOrientation,
      theme
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


  const getPieLegendY = exports.getPieLegendY = ({
    dy = 0,
    height,
    legendPosition,
    legendData,
    legendOrientation,
    legendProps,
    padding,
    theme,
    width
  }) => {
    const origin = (0, _chartOrigin.getPieOrigin)({
      height,
      padding,
      width
    });

    const radius = _victoryCore.Helpers.getRadius({
      height,
      width,
      padding
    });

    switch (legendPosition) {
      case 'bottom':
        return origin.y + _ChartTheme.ChartCommonStyles.legend.margin + radius + dy;

      case 'right':
        {
          // Legend height with padding
          const legendDimensions = getLegendDimensions({
            legendData,
            legendOrientation,
            legendProps,
            theme
          });

          const legendPadding = legendData => legendData && legendData.length > 0 ? 2 : 0;

          return origin.y - legendDimensions.height / 2 + legendPadding(legendData);
        }

      default:
        return dy;
    }
  }; // Returns an approximation of over-sized text width due to growing character count
  //
  // See https://github.com/FormidableLabs/victory/issues/864


  const getTextSizeWorkAround = ({
    legendData,
    legendOrientation,
    theme
  }) => {
    const style = theme.legend.style.labels;

    if (!(legendData && legendData.length)) {
      return 0;
    } // For horizontal legends, account for the growing char count of the last legend item


    let result = legendData[legendData.length - 1].name; // For vertical legends, account for the growing char count of the longest legend item

    if (legendOrientation === 'vertical') {
      legendData.forEach(data => {
        if (data.name && data.name.length > result.length) {
          result = data.name;
        }
      });
    }

    const textSize = _victoryCore.TextSize.approximateTextSize(result, style);

    const adjustedTextSize = _victoryCore.TextSize.approximateTextSize(result, _objectSpread({}, style, {
      characterConstant: _chartLabel.overpassFontCharacterConstant
    }));

    return Math.abs(textSize.width - adjustedTextSize.width);
  };
});
//# sourceMappingURL=chart-legend.js.map