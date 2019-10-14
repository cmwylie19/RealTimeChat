"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionsMenuItem = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _reactStyles = require("@patternfly/react-styles");

var _optionsMenu = _interopRequireDefault(require("@patternfly/react-styles/css/components/OptionsMenu/options-menu"));

var _Dropdown = require("../Dropdown");

var _reactIcons = require("@patternfly/react-icons");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var OptionsMenuItem = function OptionsMenuItem(_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$isSelected = _ref.isSelected,
      isSelected = _ref$isSelected === void 0 ? false : _ref$isSelected,
      _ref$onSelect = _ref.onSelect,
      onSelect = _ref$onSelect === void 0 ? function () {
    return null;
  } : _ref$onSelect,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? '' : _ref$id,
      isDisabled = _ref.isDisabled,
      props = _objectWithoutProperties(_ref, ["children", "isSelected", "onSelect", "id", "isDisabled"]);

  return React.createElement(_Dropdown.DropdownItem, _extends({
    id: id,
    component: "button",
    isDisabled: isDisabled,
    onClick: function onClick(event) {
      return onSelect(event);
    }
  }, isDisabled && {
    'aria-disabled': true
  }, props), children, React.createElement("i", {
    className: (0, _reactStyles.css)(_optionsMenu["default"].optionsMenuMenuItemIcon),
    "aria-hidden": true,
    hidden: !isSelected
  }, React.createElement(_reactIcons.CheckIcon, null)));
};

exports.OptionsMenuItem = OptionsMenuItem;
OptionsMenuItem.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  isSelected: _propTypes["default"].bool,
  isDisabled: _propTypes["default"].bool,
  onSelect: _propTypes["default"].func,
  id: _propTypes["default"].string
};
//# sourceMappingURL=OptionsMenuItem.js.map