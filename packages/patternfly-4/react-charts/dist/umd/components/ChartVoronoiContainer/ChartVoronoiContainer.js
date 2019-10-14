(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "hoist-non-react-statics", "victory", "../ChartTooltip", "../ChartUtils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("hoist-non-react-statics"), require("victory"), require("../ChartTooltip"), require("../ChartUtils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.hoistNonReactStatics, global.victory, global.ChartTooltip, global.ChartUtils);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _hoistNonReactStatics, _victory, _ChartTooltip, _ChartUtils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ChartVoronoiContainer = exports.ChartVoronoiDimension = undefined;

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

  let ChartVoronoiDimension = exports.ChartVoronoiDimension = undefined;
  /**
   * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
   */

  (function (ChartVoronoiDimension) {
    ChartVoronoiDimension["x"] = "x";
    ChartVoronoiDimension["y"] = "y";
  })(ChartVoronoiDimension || (exports.ChartVoronoiDimension = ChartVoronoiDimension = {}));

  const ChartVoronoiContainer = exports.ChartVoronoiContainer = _ref => {
    let {
      className,
      allowTooltip = true,
      constrainToVisibleArea = false,
      themeColor,
      themeVariant,
      // destructure last
      theme = (0, _ChartUtils.getTheme)(themeColor, themeVariant),
      labelComponent = allowTooltip ? React.createElement(_ChartTooltip.ChartTooltip, null) : undefined
    } = _ref,
        rest = _objectWithoutProperties(_ref, ["className", "allowTooltip", "constrainToVisibleArea", "themeColor", "themeVariant", "theme", "labelComponent"]);

    const chartClassName = (0, _ChartUtils.getClassName)({
      className
    });
    const chartLabelComponent = React.cloneElement(labelComponent, _objectSpread({
      constrainToVisibleArea,
      theme
    }, labelComponent.props)); // Note: theme is required by voronoiContainerMixin, but @types/victory is missing a prop type
    // @ts-ignore

    return React.createElement(_victory.VictoryVoronoiContainer, _extends({
      className: chartClassName,
      labelComponent: chartLabelComponent,
      theme: theme
    }, rest));
  };

  ChartVoronoiContainer.propTypes = {
    activateData: _propTypes2.default.bool,
    activateLabels: _propTypes2.default.bool,
    allowTooltip: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    constrainToVisibleArea: _propTypes2.default.bool,
    disable: _propTypes2.default.bool,
    labels: _propTypes2.default.func,
    labelComponent: _propTypes2.default.element,
    mouseFollowTooltips: _propTypes2.default.bool,
    onActivated: _propTypes2.default.func,
    onDeactivated: _propTypes2.default.func,
    radius: _propTypes2.default.number,
    responsive: _propTypes2.default.bool,
    style: _propTypes2.default.any,
    theme: _propTypes2.default.any,
    themeColor: _propTypes2.default.string,
    themeVariant: _propTypes2.default.string,
    voronoiBlacklist: _propTypes2.default.arrayOf(_propTypes2.default.string),
    voronoiDimension: _propTypes2.default.oneOf(['x', 'y']),
    voronoiPadding: _propTypes2.default.number
  };
  ChartVoronoiContainer.defaultProps = _victory.VictoryVoronoiContainer.defaultProps; // Note: VictoryVoronoiContainer.defaultEvents & VictoryContainer.role must be hoisted

  (0, _hoistNonReactStatics2.default)(ChartVoronoiContainer, _victory.VictoryVoronoiContainer);
});
//# sourceMappingURL=ChartVoronoiContainer.js.map