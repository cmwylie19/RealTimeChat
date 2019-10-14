"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChartDonutThreshold = exports.ChartDonutThresholdSubTitlePosition = exports.ChartDonutThresholdSortOrder = exports.ChartDonutThresholdLegendPosition = exports.ChartDonutThresholdLabelPosition = exports.ChartDonutThresholdLabelOrientation = exports.ChartDonutThresholdDonutOrientation = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _victory = require("victory");

var _victoryCore = require("victory-core");

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _ChartContainer = require("../ChartContainer");

var _ChartDonut = require("../ChartDonut");

var _ChartTheme = require("../ChartTheme");

var _ChartUtils = require("../ChartUtils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ChartDonutThresholdDonutOrientation;
exports.ChartDonutThresholdDonutOrientation = ChartDonutThresholdDonutOrientation;

(function (ChartDonutThresholdDonutOrientation) {
  ChartDonutThresholdDonutOrientation["left"] = "left";
  ChartDonutThresholdDonutOrientation["right"] = "right";
  ChartDonutThresholdDonutOrientation["top"] = "top";
})(ChartDonutThresholdDonutOrientation || (exports.ChartDonutThresholdDonutOrientation = ChartDonutThresholdDonutOrientation = {}));

var ChartDonutThresholdLabelOrientation;
exports.ChartDonutThresholdLabelOrientation = ChartDonutThresholdLabelOrientation;

(function (ChartDonutThresholdLabelOrientation) {
  ChartDonutThresholdLabelOrientation["horizontal"] = "horizontal";
  ChartDonutThresholdLabelOrientation["vertical"] = "vertical";
})(ChartDonutThresholdLabelOrientation || (exports.ChartDonutThresholdLabelOrientation = ChartDonutThresholdLabelOrientation = {}));

var ChartDonutThresholdLabelPosition;
exports.ChartDonutThresholdLabelPosition = ChartDonutThresholdLabelPosition;

(function (ChartDonutThresholdLabelPosition) {
  ChartDonutThresholdLabelPosition["centroid"] = "centroid";
  ChartDonutThresholdLabelPosition["endAngle"] = "endAngle";
  ChartDonutThresholdLabelPosition["startAngle"] = "startAngle";
})(ChartDonutThresholdLabelPosition || (exports.ChartDonutThresholdLabelPosition = ChartDonutThresholdLabelPosition = {}));

var ChartDonutThresholdLegendPosition;
exports.ChartDonutThresholdLegendPosition = ChartDonutThresholdLegendPosition;

(function (ChartDonutThresholdLegendPosition) {
  ChartDonutThresholdLegendPosition["bottom"] = "bottom";
  ChartDonutThresholdLegendPosition["right"] = "right";
})(ChartDonutThresholdLegendPosition || (exports.ChartDonutThresholdLegendPosition = ChartDonutThresholdLegendPosition = {}));

var ChartDonutThresholdSortOrder;
exports.ChartDonutThresholdSortOrder = ChartDonutThresholdSortOrder;

(function (ChartDonutThresholdSortOrder) {
  ChartDonutThresholdSortOrder["ascending"] = "ascending";
  ChartDonutThresholdSortOrder["descending"] = "descending";
})(ChartDonutThresholdSortOrder || (exports.ChartDonutThresholdSortOrder = ChartDonutThresholdSortOrder = {}));

var ChartDonutThresholdSubTitlePosition;
/**
 * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
 */

exports.ChartDonutThresholdSubTitlePosition = ChartDonutThresholdSubTitlePosition;

(function (ChartDonutThresholdSubTitlePosition) {
  ChartDonutThresholdSubTitlePosition["bottom"] = "bottom";
  ChartDonutThresholdSubTitlePosition["center"] = "center";
  ChartDonutThresholdSubTitlePosition["right"] = "right";
})(ChartDonutThresholdSubTitlePosition || (exports.ChartDonutThresholdSubTitlePosition = ChartDonutThresholdSubTitlePosition = {}));

var ChartDonutThreshold = function ChartDonutThreshold(_ref) {
  var _ref$allowTooltip = _ref.allowTooltip,
      allowTooltip = _ref$allowTooltip === void 0 ? true : _ref$allowTooltip,
      ariaDesc = _ref.ariaDesc,
      ariaTitle = _ref.ariaTitle,
      children = _ref.children,
      _ref$constrainToVisib = _ref.constrainToVisibleArea,
      constrainToVisibleArea = _ref$constrainToVisib === void 0 ? false : _ref$constrainToVisib,
      _ref$containerCompone = _ref.containerComponent,
      containerComponent = _ref$containerCompone === void 0 ? React.createElement(_ChartContainer.ChartContainer, null) : _ref$containerCompone,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      _ref$invert = _ref.invert,
      invert = _ref$invert === void 0 ? false : _ref$invert,
      _ref$labels = _ref.labels,
      labels = _ref$labels === void 0 ? [] : _ref$labels,
      _ref$legendPosition = _ref.legendPosition,
      legendPosition = _ref$legendPosition === void 0 ? _ChartTheme.ChartCommonStyles.legend.position : _ref$legendPosition,
      padding = _ref.padding,
      radius = _ref.radius,
      _ref$standalone = _ref.standalone,
      standalone = _ref$standalone === void 0 ? true : _ref$standalone,
      _ref$subTitlePosition = _ref.subTitlePosition,
      subTitlePosition = _ref$subTitlePosition === void 0 ? _ChartTheme.ChartDonutStyles.label.subTitlePosition : _ref$subTitlePosition,
      themeColor = _ref.themeColor,
      themeVariant = _ref.themeVariant,
      x = _ref.x,
      y = _ref.y,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? (0, _ChartUtils.getDonutThresholdStaticTheme)(themeColor, themeVariant, invert) : _ref$theme,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? theme.pie.height : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? theme.pie.width : _ref$width,
      rest = _objectWithoutProperties(_ref, ["allowTooltip", "ariaDesc", "ariaTitle", "children", "constrainToVisibleArea", "containerComponent", "data", "invert", "labels", "legendPosition", "padding", "radius", "standalone", "subTitlePosition", "themeColor", "themeVariant", "x", "y", "theme", "height", "width"]);

  var defaultPadding = {
    bottom: (0, _ChartUtils.getPaddingForSide)('bottom', padding, theme.pie.padding),
    left: (0, _ChartUtils.getPaddingForSide)('left', padding, theme.pie.padding),
    right: (0, _ChartUtils.getPaddingForSide)('right', padding, theme.pie.padding),
    top: (0, _ChartUtils.getPaddingForSide)('top', padding, theme.pie.padding)
  };

  var chartRadius = radius | _victoryCore.Helpers.getRadius({
    height: height,
    width: width,
    padding: defaultPadding
  }); // Returns computed data representing pie chart slices


  var getComputedData = function getComputedData() {
    // Format and sort data. Sorting ensures thresholds are displayed in the correct order and simplifies calculations.
    var datum = _victoryCore.Data.formatData(data, _objectSpread({
      x: x,
      y: y
    }, rest), ['x', 'y']).sort(function (a, b) {
      return a._y - b._y;
    }); // Data must be offset so that the sum of all data point y-values (including the final slice) == 100.


    var _datum$reduce = datum.reduce(function (acc, dataPoint) {
      return [dataPoint._y, // Set the previous value to current y value
      [].concat(_toConsumableArray(acc[1]), [{
        x: dataPoint._x,
        // Conditionally add x property only if it is in the original data object
        y: dataPoint._y - acc[0] // Must be offset by previous value

      }])];
    }, [0, []]),
        _datum$reduce2 = _slicedToArray(_datum$reduce, 2),
        prev = _datum$reduce2[0],
        computedData = _datum$reduce2[1];

    return [].concat(_toConsumableArray(computedData), [{
      y: prev ? 100 - prev : 0
    }]);
  }; // Render dynamic utilization donut cart


  var renderChildren = function renderChildren() {
    return React.Children.toArray(children).map(function (child, index) {
      if (child.props) {
        var _child$props = child.props,
            childData = _child$props.data,
            childProps = _objectWithoutProperties(_child$props, ["data"]);

        var datum = _victoryCore.Data.formatData([childData], childProps, ['x', 'y']); // Format child data independently of this component's props


        var dynamicTheme = childProps.theme || (0, _ChartUtils.getDonutThresholdDynamicTheme)(childProps.themeColor || themeColor, childProps.themeVariant || themeVariant);
        return React.cloneElement(child, _objectSpread({
          constrainToVisibleArea: constrainToVisibleArea,
          data: childData,
          endAngle: 360 * (datum[0]._y ? datum[0]._y / 100 : 0),
          height: height,
          invert: invert,
          key: "pf-chart-donut-utilization-".concat(index),
          legendPosition: childProps.legendPosition || legendPosition,
          padding: defaultPadding,
          radius: chartRadius - 14,
          // Donut utilization radius is threshold radius minus 14px spacing
          showStatic: false,
          standalone: false,
          subTitlePosition: childProps.subTitlePosition || subTitlePosition,
          theme: dynamicTheme,
          width: width
        }, childProps));
      }

      return child;
    });
  }; // Static threshold donut chart


  var chart = React.createElement(_ChartDonut.ChartDonut, _extends({
    allowTooltip: allowTooltip,
    constrainToVisibleArea: constrainToVisibleArea,
    data: getComputedData(),
    height: height,
    labels: labels,
    padding: defaultPadding,
    standalone: false,
    theme: theme,
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

  return standalone ? React.createElement(StandaloneContainer, null, chart, renderChildren()) : React.createElement(React.Fragment, null, chart, renderChildren());
}; // Note: VictoryPie.role must be hoisted


exports.ChartDonutThreshold = ChartDonutThreshold;
ChartDonutThreshold.propTypes = {
  allowTooltip: _propTypes["default"].bool,
  animate: _propTypes["default"].any,
  ariaDesc: _propTypes["default"].string,
  ariaTitle: _propTypes["default"].string,
  categories: _propTypes["default"].any,
  children: _propTypes["default"].element,
  colorScale: _propTypes["default"].any,
  constrainToVisibleArea: _propTypes["default"].bool,
  containerComponent: _propTypes["default"].element,
  cornerRadius: _propTypes["default"].number,
  data: _propTypes["default"].arrayOf(_propTypes["default"].any),
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
  labelRadius: _propTypes["default"].number,
  labels: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].string), _propTypes["default"].func]),
  legendPosition: _propTypes["default"].oneOf(['bottom', 'right']),
  name: _propTypes["default"].string
};
(0, _hoistNonReactStatics["default"])(ChartDonutThreshold, _victory.VictoryPie);
//# sourceMappingURL=ChartDonutThreshold.js.map