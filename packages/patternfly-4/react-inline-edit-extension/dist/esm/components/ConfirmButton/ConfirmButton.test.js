import React from 'react';
import { shallow } from 'enzyme';
import { ConfirmButton } from './index';
test('it renders properly', () => {
  const component = shallow(React.createElement(ConfirmButton, null));
  expect(component).toMatchSnapshot();
});
//# sourceMappingURL=ConfirmButton.test.js.map