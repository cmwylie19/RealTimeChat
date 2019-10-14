"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var Toolbar_1 = require("./Toolbar");
var ToolbarGroup_1 = require("./ToolbarGroup");
var ToolbarItem_1 = require("./ToolbarItem");
var ToolbarSection_1 = require("./ToolbarSection");
test('Simple toolbar with single group', function () {
    var view = enzyme_1.mount(<Toolbar_1.Toolbar>
      <ToolbarGroup_1.ToolbarGroup>
        <ToolbarItem_1.ToolbarItem>Item 1</ToolbarItem_1.ToolbarItem>
        <ToolbarItem_1.ToolbarItem>Item 2</ToolbarItem_1.ToolbarItem>
      </ToolbarGroup_1.ToolbarGroup>
    </Toolbar_1.Toolbar>);
    expect(view).toMatchSnapshot();
});
test('Toolbar with multiple groups', function () {
    var view = enzyme_1.mount(<Toolbar_1.Toolbar>
      <ToolbarGroup_1.ToolbarGroup>
        <ToolbarItem_1.ToolbarItem>Item 1</ToolbarItem_1.ToolbarItem>
        <ToolbarItem_1.ToolbarItem>Item 2</ToolbarItem_1.ToolbarItem>
      </ToolbarGroup_1.ToolbarGroup>
      <ToolbarGroup_1.ToolbarGroup>
        <ToolbarItem_1.ToolbarItem>Item 3</ToolbarItem_1.ToolbarItem>
      </ToolbarGroup_1.ToolbarGroup>
      <ToolbarGroup_1.ToolbarGroup>
        <ToolbarItem_1.ToolbarItem>Item 4</ToolbarItem_1.ToolbarItem>
        <ToolbarItem_1.ToolbarItem>Item 5</ToolbarItem_1.ToolbarItem>
        <ToolbarItem_1.ToolbarItem>Item 6</ToolbarItem_1.ToolbarItem>
      </ToolbarGroup_1.ToolbarGroup>
    </Toolbar_1.Toolbar>);
    expect(view).toMatchSnapshot();
});
test('Toolbar with sections', function () {
    var view = enzyme_1.mount(<Toolbar_1.Toolbar>
      <ToolbarSection_1.ToolbarSection aria-label="First section">
        <ToolbarGroup_1.ToolbarGroup>
          <ToolbarItem_1.ToolbarItem>Item 1</ToolbarItem_1.ToolbarItem>
          <ToolbarItem_1.ToolbarItem>Item 2</ToolbarItem_1.ToolbarItem>
        </ToolbarGroup_1.ToolbarGroup>
        <ToolbarGroup_1.ToolbarGroup>
          <ToolbarItem_1.ToolbarItem>Item 3</ToolbarItem_1.ToolbarItem>
        </ToolbarGroup_1.ToolbarGroup>
      </ToolbarSection_1.ToolbarSection>
      <ToolbarSection_1.ToolbarSection aria-label="Second section">
        <ToolbarGroup_1.ToolbarGroup>
          <ToolbarItem_1.ToolbarItem>Item 4</ToolbarItem_1.ToolbarItem>
          <ToolbarItem_1.ToolbarItem>Item 5</ToolbarItem_1.ToolbarItem>
          <ToolbarItem_1.ToolbarItem>Item 6</ToolbarItem_1.ToolbarItem>
        </ToolbarGroup_1.ToolbarGroup>
      </ToolbarSection_1.ToolbarSection>
    </Toolbar_1.Toolbar>);
    expect(view).toMatchSnapshot();
});
