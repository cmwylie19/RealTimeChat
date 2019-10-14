(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "hoist-non-react-statics", "victory", "../ChartContainer", "../ChartPoint", "../ChartUtils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("hoist-non-react-statics"), require("victory"), require("../ChartContainer"), require("../ChartPoint"), require("../ChartUtils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.hoistNonReactStatics, global.victory, global.ChartContainer, global.ChartPoint, global.ChartUtils);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _hoistNonReactStatics, _victory, _ChartContainer, _ChartPoint, _ChartUtils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ChartLegend = exports.ChartLegendRowGutter = exports.ChartLegendPosition = exports.ChartLegendOrientation = undefined;

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

  let ChartLegendOrientation = exports.ChartLegendOrientation = undefined;

  (function (ChartLegendOrientation) {
    ChartLegendOrientation["horizontal"] = "horizontal";
    ChartLegendOrientation["vertical"] = "vertical";
  })(ChartLegendOrientation || (exports.ChartLegendOrientation = ChartLegendOrientation = {}));

  let ChartLegendPosition = exports.ChartLegendPosition = undefined;

  (function (ChartLegendPosition) {
    ChartLegendPosition["bottom"] = "bottom";
    ChartLegendPosition["bottomLeft"] = "bottom-left";
    ChartLegendPosition["right"] = "right";
  })(ChartLegendPosition || (exports.ChartLegendPosition = ChartLegendPosition = {}));

  let ChartLegendRowGutter = exports.ChartLegendRowGutter = undefined;
  /**
   * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
   */

  (function (ChartLegendRowGutter) {
    ChartLegendRowGutter["bottom"] = "bottom";
    ChartLegendRowGutter["top"] = "top";
  })(ChartLegendRowGutter || (exports.ChartLegendRowGutter = ChartLegendRowGutter = {}));

  const ChartLegend = exports.ChartLegend = _ref => {
    let {
      containerComponent = React.createElement(_ChartContainer.ChartContainer, null),
      dataComponent = React.createElement(_ChartPoint.ChartPoint, null),
      responsive = true,
      themeColor,
      themeVariant,
      // destructure last
      theme = (0, _ChartUtils.getTheme)(themeColor, themeVariant)
    } = _ref,
        rest = _objectWithoutProperties(_ref, ["containerComponent", "dataComponent", "responsive", "themeColor", "themeVariant", "theme"]); // Clone so users can override container props


    const container = React.cloneElement(containerComponent, _objectSpread({
      responsive,
      theme
    }, containerComponent.props));
    return React.createElement(_victory.VictoryLegend, _extends({
      containerComponent: container,
      dataComponent: dataComponent,
      theme: theme
    }, rest));
  }; // Note: VictoryLegend.role must be hoisted, but getBaseProps causes error with ChartVoronoiContainer


  ChartLegend.propTypes = {
    borderComponent: _propTypes2.default.element,
    borderPadding: _propTypes2.default.any,
    centerTitle: _propTypes2.default.bool,
    colorScale: _propTypes2.default.any,
    containerComponent: _propTypes2.default.element,
    data: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      name: _propTypes2.default.string,
      symbol: _propTypes2.default.shape({
        fill: _propTypes2.default.string,
        type: _propTypes2.default.string
      })
    })),
    dataComponent: _propTypes2.default.element,
    eventKey: _propTypes2.default.oneOfType([_propTypes2.default.any, _propTypes2.default.arrayOf(_propTypes2.default.string)]),
    events: _propTypes2.default.arrayOf(_propTypes2.default.any),
    externalEventMutations: _propTypes2.default.arrayOf(_propTypes2.default.any),
    groupComponent: _propTypes2.default.element,
    gutter: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({
      left: _propTypes2.default.number.isRequired,
      right: _propTypes2.default.number.isRequired
    })]),
    height: _propTypes2.default.number,
    itemsPerRow: _propTypes2.default.number,
    labelComponent: _propTypes2.default.element,
    orientation: _propTypes2.default.oneOf(['horizontal', 'vertical']),
    padding: _propTypes2.default.any,
    responsive: _propTypes2.default.bool,
    rowGutter: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.any]),
    sharedEvents: _propTypes2.default.any,
    standalone: _propTypes2.default.bool,
    style: _propTypes2.default.any,
    symbolSpacer: _propTypes2.default.number,
    theme: _propTypes2.default.any,
    themeColor: _propTypes2.default.string
  };
  (0, _hoistNonReactStatics2.default)(ChartLegend, _victory.VictoryLegend, {
    getBaseProps: true
  });
});
//# sourceMappingURL=ChartLegend.js.map