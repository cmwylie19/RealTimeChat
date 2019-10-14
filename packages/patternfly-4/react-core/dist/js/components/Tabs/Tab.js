"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tab = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Tab0 = function Tab0(_ref) {
  var children = _ref.children,
      eventKey = _ref.eventKey,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      tabContentId = _ref.tabContentId,
      tabContentRef = _ref.tabContentRef,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["children", "eventKey", "className", "tabContentId", "tabContentRef", "title"]);

  // destructuring to prevent console warnings for applying eventKey, and tabContentId to a DOM element and remove title from the DOM element
  var Component = props.href ? 'a' : 'button';
  return React.createElement(Component, _extends({}, props, {
    className: className,
    ref: tabContentRef
  }), children);
};

Tab0.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  href: _propTypes["default"].string,
  title: _propTypes["default"].node.isRequired,
  eventKey: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
  tabContentId: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  tabContentRef: _propTypes["default"].any
};

var withForwardedRef = function withForwardedRef(Component) {
  var TabContainer =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(TabContainer, _React$Component);

    function TabContainer() {
      _classCallCheck(this, TabContainer);

      return _possibleConstructorReturn(this, _getPrototypeOf(TabContainer).apply(this, arguments));
    }

    _createClass(TabContainer, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            forwardRef = _this$props.forwardRef,
            rest = _objectWithoutProperties(_this$props, ["forwardRef"]);

        return React.createElement(Component, _extends({
          ref: forwardRef
        }, rest));
      }
    }]);

    return TabContainer;
  }(React.Component);

  _defineProperty(TabContainer, "propTypes", {
    children: _propTypes["default"].node,
    className: _propTypes["default"].string,
    href: _propTypes["default"].string,
    title: _propTypes["default"].node.isRequired,
    eventKey: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
    tabContentId: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
    tabContentRef: _propTypes["default"].any,
    forwardRef: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func, _propTypes["default"].object])
  });

  return React.forwardRef(function (props, tabContentRef) {
    return React.createElement(TabContainer, _extends({}, props, {
      forwardRef: tabContentRef
    }));
  });
};

var Tab = withForwardedRef(Tab0);
exports.Tab = Tab;
//# sourceMappingURL=Tab.js.map