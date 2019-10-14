(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "hoist-non-react-statics", "victory", "./utils", "../ChartContainer", "../ChartScatter", "../ChartTheme", "../ChartTooltip", "../ChartUtils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("hoist-non-react-statics"), require("victory"), require("./utils"), require("../ChartContainer"), require("../ChartScatter"), require("../ChartTheme"), require("../ChartTooltip"), require("../ChartUtils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.hoistNonReactStatics, global.victory, global.utils, global.ChartContainer, global.ChartScatter, global.ChartTheme, global.ChartTooltip, global.ChartUtils);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _hoistNonReactStatics, _victory, _utils, _ChartContainer, _ChartScatter, _ChartTheme, _ChartTooltip, _ChartUtils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ChartBulletPrimaryDotMeasure = undefined;

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
  const ChartBulletPrimaryDotMeasure = exports.ChartBulletPrimaryDotMeasure = _ref => {
    let {
      ariaDesc,
      ariaTitle,
      constrainToVisibleArea = false,
      data,
      domain,
      horizontal = true,
      invert = false,
      labels,
      measureComponent = React.createElement(_ChartScatter.ChartScatter, null),
      padding,
      size = _ChartTheme.ChartBulletStyles.primaryDotMeasureSize,
      standalone = true,
      themeColor,
      themeVariant,
      y,
      y0,
      // destructure last
      theme = (0, _ChartUtils.getBulletPrimaryDotMeasureTheme)(themeColor, themeVariant),
      labelComponent = React.createElement(_ChartTooltip.ChartTooltip, null),
      height = theme.group.height,
      width = theme.group.width
    } = _ref,
        rest = _objectWithoutProperties(_ref, ["ariaDesc", "ariaTitle", "constrainToVisibleArea", "data", "domain", "horizontal", "invert", "labels", "measureComponent", "padding", "size", "standalone", "themeColor", "themeVariant", "y", "y0", "theme", "labelComponent", "height", "width"]);

    const computedData = (0, _utils.getPrimaryDotMeasureData)({
      data,
      invert,
      theme,
      y,
      y0
    }); // Label component
    //
    // Note: SVG height and width are provided by ChartBullet as a workaround to support constrainToVisibleArea

    const tooltip = React.cloneElement(labelComponent, _objectSpread({
      constrainToVisibleArea,
      dx: 0,
      dy: horizontal ? -size : 0,
      orientation: 'top'
    }, labelComponent.props));
    const measure = computedData.map((dataPoint, index) => {
      return React.cloneElement(measureComponent, _objectSpread({
        data: [_objectSpread({}, dataPoint)],
        domain,
        height,
        horizontal,
        key: `pf-chart-bullet-primary-dot-measure-${index}`,
        labelComponent: tooltip,
        labels,
        padding,
        size,
        standalone: false,
        style: {
          data: {
            fill: dataPoint._color
          }
        },
        theme,
        width
      }, measureComponent.props));
    });
    return standalone ? React.createElement(_ChartContainer.ChartContainer, {
      desc: ariaDesc,
      height: height,
      title: ariaTitle,
      width: width
    }, measure) : React.createElement(React.Fragment, null, measure);
  }; // Note: VictoryBar.role must be hoisted


  ChartBulletPrimaryDotMeasure.propTypes = {
    ariaDesc: _propTypes2.default.string,
    ariaTitle: _propTypes2.default.string,
    constrainToVisibleArea: _propTypes2.default.bool,
    data: _propTypes2.default.arrayOf(_propTypes2.default.any),
    domain: _propTypes2.default.any,
    height: _propTypes2.default.number,
    horizontal: _propTypes2.default.bool,
    invert: _propTypes2.default.bool,
    labelComponent: _propTypes2.default.element,
    labels: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.string), _propTypes2.default.func]),
    measureComponent: _propTypes2.default.element,
    padding: _propTypes2.default.any,
    size: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
    standalone: _propTypes2.default.bool,
    theme: _propTypes2.default.any,
    themeColor: _propTypes2.default.string,
    themeVariant: _propTypes2.default.string,
    width: _propTypes2.default.number,
    y: _propTypes2.default.any,
    y0: _propTypes2.default.any
  };
  (0, _hoistNonReactStatics2.default)(ChartBulletPrimaryDotMeasure, _victory.VictoryScatter);
});
//# sourceMappingURL=ChartBulletPrimaryDotMeasure.js.map