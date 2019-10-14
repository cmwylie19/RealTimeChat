import React from 'react';
import { shallow, mount } from 'enzyme';
import { ContextSelector } from './ContextSelector';
import { ContextSelectorItem } from './ContextSelectorItem';
const items = [React.createElement(ContextSelectorItem, {
  key: "0"
}, "My Project"), React.createElement(ContextSelectorItem, {
  key: "1"
}, "OpenShift Cluster"), React.createElement(ContextSelectorItem, {
  key: "2"
}, "Production Ansible"), React.createElement(ContextSelectorItem, {
  key: "3"
}, "AWS"), React.createElement(ContextSelectorItem, {
  key: "4"
}, "Azure")];
test('Renders ContextSelector', () => {
  const view = shallow(React.createElement(ContextSelector, null, " ", items, " "));
  expect(view).toMatchSnapshot();
});
test('Renders ContextSelector open', () => {
  const view = shallow(React.createElement(ContextSelector, {
    isOpen: true
  }, " ", items, " "));
  expect(view).toMatchSnapshot();
});
test('Verify onToggle is called ', () => {
  const mockfn = jest.fn();
  const view = mount(React.createElement(ContextSelector, {
    onToggle: mockfn
  }, " ", items, " "));
  view.find('button').at(0).simulate('click');
  expect(mockfn.mock.calls).toHaveLength(1);
});
//# sourceMappingURL=ContextSelector.test.js.map