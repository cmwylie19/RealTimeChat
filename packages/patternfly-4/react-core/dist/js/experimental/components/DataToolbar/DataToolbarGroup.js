"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataToolbarGroup = exports.DataToolbarGroupVariant = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _dataToolbar = _interopRequireDefault(require("@patternfly/react-styles/css/components/DataToolbar/data-toolbar"));

var _reactStyles = require("@patternfly/react-styles");

var _DataToolbarUtils = require("./DataToolbarUtils");

var _util = require("../../../helpers/util");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DataToolbarGroupVariant;
exports.DataToolbarGroupVariant = DataToolbarGroupVariant;

(function (DataToolbarGroupVariant) {
  DataToolbarGroupVariant["filter-group"] = "filter-group";
  DataToolbarGroupVariant["icon-button-group"] = "icon-button-group";
  DataToolbarGroupVariant["button-group"] = "button-group";
})(DataToolbarGroupVariant || (exports.DataToolbarGroupVariant = DataToolbarGroupVariant = {}));

var DataToolbarGroup = function DataToolbarGroup(_ref) {
  var _ref$breakpointMods = _ref.breakpointMods,
      breakpointMods = _ref$breakpointMods === void 0 ? [] : _ref$breakpointMods,
      _ref$spacers = _ref.spacers,
      spacers = _ref$spacers === void 0 ? [] : _ref$spacers,
      _ref$itemSpacers = _ref.itemSpacers,
      itemSpacers = _ref$itemSpacers === void 0 ? [] : _ref$itemSpacers,
      className = _ref.className,
      variant = _ref.variant,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["breakpointMods", "spacers", "itemSpacers", "className", "variant", "children"]);

  return React.createElement("div", _extends({
    className: (0, _reactStyles.css)(_dataToolbar["default"].dataToolbarGroup, variant && (0, _reactStyles.getModifier)(_dataToolbar["default"], variant), (0, _util.formatBreakpointMods)(breakpointMods, _dataToolbar["default"]), (0, _DataToolbarUtils.formatSpacers)(itemSpacers, 'pf-m-space-items'), (0, _DataToolbarUtils.formatSpacers)(spacers), className)
  }, props), children);
};

exports.DataToolbarGroup = DataToolbarGroup;
DataToolbarGroup.propTypes = {
  className: _propTypes["default"].string,
  variant: _propTypes["default"].oneOfType([_propTypes["default"].any, _propTypes["default"].oneOf(['filter-group']), _propTypes["default"].oneOf(['icon-button-group']), _propTypes["default"].oneOf(['button-group'])]),
  breakpointMods: _propTypes["default"].arrayOf(_propTypes["default"].any),
  spacers: _propTypes["default"].arrayOf(_propTypes["default"].any),
  itemSpacers: _propTypes["default"].arrayOf(_propTypes["default"].any),
  children: _propTypes["default"].node
};
//# sourceMappingURL=DataToolbarGroup.js.map