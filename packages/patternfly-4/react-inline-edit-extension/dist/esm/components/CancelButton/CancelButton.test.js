import React from 'react';
import { shallow } from 'enzyme';
import { CancelButton } from './index';
test('it renders properly', () => {
  const component = shallow(React.createElement(CancelButton, null));
  expect(component).toMatchSnapshot();
});
//# sourceMappingURL=CancelButton.test.js.map