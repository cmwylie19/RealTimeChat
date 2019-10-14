(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@patternfly/react-core", "@patternfly/react-icons"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@patternfly/react-core"), require("@patternfly/react-icons"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactCore, global.reactIcons);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _reactCore, _reactIcons) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ViewToolbar = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  class ViewToolbar extends _react2.default.Component {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "state", {
        filterType: 'Name',
        filterValue: '',
        filterDropDownOpen: false,
        actionKebabOpen: false
      });

      _defineProperty(this, "onFilterDropDownToggle", isOpen => {
        this.setState({
          filterDropDownOpen: isOpen
        });
      });

      _defineProperty(this, "onFilterTypeSelect", (e, filterType) => {
        e.preventDefault();
        this.setState({
          filterType,
          filterDropDownOpen: false,
          filterValue: filterType === this.state.filterType ? this.state.filterValue : ''
        });
      });

      _defineProperty(this, "handleFilterInputChange", value => {
        this.setState({
          filterValue: value
        });
      });

      _defineProperty(this, "onActionKebabToggle", isOpen => {
        this.setState({
          actionKebabOpen: isOpen
        });
      });

      _defineProperty(this, "onActionKebabSelect", (e, action) => {
        e.preventDefault();
        this.setState({
          actionKebabOpen: false
        });
      });

      _defineProperty(this, "renderFilterInput", () => {
        const {
          filterValue
        } = this.state;
        return _react2.default.createElement(_reactCore.TextInput, {
          value: filterValue || '',
          type: "text",
          onChange: this.handleFilterInputChange,
          "aria-label": "filter text input"
        });
      });

      _defineProperty(this, "renderFilterTypeDropdown", () => {
        const {
          filterDropDownOpen,
          filterType
        } = this.state;
        return _react2.default.createElement(_reactCore.Dropdown, {
          onToggle: this.onFilterDropDownToggle,
          position: _reactCore.DropdownPosition.right,
          className: "topology-view-filter-dropdown",
          toggle: _react2.default.createElement(_reactCore.DropdownToggle, {
            onToggle: this.onFilterDropDownToggle
          }, _react2.default.createElement(_reactIcons.FilterIcon, {
            className: "pf-u-mr-sm"
          }), filterType),
          isOpen: filterDropDownOpen,
          dropdownItems: [_react2.default.createElement(_reactCore.DropdownItem, {
            key: "name",
            onClick: e => this.onFilterTypeSelect(e, 'Name')
          }, "Name"), _react2.default.createElement(_reactCore.DropdownItem, {
            key: "type",
            onClick: e => this.onFilterTypeSelect(e, 'Type')
          }, "Type"), _react2.default.createElement(_reactCore.DropdownItem, {
            key: "status",
            onClick: e => this.onFilterTypeSelect(e, 'Status')
          }, "Status")]
        });
      });

      _defineProperty(this, "renderActionsdKebab", () => {
        const {
          actionKebabOpen
        } = this.state;
        return _react2.default.createElement(_reactCore.Dropdown, {
          onToggle: this.onActionKebabToggle,
          position: _reactCore.DropdownPosition.right,
          toggle: _react2.default.createElement(_reactCore.KebabToggle, {
            onToggle: this.onActionKebabToggle
          }),
          isOpen: actionKebabOpen,
          isPlain: true,
          dropdownItems: [_react2.default.createElement(_reactCore.DropdownItem, {
            key: "action-3",
            onClick: e => this.onActionKebabSelect(e, 'Action 3')
          }, "Action 3"), _react2.default.createElement(_reactCore.DropdownItem, {
            key: "action-4",
            onClick: e => this.onActionKebabSelect(e, 'Action 4')
          }, "Action 4"), _react2.default.createElement(_reactCore.DropdownItem, {
            isDisabled: true,
            key: "disabled-action",
            onClick: e => this.onActionKebabSelect(e, 'Disabled Action')
          }, "Disabled Action")]
        });
      });
    }

    render() {
      return _react2.default.createElement(_reactCore.Toolbar, {
        className: "view-toolbar pf-u-px-md pf-u-py-md",
        style: {
          borderBottom: '1px solid #ccc'
        }
      }, _react2.default.createElement(_reactCore.ToolbarGroup, null, _react2.default.createElement(_reactCore.ToolbarItem, null, this.renderFilterTypeDropdown()), _react2.default.createElement(_reactCore.ToolbarItem, {
        className: "pf-u-mr-md"
      }, this.renderFilterInput())), _react2.default.createElement(_reactCore.ToolbarGroup, null, _react2.default.createElement(_reactCore.ToolbarItem, null, _react2.default.createElement(_reactCore.Button, {
        variant: "primary",
        "aria-label": "Action 1"
      }, "Action 1")), _react2.default.createElement(_reactCore.ToolbarItem, {
        className: "pf-u-mx-md"
      }, _react2.default.createElement(_reactCore.Button, {
        variant: "plain",
        "aria-label": "Action 2"
      }, "Action 2")), _react2.default.createElement(_reactCore.ToolbarItem, null, this.renderActionsdKebab())));
    }

  }

  exports.ViewToolbar = ViewToolbar;
});
//# sourceMappingURL=ViewToolbar.js.map