function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { shallow } from 'enzyme';
import { AboutModalContainer } from './AboutModalContainer';
const props = {
  children: 'modal content',
  productName: 'Product Name',
  trademark: 'Trademark and copyright information here',
  brandImageSrc: 'brandImg...',
  brandImageAlt: 'Brand Image',
  backgroundImageSrc: 'backgroundImageSrc...',
  ariaLabelledbyId: 'ariaLablledbyId',
  ariaDescribedById: 'ariaDescribedById'
};
test('About Modal Container Test simple', () => {
  const view = shallow(React.createElement(AboutModalContainer, props, "This is ModalBox content"));
  expect(view).toMatchSnapshot();
});
test('About Modal Container Test isOpen', () => {
  const view = shallow(React.createElement(AboutModalContainer, _extends({
    title: "Test Modal Container title"
  }, props, {
    isOpen: true
  }), "This is ModalBox content"));
  expect(view).toMatchSnapshot();
});
test('About Modal Container Test with onlose', () => {
  const view = shallow(React.createElement(AboutModalContainer, _extends({
    onClose: () => undefined
  }, props), "This is ModalBox content"));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=AboutModalContainer.test.js.map