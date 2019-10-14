(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "hoist-non-react-statics", "lodash", "victory", "victory-core", "../ChartContainer", "../ChartDonut", "../ChartTheme", "../ChartUtils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("hoist-non-react-statics"), require("lodash"), require("victory"), require("victory-core"), require("../ChartContainer"), require("../ChartDonut"), require("../ChartTheme"), require("../ChartUtils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.hoistNonReactStatics, global.lodash, global.victory, global.victoryCore, global.ChartContainer, global.ChartDonut, global.ChartTheme, global.ChartUtils);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _hoistNonReactStatics, _lodash, _victory, _victoryCore, _ChartContainer, _ChartDonut, _ChartTheme, _ChartUtils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ChartDonutUtilization = exports.ChartDonutUtilizationSubTitlePosition = exports.ChartDonutUtilizationSortOrder = exports.ChartDonutUtilizationLegendPosition = exports.ChartDonutUtilizationLegendOrientation = exports.ChartDonutUtilizationLabelPosition = undefined;

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

  let ChartDonutUtilizationLabelPosition = exports.ChartDonutUtilizationLabelPosition = undefined;

  (function (ChartDonutUtilizationLabelPosition) {
    ChartDonutUtilizationLabelPosition["centroid"] = "centroid";
    ChartDonutUtilizationLabelPosition["endAngle"] = "endAngle";
    ChartDonutUtilizationLabelPosition["startAngle"] = "startAngle";
  })(ChartDonutUtilizationLabelPosition || (exports.ChartDonutUtilizationLabelPosition = ChartDonutUtilizationLabelPosition = {}));

  let ChartDonutUtilizationLegendOrientation = exports.ChartDonutUtilizationLegendOrientation = undefined;

  (function (ChartDonutUtilizationLegendOrientation) {
    ChartDonutUtilizationLegendOrientation["horizontal"] = "horizontal";
    ChartDonutUtilizationLegendOrientation["vertical"] = "vertical";
  })(ChartDonutUtilizationLegendOrientation || (exports.ChartDonutUtilizationLegendOrientation = ChartDonutUtilizationLegendOrientation = {}));

  let ChartDonutUtilizationLegendPosition = exports.ChartDonutUtilizationLegendPosition = undefined;

  (function (ChartDonutUtilizationLegendPosition) {
    ChartDonutUtilizationLegendPosition["bottom"] = "bottom";
    ChartDonutUtilizationLegendPosition["right"] = "right";
  })(ChartDonutUtilizationLegendPosition || (exports.ChartDonutUtilizationLegendPosition = ChartDonutUtilizationLegendPosition = {}));

  let ChartDonutUtilizationSortOrder = exports.ChartDonutUtilizationSortOrder = undefined;

  (function (ChartDonutUtilizationSortOrder) {
    ChartDonutUtilizationSortOrder["ascending"] = "ascending";
    ChartDonutUtilizationSortOrder["descending"] = "descending";
  })(ChartDonutUtilizationSortOrder || (exports.ChartDonutUtilizationSortOrder = ChartDonutUtilizationSortOrder = {}));

  let ChartDonutUtilizationSubTitlePosition = exports.ChartDonutUtilizationSubTitlePosition = undefined;
  /**
   * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
   */

  (function (ChartDonutUtilizationSubTitlePosition) {
    ChartDonutUtilizationSubTitlePosition["bottom"] = "bottom";
    ChartDonutUtilizationSubTitlePosition["center"] = "center";
    ChartDonutUtilizationSubTitlePosition["right"] = "right";
  })(ChartDonutUtilizationSubTitlePosition || (exports.ChartDonutUtilizationSubTitlePosition = ChartDonutUtilizationSubTitlePosition = {}));

  const ChartDonutUtilization = exports.ChartDonutUtilization = _ref => {
    let {
      allowTooltip = true,
      ariaDesc,
      ariaTitle,
      containerComponent = React.createElement(_ChartContainer.ChartContainer, null),
      data,
      invert = false,
      padding,
      showStatic = true,
      standalone = true,
      themeColor,
      themeVariant,
      thresholds,
      x,
      y,
      // destructure last
      theme = (0, _ChartUtils.getDonutUtilizationTheme)(themeColor, themeVariant),
      height = theme.pie.height,
      width = theme.pie.width
    } = _ref,
        rest = _objectWithoutProperties(_ref, ["allowTooltip", "ariaDesc", "ariaTitle", "containerComponent", "data", "invert", "padding", "showStatic", "standalone", "themeColor", "themeVariant", "thresholds", "x", "y", "theme", "height", "width"]); // Returns computed data representing pie chart slices


    const getComputedData = () => {
      const datum = getData();
      const computedData = [{
        x: datum[0]._x,
        y: datum[0]._y || 0
      }];

      if (showStatic) {
        computedData.push({
          y: datum[0]._x ? Math.abs(100 - datum[0]._y) : 100
        });
      }

      return computedData;
    };

    const getData = () => {
      const datum = [_objectSpread({}, data)];
      return _victoryCore.Data.formatData(datum, _objectSpread({
        x,
        y
      }, rest), ['x', 'y']).sort((a, b) => a._y - b._y);
    }; // Returns thresholds with default color scale


    const getDonutThresholds = () => {
      const result = [];

      if (thresholds) {
        // Ensure thresholds are in sorted order
        const sThresholds = (0, _lodash.orderBy)(thresholds, 'value', invert ? 'desc' : 'asc');
        const numColors = _ChartTheme.ChartDonutUtilizationStyles.thresholds.colorScale.length;

        for (let i = 0; i < sThresholds.length; i++) {
          result.push({
            color: sThresholds[i].color ? sThresholds[i].color : _ChartTheme.ChartDonutUtilizationStyles.thresholds.colorScale[i % numColors],
            value: sThresholds[i].value
          });
        }
      }

      return result;
    }; // Returns theme based on threshold and current value


    const getThresholdTheme = () => {
      const newTheme = _objectSpread({}, theme);

      if (data) {
        const datum = getData();
        const donutThresholds = getDonutThresholds();

        const mergeThemeProps = i => {
          // Merge just the first color of dynamic (blue, green, etc.) with static (gray) for expected colorScale
          newTheme.pie.colorScale[0] = donutThresholds[i].color;
          newTheme.legend.colorScale[0] = donutThresholds[i].color;
        };

        for (let i = 0; i < donutThresholds.length; i++) {
          if (invert) {
            if (datum[0]._y <= donutThresholds[i].value) {
              mergeThemeProps(i);
            }
          } else {
            if (datum[0]._y >= donutThresholds[i].value) {
              mergeThemeProps(i);
            }
          }
        }
      }

      return newTheme;
    }; // Dynamic donut chart


    const chart = React.createElement(_ChartDonut.ChartDonut, _extends({
      allowTooltip: allowTooltip,
      data: getComputedData(),
      height: height,
      padding: padding,
      standalone: false,
      theme: getThresholdTheme(),
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

    return standalone ? React.createElement(StandaloneContainer, null, chart) : React.createElement(React.Fragment, null, chart);
  }; // Note: VictoryPie.role must be hoisted


  ChartDonutUtilization.propTypes = {
    allowTooltip: _propTypes2.default.bool,
    animate: _propTypes2.default.any,
    ariaDesc: _propTypes2.default.string,
    ariaTitle: _propTypes2.default.string,
    capHeight: _propTypes2.default.any,
    categories: _propTypes2.default.any,
    colorScale: _propTypes2.default.any,
    constrainToVisibleArea: _propTypes2.default.bool,
    containerComponent: _propTypes2.default.element,
    cornerRadius: _propTypes2.default.number,
    data: _propTypes2.default.any,
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
    labelComponent: _propTypes2.default.element,
    labelPosition: _propTypes2.default.oneOf(['startAngle', 'endAngle', 'centroid']),
    legendComponent: _propTypes2.default.element,
    legendData: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      name: _propTypes2.default.string,
      symbol: _propTypes2.default.shape({
        fill: _propTypes2.default.string,
        type: _propTypes2.default.string
      })
    }))
  };
  (0, _hoistNonReactStatics2.default)(ChartDonutUtilization, _victory.VictoryPie);
});
//# sourceMappingURL=ChartDonutUtilization.js.map