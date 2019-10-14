import React from 'react';
import { shallow } from 'enzyme';
import { SelectGroup } from './SelectGroup';
describe('select group', () => {
  test('renders with children successfully', () => {
    const view = shallow(React.createElement(SelectGroup, {
      label: "test"
    }, React.createElement("div", null, "child")));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=SelectGroup.test.js.map