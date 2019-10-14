"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_core_1 = require("@patternfly/react-core");
var react_icons_1 = require("@patternfly/react-icons");
var isDropdownOpen = false;
var userDropdownItems = [];
exports.AppToolbar = (<react_core_1.Toolbar>
    <react_core_1.ToolbarGroup>
      <react_core_1.ToolbarItem>
        <react_core_1.Button id="simple-example-uid-02" aria-label="Settings actions" variant={react_core_1.ButtonVariant.plain}>
          <react_icons_1.CogIcon />
        </react_core_1.Button>
      </react_core_1.ToolbarItem>
    </react_core_1.ToolbarGroup>
    <react_core_1.ToolbarGroup>
      <react_core_1.ToolbarItem>
        <react_core_1.Dropdown isPlain position="right" onSelect={function () { }} isOpen={isDropdownOpen} toggle={<react_core_1.DropdownToggle onToggle={function () { }}>User</react_core_1.DropdownToggle>} dropdownItems={userDropdownItems}/>
      </react_core_1.ToolbarItem>
    </react_core_1.ToolbarGroup>
  </react_core_1.Toolbar>);
exports["default"] = exports.AppToolbar;
