import * as React from 'react';
import { shallow } from 'enzyme';
import { InternalDropdownItem } from './InternalDropdownItem';
import { DropdownSeparator } from './Separator';
describe('dropdown items', () => {
  test('a', () => {
    const view = shallow(React.createElement(InternalDropdownItem, null, "Something"));
    expect(view).toMatchSnapshot();
  });
  test('button', () => {
    const view = shallow(React.createElement(InternalDropdownItem, {
      component: "button"
    }, "Something"));
    expect(view).toMatchSnapshot();
  });
  test('separator', () => {
    const view = shallow(React.createElement(DropdownSeparator, null));
    expect(view).toMatchSnapshot();
  });
  describe('hover', () => {
    test('a', () => {
      const view = shallow(React.createElement(InternalDropdownItem, {
        isHovered: true
      }, "Something"));
      expect(view).toMatchSnapshot();
    });
    test('button', () => {
      const view = shallow(React.createElement(InternalDropdownItem, {
        isHovered: true,
        component: "button"
      }, "Something"));
      expect(view).toMatchSnapshot();
    });
  });
  describe('disabled', () => {
    test('a', () => {
      const view = shallow(React.createElement(InternalDropdownItem, {
        isDisabled: true
      }, "Something"));
      expect(view).toMatchSnapshot();
    });
    test('button', () => {
      const view = shallow(React.createElement(InternalDropdownItem, {
        isDisabled: true,
        component: "button"
      }, "Something"));
      expect(view).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=InternalDropdownItem.test.js.map