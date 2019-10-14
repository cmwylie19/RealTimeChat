import * as React from 'react';
import { Bullseye } from './Bullseye';
import { shallow } from 'enzyme';
test('renders with PatternFly Core styles', () => {
  const view = shallow(React.createElement(Bullseye, null));
  expect(view).toMatchSnapshot();
});
test('className is added to the root element', () => {
  const view = shallow(React.createElement(Bullseye, {
    className: "extra-class"
  }));
  expect(view.prop('className')).toMatchSnapshot();
});
test('extra props are spread to the root element', () => {
  const testId = 'bullseye';
  const view = shallow(React.createElement(Bullseye, {
    "data-testid": testId
  }));
  expect(view.prop('data-testid')).toBe(testId);
});
test('allows passing in a string as the component', () => {
  const component = 'div';
  const view = shallow(React.createElement(Bullseye, {
    component: component
  }));
  expect(view.type()).toBe(component);
});
test('allows passing in a React Component as the component', () => {
  const Component = () => null;

  const view = shallow(React.createElement(Bullseye, {
    component: Component
  }));
  expect(view.type()).toBe(Component);
});
//# sourceMappingURL=Bullseye.test.js.map