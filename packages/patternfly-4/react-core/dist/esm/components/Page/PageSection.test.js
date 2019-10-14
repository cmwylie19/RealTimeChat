import * as React from 'react';
import { mount } from 'enzyme';
import { PageSection, PageSectionTypes } from './PageSection';
jest.mock('./Page');
test('Check page section with no padding example against snapshot', () => {
  const Section = React.createElement(PageSection, {
    noPadding: true
  });
  const view = mount(Section);
  expect(view).toMatchSnapshot();
});
test('Check page main nav section against snapshot', () => {
  const Section = React.createElement(PageSection, {
    type: PageSectionTypes.nav
  });
  const view = mount(Section);
  expect(view).toMatchSnapshot();
});
test('Check page section with no padding on mobile example against snapshot', () => {
  const Section = React.createElement(PageSection, {
    noPaddingMobile: true
  });
  const view = mount(Section);
  expect(view).toMatchSnapshot();
});
test('Check page section with no fill example against snapshot', () => {
  const Section = React.createElement(PageSection, {
    isFilled: false
  });
  const view = mount(Section);
  expect(view).toMatchSnapshot();
});
test('Check page section with fill example against snapshot', () => {
  const Section = React.createElement(PageSection, {
    isFilled: true
  });
  const view = mount(Section);
  expect(view).toMatchSnapshot();
});
test('Check page section with fill and no padding example against snapshot', () => {
  const Section = React.createElement(PageSection, {
    isFilled: true,
    noPadding: true
  });
  const view = mount(Section);
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=PageSection.test.js.map