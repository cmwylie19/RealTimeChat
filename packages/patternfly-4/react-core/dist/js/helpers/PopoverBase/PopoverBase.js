"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tippy = _interopRequireDefault(require("tippy.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// These props are not native to `tippy.js` and are specific to React only.
var REACT_ONLY_PROPS = ['children', 'onCreate', 'isVisible', 'isEnabled']; // Avoid Babel's large '_objectWithoutProperties' helper function.

function getNativeTippyProps(props) {
  return Object.keys(props).reduce(function (acc, key) {
    if (REACT_ONLY_PROPS.indexOf(key) === -1) {
      acc[key] = props[key];
    }

    return acc;
  }, {});
}

var PopoverBase =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PopoverBase, _React$Component);

  function PopoverBase() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PopoverBase);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PopoverBase)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isMounted: false
    });

    _defineProperty(_assertThisInitialized(_this), "container", typeof document !== 'undefined' && document.createElement('div'));

    return _this;
  }

  _createClass(PopoverBase, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      /* eslint-disable-next-line */
      this.setState({
        isMounted: true
      });
      /* eslint-disable-next-line */

      this.tip = _tippy["default"].one(_reactDom["default"].findDOMNode(this), this.options);
      var _this$props = this.props,
          onCreate = _this$props.onCreate,
          isEnabled = _this$props.isEnabled,
          isVisible = _this$props.isVisible;

      if (onCreate) {
        onCreate(this.tip);
      }

      if (isEnabled === false) {
        this.tip.disable();
      }

      if (this.isManualTrigger && isVisible === true) {
        this.tip.show();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.tip.set(this.options);
      var _this$props2 = this.props,
          isEnabled = _this$props2.isEnabled,
          isVisible = _this$props2.isVisible;

      if (isEnabled === true) {
        this.tip.enable();
      }

      if (isEnabled === false) {
        this.tip.disable();
      }

      if (this.isManualTrigger) {
        if (isVisible === true) {
          this.tip.show();
        }

        if (isVisible === false) {
          this.tip.hide();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.tip.destroy();
      this.tip = null;
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement(_react["default"].Fragment, null, this.props.children, this.isReactElementContent && this.state.isMounted && _reactDom["default"].createPortal(this.props.content, this.container));
    }
  }, {
    key: "isReactElementContent",
    get: function get() {
      return _react["default"].isValidElement(this.props.content);
    }
  }, {
    key: "options",
    get: function get() {
      return _objectSpread({}, getNativeTippyProps(this.props), {
        content: this.isReactElementContent ? this.container : this.props.content
      });
    }
  }, {
    key: "isManualTrigger",
    get: function get() {
      return this.props.trigger === 'manual';
    }
  }]);

  return PopoverBase;
}(_react["default"].Component);

_defineProperty(PopoverBase, "propTypes", {
  children: _propTypes["default"].element.isRequired,
  content: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]).isRequired,
  isEnabled: _propTypes["default"].bool,
  isVisible: _propTypes["default"].bool,
  onCreate: _propTypes["default"].func,
  trigger: _propTypes["default"].string
});

_defineProperty(PopoverBase, "defaultProps", {
  isEnabled: undefined,
  isVisible: undefined,
  onCreate: undefined,
  trigger: 'mouseenter focus'
});

var _default = PopoverBase;
exports["default"] = _default;
//# sourceMappingURL=PopoverBase.js.map