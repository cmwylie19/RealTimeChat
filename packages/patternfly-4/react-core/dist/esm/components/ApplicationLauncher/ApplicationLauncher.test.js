import React from 'react';
import { mount } from 'enzyme';
import { HelpIcon } from '@patternfly/react-icons';
import { ApplicationLauncher } from './ApplicationLauncher';
import { DropdownItem } from '../Dropdown/DropdownItem';
import { DropdownPosition, DropdownDirection } from '../Dropdown/dropdownConstants';
import { DropdownSeparator } from '../Dropdown/Separator';
const dropdownItems = [React.createElement(DropdownItem, {
  key: "link"
}, "Link"), React.createElement(DropdownItem, {
  key: "action",
  component: "button"
}, "Action"), React.createElement(DropdownItem, {
  key: "disabled link",
  isDisabled: true
}, "Disabled Link"), React.createElement(DropdownItem, {
  key: "disabled action",
  isDisabled: true,
  component: "button"
}, "Disabled Action"), React.createElement(DropdownSeparator, {
  key: "separator"
}), React.createElement(DropdownItem, {
  key: "separated link"
}, "Separated Link"), React.createElement(DropdownItem, {
  key: "separated action",
  component: "button"
}, "Separated Action")];
describe('ApplicationLauncher', () => {
  test('regular', () => {
    const view = mount(React.createElement(ApplicationLauncher, {
      dropdownItems: dropdownItems
    }));
    expect(view).toMatchSnapshot();
  });
  test('right aligned', () => {
    const view = mount(React.createElement(ApplicationLauncher, {
      dropdownItems: dropdownItems,
      position: DropdownPosition.right
    }));
    expect(view).toMatchSnapshot();
  });
  test('dropup', () => {
    const view = mount(React.createElement(ApplicationLauncher, {
      dropdownItems: dropdownItems,
      direction: DropdownDirection.up
    }));
    expect(view).toMatchSnapshot();
  });
  test('dropup + right aligned', () => {
    const view = mount(React.createElement(ApplicationLauncher, {
      dropdownItems: dropdownItems,
      direction: DropdownDirection.up,
      position: DropdownPosition.right
    }));
    expect(view).toMatchSnapshot();
  });
  test('expanded', () => {
    const view = mount(React.createElement(ApplicationLauncher, {
      dropdownItems: dropdownItems,
      isOpen: true
    }));
    expect(view).toMatchSnapshot();
  });
  test('custom icon', () => {
    const view = mount(React.createElement(ApplicationLauncher, {
      dropdownItems: dropdownItems,
      isOpen: true,
      toggleIcon: React.createElement(HelpIcon, {
        id: "test-icon"
      })
    }));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=ApplicationLauncher.test.js.map