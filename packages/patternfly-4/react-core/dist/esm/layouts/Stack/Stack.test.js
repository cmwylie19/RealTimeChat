import * as React from 'react';
import { mount } from 'enzyme';
import { Stack } from './Stack';
import { StackItem } from './StackItem';
import { GutterSize } from '../../styles/gutters';
test('isMain set to true', () => {
  const view = mount(React.createElement(Stack, null, React.createElement(StackItem, {
    isFilled: true
  }, "Filled content")));
  expect(view).toMatchSnapshot();
});
test('isMain defaults to false', () => {
  const view = mount(React.createElement(Stack, null, React.createElement(StackItem, null, "Basic content")));
  expect(view).toMatchSnapshot();
});
Object.values(GutterSize).forEach(gutter => {
  test(`Gutter ${gutter}`, () => {
    const view = mount(React.createElement(Stack, {
      gutter: gutter
    }, React.createElement(StackItem, null, "Basic content")));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=Stack.test.js.map