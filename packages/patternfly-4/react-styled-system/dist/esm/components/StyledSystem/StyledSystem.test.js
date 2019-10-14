import React from 'react';
import { shallow } from 'enzyme';
import StyledBox from './StyledBox';
import StyledFlex from './StyledFlex';
import StyledText from './StyledText';
const props = {
  m: 'md',
  p: 'lg',
  fontSize: 'md',
  fontFamily: 'monospace',
  bg: 'dark_100',
  color: 'light_100'
};
test('StyledBox test', () => {
  const view = shallow(React.createElement(StyledBox, props, "Styled Box")); // Add a useful assertion here.

  expect(view).toMatchSnapshot();
});
test('StyledFlex test', () => {
  const view = shallow(React.createElement(StyledFlex, props, "Styled Flex")); // Add a useful assertion here.

  expect(view).toMatchSnapshot();
});
test('StyledText test', () => {
  const view = shallow(React.createElement(StyledText, props, "Styled Text")); // Add a useful assertion here.

  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=StyledSystem.test.js.map