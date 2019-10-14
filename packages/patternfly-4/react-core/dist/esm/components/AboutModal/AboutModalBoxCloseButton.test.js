import * as React from 'react';
import { shallow } from 'enzyme';
import { AboutModalBoxCloseButton } from './AboutModalBoxCloseButton';
test('AboutModalBoxCloseButton Test', () => {
  const view = shallow(React.createElement(AboutModalBoxCloseButton, null));
  expect(view).toMatchSnapshot();
});
test('AboutModalBoxCloseButton Test onclose', () => {
  const onClose = jest.fn();
  const view = shallow(React.createElement(AboutModalBoxCloseButton, {
    onClose: onClose
  }));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=AboutModalBoxCloseButton.test.js.map