import * as React from 'react';
import { shallow } from 'enzyme';
import { ModalBoxFooter } from './ModalBoxFooter';
test('ModalBoxFooter Test', () => {
  const view = shallow(React.createElement(ModalBoxFooter, {
    className: "test-box-footer-class"
  }, "This is a ModalBox Footer"));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=ModalBoxFooter.test.js.map