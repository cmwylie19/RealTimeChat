import * as React from 'react';
import { shallow } from 'enzyme';
import { Login } from './Login';
import { LoginFooter } from './LoginFooter';
import { LoginHeader } from './LoginHeader';
test('Check login layout example against snapshot', () => {
  const Header = React.createElement(LoginHeader, {
    headerBrand: "HeaderBrand"
  }, "Header Text");
  const Footer = React.createElement(LoginFooter, null, "Footer");
  const view = shallow(React.createElement(Login, {
    footer: Footer,
    header: Header
  }, "Main"));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=Login.test.js.map