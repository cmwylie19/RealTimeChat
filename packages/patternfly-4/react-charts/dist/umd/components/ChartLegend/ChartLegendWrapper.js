(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "../ChartLegend", "../ChartTheme", "../ChartUtils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("../ChartLegend"), require("../ChartTheme"), require("../ChartUtils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.ChartLegend, global.ChartTheme, global.ChartUtils);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _ChartLegend, _ChartTheme, _ChartUtils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ChartLegendWrapper = exports.ChartLegendConfigChartType = undefined;

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var React = _interopRequireWildcard(_react);

  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();

    _getRequireWildcardCache = function () {
      return cache;
    };

    return cache;
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    var cache = _getRequireWildcardCache();

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};

    if (obj != null) {
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
  }

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
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

  let ChartLegendConfigChartType = exports.ChartLegendConfigChartType = undefined;
  /**
   * Helper to position a legend component within a component's SVG
   *
   * Example:
   *
   * <ChartLegendWrapper
   *   chartHeight={200}
   *   chartWidth={600}
   *   legendComponent={<ChartLegend data={[{ name: 'Cats' }, { name: 'Dogs' }]} orientation="vertical"/>}
   *   position="right"
   *   svgHeight={200}
   *   svgWidth={800}
   * />
   */

  (function (ChartLegendConfigChartType) {
    ChartLegendConfigChartType["chart"] = "chart";
    ChartLegendConfigChartType["pie"] = "pie";
  })(ChartLegendConfigChartType || (exports.ChartLegendConfigChartType = ChartLegendConfigChartType = {}));

  const ChartLegendWrapper = exports.ChartLegendWrapper = ({
    chartType = 'chart',
    dx = 0,
    dy = 0,
    legendComponent = React.createElement(_ChartLegend.ChartLegend, null),
    padding,
    position = _ChartTheme.ChartCommonStyles.legend.position,
    themeColor,
    themeVariant,
    // destructure last
    theme = (0, _ChartUtils.getTheme)(themeColor, themeVariant),
    orientation = theme.legend.orientation,
    height = theme.chart.height,
    width = theme.chart.width
  }) => {
    const legendProps = legendComponent.props ? legendComponent.props : {};
    const legendX = (0, _ChartUtils.getLegendX)({
      chartType,
      dx,
      height,
      legendData: legendProps.data,
      legendOrientation: legendProps.legendOrientation ? legendProps.legendOrientation : orientation,
      legendPosition: position,
      legendProps,
      padding,
      theme,
      width
    });
    const legendY = (0, _ChartUtils.getLegendY)({
      chartType,
      dy,
      height,
      legendData: legendProps.data,
      legendOrientation: legendProps.legendOrientation ? legendProps.legendOrientation : orientation,
      legendProps: legendProps,
      legendPosition: position,
      padding,
      theme,
      width
    });
    const legend = React.cloneElement(legendComponent, _objectSpread({
      orientation,
      standalone: false,
      theme,
      x: legendX > 0 ? legendX : 0,
      y: legendY > 0 ? legendY : 0
    }, legendComponent.props));
    return React.createElement(React.Fragment, null, legend);
  };

  ChartLegendWrapper.propTypes = {
    chartType: _propTypes2.default.string,
    dx: _propTypes2.default.number,
    dy: _propTypes2.default.number,
    height: _propTypes2.default.number,
    legendComponent: _propTypes2.default.element,
    orientation: _propTypes2.default.oneOf(['horizontal', 'vertical']),
    padding: _propTypes2.default.any,
    position: _propTypes2.default.oneOf(['bottom', 'bottom-left', 'right']),
    theme: _propTypes2.default.any,
    themeColor: _propTypes2.default.string,
    themeVariant: _propTypes2.default.string,
    width: _propTypes2.default.number
  };
});
//# sourceMappingURL=ChartLegendWrapper.js.map