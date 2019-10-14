import React from 'react';
import { shallow } from 'enzyme';
import { ContextSelectorItem } from './ContextSelectorItem';
import { ContextSelectorMenuList } from './ContextSelectorMenuList';
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
test('Renders ContextSelectorMenuList open', () => {
  const view = shallow(React.createElement(ContextSelectorMenuList, {
    isOpen: false
  }, items));
  expect(view).toMatchSnapshot();
});
test('Renders ContextSelectorMenuList closed', () => {
  const view = shallow(React.createElement(ContextSelectorMenuList, {
    isOpen: false
  }, items));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=ContextSelectorMenuList.test.js.map