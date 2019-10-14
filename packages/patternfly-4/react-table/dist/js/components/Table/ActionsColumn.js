"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionsColumn = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _reactCore = require("@patternfly/react-core");

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

var ActionsColumn =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ActionsColumn, _React$Component);

  function ActionsColumn(props) {
    var _this;

    _classCallCheck(this, ActionsColumn);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ActionsColumn).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onToggle", function (isOpen) {
      _this.setState({
        isOpen: isOpen
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSelect", function (event, onClick) {
      var _this$props = _this.props,
          rowData = _this$props.rowData,
          extraData = _this$props.extraData;
      event.preventDefault(); // tslint:disable-next-line:no-unused-expression

      onClick && onClick(event, extraData && extraData.rowIndex, rowData, extraData);

      _this.setState({
        isOpen: !_this.state.isOpen
      });
    });

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(ActionsColumn, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var isOpen = this.state.isOpen;
      var _this$props2 = this.props,
          items = _this$props2.items,
          children = _this$props2.children,
          dropdownPosition = _this$props2.dropdownPosition,
          dropdownDirection = _this$props2.dropdownDirection,
          isDisabled = _this$props2.isDisabled;
      return React.createElement(React.Fragment, null, React.createElement(_reactCore.Dropdown, {
        toggle: React.createElement(_reactCore.KebabToggle, {
          isDisabled: isDisabled,
          onToggle: this.onToggle
        }),
        position: dropdownPosition,
        direction: dropdownDirection,
        isOpen: isOpen,
        dropdownItems: items.map(function (_ref, key) {
          var title = _ref.title,
              itemKey = _ref.itemKey,
              _onClick = _ref.onClick,
              isSeparator = _ref.isSeparator,
              props = _objectWithoutProperties(_ref, ["title", "itemKey", "onClick", "isSeparator"]);

          return isSeparator ? React.createElement(_reactCore.DropdownSeparator, _extends({}, props, {
            key: itemKey || key,
            "data-key": itemKey || key
          })) : React.createElement(_reactCore.DropdownItem, _extends({
            onClick: function onClick(event) {
              return _this2.onSelect(event, _onClick);
            }
          }, props, {
            key: itemKey || key,
            "data-key": itemKey || key
          }), title);
        }),
        isPlain: true
      }), children);
    }
  }]);

  return ActionsColumn;
}(React.Component);

exports.ActionsColumn = ActionsColumn;

_defineProperty(ActionsColumn, "propTypes", {
  children: _propTypes["default"].node,
  items: _propTypes["default"].arrayOf(_propTypes["default"].any),
  isDisabled: _propTypes["default"].bool,
  dropdownPosition: _propTypes["default"].any,
  dropdownDirection: _propTypes["default"].any,
  rowData: _propTypes["default"].any,
  extraData: _propTypes["default"].any
});

_defineProperty(ActionsColumn, "defaultProps", {
  children: null,
  items: [],
  dropdownPosition: _reactCore.DropdownPosition.right,
  dropdownDirection: _reactCore.DropdownDirection.down,
  rowData: {},
  extraData: {}
});
//# sourceMappingURL=ActionsColumn.js.map