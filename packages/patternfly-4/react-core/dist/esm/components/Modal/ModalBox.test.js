import * as React from 'react';
import { shallow } from 'enzyme';
import { ModalBox } from './ModalBox';
test('ModalBox Test', () => {
  const view = shallow(React.createElement(ModalBox, {
    title: "Test Modal Box",
    id: "boxId"
  }, "This is a ModalBox"));
  expect(view).toMatchSnapshot();
});
test('ModalBox Test isLarge', () => {
  const view = shallow(React.createElement(ModalBox, {
    title: "Test Modal Box",
    id: "boxId",
    isLarge: true
  }, "This is a ModalBox"));
  expect(view).toMatchSnapshot();
});
test('ModalBox Test isSmall', () => {
  const view = shallow(React.createElement(ModalBox, {
    title: "Test Modal Box",
    id: "boxId",
    isSmall: true
  }, "This is a ModalBox"));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=ModalBox.test.js.map