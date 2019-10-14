(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "hoist-non-react-statics", "victory", "./utils/chart-bullet-size", "./utils/chart-bullet-domain", "./utils/chart-bullet-theme", "../ChartAxis", "./ChartBulletComparativeErrorMeasure", "./ChartBulletComparativeMeasure", "./ChartBulletComparativeWarningMeasure", "./ChartBulletGroupTitle", "./ChartBulletPrimaryDotMeasure", "./ChartBulletPrimarySegmentedMeasure", "./ChartBulletQualitativeRange", "./ChartBulletTitle", "../ChartContainer", "../ChartLegend", "../ChartTheme", "../ChartTooltip", "../ChartUtils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("hoist-non-react-statics"), require("victory"), require("./utils/chart-bullet-size"), require("./utils/chart-bullet-domain"), require("./utils/chart-bullet-theme"), require("../ChartAxis"), require("./ChartBulletComparativeErrorMeasure"), require("./ChartBulletComparativeMeasure"), require("./ChartBulletComparativeWarningMeasure"), require("./ChartBulletGroupTitle"), require("./ChartBulletPrimaryDotMeasure"), require("./ChartBulletPrimarySegmentedMeasure"), require("./ChartBulletQualitativeRange"), require("./ChartBulletTitle"), require("../ChartContainer"), require("../ChartLegend"), require("../ChartTheme"), require("../ChartTooltip"), require("../ChartUtils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.hoistNonReactStatics, global.victory, global.chartBulletSize, global.chartBulletDomain, global.chartBulletTheme, global.ChartAxis, global.ChartBulletComparativeErrorMeasure, global.ChartBulletComparativeMeasure, global.ChartBulletComparativeWarningMeasure, global.ChartBulletGroupTitle, global.ChartBulletPrimaryDotMeasure, global.ChartBulletPrimarySegmentedMeasure, global.ChartBulletQualitativeRange, global.ChartBulletTitle, global.ChartContainer, global.ChartLegend, global.ChartTheme, global.ChartTooltip, global.ChartUtils);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _hoistNonReactStatics, _victory, _chartBulletSize, _chartBulletDomain, _chartBulletTheme, _ChartAxis, _ChartBulletComparativeErrorMeasure, _ChartBulletComparativeMeasure, _ChartBulletComparativeWarningMeasure, _ChartBulletGroupTitle, _ChartBulletPrimaryDotMeasure, _ChartBulletPrimarySegmentedMeasure, _ChartBulletQualitativeRange, _ChartBulletTitle, _ChartContainer, _ChartLegend, _ChartTheme, _ChartTooltip, _ChartUtils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ChartBullet = undefined;

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
  const ChartBullet = exports.ChartBullet = _ref => {
    let {
      ariaDesc,
      ariaTitle,
      axisComponent = React.createElement(_ChartAxis.ChartAxis, null),
      comparativeErrorMeasureComponent = React.createElement(_ChartBulletComparativeErrorMeasure.ChartBulletComparativeErrorMeasure, null),
      comparativeErrorMeasureData,
      comparativeErrorMeasureDataY,
      comparativeErrorMeasureLegendData,
      comparativeWarningMeasureComponent = React.createElement(_ChartBulletComparativeWarningMeasure.ChartBulletComparativeWarningMeasure, null),
      comparativeWarningMeasureData,
      comparativeWarningMeasureDataY,
      comparativeWarningMeasureLegendData,
      comparativeZeroMeasureComponent = React.createElement(_ChartBulletComparativeMeasure.ChartBulletComparativeMeasure, null),
      constrainToVisibleArea = false,
      groupTitleComponent = React.createElement(_ChartBulletGroupTitle.ChartBulletGroupTitle, null),
      groupSubTitle,
      groupTitle,
      horizontal = true,
      invert = false,
      labels,
      legendComponent = React.createElement(_ChartLegend.ChartLegend, null),
      legendItemsPerRow,
      legendPosition = 'bottom',
      maxDomain,
      minDomain,
      padding,
      primaryDotMeasureComponent = React.createElement(_ChartBulletPrimaryDotMeasure.ChartBulletPrimaryDotMeasure, null),
      primaryDotMeasureData,
      primaryDotMeasureDataY,
      primaryDotMeasureLegendData,
      primarySegmentedMeasureComponent = React.createElement(_ChartBulletPrimarySegmentedMeasure.ChartBulletPrimarySegmentedMeasure, null),
      primarySegmentedMeasureData,
      primarySegmentedMeasureDataY,
      primarySegmentedMeasureLegendData,
      qualitativeRangeComponent = React.createElement(_ChartBulletQualitativeRange.ChartBulletQualitativeRange, null),
      qualitativeRangeData,
      qualitativeRangeDataY,
      qualitativeRangeDataY0,
      qualitativeRangeLegendData,
      standalone = true,
      subTitle,
      themeColor,
      themeVariant,
      title,
      titleComponent = React.createElement(_ChartBulletTitle.ChartBulletTitle, null),
      titlePosition,
      // destructure last
      theme = (0, _chartBulletTheme.getBulletThemeWithLegendColorScale)({
        comparativeErrorMeasureData,
        comparativeErrorMeasureLegendData,
        comparativeWarningMeasureData,
        comparativeWarningMeasureLegendData,
        invert,
        primaryDotMeasureData,
        primaryDotMeasureLegendData,
        primarySegmentedMeasureData,
        primarySegmentedMeasureLegendData,
        qualitativeRangeData,
        qualitativeRangeLegendData,
        themeColor,
        themeVariant
      }),
      domain = (0, _chartBulletDomain.getBulletDomain)({
        comparativeErrorMeasureComponent,
        comparativeErrorMeasureData,
        comparativeWarningMeasureComponent,
        comparativeWarningMeasureData,
        maxDomain,
        minDomain,
        primaryDotMeasureComponent,
        primaryDotMeasureData,
        primarySegmentedMeasureComponent,
        primarySegmentedMeasureData,
        qualitativeRangeComponent,
        qualitativeRangeData
      }),
      legendOrientation = theme.legend.orientation,
      height = horizontal ? theme.chart.height : theme.chart.width,
      width = horizontal ? theme.chart.width : theme.chart.height,
      bulletSize = theme.chart.height
    } = _ref,
        rest = _objectWithoutProperties(_ref, ["ariaDesc", "ariaTitle", "axisComponent", "comparativeErrorMeasureComponent", "comparativeErrorMeasureData", "comparativeErrorMeasureDataY", "comparativeErrorMeasureLegendData", "comparativeWarningMeasureComponent", "comparativeWarningMeasureData", "comparativeWarningMeasureDataY", "comparativeWarningMeasureLegendData", "comparativeZeroMeasureComponent", "constrainToVisibleArea", "groupTitleComponent", "groupSubTitle", "groupTitle", "horizontal", "invert", "labels", "legendComponent", "legendItemsPerRow", "legendPosition", "maxDomain", "minDomain", "padding", "primaryDotMeasureComponent", "primaryDotMeasureData", "primaryDotMeasureDataY", "primaryDotMeasureLegendData", "primarySegmentedMeasureComponent", "primarySegmentedMeasureData", "primarySegmentedMeasureDataY", "primarySegmentedMeasureLegendData", "qualitativeRangeComponent", "qualitativeRangeData", "qualitativeRangeDataY", "qualitativeRangeDataY0", "qualitativeRangeLegendData", "standalone", "subTitle", "themeColor", "themeVariant", "title", "titleComponent", "titlePosition", "theme", "domain", "legendOrientation", "height", "width", "bulletSize"]); // Note that we're using a fixed bullet height width to align components.


    const chartSize = {
      height: horizontal ? bulletSize : height,
      width: horizontal ? width : bulletSize
    };
    const defaultPadding = {
      bottom: (0, _ChartUtils.getPaddingForSide)('bottom', padding, theme.chart.padding),
      left: (0, _ChartUtils.getPaddingForSide)('left', padding, theme.chart.padding),
      right: (0, _ChartUtils.getPaddingForSide)('right', padding, theme.chart.padding),
      top: (0, _ChartUtils.getPaddingForSide)('top', padding, theme.chart.padding)
    }; // Bullet group title

    const bulletGroupTitle = React.cloneElement(groupTitleComponent, _objectSpread({
      height,
      standalone: false,
      subTitle: groupSubTitle,
      title: groupTitle,
      width
    }, groupTitleComponent.props)); // Bullet title

    const bulletTitle = React.cloneElement(titleComponent, _objectSpread({
      height,
      horizontal,
      legendPosition,
      padding,
      standalone: false,
      subTitle,
      theme,
      title,
      titlePosition,
      width
    }, titleComponent.props)); // Comparative error measure

    const comparativeErrorMeasure = React.cloneElement(comparativeErrorMeasureComponent, _objectSpread({
      barWidth: (0, _chartBulletSize.getComparativeMeasureErrorWidth)({
        height: chartSize.height,
        horizontal,
        width: chartSize.width
      }),
      constrainToVisibleArea,
      data: comparativeErrorMeasureData,
      domain,
      height: chartSize.height,
      horizontal,
      labelComponent: React.createElement(_ChartTooltip.ChartTooltip, {
        height: height,
        width: width
      }),
      labels,
      padding,
      standalone: false,
      width: chartSize.width,
      y: comparativeErrorMeasureDataY
    }, comparativeErrorMeasureComponent.props)); // Comparative warning measure

    const comparativeWarningMeasure = React.cloneElement(comparativeWarningMeasureComponent, _objectSpread({
      barWidth: (0, _chartBulletSize.getComparativeMeasureWarningWidth)({
        height: chartSize.height,
        horizontal,
        width: chartSize.width
      }),
      constrainToVisibleArea,
      data: comparativeWarningMeasureData,
      domain,
      height: chartSize.height,
      horizontal,
      labelComponent: React.createElement(_ChartTooltip.ChartTooltip, {
        height: height,
        width: width
      }),
      labels,
      padding,
      standalone: false,
      width: chartSize.width,
      y: comparativeWarningMeasureDataY
    }, comparativeWarningMeasureComponent.props)); // Comparative zero measure

    const comparativeZeroMeasure = React.cloneElement(comparativeZeroMeasureComponent, _objectSpread({
      barWidth: (0, _chartBulletSize.getComparativeMeasureWidth)({
        height: chartSize.height,
        horizontal,
        width: chartSize.width
      }),
      data: [{
        y: 0
      }],
      domain,
      height: chartSize.height,
      horizontal,
      padding,
      standalone: false,
      width: chartSize.width
    }, comparativeZeroMeasureComponent.props)); // Legend

    const legend = React.cloneElement(legendComponent, _objectSpread({
      data: [...(primaryDotMeasureLegendData ? primaryDotMeasureLegendData : []), ...(primarySegmentedMeasureLegendData ? primarySegmentedMeasureLegendData : []), ...(comparativeWarningMeasureLegendData ? comparativeWarningMeasureLegendData : []), ...(comparativeErrorMeasureLegendData ? comparativeErrorMeasureLegendData : []), ...(qualitativeRangeLegendData ? qualitativeRangeLegendData : [])],
      itemsPerRow: legendItemsPerRow,
      orientation: legendOrientation,
      position: legendPosition,
      theme
    }, legendComponent.props)); // Primary dot measure

    const primaryDotMeasure = React.cloneElement(primaryDotMeasureComponent, _objectSpread({
      constrainToVisibleArea,
      data: primaryDotMeasureData,
      domain,
      height: chartSize.height,
      horizontal,
      invert,
      labelComponent: React.createElement(_ChartTooltip.ChartTooltip, {
        height: height,
        width: width
      }),
      labels,
      padding,
      size: (0, _chartBulletSize.getPrimaryDotMeasureSize)({
        height: chartSize.height,
        horizontal,
        width: chartSize.width
      }),
      standalone: false,
      themeColor,
      themeVariant,
      width: chartSize.width,
      y: primaryDotMeasureDataY
    }, primaryDotMeasureComponent.props)); // Primary segmented measure

    const primarySegmentedMeasure = React.cloneElement(primarySegmentedMeasureComponent, _objectSpread({
      constrainToVisibleArea,
      barWidth: (0, _chartBulletSize.getPrimarySegmentedMeasureWidth)({
        height: chartSize.height,
        horizontal,
        width: chartSize.width
      }),
      data: primarySegmentedMeasureData,
      domain,
      height: chartSize.height,
      horizontal,
      invert,
      labelComponent: React.createElement(_ChartTooltip.ChartTooltip, {
        height: height,
        width: width
      }),
      labels,
      padding,
      standalone: false,
      themeColor,
      themeVariant,
      width: chartSize.width,
      y: primarySegmentedMeasureDataY
    }, primarySegmentedMeasureComponent.props)); // Qualitative range

    const qualitativeRange = React.cloneElement(qualitativeRangeComponent, _objectSpread({
      constrainToVisibleArea,
      barWidth: (0, _chartBulletSize.getQualitativeRangeBarWidth)({
        height: chartSize.height,
        horizontal,
        width: chartSize.width
      }),
      data: qualitativeRangeData,
      domain,
      height: chartSize.height,
      horizontal,
      invert,
      labelComponent: React.createElement(_ChartTooltip.ChartTooltip, {
        height: height,
        width: width
      }),
      labels,
      padding,
      standalone: false,
      width: chartSize.width,
      y: qualitativeRangeDataY,
      y0: qualitativeRangeDataY0
    }, qualitativeRangeComponent.props)); // Returns tick values -- Victory doesn't include min/max domain

    const getTickValues = (minVal, maxVal) => {
      const tickValues = [minVal, maxVal];
      let range = 0;

      if (minVal < 0 && maxVal < 0) {
        range = Math.abs(minVal - maxVal);
      } else if (minVal < 0) {
        range = Math.abs(minVal) + maxVal;
      } else {
        range = maxVal - minVal;
      }

      const tickInterval = range / (_ChartTheme.ChartBulletStyles.axisTickCount - 1);

      for (let i = minVal; i < maxVal;) {
        i += tickInterval;
        tickValues.push(Math.ceil(i));
      }

      return tickValues;
    }; // Returns a wrapped legend


    const getWrappedLegend = () => {
      if (!legend.props.data) {
        return null;
      }

      let dx = 0;
      let dy = 0; // Adjust for padding

      if (legendPosition === _ChartLegend.ChartLegendPosition.bottom) {
        dy = horizontal ? defaultPadding.top * .5 + (defaultPadding.bottom * .5 - defaultPadding.bottom) - 25 : title ? -defaultPadding.bottom + 60 : -defaultPadding.bottom;
      } else if (legendPosition === _ChartLegend.ChartLegendPosition.bottomLeft) {
        dy = horizontal ? defaultPadding.top * .5 + (defaultPadding.bottom * .5 - defaultPadding.bottom) - 25 : title ? -defaultPadding.bottom + 60 : -defaultPadding.bottom;
        dx = -10;
      }

      return React.createElement(_ChartLegend.ChartLegendWrapper, {
        chartType: "bullet",
        dx: dx,
        dy: dy,
        height: chartSize.height,
        legendComponent: legend,
        orientation: legendOrientation,
        padding: padding,
        position: legendPosition,
        theme: theme,
        width: chartSize.width
      });
    }; // Returns comparative zero measure


    const getComparativeZeroMeasure = () => {
      const _domain = domain;
      const low = Array.isArray(_domain) ? _domain[0] : _domain.y && Array.isArray(_domain.y) ? _domain.y[0] : 0;
      const high = Array.isArray(_domain) ? _domain[_domain.length - 1] : _domain.y && Array.isArray(_domain.y) ? _domain.y[_domain.y.length - 1] : 0;

      if (low < 0 && high > 0) {
        return comparativeZeroMeasure;
      }

      return null;
    }; // Axis component for custom tick values


    const axis = React.cloneElement(axisComponent, _objectSpread({
      dependentAxis: horizontal ? false : true,
      domain: !horizontal ? domain : {
        x: domain.y,
        y: domain.x
      },
      height: chartSize.height,
      // Adjust for padding
      offsetX: !horizontal ? defaultPadding.left * .5 + (defaultPadding.right * .5 - (defaultPadding.right - 55)) : 0,
      offsetY: horizontal ? 80 - defaultPadding.top * .5 + (defaultPadding.bottom * .5 - 25) : 0,
      padding,
      standalone: false,
      tickCount: _ChartTheme.ChartBulletStyles.axisTickCount,
      tickValues: getTickValues(domain.y[0], domain.y[1]),
      width: chartSize.width
    }, axisComponent.props));
    const bulletChart = React.createElement(React.Fragment, null, axis, bulletGroupTitle, bulletTitle, qualitativeRange, primarySegmentedMeasure, primaryDotMeasure, comparativeErrorMeasure, comparativeWarningMeasure, getComparativeZeroMeasure(), getWrappedLegend());
    return standalone ? React.createElement(_ChartContainer.ChartContainer, {
      desc: ariaDesc,
      height: height,
      title: ariaTitle,
      theme: theme,
      width: width
    }, bulletChart) : React.createElement(React.Fragment, null, bulletChart);
  };

  ChartBullet.propTypes = {
    ariaDesc: _propTypes2.default.string,
    ariaTitle: _propTypes2.default.string,
    axisComponent: _propTypes2.default.element,
    bulletSize: _propTypes2.default.number,
    comparativeErrorMeasureComponent: _propTypes2.default.element,
    comparativeErrorMeasureData: _propTypes2.default.arrayOf(_propTypes2.default.any),
    comparativeErrorMeasureDataY: _propTypes2.default.any,
    comparativeErrorMeasureLegendData: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      name: _propTypes2.default.string,
      symbol: _propTypes2.default.shape({
        fill: _propTypes2.default.string,
        type: _propTypes2.default.string
      })
    })),
    comparativeWarningMeasureComponent: _propTypes2.default.element,
    comparativeWarningMeasureData: _propTypes2.default.arrayOf(_propTypes2.default.any),
    comparativeWarningMeasureDataY: _propTypes2.default.any,
    comparativeWarningMeasureLegendData: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      name: _propTypes2.default.string,
      symbol: _propTypes2.default.shape({
        fill: _propTypes2.default.string,
        type: _propTypes2.default.string
      })
    })),
    comparativeZeroMeasureComponent: _propTypes2.default.element,
    constrainToVisibleArea: _propTypes2.default.bool,
    domain: _propTypes2.default.any,
    groupTitleComponent: _propTypes2.default.element,
    groupSubTitle: _propTypes2.default.string,
    groupTitle: _propTypes2.default.string,
    height: _propTypes2.default.number,
    horizontal: _propTypes2.default.bool,
    invert: _propTypes2.default.bool,
    labels: _propTypes2.default.func,
    legendComponent: _propTypes2.default.element,
    legendItemsPerRow: _propTypes2.default.number,
    legendOrientation: _propTypes2.default.oneOf(['horizontal', 'vertical'])
  };
  (0, _hoistNonReactStatics2.default)(ChartBullet, _victory.VictoryChart);
});
//# sourceMappingURL=ChartBullet.js.map