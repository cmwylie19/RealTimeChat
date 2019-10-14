import React from 'react';
import { shallow, mount } from 'enzyme';
import { ContextSelectorItem } from './ContextSelectorItem';
test('Renders ContextSelectorItem', () => {
  const view = shallow(React.createElement(ContextSelectorItem, {
    sendRef: jest.fn(),
    index: 0
  }, "My Project"));
  expect(view).toMatchSnapshot();
});
test('Renders ContextSelectorItem disabled and hovered', () => {
  const view = shallow(React.createElement(ContextSelectorItem, {
    isDisabled: true,
    isHovered: true,
    sendRef: jest.fn(),
    index: 0
  }, "My Project"));
  expect(view).toMatchSnapshot();
});
test('Verify onClick is called ', () => {
  const mockfn = jest.fn();
  const view = mount(React.createElement(ContextSelectorItem, {
    isHovered: true,
    onClick: mockfn,
    sendRef: jest.fn(),
    index: 0
  }, "My Project"));
  view.find('button').at(0).simulate('click');
  expect(mockfn.mock.calls).toHaveLength(1);
});
//# sourceMappingURL=ContextSelectorItem.test.js.map