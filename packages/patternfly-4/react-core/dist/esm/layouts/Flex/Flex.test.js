import * as React from 'react';
import { Flex } from './Flex';
import { FlexItem } from './FlexItem';
import { shallow } from 'enzyme';
test('Simple flex with single item', () => {
  const view = shallow(React.createElement(Flex, null, React.createElement(FlexItem, null, "Test")));
  expect(view).toMatchSnapshot();
});
test('Nested flex', () => {
  const view = shallow(React.createElement(Flex, null, React.createElement(Flex, null, React.createElement(FlexItem, null, "Test"))));
  expect(view).toMatchSnapshot();
});
test('className is added to the root element', () => {
  const view = shallow(React.createElement(Flex, {
    className: "extra-class"
  }));
  expect(view.prop('className')).toMatchSnapshot();
});
test('extra props are spread to the root element', () => {
  const testId = 'flex';
  const view = shallow(React.createElement(Flex, {
    "data-testid": testId
  }));
  expect(view.prop('data-testid')).toBe(testId);
});
//# sourceMappingURL=Flex.test.js.map