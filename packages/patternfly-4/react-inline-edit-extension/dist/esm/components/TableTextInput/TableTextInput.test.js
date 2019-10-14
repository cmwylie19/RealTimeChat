function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { shallow } from 'enzyme';
import TableTextInput from './TableTextInput';
const props = {
  defaultValue: 'test',
  autoFocus: true,
  onBlur: jest.fn()
};
test('simple table text input', () => {
  const view = shallow(React.createElement(TableTextInput, {
    "aria-label": "simple text input"
  }));
  expect(view).toMatchSnapshot();
});
test('focused table text input', () => {
  const view = shallow(React.createElement(TableTextInput, _extends({}, props, {
    "aria-label": "focused text input"
  })));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=TableTextInput.test.js.map