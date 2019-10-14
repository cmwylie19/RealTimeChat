import * as React from 'react';
import { shallow } from 'enzyme';
import { Avatar } from './Avatar';
test('simple avatar', () => {
  const view = shallow(React.createElement(Avatar, {
    alt: "avatar"
  }));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=Avatar.test.js.map