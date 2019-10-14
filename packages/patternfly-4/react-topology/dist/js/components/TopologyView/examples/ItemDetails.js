"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemDetails = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCore = require("@patternfly/react-core");

var _reactTopology = require("@patternfly/react-topology");

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

var ItemDetails =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ItemDetails, _React$Component);

  function ItemDetails() {
    _classCallCheck(this, ItemDetails);

    return _possibleConstructorReturn(this, _getPrototypeOf(ItemDetails).apply(this, arguments));
  }

  _createClass(ItemDetails, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          show = _this$props.show,
          onClose = _this$props.onClose;

      var header = _react["default"].createElement("div", {
        className: "pf-u-m-lg"
      }, _react["default"].createElement(_reactCore.Title, {
        headingLevel: _reactCore.TitleLevel.h1,
        size: _reactCore.BaseSizes['2xl']
      }, "Item Details"), _react["default"].createElement("p", null, "Short description of the selected item."));

      return _react["default"].createElement(_reactTopology.TopologySideBar, {
        show: show,
        onClose: onClose,
        header: header
      }, _react["default"].createElement("div", {
        className: "pf-u-mx-lg"
      }, _react["default"].createElement("p", {
        id: "custom-header-example"
      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."), _react["default"].createElement("br", null), _react["default"].createElement("p", null, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")));
    }
  }]);

  return ItemDetails;
}(_react["default"].Component);

exports.ItemDetails = ItemDetails;
ItemDetails.propTypes = {
  show: _propTypes["default"].bool,
  onClose: _propTypes["default"].func
};
ItemDetails.defaultProps = {
  show: false,
  onClose: function onClose() {
    return undefined;
  }
};
//# sourceMappingURL=ItemDetails.js.map