import * as React from 'react';
import { mount } from 'enzyme';
import { Split } from './Split';
import { SplitItem } from './SplitItem';
import { GutterSize } from '../../styles/gutters';
test('isFilled', () => {
  const view = mount(React.createElement(Split, null, React.createElement(SplitItem, {
    isFilled: true
  }, "Main content")));
  expect(view).toMatchSnapshot();
});
test('isFilled defaults to false', () => {
  const view = mount(React.createElement(Split, null, React.createElement(SplitItem, null, "Basic content")));
  expect(view).toMatchSnapshot();
});
Object.values(GutterSize).forEach(gutter => {
  test(`Gutter ${gutter}`, () => {
    const view = mount(React.createElement(Split, {
      gutter: gutter
    }, React.createElement(SplitItem, null, "Basic Content")));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=Split.test.js.map