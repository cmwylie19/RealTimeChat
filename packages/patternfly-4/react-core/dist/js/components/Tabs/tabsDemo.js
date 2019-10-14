"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactCore = require("@patternfly/react-core");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TabsNavVariant =
/*#__PURE__*/
function (_Component) {
  _inherits(TabsNavVariant, _Component);

  function TabsNavVariant(props) {
    var _this;

    _classCallCheck(this, TabsNavVariant);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TabsNavVariant).call(this, props));
    _this.state = {
      activeTabKey: 0
    }; // Toggle currently active tab

    _this.handleTabClick = function (event, tabIndex) {
      _this.setState({
        activeTabKey: tabIndex
      });
    };

    return _this;
  }

  _createClass(TabsNavVariant, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_reactCore.Tabs, {
        activeKey: this.state.activeTabKey,
        onSelect: this.handleTabClick,
        "aria-label": "Local",
        variant: _reactCore.TabsVariant.nav
      }, _react["default"].createElement(_reactCore.Tab, {
        eventKey: 0,
        title: "Tab item 1"
      }, "Tab 1 section"), _react["default"].createElement(_reactCore.Tab, {
        eventKey: 1,
        title: "Tab item 2"
      }, "Tab 2 section"), _react["default"].createElement(_reactCore.Tab, {
        eventKey: 2,
        title: "Tab item 3"
      }, "Tab 3 section"), _react["default"].createElement(_reactCore.Tab, {
        eventKey: 3,
        title: "Tab item 4"
      }, "Tab 4 section"), _react["default"].createElement(_reactCore.Tab, {
        eventKey: 4,
        title: "Tab item 5"
      }, "Tab 5 section"), _react["default"].createElement(_reactCore.Tab, {
        eventKey: 5,
        title: "Tab item 6"
      }, "Tab 6 section"), _react["default"].createElement(_reactCore.Tab, {
        eventKey: 6,
        title: "Tab item 7"
      }, "Tab 7 section"), _react["default"].createElement(_reactCore.Tab, {
        eventKey: 7,
        title: "Tab item 8"
      }, "Tab 8 section"), _react["default"].createElement(_reactCore.Tab, {
        eventKey: 8,
        title: "Tab item 9"
      }, "Tab 9 section"), _react["default"].createElement(_reactCore.Tab, {
        eventKey: 9,
        title: "Tab item 10"
      }, "Tab 10 section"), _react["default"].createElement(_reactCore.Tab, {
        eventKey: 10,
        title: "Tab item 11"
      }, "Tab 11 section"), _react["default"].createElement(_reactCore.Tab, {
        eventKey: 11,
        title: "Tab item 12"
      }, "Tab 12 section")), _react["default"].createElement("br", null), _react["default"].createElement(_reactCore.Tabs, {
        activeKey: this.state.activeTabKey,
        onSelect: this.handleTabClick,
        "aria-label": "Local",
        variant: _reactCore.TabsVariant.nav
      }, _react["default"].createElement(_reactCore.Tab, {
        eventKey: 0,
        title: "Tab item 1"
      }, "Tab 1 section"), _react["default"].createElement(_reactCore.Tab, {
        eventKey: 1,
        title: "Tab item 2"
      }, "Tab 2 section"), _react["default"].createElement(_reactCore.Tab, {
        eventKey: 2,
        title: "Tab item 3"
      }, "Tab 3 section")));
    }
  }]);

  return TabsNavVariant;
}(_react.Component);

exports["default"] = TabsNavVariant;
//# sourceMappingURL=tabsDemo.js.map