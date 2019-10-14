import * as React from 'react';
import { mount } from 'enzyme';
import { PageHeader } from './PageHeader';
jest.mock('./Page');
test('Check page vertical layout example against snapshot', () => {
  const Header = React.createElement(PageHeader, {
    logo: "Logo",
    toolbar: "Toolbar",
    avatar: " | Avatar",
    onNavToggle: () => undefined
  });
  const view = mount(Header);
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=PageHeader.test.js.map