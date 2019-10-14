(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "hoist-non-react-statics", "victory", "victory-core", "../ChartContainer", "../ChartLegend", "../ChartTheme", "../ChartTooltip", "../ChartUtils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("hoist-non-react-statics"), require("victory"), require("victory-core"), require("../ChartContainer"), require("../ChartLegend"), require("../ChartTheme"), require("../ChartTooltip"), require("../ChartUtils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.hoistNonReactStatics, global.victory, global.victoryCore, global.ChartContainer, global.ChartLegend, global.ChartTheme, global.ChartTooltip, global.ChartUtils);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _hoistNonReactStatics, _victory, _victoryCore, _ChartContainer, _ChartLegend, _ChartTheme, _ChartTooltip, _ChartUtils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ChartPie = exports.ChartPieSortOrder = exports.ChartPieLegendPosition = exports.ChartPieLabelPosition = undefined;

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

  let ChartPieLabelPosition = exports.ChartPieLabelPosition = undefined;

  (function (ChartPieLabelPosition) {
    ChartPieLabelPosition["centroid"] = "centroid";
    ChartPieLabelPosition["endAngle"] = "endAngle";
    ChartPieLabelPosition["startAngle"] = "startAngle";
  })(ChartPieLabelPosition || (exports.ChartPieLabelPosition = ChartPieLabelPosition = {}));

  let ChartPieLegendPosition = exports.ChartPieLegendPosition = undefined;

  (function (ChartPieLegendPosition) {
    ChartPieLegendPosition["bottom"] = "bottom";
    ChartPieLegendPosition["right"] = "right";
  })(ChartPieLegendPosition || (exports.ChartPieLegendPosition = ChartPieLegendPosition = {}));

  let ChartPieSortOrder = exports.ChartPieSortOrder = undefined;
  /**
   * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
   */

  (function (ChartPieSortOrder) {
    ChartPieSortOrder["ascending"] = "ascending";
    ChartPieSortOrder["descending"] = "descending";
  })(ChartPieSortOrder || (exports.ChartPieSortOrder = ChartPieSortOrder = {}));

  let someId = 0;

  const ChartPie = exports.ChartPie = _ref => {
    let {
      allowTooltip = true,
      ariaDesc,
      ariaTitle,
      constrainToVisibleArea = false,
      containerComponent = React.createElement(_ChartContainer.ChartContainer, null),
      labels,
      legendComponent = React.createElement(_ChartLegend.ChartLegend, null),
      legendData,
      legendPosition = _ChartTheme.ChartCommonStyles.legend.position,
      padding,
      radius,
      standalone = true,
      themeColor,
      themeVariant,
      // destructure last
      theme = (0, _ChartUtils.getTheme)(themeColor, themeVariant),
      labelComponent = allowTooltip ? React.createElement(_ChartTooltip.ChartTooltip, {
        constrainToVisibleArea: constrainToVisibleArea,
        theme: theme
      }) : undefined,
      legendOrientation = theme.legend.orientation,
      height = theme.pie.height,
      width = theme.pie.width
    } = _ref,
        rest = _objectWithoutProperties(_ref, ["allowTooltip", "ariaDesc", "ariaTitle", "constrainToVisibleArea", "containerComponent", "labels", "legendComponent", "legendData", "legendPosition", "padding", "radius", "standalone", "themeColor", "themeVariant", "theme", "labelComponent", "legendOrientation", "height", "width"]);

    const defaultPadding = {
      bottom: (0, _ChartUtils.getPaddingForSide)('bottom', padding, theme.pie.padding),
      left: (0, _ChartUtils.getPaddingForSide)('left', padding, theme.pie.padding),
      right: (0, _ChartUtils.getPaddingForSide)('right', padding, theme.pie.padding),
      top: (0, _ChartUtils.getPaddingForSide)('top', padding, theme.pie.padding)
    };
    const chartRadius = radius ? radius : _victoryCore.Helpers.getRadius({
      height,
      width,
      padding: defaultPadding
    });
    const chart = React.createElement(_victory.VictoryPie, _extends({
      height: height,
      labels: labels,
      labelComponent: labelComponent,
      padding: padding,
      radius: chartRadius,
      standalone: false,
      theme: theme,
      width: width
    }, rest));
    const legend = React.cloneElement(legendComponent, _objectSpread({
      data: legendData,
      orientation: legendOrientation,
      theme
    }, legendComponent.props)); // Returns a wrapped legend

    const getWrappedLegend = () => {
      if (!legend.props.data) {
        return null;
      }

      return React.createElement(_ChartLegend.ChartLegendWrapper, {
        chartType: "pie",
        height: height,
        legendComponent: legend,
        orientation: legendOrientation,
        padding: defaultPadding,
        position: legendPosition,
        theme: theme,
        width: width
      });
    }; // Clone so users can override container props


    const StandaloneContainer = ({
      children
    }) => React.cloneElement(containerComponent, _objectSpread({
      desc: ariaDesc,
      height,
      title: ariaTitle,
      width,
      theme
    }, containerComponent.props), children);

    return standalone ? React.createElement(StandaloneContainer, null, chart, getWrappedLegend()) : React.createElement(React.Fragment, null, chart, getWrappedLegend());
  }; // Note: VictoryPie.role must be hoisted


  ChartPie.propTypes = {
    allowTooltip: _propTypes2.default.bool,
    animate: _propTypes2.default.any,
    ariaDesc: _propTypes2.default.string,
    ariaTitle: _propTypes2.default.string,
    categories: _propTypes2.default.any,
    colorScale: _propTypes2.default.any,
    constrainToVisibleArea: _propTypes2.default.bool,
    containerComponent: _propTypes2.default.element,
    cornerRadius: _propTypes2.default.number,
    data: _propTypes2.default.arrayOf(_propTypes2.default.any),
    dataComponent: _propTypes2.default.element,
    endAngle: _propTypes2.default.number,
    eventKey: _propTypes2.default.any,
    events: _propTypes2.default.arrayOf(_propTypes2.default.any),
    externalEventMutations: _propTypes2.default.arrayOf(_propTypes2.default.any),
    groupComponent: _propTypes2.default.element,
    height: _propTypes2.default.number,
    innerRadius: _propTypes2.default.number,
    labelComponent: _propTypes2.default.element,
    labelPosition: _propTypes2.default.oneOf(['startAngle', 'endAngle', 'centroid']),
    labelRadius: _propTypes2.default.number,
    labels: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.string), _propTypes2.default.func]),
    legendComponent: _propTypes2.default.element,
    legendData: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      name: _propTypes2.default.string,
      symbol: _propTypes2.default.shape({
        fill: _propTypes2.default.string,
        type: _propTypes2.default.string
      })
    })),
    legendOrientation: _propTypes2.default.oneOf(['horizontal', 'vertical'])
  };
  (0, _hoistNonReactStatics2.default)(ChartPie, _victory.VictoryPie);
});
//# sourceMappingURL=ChartPie.js.map