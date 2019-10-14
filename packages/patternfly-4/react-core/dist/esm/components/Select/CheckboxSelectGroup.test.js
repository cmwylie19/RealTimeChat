import React from 'react';
import { shallow } from 'enzyme';
import { CheckboxSelectGroup } from './CheckboxSelectGroup';
describe('checkbox select options', () => {
  test('renders with children successfully', () => {
    const view = shallow(React.createElement(CheckboxSelectGroup, {
      label: "test"
    }, React.createElement("div", null, "child")));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=CheckboxSelectGroup.test.js.map