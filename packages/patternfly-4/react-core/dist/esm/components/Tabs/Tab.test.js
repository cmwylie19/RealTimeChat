import React from 'react';
import { shallow } from 'enzyme';
import { Tab } from './Tab';
test('should render tab', () => {
  const view = shallow(React.createElement(Tab, {
    eventKey: 0,
    title: "Tab item 1"
  }, "Tab 1 section"));
  expect(view).toMatchSnapshot();
});
test('should render active tab', () => {
  const view = shallow(React.createElement(Tab, {
    eventKey: 0,
    title: "Tab item 1"
  }, "Tab 1 section"));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=Tab.test.js.map