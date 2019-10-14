function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { Button, Dropdown, DropdownPosition, DropdownToggle, DropdownItem, KebabToggle, TextInput, Toolbar, ToolbarGroup, ToolbarItem } from '@patternfly/react-core';
import { FilterIcon } from '@patternfly/react-icons';
export class ViewToolbar extends React.Component {
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
      return React.createElement(TextInput, {
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
      return React.createElement(Dropdown, {
        onToggle: this.onFilterDropDownToggle,
        position: DropdownPosition.right,
        className: "topology-view-filter-dropdown",
        toggle: React.createElement(DropdownToggle, {
          onToggle: this.onFilterDropDownToggle
        }, React.createElement(FilterIcon, {
          className: "pf-u-mr-sm"
        }), filterType),
        isOpen: filterDropDownOpen,
        dropdownItems: [React.createElement(DropdownItem, {
          key: "name",
          onClick: e => this.onFilterTypeSelect(e, 'Name')
        }, "Name"), React.createElement(DropdownItem, {
          key: "type",
          onClick: e => this.onFilterTypeSelect(e, 'Type')
        }, "Type"), React.createElement(DropdownItem, {
          key: "status",
          onClick: e => this.onFilterTypeSelect(e, 'Status')
        }, "Status")]
      });
    });

    _defineProperty(this, "renderActionsdKebab", () => {
      const {
        actionKebabOpen
      } = this.state;
      return React.createElement(Dropdown, {
        onToggle: this.onActionKebabToggle,
        position: DropdownPosition.right,
        toggle: React.createElement(KebabToggle, {
          onToggle: this.onActionKebabToggle
        }),
        isOpen: actionKebabOpen,
        isPlain: true,
        dropdownItems: [React.createElement(DropdownItem, {
          key: "action-3",
          onClick: e => this.onActionKebabSelect(e, 'Action 3')
        }, "Action 3"), React.createElement(DropdownItem, {
          key: "action-4",
          onClick: e => this.onActionKebabSelect(e, 'Action 4')
        }, "Action 4"), React.createElement(DropdownItem, {
          isDisabled: true,
          key: "disabled-action",
          onClick: e => this.onActionKebabSelect(e, 'Disabled Action')
        }, "Disabled Action")]
      });
    });
  }

  render() {
    return React.createElement(Toolbar, {
      className: "view-toolbar pf-u-px-md pf-u-py-md",
      style: {
        borderBottom: '1px solid #ccc'
      }
    }, React.createElement(ToolbarGroup, null, React.createElement(ToolbarItem, null, this.renderFilterTypeDropdown()), React.createElement(ToolbarItem, {
      className: "pf-u-mr-md"
    }, this.renderFilterInput())), React.createElement(ToolbarGroup, null, React.createElement(ToolbarItem, null, React.createElement(Button, {
      variant: "primary",
      "aria-label": "Action 1"
    }, "Action 1")), React.createElement(ToolbarItem, {
      className: "pf-u-mx-md"
    }, React.createElement(Button, {
      variant: "plain",
      "aria-label": "Action 2"
    }, "Action 2")), React.createElement(ToolbarItem, null, this.renderActionsdKebab())));
  }

}
//# sourceMappingURL=ViewToolbar.js.map