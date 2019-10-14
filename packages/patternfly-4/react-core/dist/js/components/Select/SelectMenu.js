"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectMenu = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _select = _interopRequireDefault(require("@patternfly/react-styles/css/components/Select/select"));

var _form = _interopRequireDefault(require("@patternfly/react-styles/css/components/Form/form"));

var _reactStyles = require("@patternfly/react-styles");

var _selectConstants = require("./selectConstants");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// tslint:disable-next-line
var FocusTrap = require('focus-trap-react');

var SelectMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SelectMenu, _React$Component);

  function SelectMenu() {
    _classCallCheck(this, SelectMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(SelectMenu).apply(this, arguments));
  }

  _createClass(SelectMenu, [{
    key: "extendChildren",
    value: function extendChildren() {
      var _this = this;

      var _this$props = this.props,
          children = _this$props.children,
          isGrouped = _this$props.isGrouped;

      if (isGrouped) {
        var _index = 0;
        return React.Children.map(children, function (group) {
          return React.cloneElement(group, {
            titleId: group.props.label.replace(/\W/g, '-'),
            children: group.props.children.map(function (option) {
              return _this.cloneOption(option, _index++);
            })
          });
        });
      }

      return React.Children.map(this.props.children, function (child, index) {
        return _this.cloneOption(child, index);
      });
    }
  }, {
    key: "cloneOption",
    value: function cloneOption(child, index) {
      var _this$props2 = this.props,
          selected = _this$props2.selected,
          sendRef = _this$props2.sendRef,
          keyHandler = _this$props2.keyHandler;
      var isSelected = selected && selected.constructor === Array ? selected && Array.isArray(selected) && selected.includes(child.props.value) : selected === child.props.value;
      return React.cloneElement(child, {
        id: "".concat(child.props.value ? child.props.value.toString() : '', "-").concat(index),
        isSelected: isSelected,
        sendRef: sendRef,
        keyHandler: keyHandler,
        index: index
      });
    }
  }, {
    key: "extendCheckboxChildren",
    value: function extendCheckboxChildren(props) {
      var _this$props3 = this.props,
          children = _this$props3.children,
          isGrouped = _this$props3.isGrouped,
          checked = _this$props3.checked,
          sendRef = _this$props3.sendRef,
          keyHandler = _this$props3.keyHandler;
      var ariaLabel = props['aria-label'],
          ariaLabelledBy = props['aria-labelledby'];

      if (isGrouped) {
        var _index2 = 0;
        return React.Children.map(children, function (group) {
          return React.cloneElement(group, {
            titleId: group.props.label.replace(/\W/g, '-'),
            children: React.createElement("fieldset", {
              "aria-labelledby": group.props.label.replace(/\W/g, '-'),
              className: (0, _reactStyles.css)(_form["default"].formFieldset)
            }, group.props.children.map(function (option) {
              return React.cloneElement(option, {
                isChecked: checked && checked.includes(option.props.value),
                sendRef: sendRef,
                keyHandler: keyHandler,
                index: _index2++
              });
            }))
          });
        });
      }

      return React.createElement("fieldset", _extends({}, props, {
        "aria-label": ariaLabel,
        "aria-labelledby": !ariaLabel && ariaLabelledBy || null,
        className: (0, _reactStyles.css)(_form["default"].formFieldset)
      }), React.Children.map(children, function (child, index) {
        return React.cloneElement(child, {
          isChecked: checked && checked.includes(child.props.value),
          sendRef: sendRef,
          keyHandler: keyHandler,
          index: index
        });
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          children = _this$props4.children,
          className = _this$props4.className,
          isExpanded = _this$props4.isExpanded,
          openedOnEnter = _this$props4.openedOnEnter,
          selected = _this$props4.selected,
          checked = _this$props4.checked,
          isGrouped = _this$props4.isGrouped,
          sendRef = _this$props4.sendRef,
          keyHandler = _this$props4.keyHandler,
          maxHeight = _this$props4.maxHeight,
          props = _objectWithoutProperties(_this$props4, ["children", "className", "isExpanded", "openedOnEnter", "selected", "checked", "isGrouped", "sendRef", "keyHandler", "maxHeight"]);

      return React.createElement(_selectConstants.SelectConsumer, null, function (_ref) {
        var variant = _ref.variant;
        return React.createElement(React.Fragment, null, variant !== _selectConstants.SelectVariant.checkbox && React.createElement("ul", _extends({
          className: (0, _reactStyles.css)(_select["default"].selectMenu, className),
          role: "listbox"
        }, maxHeight && {
          style: {
            maxHeight: maxHeight,
            overflow: 'auto'
          }
        }, props), _this2.extendChildren()), variant === _selectConstants.SelectVariant.checkbox && React.Children.count(children) > 0 && React.createElement(FocusTrap, {
          focusTrapOptions: {
            clickOutsideDeactivates: true
          }
        }, React.createElement("div", _extends({
          className: (0, _reactStyles.css)(_select["default"].selectMenu, className)
        }, maxHeight && {
          style: {
            maxHeight: maxHeight,
            overflow: 'auto'
          }
        }), React.createElement("form", {
          noValidate: true,
          className: (0, _reactStyles.css)(_form["default"].form)
        }, React.createElement("div", {
          className: (0, _reactStyles.css)(_form["default"].formGroup)
        }, _this2.extendCheckboxChildren(props))))), variant === _selectConstants.SelectVariant.checkbox && React.Children.count(children) === 0 && React.createElement("div", _extends({
          className: (0, _reactStyles.css)(_select["default"].selectMenu, className)
        }, maxHeight && {
          style: {
            maxHeight: maxHeight,
            overflow: 'auto'
          }
        }), React.createElement("form", {
          noValidate: true,
          className: (0, _reactStyles.css)(_form["default"].form)
        }, React.createElement("div", {
          className: (0, _reactStyles.css)(_form["default"].formGroup)
        }))));
      });
    }
  }]);

  return SelectMenu;
}(React.Component);

exports.SelectMenu = SelectMenu;

_defineProperty(SelectMenu, "propTypes", {
  children: _propTypes["default"].arrayOf(_propTypes["default"].element).isRequired,
  className: _propTypes["default"].string,
  isExpanded: _propTypes["default"].bool,
  isGrouped: _propTypes["default"].bool,
  selected: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].any, _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].any]))]),
  checked: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].any])),
  openedOnEnter: _propTypes["default"].bool,
  maxHeight: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  sendRef: _propTypes["default"].func,
  keyHandler: _propTypes["default"].func
});

_defineProperty(SelectMenu, "defaultProps", {
  className: '',
  isExpanded: false,
  isGrouped: false,
  openedOnEnter: false,
  selected: '',
  maxHeight: '',
  sendRef: Function.prototype,
  keyHandler: Function.prototype
});
//# sourceMappingURL=SelectMenu.js.map