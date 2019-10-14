(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "victory-core", "../ChartContainer", "../ChartLabel", "../ChartTheme", "../ChartUtils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("victory-core"), require("../ChartContainer"), require("../ChartLabel"), require("../ChartTheme"), require("../ChartUtils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.victoryCore, global.ChartContainer, global.ChartLabel, global.ChartTheme, global.ChartUtils);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _victoryCore, _ChartContainer, _ChartLabel, _ChartTheme, _ChartUtils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ChartBulletGroupTitle = undefined;

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
  const ChartBulletGroupTitle = exports.ChartBulletGroupTitle = _ref => {
    let {
      ariaDesc,
      ariaTitle,
      capHeight = 1.1,
      dividerComponent = React.createElement(_victoryCore.Line, null),
      padding,
      standalone = true,
      subTitleComponent = React.createElement(_ChartLabel.ChartLabel, null),
      subTitle,
      themeColor,
      themeVariant,
      title,
      titleComponent = React.createElement(_ChartLabel.ChartLabel, null),
      // destructure last
      theme = (0, _ChartUtils.getBulletGroupTitleTheme)(themeColor, themeVariant),
      height = theme.chart.height,
      width = theme.chart.width
    } = _ref,
        rest = _objectWithoutProperties(_ref, ["ariaDesc", "ariaTitle", "capHeight", "dividerComponent", "padding", "standalone", "subTitleComponent", "subTitle", "themeColor", "themeVariant", "title", "titleComponent", "theme", "height", "width"]);

    const defaultPadding = {
      bottom: (0, _ChartUtils.getPaddingForSide)('bottom', padding, theme.chart.padding),
      left: (0, _ChartUtils.getPaddingForSide)('left', padding, theme.chart.padding),
      right: (0, _ChartUtils.getPaddingForSide)('right', padding, theme.chart.padding),
      top: (0, _ChartUtils.getPaddingForSide)('top', padding, theme.chart.padding)
    };
    const labelPadding = {
      bottom: (0, _ChartUtils.getPaddingForSide)('bottom', padding, theme.legend.style.labels.padding),
      left: (0, _ChartUtils.getPaddingForSide)('left', padding, theme.legend.style.labels.padding),
      right: (0, _ChartUtils.getPaddingForSide)('right', padding, theme.legend.style.labels.padding),
      top: (0, _ChartUtils.getPaddingForSide)('top', padding, theme.legend.style.labels.padding)
    }; // Horizontal divider to render under the group title

    const getDivider = () => {
      const titleSize = (0, _ChartUtils.getLabelTextSize)({
        text: title,
        theme
      });
      const subTitleSize = (0, _ChartUtils.getLabelTextSize)({
        text: subTitle,
        theme
      });
      const dy = title && subTitle ? titleSize.height + subTitleSize.height + labelPadding.top + labelPadding.bottom : titleSize.height + labelPadding.top + labelPadding.bottom;
      return React.cloneElement(dividerComponent, _objectSpread({
        x1: defaultPadding.left,
        x2: width - defaultPadding.right,
        y1: defaultPadding.top + dy,
        y2: defaultPadding.top + dy,
        style: theme.line.style.data
      }, dividerComponent.props));
    }; // Returns title


    const getTitle = () => {
      const titleProps = titleComponent ? titleComponent.props : {};
      const showBoth = title && subTitle;
      return React.cloneElement(titleComponent, _objectSpread({}, showBoth && {
        capHeight
      }, {
        style: [_ChartTheme.ChartBulletStyles.label.groupTitle, _ChartTheme.ChartBulletStyles.label.subTitle],
        text: showBoth ? [title, subTitle] : title,
        textAnchor: 'middle',
        verticalAnchor: 'middle',
        x: (0, _ChartUtils.getBulletLabelX)({
          chartWidth: width,
          labelPosition: 'top'
        }),
        y: (0, _ChartUtils.getBulletLabelY)({
          chartHeight: height,
          dy: defaultPadding.top,
          labelPosition: 'top'
        })
      }, titleProps));
    };

    const groupTitle = Boolean(title) && React.createElement(React.Fragment, null, getTitle(), getDivider());
    return standalone ? React.createElement(_ChartContainer.ChartContainer, {
      desc: ariaDesc,
      height: height,
      title: ariaTitle,
      width: width
    }, groupTitle) : React.createElement(React.Fragment, null, groupTitle);
  };

  ChartBulletGroupTitle.propTypes = {
    ariaDesc: _propTypes2.default.string,
    ariaTitle: _propTypes2.default.string,
    capHeight: _propTypes2.default.any,
    dividerComponent: _propTypes2.default.element,
    height: _propTypes2.default.number,
    padding: _propTypes2.default.any,
    standalone: _propTypes2.default.bool,
    subTitle: _propTypes2.default.string,
    subTitleComponent: _propTypes2.default.element,
    theme: _propTypes2.default.any,
    themeColor: _propTypes2.default.string,
    themeVariant: _propTypes2.default.string,
    title: _propTypes2.default.string,
    titleComponent: _propTypes2.default.element,
    width: _propTypes2.default.number
  };
});
//# sourceMappingURL=ChartBulletGroupTitle.js.map