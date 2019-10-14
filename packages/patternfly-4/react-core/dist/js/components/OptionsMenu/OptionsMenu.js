"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionsMenu = exports.OptionsMenuDirection = exports.OptionsMenuPosition = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _optionsMenu = _interopRequireDefault(require("@patternfly/react-styles/css/components/OptionsMenu/options-menu"));

var _Dropdown = require("../Dropdown");

var _DropdownWithContext = require("../Dropdown/DropdownWithContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var OptionsMenuPosition;
exports.OptionsMenuPosition = OptionsMenuPosition;

(function (OptionsMenuPosition) {
  OptionsMenuPosition["right"] = "right";
  OptionsMenuPosition["left"] = "left";
})(OptionsMenuPosition || (exports.OptionsMenuPosition = OptionsMenuPosition = {}));

var OptionsMenuDirection;
exports.OptionsMenuDirection = OptionsMenuDirection;

(function (OptionsMenuDirection) {
  OptionsMenuDirection["up"] = "up";
  OptionsMenuDirection["down"] = "down";
})(OptionsMenuDirection || (exports.OptionsMenuDirection = OptionsMenuDirection = {}));

var OptionsMenu = function OptionsMenu(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      menuItems = _ref.menuItems,
      toggle = _ref.toggle,
      _ref$isText = _ref.isText,
      isText = _ref$isText === void 0 ? false : _ref$isText,
      _ref$isGrouped = _ref.isGrouped,
      isGrouped = _ref$isGrouped === void 0 ? false : _ref$isGrouped,
      id = _ref.id,
      ref = _ref.ref,
      props = _objectWithoutProperties(_ref, ["className", "menuItems", "toggle", "isText", "isGrouped", "id", "ref"]);

  return React.createElement(_Dropdown.DropdownContext.Provider, {
    value: {
      id: id,
      onSelect: function onSelect() {
        return undefined;
      },
      toggleIconClass: _optionsMenu["default"].optionsMenuToggleIcon,
      toggleTextClass: _optionsMenu["default"].optionsMenuToggleText,
      menuClass: _optionsMenu["default"].optionsMenuMenu,
      itemClass: _optionsMenu["default"].optionsMenuMenuItem,
      toggleClass: isText ? _optionsMenu["default"].optionsMenuToggleButton : _optionsMenu["default"].optionsMenuToggle,
      baseClass: _optionsMenu["default"].optionsMenu,
      disabledClass: _optionsMenu["default"].modifiers.disabled,
      menuComponent: 'ul',
      baseComponent: 'div'
    }
  }, React.createElement(_DropdownWithContext.DropdownWithContext, _extends({}, props, {
    id: id,
    dropdownItems: menuItems,
    className: className,
    isGrouped: isGrouped,
    toggle: toggle
  })));
};

exports.OptionsMenu = OptionsMenu;
OptionsMenu.propTypes = {
  className: _propTypes["default"].string,
  id: _propTypes["default"].string.isRequired,
  menuItems: _propTypes["default"].arrayOf(_propTypes["default"].node).isRequired,
  toggle: _propTypes["default"].element.isRequired,
  isPlain: _propTypes["default"].bool,
  isOpen: _propTypes["default"].bool,
  isText: _propTypes["default"].bool,
  isGrouped: _propTypes["default"].bool,
  ariaLabelMenu: _propTypes["default"].string,
  position: _propTypes["default"].oneOf(['right', 'left']),
  direction: _propTypes["default"].oneOf(['up', 'down'])
};
//# sourceMappingURL=OptionsMenu.js.map