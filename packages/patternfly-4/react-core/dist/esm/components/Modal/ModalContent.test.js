import * as React from 'react';
import { shallow } from 'enzyme';
import { ModalContent } from './ModalContent';
test('Modal Content Test only body', () => {
  const view = shallow(React.createElement(ModalContent, {
    title: "Test Modal Content title",
    id: "id",
    isOpen: true
  }, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});
test('Modal Content Test isOpen', () => {
  const view = shallow(React.createElement(ModalContent, {
    title: "Test Modal Content title",
    id: "id",
    isOpen: true
  }, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});
test('Modal Content Test with footer', () => {
  const view = shallow(React.createElement(ModalContent, {
    title: "Test Modal Content title",
    id: "id",
    isOpen: true,
    actions: ['Testing']
  }, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});
test('Modal Content test without footer', () => {
  const view = shallow(React.createElement(ModalContent, {
    title: "Test Modal Content title",
    id: "id",
    isOpen: true
  }, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});
test('Modal Content Test with onclose', () => {
  const view = shallow(React.createElement(ModalContent, {
    title: "Test Modal Content title",
    actions: ['Testing footer'],
    isLarge: true,
    onClose: () => undefined,
    id: "id",
    isOpen: true
  }, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});
test('Modal Test with custom header', () => {
  const header = React.createElement("span", {
    id: "test-custom-header"
  }, "TEST");
  const view = shallow(React.createElement(ModalContent, {
    header: header,
    title: "test-custom-header-modal",
    actions: ['Testing footer'],
    isLarge: true,
    onClose: () => undefined,
    id: "id",
    isOpen: true
  }, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});
test('Modal Test with custom footer', () => {
  const footer = React.createElement("span", {
    id: "test-custom-footer"
  }, "TEST");
  const view = shallow(React.createElement(ModalContent, {
    footer: footer,
    title: "Test Modal Custom Footer",
    isLarge: true,
    onClose: () => undefined,
    id: "id",
    isOpen: true
  }, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=ModalContent.test.js.map