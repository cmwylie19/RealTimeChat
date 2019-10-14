"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InternalDropdownItem = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _reactStyles = require("@patternfly/react-styles");

var _dropdownConstants = require("./dropdownConstants");

var _constants = require("../../helpers/constants");

var _Tooltip = require("../Tooltip");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InternalDropdownItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InternalDropdownItem, _React$Component);

  function InternalDropdownItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InternalDropdownItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InternalDropdownItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "ref", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      // Detected key press on this item, notify the menu parent so that the appropriate
      // item can be focused
      if (event.keyCode === _constants.KEY_CODES.TAB) {
        return;
      }

      event.preventDefault();

      if (event.keyCode === _constants.KEY_CODES.ARROW_UP) {
        _this.props.context.keyHandler(_this.props.index, _constants.KEYHANDLER_DIRECTION.UP);
      } else if (event.keyCode === _constants.KEY_CODES.ARROW_DOWN) {
        _this.props.context.keyHandler(_this.props.index, _constants.KEYHANDLER_DIRECTION.DOWN);
      } else if (event.keyCode === _constants.KEY_CODES.ENTER) {
        var childNode = _this.ref.current && _this.ref.current.childNodes && _this.ref.current.childNodes.length ? _this.ref.current.childNodes[0] : _this.ref.current;

        if (childNode.click) {
          childNode.click();
        }
      }
    });

    return _this;
  }

  _createClass(InternalDropdownItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          context = _this$props.context,
          index = _this$props.index,
          isDisabled = _this$props.isDisabled,
          role = _this$props.role;
      context.sendRef(index, this.ref.current, isDisabled, role === 'separator');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          children = _this$props2.children,
          isHovered = _this$props2.isHovered,
          context = _this$props2.context,
          _onClick = _this$props2.onClick,
          component = _this$props2.component,
          role = _this$props2.role,
          isDisabled = _this$props2.isDisabled,
          index = _this$props2.index,
          href = _this$props2.href,
          tooltip = _this$props2.tooltip,
          tooltipProps = _this$props2.tooltipProps,
          additionalProps = _objectWithoutProperties(_this$props2, ["className", "children", "isHovered", "context", "onClick", "component", "role", "isDisabled", "index", "href", "tooltip", "tooltipProps"]);

      var Component = component;
      var isComponentReactElement = false;
      var classes;

      if (Component === 'a') {
        additionalProps['aria-disabled'] = isDisabled;
        additionalProps.tabIndex = isDisabled ? -1 : additionalProps.tabIndex;
      } else if (Component === 'button') {
        additionalProps.disabled = isDisabled;
        additionalProps.type = additionalProps.type || 'button';
      } else if (React.isValidElement(Component)) {
        // Render a custom wrapper component, for example router Link component
        // instead of our wrapper
        isComponentReactElement = true;
      }

      var renderWithTooltip = function renderWithTooltip(childNode) {
        return tooltip ? React.createElement(_Tooltip.Tooltip, _extends({
          content: tooltip
        }, tooltipProps), childNode) : childNode;
      };

      return React.createElement(_dropdownConstants.DropdownContext.Consumer, null, function (_ref) {
        var onSelect = _ref.onSelect,
            itemClass = _ref.itemClass,
            disabledClass = _ref.disabledClass,
            hoverClass = _ref.hoverClass;

        if (_this2.props.role === 'separator') {
          classes = className;
        } else {
          classes = (0, _reactStyles.css)(isDisabled && disabledClass, isHovered && hoverClass, className);
        }

        return React.createElement("li", {
          role: role,
          ref: _this2.ref,
          onKeyDown: _this2.onKeyDown,
          onClick: function onClick(event) {
            if (!isDisabled) {
              _onClick(event);

              onSelect(event);
            }
          }
        }, renderWithTooltip(isComponentReactElement ? React.cloneElement(Component, _objectSpread({}, additionalProps, {
          className: (0, _reactStyles.css)(classes, itemClass)
        })) : React.createElement(Component, _extends({}, additionalProps, {
          href: href || null,
          className: (0, _reactStyles.css)(classes, _this2.props.role !== 'separator' && itemClass)
        }), children)));
      });
    }
  }]);

  return InternalDropdownItem;
}(React.Component);

exports.InternalDropdownItem = InternalDropdownItem;

_defineProperty(InternalDropdownItem, "propTypes", {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  component: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string]),
  role: _propTypes["default"].string,
  isDisabled: _propTypes["default"].bool,
  isHovered: _propTypes["default"].bool,
  href: _propTypes["default"].string,
  tooltip: _propTypes["default"].node,
  tooltipProps: _propTypes["default"].any,
  index: _propTypes["default"].number,
  context: _propTypes["default"].shape({
    keyHandler: _propTypes["default"].func,
    sendRef: _propTypes["default"].func
  }),
  onClick: _propTypes["default"].func
});

_defineProperty(InternalDropdownItem, "defaultProps", {
  className: '',
  isHovered: false,
  component: 'a',
  role: 'none',
  isDisabled: false,
  href: '',
  tooltipProps: {},
  onClick: function onClick(event) {
    return undefined;
  },
  onSelect: function onSelect() {
    return undefined;
  },
  index: -1,
  context: {
    keyHandler: Function.prototype,
    sendRef: Function.prototype
  }
});
//# sourceMappingURL=InternalDropdownItem.js.map