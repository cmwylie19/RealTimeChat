"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChartDonutUtilization = exports.ChartDonutUtilizationSubTitlePosition = exports.ChartDonutUtilizationSortOrder = exports.ChartDonutUtilizationLegendPosition = exports.ChartDonutUtilizationLegendOrientation = exports.ChartDonutUtilizationLabelPosition = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _lodash = require("lodash");

var _victory = require("victory");

var _victoryCore = require("victory-core");

var _ChartContainer = require("../ChartContainer");

var _ChartDonut = require("../ChartDonut");

var _ChartTheme = require("../ChartTheme");

var _ChartUtils = require("../ChartUtils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ChartDonutUtilizationLabelPosition;
exports.ChartDonutUtilizationLabelPosition = ChartDonutUtilizationLabelPosition;

(function (ChartDonutUtilizationLabelPosition) {
  ChartDonutUtilizationLabelPosition["centroid"] = "centroid";
  ChartDonutUtilizationLabelPosition["endAngle"] = "endAngle";
  ChartDonutUtilizationLabelPosition["startAngle"] = "startAngle";
})(ChartDonutUtilizationLabelPosition || (exports.ChartDonutUtilizationLabelPosition = ChartDonutUtilizationLabelPosition = {}));

var ChartDonutUtilizationLegendOrientation;
exports.ChartDonutUtilizationLegendOrientation = ChartDonutUtilizationLegendOrientation;

(function (ChartDonutUtilizationLegendOrientation) {
  ChartDonutUtilizationLegendOrientation["horizontal"] = "horizontal";
  ChartDonutUtilizationLegendOrientation["vertical"] = "vertical";
})(ChartDonutUtilizationLegendOrientation || (exports.ChartDonutUtilizationLegendOrientation = ChartDonutUtilizationLegendOrientation = {}));

var ChartDonutUtilizationLegendPosition;
exports.ChartDonutUtilizationLegendPosition = ChartDonutUtilizationLegendPosition;

(function (ChartDonutUtilizationLegendPosition) {
  ChartDonutUtilizationLegendPosition["bottom"] = "bottom";
  ChartDonutUtilizationLegendPosition["right"] = "right";
})(ChartDonutUtilizationLegendPosition || (exports.ChartDonutUtilizationLegendPosition = ChartDonutUtilizationLegendPosition = {}));

var ChartDonutUtilizationSortOrder;
exports.ChartDonutUtilizationSortOrder = ChartDonutUtilizationSortOrder;

(function (ChartDonutUtilizationSortOrder) {
  ChartDonutUtilizationSortOrder["ascending"] = "ascending";
  ChartDonutUtilizationSortOrder["descending"] = "descending";
})(ChartDonutUtilizationSortOrder || (exports.ChartDonutUtilizationSortOrder = ChartDonutUtilizationSortOrder = {}));

var ChartDonutUtilizationSubTitlePosition;
/**
 * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
 */

exports.ChartDonutUtilizationSubTitlePosition = ChartDonutUtilizationSubTitlePosition;

(function (ChartDonutUtilizationSubTitlePosition) {
  ChartDonutUtilizationSubTitlePosition["bottom"] = "bottom";
  ChartDonutUtilizationSubTitlePosition["center"] = "center";
  ChartDonutUtilizationSubTitlePosition["right"] = "right";
})(ChartDonutUtilizationSubTitlePosition || (exports.ChartDonutUtilizationSubTitlePosition = ChartDonutUtilizationSubTitlePosition = {}));

var ChartDonutUtilization = function ChartDonutUtilization(_ref) {
  var _ref$allowTooltip = _ref.allowTooltip,
      allowTooltip = _ref$allowTooltip === void 0 ? true : _ref$allowTooltip,
      ariaDesc = _ref.ariaDesc,
      ariaTitle = _ref.ariaTitle,
      _ref$containerCompone = _ref.containerComponent,
      containerComponent = _ref$containerCompone === void 0 ? React.createElement(_ChartContainer.ChartContainer, null) : _ref$containerCompone,
      data = _ref.data,
      _ref$invert = _ref.invert,
      invert = _ref$invert === void 0 ? false : _ref$invert,
      padding = _ref.padding,
      _ref$showStatic = _ref.showStatic,
      showStatic = _ref$showStatic === void 0 ? true : _ref$showStatic,
      _ref$standalone = _ref.standalone,
      standalone = _ref$standalone === void 0 ? true : _ref$standalone,
      themeColor = _ref.themeColor,
      themeVariant = _ref.themeVariant,
      thresholds = _ref.thresholds,
      x = _ref.x,
      y = _ref.y,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? (0, _ChartUtils.getDonutUtilizationTheme)(themeColor, themeVariant) : _ref$theme,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? theme.pie.height : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? theme.pie.width : _ref$width,
      rest = _objectWithoutProperties(_ref, ["allowTooltip", "ariaDesc", "ariaTitle", "containerComponent", "data", "invert", "padding", "showStatic", "standalone", "themeColor", "themeVariant", "thresholds", "x", "y", "theme", "height", "width"]);

  // Returns computed data representing pie chart slices
  var getComputedData = function getComputedData() {
    var datum = getData();
    var computedData = [{
      x: datum[0]._x,
      y: datum[0]._y || 0
    }];

    if (showStatic) {
      computedData.push({
        y: datum[0]._x ? Math.abs(100 - datum[0]._y) : 100
      });
    }

    return computedData;
  };

  var getData = function getData() {
    var datum = [_objectSpread({}, data)];
    return _victoryCore.Data.formatData(datum, _objectSpread({
      x: x,
      y: y
    }, rest), ['x', 'y']).sort(function (a, b) {
      return a._y - b._y;
    });
  }; // Returns thresholds with default color scale


  var getDonutThresholds = function getDonutThresholds() {
    var result = [];

    if (thresholds) {
      // Ensure thresholds are in sorted order
      var sThresholds = (0, _lodash.orderBy)(thresholds, 'value', invert ? 'desc' : 'asc');
      var numColors = _ChartTheme.ChartDonutUtilizationStyles.thresholds.colorScale.length;

      for (var i = 0; i < sThresholds.length; i++) {
        result.push({
          color: sThresholds[i].color ? sThresholds[i].color : _ChartTheme.ChartDonutUtilizationStyles.thresholds.colorScale[i % numColors],
          value: sThresholds[i].value
        });
      }
    }

    return result;
  }; // Returns theme based on threshold and current value


  var getThresholdTheme = function getThresholdTheme() {
    var newTheme = _objectSpread({}, theme);

    if (data) {
      var datum = getData();
      var donutThresholds = getDonutThresholds();

      var mergeThemeProps = function mergeThemeProps(i) {
        // Merge just the first color of dynamic (blue, green, etc.) with static (gray) for expected colorScale
        newTheme.pie.colorScale[0] = donutThresholds[i].color;
        newTheme.legend.colorScale[0] = donutThresholds[i].color;
      };

      for (var i = 0; i < donutThresholds.length; i++) {
        if (invert) {
          if (datum[0]._y <= donutThresholds[i].value) {
            mergeThemeProps(i);
          }
        } else {
          if (datum[0]._y >= donutThresholds[i].value) {
            mergeThemeProps(i);
          }
        }
      }
    }

    return newTheme;
  }; // Dynamic donut chart


  var chart = React.createElement(_ChartDonut.ChartDonut, _extends({
    allowTooltip: allowTooltip,
    data: getComputedData(),
    height: height,
    padding: padding,
    standalone: false,
    theme: getThresholdTheme(),
    width: width
  }, rest)); // Clone so users can override container props

  var StandaloneContainer = function StandaloneContainer(_ref2) {
    var children = _ref2.children;
    return React.cloneElement(containerComponent, _objectSpread({
      desc: ariaDesc,
      height: height,
      title: ariaTitle,
      width: width,
      theme: theme
    }, containerComponent.props), children);
  };

  return standalone ? React.createElement(StandaloneContainer, null, chart) : React.createElement(React.Fragment, null, chart);
}; // Note: VictoryPie.role must be hoisted


exports.ChartDonutUtilization = ChartDonutUtilization;
ChartDonutUtilization.propTypes = {
  allowTooltip: _propTypes["default"].bool,
  animate: _propTypes["default"].any,
  ariaDesc: _propTypes["default"].string,
  ariaTitle: _propTypes["default"].string,
  capHeight: _propTypes["default"].any,
  categories: _propTypes["default"].any,
  colorScale: _propTypes["default"].any,
  constrainToVisibleArea: _propTypes["default"].bool,
  containerComponent: _propTypes["default"].element,
  cornerRadius: _propTypes["default"].number,
  data: _propTypes["default"].any,
  dataComponent: _propTypes["default"].element,
  desc: _propTypes["default"].string,
  endAngle: _propTypes["default"].number,
  eventKey: _propTypes["default"].any,
  events: _propTypes["default"].arrayOf(_propTypes["default"].any),
  externalEventMutations: _propTypes["default"].arrayOf(_propTypes["default"].any),
  groupComponent: _propTypes["default"].element,
  height: _propTypes["default"].number,
  innerRadius: _propTypes["default"].number,
  invert: _propTypes["default"].bool,
  labelComponent: _propTypes["default"].element,
  labelPosition: _propTypes["default"].oneOf(['startAngle', 'endAngle', 'centroid']),
  legendComponent: _propTypes["default"].element,
  legendData: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    name: _propTypes["default"].string,
    symbol: _propTypes["default"].shape({
      fill: _propTypes["default"].string,
      type: _propTypes["default"].string
    })
  }))
};
(0, _hoistNonReactStatics["default"])(ChartDonutUtilization, _victory.VictoryPie);
//# sourceMappingURL=ChartDonutUtilization.js.map