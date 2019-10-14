import * as React from 'react';
import { shallow } from 'enzyme';
import { LoginFooterItem } from './LoginFooterItem';
test('renders with PatternFly Core styles', () => {
  const view = shallow(React.createElement(LoginFooterItem, {
    target: "_self",
    href: "#"
  }));
  expect(view).toMatchSnapshot();
});
test('className is added to the root element', () => {
  const view = shallow(React.createElement(LoginFooterItem, {
    className: "extra-class"
  }));
  expect(view.prop('className')).toMatchSnapshot();
});
test('extra props are spread to the root element', () => {
  const testId = 'login-body';
  const view = shallow(React.createElement(LoginFooterItem, {
    "data-testid": testId
  }));
  expect(view.prop('data-testid')).toBe(testId);
});
test('LoginFooterItem  with custom node', () => {
  const CustomNode = () => React.createElement("div", null, "My custom node");

  const view = shallow(React.createElement(LoginFooterItem, null, React.createElement(CustomNode, null)));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=LoginFooterItem.test.js.map