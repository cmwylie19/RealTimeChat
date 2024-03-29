import React from 'react';
import { Card } from './Card';
import { shallow } from 'enzyme';
test('renders with PatternFly Core styles', () => {
  const view = shallow(React.createElement(Card, null));
  expect(view).toMatchSnapshot();
});
test('className is added to the root element', () => {
  const view = shallow(React.createElement(Card, {
    className: "extra-class"
  }));
  expect(view.prop('className')).toMatchSnapshot();
});
test('extra props are spread to the root element', () => {
  const testId = 'card';
  const view = shallow(React.createElement(Card, {
    "data-testid": testId
  }));
  expect(view.prop('data-testid')).toBe(testId);
});
test('allows passing in a string as the component', () => {
  const component = 'section';
  const view = shallow(React.createElement(Card, {
    component: component
  }));
  expect(view.type()).toBe(component);
});
test('allows passing in a React Component as the component', () => {
  const Component = () => React.createElement("div", null, "im a div");

  const view = shallow(React.createElement(Card, {
    component: Component
  }));
  expect(view.type()).toBe(Component);
});
test('card with isHoverable applied ', () => {
  const view = shallow(React.createElement(Card, {
    isHoverable: true
  }));
  expect(view).toMatchSnapshot();
});
test('card with isCompact applied ', () => {
  const view = shallow(React.createElement(Card, {
    isCompact: true
  }));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=Card.test.js.map