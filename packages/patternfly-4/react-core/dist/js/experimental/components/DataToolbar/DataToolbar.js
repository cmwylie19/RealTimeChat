"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataToolbar = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _dataToolbar = _interopRequireDefault(require("@patternfly/react-styles/css/components/DataToolbar/data-toolbar"));

var _reactStyles = require("@patternfly/react-styles");

var _DataToolbarExpandableContent = require("./DataToolbarExpandableContent");

var _DataToolbarUtils = require("./DataToolbarUtils");

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

var DataToolbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DataToolbar, _React$Component);

  function DataToolbar(props) {
    var _this;

    _classCallCheck(this, DataToolbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DataToolbar).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "expandableContentRef", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "toggleIsExpanded", function () {
      _this.setState(function (prevState) {
        return {
          componentManagedIsExpanded: !prevState.componentManagedIsExpanded
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeExpandableContent", function () {
      _this.setState(function () {
        return {
          componentManagedIsExpanded: false
        };
      });
    });

    _this.state = {
      isConsumerManagedToggleGroup: props.isExpanded || !!props.toggleIsExpanded,
      componentManagedIsExpanded: false
    };
    return _this;
  }

  _createClass(DataToolbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var isConsumerManagedToggleGroup = this.state.isConsumerManagedToggleGroup;

      if (!isConsumerManagedToggleGroup) {
        window.addEventListener('resize', this.closeExpandableContent);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var isConsumerManagedToggleGroup = this.state.isConsumerManagedToggleGroup;

      if (isConsumerManagedToggleGroup) {
        window.removeEventListener('resize', this.closeExpandableContent);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          isExpanded = _this$props.isExpanded,
          toggleIsExpanded = _this$props.toggleIsExpanded,
          id = _this$props.id,
          props = _objectWithoutProperties(_this$props, ["className", "children", "isExpanded", "toggleIsExpanded", "id"]);

      var _this$state = this.state,
          isConsumerManagedToggleGroup = _this$state.isConsumerManagedToggleGroup,
          componentManagedIsExpanded = _this$state.componentManagedIsExpanded;
      var expandableContentId = "".concat(id, "-expandable-content");
      return React.createElement("div", _extends({
        className: (0, _reactStyles.css)(_dataToolbar["default"].dataToolbar, className),
        id: id
      }, props), React.createElement(_DataToolbarUtils.DataToolbarContext.Provider, {
        value: {
          isExpanded: isConsumerManagedToggleGroup ? isExpanded : componentManagedIsExpanded,
          toggleIsExpanded: isConsumerManagedToggleGroup ? toggleIsExpanded : this.toggleIsExpanded,
          expandableContentRef: this.expandableContentRef,
          expandableContentId: expandableContentId
        }
      }, children), React.createElement(_DataToolbarExpandableContent.DataToolbarExpandableContent, {
        id: expandableContentId,
        isExpanded: isConsumerManagedToggleGroup ? isExpanded : componentManagedIsExpanded,
        expandableContentRef: this.expandableContentRef
      }));
    }
  }]);

  return DataToolbar;
}(React.Component);

exports.DataToolbar = DataToolbar;

_defineProperty(DataToolbar, "propTypes", {
  className: _propTypes["default"].string,
  children: _propTypes["default"].node,
  isExpanded: _propTypes["default"].bool,
  toggleIsExpanded: _propTypes["default"].func,
  id: _propTypes["default"].string.isRequired
});

_defineProperty(DataToolbar, "defaultProps", {
  isExpanded: false
});
//# sourceMappingURL=DataToolbar.js.map