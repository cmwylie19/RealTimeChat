import React from 'react';
import { CardFooter } from './CardFooter';
import { shallow } from 'enzyme';
test('renders with PatternFly Core styles', () => {
  const view = shallow(React.createElement(CardFooter, null));
  expect(view).toMatchSnapshot();
});
test('className is added to the root element', () => {
  const view = shallow(React.createElement(CardFooter, {
    className: "extra-class"
  }));
  expect(view.prop('className')).toMatchSnapshot();
});
test('extra props are spread to the root element', () => {
  const testId = 'card-footer';
  const view = shallow(React.createElement(CardFooter, {
    "data-testid": testId
  }));
  expect(view.prop('data-testid')).toBe(testId);
});
test('allows passing in a string as the component', () => {
  const component = 'div';
  const view = shallow(React.createElement(CardFooter, {
    component: component
  }));
  expect(view.type()).toBe(component);
});
test('allows passing in a React Component as the component', () => {
  const Component = () => React.createElement("div", null, "im a div");

  const view = shallow(React.createElement(CardFooter, {
    component: Component
  }));
  expect(view.type()).toBe(Component);
});
//# sourceMappingURL=CardFooter.test.js.map