import * as React from 'react';
import { shallow } from 'enzyme';
import { TitleLevel } from '../Title';
import { ModalBoxHeader } from './ModalBoxHeader';
test('ModalBoxHeader Test', () => {
  const view = shallow(React.createElement(ModalBoxHeader, null, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});
test('ModalBoxHeader Test with H3', () => {
  const view = shallow(React.createElement(ModalBoxHeader, {
    headingLevel: TitleLevel.h3
  }, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});
test('ModalBoxHeader Test hideTitle', () => {
  const view = shallow(React.createElement(ModalBoxHeader, {
    hideTitle: true
  }, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=ModalBoxHeader.test.js.map