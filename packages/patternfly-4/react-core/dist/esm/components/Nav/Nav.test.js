import * as React from 'react';
import { mount } from 'enzyme';
import { Nav } from './Nav';
import { NavList } from './NavList';
import { NavGroup } from './NavGroup';
import { NavItem } from './NavItem';
import { NavExpandable } from './NavExpandable';
const props = {
  items: [{
    to: '#link1',
    label: 'Link 1'
  }, {
    to: '#link2',
    label: 'Link 2'
  }, {
    to: '#link3',
    label: 'Link 3'
  }, {
    to: '#link4',
    label: 'Link 4'
  }]
};
beforeEach(() => {
  window.location.hash = '#link1';
});
const context = {
  onSelect: () => undefined,
  onToggle: () => undefined
};
test('Default Nav List', () => {
  const view = mount(React.createElement(Nav, {
    className: "test=nav-class"
  }, React.createElement(NavList, {
    className: "test-nav-list-class"
  }, props.items.map(item => React.createElement(NavItem, {
    to: item.to,
    key: item.to,
    className: "test-nav-item-class"
  }, item.label)))), {
    context
  });
  expect(view).toMatchSnapshot();
});
test('Dark Nav List', () => {
  const view = mount(React.createElement(Nav, {
    className: "test=nav-class",
    theme: "dark"
  }, React.createElement(NavList, {
    className: "test-nav-list-class"
  }, props.items.map(item => React.createElement(NavItem, {
    to: item.to,
    key: item.to,
    className: "test-nav-item-class"
  }, item.label)))), {
    context
  });
  expect(view).toMatchSnapshot();
});
test('Default Nav List - Trigger item active update', () => {
  window.location.hash = '#link2';
  const view = mount(React.createElement(Nav, null, React.createElement(NavList, null, props.items.map(item => React.createElement(NavItem, {
    to: item.to,
    key: item.to
  }, item.label)))), {
    context
  });
  view.find({
    href: '#link2'
  }).first().simulate('click');
  expect(view).toMatchSnapshot();
});
test('Simple Nav List', () => {
  const view = mount(React.createElement(Nav, null, React.createElement(NavList, {
    variant: "simple"
  }, props.items.map(item => React.createElement(NavItem, {
    to: item.to,
    key: item.to
  }, item.label)))), {
    context
  });
  expect(view).toMatchSnapshot();
});
test('Expandable Nav List', () => {
  const view = mount(React.createElement(Nav, null, React.createElement(NavList, null, React.createElement(NavExpandable, {
    id: "grp-1",
    title: "Section 1"
  }, props.items.map(item => React.createElement(NavItem, {
    to: item.to,
    key: item.to
  }, item.label))))), {
    context
  });
  expect(view).toMatchSnapshot();
});
test('Expandable Nav List - Trigger toggle', () => {
  window.location.hash = '#link2';
  const view = mount(React.createElement(Nav, null, React.createElement(NavList, null, React.createElement(NavExpandable, {
    id: "grp-1",
    title: "Section 1",
    className: "expandable-group",
    isExpanded: true
  }, props.items.map(item => React.createElement(NavItem, {
    to: item.to,
    key: item.to
  }, item.label))))), {
    context
  });
  view.find('li.expandable-group').first().simulate('click');
  expect(view).toMatchSnapshot();
});
test('Expandable Nav List with aria label', () => {
  const view = mount(React.createElement(Nav, {
    "aria-label": "Test"
  }, React.createElement(NavList, null, React.createElement(NavExpandable, {
    id: "grp-1",
    title: "Section 1",
    srText: "Section 1 - Example sub-navigation"
  }, props.items.map(item => React.createElement(NavItem, {
    to: item.to,
    key: item.to
  }, item.label))))), {
    context
  });
  expect(view).toMatchSnapshot();
});
test('Nav Grouped List', () => {
  const view = mount(React.createElement(Nav, null, React.createElement(NavGroup, {
    id: "grp-1",
    title: "Section 1"
  }, React.createElement(NavList, null, props.items.map(item => React.createElement(NavItem, {
    to: item.to,
    key: `section1_${item.to}`
  }, item.label)))), React.createElement(NavGroup, {
    id: "grp-2",
    title: "Section 2"
  }, React.createElement(NavList, null, props.items.map(item => React.createElement(NavItem, {
    to: item.to,
    key: `section2_${item.to}`
  }, item.label))))), {
    context
  });
  expect(view).toMatchSnapshot();
});
test('Horizontal Nav List', () => {
  const view = mount(React.createElement(Nav, null, React.createElement(NavList, {
    variant: "horizontal"
  }, props.items.map(item => React.createElement(NavItem, {
    to: item.to,
    key: item.to
  }, item.label)))), {
    context
  });
  expect(view).toMatchSnapshot();
});
test('Tertiary Nav List', () => {
  const view = mount(React.createElement(Nav, null, React.createElement(NavList, {
    variant: "tertiary"
  }, props.items.map(item => React.createElement(NavItem, {
    to: item.to,
    key: item.to
  }, item.label)))), {
    context
  });
  expect(view).toMatchSnapshot();
});
test('Nav List with custom item nodes', () => {
  const view = mount(React.createElement(Nav, null, React.createElement(NavList, {
    variant: "tertiary"
  }, React.createElement(NavItem, {
    to: "/components/nav#link1",
    className: "test-nav-item-class"
  }, React.createElement("div", {
    className: "my-custom-node"
  }, "My custom node")))), {
    context
  });
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=Nav.test.js.map