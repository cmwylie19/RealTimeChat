(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../../ChartTheme", "../../ChartUtils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../../ChartTheme"), require("../../ChartUtils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ChartTheme, global.ChartUtils);
    global.undefined = mod.exports;
  }
})(this, function (exports, _ChartTheme, _ChartUtils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.scaleSize = exports.scaleBarWidth = exports.getQualitativeRangeBarWidth = exports.getPrimarySegmentedMeasureWidth = exports.getPrimaryDotMeasureSize = exports.getComparativeMeasureWarningWidth = exports.getComparativeMeasureWidth = exports.getComparativeMeasureErrorWidth = undefined;

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

  const getComparativeMeasureErrorWidth = exports.getComparativeMeasureErrorWidth = ({
    height,
    horizontal,
    themeColor,
    themeVariant,
    width,
    // destructure last
    theme = (0, _ChartUtils.getBulletComparativeErrorMeasureTheme)(themeColor, themeVariant)
  }) => scaleBarWidth({
    defaultSize: theme.bar.height,
    height,
    horizontal,
    value: _ChartTheme.ChartBulletStyles.comparativeMeasureErrorWidth,
    width
  });

  const getComparativeMeasureWidth = exports.getComparativeMeasureWidth = ({
    height,
    horizontal,
    themeColor,
    themeVariant,
    width,
    // destructure last
    theme = (0, _ChartUtils.getBulletComparativeMeasureTheme)(themeColor, themeVariant)
  }) => scaleBarWidth({
    defaultSize: theme.bar.height,
    height,
    horizontal,
    value: _ChartTheme.ChartBulletStyles.comparativeMeasureWidth,
    width
  });

  const getComparativeMeasureWarningWidth = exports.getComparativeMeasureWarningWidth = ({
    height,
    horizontal,
    themeColor,
    themeVariant,
    width,
    // destructure last
    theme = (0, _ChartUtils.getBulletComparativeWarningMeasureTheme)(themeColor, themeVariant)
  }) => scaleBarWidth({
    defaultSize: theme.bar.height,
    height,
    horizontal,
    value: _ChartTheme.ChartBulletStyles.comparativeMeasureWarningWidth,
    width
  });

  const getPrimaryDotMeasureSize = exports.getPrimaryDotMeasureSize = ({
    height,
    horizontal,
    themeColor,
    themeVariant,
    width,
    // destructure last
    theme = (0, _ChartUtils.getBulletPrimaryDotMeasureTheme)(themeColor, themeVariant)
  }) => scaleSize({
    defaultSize: theme.group.height,
    height,
    horizontal,
    value: _ChartTheme.ChartBulletStyles.primaryDotMeasureSize,
    width
  });

  const getPrimarySegmentedMeasureWidth = exports.getPrimarySegmentedMeasureWidth = ({
    height,
    horizontal,
    themeColor,
    themeVariant,
    width,
    // destructure last
    theme = (0, _ChartUtils.getBulletPrimarySegmentedMeasureTheme)(themeColor, themeVariant)
  }) => scaleBarWidth({
    defaultSize: theme.group.height,
    height,
    horizontal,
    scale: .3,
    value: _ChartTheme.ChartBulletStyles.primarySegmentedMeasureWidth,
    width
  });

  const getQualitativeRangeBarWidth = exports.getQualitativeRangeBarWidth = ({
    height,
    horizontal,
    themeColor,
    themeVariant,
    width,
    // destructure last
    theme = (0, _ChartUtils.getBulletQualitativeRangeTheme)(themeColor, themeVariant)
  }) => scaleBarWidth({
    defaultSize: theme.group.height,
    height,
    horizontal,
    value: _ChartTheme.ChartBulletStyles.qualitativeRangeWidth,
    width
  });

  const scale = ({
    defaultSize,
    height,
    horizontal = true,
    scale = 1,
    value,
    width
  }) => horizontal ? height > defaultSize ? value + (height - defaultSize) * scale : value - (defaultSize - height) * scale : width > defaultSize ? value + (width - defaultSize) * scale : value - (defaultSize - width) * scale; // Scale bar width per the given size properties


  const scaleBarWidth = exports.scaleBarWidth = props => Math.max(scale(props), 0); // Scale size per the given size properties


  const scaleSize = exports.scaleSize = _ref => {
    let {
      value
    } = _ref,
        rest = _objectWithoutProperties(_ref, ["value"]);

    return Math.round(scale(_objectSpread({
      scale: 1 / value,
      value
    }, rest)));
  };
});
//# sourceMappingURL=chart-bullet-size.js.map