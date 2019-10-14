(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "victory", "victory-core", "hoist-non-react-statics", "../ChartContainer", "../ChartDonut", "../ChartTheme", "../ChartUtils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("victory"), require("victory-core"), require("hoist-non-react-statics"), require("../ChartContainer"), require("../ChartDonut"), require("../ChartTheme"), require("../ChartUtils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.victory, global.victoryCore, global.hoistNonReactStatics, global.ChartContainer, global.ChartDonut, global.ChartTheme, global.ChartUtils);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _victory, _victoryCore, _hoistNonReactStatics, _ChartContainer, _ChartDonut, _ChartTheme, _ChartUtils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ChartDonutThreshold = exports.ChartDonutThresholdSubTitlePosition = exports.ChartDonutThresholdSortOrder = exports.ChartDonutThresholdLegendPosition = exports.ChartDonutThresholdLabelPosition = exports.ChartDonutThresholdLabelOrientation = exports.ChartDonutThresholdDonutOrientation = undefined;

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

  let ChartDonutThresholdDonutOrientation = exports.ChartDonutThresholdDonutOrientation = undefined;

  (function (ChartDonutThresholdDonutOrientation) {
    ChartDonutThresholdDonutOrientation["left"] = "left";
    ChartDonutThresholdDonutOrientation["right"] = "right";
    ChartDonutThresholdDonutOrientation["top"] = "top";
  })(ChartDonutThresholdDonutOrientation || (exports.ChartDonutThresholdDonutOrientation = ChartDonutThresholdDonutOrientation = {}));

  let ChartDonutThresholdLabelOrientation = exports.ChartDonutThresholdLabelOrientation = undefined;

  (function (ChartDonutThresholdLabelOrientation) {
    ChartDonutThresholdLabelOrientation["horizontal"] = "horizontal";
    ChartDonutThresholdLabelOrientation["vertical"] = "vertical";
  })(ChartDonutThresholdLabelOrientation || (exports.ChartDonutThresholdLabelOrientation = ChartDonutThresholdLabelOrientation = {}));

  let ChartDonutThresholdLabelPosition = exports.ChartDonutThresholdLabelPosition = undefined;

  (function (ChartDonutThresholdLabelPosition) {
    ChartDonutThresholdLabelPosition["centroid"] = "centroid";
    ChartDonutThresholdLabelPosition["endAngle"] = "endAngle";
    ChartDonutThresholdLabelPosition["startAngle"] = "startAngle";
  })(ChartDonutThresholdLabelPosition || (exports.ChartDonutThresholdLabelPosition = ChartDonutThresholdLabelPosition = {}));

  let ChartDonutThresholdLegendPosition = exports.ChartDonutThresholdLegendPosition = undefined;

  (function (ChartDonutThresholdLegendPosition) {
    ChartDonutThresholdLegendPosition["bottom"] = "bottom";
    ChartDonutThresholdLegendPosition["right"] = "right";
  })(ChartDonutThresholdLegendPosition || (exports.ChartDonutThresholdLegendPosition = ChartDonutThresholdLegendPosition = {}));

  let ChartDonutThresholdSortOrder = exports.ChartDonutThresholdSortOrder = undefined;

  (function (ChartDonutThresholdSortOrder) {
    ChartDonutThresholdSortOrder["ascending"] = "ascending";
    ChartDonutThresholdSortOrder["descending"] = "descending";
  })(ChartDonutThresholdSortOrder || (exports.ChartDonutThresholdSortOrder = ChartDonutThresholdSortOrder = {}));

  let ChartDonutThresholdSubTitlePosition = exports.ChartDonutThresholdSubTitlePosition = undefined;
  /**
   * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
   */

  (function (ChartDonutThresholdSubTitlePosition) {
    ChartDonutThresholdSubTitlePosition["bottom"] = "bottom";
    ChartDonutThresholdSubTitlePosition["center"] = "center";
    ChartDonutThresholdSubTitlePosition["right"] = "right";
  })(ChartDonutThresholdSubTitlePosition || (exports.ChartDonutThresholdSubTitlePosition = ChartDonutThresholdSubTitlePosition = {}));

  const ChartDonutThreshold = exports.ChartDonutThreshold = _ref => {
    let {
      allowTooltip = true,
      ariaDesc,
      ariaTitle,
      children,
      constrainToVisibleArea = false,
      containerComponent = React.createElement(_ChartContainer.ChartContainer, null),
      data = [],
      invert = false,
      labels = [],
      // Don't show any tooltip labels by default, let consumer override if needed
      legendPosition = _ChartTheme.ChartCommonStyles.legend.position,
      padding,
      radius,
      standalone = true,
      subTitlePosition = _ChartTheme.ChartDonutStyles.label.subTitlePosition,
      themeColor,
      themeVariant,
      x,
      y,
      // destructure last
      theme = (0, _ChartUtils.getDonutThresholdStaticTheme)(themeColor, themeVariant, invert),
      height = theme.pie.height,
      width = theme.pie.width
    } = _ref,
        rest = _objectWithoutProperties(_ref, ["allowTooltip", "ariaDesc", "ariaTitle", "children", "constrainToVisibleArea", "containerComponent", "data", "invert", "labels", "legendPosition", "padding", "radius", "standalone", "subTitlePosition", "themeColor", "themeVariant", "x", "y", "theme", "height", "width"]);

    const defaultPadding = {
      bottom: (0, _ChartUtils.getPaddingForSide)('bottom', padding, theme.pie.padding),
      left: (0, _ChartUtils.getPaddingForSide)('left', padding, theme.pie.padding),
      right: (0, _ChartUtils.getPaddingForSide)('right', padding, theme.pie.padding),
      top: (0, _ChartUtils.getPaddingForSide)('top', padding, theme.pie.padding)
    };

    const chartRadius = radius | _victoryCore.Helpers.getRadius({
      height,
      width,
      padding: defaultPadding
    }); // Returns computed data representing pie chart slices


    const getComputedData = () => {
      // Format and sort data. Sorting ensures thresholds are displayed in the correct order and simplifies calculations.
      const datum = _victoryCore.Data.formatData(data, _objectSpread({
        x,
        y
      }, rest), ['x', 'y']).sort((a, b) => a._y - b._y); // Data must be offset so that the sum of all data point y-values (including the final slice) == 100.


      const [prev, computedData] = datum.reduce((acc, dataPoint) => {
        return [dataPoint._y, // Set the previous value to current y value
        [...acc[1], {
          x: dataPoint._x,
          // Conditionally add x property only if it is in the original data object
          y: dataPoint._y - acc[0] // Must be offset by previous value

        }]];
      }, [0, []]);
      return [...computedData, {
        y: prev ? 100 - prev : 0
      }];
    }; // Render dynamic utilization donut cart


    const renderChildren = () => React.Children.toArray(children).map((child, index) => {
      if (child.props) {
        const _child$props = child.props,
              {
          data: childData
        } = _child$props,
              childProps = _objectWithoutProperties(_child$props, ["data"]);

        const datum = _victoryCore.Data.formatData([childData], childProps, ['x', 'y']); // Format child data independently of this component's props


        const dynamicTheme = childProps.theme || (0, _ChartUtils.getDonutThresholdDynamicTheme)(childProps.themeColor || themeColor, childProps.themeVariant || themeVariant);
        return React.cloneElement(child, _objectSpread({
          constrainToVisibleArea,
          data: childData,
          endAngle: 360 * (datum[0]._y ? datum[0]._y / 100 : 0),
          height,
          invert,
          key: `pf-chart-donut-utilization-${index}`,
          legendPosition: childProps.legendPosition || legendPosition,
          padding: defaultPadding,
          radius: chartRadius - 14,
          // Donut utilization radius is threshold radius minus 14px spacing
          showStatic: false,
          standalone: false,
          subTitlePosition: childProps.subTitlePosition || subTitlePosition,
          theme: dynamicTheme,
          width
        }, childProps));
      }

      return child;
    }); // Static threshold donut chart


    const chart = React.createElement(_ChartDonut.ChartDonut, _extends({
      allowTooltip: allowTooltip,
      constrainToVisibleArea: constrainToVisibleArea,
      data: getComputedData(),
      height: height,
      labels: labels,
      padding: defaultPadding,
      standalone: false,
      theme: theme,
      width: width
    }, rest)); // Clone so users can override container props

    const StandaloneContainer = ({
      children
    }) => React.cloneElement(containerComponent, _objectSpread({
      desc: ariaDesc,
      height,
      title: ariaTitle,
      width,
      theme
    }, containerComponent.props), children);

    return standalone ? React.createElement(StandaloneContainer, null, chart, renderChildren()) : React.createElement(React.Fragment, null, chart, renderChildren());
  }; // Note: VictoryPie.role must be hoisted


  ChartDonutThreshold.propTypes = {
    allowTooltip: _propTypes2.default.bool,
    animate: _propTypes2.default.any,
    ariaDesc: _propTypes2.default.string,
    ariaTitle: _propTypes2.default.string,
    categories: _propTypes2.default.any,
    children: _propTypes2.default.element,
    colorScale: _propTypes2.default.any,
    constrainToVisibleArea: _propTypes2.default.bool,
    containerComponent: _propTypes2.default.element,
    cornerRadius: _propTypes2.default.number,
    data: _propTypes2.default.arrayOf(_propTypes2.default.any),
    dataComponent: _propTypes2.default.element,
    desc: _propTypes2.default.string,
    endAngle: _propTypes2.default.number,
    eventKey: _propTypes2.default.any,
    events: _propTypes2.default.arrayOf(_propTypes2.default.any),
    externalEventMutations: _propTypes2.default.arrayOf(_propTypes2.default.any),
    groupComponent: _propTypes2.default.element,
    height: _propTypes2.default.number,
    innerRadius: _propTypes2.default.number,
    invert: _propTypes2.default.bool,
    labelRadius: _propTypes2.default.number,
    labels: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.string), _propTypes2.default.func]),
    legendPosition: _propTypes2.default.oneOf(['bottom', 'right']),
    name: _propTypes2.default.string
  };
  (0, _hoistNonReactStatics2.default)(ChartDonutThreshold, _victory.VictoryPie);
});
//# sourceMappingURL=ChartDonutThreshold.js.map