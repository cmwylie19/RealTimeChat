import * as React from 'react';
import { shallow } from 'enzyme';
import { LoginMainFooterBandItem } from './LoginMainFooterBandItem';
test('renders with PatternFly Core styles', () => {
  const view = shallow(React.createElement(LoginMainFooterBandItem, null));
  expect(view).toMatchSnapshot();
});
test('className is added to the root element', () => {
  const view = shallow(React.createElement(LoginMainFooterBandItem, {
    className: "extra-class"
  }));
  expect(view.prop('className')).toMatchSnapshot();
});
test('extra props are spread to the root element', () => {
  const testId = 'login-body';
  const view = shallow(React.createElement(LoginMainFooterBandItem, {
    "data-testid": testId
  }));
  expect(view.prop('data-testid')).toBe(testId);
});
test('LoginFooterItem  with custom node', () => {
  const CustomNode = () => React.createElement("div", null, "My custom node");

  const view = shallow(React.createElement(LoginMainFooterBandItem, null, React.createElement(CustomNode, null)));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=LoginMainFooterBandItem.test.js.map