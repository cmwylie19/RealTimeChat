import React from 'react';
import { shallow } from 'enzyme';
import { Backdrop } from './Backdrop';
test('Backdrop Test', () => {
  const view = shallow(React.createElement(Backdrop, null, "Backdrop"));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=Backdrop.test.js.map