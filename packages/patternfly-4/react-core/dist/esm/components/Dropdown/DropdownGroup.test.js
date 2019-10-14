import * as React from 'react';
import { shallow } from 'enzyme';
import { DropdownGroup } from './DropdownGroup';
describe('dropdown groups', () => {
  test('basic render', () => {
    const view = shallow(React.createElement(DropdownGroup, {
      label: "Group 1"
    }, "Something"));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=DropdownGroup.test.js.map