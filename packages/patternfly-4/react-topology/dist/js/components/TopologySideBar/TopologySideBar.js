"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TopologySideBar = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _reactIcons = require("@patternfly/react-icons");

var _reactCore = require("@patternfly/react-core");

require("@patternfly/react-styles/css/components/Topology/topology-side-bar.css");

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TopologySideBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TopologySideBar, _React$Component);

  function TopologySideBar(props) {
    var _this;

    _classCallCheck(this, TopologySideBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TopologySideBar).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "timer", null);

    _defineProperty(_assertThisInitialized(_this), "updateForTransitions", function () {
      _this.setState({
        isIn: _this.props.show
      });
    });

    _defineProperty(_assertThisInitialized(_this), "startTimer", function () {
      _this.clearTimer();

      _this.timer = setTimeout(_this.updateForTransitions, 150);
    });

    _defineProperty(_assertThisInitialized(_this), "clearTimer", function () {
      if (_this.timer) {
        clearTimeout(_this.timer);
        _this.timer = null;
      }
    });

    _this.state = {
      isIn: false
    };
    return _this;
  }

  _createClass(TopologySideBar, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearTimer();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className,
          _this$props$show = _this$props.show,
          show = _this$props$show === void 0 ? false : _this$props$show,
          _this$props$onClose = _this$props.onClose,
          onClose = _this$props$onClose === void 0 ? null : _this$props$onClose,
          header = _this$props.header,
          _this$props$children = _this$props.children,
          children = _this$props$children === void 0 ? null : _this$props$children,
          otherProps = _objectWithoutProperties(_this$props, ["className", "show", "onClose", "header", "children"]);

      var isIn = this.state.isIn;

      if (isIn !== show) {
        this.clearTimer();
        this.startTimer();
      }

      return React.createElement("div", _extends({}, otherProps, {
        role: "dialog",
        className: "pf-topology-side-bar fade ".concat(className).concat(show ? ' shown' : '').concat(isIn ? ' in' : '')
      }), show && React.createElement(React.Fragment, null, onClose && React.createElement(_reactCore.Button, {
        className: "pf-topology-side-bar__dismiss",
        variant: "plain",
        onClick: onClose,
        "aria-label": "Close"
      }, React.createElement(_reactIcons.TimesIcon, null)), header && React.createElement("div", {
        className: "pf-topology-side-bar__header"
      }, header), React.createElement("div", {
        className: "pf-topology-side-bar__body"
      }, children)));
    }
  }]);

  return TopologySideBar;
}(React.Component);

exports.TopologySideBar = TopologySideBar;

_defineProperty(TopologySideBar, "propTypes", {
  className: _propTypes["default"].string,
  children: _propTypes["default"].node,
  show: _propTypes["default"].bool,
  onClose: _propTypes["default"].func,
  header: _propTypes["default"].node
});
//# sourceMappingURL=TopologySideBar.js.map