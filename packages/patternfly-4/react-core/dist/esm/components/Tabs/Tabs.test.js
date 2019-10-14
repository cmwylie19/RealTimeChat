import React from 'react';
import { render, mount } from 'enzyme';
import { Tabs } from './Tabs';
import { Tab } from './Tab';
test('should render simple tabs', () => {
  const view = render(React.createElement(Tabs, {
    id: "simpleTabs"
  }, React.createElement(Tab, {
    id: "tab1",
    eventKey: 0,
    title: "Tab item 1"
  }, "Tab 1 section"), React.createElement(Tab, {
    id: "tab2",
    eventKey: 1,
    title: "Tab item 2"
  }, "Tab 2 section"), React.createElement(Tab, {
    id: "tab3",
    eventKey: 2,
    title: "Tab item 3"
  }, "Tab 3 section"), React.createElement(Tab, {
    id: "tab4",
    eventKey: 3,
    title: React.createElement("b", null, "Tab item ", React.createElement("i", null, "4"))
  }, "Tab 4 section")));
  expect(view).toMatchSnapshot();
});
test('should render accessible tabs', () => {
  const view = render(React.createElement(Tabs, {
    id: "accessibleTabs",
    "aria-label": "accessible Tabs example",
    variant: "nav"
  }, React.createElement(Tab, {
    id: "tab1",
    eventKey: 0,
    title: "Tab item 1",
    href: "#/items/1"
  }, "Tab 1 section"), React.createElement(Tab, {
    id: "tab2",
    eventKey: 1,
    title: "Tab item 2",
    href: "#/items/2"
  }, "Tab 2 section"), React.createElement(Tab, {
    id: "tab3",
    eventKey: 2,
    title: "Tab item 3",
    href: "#/items/3"
  }, "Tab 3 section")));
  expect(view).toMatchSnapshot();
});
test('should render filled tabs', () => {
  const view = render(React.createElement(Tabs, {
    id: "filledTabs",
    isFilled: true
  }, React.createElement(Tab, {
    id: "tab1",
    eventKey: 0,
    title: "Tab item 1"
  }, "Tab 1 section"), React.createElement(Tab, {
    id: "tab2",
    eventKey: 1,
    title: "Tab item 2"
  }, "Tab 2 section"), React.createElement(Tab, {
    id: "tab3",
    eventKey: 2,
    title: "Tab item 3"
  }, "Tab 3 section")));
  expect(view).toMatchSnapshot();
});
test('should render secondary tabs', () => {
  const view = render(React.createElement(Tabs, {
    id: "primarieTabs"
  }, React.createElement(Tab, {
    eventKey: 0,
    title: "Tab item 1"
  }, React.createElement(Tabs, {
    id: "secondaryTabs"
  }, React.createElement(Tab, {
    id: "secondary tab1",
    eventKey: 10,
    title: "Secondary Tab 1"
  }, "Secondary Tab 1 section"), React.createElement(Tab, {
    id: "secondary tab2",
    eventKey: 11,
    title: "Secondary Tab 2"
  }, "Secondary Tab 2 section"), React.createElement(Tab, {
    id: "secondary tab3",
    eventKey: 12,
    title: "Secondary Tab 3"
  }, "Secondary Tab 3 section"))), React.createElement(Tab, {
    id: "tab2",
    eventKey: 1,
    title: "Tab item 2"
  }, "Tab 2 section"), React.createElement(Tab, {
    id: "tab3",
    eventKey: 2,
    title: "Tab item 3"
  }, "Tab 3 section")));
  expect(view).toMatchSnapshot();
});
test('should call scrollLeft tabs with scrolls', () => {
  const view = mount(React.createElement(Tabs, {
    id: "scrollLeft",
    isFilled: true
  }, React.createElement(Tab, {
    id: "tab1",
    eventKey: 0,
    title: "Tab item 1"
  }, "Tab 1 section"), React.createElement(Tab, {
    id: "tab2",
    eventKey: 1,
    title: "Tab item 2"
  }, "Tab 2 section"), React.createElement(Tab, {
    id: "tab3",
    eventKey: 2,
    title: "Tab item 3"
  }, "Tab 3 section")));
  view.find('.pf-c-tabs__scroll-button').first().simulate('click');
  expect(view).toMatchSnapshot();
});
test('should call scrollRight tabs with scrolls', () => {
  const view = mount(React.createElement(Tabs, {
    id: "scrollRight",
    isFilled: true
  }, React.createElement(Tab, {
    id: "tab1",
    eventKey: 0,
    title: "Tab item 1"
  }, "Tab 1 section"), React.createElement(Tab, {
    id: "tab2",
    eventKey: 1,
    title: "Tab item 2"
  }, "Tab 2 section"), React.createElement(Tab, {
    id: "tab3",
    eventKey: 2,
    title: "Tab item 3"
  }, "Tab 3 section")));
  view.find('.pf-c-tabs__scroll-button').last().simulate('click');
  expect(view).toMatchSnapshot();
});
test('should call handleScrollButtons tabs with scrolls', () => {
  const view = mount(React.createElement(Tabs, {
    id: "handleScrollButtons",
    isFilled: true
  }, React.createElement(Tab, {
    id: "tab1",
    eventKey: 0,
    title: "Tab item 1"
  }, "Tab 1 section"), React.createElement(Tab, {
    id: "tab2",
    eventKey: 1,
    title: "Tab item 2"
  }, "Tab 2 section"), React.createElement(Tab, {
    id: "tab3",
    eventKey: 2,
    title: "Tab item 3"
  }, "Tab 3 section")));
  view.simulate('scroll');
  expect(view).toMatchSnapshot();
});
test('should render tabs with eventKey Strings', () => {
  const view = render(React.createElement(Tabs, {
    id: "eventKeyTabs"
  }, React.createElement(Tab, {
    id: "tab1",
    eventKey: 'one',
    title: "Tab item 1"
  }, "Tab 1 section"), React.createElement(Tab, {
    id: "tab2",
    eventKey: 'two',
    title: "Tab item 2"
  }, "Tab 2 section"), React.createElement(Tab, {
    id: "tab3",
    eventKey: 'three',
    title: "Tab item 3"
  }, "Tab 3 section")));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=Tabs.test.js.map