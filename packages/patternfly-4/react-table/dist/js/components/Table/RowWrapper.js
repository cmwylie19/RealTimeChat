"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RowWrapper = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _reactCore = require("@patternfly/react-core");

var _table = _interopRequireDefault(require("@patternfly/react-styles/css/components/Table/table"));

var _reactStyles = require("@patternfly/react-styles");

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

var RowWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RowWrapper, _React$Component);

  function RowWrapper(props) {
    var _this;

    _classCallCheck(this, RowWrapper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RowWrapper).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function (event) {
      if (!_this._unmounted) {
        _this.props.onScroll(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleResize", function (event) {
      if (!_this._unmounted) {
        _this.props.onResize(event);
      }
    });

    if (props.onScroll) {
      _this.handleScroll = (0, _reactCore.debounce)(_this.handleScroll, 100);
    }

    if (props.onResize) {
      _this.handleResize = (0, _reactCore.debounce)(_this.handleResize, 100);
    }

    return _this;
  }

  _createClass(RowWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._unmounted = false;

      if (this.props.onScroll) {
        window.addEventListener('scroll', this.handleScroll);
      }

      if (this.props.onResize) {
        window.addEventListener('resize', this.handleResize);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._unmounted = true;

      if (this.props.onScroll) {
        window.removeEventListener('scroll', this.handleScroll);
      }

      if (this.props.onResize) {
        window.removeEventListener('resize', this.handleResize);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          trRef = _this$props.trRef,
          className = _this$props.className,
          onScroll = _this$props.onScroll,
          onResize = _this$props.onResize,
          isExpanded = _this$props.row.isExpanded,
          rowProps = _this$props.rowProps,
          props = _objectWithoutProperties(_this$props, ["trRef", "className", "onScroll", "onResize", "row", "rowProps"]);

      return React.createElement("tr", _extends({}, props, {
        ref: trRef,
        className: (0, _reactStyles.css)(className, isExpanded !== undefined && _table["default"].tableExpandableRow, isExpanded && _table["default"].modifiers.expanded),
        hidden: isExpanded !== undefined && !isExpanded
      }));
    }
  }]);

  return RowWrapper;
}(React.Component);

exports.RowWrapper = RowWrapper;

_defineProperty(RowWrapper, "propTypes", {
  trRef: _propTypes["default"].oneOfType([_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func, _propTypes["default"].object]), _propTypes["default"].any]),
  className: _propTypes["default"].string,
  onScroll: _propTypes["default"].func,
  onResize: _propTypes["default"].func,
  row: _propTypes["default"].shape({
    isOpen: _propTypes["default"].any,
    isExpanded: _propTypes["default"].any
  }),
  rowProps: _propTypes["default"].any
});

_defineProperty(RowWrapper, "defaultProps", {
  className: '',
  row: {
    isOpen: undefined,
    isExpanded: undefined
  },
  rowProps: null
});
//# sourceMappingURL=RowWrapper.js.map