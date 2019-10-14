import React from 'react';
import { FormHelperText } from './FormHelperText';
import { shallow } from 'enzyme';
test('renders with PatternFly Core styles', () => {
  const view = shallow(React.createElement(FormHelperText, {
    isError: true,
    isHidden: false
  }));
  expect(view).toMatchSnapshot();
});
test('className is added to the root element', () => {
  const view = shallow(React.createElement(FormHelperText, {
    className: "extra-class"
  }));
  expect(view.prop('className')).toMatchSnapshot();
});
test('extra props are spread to the root element', () => {
  const testId = 'login-body';
  const view = shallow(React.createElement(FormHelperText, {
    "data-testid": testId
  }));
  expect(view.prop('data-testid')).toBe(testId);
});
test('LoginFooterItem  with custom node', () => {
  const CustomNode = () => React.createElement("div", null, "My custom node");

  const view = shallow(React.createElement(FormHelperText, null, React.createElement(CustomNode, null)));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=FormHelperText.test.js.map