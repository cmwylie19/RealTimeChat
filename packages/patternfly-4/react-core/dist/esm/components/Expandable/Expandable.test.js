import * as React from 'react';
import { shallow } from 'enzyme';
import { Expandable } from './Expandable';
const props = {};
test('Expandable', () => {
  const view = shallow(React.createElement(Expandable, props, "test "));
  expect(view).toMatchSnapshot();
});
test('Renders Expandable expanded', () => {
  const view = shallow(React.createElement(Expandable, {
    isExpanded: true
  }, " test "));
  expect(view).toMatchSnapshot();
});
test('Expandable onToggle called', () => {
  const mockfn = jest.fn();
  const view = shallow(React.createElement(Expandable, {
    onToggle: mockfn
  }, " test "));
  view.find('button').at(0).simulate('click');
  expect(mockfn.mock.calls).toHaveLength(1);
});
test('Renders Uncontrolled Expandable', () => {
  const view = shallow(React.createElement(Expandable, {
    toggleText: "Show More"
  }, " test "));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=Expandable.test.js.map