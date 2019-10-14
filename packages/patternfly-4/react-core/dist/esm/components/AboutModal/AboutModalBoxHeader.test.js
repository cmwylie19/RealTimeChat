import * as React from 'react';
import { shallow } from 'enzyme';
import { AboutModalBoxHeader } from './AboutModalBoxHeader';
test('AboutModalBoxHeader Test', () => {
  const view = shallow(React.createElement(AboutModalBoxHeader, {
    productName: "Product Name",
    id: "id"
  }, "This is a AboutModalBox header"));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=AboutModalBoxHeader.test.js.map