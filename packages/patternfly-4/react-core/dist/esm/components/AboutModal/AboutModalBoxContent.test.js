import * as React from 'react';
import { shallow } from 'enzyme';
import { AboutModalBoxContent } from './AboutModalBoxContent';
test('AboutModalBoxContent Test', () => {
  const view = shallow(React.createElement(AboutModalBoxContent, {
    trademark: "trademark",
    id: "id"
  }, "This is a AboutModalBoxContent"));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=AboutModalBoxContent.test.js.map