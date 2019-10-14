"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewToolbar = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactCore = require("@patternfly/react-core");

var _reactIcons = require("@patternfly/react-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ViewToolbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ViewToolbar, _React$Component);

  function ViewToolbar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ViewToolbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ViewToolbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      filterType: 'Name',
      filterValue: '',
      filterDropDownOpen: false,
      actionKebabOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "onFilterDropDownToggle", function (isOpen) {
      _this.setState({
        filterDropDownOpen: isOpen
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onFilterTypeSelect", function (e, filterType) {
      e.preventDefault();

      _this.setState({
        filterType: filterType,
        filterDropDownOpen: false,
        filterValue: filterType === _this.state.filterType ? _this.state.filterValue : ''
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleFilterInputChange", function (value) {
      _this.setState({
        filterValue: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onActionKebabToggle", function (isOpen) {
      _this.setState({
        actionKebabOpen: isOpen
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onActionKebabSelect", function (e, action) {
      e.preventDefault();

      _this.setState({
        actionKebabOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderFilterInput", function () {
      var filterValue = _this.state.filterValue;
      return _react["default"].createElement(_reactCore.TextInput, {
        value: filterValue || '',
        type: "text",
        onChange: _this.handleFilterInputChange,
        "aria-label": "filter text input"
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderFilterTypeDropdown", function () {
      var _this$state = _this.state,
          filterDropDownOpen = _this$state.filterDropDownOpen,
          filterType = _this$state.filterType;
      return _react["default"].createElement(_reactCore.Dropdown, {
        onToggle: _this.onFilterDropDownToggle,
        position: _reactCore.DropdownPosition.right,
        className: "topology-view-filter-dropdown",
        toggle: _react["default"].createElement(_reactCore.DropdownToggle, {
          onToggle: _this.onFilterDropDownToggle
        }, _react["default"].createElement(_reactIcons.FilterIcon, {
          className: "pf-u-mr-sm"
        }), filterType),
        isOpen: filterDropDownOpen,
        dropdownItems: [_react["default"].createElement(_reactCore.DropdownItem, {
          key: "name",
          onClick: function onClick(e) {
            return _this.onFilterTypeSelect(e, 'Name');
          }
        }, "Name"), _react["default"].createElement(_reactCore.DropdownItem, {
          key: "type",
          onClick: function onClick(e) {
            return _this.onFilterTypeSelect(e, 'Type');
          }
        }, "Type"), _react["default"].createElement(_reactCore.DropdownItem, {
          key: "status",
          onClick: function onClick(e) {
            return _this.onFilterTypeSelect(e, 'Status');
          }
        }, "Status")]
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderActionsdKebab", function () {
      var actionKebabOpen = _this.state.actionKebabOpen;
      return _react["default"].createElement(_reactCore.Dropdown, {
        onToggle: _this.onActionKebabToggle,
        position: _reactCore.DropdownPosition.right,
        toggle: _react["default"].createElement(_reactCore.KebabToggle, {
          onToggle: _this.onActionKebabToggle
        }),
        isOpen: actionKebabOpen,
        isPlain: true,
        dropdownItems: [_react["default"].createElement(_reactCore.DropdownItem, {
          key: "action-3",
          onClick: function onClick(e) {
            return _this.onActionKebabSelect(e, 'Action 3');
          }
        }, "Action 3"), _react["default"].createElement(_reactCore.DropdownItem, {
          key: "action-4",
          onClick: function onClick(e) {
            return _this.onActionKebabSelect(e, 'Action 4');
          }
        }, "Action 4"), _react["default"].createElement(_reactCore.DropdownItem, {
          isDisabled: true,
          key: "disabled-action",
          onClick: function onClick(e) {
            return _this.onActionKebabSelect(e, 'Disabled Action');
          }
        }, "Disabled Action")]
      });
    });

    return _this;
  }

  _createClass(ViewToolbar, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_reactCore.Toolbar, {
        className: "view-toolbar pf-u-px-md pf-u-py-md",
        style: {
          borderBottom: '1px solid #ccc'
        }
      }, _react["default"].createElement(_reactCore.ToolbarGroup, null, _react["default"].createElement(_reactCore.ToolbarItem, null, this.renderFilterTypeDropdown()), _react["default"].createElement(_reactCore.ToolbarItem, {
        className: "pf-u-mr-md"
      }, this.renderFilterInput())), _react["default"].createElement(_reactCore.ToolbarGroup, null, _react["default"].createElement(_reactCore.ToolbarItem, null, _react["default"].createElement(_reactCore.Button, {
        variant: "primary",
        "aria-label": "Action 1"
      }, "Action 1")), _react["default"].createElement(_reactCore.ToolbarItem, {
        className: "pf-u-mx-md"
      }, _react["default"].createElement(_reactCore.Button, {
        variant: "plain",
        "aria-label": "Action 2"
      }, "Action 2")), _react["default"].createElement(_reactCore.ToolbarItem, null, this.renderActionsdKebab())));
    }
  }]);

  return ViewToolbar;
}(_react["default"].Component);

exports.ViewToolbar = ViewToolbar;
//# sourceMappingURL=ViewToolbar.js.map