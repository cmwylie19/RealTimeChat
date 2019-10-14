import React from 'react';
import { CardHeader } from './CardHeader';
import { shallow } from 'enzyme';
test('renders with PatternFly Core styles', () => {
  const view = shallow(React.createElement(CardHeader, null));
  expect(view).toMatchSnapshot();
});
test('className is added to the root element', () => {
  const view = shallow(React.createElement(CardHeader, {
    className: "extra-class"
  }));
  expect(view.prop('className')).toMatchSnapshot();
});
test('extra props are spread to the root element', () => {
  const testId = 'card-header';
  const view = shallow(React.createElement(CardHeader, {
    "data-testid": testId
  }));
  expect(view.prop('data-testid')).toBe(testId);
});
//# sourceMappingURL=CardHeader.test.js.map