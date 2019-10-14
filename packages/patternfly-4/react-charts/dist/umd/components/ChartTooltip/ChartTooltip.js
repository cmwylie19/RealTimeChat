(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "hoist-non-react-statics", "victory", "../ChartUtils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("hoist-non-react-statics"), require("victory"), require("../ChartUtils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.hoistNonReactStatics, global.victory, global.ChartUtils);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _hoistNonReactStatics, _victory, _ChartUtils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ChartTooltip = undefined;

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
  const ChartTooltip = exports.ChartTooltip = _ref => {
    let {
      constrainToVisibleArea = false,
      themeColor,
      themeVariant,
      // destructure last
      theme = (0, _ChartUtils.getTheme)(themeColor, themeVariant)
    } = _ref,
        rest = _objectWithoutProperties(_ref, ["constrainToVisibleArea", "themeColor", "themeVariant", "theme"]); // Note: constrainToVisibleArea is valid, but @types/victory is missing a prop type
    // @ts-ignore


    return React.createElement(_victory.VictoryTooltip, _extends({
      constrainToVisibleArea: constrainToVisibleArea,
      theme: theme
    }, rest));
  }; // Note: VictoryTooltip.defaultEvents must be hoisted


  ChartTooltip.propTypes = {
    active: _propTypes2.default.bool,
    activateData: _propTypes2.default.bool,
    angle: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    center: _propTypes2.default.shape({
      x: _propTypes2.default.number.isRequired,
      y: _propTypes2.default.number.isRequired
    }),
    centerOffset: _propTypes2.default.shape({
      x: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.any]).isRequired,
      y: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.any]).isRequired
    }),
    constrainToVisibleArea: _propTypes2.default.bool,
    cornerRadius: _propTypes2.default.any,
    data: _propTypes2.default.arrayOf(_propTypes2.default.any),
    datum: _propTypes2.default.object,
    dx: _propTypes2.default.any,
    dy: _propTypes2.default.any,
    events: _propTypes2.default.object,
    flyoutComponent: _propTypes2.default.element,
    flyoutHeight: _propTypes2.default.any,
    flyoutStyle: _propTypes2.default.any,
    flyoutWidth: _propTypes2.default.any,
    groupComponent: _propTypes2.default.element,
    horizontal: _propTypes2.default.bool,
    index: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    labelComponent: _propTypes2.default.element,
    orientation: _propTypes2.default.any,
    pointerLength: _propTypes2.default.any,
    pointerOrientation: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['top']), _propTypes2.default.oneOf(['bottom']), _propTypes2.default.oneOf(['left']), _propTypes2.default.oneOf(['right']), _propTypes2.default.any]),
    pointerWidth: _propTypes2.default.any,
    renderInPortal: _propTypes2.default.bool
  };
  (0, _hoistNonReactStatics2.default)(ChartTooltip, _victory.VictoryTooltip);
});
//# sourceMappingURL=ChartTooltip.js.map