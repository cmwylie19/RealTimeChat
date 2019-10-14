"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApplicationLauncher = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _appLauncher = _interopRequireDefault(require("@patternfly/react-styles/css/components/AppLauncher/app-launcher"));

var _reactIcons = require("@patternfly/react-icons");

var _Dropdown = require("../Dropdown");

var _DropdownWithContext = require("../Dropdown/DropdownWithContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ApplicationLauncher =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ApplicationLauncher, _React$Component);

  function ApplicationLauncher() {
    _classCallCheck(this, ApplicationLauncher);

    return _possibleConstructorReturn(this, _getPrototypeOf(ApplicationLauncher).apply(this, arguments));
  }

  _createClass(ApplicationLauncher, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          ariaLabel = _this$props['aria-label'],
          isOpen = _this$props.isOpen,
          onToggle = _this$props.onToggle,
          toggleIcon = _this$props.toggleIcon,
          onSelect = _this$props.onSelect,
          isDisabled = _this$props.isDisabled,
          className = _this$props.className,
          isGrouped = _this$props.isGrouped,
          dropdownItems = _this$props.dropdownItems,
          items = _this$props.items,
          ref = _this$props.ref,
          props = _objectWithoutProperties(_this$props, ["aria-label", "isOpen", "onToggle", "toggleIcon", "onSelect", "isDisabled", "className", "isGrouped", "dropdownItems", "items", "ref"]);

      return React.createElement(_Dropdown.DropdownContext.Provider, {
        value: {
          onSelect: onSelect,
          menuClass: _appLauncher["default"].appLauncherMenu,
          itemClass: _appLauncher["default"].appLauncherMenuItem,
          toggleClass: _appLauncher["default"].appLauncherToggle,
          baseClass: _appLauncher["default"].appLauncher,
          baseComponent: 'nav',
          sectionClass: _appLauncher["default"].appLauncherGroup,
          sectionTitleClass: _appLauncher["default"].appLauncherGroupTitle,
          sectionComponent: 'section',
          disabledClass: _appLauncher["default"].modifiers.disabled,
          hoverClass: _appLauncher["default"].modifiers.hover,
          separatorClass: _appLauncher["default"].appLauncherSeparator
        }
      }, React.createElement(_DropdownWithContext.DropdownWithContext, _extends({}, props, {
        dropdownItems: items.length ? items : dropdownItems,
        isOpen: isOpen,
        className: className,
        "aria-label": ariaLabel,
        toggle: React.createElement(_Dropdown.DropdownToggle, {
          iconComponent: null,
          isOpen: isOpen,
          onToggle: onToggle,
          isDisabled: isDisabled,
          "aria-label": ariaLabel
        }, toggleIcon),
        isGrouped: isGrouped
      })));
    }
  }]);

  return ApplicationLauncher;
}(React.Component);

exports.ApplicationLauncher = ApplicationLauncher;

_defineProperty(ApplicationLauncher, "propTypes", {
  className: _propTypes["default"].string,
  direction: _propTypes["default"].any,
  dropdownItems: _propTypes["default"].arrayOf(_propTypes["default"].node),
  items: _propTypes["default"].arrayOf(_propTypes["default"].node),
  isDisabled: _propTypes["default"].bool,
  isOpen: _propTypes["default"].bool,
  position: _propTypes["default"].any,
  onSelect: _propTypes["default"].func,
  onToggle: _propTypes["default"].func,
  'aria-label': _propTypes["default"].string,
  isGrouped: _propTypes["default"].bool,
  toggleIcon: _propTypes["default"].node
});

_defineProperty(ApplicationLauncher, "defaultProps", {
  "className": '',
  "isDisabled": false,
  "direction": _Dropdown.DropdownDirection.down,
  "dropdownItems": [],
  "items": [],
  "isOpen": false,
  "position": _Dropdown.DropdownPosition.left,
  "onSelect": function onSelect(_event) {
    return undefined;
  },
  "onToggle": function onToggle(_value) {
    return undefined;
  },
  'aria-label': 'Application launcher',
  "isGrouped": false,
  "toggleIcon": React.createElement(_reactIcons.ThIcon, null)
});
//# sourceMappingURL=ApplicationLauncher.js.map