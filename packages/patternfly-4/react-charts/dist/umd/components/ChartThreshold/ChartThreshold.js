(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "hoist-non-react-statics", "victory", "../ChartLine", "../ChartUtils/chart-theme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("hoist-non-react-statics"), require("victory"), require("../ChartLine"), require("../ChartUtils/chart-theme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.hoistNonReactStatics, global.victory, global.ChartLine, global.chartTheme);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _hoistNonReactStatics, _victory, _ChartLine, _chartTheme) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ChartThreshold = undefined;

  var React = _interopRequireWildcard(_react);

  var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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

  const ChartThreshold = exports.ChartThreshold = _ref => {
    let {
      themeColor,
      themeVariant,
      style
    } = _ref,
        rest = _objectWithoutProperties(_ref, ["themeColor", "themeVariant", "style"]);

    const theme = (0, _chartTheme.getThresholdTheme)(themeColor, themeVariant);
    return React.createElement(_ChartLine.ChartLine, _extends({}, rest, {
      theme: theme
    }));
  }; // Note: VictoryPie.role must be hoisted


  (0, _hoistNonReactStatics2.default)(ChartThreshold, _victory.VictoryLine);
});
//# sourceMappingURL=ChartThreshold.js.map