import { Button, ButtonVariant } from './Button';
import React from 'react';
import { mount } from 'enzyme';
import { CartArrowDownIcon } from '@patternfly/react-icons';
Object.values(ButtonVariant).forEach(variant => {
  test(`${variant} button`, () => {
    const view = mount(React.createElement(Button, {
      variant: variant,
      "aria-label": variant
    }, variant, " Button"));
    expect(view).toMatchSnapshot();
  });
});
test('it adds an aria-label to plain buttons', () => {
  const label = 'aria-label test';
  const view = mount(React.createElement(Button, {
    "aria-label": label
  }));
  expect(view.find('button').props()['aria-label']).toBe(label);
});
test('link with icon', () => {
  const view = mount(React.createElement(Button, {
    variant: ButtonVariant.link,
    icon: React.createElement(CartArrowDownIcon, null)
  }, "Block Button"));
  expect(view).toMatchSnapshot();
});
test('isBlock', () => {
  const view = mount(React.createElement(Button, {
    isBlock: true
  }, "Block Button"));
  expect(view).toMatchSnapshot();
});
test('isDisabled', () => {
  const view = mount(React.createElement(Button, {
    isDisabled: true
  }, "Disabled Button"));
  expect(view).toMatchSnapshot();
});
test('isFocus', () => {
  const view = mount(React.createElement(Button, {
    isFocus: true
  }, "Focused Button"));
  expect(view).toMatchSnapshot();
});
test('isHover', () => {
  const view = mount(React.createElement(Button, {
    isHover: true
  }, "Hovered Button"));
  expect(view).toMatchSnapshot();
});
test('isInline', () => {
  const view = mount(React.createElement(Button, {
    variant: ButtonVariant.link,
    isInline: true
  }, "Hovered Button"));
  expect(view).toMatchSnapshot();
});
test('allows passing in a string as the component', () => {
  const component = 'a';
  const view = mount(React.createElement(Button, {
    component: component
  }));
  expect(view.find(component).type()).toBe(component);
});
test('allows passing in a React Component as the component', () => {
  const Component = () => React.createElement("div", null, "im a div");

  const view = mount(React.createElement(Button, {
    component: Component
  }));
  expect(view.find(Component).type()).toBe(Component);
});
test('aria-disabled is set to true and tabIndex to -1 if component is not a button and is disabled', () => {
  const view = mount(React.createElement(Button, {
    component: "a",
    isDisabled: true
  }, "Disabled Anchor Button"));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=Button.test.js.map