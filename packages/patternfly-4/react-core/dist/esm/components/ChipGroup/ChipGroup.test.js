import React from 'react';
import { shallow, mount } from 'enzyme';
import { Chip, ChipGroup, ChipGroupToolbarItem } from './index';
describe('ChipGroup', () => {
  test('chip group default', () => {
    const view = shallow(React.createElement(ChipGroup, null, React.createElement(Chip, null, "1.1")));
    expect(view).toMatchSnapshot();
  });
  test('chip group with toolbar', () => {
    const view = shallow(React.createElement(ChipGroup, {
      withToolbar: true
    }, React.createElement(ChipGroupToolbarItem, null, React.createElement(Chip, null, "1.1"))));
    expect(view).toMatchSnapshot();
  });
  test('chip group expanded', () => {
    const view = mount(React.createElement(ChipGroup, null, React.createElement(Chip, null, "1"), React.createElement(Chip, null, "2"), React.createElement(Chip, null, "3"), React.createElement(Chip, null, "4")));
    const overflowButton = view.find('.pf-m-overflow .pf-c-chip__text');
    expect(overflowButton.text()).toBe('1 more');
    overflowButton.simulate('click');
    expect(overflowButton.text()).toBe('Show Less');
  });
  test('chip group will not render if no children passed', () => {
    const view = shallow(React.createElement(ChipGroup, null));
    expect(view.html()).toBeNull();
  });
});
//# sourceMappingURL=ChipGroup.test.js.map