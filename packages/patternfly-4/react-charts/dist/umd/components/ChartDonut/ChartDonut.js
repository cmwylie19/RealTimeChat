(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "hoist-non-react-statics", "victory", "victory-core", "../ChartUtils/chart-theme", "../ChartContainer", "../ChartLabel", "../ChartPie", "../ChartTheme", "../ChartUtils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("hoist-non-react-statics"), require("victory"), require("victory-core"), require("../ChartUtils/chart-theme"), require("../ChartContainer"), require("../ChartLabel"), require("../ChartPie"), require("../ChartTheme"), require("../ChartUtils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.hoistNonReactStatics, global.victory, global.victoryCore, global.chartTheme, global.ChartContainer, global.ChartLabel, global.ChartPie, global.ChartTheme, global.ChartUtils);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _hoistNonReactStatics, _victory, _victoryCore, _chartTheme, _ChartContainer, _ChartLabel, _ChartPie, _ChartTheme, _ChartUtils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ChartDonut = exports.ChartDonutSubTitlePosition = exports.ChartDonutSortOrder = exports.ChartDonutLabelPosition = undefined;

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

  let ChartDonutLabelPosition = exports.ChartDonutLabelPosition = undefined;

  (function (ChartDonutLabelPosition) {
    ChartDonutLabelPosition["centroid"] = "centroid";
    ChartDonutLabelPosition["endAngle"] = "endAngle";
    ChartDonutLabelPosition["startAngle"] = "startAngle";
  })(ChartDonutLabelPosition || (exports.ChartDonutLabelPosition = ChartDonutLabelPosition = {}));

  let ChartDonutSortOrder = exports.ChartDonutSortOrder = undefined;

  (function (ChartDonutSortOrder) {
    ChartDonutSortOrder["ascending"] = "ascending";
    ChartDonutSortOrder["descending"] = "descending";
  })(ChartDonutSortOrder || (exports.ChartDonutSortOrder = ChartDonutSortOrder = {}));

  let ChartDonutSubTitlePosition = exports.ChartDonutSubTitlePosition = undefined;
  /**
   * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
   */

  (function (ChartDonutSubTitlePosition) {
    ChartDonutSubTitlePosition["bottom"] = "bottom";
    ChartDonutSubTitlePosition["center"] = "center";
    ChartDonutSubTitlePosition["right"] = "right";
  })(ChartDonutSubTitlePosition || (exports.ChartDonutSubTitlePosition = ChartDonutSubTitlePosition = {}));

  const ChartDonut = exports.ChartDonut = _ref => {
    let {
      allowTooltip = true,
      ariaDesc,
      ariaTitle,
      capHeight = 1.1,
      containerComponent = React.createElement(_ChartContainer.ChartContainer, null),
      innerRadius,
      legendPosition = _ChartTheme.ChartCommonStyles.legend.position,
      padding,
      radius,
      standalone = true,
      subTitle,
      subTitleComponent = React.createElement(_ChartLabel.ChartLabel, null),
      subTitlePosition = _ChartTheme.ChartDonutStyles.label.subTitlePosition,
      themeColor,
      themeVariant,
      title,
      titleComponent = React.createElement(_ChartLabel.ChartLabel, null),
      // destructure last
      theme = (0, _chartTheme.getDonutTheme)(themeColor, themeVariant),
      height = theme.pie.height,
      width = theme.pie.width
    } = _ref,
        rest = _objectWithoutProperties(_ref, ["allowTooltip", "ariaDesc", "ariaTitle", "capHeight", "containerComponent", "innerRadius", "legendPosition", "padding", "radius", "standalone", "subTitle", "subTitleComponent", "subTitlePosition", "themeColor", "themeVariant", "title", "titleComponent", "theme", "height", "width"]);

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
    const chartInnerRadius = innerRadius ? innerRadius : chartRadius - 9; // Todo: Add pf-core variable
    // Returns subtitle

    const getSubTitle = () => {
      if (!subTitle || subTitlePosition === ChartDonutSubTitlePosition.center) {
        return null;
      }

      const subTitleProps = subTitleComponent.props ? subTitleComponent.props : {};
      return React.cloneElement(subTitleComponent, _objectSpread({
        style: _ChartTheme.ChartDonutStyles.label.subTitle,
        text: subTitle,
        textAnchor: subTitlePosition === 'right' ? 'start' : 'middle',
        verticalAnchor: 'middle',
        x: (0, _ChartUtils.getPieLabelX)({
          height,
          labelPosition: subTitlePosition,
          legendPosition,
          padding: defaultPadding,
          width
        }),
        y: (0, _ChartUtils.getPieLabelY)({
          height,
          labelPosition: subTitlePosition,
          padding: defaultPadding,
          width
        })
      }, subTitleProps));
    }; // Returns title


    const getTitle = () => {
      if (!title) {
        return null;
      }

      const titleProps = titleComponent ? titleComponent.props : {};
      const showBoth = title && subTitle && subTitlePosition == ChartDonutSubTitlePosition.center;
      return React.cloneElement(titleComponent, _objectSpread({}, showBoth && {
        capHeight
      }, {
        style: [_ChartTheme.ChartDonutStyles.label.title, _ChartTheme.ChartDonutStyles.label.subTitle],
        text: showBoth ? [title, subTitle] : title,
        textAnchor: 'middle',
        verticalAnchor: 'middle',
        x: (0, _ChartUtils.getPieLabelX)({
          height,
          labelPosition: 'center',
          legendPosition,
          padding: defaultPadding,
          width
        }),
        y: (0, _ChartUtils.getPieLabelY)({
          height,
          labelPosition: 'center',
          padding: defaultPadding,
          width
        })
      }, titleProps));
    };

    const chart = React.createElement(_ChartPie.ChartPie, _extends({
      allowTooltip: allowTooltip,
      height: height,
      innerRadius: chartInnerRadius > 0 ? chartInnerRadius : 0,
      legendPosition: legendPosition,
      padding: padding,
      radius: chartRadius > 0 ? chartRadius : 0,
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

    return standalone ? React.createElement(StandaloneContainer, null, chart, getTitle(), getSubTitle()) : React.createElement(React.Fragment, null, chart, getTitle(), getSubTitle());
  }; // Note: VictoryPie.role must be hoisted


  ChartDonut.propTypes = {
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
    }))
  };
  (0, _hoistNonReactStatics2.default)(ChartDonut, _victory.VictoryPie);
});
//# sourceMappingURL=ChartDonut.js.map