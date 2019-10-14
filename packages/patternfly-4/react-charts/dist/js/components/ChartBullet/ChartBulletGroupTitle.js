"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChartBulletGroupTitle = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _victoryCore = require("victory-core");

var _ChartContainer = require("../ChartContainer");

var _ChartLabel = require("../ChartLabel");

var _ChartTheme = require("../ChartTheme");

var _ChartUtils = require("../ChartUtils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ChartBulletGroupTitle = function ChartBulletGroupTitle(_ref) {
  var ariaDesc = _ref.ariaDesc,
      ariaTitle = _ref.ariaTitle,
      _ref$capHeight = _ref.capHeight,
      capHeight = _ref$capHeight === void 0 ? 1.1 : _ref$capHeight,
      _ref$dividerComponent = _ref.dividerComponent,
      dividerComponent = _ref$dividerComponent === void 0 ? React.createElement(_victoryCore.Line, null) : _ref$dividerComponent,
      padding = _ref.padding,
      _ref$standalone = _ref.standalone,
      standalone = _ref$standalone === void 0 ? true : _ref$standalone,
      _ref$subTitleComponen = _ref.subTitleComponent,
      subTitleComponent = _ref$subTitleComponen === void 0 ? React.createElement(_ChartLabel.ChartLabel, null) : _ref$subTitleComponen,
      subTitle = _ref.subTitle,
      themeColor = _ref.themeColor,
      themeVariant = _ref.themeVariant,
      title = _ref.title,
      _ref$titleComponent = _ref.titleComponent,
      titleComponent = _ref$titleComponent === void 0 ? React.createElement(_ChartLabel.ChartLabel, null) : _ref$titleComponent,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? (0, _ChartUtils.getBulletGroupTitleTheme)(themeColor, themeVariant) : _ref$theme,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? theme.chart.height : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? theme.chart.width : _ref$width,
      rest = _objectWithoutProperties(_ref, ["ariaDesc", "ariaTitle", "capHeight", "dividerComponent", "padding", "standalone", "subTitleComponent", "subTitle", "themeColor", "themeVariant", "title", "titleComponent", "theme", "height", "width"]);

  var defaultPadding = {
    bottom: (0, _ChartUtils.getPaddingForSide)('bottom', padding, theme.chart.padding),
    left: (0, _ChartUtils.getPaddingForSide)('left', padding, theme.chart.padding),
    right: (0, _ChartUtils.getPaddingForSide)('right', padding, theme.chart.padding),
    top: (0, _ChartUtils.getPaddingForSide)('top', padding, theme.chart.padding)
  };
  var labelPadding = {
    bottom: (0, _ChartUtils.getPaddingForSide)('bottom', padding, theme.legend.style.labels.padding),
    left: (0, _ChartUtils.getPaddingForSide)('left', padding, theme.legend.style.labels.padding),
    right: (0, _ChartUtils.getPaddingForSide)('right', padding, theme.legend.style.labels.padding),
    top: (0, _ChartUtils.getPaddingForSide)('top', padding, theme.legend.style.labels.padding)
  }; // Horizontal divider to render under the group title

  var getDivider = function getDivider() {
    var titleSize = (0, _ChartUtils.getLabelTextSize)({
      text: title,
      theme: theme
    });
    var subTitleSize = (0, _ChartUtils.getLabelTextSize)({
      text: subTitle,
      theme: theme
    });
    var dy = title && subTitle ? titleSize.height + subTitleSize.height + labelPadding.top + labelPadding.bottom : titleSize.height + labelPadding.top + labelPadding.bottom;
    return React.cloneElement(dividerComponent, _objectSpread({
      x1: defaultPadding.left,
      x2: width - defaultPadding.right,
      y1: defaultPadding.top + dy,
      y2: defaultPadding.top + dy,
      style: theme.line.style.data
    }, dividerComponent.props));
  }; // Returns title


  var getTitle = function getTitle() {
    var titleProps = titleComponent ? titleComponent.props : {};
    var showBoth = title && subTitle;
    return React.cloneElement(titleComponent, _objectSpread({}, showBoth && {
      capHeight: capHeight
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

  var groupTitle = Boolean(title) && React.createElement(React.Fragment, null, getTitle(), getDivider());
  return standalone ? React.createElement(_ChartContainer.ChartContainer, {
    desc: ariaDesc,
    height: height,
    title: ariaTitle,
    width: width
  }, groupTitle) : React.createElement(React.Fragment, null, groupTitle);
};

exports.ChartBulletGroupTitle = ChartBulletGroupTitle;
ChartBulletGroupTitle.propTypes = {
  ariaDesc: _propTypes["default"].string,
  ariaTitle: _propTypes["default"].string,
  capHeight: _propTypes["default"].any,
  dividerComponent: _propTypes["default"].element,
  height: _propTypes["default"].number,
  padding: _propTypes["default"].any,
  standalone: _propTypes["default"].bool,
  subTitle: _propTypes["default"].string,
  subTitleComponent: _propTypes["default"].element,
  theme: _propTypes["default"].any,
  themeColor: _propTypes["default"].string,
  themeVariant: _propTypes["default"].string,
  title: _propTypes["default"].string,
  titleComponent: _propTypes["default"].element,
  width: _propTypes["default"].number
};
//# sourceMappingURL=ChartBulletGroupTitle.js.map