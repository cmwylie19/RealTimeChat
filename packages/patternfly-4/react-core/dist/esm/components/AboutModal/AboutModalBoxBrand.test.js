import * as React from 'react';
import { shallow } from 'enzyme';
import { AboutModalBoxBrand } from './AboutModalBoxBrand';
test('test About Modal Brand', () => {
  const view = shallow(React.createElement(AboutModalBoxBrand, {
    src: "testimage..",
    alt: "brand"
  }));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=AboutModalBoxBrand.test.js.map