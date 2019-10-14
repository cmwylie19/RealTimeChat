(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "../ChartContainer", "../ChartLabel", "../ChartTheme", "../ChartUtils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("../ChartContainer"), require("../ChartLabel"), require("../ChartTheme"), require("../ChartUtils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.ChartContainer, global.ChartLabel, global.ChartTheme, global.ChartUtils);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _ChartContainer, _ChartLabel, _ChartTheme, _ChartUtils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ChartBulletTitle = undefined;

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
  const ChartBulletTitle = exports.ChartBulletTitle = _ref => {
    let {
      ariaDesc,
      ariaTitle,
      capHeight = 1.1,
      horizontal = true,
      legendPosition = 'bottom',
      padding,
      standalone = true,
      subTitleComponent = React.createElement(_ChartLabel.ChartLabel, null),
      subTitle,
      themeColor,
      themeVariant,
      title,
      titleComponent = React.createElement(_ChartLabel.ChartLabel, null),
      titlePosition,
      // destructure last
      theme = (0, _ChartUtils.getBulletTheme)(themeColor, themeVariant),
      height = horizontal ? theme.chart.height : theme.chart.width,
      width = horizontal ? theme.chart.width : theme.chart.height
    } = _ref,
        rest = _objectWithoutProperties(_ref, ["ariaDesc", "ariaTitle", "capHeight", "horizontal", "legendPosition", "padding", "standalone", "subTitleComponent", "subTitle", "themeColor", "themeVariant", "title", "titleComponent", "titlePosition", "theme", "height", "width"]);

    const chartSize = {
      height: horizontal ? theme.chart.height : height,
      width: horizontal ? width : theme.chart.height
    };
    const defaultPadding = {
      bottom: (0, _ChartUtils.getPaddingForSide)('bottom', padding, theme.chart.padding),
      left: (0, _ChartUtils.getPaddingForSide)('left', padding, theme.chart.padding),
      right: (0, _ChartUtils.getPaddingForSide)('right', padding, theme.chart.padding),
      top: (0, _ChartUtils.getPaddingForSide)('top', padding, theme.chart.padding)
    }; // Returns title

    const getTitle = () => {
      const showBoth = title && subTitle;
      let labelPosition = horizontal ? 'left' : 'bottom';

      if (titlePosition && titlePosition.includes('left') && horizontal) {
        labelPosition = titlePosition;
      } // The x and y calculations below are used to adjust the position of the title, based on padding and scale.
      // This ensures that when padding is adjusted, the title moves along with the chart's position.


      return React.cloneElement(titleComponent, _objectSpread({}, showBoth && {
        capHeight
      }, {
        style: [_ChartTheme.ChartBulletStyles.label.title, _ChartTheme.ChartBulletStyles.label.subTitle],
        text: showBoth ? [title, subTitle] : title,
        textAnchor: labelPosition === 'top-left' ? 'start' : horizontal ? 'end' : 'middle',
        verticalAnchor: labelPosition === 'top-left' ? 'end' : 'middle',
        // Adjust for padding
        x: horizontal ? (0, _ChartUtils.getBulletLabelX)({
          chartWidth: chartSize.width,
          dx: labelPosition === 'top-left' ? defaultPadding.left : defaultPadding.left - _ChartTheme.ChartCommonStyles.label.margin * 1.75,
          labelPosition: 'left',
          // skip 'bottom'
          legendPosition,
          svgWidth: width
        }) : defaultPadding.left * .5 + (defaultPadding.right * .5 - (defaultPadding.right - 50)) + _ChartTheme.ChartBulletStyles.qualitativeRangeWidth / 2,
        y: (0, _ChartUtils.getBulletLabelY)({
          chartHeight: chartSize.height,
          // Adjust for padding
          dy: labelPosition === 'top-left' ? defaultPadding.top * .5 + (defaultPadding.bottom * .5 - defaultPadding.bottom) + 58 - _ChartTheme.ChartCommonStyles.legend.margin + (showBoth ? 0 : 1) : horizontal ? defaultPadding.top * .5 + (defaultPadding.bottom * .5 - defaultPadding.bottom) : _ChartTheme.ChartCommonStyles.legend.margin * 2 - defaultPadding.bottom,
          labelPosition
        })
      }, titleComponent.props));
    };

    return standalone ? React.createElement(_ChartContainer.ChartContainer, {
      desc: ariaDesc,
      height: height,
      title: ariaTitle,
      width: width
    }, getTitle()) : React.createElement(React.Fragment, null, getTitle());
  };

  ChartBulletTitle.propTypes = {
    ariaDesc: _propTypes2.default.string,
    ariaTitle: _propTypes2.default.string,
    capHeight: _propTypes2.default.any,
    height: _propTypes2.default.number,
    horizontal: _propTypes2.default.bool,
    legendPosition: _propTypes2.default.oneOf(['bottom', 'bottom-left', 'right']),
    padding: _propTypes2.default.any,
    standalone: _propTypes2.default.bool,
    subTitle: _propTypes2.default.string,
    subTitleComponent: _propTypes2.default.element,
    theme: _propTypes2.default.any,
    themeColor: _propTypes2.default.string,
    themeVariant: _propTypes2.default.string,
    title: _propTypes2.default.string,
    titleComponent: _propTypes2.default.element,
    titlePosition: _propTypes2.default.oneOf(['left', 'top-left']),
    width: _propTypes2.default.number
  };
});
//# sourceMappingURL=ChartBulletTitle.js.map