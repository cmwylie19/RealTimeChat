import * as React from 'react';
import { mount } from 'enzyme';
import { Toolbar } from './Toolbar';
import { ToolbarGroup } from './ToolbarGroup';
import { ToolbarItem } from './ToolbarItem';
import { ToolbarSection } from './ToolbarSection';
test('Simple toolbar with single group', () => {
  const view = mount(React.createElement(Toolbar, null, React.createElement(ToolbarGroup, null, React.createElement(ToolbarItem, null, "Item 1"), React.createElement(ToolbarItem, null, "Item 2"))));
  expect(view).toMatchSnapshot();
});
test('Toolbar with multiple groups', () => {
  const view = mount(React.createElement(Toolbar, null, React.createElement(ToolbarGroup, null, React.createElement(ToolbarItem, null, "Item 1"), React.createElement(ToolbarItem, null, "Item 2")), React.createElement(ToolbarGroup, null, React.createElement(ToolbarItem, null, "Item 3")), React.createElement(ToolbarGroup, null, React.createElement(ToolbarItem, null, "Item 4"), React.createElement(ToolbarItem, null, "Item 5"), React.createElement(ToolbarItem, null, "Item 6"))));
  expect(view).toMatchSnapshot();
});
test('Toolbar with sections', () => {
  const view = mount(React.createElement(Toolbar, null, React.createElement(ToolbarSection, {
    "aria-label": "First section"
  }, React.createElement(ToolbarGroup, null, React.createElement(ToolbarItem, null, "Item 1"), React.createElement(ToolbarItem, null, "Item 2")), React.createElement(ToolbarGroup, null, React.createElement(ToolbarItem, null, "Item 3"))), React.createElement(ToolbarSection, {
    "aria-label": "Second section"
  }, React.createElement(ToolbarGroup, null, React.createElement(ToolbarItem, null, "Item 4"), React.createElement(ToolbarItem, null, "Item 5"), React.createElement(ToolbarItem, null, "Item 6")))));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=Toolbar.test.js.map