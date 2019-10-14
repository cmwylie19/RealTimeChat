(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "victory-core", "./chart-origin", "../ChartTheme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("victory-core"), require("./chart-origin"), require("../ChartTheme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.victoryCore, global.chartOrigin, global.ChartTheme);
    global.undefined = mod.exports;
  }
})(this, function (exports, _victoryCore, _chartOrigin, _ChartTheme) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getLabelTextSize = exports.overpassFontCharacterConstant = exports.getPieLabelY = exports.getPieLabelX = exports.getBulletLabelY = exports.getBulletLabelX = undefined;

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

  // Returns x coordinate for bullet labels
  const getBulletLabelX = exports.getBulletLabelX = ({
    chartWidth,
    dx = 0,
    labelPosition
  }) => {
    return labelPosition === 'top' && chartWidth ? Math.round(chartWidth / 2) : dx;
  }; // Returns y coordinate for bullet labels


  const getBulletLabelY = exports.getBulletLabelY = ({
    chartHeight,
    dy = 0,
    labelPosition
  }) => {
    switch (labelPosition) {
      case 'bottom':
        return chartHeight + _ChartTheme.ChartCommonStyles.label.margin + dy;

      case 'left':
        return chartHeight ? Math.round(chartHeight / 2) + dy : dy;

      default:
        return dy;
    }
  }; // Returns x coordinate for pie labels


  const getPieLabelX = exports.getPieLabelX = ({
    dx = 0,
    height,
    labelPosition,
    legendPosition,
    padding,
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


  const getPieLabelY = exports.getPieLabelY = ({
    dy = 0,
    height,
    labelPosition,
    padding,
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


  const overpassFontCharacterConstant = exports.overpassFontCharacterConstant = 2.5875; // Returns an approximate size for the give text

  const getLabelTextSize = exports.getLabelTextSize = ({
    text,
    theme
  }) => {
    const style = theme.legend.style.labels;
    return _victoryCore.TextSize.approximateTextSize(text, _objectSpread({}, style, {
      characterConstant: overpassFontCharacterConstant
    }));
  };
});
//# sourceMappingURL=chart-label.js.map