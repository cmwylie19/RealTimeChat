import React from 'react';
import { shallow } from 'enzyme';
import { ClipboardCopyExpanded } from './ClipboardCopyExpanded';
const props = {
  className: 'class-1',
  id: 'id-1'
};
test('expanded content render', () => {
  const view = shallow(React.createElement(ClipboardCopyExpanded, props, "This is my text"));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=ClipboardCopyExpanded.test.js.map