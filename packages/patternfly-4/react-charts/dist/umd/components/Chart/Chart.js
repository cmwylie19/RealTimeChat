(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "hoist-non-react-statics", "victory", "../ChartContainer", "../ChartLegend", "../ChartTheme", "../ChartUtils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("hoist-non-react-statics"), require("victory"), require("../ChartContainer"), require("../ChartLegend"), require("../ChartTheme"), require("../ChartUtils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.hoistNonReactStatics, global.victory, global.ChartContainer, global.ChartLegend, global.ChartTheme, global.ChartUtils);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _hoistNonReactStatics, _victory, _ChartContainer, _ChartLegend, _ChartTheme, _ChartUtils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Chart = undefined;

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var React = _interopRequireWildcard(_react);

  var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

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

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
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

  /**
   * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
   */
  const Chart = exports.Chart = _ref => {
    let {
      allowZoom = false,
      ariaDesc,
      ariaTitle,
      children,
      legendComponent = React.createElement(_ChartLegend.ChartLegend, null),
      legendData,
      legendPosition = _ChartTheme.ChartCommonStyles.legend.position,
      padding,
      standalone = true,
      themeColor,
      themeVariant,
      // destructure last
      theme = (0, _ChartUtils.getTheme)(themeColor, themeVariant),
      containerComponent = allowZoom ? React.createElement(_victory.VictoryZoomContainer, null) : React.createElement(_ChartContainer.ChartContainer, null),
      legendOrientation = theme.legend.orientation,
      height = theme.chart.height,
      width = theme.chart.width
    } = _ref,
        rest = _objectWithoutProperties(_ref, ["allowZoom", "ariaDesc", "ariaTitle", "children", "legendComponent", "legendData", "legendPosition", "padding", "standalone", "themeColor", "themeVariant", "theme", "containerComponent", "legendOrientation", "height", "width"]);

    const defaultPadding = {
      bottom: (0, _ChartUtils.getPaddingForSide)('bottom', padding, theme.chart.padding),
      left: (0, _ChartUtils.getPaddingForSide)('left', padding, theme.chart.padding),
      right: (0, _ChartUtils.getPaddingForSide)('right', padding, theme.chart.padding),
      top: (0, _ChartUtils.getPaddingForSide)('top', padding, theme.chart.padding)
    }; // Clone so users can override container props

    const container = React.cloneElement(containerComponent, _objectSpread({
      desc: ariaDesc,
      title: ariaTitle,
      theme
    }, containerComponent.props, {
      className: (0, _ChartUtils.getClassName)({
        className: containerComponent.props.className
      }) // Override VictoryContainer class name

    }));
    const legend = React.cloneElement(legendComponent, _objectSpread({
      data: legendData,
      orientation: legendOrientation,
      theme
    }, legendComponent.props)); // Returns a wrapped legend

    const getWrappedLegend = () => {
      if (!legend.props.data) {
        return null;
      }

      let dx = 0;
      let dy = 0;
      let xAxisLabelHeight = 0;
      let legendTitleHeight = legend.props.title ? 10 : 0; // Adjust for axis label

      React.Children.toArray(children).map(child => {
        if (child.type.role === 'axis' && child.props.label && !child.props.dependentAxis) {
          xAxisLabelHeight = (0, _ChartUtils.getLabelTextSize)({
            text: child.props.label,
            theme
          }).height + 10;
          legendTitleHeight = 0;
        }
      });

      if (legendPosition === _ChartLegend.ChartLegendPosition.bottom) {
        dy += xAxisLabelHeight + legendTitleHeight;
      } else if (legendPosition === _ChartLegend.ChartLegendPosition.bottomLeft) {
        dy += xAxisLabelHeight + legendTitleHeight;
        dx = -10;
      }

      return React.createElement(_ChartLegend.ChartLegendWrapper, {
        chartType: "chart",
        dx: dx,
        dy: dy,
        height: height,
        legendComponent: legend,
        orientation: legendOrientation,
        padding: defaultPadding,
        position: legendPosition,
        theme: theme,
        width: width
      });
    };

    return React.createElement(_victory.VictoryChart, _extends({
      containerComponent: container,
      height: height,
      padding: defaultPadding,
      theme: theme,
      width: width
    }, rest), children, getWrappedLegend());
  };

  Chart.propTypes = {
    allowZoom: _propTypes2.default.bool,
    animate: _propTypes2.default.any,
    ariaDesc: _propTypes2.default.string,
    ariaTitle: _propTypes2.default.string,
    children: _propTypes2.default.node,
    containerComponent: _propTypes2.default.element,
    domain: _propTypes2.default.any,
    domainPadding: _propTypes2.default.any,
    endAngle: _propTypes2.default.number,
    eventKey: _propTypes2.default.any,
    events: _propTypes2.default.arrayOf(_propTypes2.default.any),
    externalEventMutations: _propTypes2.default.arrayOf(_propTypes2.default.any),
    groupComponent: _propTypes2.default.element,
    height: _propTypes2.default.number,
    horizontal: _propTypes2.default.bool,
    innerRadius: _propTypes2.default.number,
    legendComponent: _propTypes2.default.element,
    legendData: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      name: _propTypes2.default.string,
      symbol: _propTypes2.default.shape({
        fill: _propTypes2.default.string,
        type: _propTypes2.default.string
      })
    })),
    legendOrientation: _propTypes2.default.oneOf(['horizontal', 'vertical']),
    legendPosition: _propTypes2.default.oneOf(['bottom', 'bottom-left', 'right']),
    maxDomain: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({
      x: _propTypes2.default.number,
      y: _propTypes2.default.number
    })]),
    minDomain: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({
      x: _propTypes2.default.number,
      y: _propTypes2.default.number
    })]),
    padding: _propTypes2.default.any,
    polar: _propTypes2.default.bool,
    range: _propTypes2.default.oneOfType([_propTypes2.default.shape({})])
  };
  (0, _hoistNonReactStatics2.default)(Chart, _victory.VictoryChart);
});
//# sourceMappingURL=Chart.js.map